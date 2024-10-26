import{_ as s,c as i,a2 as a,o as n}from"./chunks/framework.DRc6tsBz.js";const h=JSON.parse('{"title":"【C】pthread_once函数","description":"","frontmatter":{"title":"【C】pthread_once函数","categories":"C","tags":["C","pthread"],"sidebar":false,"prev":false,"next":false,"comments":true,"date":"2022-09-07T22:18:20.000Z"},"headers":[],"relativePath":"posts/2022/09_07_pthread-once.md","filePath":"posts/2022/09_07_pthread-once.md","lastUpdated":1713284123000}');const l=s({name:"posts/2022/09_07_pthread-once.md"},[["render",function(s,h,l,t,p,e){return n(),i("div",null,h[0]||(h[0]=[a('<h1 id="pthread-once函数" tabindex="-1">pthread_once函数 <a class="header-anchor" href="#pthread-once函数" aria-label="Permalink to &quot;pthread_once函数&quot;">​</a></h1><blockquote><p>前些天看adb的源代码，发现很多地方用了<code>pthread_once</code>去做相应模块的初始化，就去研究了下这个函数。</p></blockquote><h2 id="需求" tabindex="-1">需求 <a class="header-anchor" href="#需求" aria-label="Permalink to &quot;需求&quot;">​</a></h2><p>在使用任何的模块，编写代码一个很常见的步骤就是：</p><ol><li>初始化</li><li>中间操作、工作代码</li><li>销毁、释放</li></ol><p>文件操作，数据库操作、va_list、cJSON、日志框架基本都是这样。现在关注点放在上面的第一步在，初始化有几种常见的处理方式：</p><ul><li>显示调用初始化</li><li>隐式调用初始化： <ul><li>在使用时，用标记记录有没有初始化</li><li><code>pthread_once</code> 函数</li><li>编译器的<code>constructor</code>、<code>destructor</code>属性</li></ul></li></ul><h2 id="显示调用初始化" tabindex="-1">显示调用初始化 <a class="header-anchor" href="#显示调用初始化" aria-label="Permalink to &quot;显示调用初始化&quot;">​</a></h2><p>这个不用说了，一般模块、框架之类的，还是建议显示的调用去初始化。另外一些常用的，类似工具类的，可以使用隐式初始化，比如Android的<a href="https://developer.android.com/reference/android/content/SharedPreferences" target="_blank" rel="noreferrer">SharedPreferences</a>、 malloc的初始化</p><h2 id="用标记记录有没有初始化" tabindex="-1">用标记记录有没有初始化 <a class="header-anchor" href="#用标记记录有没有初始化" aria-label="Permalink to &quot;用标记记录有没有初始化&quot;">​</a></h2><p>如下代码，用<code>random_is_initialized</code>记录有没有初始化，没有初始化就去执行下对应的初始化代码</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;stdio.h&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> random_is_initialized </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">extern</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> initialize_random</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> random_function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (random_is_initialized </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        initialize_random</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        random_is_initialized </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // ... /* Operations performed after initialization. */</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> argc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">char*</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> argv</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">[]</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    random_function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    random_function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();、</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // ...</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="pthread-once-函数" tabindex="-1">pthread_once 函数 <a class="header-anchor" href="#pthread-once-函数" aria-label="Permalink to &quot;pthread_once 函数&quot;">​</a></h2><p>函数原型：</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;pthread.h&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">pthread_once_t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> once_control </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PTHREAD_ONCE_INIT;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> pthread_once</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">pthread_once_t*</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> once_control</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">init_routine)(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span></code></pre></div><p>三部分组成：</p><ul><li><code>pthread_once_t</code>结构体</li><li><code>PTHREAD_ONCE_INIT</code> 初始化宏</li><li><code>pthread_once</code>函数，成功返回0，失败返回对应的错误码</li></ul><p>我最开始见到这个函数时，函数名<code>phtread_once</code>上带着<code>pthread</code>。有了我第一个疑问，</p><h3 id="开线程做初始化如何保证先后循序" tabindex="-1">开线程做初始化如何保证先后循序？ <a class="header-anchor" href="#开线程做初始化如何保证先后循序" aria-label="Permalink to &quot;开线程做初始化如何保证先后循序？&quot;">​</a></h3><p>然而，看完<code>pthrea_once</code>的文档之后，发现<code>pthrea_once</code>和<code>pthread_create</code>不一样，<code>pthread_once</code> 会<strong>等待线程的函数执行完才会返回</strong>。上面的代码就可以改成：</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;stdio.h&gt;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;pthread.h&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> pthread_once_t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> random_is_initialized </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PTHREAD_ONCE_INIT;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">extern</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> initialize_random</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> random_function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pthread_once</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">random_is_initialized, initialize_random);</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // ... /* Operations performed after initialization. */</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> argc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">char*</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> argv</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">[]</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    random_function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    random_function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>但我又有了第二个疑问</p><h3 id="线程会开辟一个函数调用栈-会不会太浪费" tabindex="-1">线程会开辟一个函数调用栈，会不会太浪费？ <a class="header-anchor" href="#线程会开辟一个函数调用栈-会不会太浪费" aria-label="Permalink to &quot;线程会开辟一个函数调用栈，会不会太浪费？&quot;">​</a></h3><p>新开线程会去分配一个默认大小的空间，来去管理函数的调用（先进后出）。这个函数只执行一个函数，会不会太浪费空间。当然，这一个函数下面会执行很多的函数，我的意思是相对于主程序，函数的调用还是相对较少。我的电脑默认栈空间大小：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ulimit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -a</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-t:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cpu</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> time</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (seconds)              unlimited</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-f:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (blocks)              unlimited</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-d:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> data</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> seg</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (kbytes)          unlimited</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-s:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stack</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (kbytes)             8192</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-c:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> core</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (blocks)         0</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-v:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> address</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> space</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (kbytes)          unlimited</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-l:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> locked-in-memory</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (kbytes)  unlimited</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-u:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> processes</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                       5568</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-n:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> descriptors</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                256</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ulimit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">8192</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#define __PTHREAD_SIZE__            8176    // pthread_t默认栈大小</span></span>\n<span class="line"><span>#define __PTHREAD_ATTR_SIZE__       56</span></span>\n<span class="line"><span>#define __PTHREAD_MUTEXATTR_SIZE__  8</span></span>\n<span class="line"><span>#define __PTHREAD_MUTEX_SIZE__      56</span></span>\n<span class="line"><span>#define __PTHREAD_CONDATTR_SIZE__   8</span></span>\n<span class="line"><span>#define __PTHREAD_COND_SIZE__       40</span></span>\n<span class="line"><span>#define __PTHREAD_ONCE_SIZE__       8       // pthread_once_t的栈大小</span></span>\n<span class="line"><span>#define __PTHREAD_RWLOCK_SIZE__     192</span></span>\n<span class="line"><span>#define __PTHREAD_RWLOCKATTR_SIZE__ 16</span></span></code></pre></div><p>最后还有一个问题</p><h3 id="init-routine在整个程序生命周期只执行了一只-怎么优化" tabindex="-1">init_routine在整个程序生命周期只执行了一只，怎么优化？ <a class="header-anchor" href="#init-routine在整个程序生命周期只执行了一只-怎么优化" aria-label="Permalink to &quot;init_routine在整个程序生命周期只执行了一只，怎么优化？&quot;">​</a></h3><p><code>pthread_once</code>函数的第二个参数<code>init_routine</code>函数指针，在整个程序的生命周期，只被执行了一次；问题是，函数每次都会执行到<code>pthread_once</code>，会去判断我这个<code>init_routine</code>函数指针有没有执行过；换种方式说，<code>pthread_once</code>函数内部一定有一个<code>if-else</code>的判断，判断这个<code>init_routine</code>函数指针有没有执行过，那么这个<code>if-else</code>如何去优化。</p><p>简化版本是这样：一个<code>while</code>死循环，里面有一个<code>if-else</code>的分支，<code>if-else</code>分支里面<code>false</code>的情况只执行过一次，其它情况都是<code>true</code>的情况，如何优化这个<code>if-else</code>。代码如下：</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;stdio.h&gt;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &lt;stdbool.h&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> bool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cond </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> argc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">char*</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> argv</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">[]</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // ...</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (cond) {</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            // handle ...</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            // init ...</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            cond </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>其实在语言层面上已经很难去做了，答案是：编译器的分支预测优化<code>__builtin_expect</code>函数 。下面是<code>pthread_once</code>代码：</p><p>源码链接：<a href="https://codebrowser.dev/glibc/glibc/nptl/pthread_once.c.html#___pthread_once" target="_blank" rel="noreferrer">https://codebrowser.dev/glibc/glibc/nptl/pthread_once.c.html#___pthread_once</a></p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">__GNUC__</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> __glibc_has_builtin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">__builtin_expect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> __glibc_unlikely</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">cond</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">__builtin_expect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((cond), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> __glibc_likely</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">cond</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">__builtin_expect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((cond), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#else</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> __glibc_unlikely</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">cond</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) (cond)</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> __glibc_likely</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">cond</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) (cond)</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#endif</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ___pthread_once</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">pthread_once_t*</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> once_control</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">init_routine)(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) {</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /* Fast path.  See __pthread_once_slow.  */</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> val;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    val </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> atomic_load_acquire</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(once_control);</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">__glibc_likely</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((val </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> __PTHREAD_ONCE_DONE) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    else</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> __pthread_once_slow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(once_control, init_routine);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>GNU GCC文档：<a href="https://gcc.gnu.org/onlinedocs/gcc/Other-Builtins.html" target="_blank" rel="noreferrer">https://gcc.gnu.org/onlinedocs/gcc/Other-Builtins.html</a> 之前写的文章：<a href="https://wshibin.github.io/2022/08/Compiler-Attributes/#builtin-expect-%E5%87%BD%E6%95%B0" target="_blank" rel="noreferrer">https://wshibin.github.io/2022/08/Compiler-Attributes/#builtin-expect-函数</a></p><h2 id="编译器的constructor、destructor属性" tabindex="-1">编译器的<code>constructor</code>、<code>destructor</code>属性 <a class="header-anchor" href="#编译器的constructor、destructor属性" aria-label="Permalink to &quot;编译器的`constructor`、`destructor`属性&quot;">​</a></h2><p>这个不重复了，之前写的文章：<a href="https://wshibin.github.io/2022/08/Compiler-Attributes/#constructor%E3%80%81destructor-%E5%B1%9E%E6%80%A7" target="_blank" rel="noreferrer">https://wshibin.github.io/2022/08/Compiler-Attributes/#constructor、destructor-属性</a></p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p><code>pthread_once</code>就是一典型场景需求推动（模块初始化），而诞生的函数功能，封装下，简化并对其进行了优化。</p>',39)]))}]]);export{h as __pageData,l as default};
