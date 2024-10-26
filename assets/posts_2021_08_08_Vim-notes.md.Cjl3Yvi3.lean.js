import{_ as i,c as e,a2 as a,j as l,a as s,o as t}from"./chunks/framework.DRc6tsBz.js";const o=JSON.parse('{"title":"【Vim】Vim笔记","description":"","frontmatter":{"title":"【Vim】Vim笔记","categories":"Tools","tags":["Vim","Editor"],"sidebar":false,"prev":false,"next":false,"comments":true,"date":"2021-08-08T23:21:00.000Z"},"headers":[],"relativePath":"posts/2021/08_08_Vim-notes.md","filePath":"posts/2021/08_08_Vim-notes.md","lastUpdated":1716255528000}');const r=i({name:"posts/2021/08_08_Vim-notes.md"},[["render",function(i,o,r,n,h,c){return t(),e("div",null,o[0]||(o[0]=[a('<h1 id="vim笔记" tabindex="-1">Vim笔记 <a class="header-anchor" href="#vim笔记" aria-label="Permalink to &quot;Vim笔记&quot;">​</a></h1><h2 id="vim介绍" tabindex="-1">Vim介绍 <a class="header-anchor" href="#vim介绍" aria-label="Permalink to &quot;Vim介绍&quot;">​</a></h2><p><strong>Vim 编辑器之神, Emacs 神的编辑器</strong></p><p>官网：<a href="https://www.vim.org/" target="_blank" rel="noreferrer">https://www.vim.org/</a></p><blockquote><p>Vim is <strong>a highly configurable text editor</strong> for <strong>efficiently creating and changing any kind of text</strong>. It is included as &quot;vi&quot; with most UNIX systems and with Apple OS X.</p></blockquote><p><strong>两个关键点：</strong></p><ul><li>高度可配置（根据个人的使用习惯去修改快捷键、风格。<strong>避免花过多时间在折腾配置上</strong>）</li><li><strong>高效的编辑文本</strong></li></ul><p>Show me your .vimrc file</p><p>改配置 &lt;===&gt; 好好写代码</p><h3 id="vim作用" tabindex="-1">Vim作用 <a class="header-anchor" href="#vim作用" aria-label="Permalink to &quot;Vim作用&quot;">​</a></h3><p><strong>效率、效率、还是TM的效率</strong></p><p><img src="/assets/image-20210809004137518.BzWbyfuU.webp" alt="" loading="lazy"></p><p><strong>效率慢的原因：</strong></p><ul><li>鼠标：右手不停的在鼠标和键盘之间切换（找鼠标，移动鼠标，手归位到键盘）</li><li>小键盘/方向键盘：切换</li></ul><p><strong>小故事</strong>：乔布斯为了优化开机启动时间和相关人员沟通</p><blockquote><p>乔布斯认为当时的Mac电脑启动速度过慢。乔布斯问拉里：“如果能救人一命的话，你可以将系统启动时间缩短10秒钟么?”</p><p>乔布斯在白板上列出：如果Mac电脑卖出500万台，而每天每台机器开机多花费10秒钟，那加起来每年就要浪费大约3亿分钟，而3亿分钟至少相当于100个人的寿命!Mac电脑的市场占有率比较小，那么PC机呢，目前全世界PC机大约2亿台，如此推算，每年PC机浪费的开机时间就相当于4000人的寿命。</p></blockquote><p><strong>乔布斯的逻辑：开机浪费10秒 = 浪费100人的寿命</strong></p><p>So，高效使用Vim之后省下来的时间，相当于这是比别人多出来的生命</p><h3 id="资料" tabindex="-1">资料 <a class="header-anchor" href="#资料" aria-label="Permalink to &quot;资料&quot;">​</a></h3><p>官网：<a href="https://www.vim.org/" target="_blank" rel="noreferrer">https://www.vim.org</a></p><p>Github：<a href="https://github.com/vim/vim" target="_blank" rel="noreferrer">https://github.com/vim/vim</a></p><p>书籍：vim 实用技巧<a href="https://book.douban.com/subject/26967597/" target="_blank" rel="noreferrer">https://book.douban.com/subject/26967597/</a></p><p>推荐的 vimrc 配置：<a href="https://github.com/amix/vimrc" target="_blank" rel="noreferrer">https://github.com/amix/vimrc</a></p><h3 id="学习曲线" tabindex="-1">学习曲线 <a class="header-anchor" href="#学习曲线" aria-label="Permalink to &quot;学习曲线&quot;">​</a></h3><p><img src="/assets/image-20190403222424666.BkcvYnqG.webp" alt="" loading="lazy"></p><h3 id="vim-cheat-sheet" tabindex="-1">Vim Cheat Sheet <a class="header-anchor" href="#vim-cheat-sheet" aria-label="Permalink to &quot;Vim Cheat Sheet&quot;">​</a></h3><p><img src="/assets/image-20190403231709039.CQC3mipg.webp" alt="" loading="lazy"></p><p>学习过程中把握两个关键点：</p><ul><li>vim命令非常多，文档中列有1000多个，还能组合 <ol><li>Vim提供的功能：背下来、记下来</li><li>我要用Vim做什么：根据实际使用场景需要，针对性的找最高效的命令，然后针对练习</li></ol></li><li>类比：学打字经历的几个阶段： <ol><li>找键盘/字怎么拼：怎么去切换根式，有哪些命令可以完成同样的操作</li><li>重复练习/优化：重复练习，并在不同的场景找到最高效的vim命令</li><li>量变到质变：想表达啥的时候，手指已经在敲键盘了</li></ol></li></ul><h2 id="vim模式" tabindex="-1">Vim模式 <a class="header-anchor" href="#vim模式" aria-label="Permalink to &quot;Vim模式&quot;">​</a></h2><h3 id="模式mode" tabindex="-1">模式Mode <a class="header-anchor" href="#模式mode" aria-label="Permalink to &quot;模式Mode&quot;">​</a></h3><ul><li>普通模式 Normal mode(default mode):输入的一个或多个按键都会成是命令</li><li>插入模式 Insert mode:正常输入的编辑模式</li><li>可视模式 Visual mode:选择模式,类似拖动鼠标左键,选择内容 <ul><li>可视行模式 Visual line mode:以行为单位复制</li><li>可视块模式 Visual block mode:选择代码块</li></ul></li><li>命令行/末行模式 Command-line command:执行命令</li><li>替换模式 Replace mode:替换字符</li></ul><h3 id="模式切换" tabindex="-1">模式切换 <a class="header-anchor" href="#模式切换" aria-label="Permalink to &quot;模式切换&quot;">​</a></h3><ul><li>—&gt; 普通模式 <code>Esc/Ctrl+[</code></li><li>普通模式 —&gt; 插入模式 <code>iIaAoO</code></li><li>普通模式 —&gt; 可视模式 <code>v</code></li><li>普通模式 —&gt; 可视行模式 <code>V</code></li><li>普通模式 —&gt; 可视块模式 <code>Ctrl+v</code></li><li>普通模式 —&gt; 替换模式 <code>r/R</code></li></ul><p><img src="/assets/image-20191101103943309.CUqFhQXF.webp" alt="" loading="lazy"></p><h2 id="转跳move" tabindex="-1">转跳Move <a class="header-anchor" href="#转跳move" aria-label="Permalink to &quot;转跳Move&quot;">​</a></h2><h3 id="光标移动-move" tabindex="-1">光标移动 Move <a class="header-anchor" href="#光标移动-move" aria-label="Permalink to &quot;光标移动 Move&quot;">​</a></h3><ul><li><code>hjkl</code>：左下上右; <a href="https://catonmat.net/why-vim-uses-hjkl-as-arrow-keys" target="_blank" rel="noreferrer">Here is why vim uses hjkl keys as arrow keys</a></li><li><code>e/E</code>：移动光标到单词的末尾e(end)</li><li><code>b/B</code>：移动光标到单词的开头b(begin of the world)</li><li><code>0</code>：移动光标到行首</li><li><code>$/^</code>：移动光标到行尾/移动光标到<strong>有字符</strong>的行首</li><li><code>gg/G</code>：移动光标到文件的首行/移动光标到文件的末行</li><li><code>10G/10gg</code>：移动光标到当前文件的第10行</li><li><code>:N</code>：移动光标到当前文件的第10行</li><li><code>10%</code>：移动光标到当前文件行数的10%位置</li><li><code>H/M/L</code>：移动光标到当前可见页面代码的high/middle/low</li><li><code>%</code>：匹配()/[]/{} <ul><li>如果光标在括号上,就会转跳到与之匹配的的括号上</li><li>如果光标没有在括号上,就会在当前行, 正向搜索第一个括号,转跳到与这个括号匹配括号的位置</li></ul></li><li><code>Ctrl + ] / Ctrl + O / Ctrl + I</code>：转跳到代码定义/跳出来(out)/跳回去(in)</li><li><code>[[ / ]] / [] / ][</code>：</li></ul><h3 id="搜索-search" tabindex="-1">搜索 Search <a class="header-anchor" href="#搜索-search" aria-label="Permalink to &quot;搜索 Search&quot;">​</a></h3><ul><li><code>/words</code>：在当前文件中, 向后搜索单词words</li><li><code>?words</code>：在当前文件中, 向前搜索单词words</li><li><code>n/N</code>：正向/反向的重复上一次搜索</li><li><code>#/*</code>：在当前文件中, 正向/反向搜索光标位置的字符串</li><li><code>f{char}/t{char}</code>：在当前行,正向搜索字符char, <ul><li><code>f{char}</code>:搜索到字符之前,光标转跳到char的位置</li><li><code>t{char}</code>:搜索到字符之后,光标转跳到char的前一个位置</li></ul></li><li><code>F{char}/T{char}</code>：在当前行,返回搜索字符char <ul><li><code>F{char}</code>:搜索到字符之前,光标转跳到char的位置</li><li><code>T{char}</code>:搜索到字符之后,光标转跳到char的<strong>前</strong>一个位置(搜索路径上的前一个位置,其实是char的后一个位置)</li></ul></li><li><code>;/,</code>：重复上一次<code>f{char}/t{char}/F{char}/T{char}</code>的查找</li></ul><h2 id="命令command" tabindex="-1">命令Command <a class="header-anchor" href="#命令command" aria-label="Permalink to &quot;命令Command&quot;">​</a></h2><h3 id="修改-change" tabindex="-1">修改 Change <a class="header-anchor" href="#修改-change" aria-label="Permalink to &quot;修改 Change&quot;">​</a></h3><ul><li><code>C</code>：修改光标到行尾的字符字符, 然后进入插入模式</li><li><code>cc/S</code>：修改光标所在行的所有字符, 然后进入插入模式</li><li><code>s</code>：删除光标位置的字符, 然后进入插入模式</li></ul><h3 id="删除-delete" tabindex="-1">删除 Delete <a class="header-anchor" href="#删除-delete" aria-label="Permalink to &quot;删除 Delete&quot;">​</a></h3><ul><li><code>x</code>：删除光标位置的字符, 模式不变</li><li><code>D</code>：修改光标到行尾的字符字, 模式不变</li><li><code>dd</code>：修改光标所在行的所有字符, 模式不变</li><li><code>3dd/d3d</code>：正向删除3行, 模式不变</li></ul><h3 id="选择-可视-v-v-ctrl-v" tabindex="-1">选择(可视) v/V/Ctrl+V <a class="header-anchor" href="#选择-可视-v-v-ctrl-v" aria-label="Permalink to &quot;选择(可视) v/V/Ctrl+V&quot;">​</a></h3><ul><li><code>v</code>：进入可视模式</li><li><code>V</code>：进入可视行模式</li><li><code>Ctrl + v</code>：进入可视块模式</li><li><code>o/O</code>：转跳光标 <ul><li>可视行模式：上下转跳</li><li>可视块模式：o:转跳到对角位置,O:转跳到同行的另一个角位置</li></ul></li><li><code>&gt;&gt;/&lt;&lt;</code>：对选中的代码,向左/向右移动indent单位, 2/4/8</li><li><code>:sort</code>：对选中的代码,按字母<strong>行</strong>排序</li></ul><h3 id="复制-粘贴-copy-yank" tabindex="-1">复制/粘贴 Copy(yank) <a class="header-anchor" href="#复制-粘贴-copy-yank" aria-label="Permalink to &quot;复制/粘贴 Copy(yank)&quot;">​</a></h3><ul><li><code>yy/Y</code>：复制一行</li><li><code>选择(可视) + y</code>：对选中的代码进行复制</li></ul><h3 id="替换-replace" tabindex="-1">替换 Replace <a class="header-anchor" href="#替换-replace" aria-label="Permalink to &quot;替换 Replace&quot;">​</a></h3><ul><li><code>r</code>： rx替换当前光标位置字母为x（替换一个字母）</li><li><code>R</code>：进入替换模式,自动正向替换（替换多个）</li></ul><h2 id="对象-object" tabindex="-1">对象 Object <a class="header-anchor" href="#对象-object" aria-label="Permalink to &quot;对象 Object&quot;">​</a></h2>',52),l("ul",null,[l("li",null,[l("code",null,"w"),s("：word")]),l("li",null,[l("code",null,"t"),s("：tag")]),l("li",null,[l("code",null,'"'),s('："HelloWorld"')]),l("li",null,[l("code",null,"'"),s("：'HelloWorld'")]),l("li",null,[l("code",null,">"),s("："),l("code",null,'<img src="http://baidu.com/a.webp">')]),l("li",null,[l("code",null,")"),s("： ( some code )")]),l("li",{some:"",code:""},[l("code",null,"}"),s("：")]),l("li",null,[l("code",null,"]"),s("：[ some code ]")])],-1),a('<h2 id="命令组合" tabindex="-1">命令组合 <a class="header-anchor" href="#命令组合" aria-label="Permalink to &quot;命令组合&quot;">​</a></h2><p><strong>公式1</strong>：<code>动作(action) + [ 范围&lt;a/i&gt; + ] 对象(object)</code></p><ul><li><code>&lt;action&gt;&lt;object&gt;</code></li><li><code>&lt;action&gt;a&lt;object&gt;</code></li><li><code>&lt;action&gt;i&lt;object&gt; </code></li></ul><p><strong>动作action：</strong></p><ul><li><code>c</code>：change修改</li><li><code>d</code>：delete删除</li><li><code>v</code>：visual选中</li><li><code>y</code>：yank复制</li></ul><p>范围a = all / i = in</p><ul><li><code>cw / caw / ciw</code>：修改一个单词</li></ul><p><strong>公式2：<code>动作(action) + 方向/数字 </code></strong></p><h2 id="主题subject" tabindex="-1">主题Subject <a class="header-anchor" href="#主题subject" aria-label="Permalink to &quot;主题Subject&quot;">​</a></h2><h3 id="缓冲区buffer" tabindex="-1">缓冲区Buffer <a class="header-anchor" href="#缓冲区buffer" aria-label="Permalink to &quot;缓冲区Buffer&quot;">​</a></h3><blockquote><p>A buffer is the in-memory text of a file.</p></blockquote><ul><li><code>:buffers/:ls/:files</code>：显示所有的buffer文件</li><li><code>:bn/:bnext</code>：转跳到下一个buffer文件</li><li><code>:bp/:bprevious</code>：转跳到上一个buffer文件</li><li><code>:b1/:buffer1</code>：转跳到第一个buffer文件</li></ul><h3 id="标签页tab-page" tabindex="-1">标签页Tab page <a class="header-anchor" href="#标签页tab-page" aria-label="Permalink to &quot;标签页Tab page&quot;">​</a></h3><p>Todo:</p><h3 id="书签-mark" tabindex="-1">书签 Mark <a class="header-anchor" href="#书签-mark" aria-label="Permalink to &quot;书签 Mark&quot;">​</a></h3><ul><li><code>m{a-zA-Z}</code>：给光标所在的位置设置一个书签,名为后面所使用的字符</li><li><code>&#39;{a-zA-Z} </code>/<code>{a-zA-Z}</code>：转跳到书签名为字符的书签位置</li><li><code>:marks</code>：查看所有的mark标签</li><li><code>:delmarks {a-zA-Z}</code>：删除某个mark标签</li><li><code>:delmarks!</code>：删除当前buffer文件的所有书签 but not marksA-Z or 0-9</li></ul><h3 id="滚动屏幕-roll" tabindex="-1">滚动屏幕 Roll <a class="header-anchor" href="#滚动屏幕-roll" aria-label="Permalink to &quot;滚动屏幕 Roll&quot;">​</a></h3><ul><li><code>zz</code>：把光标所在行,滚动到中间</li><li><code>zt</code>：把光标所在行,滚动到顶部t(top)</li><li><code>zb</code>：把光标所在行,滚动到底部b(bottom)</li><li><code>Ctrl + e</code>：向下滚动一行</li><li><code>Ctrl + y</code> 向上滚动一行</li><li><code>Ctrl + d</code> 向下滚动半屏 Down</li><li><code>Ctrl + u</code> 向上滚动半屏 Up</li><li><code>Ctrl + f</code> 向下滚动一屏 Forward</li><li><code>Ctrl + b</code> 向上滚动一屏 Back Forward</li></ul><h3 id="分屏-split" tabindex="-1">分屏 Split <a class="header-anchor" href="#分屏-split" aria-label="Permalink to &quot;分屏 Split&quot;">​</a></h3><ul><li><code>:vs a.txt</code>：竖直分割窗口,并打开a.txt</li><li><code>:vsplit a.txt</code>：同上</li><li><code>:vertical split a.txt</code>：同上</li><li><code>:sp a.txt</code>：水平分割窗口,并打开a.txt</li><li><code>:split a.txt</code>：同上</li></ul><h3 id="窗口-windows" tabindex="-1">窗口 Windows <a class="header-anchor" href="#窗口-windows" aria-label="Permalink to &quot;窗口 Windows&quot;">​</a></h3><ul><li><code>Ctrl + W, c</code>：关闭光标所在的当前窗口 Close</li><li><code>Ctrl + W, k</code>：移动光标到上方窗口</li><li><code>Ctrl + W, j</code>：移动光标到下方窗口</li><li><code>Ctrl + W, h</code>：移动光标到左方窗口</li><li><code>Ctrl + W, l</code>：移动光标到右方窗口</li></ul><h3 id="代码折叠-fold" tabindex="-1">代码折叠 Fold <a class="header-anchor" href="#代码折叠-fold" aria-label="Permalink to &quot;代码折叠 Fold&quot;">​</a></h3><ul><li><code>zo</code>：打开折叠 Open</li><li><code>zc</code>：关闭折叠 Close</li><li><code>zR</code>：打开所有折叠</li><li><code>zM</code>：关闭所有折叠</li></ul><h3 id="替换-replace-1" tabindex="-1">替换 Replace <a class="header-anchor" href="#替换-replace-1" aria-label="Permalink to &quot;替换 Replace&quot;">​</a></h3><p>Todo:</p><h3 id="宏-macro" tabindex="-1">宏 Macro <a class="header-anchor" href="#宏-macro" aria-label="Permalink to &quot;宏 Macro&quot;">​</a></h3><p>重复复杂的操作，这时候就可以制作成一个宏。</p><p>制作/使用步骤：</p><ol><li><code>qa</code>：将后续命令录制在寄存器 a 中（从 a 到 z 有 26 个可用）</li><li><code>some cmd</code>：完成操作的一系列命令</li><li><code>q</code>：停止录制</li><li><code>@a</code>： 执行宏 a</li></ol><h3 id="剪切板-copy-paste" tabindex="-1">剪切板 Copy/Paste <a class="header-anchor" href="#剪切板-copy-paste" aria-label="Permalink to &quot;剪切板 Copy/Paste&quot;">​</a></h3><blockquote><p>Vim 有 12 个粘贴板依次编号为：0、1、2、...、9、a、&quot;、+，其中 + 号为系统粘贴板，” 为临时粘贴板。系统剪切板中的内容可在其他程序中使用。上面的复制指令都可以配合剪切板进行操作。</p></blockquote><ul><li><code>&quot;nyw</code> 复制当前单词到 n 号剪切板（双引号开始）</li><li><code>&quot;np</code> 粘贴 n 号剪切板内容到当前位置后</li><li><code>&quot;+Y</code> 复制当前行到<strong>系统剪切板</strong></li><li><code>&quot;+ny</code> 复制当前行加下面 n 行到<strong>系统剪切板</strong></li><li><code>&quot;+p</code> 粘贴<strong>系统剪切板</strong>内容到当前位置后</li></ul><h3 id="其他常用命令" tabindex="-1">其他常用命令 <a class="header-anchor" href="#其他常用命令" aria-label="Permalink to &quot;其他常用命令&quot;">​</a></h3><ul><li><code>.</code>：重复上一次操作</li><li><code>u/Ctrl+R</code> ： 撤销undo/重做redo</li><li><code>Ctrl+W</code>(Insert mode)：删除光标前面的一个单词</li><li><code>Ctrl+U</code>(insert mode)：删除光标前面的所有单词</li><li><code>:g/关键字/d</code>：删除包括关键字的行</li><li><code>:%g!/关键字/d</code> 或 <code>:v/关键字/d</code>：删除包括关键字的行</li><li><code>:g/^$/d</code>：删除所有空行</li><li><code>:set relativenumber</code>：设置相对行号</li><li><code>:set norelativenumber</code>--&gt; 取消相对行号</li><li><code>:set scrolloff=5</code>：设置光标距离顶部和底部的滚动间距为5行</li><li><code>:!cmd</code>：在vim编辑器中执行一条shell命令</li><li><code>gd</code>：转跳到变量定义gd(goto Declaration)</li><li><code>gf</code>：转跳到光标所在的文件(后面插件<a href="https://github.com/amix/open_file_under_cursor.vim" target="_blank" rel="noreferrer">open_file_under_cursor.vim</a>讲)</li></ul><p>文本删除和保留：todo</p><h2 id="vim配置" tabindex="-1">Vim配置 <a class="header-anchor" href="#vim配置" aria-label="Permalink to &quot;Vim配置&quot;">​</a></h2><h3 id="软件配置文件的种类" tabindex="-1">软件配置文件的种类 <a class="header-anchor" href="#软件配置文件的种类" aria-label="Permalink to &quot;软件配置文件的种类&quot;">​</a></h3><ul><li>自定义：Vim(Vimscript)</li><li>xml：VS, Idea</li><li>json：VS code, Sublime text</li></ul><blockquote><p>Vimscript学习资料：Learn Vimscript the Hard Way <a href="http://learnvimscriptthehardway.stevelosh.com/" target="_blank" rel="noreferrer">英文版</a> <a href="http://learnvimscriptthehardway.onefloweroneworld.com/" target="_blank" rel="noreferrer">中文版</a></p></blockquote><h3 id="配置的目录" tabindex="-1">配置的目录 <a class="header-anchor" href="#配置的目录" aria-label="Permalink to &quot;配置的目录&quot;">​</a></h3><p>不同的系统配置文件目录<code>:help vimrc</code></p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Unix</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            $HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/.vimrc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> or</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/.vim/vimrc</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">OS/2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            $HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/.vimrc,</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/vimfiles/vimrc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> or</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $VIM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/.vimrc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (or </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">_vimrc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">MS-Windows</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      $HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/_vimrc,</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/vimfiles/vimrc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> or</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $VIM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/_vimrc</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Amiga</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">           s:.vimrc,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> home:.vimrc,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> home:vimfiles:vimrc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> or</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $VIM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/.vimrc</span></span></code></pre></div><p>具体系统配置文件目录$ vim --version</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">   system</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vimrc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$VIM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/vimrc&quot;</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">     user</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vimrc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/.vimrc&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 👍</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> 2nd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> user</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vimrc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;~/.vim/vimrc&quot;</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      user</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> exrc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/.exrc&quot;</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">       defaults</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$VIMRUNTIME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/defaults.vim&quot;</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  fall-back</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $VIM</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;/usr/local/share/vim&quot;</span></span></code></pre></div><h3 id="vimrc配置" tabindex="-1">.vimrc配置 <a class="header-anchor" href="#vimrc配置" aria-label="Permalink to &quot;.vimrc配置&quot;">​</a></h3><blockquote><p>rc：resource资源, vim启动的时候会去加载的文件</p></blockquote><h4 id="站在巨人的肩膀上" tabindex="-1">站在巨人的肩膀上 <a class="header-anchor" href="#站在巨人的肩膀上" aria-label="Permalink to &quot;站在巨人的肩膀上&quot;">​</a></h4><blockquote><p><a href="https://github.com/amix/vimrc" target="_blank" rel="noreferrer">https://github.com/amix/vimrc</a> star:19.5k 👍</p></blockquote><h4 id="安装install" tabindex="-1">安装install <a class="header-anchor" href="#安装install" aria-label="Permalink to &quot;安装install&quot;">​</a></h4><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 下载</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --depth=1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/amix/vimrc.git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.vim_runtime</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装完整版本</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.vim_runtime/install_awesome_vimrc.sh</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装基础版本</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.vim_runtime/install_basic_vimrc.sh</span></span></code></pre></div><h4 id="更新update" tabindex="-1">更新update <a class="header-anchor" href="#更新update" aria-label="Permalink to &quot;更新update&quot;">​</a></h4><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.vim_runtime</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pull</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --rebase</span></span></code></pre></div><h4 id="额外添加自己的配置或插件" tabindex="-1">额外添加自己的配置或插件 <a class="header-anchor" href="#额外添加自己的配置或插件" aria-label="Permalink to &quot;额外添加自己的配置或插件&quot;">​</a></h4><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 添加自定义配置的文件</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vim</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.vim_runtime/my_configs.vim</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 添加自定义配置的目录, 会自动加载这个插件</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.vim_runtime/my_plugins</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git@github.com:neoclide/coc.nvim.git</span></span></code></pre></div><h2 id="vim插件" tabindex="-1">Vim插件 <a class="header-anchor" href="#vim插件" aria-label="Permalink to &quot;Vim插件&quot;">​</a></h2><p>管理Vim插件的插件</p><ul><li><a href="https://github.com/mileszs/ack.vim" target="_blank" rel="noreferrer">ack.vim</a>: Vim plugin for <code>the_silver_searcher</code> (ag) or ack -- a wicked fast grep</li><li><a href="https://github.com/vim-scripts/bufexplorer.zip" target="_blank" rel="noreferrer">bufexplorer.zip</a>: Quickly and easily switch between buffers. This plugin can be opened with <code>&lt;leader+o&gt;</code></li><li><a href="https://github.com/ctrlpvim/ctrlp.vim" target="_blank" rel="noreferrer">ctrlp.vim</a>: Fuzzy file, buffer, mru and tag finder. It&#39;s mapped to <code>&lt;Ctrl+F&gt;</code></li><li><a href="https://github.com/junegunn/goyo.vim" target="_blank" rel="noreferrer">goyo.vim</a> and <a href="https://github.com/amix/vim-zenroom2" target="_blank" rel="noreferrer">vim-zenroom2</a>:</li><li><a href="https://github.com/itchyny/lightline.vim" target="_blank" rel="noreferrer">lightline.vim</a>: A light and configurable statusline/tabline for Vim</li><li><a href="https://github.com/scrooloose/nerdtree" target="_blank" rel="noreferrer">NERD Tree</a>: A tree explorer plugin for vim</li><li><a href="https://github.com/amix/open_file_under_cursor.vim" target="_blank" rel="noreferrer">open_file_under_cursor.vim</a>: Open file under cursor when pressing <code>gf</code></li><li><a href="https://github.com/tpope/vim-pathogen" target="_blank" rel="noreferrer">pathogen.vim</a>: Manage your vim runtimepath</li><li><a href="https://github.com/garbas/vim-snipmate" target="_blank" rel="noreferrer">snipmate.vim</a>: snipmate.vim aims to be a concise vim script that implements some of TextMate&#39;s snippets features in Vim</li><li><a href="https://github.com/w0rp/ale" target="_blank" rel="noreferrer">ale</a>: Syntax and lint checking for vim (ALE requires NeoVim &gt;= 0.2.0 or Vim 8 with +timers +job +channel)</li><li><a href="https://github.com/tpope/vim-commentary" target="_blank" rel="noreferrer">vim-commentary</a>: Comment stuff out. Use <code>gcc</code> to comment out a line (takes a count), <code>gc</code> to comment out the target of a motion. <code>gcu</code> uncomments a set of adjacent commented lines.</li><li><a href="https://github.com/terryma/vim-expand-region" target="_blank" rel="noreferrer">vim-expand-region</a>: Allows you to visually select increasingly larger regions of text using the same key combination</li><li><a href="https://github.com/tpope/vim-fugitive" target="_blank" rel="noreferrer">vim-fugitive</a>: A Git wrapper so awesome, it should be illegal</li><li><a href="https://github.com/michaeljsmith/vim-indent-object" target="_blank" rel="noreferrer">vim-indent-object</a>: Defines a new text object representing lines of code at the same indent level. Useful for python/vim scripts</li><li><a href="https://github.com/terryma/vim-multiple-cursors" target="_blank" rel="noreferrer">vim-multiple-cursors</a>: Sublime Text style multiple selections for Vim, CTRL+N is remapped to CTRL+S (due to YankRing)</li><li><a href="https://github.com/maxbrunsfeld/vim-yankstack" target="_blank" rel="noreferrer">vim-yankstack</a>: Maintains a history of previous yanks, changes and deletes</li><li><a href="https://github.com/amix/vim-zenroom2" target="_blank" rel="noreferrer">vim-zenroom2</a> Remove all clutter and focus only on the essential. Similar to iA Writer or Write Room</li><li><a href="https://github.com/mattn/gist-vim" target="_blank" rel="noreferrer">gist-vim</a> Easily create gists from Vim using the <code>:Gist</code> command</li><li><a href="https://github.com/nathanaelkane/vim-indent-guides" target="_blank" rel="noreferrer">vim-indent-guides</a> Is a plugin for visually displaying indent levels in Vim</li><li><a href="https://github.com/editorconfig/editorconfig-vim" target="_blank" rel="noreferrer">editorconfig-vim</a> EditorConfig helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs.</li></ul><h2 id="vim-lsp" tabindex="-1">Vim &amp; LSP <a class="header-anchor" href="#vim-lsp" aria-label="Permalink to &quot;Vim &amp; LSP&quot;">​</a></h2><p><a href="https://github.com/neoclide/coc.nvim" target="_blank" rel="noreferrer">coc.nvim</a>： Make your Vim/Neovim as smart as VSCode. 用上VSCode积累的LSP协议+语言服务实现，</p>',60)]))}]]);export{o as __pageData,r as default};
