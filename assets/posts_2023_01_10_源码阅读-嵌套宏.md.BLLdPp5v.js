import{_ as s,c as i,a2 as a,o as l}from"./chunks/framework.DRc6tsBz.js";const e=JSON.parse('{"title":"【RTFC】源码阅读-嵌套宏","description":"","frontmatter":{"title":"【RTFC】源码阅读-嵌套宏","categories":"RTFC","tags":["RTFC"],"sidebar":false,"prev":false,"next":false,"comments":true,"date":"2023-01-10T21:46:23.000Z"},"headers":[],"relativePath":"posts/2023/01_10_源码阅读-嵌套宏.md","filePath":"posts/2023/01_10_源码阅读-嵌套宏.md","lastUpdated":1713886889000}');const n=s({name:"posts/2023/01_10_源码阅读-嵌套宏.md"},[["render",function(s,e,n,k,h,p){return l(),i("div",null,e[0]||(e[0]=[a('<h1 id="源码阅读-嵌套宏" tabindex="-1">源码阅读-嵌套宏 <a class="header-anchor" href="#源码阅读-嵌套宏" aria-label="Permalink to &quot;源码阅读-嵌套宏&quot;">​</a></h1><blockquote><p>在源码阅读的时候，有个非常讨厌的家伙---多层嵌套宏，简单的宏还 OK，有些多则嵌套个四五层，看代码时直接血压飙升。</p></blockquote><p>后来一想，编译器的预处理器不就是在预处理阶段把宏展开嘛？命令示例:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cc</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -E</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main.c</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main.i</span></span></code></pre></div><p>但实际上<strong>多层嵌套的宏</strong>一般会出现在大型项目里面，而不是像上面一个的单个文件当中。那问题就转变成了:怎么在编译时保留这个预处理阶段的产生的中间临时文件？或是怎么生成这样的目标文件？这里选后者-去生成目标文件，拿 CMake 的项目来举例:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 配置、编译</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cmake</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -B</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cmake</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --build</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -j</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">...</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 重点:查找对应的target 目标</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cmake</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --build</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build/lvgl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --target</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> help</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> grep</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lv_gc.i</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src/misc/lv_gc.i</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 生成对应的目标文件</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cmake</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --build</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build/lvgl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --target</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> src/misc/lv_gc.i</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /Users/shibin/repo/lv_sim_vscode_sdl_8/build</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/Library/Developer/CommandLineTools/usr/bin/make</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  -f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lvgl/CMakeFiles/lvgl.dir/build.make</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lvgl/CMakeFiles/lvgl.dir/src/misc/lv_gc.c.i</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Preprocessing</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> C</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> source</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> CMakeFiles/lvgl.dir/src/misc/lv_gc.c.i</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /Users/shibin/repo/lv_sim_vscode_sdl_8/build/lvgl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/Library/Developer/CommandLineTools/usr/bin/cc</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -DLV_CONF_INCLUDE_SIMPLE</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -DLV_LVGL_H_INCLUDE_SIMPLE</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -I/Users/shibin/repo/lv_sim_vscode_sdl_8</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -I/opt/homebrew/Cellar/sdl2/2.26.1/include</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -isystem</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /Users/shibin/repo/lv_sim_vscode_sdl_8/lvgl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -fno-omit-frame-pointer</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -fsanitize=undefined</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -fsanitize=float-cast-overflow</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -fsanitize-address-use-after-scope</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -fno-sanitize-recover</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -arch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> arm64</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -isysroot</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /Library/Developer/CommandLineTools/SDKs/MacOSX13.1.sdk</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -E</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /Users/shibin/repo/lv_sim_vscode_sdl_8/lvgl/src/misc/lv_gc.c</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> CMakeFiles/lvgl.dir/src/misc/lv_gc.c.i</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> find</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lv_gc.c.i</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./build/lvgl/CMakeFiles/lvgl.dir/src/misc/lv_gc.c.i</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> code</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./build/lvgl/CMakeFiles/lvgl.dir/src/misc/lv_gc.c.i</span></span></code></pre></div><p>CMake项目默认会生成 <code>Makefile</code> 的构建脚本，然后调用 make 去编译项目，多层嵌套的 <code>CMakeLists.txt</code> 项目就会生成多层嵌套的 <code>Makefile</code> 脚本文件。上述前面两个命令不用多解释，是 CMake 的配置和编译，编译缓存会生成在 build 目录下，build 目录下有对应的 <code>Makefile</code> 文件；重点是第三四条命令 :</p><ul><li><code>cmake --build build/lvgl --target help</code> :显示<code>build/lvgl</code>下面的 <code>Makefile</code> 里面有哪些目标；这里由于我的是多层CMake 项目，所以我去<code>build/lvgl/Makefile</code>里面去查找</li><li><code>grep lv_gc.i</code> :过滤查找 我要展开宏的源代码文件；如果文件名是<code>xxx.c</code>，对应搜索<code>xxx.i</code></li><li><code>cmake --build build/lvgl --target src/misc/lv_gc.i</code>:来去生成对应的 target 目标，就是对应源代码进行预处理的目标</li></ul><p>最后可能需要<code>find</code>搜索查找下，多层嵌套的 <code>CMakeLists.txt</code> 项目目录相对复杂点，使用搜索稳妥些。最后打开文件，代码格式化一下，立马清晰了，截图如下:生成的文件还会有源文件的行号注释（指示什么文件的多少行代码如下）</p><img src="/assets/image-20230110102350586%20PM.CiTbWbY9.webp" style="zoom:50%;"><p>那如果要展开的宏在头文件中，而不是在<code>c</code>文件中呢？把这个头文件包含<code>include</code>到另一个<code>c</code>源文件中，然后去生成这个 <code>c</code>文件的目标文件。</p>',11)]))}]]);export{e as __pageData,n as default};
