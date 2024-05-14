import{_ as s,c as i,o as a,a4 as t}from"./chunks/framework.s8d9Ue88.js";const l=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"lang/rust/15. Smart Pointers.md","filePath":"lang/rust/15. Smart Pointers.md","lastUpdated":1715180821000}'),n={name:"lang/rust/15. Smart Pointers.md"},h=[t('<p>智能指针(<em>smart pointers</em>)是一类数据结构，他们的表现类似指针，但是也拥有 额外的元数据和功能s</p><p>智能指针通常使用结构体实现。</p><p>智能指针区别于常规结构体的显著特性在于其实现了 <code>Deref</code> 和 <code>Drop</code> trait。</p><ul><li>Deref trait 允许智能指针结构体实例表现的像引用一样，这样就可以编写既 用于引用、又用于智能指针的代码。</li><li>Drop trait 允许我们自定义当智能指针离开作用域时运行 的代码。</li></ul><p>内容</p><ul><li><code>Box&lt;T&gt;</code> ，用于在堆上分配值</li><li><code>Rc&lt;T&gt;</code> ，一个引用计数类型，其数据可以有多个所有者</li><li><code>Ref&lt;T&gt;</code> 和 <code>RefMut&lt;T&gt;</code> ，通过 <code>RefCell&lt;T&gt;</code> 访问，一个在运行时而不是在编译时执行借用规则的类型。</li></ul><p>内部可变性(<em>interior mutability</em>)模式，这时不可变类型暴露出改变其内部值的 API。</p><p>引用循环(<em>reference cycles</em>)会如何泄露内存，以及如何避免。</p><h2 id="使用-box-t-指向堆上的数据" tabindex="-1">使用 <code>Box&lt;T&gt;</code> 指向堆上的数据 <a class="header-anchor" href="#使用-box-t-指向堆上的数据" aria-label="Permalink to &quot;使用 `Box&lt;T&gt;` 指向堆上的数据&quot;">​</a></h2><ul><li>当有一个在编译时未知大小的类型，而又想要在需要确切大小的上下文中使用这个类型 值的时候</li><li>当有大量数据并希望在确保数据不被拷贝的情况下转移所有权的时候</li><li>当希望拥有一个值并只关心它的类型是否实现了特定 trait 而不是其具体类型的时候</li></ul><h2 id="通过-deref-trait-将智能指针当作常规引用处理" tabindex="-1">通过 <strong>Deref</strong> <strong>trait</strong> 将智能指针当作常规引用处理 <a class="header-anchor" href="#通过-deref-trait-将智能指针当作常规引用处理" aria-label="Permalink to &quot;通过 **Deref** **trait** 将智能指针当作常规引用处理&quot;">​</a></h2><p>实现 Deref trait 允许我们重载 解引用运算符(<em>dereference operator</em>) <code>*</code> 。通过这种方式实现 Deref trait 的智能指针可以被当作常规引用来对待，可以编写操作引用的代码并用于智能指针。</p><h3 id="通过解引用运算符追踪指针的值" tabindex="-1">通过解引用运算符追踪指针的值 <a class="header-anchor" href="#通过解引用运算符追踪指针的值" aria-label="Permalink to &quot;通过解引用运算符追踪指针的值&quot;">​</a></h3><div class="language-rust vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">rust</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">fn</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Box</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // Option</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    println!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;i = {:?}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, i);</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x;</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    assert_eq!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, x);</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    assert_eq!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">y);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="像引用一样使用-box-t" tabindex="-1">像引用一样使用 <code>Box&lt;T&gt;</code> <a class="header-anchor" href="#像引用一样使用-box-t" aria-label="Permalink to &quot;像引用一样使用 `Box&lt;T&gt;`&quot;">​</a></h3><div class="language-rust vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">rust</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">fn</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Box</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    assert_eq!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, x);</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    assert_eq!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">y);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="自定义智能指针" tabindex="-1">自定义智能指针 <a class="header-anchor" href="#自定义智能指针" aria-label="Permalink to &quot;自定义智能指针&quot;">​</a></h3><div class="language-rust vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">rust</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">use</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> std</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ops</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Deref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">struct</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MyBox</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">impl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">MyBox</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; {</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    fn</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MyBox</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; {</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        MyBox</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x)</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">impl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Deref</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> for</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MyBox</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; {</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Target</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    fn</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> deref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &amp;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        println!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;deref&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        &amp;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">self</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">fn</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // let y = Box::new(5);</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MyBox</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x);</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    assert_eq!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, x);</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    assert_eq!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">y);</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> z </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(y</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">deref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    println!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;z = {:?}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, z);</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="drop-trait" tabindex="-1">Drop Trait <a class="header-anchor" href="#drop-trait" aria-label="Permalink to &quot;Drop Trait&quot;">​</a></h3><p>值要离开作用域时执行一 些代码</p><p>Drop Trait的意义在于自动处理,不能手动调用Drop Trait的drop方法. 如果需要提前释放,调用<strong>std::mem::drop</strong></p><h3 id="函数和方法的隐式解引用强制多态" tabindex="-1">函数和方法的隐式解引用强制多态 <a class="header-anchor" href="#函数和方法的隐式解引用强制多态" aria-label="Permalink to &quot;函数和方法的隐式解引用强制多态&quot;">​</a></h3><p>解引用强制多态(<em>deref coercions</em>)是 Rust 表现在函数或方法传参上的一种便利, 传参时解引用去匹配类型</p><p>Deref, DerefMut重载可变或不可变</p><p>Rust 在发现类型和 trait 实现满足三种情况时会进行解引用强制多态:</p><ul><li>当 <code>T: Deref&lt;Target=U&gt;</code> 时从 <code>&amp;T</code> 到 &amp;U 。</li><li>当 <code>T: DerefMut&lt;Target=U&gt;</code> 时从 <code>&amp;mut T</code> 到 <code>&amp;mut U</code> 。</li><li>当 <code>T: Deref&lt;Target=U&gt;</code> 时从 <code>&amp;mut T</code> 到 <code>&amp;U</code> 。</li></ul><h3 id="rc-t-引用计数智能指针" tabindex="-1"><code>Rc&lt;T&gt;</code> 引用计数智能指针 <a class="header-anchor" href="#rc-t-引用计数智能指针" aria-label="Permalink to &quot;`Rc&lt;T&gt;` 引用计数智能指针&quot;">​</a></h3><p>Rc:<em>reference counting</em>缩写</p><p>引用计数意味着记录一个值引用的数量来知晓这个值是否仍在被使用。如 果某个值有零个引用，就代表没有任何有效引用并可以被清理。</p><p>只能用于单线程场景</p><p>怎么增加计数:<code>Rc::clone / var.clone()</code></p><p>如何查看计数:<code>Rc::strong_count(&amp;a);</code></p><p>问题:相同位置的多个可变借用可能造成数 据竞争和不一致</p><h3 id="refcell-t-和内部可变性模式" tabindex="-1"><code>RefCell&lt;T&gt;</code> 和内部可变性模式 <a class="header-anchor" href="#refcell-t-和内部可变性模式" aria-label="Permalink to &quot;`RefCell&lt;T&gt;` 和内部可变性模式&quot;">​</a></h3><blockquote><p>允许你即使在有不可变引用 时改变数据; 不可变值的可变借用</p></blockquote><p><code> RefCell&lt;T&gt;</code> 代表其数据的唯一的所有权</p><p><code>RefCell&lt;T&gt;</code> 正是用于当你确信代码遵守借用规则，而编译器不能理解和确定的 时候。</p><p><code> RefCell&lt;T&gt;</code> 只能用于单线程场景</p><p>检查借用规则</p><p><strong>有些分析是不可能的</strong>,</p><p>编译器 程序 程序员</p><p><strong>如下为选择 <code>Box&lt;T&gt;</code> ， <code>Rc&lt;T&gt;</code> 或 <code>RefCell&lt;T&gt;</code> 的理由:</strong></p><ul><li><code>Rc&lt;T</code>&gt; 允许相同数据有多个所有者; <code>Box&lt;T&gt;</code> 和 <code>RefCell&lt;T&gt;</code> 有单一所有者。</li><li><code>Box&lt;T&gt;</code> 允许在编译时执行不可变或可变借用检查; <code>Rc&lt;T&gt;</code> 仅允许在编译时执行不可变 借用检查; <code>RefCell&lt;T&gt;</code> 允许在运行时执行不可变或可变借用检查。</li><li>因为 <code>RefCell&lt;T&gt;</code> 允许在运行时执行可变借用检查，所以我们可以在即便 <code>RefCell&lt;T&gt;</code> 自身是不可变的情况下修改其内部的值。</li></ul><p>对于引用和 <code>Box&lt;T&gt;</code> ，借用规则的不可变性作用于<strong>编译时</strong>。对于 <code>RefCell&lt;T&gt;</code> ，这些不可变性 作用于 <strong>运行时</strong>。</p><p>标准库中其他提供内部可变性的类型</p><ul><li><code>Cell&lt;T&gt;</code>:类似(<code>RefCell&lt;T&gt;</code>)除了 相比提供内部值的引用，其值被拷贝进和拷贝出 <code>Cell&lt;T&gt;</code></li><li><code>Mutex&lt;T&gt;</code>:提供线程间 安全的内部可变性</li></ul><p>引用循环与内存泄漏</p>',47)];const p=s(n,[["render",function(s,t,l,n,p,e){return a(),i("div",null,h)}]]);export{l as __pageData,p as default};
