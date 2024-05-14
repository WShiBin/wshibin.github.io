import{_ as e,c as a,o as t,a4 as i}from"./chunks/framework.s8d9Ue88.js";const o=JSON.parse('{"title":"【Tools】来玩一玩件值一个亿的终端软件-Warp","description":"","frontmatter":{"title":"【Tools】来玩一玩件值一个亿的终端软件-Warp","categories":"Tools","tags":["Tools","Terminal","Warp"],"sidebar":false,"prev":false,"next":false,"comments":true,"date":"2022-04-10T15:38:47.000Z"},"headers":[],"relativePath":"posts/2022/04_10_来玩一玩件值一个亿的终端软件.md","filePath":"posts/2022/04_10_来玩一玩件值一个亿的终端软件.md","lastUpdated":1713886889000}'),s={name:"posts/2022/04_10_来玩一玩件值一个亿的终端软件.md"},l=[i('<h1 id="来玩一玩件值一个亿的终端软件-warp" tabindex="-1">来玩一玩件值一个亿的终端软件-Warp <a class="header-anchor" href="#来玩一玩件值一个亿的终端软件-warp" aria-label="Permalink to &quot;来玩一玩件值一个亿的终端软件-Warp&quot;">​</a></h1><blockquote><p>一个叫Warp的终端软件<strong>融资 2300 w 美元</strong>，<a href="https://www.warp.dev/blog/introducing-warp" target="_blank" rel="noreferrer">https://www.warp.dev/blog/introducing-warp</a></p></blockquote><h2 id="一个好的故事" tabindex="-1">一个好的故事： <a class="header-anchor" href="#一个好的故事" aria-label="Permalink to &quot;一个好的故事：&quot;">​</a></h2><blockquote><p><a href="https://www.warp.dev/blog/introducing-warp" target="_blank" rel="noreferrer">https://www.warp.dev/blog/introducing-warp</a> Walk by any developer’s desk and you are likely to see two apps open: their <strong>code editor</strong> and their <strong>terminal</strong> (sometimes the code editor is the terminal!). ‍</p><p>Both are crucial to developer productivity. The code editor is where developers write code; the terminal is where they do pretty much everything else, from building code to running and deploying it, interacting with source control, configuring their cloud systems, and more.</p><p>And yet only one of these two apps – the code editor – has experienced meaningful product improvement over the past 40 years. Compared to using VS Code, using the terminal is like stepping back in time to the 1970s. Only <a href="https://insights.stackoverflow.com/survey/2021#section-most-popular-technologies-integrated-development-environment" target="_blank" rel="noreferrer">70% of developers use VSCode</a>, while 100% use the terminal. So why is the terminal experience still so lackluster?</p></blockquote><p><strong>程序员最重要的两个工具：</strong></p><ul><li>Coder editor</li><li>Terminal：编译，运行，部署，代码版本管理，配置云服务器......</li><li>Browser浏览器</li></ul><p>Coder editor在过去40年一直在改善，而Terminal用起来还是最开始的那个样子。 个人觉得：后半句只是对了一半，提示、补全、搜索、主题都在发展，没有被整合起来</p><p><strong>现今Terminal面临的问题：</strong></p><ul><li>Terminals are hard to use难用</li><li>They don’t work for teams不是为团队协作设计的</li></ul><h2 id="特性" tabindex="-1">特性： <a class="header-anchor" href="#特性" aria-label="Permalink to &quot;特性：&quot;">​</a></h2><ul><li>Command Palette</li><li>The Input / Text Editor</li><li>Blocks</li><li>Find</li><li>Command History</li><li>Autosuggestions</li><li>Completions</li><li>Themes</li><li>Prompt</li><li>Split Panes</li><li>Session Management and Restoration</li><li>Workflows</li><li>Global Hotkey Window</li><li>A.I. Command Search</li></ul><h2 id="command-palette" tabindex="-1">Command Palette <a class="header-anchor" href="#command-palette" aria-label="Permalink to &quot;Command Palette&quot;">​</a></h2><p>快捷键：<code>CMD + P</code></p><p>Terminal上所有的功能，几本上都这个通过这个搜索框去执行，还能模糊匹配；如果忘记某些功能的快捷键了，可以通过这个来搜索</p><img src="/assets/warp_command_palette._DHGWBkX.gif" style="zoom:43%;"><p>这个功能应该是借鉴Sublime Text 、VSCode</p><h2 id="the-input-text-editor" tabindex="-1">The Input / Text Editor <a class="header-anchor" href="#the-input-text-editor" aria-label="Permalink to &quot;The Input / Text Editor&quot;">​</a></h2><img src="/assets/warp_input_editor.ouoViXN6.gif"><h2 id="blocks块" tabindex="-1">Blocks块 <a class="header-anchor" href="#blocks块" aria-label="Permalink to &quot;Blocks块&quot;">​</a></h2><p>概念：一次命令的执行称为一个块。</p><ul><li>copy命令</li><li>copy命令的输出</li><li>直接划到命令输出开始的地方</li><li>重新输入这个命令</li><li>共享这个命令和输出</li></ul><img src="/assets/warp_annotated_blocks_v2.-w0ClOMD.webp" style="zoom:50%;"><p>在Blocks之间转跳：<code>CMD-UP</code>和<code>CMD-DOWN</code>，之后按上和下就可以了</p><h2 id="find查找" tabindex="-1">Find查找 <a class="header-anchor" href="#find查找" aria-label="Permalink to &quot;Find查找&quot;">​</a></h2><ul><li>支持大小写匹配</li><li>支持锁定Blocks</li></ul><blockquote><p>可以考虑下支持正则表达式</p></blockquote><h2 id="command-history命令历史记录" tabindex="-1">Command History命令历史记录 <a class="header-anchor" href="#command-history命令历史记录" aria-label="Permalink to &quot;Command History命令历史记录&quot;">​</a></h2><p>快捷键：<code>Ctrl + R</code></p><ul><li>支持模糊匹配</li></ul><p>fzf的<code>Ctrl + R</code>搜索历史记录<a href="https://github.com/junegunn/fzf#key-bindings-for-command-line" target="_blank" rel="noreferrer">https://github.com/junegunn/fzf#key-bindings-for-command-line</a></p><h2 id="autosuggestions自动提示" tabindex="-1">Autosuggestions自动提示 <a class="header-anchor" href="#autosuggestions自动提示" aria-label="Permalink to &quot;Autosuggestions自动提示&quot;">​</a></h2><p>快捷键：<code>方向右键</code> 或 <code>CTRL-F</code>. （F：forward）</p><h2 id="completions补全" tabindex="-1">Completions补全 <a class="header-anchor" href="#completions补全" aria-label="Permalink to &quot;Completions补全&quot;">​</a></h2><p>快捷键：<code>TAB</code>，之后按上和下选择</p><h2 id="themes主题" tabindex="-1">Themes主题 <a class="header-anchor" href="#themes主题" aria-label="Permalink to &quot;Themes主题&quot;">​</a></h2><p><a href="https://github.com/warpdotdev/themes/tree/19436d99f71d6d55137bcf8f5475ea13056e7add#open-source-dependencies" target="_blank" rel="noreferrer">https://github.com/warpdotdev/themes/tree/19436d99f71d6d55137bcf8f5475ea13056e7add#open-source-dependencies</a></p><blockquote><p>We&#39;d like to call out a few of the open source themes and repositories that helped bootstrap the set of themes for Warp:</p><ul><li>iTerm colors pencil</li><li>Alacritty-theme</li><li>base16-Alacritty</li><li>base16</li><li>Solarized</li><li>Dracula</li><li>Gruvbox</li></ul></blockquote><h2 id="prompt" tabindex="-1">Prompt <a class="header-anchor" href="#prompt" aria-label="Permalink to &quot;Prompt&quot;">​</a></h2><p>分Warp和用户自定义的</p><ul><li>开启自定义：<code>Settings &gt; Features</code> 打开<code>Honor user&#39;s custom prompt (PS1) setting.</code></li></ul><p><a href="https://github.com/ohmyzsh/ohmyzsh" target="_blank" rel="noreferrer">ohmyzsh</a> + <a href="https://github.com/spaceship-prompt/spaceship-prompt" target="_blank" rel="noreferrer">spaceship prompt</a></p><h2 id="split-panes分屏" tabindex="-1">Split Panes分屏 <a class="header-anchor" href="#split-panes分屏" aria-label="Permalink to &quot;Split Panes分屏&quot;">​</a></h2><h2 id="session-management-and-restoration" tabindex="-1">Session Management and Restoration <a class="header-anchor" href="#session-management-and-restoration" aria-label="Permalink to &quot;Session Management and Restoration&quot;">​</a></h2><p>When Warp opens, it restores your session history, specifically windows, tabs, panes, and also the last few Blocks in each pane.</p><p>当打开Warp，它会恢复历史会话，窗口，Tabs，面板，以及之前的Blocks；保存到sqlite里面</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sqlite3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/Library/Application</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Support/dev.warp.Warp-Stable/warp.sqlite</span></span></code></pre></div><blockquote><p>用起来很方便；反过来，就会有隐私及安全的顾虑</p></blockquote><h2 id="workflows" tabindex="-1">Workflows <a class="header-anchor" href="#workflows" aria-label="Permalink to &quot;Workflows&quot;">​</a></h2><h2 id="global-hotkey-window" tabindex="-1">Global Hotkey Window <a class="header-anchor" href="#global-hotkey-window" aria-label="Permalink to &quot;Global Hotkey Window&quot;">​</a></h2><h2 id="a-i-command-search" tabindex="-1">A.I. Command Search <a class="header-anchor" href="#a-i-command-search" aria-label="Permalink to &quot;A.I. Command Search&quot;">​</a></h2><h2 id="安装遇到的登录校验问题" tabindex="-1">安装遇到的登录校验问题： <a class="header-anchor" href="#安装遇到的登录校验问题" aria-label="Permalink to &quot;安装遇到的登录校验问题：&quot;">​</a></h2><p>情况：用github账号登录，转跳到Warp之后卡顿，无法登录<a href="https://github.com/warpdotdev/Warp/issues/906" target="_blank" rel="noreferrer">https://github.com/warpdotdev/Warp/issues/906</a></p><ul><li>需要开代理，在命令行中配置</li><li>用命令行去启动Warp</li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在命令行里面配置代理</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> export</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> HTTP_PROXY=http://127.0.0.1:1077</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> export</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> HTTPS_PROXY=http://127.0.0.1:1077</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 启动warp</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /Applications/Warp.app/Contents/MacOS/stable</span></span></code></pre></div>',54)];const r=e(s,[["render",function(e,i,o,s,r,n){return t(),a("div",null,l)}]]);export{o as __pageData,r as default};
