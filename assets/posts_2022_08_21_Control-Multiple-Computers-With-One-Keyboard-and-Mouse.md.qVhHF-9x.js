import{_ as e,c as a,o as r,a4 as i}from"./chunks/framework.s8d9Ue88.js";const s=JSON.parse('{"title":"【Software】Barrier:多台电脑共享一套键盘和鼠标","description":"","frontmatter":{"title":"【Software】Barrier:多台电脑共享一套键盘和鼠标","categories":"Software","tags":["Software","Barrier"],"sidebar":false,"prev":false,"next":false,"comments":true,"date":"2022-08-21T22:23:58.000Z"},"headers":[],"relativePath":"posts/2022/08_21_Control-Multiple-Computers-With-One-Keyboard-and-Mouse.md","filePath":"posts/2022/08_21_Control-Multiple-Computers-With-One-Keyboard-and-Mouse.md","lastUpdated":1713886889000}'),t={name:"posts/2022/08_21_Control-Multiple-Computers-With-One-Keyboard-and-Mouse.md"},l=[i('<h1 id="barrier-多台电脑共享一套键盘和鼠标" tabindex="-1">Barrier:多台电脑共享一套键盘和鼠标 <a class="header-anchor" href="#barrier-多台电脑共享一套键盘和鼠标" aria-label="Permalink to &quot;Barrier:多台电脑共享一套键盘和鼠标&quot;">​</a></h1><blockquote><p>公司上班会使用两台电脑：一台Ubuntu工作用主机和一台Macbook笔记本。经常需要在两套键盘和鼠标之间切换，加上Macbook的键盘很拉夸，Macbook 的键盘从2015年之后的款就非常拉；16年出的为了做轻薄，出了蝴蝶键盘，跟敲木板似的；M1芯片的mac增加了键程，但也赶不上2015款之前的版本；然后就有标题：能不能多台电脑共享一套鼠标和键盘？</p></blockquote><h2 id="方案" tabindex="-1">方案： <a class="header-anchor" href="#方案" aria-label="Permalink to &quot;方案：&quot;">​</a></h2><ul><li>远程控制</li><li>KVM切换器（硬件）</li><li>软件实现</li></ul><p>单从实现的角度讲有上面这些</p><h3 id="远程控制" tabindex="-1">远程控制 <a class="header-anchor" href="#远程控制" aria-label="Permalink to &quot;远程控制&quot;">​</a></h3><p>从体验的角度看，远程控制体验可定不太好，实现上需要传输屏幕画面+模拟硬件；体验不好的原因主要是传输屏幕画面；当然也可以去做优化，比如说：把屏幕界面切分成很多快，只传输变化了的部分界面；比如腾讯会议里面摄像头可以设置固定背景，这样只需要传输头像的部分数据；还有一个是功能是：在共享屏幕的时候只共享指定的窗口，都是为了减少数据的传输量，来增加用户体验；另外一个是对传输的图像数据进行压缩；那我们知道这些软件的工作原理之后，反过来我们就可以和它打配合，问题来了：怎么样去让这个传输的图像更利于压缩呢？一个简单的方式是：尽可能用纯色的背景，嗯，不要整些花里胡哨的。以上的底层逻辑是：像程序一样去思考</p><h3 id="kvm切换器" tabindex="-1">KVM切换器 <a class="header-anchor" href="#kvm切换器" aria-label="Permalink to &quot;KVM切换器&quot;">​</a></h3><p>KVM的全称是<code>Keyboard Video Mouse</code>，淘宝搜索可以有一堆；使用这个需要额外的硬件和线材成本，在实际的使用过程中也可能需要手动的按键去切换，麻烦</p><h3 id="软件实现" tabindex="-1">软件实现 <a class="header-anchor" href="#软件实现" aria-label="Permalink to &quot;软件实现&quot;">​</a></h3><p>网上搜索一番相应的软件也不少：</p><ul><li><a href="https://symless.com/synergy" target="_blank" rel="noreferrer">Synergy</a>，</li><li><a href="https://github.com/debauchee/barrier" target="_blank" rel="noreferrer">Barrier</a>，</li><li><a href="https://www.sharemouse.com/" target="_blank" rel="noreferrer">ShareMouse</a></li></ul><p>ShareMouse不支持Linux平台；Synergy收费，而Barrier是基于Synergy开源的<a href="https://github.com/symless/synergy-core" target="_blank" rel="noreferrer">symless/synergy-core</a> 1.9 代码，开源免费，最后选择了Barrie</p><h2 id="barrier安装" tabindex="-1">Barrier安装： <a class="header-anchor" href="#barrier安装" aria-label="Permalink to &quot;Barrier安装：&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># macOS</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> barrier</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Linux：推荐用flatpak方式安装；安装flatpack：https://flatpak.org/setup/</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> flatpak</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> flathub</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> com.github.debauchee.barrier</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">\t# install</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> flatpak</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> com.github.debauchee.barrier</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">\t\t\t\t\t\t\t# run</span></span></code></pre></div><blockquote><p>macOS遇到的问题，解决方案：去Finder中找到<code>Barrier.app</code>，按住<code>ctrl + click</code>，然后菜单中点击<code>open</code>即可</p></blockquote><img src="/assets/image-2022082154619852_PM.54369eKS.webp" style="zoom:40%;"><h2 id="配置" tabindex="-1">配置： <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置：&quot;">​</a></h2><p>打开软件后界面如下：</p><ul><li>Server端：需要共享键盘和鼠标的这台电脑使用Server模式</li><li>Client端：被控制的电脑端使用Client模式</li></ul><img src="/assets/image-2022082155629717_PM.D-_n-A00.webp" style="zoom:50%;"><h3 id="server端配置" tabindex="-1">Server端配置： <a class="header-anchor" href="#server端配置" aria-label="Permalink to &quot;Server端配置：&quot;">​</a></h3><p>点击Configure Server</p><img src="/assets/image-2022082160136397_PM.CWH4NrzD.webp" style="zoom:40%;"><p>这个用来配置屏幕的多台电脑的布局：也就是多台电脑之间屏幕的关系。上图是的IMac.local标识自己当前的台电脑</p><h4 id="添加client端电脑屏幕" tabindex="-1">添加Client端电脑屏幕： <a class="header-anchor" href="#添加client端电脑屏幕" aria-label="Permalink to &quot;添加Client端电脑屏幕：&quot;">​</a></h4><ul><li>拖动右上角的显示器图标到下面网格布局中 <ul><li>把新的显示器拖动到当前电脑屏幕的右边，表示当前鼠标可以通过右移，去操作控制另一台电脑</li></ul></li><li>双击新添加的显示器图标，编辑<code>Screen name</code>；(这个不能乱写，使用Barrier选中client模式时，自动识别出的名字）</li></ul><img src="/assets/image-2022082161430961_PM.CE6TAUuN.webp" style="zoom:40%;"><h3 id="client端配置" tabindex="-1">Client端配置： <a class="header-anchor" href="#client端配置" aria-label="Permalink to &quot;Client端配置：&quot;">​</a></h3><p>可以选择<code>Auto config</code>模式，或是自己手动填写Server端IP</p><h2 id="使用" tabindex="-1">使用： <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用：&quot;">​</a></h2><p>上面配置完了之后分别启动Server端和Client端，这样就可以共享Server端的鼠标和键盘了</p><p>另一个特点是：鼠标所在的显示器，就表示键盘能输入到哪台电脑</p><blockquote><p>Note：遇到问题开启log调试（软件菜单栏中）</p></blockquote><h2 id="体验" tabindex="-1">体验 <a class="header-anchor" href="#体验" aria-label="Permalink to &quot;体验&quot;">​</a></h2><p>在公司用了两个月，mac使用linux的键盘：</p><ul><li>支持剪切板跨电脑共享：在这台电脑上复制，在另一台电脑上粘贴，Nice。经测试：能共享复制的文本，共享不了复制的文件</li><li>mac和linux的win键和alt键不一样，可以在设置中修改：把在mac下alt和win互换</li><li>共享键盘时，使用同时按多键时的快捷键，有时会生效。可能按键事件是一个个发过去的，没有真机那么灵敏</li></ul><h2 id="ref" tabindex="-1">Ref: <a class="header-anchor" href="#ref" aria-label="Permalink to &quot;Ref:&quot;">​</a></h2><ul><li><a href="https://symless.com/guides/share-keyboard-mouse" target="_blank" rel="noreferrer">https://symless.com/guides/share-keyboard-mouse</a></li><li><a href="https://www.pcmag.com/how-to/how-to-control-multiple-computers-with-one-keyboard-and-mouse" target="_blank" rel="noreferrer">https://www.pcmag.com/how-to/how-to-control-multiple-computers-with-one-keyboard-and-mouse</a></li></ul>',39)];const o=e(t,[["render",function(e,i,s,t,o,n){return r(),a("div",null,l)}]]);export{s as __pageData,o as default};
