<template><h1 id="快速上手" tabindex="-1"><a class="header-anchor" href="#快速上手" aria-hidden="true">#</a> 快速上手</h1>
<h2 id="注册使用" tabindex="-1"><a class="header-anchor" href="#注册使用" aria-hidden="true">#</a> 注册使用</h2>
<p><strong>main.js</strong></p>
<CodeGroup>
  <CodeGroupItem title="Vue2.x" active>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #1E1E1E"><code><span class="line"><span style="color: #C586C0">import</span><span style="color: #D4D4D4"> </span><span style="color: #9CDCFE">Vue</span><span style="color: #D4D4D4"> </span><span style="color: #C586C0">from</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;vue&#39;</span><span style="color: #D4D4D4">;</span></span>
<span class="line"><span style="color: #C586C0">import</span><span style="color: #D4D4D4"> </span><span style="color: #9CDCFE">withKeepAlive</span><span style="color: #D4D4D4"> </span><span style="color: #C586C0">from</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;vue-with-keep-alive&#39;</span></span>
<span class="line"><span style="color: #C586C0">import</span><span style="color: #D4D4D4"> </span><span style="color: #9CDCFE">App</span><span style="color: #D4D4D4"> </span><span style="color: #C586C0">from</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;./App.vue&#39;</span><span style="color: #D4D4D4">;</span></span>
<span class="line"><span style="color: #C586C0">import</span><span style="color: #D4D4D4"> </span><span style="color: #9CDCFE">router</span><span style="color: #D4D4D4"> </span><span style="color: #C586C0">from</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;./router&#39;</span><span style="color: #D4D4D4">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #9CDCFE">Vue</span><span style="color: #D4D4D4">.</span><span style="color: #DCDCAA">use</span><span style="color: #D4D4D4">(</span><span style="color: #9CDCFE">withKeepAlive</span><span style="color: #D4D4D4">, </span><span style="color: #9CDCFE">router</span><span style="color: #D4D4D4">)</span></span>
<span class="line"></span>
<span class="line"><span style="color: #569CD6">new</span><span style="color: #D4D4D4"> </span><span style="color: #DCDCAA">Vue</span><span style="color: #D4D4D4">({</span></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #9CDCFE">router</span><span style="color: #D4D4D4">,</span></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #DCDCAA">render</span><span style="color: #9CDCFE">:</span><span style="color: #D4D4D4"> (</span><span style="color: #9CDCFE">h</span><span style="color: #D4D4D4">) </span><span style="color: #569CD6">=&gt;</span><span style="color: #D4D4D4"> </span><span style="color: #DCDCAA">h</span><span style="color: #D4D4D4">(</span><span style="color: #9CDCFE">App</span><span style="color: #D4D4D4">)</span></span>
<span class="line"><span style="color: #D4D4D4">}).</span><span style="color: #DCDCAA">$mount</span><span style="color: #D4D4D4">(</span><span style="color: #CE9178">&#39;#app&#39;</span><span style="color: #D4D4D4">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>  </CodeGroupItem>
  <CodeGroupItem title="Vue3.x">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #1E1E1E"><code><span class="line"><span style="color: #C586C0">import</span><span style="color: #D4D4D4"> { </span><span style="color: #9CDCFE">createApp</span><span style="color: #D4D4D4"> } </span><span style="color: #C586C0">from</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;vue&#39;</span><span style="color: #D4D4D4">;</span></span>
<span class="line"><span style="color: #C586C0">import</span><span style="color: #D4D4D4"> </span><span style="color: #9CDCFE">withKeepAlive</span><span style="color: #D4D4D4"> </span><span style="color: #C586C0">from</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;vue-with-keep-alive&#39;</span><span style="color: #D4D4D4">;</span></span>
<span class="line"><span style="color: #C586C0">import</span><span style="color: #D4D4D4"> </span><span style="color: #9CDCFE">router</span><span style="color: #D4D4D4"> </span><span style="color: #C586C0">from</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;./router/index&#39;</span><span style="color: #D4D4D4">;</span></span>
<span class="line"><span style="color: #C586C0">import</span><span style="color: #D4D4D4"> </span><span style="color: #9CDCFE">App</span><span style="color: #D4D4D4"> </span><span style="color: #C586C0">from</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;./App.vue&#39;</span><span style="color: #D4D4D4">;</span></span>
<span class="line"></span>
<span class="line"><span style="color: #569CD6">const</span><span style="color: #D4D4D4"> </span><span style="color: #4FC1FF">app</span><span style="color: #D4D4D4"> = </span><span style="color: #DCDCAA">createApp</span><span style="color: #D4D4D4">(</span><span style="color: #9CDCFE">App</span><span style="color: #D4D4D4">);</span></span>
<span class="line"><span style="color: #9CDCFE">app</span><span style="color: #D4D4D4">.</span><span style="color: #DCDCAA">use</span><span style="color: #D4D4D4">(</span><span style="color: #9CDCFE">router</span><span style="color: #D4D4D4">);</span></span>
<span class="line"><span style="color: #9CDCFE">app</span><span style="color: #D4D4D4">.</span><span style="color: #DCDCAA">use</span><span style="color: #D4D4D4">(</span><span style="color: #9CDCFE">withKeepAlive</span><span style="color: #D4D4D4">, </span><span style="color: #9CDCFE">router</span><span style="color: #D4D4D4">);</span></span>
<span class="line"><span style="color: #9CDCFE">app</span><span style="color: #D4D4D4">.</span><span style="color: #DCDCAA">mount</span><span style="color: #D4D4D4">(</span><span style="color: #CE9178">&#39;#app&#39;</span><span style="color: #D4D4D4">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>  </CodeGroupItem>
</CodeGroup>
<p><strong>App.vue</strong></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="shiki" style="background-color: #1E1E1E"><code><span class="line"><span style="color: #808080">&lt;</span><span style="color: #569CD6">template</span><span style="color: #808080">&gt;</span></span>
<span class="line"><span style="color: #D4D4D4">  </span><span style="color: #808080">&lt;</span><span style="color: #569CD6">keep-router-riew</span><span style="color: #D4D4D4"> /</span><span style="color: #808080">&gt;</span></span>
<span class="line"><span style="color: #808080">&lt;/</span><span style="color: #569CD6">template</span><span style="color: #808080">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="组件属性" tabindex="-1"><a class="header-anchor" href="#组件属性" aria-hidden="true">#</a> 组件属性</h2>
<table class="table table-bordered table-striped table-condensed">
  <tr>
    <td>mode (String)</td>
	  <td>模式：全部缓存(default) allKeepAlive，自定义缓存组件 customizeKeepAlive 需要在route设置中上meta: { keepAlive: true }</td>
  </tr>
  <tr>
    <td>max (Number)</td>
	  <td>页面最大缓存数量 (default: 5)</td>
  </tr>
  <tr>
    <td>exclude (Array | String)</td>
	  <td>字符串或正则表达式。任何名称匹配的组件都不会被缓存</td>
  </tr>
  <tr>
    <td>matchClearList (Array)</td>
	  <td>匹配到名称时，除了当前页面的名称外，清空其他的页面名称</td>
  </tr>
  <tr>
    <td>matchClearBehindList (Array)</td>
	  <td>如果是后退，匹配到名称时，会把后面所有的名称剔除掉</td>
  </tr>
</table>
<h2 id="router-对象" tabindex="-1"><a class="header-anchor" href="#router-对象" aria-hidden="true">#</a> router 对象</h2>
<ul>
<li>
<p><code>push/replace/forward</code>: 缓存跳转页面组件</p>
</li>
<li>
<p><code>replace</code>: 跟 push 很像，唯一的不同就是，它不会向 history 添加新记录</p>
</li>
<li>
<p><code>reLaunch</code>: 跳转时清除所有缓存组件，然后缓存重新缓存该页面组件</p>
</li>
<li>
<p>其他(包括系统返回)的都属于后退，路由发生变化会销毁页面组件</p>
</li>
<li>
<p>上面 router 对象中，添加<code>destroy</code>属性(String|Array)，用做自定义销毁缓存过的页面组件。</p>
</li>
</ul>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p><code>reLaunch</code>: 跳转跟<code>replace</code>一样，它不会向 history 添加新记录，如果需要用其他跳转方式可以使用上面这几种方式，比如</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="shiki" style="background-color: #1E1E1E"><code><span class="line"><span style="color: #569CD6">this</span><span style="color: #D4D4D4">.</span><span style="color: #9CDCFE">$router</span><span style="color: #D4D4D4">.</span><span style="color: #DCDCAA">push</span><span style="color: #D4D4D4">({</span><span style="color: #9CDCFE">name:</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;Home&#39;</span><span style="color: #D4D4D4">, </span><span style="color: #9CDCFE">destroy:</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">&#39;ALL&#39;</span><span style="color: #D4D4D4">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></div>
<p><strong><RouterLink to="/zh/guide/destroy.html">关于 destroy</RouterLink></strong></p>
</template>
