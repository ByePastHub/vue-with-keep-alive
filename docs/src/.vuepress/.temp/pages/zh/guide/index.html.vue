<template><h1 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h1>
<p><strong>VueWithKeepAlive</strong> 是一个以<code>&lt;keep-alive /&gt;</code>组件基础上做扩展，它可以自动的帮助你缓存 route 中的页面组件，同样，返回时也会帮你自动销毁离开页面缓存的组件。你还可以自定义销毁已经缓存的页面组件。</p>
<h2 id="它是如何工作的" tabindex="-1"><a class="header-anchor" href="#它是如何工作的" aria-hidden="true">#</a> 它是如何工作的？</h2>
<p>以<code>&lt;keep-alive /&gt;</code>组件基础上做扩展，对<code>vue-router</code>的部分方法进行重写，以至于判断是前进还是后退，用作于缓存页面组件还是销毁页面组件，它会对你写在 route 中的页面组件导出 name 会使用 route.name 进行覆盖，避免部分用户没有组件没有导出 name，或者写错的导致没有缓存到改页面组件，同时也会使得优化旧项目上更加便捷。</p>
</template>
