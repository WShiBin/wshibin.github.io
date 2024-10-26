import{_ as s,c as i,a2 as a,o as n}from"./chunks/framework.DRc6tsBz.js";const t=JSON.parse('{"title":"【Github】Github下载慢问题探究","description":"","frontmatter":{"title":"【Github】Github下载慢问题探究","categories":"Git","sidebar":false,"prev":false,"next":false,"tags":["Github","Git"],"comments":true,"date":"2020-07-18T23:00:53.000Z"},"headers":[],"relativePath":"posts/2020/07_18_Github下载慢问题探究.md","filePath":"posts/2020/07_18_Github下载慢问题探究.md","lastUpdated":1713886889000}');const h=s({name:"posts/2020/07_18_Github下载慢问题探究.md"},[["render",function(s,t,h,l,p,k){return n(),i("div",null,t[0]||(t[0]=[a('<h1 id="github下载慢问题探究" tabindex="-1">Github下载慢问题探究 <a class="header-anchor" href="#github下载慢问题探究" aria-label="Permalink to &quot;Github下载慢问题探究&quot;">​</a></h1><blockquote><p>公司对网络进行了限制,还不能开代理,Github下载的那个项目又非常大,后来对这个问题进行了思索,随记录下来</p></blockquote><p>git clone 经常是这样:17.00 KiB/s ???</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[I] ➜ git clone http://github.com/git/git git_</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Cloning</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> into</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;git&#39;...</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">warning:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> redirecting</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/git/git/</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">remote:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Enumerating</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> objects:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 289445,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> done.</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Receiving</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> objects:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   0%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (2548/289445), 1.14 MiB </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> 17.00</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> KiB/s</span></span></code></pre></div><p>抽象的归纳下,本质上是:下载一个资源慢的问题?</p><p>那下载时间的长短取决于:<strong>网速+资源大小</strong></p><h3 id="网速" tabindex="-1">网速: <a class="header-anchor" href="#网速" aria-label="Permalink to &quot;网速:&quot;">​</a></h3><blockquote><p>这里不考虑本地带宽,服务器资源带宽,p2p其它因素,这些因素影响没有那么大;</p></blockquote><p>明显Github的服务器部署在国外,这时候有两个主要的办法</p><p>**代理:**这个就不多解释了 **把仓库搬到国内:**国内码云提供了相应的功能,一键将Github的repo迁移到国内,相关文章<a href="https://blog.gitee.com/2018/06/05/github_to_gitee/" target="_blank" rel="noreferrer">https://blog.gitee.com/2018/06/05/github_to_gitee/</a></p><h3 id="资源大小" tabindex="-1">资源大小: <a class="header-anchor" href="#资源大小" aria-label="Permalink to &quot;资源大小:&quot;">​</a></h3><p>如果是平时下载一个文件,下载一个小电影之类,这里就不用讨论了,但这里是下载的一个git仓库</p><p>通常去github下载一个仓库会不加思索的:git clone url.没错,我以前就是这么干的. 这样带来什么问题,默认这样clone下来的是远程仓库的完整复制版本,带从项目创建到当前最后的提交,包括所以有远程分支.Tags</p><p>不经想问:这都是你需要的吗? 对于大多数人的需求来说,答案都是否定的</p><h4 id="git-commit-branch模型" tabindex="-1">Git commit-branch模型 <a class="header-anchor" href="#git-commit-branch模型" aria-label="Permalink to &quot;Git commit-branch模型&quot;">​</a></h4><p><img src="/assets/Xnip2020-07-18_23-56-42.CeuNsSll.webp" alt="" loading="lazy"></p><p>看完这张图,可能会说,我只想到v1.0这个版本的代码,其它有要不要无所谓; 这图并不是突显出问题,说个数据git源代码的仓库现在快有6W个commit次提交.</p><p>其实git clone也提供了相应的选项:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> help</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">\t\t--depth</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">dept</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">h</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # commit的个数,默认只clone一个分支 👍</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">\t\t--single-branch</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # clone单个分支</span></span></code></pre></div><p><strong>测试:</strong></p><p>clone全部:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[I] ➜ git clone --branch master http://github.com/git/git</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Cloning</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> into</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;git&#39;...</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">warning:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> redirecting</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/git/git/</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">remote:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Enumerating</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> objects:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 289445,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> done.</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">remote:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Total</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 289445</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (delta </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), reused 0 (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">delta</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), pack-reused 289445</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Receiving</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> objects:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 100%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (289445/289445), 139.10 MiB </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> 999.00</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> KiB/s,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> done.</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Resolving</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> deltas:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 100%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (215497/215497), done.</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Updating</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> files:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 100%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (3779/3779), done.</span></span></code></pre></div><p>clone单个branch:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[I] ➜ git clone --single-branch http://github.com/git/git git_single_branch</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Cloning</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> into</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;git_single_branch&#39;...</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">warning:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> redirecting</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/git/git/</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">remote:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Enumerating</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> objects:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 776,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> done.</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">remote:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Counting</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> objects:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 100%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (770/770), done.</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">remote:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Compressing</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> objects:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 100%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (770/770), done.</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">remote:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Total</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 281961</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (delta </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), reused 770 (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">delta</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), pack-reused 281191</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Receiving</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> objects:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 100%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (281961/281961), 134.84 MiB </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> 1.53</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> MiB/s,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> done.</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Resolving</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> deltas:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 100%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (210884/210884), done.</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Updating</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> files:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 100%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (3779/3779), done.</span></span></code></pre></div><p>clone单个commit:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[I] ➜ git clone --depth 1 http://github.com/git/git git_depth</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Cloning</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> into</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;git_depth&#39;...</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">warning:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> redirecting</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/git/git/</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">remote:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Enumerating</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> objects:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 3872,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> done.</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">remote:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Counting</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> objects:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 100%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (3872/3872), done.</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">remote:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Compressing</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> objects:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 100%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (3465/3465), done.</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">remote:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Total</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3872</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (delta </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">325</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), reused 1877 (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">delta</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 250</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), pack-reused 0</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Receiving</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> objects:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 100%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (3872/3872), 9.13 MiB </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> 660.00</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> KiB/s,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> done.</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Resolving</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> deltas:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 100%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (325/325), done.</span></span></code></pre></div><p>139.10 MiB --&gt; 9.13 MiB下载的代码从139MB降低到了9MB, nice</p><h4 id="项目为什么这么大" tabindex="-1">项目为什么这么大? <a class="header-anchor" href="#项目为什么这么大" aria-label="Permalink to &quot;项目为什么这么大?&quot;">​</a></h4><p>这时候看下这个项目目录大小, 55M ??? 不是说好的9M吗?</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[I] ➜ du -hs ./git_depth</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> 55M</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\t../git_depth</span></span></code></pre></div><p>git clone的时候其实是一系列的操作:先把远程的repo拉到本地仓库,然后把mater分支从本地仓库checkout出来,所以checkout出来的代码不会算做下载的大小.查看.git及目录的大小</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[I] ➜ du -hd1 .git</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> 10M</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\t.git/objects</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">4.0K</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\t.git/info</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> 12K</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\t.git/logs</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> 52K</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\t.git/hooks</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> 12K</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\t.git/refs</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> 11M</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\t.git</span></span></code></pre></div><p>看上去差不多了. 压缩:40M的代码 --&gt; 9M仓库里面</p><h4 id="实际的应用场景" tabindex="-1">实际的应用场景 <a class="header-anchor" href="#实际的应用场景" aria-label="Permalink to &quot;实际的应用场景&quot;">​</a></h4><ul><li>只要最新的:depth 1</li><li>需要特定tag:向前推几十个</li><li>看源码:全量下载</li></ul>',35)]))}]]);export{t as __pageData,h as default};
