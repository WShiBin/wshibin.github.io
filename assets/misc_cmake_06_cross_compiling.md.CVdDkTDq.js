import{_ as s,c as a,o as i,a4 as e}from"./chunks/framework.s8d9Ue88.js";const l=JSON.parse('{"title":"工具链和交叉编译","description":"","frontmatter":{"title":"工具链和交叉编译","layout":"doc","categories":"CMake","tags":["CMake"],"comments":true,"date":"2021-07-06T00:56:43.000Z"},"headers":[],"relativePath":"misc/cmake/06_cross_compiling.md","filePath":"misc/cmake/06_cross_compiling.md","lastUpdated":1715174870000}'),t={name:"misc/cmake/06_cross_compiling.md"},n=[e('<h1 id="工具链和交叉编译" tabindex="-1">工具链和交叉编译 <a class="header-anchor" href="#工具链和交叉编译" aria-label="Permalink to &quot;工具链和交叉编译&quot;">​</a></h1><p>移动或嵌入式开发</p><p>CMAKE_STAGING_PREFIX</p><h2 id="工具链文件" tabindex="-1">工具链文件 <a class="header-anchor" href="#工具链文件" aria-label="Permalink to &quot;工具链文件&quot;">​</a></h2><p><code>CMAKE_TOOLCHAIN_FILE</code> 变量</p><div class="language-cmake vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cmake</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cmake -DCMAKE_TOOLCHAIN_FILE=myToolchain.cmake </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/to/source</span></span></code></pre></div><p>工具链文件必须在第一次运行CMake的构建目录时指定， 不能在之后添加或更改指向不同的工具链。因为变量本身是缓存的</p><p>工具链文件内容：</p><ul><li>描述目标系统的基本信息。</li><li>提供工具的路径(通常是编译器的路径)。</li><li>设置工具的默认标志(通常只针对编译器，也可能是链接器)。</li><li>交叉编译的情况下设置目标平台文件系统根目录的位置。</li></ul><h3 id="定义目标系统" tabindex="-1">定义目标系统 <a class="header-anchor" href="#定义目标系统" aria-label="Permalink to &quot;定义目标系统&quot;">​</a></h3><ul><li><code>CMAKE_SYSTEM_NAME</code>：描述目标平台的类型；（CMAKE_CROSSCOMPILING会被隐式的设置成true）</li><li><code>CMAKE_SYSTEM_PROCESSOR</code>：描述目标平台的硬件架构</li><li><code>CMAKE_SYSTEM_VERSION</code>：描述目标平台的SDK版本；根据不同平台来指定 <ul><li>Android：21（API level）</li><li>WindowsPhone：8.1（SDK Version）</li><li>Other：设置为1，或者不设置</li></ul></li></ul><h3 id="指定工具路径-编译器" tabindex="-1">指定工具路径（编译器） <a class="header-anchor" href="#指定工具路径-编译器" aria-label="Permalink to &quot;指定工具路径（编译器）&quot;">​</a></h3><div class="language-cmake vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cmake</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(CMAKE_C_COMPILER gcc)</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(CMAKE_CXX_COMPILER g++)</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(extraOpts </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;-Wall -Wextra&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(CMAKE_C_FLAGS_DEBUG_INIT </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">${extraOpts}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(CMAKE_CXX_FLAGS_DEBUG_INIT </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">${extraOpts}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h3 id="系统根目录" tabindex="-1">系统根目录 <a class="header-anchor" href="#系统根目录" aria-label="Permalink to &quot;系统根目录&quot;">​</a></h3>',14)];const h=s(t,[["render",function(s,e,l,t,h,p){return i(),a("div",null,n)}]]);export{l as __pageData,h as default};
