import{_ as s,c as i,j as a,a as t,t as n,a4 as e,o as l}from"./chunks/framework.BcC1I4jP.js";const h=JSON.parse('{"title":"macOS","description":"","frontmatter":{"title":"macOS","tags":["macOS"],"comments":true,"date":"2023-05-29T21:50:30.000Z"},"headers":[],"relativePath":"misc/cheatsheet/macos.md","filePath":"misc/cheatsheet/macos.md","lastUpdated":1715308956000}'),p={name:"misc/cheatsheet/macos.md"},d={id:"frontmatter-title",tabindex:"-1"},r=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),k=e('<h2 id="命令列表" tabindex="-1">命令列表 <a class="header-anchor" href="#命令列表" aria-label="Permalink to &quot;命令列表&quot;">​</a></h2><ul><li>open：open files and directories</li></ul><h2 id="open" tabindex="-1">open <a class="header-anchor" href="#open" aria-label="Permalink to &quot;open&quot;">​</a></h2><p>open files and directories</p><h3 id="用法" tabindex="-1">用法 <a class="header-anchor" href="#用法" aria-label="Permalink to &quot;用法&quot;">​</a></h3><ol><li>打开目录：用finder打开</li><li>打开文件：用默认的应用打开</li><li>打开URL：用默认的浏览器打开</li><li>打开应用：用指定的应用打开 <ol><li>指定应用的路径</li><li>指定应用的bundle id</li></ol></li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 1. 打开目录：用finder打开</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> open</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $dir_name</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 2. 打开文件：用默认的应用打开</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> open</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $file_name</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> open</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $dir_name </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $app_name</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 3. 打开URL：用默认的浏览器打开</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">open</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http://www.apple.com/</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 4. 打开应用：用指定的应用打开</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#    1. 指定应用的路径</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> open</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $dir_name </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /Applications/Visual</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Studio</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Code.app</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#    2. 指定应用的bundle id</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> open</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -b</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> com.apple.TextEdit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $file_name</span></span></code></pre></div><h2 id="oh-my-zsh-macos-plugin" tabindex="-1">oh-my-zsh macos plugin <a class="header-anchor" href="#oh-my-zsh-macos-plugin" aria-label="Permalink to &quot;oh-my-zsh macos plugin&quot;">​</a></h2><p>开启：<code>.zshrc</code>文件</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">plugins</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> macos</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>常用命令：</p><table tabindex="0"><thead><tr><th>Command</th><th>Description</th></tr></thead><tbody><tr><td><code>pfd</code></td><td>Return the path of the frontmost Finder window</td></tr><tr><td><code>pfs</code></td><td>Return the current Finder selection</td></tr><tr><td><code>ofd</code></td><td>Open the current directory in a Finder window</td></tr><tr><td><code>cdf</code></td><td><code>cd</code> to the current Finder directory</td></tr><tr><td><code>man-preview</code></td><td>Open man pages in Preview app</td></tr></tbody></table>',12);const o=s(p,[["render",function(s,e,h,p,o,c){return l(),i("div",null,[a("h1",d,[t(n(s.$frontmatter.title)+" ",1),r]),k])}]]);export{h as __pageData,o as default};