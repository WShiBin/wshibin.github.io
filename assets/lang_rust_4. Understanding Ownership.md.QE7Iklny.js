import{_ as a,c as e,o as r,a4 as i}from"./chunks/framework.BcC1I4jP.js";const l=JSON.parse('{"title":"Understanding Ownership","description":"","frontmatter":{},"headers":[],"relativePath":"lang/rust/4. Understanding Ownership.md","filePath":"lang/rust/4. Understanding Ownership.md","lastUpdated":1713284123000}'),o={name:"lang/rust/4. Understanding Ownership.md"},t=[i('<h1 id="understanding-ownership" tabindex="-1">Understanding Ownership <a class="header-anchor" href="#understanding-ownership" aria-label="Permalink to &quot;Understanding Ownership&quot;">​</a></h1><h2 id="什么是所有权" tabindex="-1">什么是所有权? <a class="header-anchor" href="#什么是所有权" aria-label="Permalink to &quot;什么是所有权?&quot;">​</a></h2><p>编程语言处理内存的方式:</p><ul><li>通过垃圾回收机制管理内存</li><li>通过程序员手动分配和释放内存</li><li>Rust通过所有权管理:编译器在编译时会根据一系列的<strong>规则</strong>进行检查</li></ul><h3 id="栈和堆" tabindex="-1">栈和堆 <a class="header-anchor" href="#栈和堆" aria-label="Permalink to &quot;栈和堆&quot;">​</a></h3><ul><li>一个函数占用的数据大小是可计算(固定的)</li><li>可以确定数据大小时用栈,不确定数据大小时用堆</li><li>栈的效率比堆的高 <ul><li>堆分配内存需要消耗,需要计算分配, 使用栈上的数据可以无脑往前堆</li><li>访问堆上的数据比栈上的慢.取堆上的数据至少通过栈上的指针来获取(转跳两次)</li></ul></li></ul><p>堆:不确定的部分,容易出问题的部分</p><p><strong>所有权规则解决的问题:管理堆上数据</strong></p><ul><li>跟踪哪部分代码使用堆上的数据</li><li>减少堆上重复数据的数量</li><li>清理堆上不在使用的数据</li></ul><h3 id="所有权规则" tabindex="-1">所有权规则 <a class="header-anchor" href="#所有权规则" aria-label="Permalink to &quot;所有权规则&quot;">​</a></h3><ol><li>Rust中的每一个值都有一个被称为其所有者(<em>owner</em>)的变量。</li><li>值有且只有一个所有者。</li><li>当所有者(变量)离开作用域，这个值将被丢弃。</li></ol><h3 id="变量作用域" tabindex="-1">变量作用域 <a class="header-anchor" href="#变量作用域" aria-label="Permalink to &quot;变量作用域&quot;">​</a></h3><h3 id="string-类型" tabindex="-1"><strong>String</strong> 类型 <a class="header-anchor" href="#string-类型" aria-label="Permalink to &quot;**String** 类型&quot;">​</a></h3><p>String内部:容量,长度,指针</p><p>特点:有数据在栈上,也有数据在堆上</p><h3 id="内存与分配" tabindex="-1">内存与分配 <a class="header-anchor" href="#内存与分配" aria-label="Permalink to &quot;内存与分配&quot;">​</a></h3><ul><li>gc记录并清理不再使用的内存</li><li>手动申请和释放:<code>allocate</code>/<code>free</code></li><li>rust:数据变量在离开作用域后就被自动释放.本质上是在作用域结束的时候自动调用<code>drop</code>函数</li></ul><blockquote><p>C++的RAII（<strong>R</strong>esource <strong>A</strong>cquisition <strong>I</strong>s <strong>I</strong>nitialization）全称<strong>资源获取即初始化</strong><a href="https://zh.wikipedia.org/wiki/RAII" target="_blank" rel="noreferrer">https://zh.wikipedia.org/wiki/RAII</a></p></blockquote><h3 id="变量与数据交互的方式-一-移动" tabindex="-1">变量与数据交互的方式(一):移动 <a class="header-anchor" href="#变量与数据交互的方式-一-移动" aria-label="Permalink to &quot;变量与数据交互的方式(一):移动&quot;">​</a></h3><p>数据(堆上)的所有权从一个变量移动到另一个变量上</p><p><strong>深拷贝</strong>和<strong>浅拷贝</strong>:是对有堆上的数据而言的,</p><p>Rust永远不会自动创建数据的&quot;深拷贝&quot;,<code>=</code>号只拷贝栈上的数据</p><h3 id="变量与数据交互的方式-二-克隆" tabindex="-1">变量与数据交互的方式(二):克隆 <a class="header-anchor" href="#变量与数据交互的方式-二-克隆" aria-label="Permalink to &quot;变量与数据交互的方式(二):克隆&quot;">​</a></h3><p>明确需要深拷贝:调用<code>clone</code>函数</p><h3 id="只在栈上的数据-拷贝" tabindex="-1">只在栈上的数据:拷贝 <a class="header-anchor" href="#只在栈上的数据-拷贝" aria-label="Permalink to &quot;只在栈上的数据:拷贝&quot;">​</a></h3><p><code>Copy</code>trait,如果一个类型实现了<code>Copy</code>trait,这种类型的变量,能在赋值给新的变量之后仍然可用</p><p>区分哪些数据类型只存在于栈上;哪些数据类型既和栈相关,也和堆相关</p><h3 id="所有权与函数" tabindex="-1">所有权与函数 <a class="header-anchor" href="#所有权与函数" aria-label="Permalink to &quot;所有权与函数&quot;">​</a></h3><h3 id="返回值与作用域" tabindex="-1">返回值与作用域 <a class="header-anchor" href="#返回值与作用域" aria-label="Permalink to &quot;返回值与作用域&quot;">​</a></h3><p>对于持有堆中数据的变量,除非所有权发生转移,不然,在他离开作用域的时候,会自动调用<code>drop</code>函数清理调</p><p><strong>所有权转移</strong>总结:</p><ul><li>显示<code>=</code>号赋值的时候会转移</li><li>调用函数的时候会转移(有隐藏的<code>=</code>号赋值运算)</li><li>函数调用返回时会转移</li></ul><blockquote><p>问题:有10个函数会使用到同一个数据,堆上的数据所有权在10个函数中轮流(转移)?</p></blockquote><h2 id="引用与借用" tabindex="-1">引用与借用 <a class="header-anchor" href="#引用与借用" aria-label="Permalink to &quot;引用与借用&quot;">​</a></h2><p>引用等同于<strong>取地址</strong>, 传引用等同于传地址,引用的本质就是指针</p><p>将获取引用作为函数参数称为 借用(<em>borrowing</em>)</p><p>借用没有所有权,在生命周期结束时,不会调用<code>drop</code>函数清理堆上数据. <strong>借的必需还回去</strong></p><h3 id="可变引用" tabindex="-1">可变引用 <a class="header-anchor" href="#可变引用" aria-label="Permalink to &quot;可变引用&quot;">​</a></h3><p>通过引用去修改数据</p><ul><li>同一作用域,不能同时拥有多个可变引用</li><li>可以同时有多个不可变引用</li></ul><h3 id="悬垂引用-dangling-references" tabindex="-1">悬垂引用(<strong>Dangling References</strong>) <a class="header-anchor" href="#悬垂引用-dangling-references" aria-label="Permalink to &quot;悬垂引用(**Dangling References**)&quot;">​</a></h3><p>悬垂指针(dangling pointer):指向的数据地址,内存已经释放</p><p>在 Rust 中编译器确保引用永远也不会变成悬垂状态:当你拥有一些数据的引用,编译器确保数据不会在其引用之前离开作用域</p><h3 id="引用的规则" tabindex="-1">引用的规则 <a class="header-anchor" href="#引用的规则" aria-label="Permalink to &quot;引用的规则&quot;">​</a></h3><ul><li>在任意给定时间,要么只能有一个可变引用,要么只能有多个不可变引用</li><li>引用必须总是有效的</li></ul><h2 id="slice-类型" tabindex="-1"><strong>Slice</strong> 类型 <a class="header-anchor" href="#slice-类型" aria-label="Permalink to &quot;**Slice** 类型&quot;">​</a></h2><p>没有所有权的数据类型:slice</p><p><code>&amp;str</code></p><p>其它slice类型</p>',49)];const n=a(o,[["render",function(a,i,l,o,n,s){return r(),e("div",null,t)}]]);export{l as __pageData,n as default};