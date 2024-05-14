import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.s8d9Ue88.js";const h=JSON.parse('{"title":"【C】函数回调栈跟踪","description":"","frontmatter":{"title":"【C】函数回调栈跟踪","categories":"Backtrace","tags":["C","Backtrace"],"sidebar":false,"prev":false,"next":false,"comments":true,"date":"2022-02-24T23:11:49.000Z"},"headers":[],"relativePath":"posts/2022/02_24_函数回调栈跟踪.md","filePath":"posts/2022/02_24_函数回调栈跟踪.md","lastUpdated":1713284123000}'),k={name:"posts/2022/02_24_函数回调栈跟踪.md"},l=[n('<h1 id="函数回调栈跟踪" tabindex="-1">函数回调栈跟踪 <a class="header-anchor" href="#函数回调栈跟踪" aria-label="Permalink to &quot;函数回调栈跟踪&quot;">​</a></h1><blockquote><p>上周在移植dbus，在设备上运行不起来，当然问题后面被我领导解决了；有处地方报错，在源代码里面找到了，当时我在想代码是怎么调到这里来的？怎么去跟踪函数栈的调用？类似，Java在抛出异常之后回打印出，是怎么一步步调到这里来的。写C的时候在其它地方也遇到过：GDB的backtrace命令；Valgrind跟踪内存问题的时候也会打印函数调用栈；还有<a href="https://github.com/google/sanitizers/wiki/AddressSanitizer" target="_blank" rel="noreferrer">AddressSanitizer</a>检测内存问题也能打印出来。当时去Google搜索了下，记录下</p></blockquote><p><strong>两种方式：</strong></p><ul><li>GUN拓展函数：<code>backtrace</code>，<code>backtrace_symbols</code>，<code>backtrace_symbols_fd</code></li><li>GCC编译选项：<code>-finstrument-functions</code></li></ul><h2 id="gun拓展函数" tabindex="-1">GUN拓展函数 <a class="header-anchor" href="#gun拓展函数" aria-label="Permalink to &quot;GUN拓展函数&quot;">​</a></h2><p>文档：<a href="https://man7.org/linux/man-pages/man3/backtrace.3.html" target="_blank" rel="noreferrer">https://man7.org/linux/man-pages/man3/backtrace.3.html</a></p><h3 id="api" tabindex="-1">API： <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API：&quot;">​</a></h3><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;execinfo.h&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> backtrace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> **</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">buffer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">char</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> **</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">backtrace_symbols</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *const</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">buffer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> backtrace_symbols_fd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *const</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">buffer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> fd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p><code>backtrace_symbols_fd</code>和<code>backtrace_symbols</code>的区别是，<code>backtrace_symbols_fd</code>把信息输出对应的fd，而<code>backtrace_symbols</code>把信息返回给返回值</p><h3 id="示例" tabindex="-1">示例： <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例：&quot;">​</a></h3><blockquote><p>代码就不自己写了，用的文档中的示例</p></blockquote><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;execinfo.h&gt;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;stdio.h&gt;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;stdlib.h&gt;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;unistd.h&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> BT_BUF_SIZE</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> myfunc3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    nptrs;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    void*</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  buffer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[BT_BUF_SIZE];</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    char**</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> strings;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    nptrs </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> backtrace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(buffer, BT_BUF_SIZE);</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;backtrace() returned </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> addresses</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, nptrs);</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /* The call backtrace_symbols_fd(buffer, nptrs, STDOUT_FILENO)</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">       would produce similar output to the following: */</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    strings </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> backtrace_symbols</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(buffer, nptrs);</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (strings </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        perror</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;backtrace_symbols&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        exit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(EXIT_FAILURE);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> nptrs; j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%s\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">strings</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[j]);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    free</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(strings);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* &quot;static&quot; means don&#39;t export the symbol... */</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> myfunc2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    myfunc3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> myfunc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> ncalls</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (ncalls </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        myfunc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ncalls </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    else</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        myfunc2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> argc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">char*</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> argv</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">[]</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (argc </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        fprintf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(stderr, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> num-calls</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">argv</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]);</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        exit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(EXIT_FAILURE);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    myfunc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">atoi</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">argv</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]));</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    exit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(EXIT_SUCCESS);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="输出" tabindex="-1">输出： <a class="header-anchor" href="#输出" aria-label="Permalink to &quot;输出：&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[I] ➜ cc -rdynamic main.c &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./a.out</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">backtrace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() returned 14 addresses</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   a.out</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                               0x0000000100436d3a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> myfunc3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 42</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   a.out</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                               0x0000000100436e59</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> myfunc2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 9</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   a.out</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                               0x0000000100436e4a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> myfunc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 42</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   a.out</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                               0x0000000100436e40</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> myfunc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 32</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">4</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   a.out</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                               0x0000000100436e40</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> myfunc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 32</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">5</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   a.out</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                               0x0000000100436e40</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> myfunc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 32</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">6</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   a.out</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                               0x0000000100436e40</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> myfunc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 32</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">7</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   a.out</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                               0x0000000100436e40</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> myfunc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 32</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">8</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   a.out</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                               0x0000000100436e40</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> myfunc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 32</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">9</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   a.out</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                               0x0000000100436e40</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> myfunc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 32</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">10</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  a.out</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                               0x0000000100436e40</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> myfunc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 32</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">11</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  a.out</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                               0x0000000100436e40</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> myfunc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 32</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">12</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  a.out</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                               0x0000000100436ebd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 93</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">13</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  dyld</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                                0x0000000100a354fe</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 462</span></span></code></pre></div><p>用的clang前端编译器，LLVM牛批，输出格式都比GCC的好看多了</p><p><strong>有几个值的注意的地方：</strong></p><ul><li><code>Inline</code>函数没有栈帧信息，无法打印</li><li><code>static</code>修饰的函数不会导出symbol，无法打印</li><li>另外一个是如果程序开启了优化级别，也会受到一定程度的影响</li></ul><p>然后我就一顿操作，打印，就解决了前面提到的问题；然后看了一下午dbus的代码，然后，然后，发现dbus里面已经写好了工具函数<a href="https://gitlab.freedesktop.org/dbus/dbus/-/blob/dbus-1.12/dbus/dbus-sysdeps-unix.c" target="_blank" rel="noreferrer">_dbus_print_backtrace()[dbus-sysdeps-unix.c:3417]</a>，直接调用就可以了，我tm。然后，然后默默的copy、paste到自己项目里面来。像这种十的多的年的老项目，里面还是有很多值得学习的地方，后面有时间在讲讲dbus源码</p><h2 id="gcc编译选项" tabindex="-1">GCC编译选项 <a class="header-anchor" href="#gcc编译选项" aria-label="Permalink to &quot;GCC编译选项&quot;">​</a></h2><p>// todo</p><p><a href="http://gcc.gnu.org/onlinedocs/gcc-4.4.7/gcc/Code-Gen-Options.html" target="_blank" rel="noreferrer">http://gcc.gnu.org/onlinedocs/gcc-4.4.7/gcc/Code-Gen-Options.html</a></p>',21)];const t=s(k,[["render",function(s,n,h,k,t,p){return a(),i("div",null,l)}]]);export{h as __pageData,t as default};
