import Auto from '@intuit-auto/core';
import makeCommitFromMsg from '@intuit-auto/core/dist/__tests__/make-commit-from-msg';
import Git from '@intuit-auto/core/dist/git';
import LogParse from '@intuit-auto/core/dist/log-parse';
import Release, {
  defaultLabelDefinition,
  getVersionMap
} from '@intuit-auto/core/dist/release';
import { dummyLog } from '@intuit-auto/core/dist/utils/logger';
import {
  makeHooks,
  makeLogParseHooks
} from '@intuit-auto/core/dist/utils/make-hooks';
import ConventionalCommitsPlugin from '..';

const versionLabels = getVersionMap(defaultLabelDefinition);

test('should do nothing when conventional commit message is not present', async () => {
  const conventionalCommitsPlugin = new ConventionalCommitsPlugin();
  const autoHooks = makeHooks();
  conventionalCommitsPlugin.apply({
    hooks: autoHooks,
    labels: defaultLabelDefinition,
    semVerLabels: versionLabels,
    logger: dummyLog()
  } as Auto);

  const logParseHooks = makeLogParseHooks();
  autoHooks.onCreateLogParse.call({
    hooks: logParseHooks
  } as LogParse);

  const commit = makeCommitFromMsg('normal commit with no bump');
  expect(await logParseHooks.parseCommit.promise({ ...commit })).toEqual(
    commit
  );
});

test('should add correct semver label to commit', async () => {
  const conventionalCommitsPlugin = new ConventionalCommitsPlugin();
  const autoHooks = makeHooks();
  conventionalCommitsPlugin.apply({
    hooks: autoHooks,
    labels: defaultLabelDefinition,
    semVerLabels: versionLabels,
    logger: dummyLog()
  } as Auto);

  const logParseHooks = makeLogParseHooks();
  autoHooks.onCreateLogParse.call({
    hooks: logParseHooks
  } as LogParse);

  const commit = makeCommitFromMsg('fix: normal commit with no bump');
  expect(await logParseHooks.parseCommit.promise({ ...commit })).toEqual({
    ...commit,
    labels: ['patch']
  });
});

test('should add major semver label to commit', async () => {
  const conventionalCommitsPlugin = new ConventionalCommitsPlugin();
  const autoHooks = makeHooks();
  conventionalCommitsPlugin.apply({
    hooks: autoHooks,
    labels: defaultLabelDefinition,
    semVerLabels: versionLabels,
    logger: dummyLog()
  } as Auto);

  const logParseHooks = makeLogParseHooks();
  autoHooks.onCreateLogParse.call({
    hooks: logParseHooks
  } as LogParse);

  const commit = makeCommitFromMsg('BREAKING: normal commit with no bump');
  expect(await logParseHooks.parseCommit.promise({ ...commit })).toEqual({
    ...commit,
    labels: ['major']
  });
});

test('should not include label-less head commit if any other commit in PR has conventional commit message', async () => {
  const commit = makeCommitFromMsg('Merge pull request #123 from some-pr\n\n');
  const conventionalCommitsPlugin = new ConventionalCommitsPlugin();
  const logParse = new LogParse();
  const autoHooks = makeHooks();
  const mockGit = ({
    getUserByEmail: jest.fn(),
    searchRepo: jest.fn(),
    getCommitDate: jest.fn(),
    getFirstCommit: jest.fn(),
    getPr: jest.fn(),
    getLatestRelease: () => Promise.resolve('1.2.3'),
    getGitLog: () =>
      Promise.resolve([
        commit,
        makeCommitFromMsg('fix: child commit', { hash: '1' }),
        makeCommitFromMsg('unrelated', { hash: '2' })
      ]),
    getCommitsForPR: () => Promise.resolve([{ sha: '1' }])
  } as unknown) as Git;
  conventionalCommitsPlugin.apply({
    hooks: autoHooks,
    labels: defaultLabelDefinition,
    semVerLabels: versionLabels,
    logger: dummyLog(),
    git: mockGit,
    release: new Release(mockGit)
  } as Auto);

  autoHooks.onCreateLogParse.call(logParse);

  const result = await logParse.normalizeCommit(commit);
  expect(result).toBeUndefined();
});

test('should not include labeled head commit', async () => {
  const commit = makeCommitFromMsg('Merge pull request #123 from some-pr\n\n', {
    labels: ['major']
  });
  const conventionalCommitsPlugin = new ConventionalCommitsPlugin();
  const logParse = new LogParse();
  const autoHooks = makeHooks();
  const mockGit = ({
    getUserByEmail: jest.fn(),
    searchRepo: jest.fn(),
    getCommitDate: jest.fn(),
    getFirstCommit: jest.fn(),
    getPr: jest.fn(),
    getLatestRelease: () => Promise.resolve('1.2.3'),
    getGitLog: () =>
      Promise.resolve([
        commit,
        makeCommitFromMsg('fix: child commit', { hash: '1' }),
        makeCommitFromMsg('unrelated', { hash: '2' })
      ]),
    getCommitsForPR: () => Promise.resolve([{ sha: '1' }])
  } as unknown) as Git;
  conventionalCommitsPlugin.apply({
    hooks: autoHooks,
    labels: defaultLabelDefinition,
    semVerLabels: versionLabels,
    logger: dummyLog(),
    git: mockGit,
    release: new Release(mockGit)
  } as Auto);

  autoHooks.onCreateLogParse.call(logParse);

  const result = await logParse.normalizeCommit(commit);
  expect(result).toBeDefined();
});
