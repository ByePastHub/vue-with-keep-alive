import{l as k,C as y,I as x,m as b,n as B,z as w,A as $,B as j,D as A,E as G,k as E,r as s,o as f,f as L,g as t,w as e,F,x as N,s as d,G as p,i as o,c as T}from"./vendor.551af9b9.js";/* empty css              *//* empty css              */import{B as u}from"./index.d24a4421.js";import{_ as V}from"./index.aa5a8666.js";const D={components:{[k.name]:k,[y.name]:y,[x.name]:x,[b.name]:b,[B.name]:B,[w.name]:w,[$.name]:$,[j.name]:j,[A.name]:A,[G.name]:G},data(){return{goodsList:[{id:"1",title:"\u8FDB\u53E3\u9999\u8549",desc:"\u7EA6250g\uFF0C2\u6839",price:200,express:"8.00",num:1,thumb:[u+"/images/banana.jpeg"]},{id:"2",title:"\u9655\u897F\u871C\u68A8",desc:"\u7EA6600g",price:690,express:"10.00",num:1,thumb:[u+"/images/sydney.jpeg"]},{id:"3",title:"\u7F8E\u56FD\u4F3D\u529B\u679C",desc:"\u7EA6680g/3\u4E2A",price:2680,express:"\u514D\u8FD0\u8D39",num:1,thumb:[u+"/images/apple1.jpeg",u+"/images/apple2.jpeg"]}],goods:{title:"\u7F8E\u56FD\u4F3D\u529B\u679C\uFF08\u7EA6680g/3\u4E2A\uFF09",price:2680,express:"\u514D\u8FD0\u8D39",remain:19,thumb:["https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg","https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg"]}}},created(){console.log("Goods created"),this.getGoods()},mounted(){this.$toast.loading({message:"\u6A21\u62DF\u52A0\u8F7D\u4E2D...",forbidClick:!0,duration:1e3})},activated(){console.log("Goods activated")},methods:{addCart(){this.$toast.success({message:"\u6DFB\u52A0\u8D2D\u7269\u8F66\u6210\u529F\uFF0C\u9500\u6BC1\u8D2D\u7269\u8F66\u9875\u9762"}),this.$keepRouter.destroy("cart")},getGoods(){let{goodsList:n,$route:{query:a}}=this;this.goods=n.find(g=>g.id===a.id&&g)},formatPrice(){return"\xA5"+(this.goods.price/100).toFixed(2)},onClickCart(){this.$router.push("cart")},sorry(){E("\u6682\u65E0\u540E\u7EED\u903B\u8F91~")}}},P={class:"goods"},q=["src"],R={class:"goods-title"},H={class:"goods-price"},J=d("span",{class:"van-cell-text"},"\u4E0D\u9500\u6BC1\u672C\u9875\u9762\uFF0C\u8DF3\u8F6C\u56DE\u8D2D\u7269\u8F66",-1),K=o("\u70B9\u51FB"),M=d("span",{class:"van-cell-text"},"\u9500\u6BC1\u672C\u9875\u9762\uFF0C\u8DF3\u8F6C\u56DE\u8D2D\u7269\u8F66",-1),O=o("\u70B9\u51FB"),Q=o("\u70B9\u51FB"),U=o(" \u5BA2\u670D "),W=o(" \u8D2D\u7269\u8F66 "),X=o(" \u52A0\u5165\u8D2D\u7269\u8F66 "),Y=o("\u70B9\u51FB"),Z=o(" \u7ACB\u5373\u8D2D\u4E70 ");function ee(n,a,g,te,i,c){const I=s("van-swipe-item"),S=s("van-swipe"),r=s("van-cell"),v=s("van-col"),m=s("van-cell-group"),_=s("van-tag"),h=s("van-action-bar-icon"),C=s("van-action-bar-button"),z=s("van-action-bar");return f(),L("div",P,[t(S,{class:"goods-swipe",autoplay:3e3},{default:e(()=>[(f(!0),L(F,null,N(i.goods.thumb,l=>(f(),T(I,{key:l},{default:e(()=>[d("img",{src:l},null,8,q)]),_:2},1024))),128))]),_:1}),t(m,null,{default:e(()=>[t(r,null,{default:e(()=>[d("div",R,p(i.goods.title),1),d("div",H,p(c.formatPrice(i.goods.price)),1)]),_:1}),t(r,{class:"goods-express"},{default:e(()=>[t(v,{span:"10"},{default:e(()=>[o("\u8FD0\u8D39\uFF1A"+p(i.goods.express),1)]),_:1}),t(v,{span:"14"},{default:e(()=>[o("\u5269\u4F59\uFF1A"+p(i.goods.remain),1)]),_:1})]),_:1})]),_:1}),t(m,{class:"goods-cell-group"},{default:e(()=>[t(r,{value:"\u8FDB\u5165\u8D2D\u7269\u8F66",icon:"cart","is-link":"",onClick:a[0]||(a[0]=l=>n.$router.push({name:"cart"}))},{title:e(()=>[J,t(_,{class:"goods-tag",type:"danger"},{default:e(()=>[K]),_:1})]),_:1}),t(r,{title:"\u7EBF\u4E0B\u95E8\u5E97",icon:"cart","is-link":"",onClick:a[1]||(a[1]=l=>n.$router.push({name:"cart",destroy:"goods"}))},{title:e(()=>[M,t(_,{class:"goods-tag",type:"danger"},{default:e(()=>[O]),_:1})]),_:1})]),_:1}),t(m,{class:"goods-cell-group"},{default:e(()=>[t(r,{title:"\u56DE\u5230\u8D2D\u7269\u8F66\uFF0C\u9500\u6BC1\u5168\u90E8\u9875\u9762","is-link":"",onClick:a[2]||(a[2]=l=>n.$router.push({name:"cart",destroy:"ALL"}))},{default:e(()=>[t(_,{class:"goods-tag",type:"danger"},{default:e(()=>[Q]),_:1})]),_:1})]),_:1}),t(z,null,{default:e(()=>[t(h,{icon:"chat-o",onClick:c.sorry},{default:e(()=>[U]),_:1},8,["onClick"]),t(h,{icon:"cart-o",onClick:c.onClickCart},{default:e(()=>[W]),_:1},8,["onClick"]),t(C,{type:"warning",onClick:c.addCart},{default:e(()=>[X,t(_,{class:"goods-tag",type:"danger"},{default:e(()=>[Y]),_:1})]),_:1},8,["onClick"]),t(C,{type:"danger",onClick:c.sorry},{default:e(()=>[Z]),_:1},8,["onClick"])]),_:1})])}var ce=V(D,[["render",ee]]);export{ce as default};