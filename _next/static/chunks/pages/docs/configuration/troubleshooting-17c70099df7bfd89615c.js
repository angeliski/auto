_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[31],{"0oBi":function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.isDarkMode=function(){if(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)return!0;return!1},t.useDarkMode=function(){const[e,t]=r.default.useState(!1);return(0,o.default)((()=>{const e=window.matchMedia("(prefers-color-scheme: dark)"),a=()=>{t(window.matchMedia("(prefers-color-scheme: dark)").matches)};return a(),e.addListener(a),()=>{e.removeListener(a)}}),[]),e};var r=n(a("mXGw")),o=n(a("YO29"))},"63Ad":function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},"6f/q":function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("mXGw")),o=n(a("pWCa")),l=a("I08b"),d=a("GDok"),s=a("nZpd"),i=a("AFBu"),c=a("0oBi");var u=({children:e,...t})=>{const a=r.default.useState(!1);r.default.useEffect((()=>{if("undefined"!==typeof document)return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)};function e(e){"/"===e.key&&(document.getElementById("search").focus(),e.preventDefault())}}),[]);const n=(0,c.useDarkMode)();return r.default.createElement(s.MobileMenuContext.Provider,{value:t.menuState||a},r.default.createElement(o.default,null,r.default.createElement("link",{rel:"shortcut icon",media:"(prefers-color-scheme:dark)",href:(0,i.formatPath)(n?"favicon-dark.png":"favicon.png")})),r.default.createElement(l.SkipNavLink,null),r.default.createElement("div",{id:"ignite",className:"min-h-screen flex flex-col bg-white dark:bg-gray-1000"},r.default.createElement(d.NavBar,{sections:JSON.parse('["docs","blog"]'),hasHomePage:"true"}),e))};t.default=u},AFBu:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.formatPath=function(e){return r.default.join("/auto",`/${e.replace(/\.mdx$/,"")}`)},t.postFixHTML=function(e){return e;if(e.startsWith("#"))return e;if(r.default.basename(e).includes("#"))return e.replace("#",".html#");return`${e}.html`};var r=n(a("O2/E"))},C3pV:function(e,t,a){"use strict";(function(e){var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.Sidebar=t.SidebarActiveItem=void 0;var r=n(a("mXGw")),o=n(a("5dyF")),l=n(a("pWCa")),d=n(a("O2/E")),s=n(a("PDtE")),i=a("/FXl"),c=a("dAGg"),u=a("nZpd"),m=a("AFBu");const f=r.default.createContext({pathname:"",sidebarFileLocation:""});t.SidebarActiveItem=f;const p=({href:e,children:t})=>{const a=r.default.useContext(f),{SidebarLink:n}=(0,i.useMDXComponents)(),l=d.default.join(a.sidebarFileLocation,e);let s=e;return a.sidebarFileLocation&&(s=l,s.endsWith("/index")&&(s=s.replace("/index","")),s.endsWith("/")&&(s=s.slice(0,-1))),r.default.createElement(o.default,{passHref:!0,href:(0,m.postFixHTML)(s)},r.default.createElement(n,{isActive:a.pathname.replace("/index","")===(0,m.formatPath)(s)},t))};t.Sidebar=({links:t,folder:n})=>{const[o]=r.default.useContext(u.MobileMenuContext),h=`/${n}`,g=(e=>{try{return a("f+ue")("./pages"+e+"/_sidebar.mdx").default}catch(t){try{return a("NDOZ")("./pages"+e+"/_sidebar.js").default}catch(t){}}})(h),x=(t=>{const a=(0,c.useRouter)(),n="phase-production-build"!==e.env.NEXT_PHASE&&a.pathname.includes("/auto")?d.default.relative("/auto",a.pathname):d.default.relative("/",a.pathname);let r=t.find((e=>e.__resourcePath.replace(".mdx","")===n));return r||(r=t.find((e=>{const t=e.__resourcePath.replace(".mdx","");return t.endsWith("index")&&a.pathname.includes(t.replace("/index",""))}))),{title:r.title||"auto",pathname:(0,m.formatPath)(r.__resourcePath)}})(t),{SidebarItemWrapper:b,SidebarLink:v,SidebarTitle:E,SidebarDivider:y,SidebarList:w,Sidebar:k,...O}=(0,i.useMDXComponents)();return r.default.createElement(f.Provider,{value:{...x,sidebarFileLocation:g?h:""}},r.default.createElement(i.MDXProvider,{components:{...O,li:b,ul:w,a:p,p:E,hr:y}},r.default.createElement(l.default,null,r.default.createElement("title",null,x.title.replace(/\\`/g,"`"))),r.default.createElement(k,{className:(0,s.default)(!o&&"hidden","lg:block")},g?r.default.createElement(g,null):r.default.createElement(w,null,t.map((e=>r.default.createElement(b,{key:e.__resourcePath},r.default.createElement(p,{href:e.__resourcePath},e.title))))))))}}).call(this,a("5IsQ"))},GDok:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.NavBar=void 0;var r=n(a("8VmE")),o=n(a("mXGw")),l=n(a("5dyF")),d=a("V5Fo"),s=a("/FXl"),i=n(a("PDtE")),c=a("nZpd"),u=a("AFBu");const m=({className:e,...t})=>o.default.createElement("svg",(0,r.default)({className:(0,i.default)("fill-current w-5 h-5",e),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},t),o.default.createElement("path",{d:"M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"})),f=()=>{const{SearchInput:e}=(0,s.useMDXComponents)();return o.default.createElement("div",{className:"h-full flex items-center w-full lg:w-auto lg:flex-1 lg:mr-4 lg:pr-4"},o.default.createElement(e,null))};t.NavBar=({sections:e,hasHomePage:t})=>{const[a,n]=o.default.useContext(c.MobileMenuContext),{Logo:r,NavBarWrapper:i,NavBar:p,NavBarItem:h,MobileMenuButton:g}=(0,s.useMDXComponents)();return o.default.createElement(o.default.Fragment,null,o.default.createElement(i,null,o.default.createElement(p,null,t?o.default.createElement(l.default,{passHref:!0,href:(0,u.postFixHTML)("/index")},o.default.createElement(r,null)):o.default.createElement(r,null),o.default.createElement("div",{className:"w-full h-full flex items-center lg:flex flex-1 lg:pl-12 lg:pr-6 lg:mx-auto"},o.default.createElement(f,null),o.default.createElement(g,{open:a,setOpen:n,className:"lg:hidden"}),o.default.createElement("div",{className:"hidden lg:flex h-full"},e.map((e=>o.default.createElement(l.default,{passHref:!0,key:e,href:(0,u.postFixHTML)(`/${e}`)},o.default.createElement(h,null,(0,d.titleCase)(e))))),o.default.createElement(h,{href:"https://github.com/intuit/auto",target:"_blank","aria-label":"Open on GitHub"},o.default.createElement(m,null)))))),a&&o.default.createElement("div",{className:"lg:hidden"},e.map((e=>o.default.createElement(l.default,{passHref:!0,key:e,href:(0,u.postFixHTML)(`/${e}`)},o.default.createElement(h,null,(0,d.titleCase)(e))))),o.default.createElement(h,{href:"https://github.com/intuit/auto",target:"_blank"},o.default.createElement(m,{className:"mr-2"}),"Open on GitHub")))}},TJl4:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.OpenGraphTags=void 0;var r=n(a("mXGw")),o=a("dAGg"),l=n(a("ghLh")),d=n(a("pWCa"));t.OpenGraphTags=({title:e,description:t,image:a})=>{const n=(0,o.useRouter)(),s=(0,l.default)("https://intuit.github.io/auto",n.pathname);return r.default.createElement(d.default,null,r.default.createElement("title",null,e),t&&r.default.createElement("meta",{name:"description",content:t}),r.default.createElement("meta",{property:"og:url",content:s}),r.default.createElement("meta",{property:"og:type",content:"website"}),r.default.createElement("meta",{property:"og:title",content:e}),t&&r.default.createElement("meta",{name:"og:description",content:t}),a&&r.default.createElement("meta",{name:"og:image",content:a}),s&&r.default.createElement("meta",{property:"twitter:domain",content:new URL(s).hostname}),r.default.createElement("meta",{property:"twitter:url",content:s}),r.default.createElement("meta",{name:"twitter:title",content:e}),t&&r.default.createElement("meta",{name:"twitter:description",content:t}),a&&r.default.createElement("meta",{name:"twitter:image",content:a}))}},YEs5:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"default",(function(){return f}));var n=a("Fcif"),r=a("dV/x"),o=a("mXGw"),l=a.n(o),d=a("/FXl"),s=a("pu0P"),i=a.n(s),c=(l.a.createElement,{title:"Troubleshooting",layout:"docs",description:void 0,date:null,author:"",email:"",__resourcePath:"docs/configuration/troubleshooting.mdx",__scans:{}}),u={frontMatter:c},m=i.a;function f(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(d.mdx)(m,Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(d.mdx)("h2",{id:"error-cant-find-a-github-token-to-use"},Object(d.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#error-cant-find-a-github-token-to-use"}),"Error: Can't find a GitHub token to use")),Object(d.mdx)("p",null,"You must set a ",Object(d.mdx)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/settings/tokens"}),Object(d.mdx)("inlineCode",{parentName:"a"},"GH_TOKEN"))," for ",Object(d.mdx)("inlineCode",{parentName:"p"},"auto")," to work. If you publish to npm make sure to add your ",Object(d.mdx)("inlineCode",{parentName:"p"},"NPM_TOKEN")," while you're at it as well."),Object(d.mdx)("h2",{id:"working-directory-not-clean"},Object(d.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#working-directory-not-clean"}),"Working directory not clean")),Object(d.mdx)("p",null,"To version and publish you cannot have any changes in the git repo during publish. This means that if you build some files before release that aren't git-ignored ",Object(d.mdx)("inlineCode",{parentName:"p"},"auto")," will fail to continue. To fix this either add those ",Object(d.mdx)("inlineCode",{parentName:"p"},"dist")," files to your ",Object(d.mdx)("inlineCode",{parentName:"p"},".gitignore")," or commit them somehow before the release."),Object(d.mdx)("h2",{id:"you-cannot-publish-over-the-previously-published-versions"},Object(d.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#you-cannot-publish-over-the-previously-published-versions"}),"You cannot publish over the previously published versions")),Object(d.mdx)("p",null,"If you've encountered any of these errors you'll probably run into this problem. If the whole release process doesn't complete you can end up in a state when ",Object(d.mdx)("inlineCode",{parentName:"p"},"auto"),' published the new version, but doesn\'t push that back to github. To fix this just bump the version number to the "previously published version".'),Object(d.mdx)("h2",{id:"how-do-i-auto-a-fork-of-another-repo"},Object(d.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#how-do-i-auto-a-fork-of-another-repo"}),"How do I auto a fork of another repo?")),Object(d.mdx)("p",null,"If auto doesn't find a last release it will default to the first commit for version calculation (and a log of other things). If you have forked a repo, you fork all the merge commit messages as well. This confuses ",Object(d.mdx)("inlineCode",{parentName:"p"},"auto")," since it will look for those pull requests in your fork and not the main one."),Object(d.mdx)("p",null,"To remedy this first tag your first commit in the fork with your first version. If the tags from the original repo are still in your repo you should just bump that version. This will let ",Object(d.mdx)("inlineCode",{parentName:"p"},"auto")," ignore all the old merge commits."),Object(d.mdx)("blockquote",null,Object(d.mdx)("p",{parentName:"blockquote"},"\u26a0\ufe0f You must also match this new tag version in your package.json")),Object(d.mdx)("pre",null,Object(d.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-bash syntax-light",style:{background:"#fff"}}),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#6A737D"}}),"# Set head to last release and tag it with 2.10.1"),"\n",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#24292E"}}),"git tag v2.10.1"),"\n"),Object(d.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-bash syntax-light syntax-dark",style:{background:"#24292e"}}),Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#6A737D"}}),"# Set head to last release and tag it with 2.10.1"),"\n",Object(d.mdx)("span",Object(n.a)({parentName:"code"},{style:{color:"#E1E4E8"}}),"git tag v2.10.1"),"\n")),Object(d.mdx)("p",null,"Then on GitHub go to your project, click release, then draft a new release. Select the tag you just published and ",Object(d.mdx)("inlineCode",{parentName:"p"},"publish release"),". Now auto will be able to use the correct version and git log!"))}f.isMDXComponent=!0},e3AK:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/configuration/troubleshooting",function(){return a("YEs5")}])},nZpd:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.MobileMenuContext=void 0;const r=n(a("mXGw")).default.createContext([!1,()=>{}]);t.MobileMenuContext=r},pu0P:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("mXGw")),o=n(a("O2/E")),l=a("/FXl"),d=n(a("PDtE")),s=a("I08b"),i=a("C3pV"),c=n(a("6f/q")),u=n(a("x3GE")),m=a("TJl4");const f=/([^`]*)`([^`]*)`(.*)/m;var p=({children:e,frontMatter:t})=>{const[a,n]=r.default.useState(!1),p=(0,l.useMDXComponents)(),h=t.__resourcePath.split("/")[0],g=(0,u.default)(),x=JSON.parse('["index.mdx","blog/both-worlds.mdx","blog/npm-canary-scope.mdx","blog/pr-in-progress.mdx","blog/using-shipit.mdx","blog/v8.mdx","blog/why.mdx","docs/_sidebar.mdx","docs/index.mdx","docs/build-platforms/circleci.mdx","docs/build-platforms/github-actions.mdx","docs/build-platforms/jenkins.mdx","docs/build-platforms/travis.mdx","docs/configuration/autorc.mdx","docs/configuration/non-npm.mdx","docs/configuration/plugins.mdx","docs/configuration/troubleshooting.mdx","docs/generated/all-contributors.mdx","docs/generated/brew.mdx","docs/generated/canary.mdx","docs/generated/changelog.mdx","docs/generated/chrome.mdx","docs/generated/cocoapods.mdx","docs/generated/comment.mdx","docs/generated/conventional-commits.mdx","docs/generated/crates.mdx","docs/generated/create-labels.mdx","docs/generated/defaultLabelsRenderer.mdx","docs/generated/docker.mdx","docs/generated/exec.mdx","docs/generated/first-time-contributor.mdx","docs/generated/gem.mdx","docs/generated/gh-pages.mdx","docs/generated/git-tag.mdx","docs/generated/gradle.mdx","docs/generated/info.mdx","docs/generated/init.mdx","docs/generated/jira.mdx","docs/generated/label.mdx","docs/generated/latest.mdx","docs/generated/magic-zero.mdx","docs/generated/maven.mdx","docs/generated/microsoft-teams.mdx","docs/generated/next.mdx","docs/generated/npm.mdx","docs/generated/omit-commits.mdx","docs/generated/omit-release-notes.mdx","docs/generated/pr-body-labels.mdx","docs/generated/pr-body.mdx","docs/generated/pr-check.mdx","docs/generated/pr-status.mdx","docs/generated/release.mdx","docs/generated/released.mdx","docs/generated/s3.mdx","docs/generated/shipit.mdx","docs/generated/slack.mdx","docs/generated/twitter.mdx","docs/generated/upload-assets.mdx","docs/generated/version.mdx","docs/generated/vscode.mdx","docs/plugins/changelog-hooks.mdx","docs/plugins/configuration-hooks.mdx","docs/plugins/hook-api-docs.mdx","docs/plugins/init-hooks.mdx","docs/plugins/log-parse-hooks.mdx","docs/plugins/release-lifecycle-hooks.mdx","docs/plugins/writing-plugins.mdx","docs/plugins/writing-publishing-plugins.mdx","docs/welcome/getting-started.mdx","docs/welcome/quick-merge.mdx"]').map((e=>o.default.relative("./",e))).filter((e=>e.startsWith(h))).map((e=>g.find((t=>t.__resourcePath===e))));return r.default.createElement(r.default.Fragment,null,r.default.createElement(m.OpenGraphTags,t),r.default.createElement(c.default,{menuState:[a,n]},r.default.createElement("div",{className:"flex-1 w-full lg:max-w-6xl mx-auto flex"},r.default.createElement(i.Sidebar,{links:x,folder:h}),r.default.createElement(s.SkipNavContent,null),r.default.createElement("main",{className:(0,d.default)("DocSearch-content","pt-8 pb-16 px-4 sm:px-6 xl:px-12 lg:mx-auto w-full","flex-1 overflow-hidden","lg:block",a&&"hidden")},t.title&&r.default.createElement(p.h1,null,function(e,t){if(!t)return;const a=[];let n=t.replace(/\\`/g,"`");for(;f.test(n);){const[,t,o,l]=n.match(f);a.push(t),a.push(r.default.createElement(e.inlineCode,null,o)),n=l}return a.push(n),r.default.createElement("div",null,a)}(p,t.title)),e))))};t.default=p},x3GE:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;let n=[];try{const e=a("jmz1");n=e.keys().map(e)}catch(o){0}var r=()=>{try{return n}catch(o){return[]}};t.default=r}},[["e3AK",0,1,2,3,4]]]);