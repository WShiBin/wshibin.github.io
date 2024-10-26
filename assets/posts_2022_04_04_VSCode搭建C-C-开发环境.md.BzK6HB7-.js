import{_ as a,c as i,a2 as s,o as e}from"./chunks/framework.DRc6tsBz.js";const t=JSON.parse('{"title":"【VSCode】VSCode搭建C/C++开发环境","description":"","frontmatter":{"title":"【VSCode】VSCode搭建C/C++开发环境","categories":"VSCode","tags":["VSCode","C","CPP"],"sidebar":false,"prev":false,"next":false,"comments":true,"date":"2022-04-04T23:43:32.000Z"},"headers":[],"relativePath":"posts/2022/04_04_VSCode搭建C-C-开发环境.md","filePath":"posts/2022/04_04_VSCode搭建C-C-开发环境.md","lastUpdated":1713886889000}');const l=a({name:"posts/2022/04_04_VSCode搭建C-C-开发环境.md"},[["render",function(a,t,l,r,n,o){return e(),i("div",null,t[0]||(t[0]=[s('<h1 id="vscode搭建c-c-开发环境" tabindex="-1">VSCode搭建C/C++开发环境 <a class="header-anchor" href="#vscode搭建c-c-开发环境" aria-label="Permalink to &quot;VSCode搭建C/C++开发环境&quot;">​</a></h1><h2 id="vscode简介" tabindex="-1">VSCode简介 <a class="header-anchor" href="#vscode简介" aria-label="Permalink to &quot;VSCode简介&quot;">​</a></h2><p>官网：<a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">https://code.visualstudio.com/</a></p><p><strong>Code editing.Redefined</strong>；Free. Built on open source. Runs everywhere.</p><h3 id="vscode的曲线救国" tabindex="-1">VSCode的曲线救国 <a class="header-anchor" href="#vscode的曲线救国" aria-label="Permalink to &quot;VSCode的曲线救国&quot;">​</a></h3><ol><li>前身 <a href="https://github.com/microsoft/monaco-editor" target="_blank" rel="noreferrer">Monaco Editor</a>（web 编辑器）2011</li><li>把Monaco Editor套在Electron（<a href="https://zh.wikipedia.org/wiki/Chromium" target="_blank" rel="noreferrer">Chromium</a> + <a href="https://zh.wikipedia.org/wiki/Node.js" target="_blank" rel="noreferrer">Node.js</a>）里面，就有了跨平台的桌面VSCode 2015</li><li><a href="https://code.visualstudio.com/docs/remote/remote-overview" target="_blank" rel="noreferrer">远程开发</a>，<a href="https://github.com/features/codespaces" target="_blank" rel="noreferrer">Github Codespaces</a>，<a href="https://vscode.dev/" target="_blank" rel="noreferrer">vscode.dev</a> 2017~</li></ol><p>视频：<a href="https://www.youtube.com/watch?v=hilznKQij7A&amp;list=PLj6YeMhvp2S6uB23beQaffszlavLq3lNq&amp;ab_channel=VisualStudioCode" target="_blank" rel="noreferrer">Keynote by Erich Gamma: VS Code an Overnight Success… 10 years in the making</a></p><h3 id="vscode定位" tabindex="-1">VSCode定位 <a class="header-anchor" href="#vscode定位" aria-label="Permalink to &quot;VSCode定位&quot;">​</a></h3><p><img src="/assets/VSCode_image-20210421004416114.DA_XjDqu.webp" alt="" loading="lazy"></p><p><strong>特性：</strong></p><ul><li>VSCode只是个前端</li><li>定标准协议<a href="https://microsoft.github.io/language-server-protocol/" target="_blank" rel="noreferrer">Language Server Protocol</a>，<a href="https://microsoft.github.io/debug-adapter-protocol/" target="_blank" rel="noreferrer">Debug Adapter Protocol</a></li><li>把功能实现插件化</li></ul><h2 id="编译器" tabindex="-1">编译器 <a class="header-anchor" href="#编译器" aria-label="Permalink to &quot;编译器&quot;">​</a></h2><p><a href="https://code.visualstudio.com/docs/languages/cpp#_tutorials" target="_blank" rel="noreferrer">https://code.visualstudio.com/docs/languages/cpp#_tutorials</a></p><p>VSCode不带编译器，不同的平台安装自己的编译器</p><ul><li><a href="https://code.visualstudio.com/docs/cpp/config-mingw" target="_blank" rel="noreferrer">GCC on Windows via MinGW</a></li><li><a href="https://code.visualstudio.com/docs/cpp/config-msvc" target="_blank" rel="noreferrer">Microsoft C++ on Windows</a></li><li><a href="https://code.visualstudio.com/docs/cpp/config-linux" target="_blank" rel="noreferrer">GCC on Linux</a></li><li><a href="https://code.visualstudio.com/docs/cpp/config-wsl" target="_blank" rel="noreferrer">GCC on Windows Subsystem For Linux</a></li><li><a href="https://code.visualstudio.com/docs/cpp/config-clang-mac" target="_blank" rel="noreferrer">Clang/LLVM on macOS</a></li></ul><h2 id="语言服务lsp" tabindex="-1">语言服务LSP <a class="header-anchor" href="#语言服务lsp" aria-label="Permalink to &quot;语言服务LSP&quot;">​</a></h2><p><strong>Language Server Protocol</strong>：<a href="https://microsoft.github.io/language-server-protocol/" target="_blank" rel="noreferrer">https://microsoft.github.io/language-server-protocol/</a></p><p><strong>IDE的特性：</strong></p><ul><li>autocomplete自动补全</li><li>goto definition转跳</li><li>documentation on hover光标放在代码上，显示文档</li><li>find all references查找引用</li><li>etc</li></ul><p>如何工作的：</p><p><img src="/assets/image-20220405164606671.BBhhBqXr.webp" alt="" loading="lazy"></p><p><strong>软件设计原则-依赖倒置原则</strong></p><blockquote><p>高层不应该依赖低层，要依赖于抽象，不要依赖于具体实现（面向接口编程）</p></blockquote><p><img src="/assets/image-20220405165341735.Bc9srJbI.webp" alt="" loading="lazy"></p><h3 id="c、cpp语言服务列表" tabindex="-1">C、CPP语言服务列表： <a class="header-anchor" href="#c、cpp语言服务列表" aria-label="Permalink to &quot;C、CPP语言服务列表：&quot;">​</a></h3><p><a href="https://microsoft.github.io/language-server-protocol/implementors/servers/" target="_blank" rel="noreferrer">https://microsoft.github.io/language-server-protocol/implementors/servers/</a></p><table tabindex="0"><thead><tr><th><strong>Language</strong></th><th><strong>Maintainer</strong></th><th><a href="https://github.com/razzmatazz/csharp-language-server" target="_blank" rel="noreferrer"><strong>Repository</strong></a></th><th><strong>Implementation Language</strong></th></tr></thead><tbody><tr><td>C++</td><td>MS</td><td><a href="https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools" target="_blank" rel="noreferrer">VS Code C++ extension</a></td><td>C++</td></tr><tr><td><a href="https://clangd.llvm.org/" target="_blank" rel="noreferrer">C++/clang</a></td><td><a href="https://llvm.org/" target="_blank" rel="noreferrer">LLVM Project</a></td><td><a href="https://github.com/llvm/llvm-project/tree/main/clang-tools-extra/clangd" target="_blank" rel="noreferrer">clangd</a></td><td>C++</td></tr><tr><td>C/C++/Objective-C</td><td><a href="https://github.com/jacobdufault" target="_blank" rel="noreferrer">Jacob Dufault</a>, <a href="https://github.com/MaskRay" target="_blank" rel="noreferrer">MaskRay</a>, <a href="https://github.com/topisani" target="_blank" rel="noreferrer">topisani</a></td><td><a href="https://github.com/jacobdufault/cquery" target="_blank" rel="noreferrer">cquery</a>（Archived）</td><td>C++</td></tr><tr><td>C/C++/Objective-C</td><td><a href="https://github.com/MaskRay" target="_blank" rel="noreferrer">MaskRay</a></td><td><a href="https://github.com/MaskRay/ccls" target="_blank" rel="noreferrer">ccls</a>（originates from <a href="https://github.com/cquery-project/cquery" target="_blank" rel="noreferrer">cquery</a>，<a href="https://github.com/MaskRay/ccls/releases/tag/0.20210330" target="_blank" rel="noreferrer">on Apr 7, 2021</a>）</td><td>C++</td></tr></tbody></table><p><strong>参考其它C、C++的IDE：</strong></p><ul><li><strong>Qt Creator 7</strong>：将默认的后端切换到Clangd。<a href="https://www.qt.io/blog/qt-creator-7-released" target="_blank" rel="noreferrer">https://www.qt.io/blog/qt-creator-7-released</a></li><li><strong>Clion</strong>（Jetbrain）：默认用Clangd。<a href="https://www.jetbrains.com/help/clion/c-support.html" target="_blank" rel="noreferrer">https://www.jetbrains.com/help/clion/c-support.html</a></li></ul><h3 id="实现c、cpp语言服务面临的问题" tabindex="-1">实现C、CPP语言服务面临的问题 <a class="header-anchor" href="#实现c、cpp语言服务面临的问题" aria-label="Permalink to &quot;实现C、CPP语言服务面临的问题&quot;">​</a></h3><ul><li>没有统一的包管理器：<a href="https://github.com/microsoft/vcpkg" target="_blank" rel="noreferrer">vcpkg</a>，<a href="https://conan.io/" target="_blank" rel="noreferrer">conan</a></li><li>构建系统build system碎片化：VS（xml配置），QT（qmake--&gt;CMake），Clion（CMake） <ul><li>要去处理不同的构建系统：<strong>项目有哪些源代码？包含了哪些头文件？依赖于哪些三方库？有哪些编译Flags？</strong></li></ul></li></ul><blockquote><p>Note：后面内容基于CMake来讲</p></blockquote><h3 id="clangd语言服务" tabindex="-1">Clangd语言服务 <a class="header-anchor" href="#clangd语言服务" aria-label="Permalink to &quot;Clangd语言服务&quot;">​</a></h3><p>文档：<a href="https://clangd.llvm.org/installation#project-setup" target="_blank" rel="noreferrer">https://clangd.llvm.org/installation#project-setup</a></p><blockquote><p>Note：VSCode的clangd插件和clangd是两个东西，虽然clangd插件才<code>v0.1.15</code>版本；clangd已经到13、14版本了</p></blockquote><p><strong>下载clangd：</strong></p><ul><li>通过VSCode的clangd插件命令：<code>&gt;clangd: Download language server</code></li><li>自行下载<a href="https://clangd.llvm.org/installation#installing-clangd" target="_blank" rel="noreferrer">clangd</a>，然后配置到<code>path</code>目录下</li></ul><p><strong>配置：</strong></p><blockquote><p>clangd如何知道我编译了哪些代码？include了哪些头文件，依赖于哪些库？有些哪些编译flags？</p></blockquote><p><code>compile_commands.json</code>配置文件：该文件为项目中的每个源文件提供编译命令</p><p><strong>如何生成：</strong></p><ul><li>命令：<code>cmake -S . -B build -DCMAKE_EXPORT_COMPILE_COMMANDS=ON</code></li><li>CMakeLists.txt文件：<code>set(CMAKE_EXPORT_COMPILE_COMMANDS ON)</code></li></ul><p>一般把这个文件生成到build目录，clangd就能找到</p><blockquote><p>Note：切换分支或是大量代码变更会导致clangd提示出问题，需要重新编译生成<code>compile_commands.json</code>配置文件；重启下clangd：<code>&gt;clangd: Restart language server</code></p></blockquote><h2 id="cmake" tabindex="-1">CMake <a class="header-anchor" href="#cmake" aria-label="Permalink to &quot;CMake&quot;">​</a></h2><p>文档：<a href="https://github.com/microsoft/vscode-cmake-tools/blob/main/docs/README.md" target="_blank" rel="noreferrer">https://github.com/microsoft/vscode-cmake-tools/blob/main/docs/README.md</a></p><p><strong>CMake Tools插件</strong>：<a href="https://marketplace.visualstudio.com/items?itemName=ms-vscode.cmake-tools" target="_blank" rel="noreferrer">https://marketplace.visualstudio.com/items?itemName=ms-vscode.cmake-tools</a></p><p><strong>常用命令：</strong></p><ul><li>初始化项目：<code>&gt;CMake: quick Start</code></li><li>Kit编译器命令：设置编译器 <ul><li>编辑本地的编译器配置：<code>&gt;CMake: Edit User-Local CMake Kits</code></li><li>搜索电脑的编译器：<code>&gt;CMake: Scan for Kits</code></li><li>选择哪个编译器：<code>&gt;CMake: Select a Kit</code></li></ul></li><li>设置编译的类型：<code>&gt;CMake: Select Variant</code>，设置CMake的<a href="https://cmake.org/cmake/help/latest/variable/CMAKE_BUILD_TYPE.html" target="_blank" rel="noreferrer">CMAKE_BUILD_TYPE</a>变量</li><li>配置：<code>&gt;CMake: Configure</code>；执行<code>cmake -S . -B build</code>命令</li><li>编译：<code>&gt;CMake: Build</code>；执行<code>cmake --build build</code>命令</li><li>清理缓存重新配置：<code>&gt;CMake: Delete Cache and Reconfigure</code></li><li>编辑CMake缓存文件：<code>${project_root}/build/CMakeCache.txt</code><ul><li><code>&gt;CMake: Edit CMake Cache</code></li><li><code>&gt;CMake: Edit CMake Cache (UI)</code></li></ul></li></ul><h2 id="debug调试dap" tabindex="-1">Debug调试DAP <a class="header-anchor" href="#debug调试dap" aria-label="Permalink to &quot;Debug调试DAP&quot;">​</a></h2><h3 id="命令行调试程序" tabindex="-1">命令行调试程序： <a class="header-anchor" href="#命令行调试程序" aria-label="Permalink to &quot;命令行调试程序：&quot;">​</a></h3><p><strong>步骤：</strong></p><ol><li>编译出带有Debug信息的程序；</li><li>用GDB或LLDB去调试程序</li></ol><p>LLDB教程：<a href="https://lldb.llvm.org/use/tutorial.html" target="_blank" rel="noreferrer">https://lldb.llvm.org/use/tutorial.html</a></p><p>todo</p><p><img src="/assets/image-20220409162446409.CXpWbX5Q.webp" alt="" loading="lazy"></p><p>本质上是GDB和LLDB程序去调试代码，VSCode只是个前端</p><ul><li>MS的C++插件：已经包含了GDB功能</li><li>LLVM的<a href="https://marketplace.visualstudio.com/items?itemName=vadimcn.vscode-lldb" target="_blank" rel="noreferrer">CodeLLDB</a> <strong>推荐</strong></li></ul><h3 id="配置" tabindex="-1">配置： <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置：&quot;">​</a></h3><p>文件：<code>.vscode/launch.json</code></p><p>调试程序的前提：编译出来的程序带有debug信息；比如加<code>-g</code>选项</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gdb</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a.out</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lldb</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a.out</span></span></code></pre></div><p><img src="/assets/image-20220409162303109.BEzo2fb4.webp" alt="" loading="lazy"></p><h3 id="调试操作" tabindex="-1">调试操作： <a class="header-anchor" href="#调试操作" aria-label="Permalink to &quot;调试操作：&quot;">​</a></h3><ul><li>Continue / Pause 继续/暂停（F5）</li><li>Step Over单步执行（F10）</li><li>Step Into进入函数（F11）</li><li>Step Out退出函数（⇧F11）</li><li>Restart重新调试（⇧⌘F5）</li><li>Stop停止调试（⇧F5）</li></ul><p>示例：</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;stdio.h&gt;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;stdlib.h&gt;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;string.h&gt;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;time.h&gt;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;unistd.h&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> random_range</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> min_num</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> max_num</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (min_num </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> max_num) {</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        exit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(EXIT_FAILURE);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ret </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> rand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (max_num </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> min_num) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> min_num;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ret;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> argc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">char*</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> argv</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">[]</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    int*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> nil </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    srand</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">time</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ret </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ret </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> random_range</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ret = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%d\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, ret);</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (ret </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 13</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;boom!</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            memcpy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(nil, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ret, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">sizeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(nil));</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // segmentation fault</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        usleep</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="其他功能" tabindex="-1">其他功能： <a class="header-anchor" href="#其他功能" aria-label="Permalink to &quot;其他功能：&quot;">​</a></h3><ul><li>Watch：监控</li><li>Call stack：函数调用栈</li><li>Debug console：用来输入命令</li></ul><h3 id="条件断点-conditional-breakpoints" tabindex="-1">条件断点：<a href="https://code.visualstudio.com/docs/editor/debugging#_conditional-breakpoints" target="_blank" rel="noreferrer">Conditional breakpoints</a> <a class="header-anchor" href="#条件断点-conditional-breakpoints" aria-label="Permalink to &quot;条件断点：[Conditional breakpoints](https://code.visualstudio.com/docs/editor/debugging#_conditional-breakpoints)&quot;">​</a></h3><ul><li><strong>条件表达式Expression condition</strong>：表达式成立的时候会断点</li><li><strong>执行次数Hit count</strong>：执行了多少次才会断点</li></ul><p><img src="/assets/hitCount._Ij6UV9F.gif" alt="" loading="lazy"></p><h2 id="代码格式化" tabindex="-1">代码格式化 <a class="header-anchor" href="#代码格式化" aria-label="Permalink to &quot;代码格式化&quot;">​</a></h2><h3 id="如何实现格式化" tabindex="-1">如何实现格式化？ <a class="header-anchor" href="#如何实现格式化" aria-label="Permalink to &quot;如何实现格式化？&quot;">​</a></h3><p><a href="https://code.visualstudio.com/docs/cpp/cpp-ide#_code-formatting" target="_blank" rel="noreferrer">https://code.visualstudio.com/docs/cpp/cpp-ide#_code-formatting</a></p><p>Clang-format：<a href="https://clang.llvm.org/docs/ClangFormat.html" target="_blank" rel="noreferrer">https://clang.llvm.org/docs/ClangFormat.html</a></p><p>MS和LLVM的格式化都是使用的clang-format</p><ul><li>MS的C/C++插件：是把clang-format程序下载到本地电脑</li><li>LLVM的clangd插件：集成到了语言服务程序clangd里面</li><li>本质上都是调用了类似于<code>clang-format -i ${file_name}</code>这样的命令：写个脚本格式代整个项目</li></ul><h3 id="clang-format配置文件" tabindex="-1"><code>.clang-format</code>配置文件 <a class="header-anchor" href="#clang-format配置文件" aria-label="Permalink to &quot;`.clang-format`配置文件&quot;">​</a></h3><p><strong>Clangd找配置文件的顺序：</strong></p><ol><li>先去同级目录找：<code>./.clang-format</code> （使用三方库，有的库会自带）</li><li>去父级目录找 --&gt; 项目根目录找：<code>${project_root}/.clang-format</code>（自己项目开发需要）</li><li>去用户根目录下找：<code>~/.clang-format</code>（自己写代码方便，不用每次去copy一份到项目里面来）</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clang-format</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -style=llvm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -dump-config</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .clang-format</span></span></code></pre></div><p>选项详细文档：<a href="https://clang.llvm.org/docs/ClangFormatStyleOptions.html" target="_blank" rel="noreferrer">https://clang.llvm.org/docs/ClangFormatStyleOptions.html</a></p><blockquote><p>Note：配置在使用的时候可能会遇到选项兼容性的问题；clang-format新版本会更新增加选项，如果新版本的.clang-format给到老版本的qt creator使用可能会遇到兼容性的问题；需要升级clang-format，qt creator使用新版本的clang-format</p></blockquote><h2 id="静态分析" tabindex="-1">静态分析 <a class="header-anchor" href="#静态分析" aria-label="Permalink to &quot;静态分析&quot;">​</a></h2><p>Clang-tidy：<a href="https://clang.llvm.org/extra/clang-tidy/" target="_blank" rel="noreferrer">https://clang.llvm.org/extra/clang-tidy/</a></p><h2 id="addresssanitizer" tabindex="-1">Addresssanitizer <a class="header-anchor" href="#addresssanitizer" aria-label="Permalink to &quot;Addresssanitizer&quot;">​</a></h2><p><a href="https://github.com/google/sanitizers/wiki/AddressSanitizer" target="_blank" rel="noreferrer">https://github.com/google/sanitizers/wiki/AddressSanitizer</a></p><ul><li><a href="https://github.com/google/sanitizers/wiki/AddressSanitizerExampleUseAfterFree" target="_blank" rel="noreferrer">Use after free</a> (dangling pointer dereference)</li><li><a href="https://github.com/google/sanitizers/wiki/AddressSanitizerExampleHeapOutOfBounds" target="_blank" rel="noreferrer">Heap buffer overflow</a></li><li><a href="https://github.com/google/sanitizers/wiki/AddressSanitizerExampleStackOutOfBounds" target="_blank" rel="noreferrer">Stack buffer overflow</a></li><li><a href="https://github.com/google/sanitizers/wiki/AddressSanitizerExampleGlobalOutOfBounds" target="_blank" rel="noreferrer">Global buffer overflow</a></li><li><a href="https://github.com/google/sanitizers/wiki/AddressSanitizerExampleUseAfterReturn" target="_blank" rel="noreferrer">Use after return</a></li><li><a href="https://github.com/google/sanitizers/wiki/AddressSanitizerExampleUseAfterScope" target="_blank" rel="noreferrer">Use after scope</a></li><li><a href="https://github.com/google/sanitizers/wiki/AddressSanitizerInitializationOrderFiasco" target="_blank" rel="noreferrer">Initialization order bugs</a></li><li><a href="https://github.com/google/sanitizers/wiki/AddressSanitizerLeakSanitizer" target="_blank" rel="noreferrer">Memory leaks</a></li></ul><h2 id="常用插件" tabindex="-1">常用插件 <a class="header-anchor" href="#常用插件" aria-label="Permalink to &quot;常用插件&quot;">​</a></h2><h3 id="相关插件安装" tabindex="-1">相关插件安装 <a class="header-anchor" href="#相关插件安装" aria-label="Permalink to &quot;相关插件安装&quot;">​</a></h3><blockquote><p>Note: 下面格式<code>C/C++ / ms-vscode.cpptools</code>，用<code>/</code>分隔，左边是插件名，右边是插件ID；用插件ID在VSCode搜索更加准确</p></blockquote><p>推荐插件安装列表：</p><ul><li>c/c++语言服务插件: <strong>（新手【不懂lsp的】不要乱装其他相关的c/c++插件，下面二者开启一个即可；如果同时开启，LLVM会把Macrosoft的禁用掉）</strong><ul><li>LLVM：clangd/llvm-vs-code-extensions.vscode-clangd （<strong>LInux平台推荐</strong>）</li><li>Macrosoft：C/C++ / ms-vscode.cpptools （<strong>Windows平台推荐</strong>）</li></ul></li><li>Debug插件:CodeLLDB/vadimcn.vscode-lldb</li><li>cmake语法插件:CMake/twxs.cmake</li><li>cmake tools插件:CMake Tools/ms-vscode.cmake-tools</li><li>一键运行单个文件插件:Code Runner/formulahendry.code-runner</li><li>自动生成注释结构:Doxygen Documentation Generator/cschlosser.doxdocgen</li><li>git增强插件:GitLens — Git supercharged/eamodio.gitlens</li><li>git ignore插件:gitignore/codezombiech.gitignore</li><li>错误增强显示插件:Error Lens/usernamehw.errorlens</li><li>图标增强:vscode-icons/vscode-icons-team.vscode-icons</li></ul><p>命令一次性安装：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>$ code --install-extension</span></span></code></pre></div>',96)]))}]]);export{t as __pageData,l as default};
