import Auto from '@intuit-auto/core';
import makeCommitFromMsg from '@intuit-auto/core/src/__tests__/make-commit-from-msg';
import { dummyLog } from '@intuit-auto/core/src/utils/logger';
import { makeHooks } from '@intuit-auto/core/src/utils/make-hooks';
import SlackPlugin from '../src';

const fetchSpy = jest.fn();
// @ts-ignore
jest.mock('node-fetch', () => (...args) => {
  fetchSpy(...args);
});

beforeEach(() => {
  fetchSpy.mockClear();
});

const mockGit = {
  options: {
    owner: 'Adam Dierkens',
    repo: 'test'
  },
  getProject: () => ({
    html_url: 'https://github.custom.com'
  })
};
const mockAuto = ({
  git: mockGit,
  logger: dummyLog()
} as unknown) as Auto;

describe('postToSlack', () => {
  test("doesn't post with no new version", async () => {
    const plugin = new SlackPlugin('https://custom-slack-url');
    const hooks = makeHooks();

    plugin.postToSlack = jest.fn();
    plugin.apply({ hooks } as Auto);

    await hooks.afterRelease.promise(undefined, [], '# My Notes');

    expect(plugin.postToSlack).not.toHaveBeenCalled();
  });

  test("doesn't post in dry run", async () => {
    const plugin = new SlackPlugin('https://custom-slack-url');
    const hooks = makeHooks();

    plugin.postToSlack = jest.fn();
    plugin.apply({ hooks, args: { dryRun: true } } as Auto);

    await hooks.afterRelease.promise('1.0.0', [], '# My Notes');

    expect(plugin.postToSlack).not.toHaveBeenCalled();
  });

  test("doesn't post with no commits", async () => {
    const plugin = new SlackPlugin('https://custom-slack-url');
    const hooks = makeHooks();

    plugin.postToSlack = jest.fn();
    plugin.apply({ hooks, args: {} } as Auto);

    await hooks.afterRelease.promise('1.0.0', [], '# My Notes');

    expect(plugin.postToSlack).not.toHaveBeenCalled();
  });

  test("doesn't post with skip release label", async () => {
    const plugin = new SlackPlugin('https://custom-slack-url');
    const hooks = makeHooks();

    plugin.postToSlack = jest.fn();
    plugin.apply({
      hooks,
      args: {},
      release: { options: { skipReleaseLabels: ['skip-release'] } }
    } as Auto);

    await hooks.afterRelease.promise(
      '1.0.0',
      [makeCommitFromMsg('skipped', { labels: ['skip-release'] })],
      '# My Notes'
    );

    expect(plugin.postToSlack).not.toHaveBeenCalled();
  });

  test("doesn't post without url", async () => {
    // @ts-ignore
    const plugin = new SlackPlugin({ url: undefined });
    const hooks = makeHooks();

    plugin.postToSlack = jest.fn();
    plugin.apply({ hooks, args: {} } as Auto);

    await expect(
      hooks.afterRelease.promise(
        '1.0.0',
        [makeCommitFromMsg('a patch')],
        '# My Notes'
      )
    ).rejects.toBeInstanceOf(Error);
  });

  test('should warn when no token', async () => {
    const plugin = new SlackPlugin('https://custom-slack-url');
    const logger = dummyLog();
    logger.verbose.warn = jest.fn();
    process.env.SLACK_TOKEN = '';

    await plugin.postToSlack(
      { ...mockAuto, logger } as Auto,
      '1.0.0',
      '# My Notes\n- PR [some link](google.com)'
    );

    expect(logger.verbose.warn).toHaveBeenCalled();
  });

  test('should call slack api with minimal config', async () => {
    const plugin = new SlackPlugin('https://custom-slack-url');
    process.env.SLACK_TOKEN = 'MY_TOKEN';

    await plugin.postToSlack(
      mockAuto,
      '1.0.0',
      '# My Notes\n- PR [some link](google.com)'
    );

    expect(fetchSpy).toHaveBeenCalled();
    expect(fetchSpy.mock.calls[0][0]).toBe(
      'https://custom-slack-url?token=MY_TOKEN'
    );
    expect(fetchSpy.mock.calls[0][1].body).toMatchSnapshot();
  });

  test('should call slack api', async () => {
    const plugin = new SlackPlugin({ url: 'https://custom-slack-url' });
    const hooks = makeHooks();
    process.env.SLACK_TOKEN = 'MY_TOKEN';
    plugin.apply({ hooks, args: {}, ...mockAuto } as Auto);

    await hooks.afterRelease.promise(
      '1.0.0',
      [makeCommitFromMsg('a patch')],
      '# My Notes\n- PR [some link](google.com)'
    );

    expect(fetchSpy).toHaveBeenCalled();
    expect(fetchSpy.mock.calls[0][0]).toBe(
      'https://custom-slack-url?token=MY_TOKEN'
    );
    expect(fetchSpy.mock.calls[0][1].body).toMatchSnapshot();
  });
});
