import{N as i,y as u,z as m,S as l,A as p,p as f,f as n,g as s,h as _,i as c,k as b,F as B,B as C,j,D as y}from"./vendor.11e7358a.js";/* empty css              */import{B as d}from"./index.d24a4421.js";import{_ as G}from"./index.c584b1f8.js";const S={components:{[i.name]:i,[u.name]:u,[m.name]:m,[l.name]:l,[p.name]:p},data(){return{checkedGoods:["2"],goods:[{id:"1",title:"\u8FDB\u53E3\u9999\u8549",desc:"\u7EA6250g\uFF0C2\u6839",price:200,num:1,thumb:d+"/images/banana.jpeg"},{id:"2",title:"\u9655\u897F\u871C\u68A8",desc:"\u7EA6600g",price:690,num:1,thumb:d+"/images/sydney.jpeg"},{id:"3",title:"\u7F8E\u56FD\u4F3D\u529B\u679C",desc:"\u7EA6680g/3\u4E2A",price:2680,num:1,thumb:d+"/images/apple1.jpeg"}]}},created(){console.log("Cart created")},mounted(){this.$toast.loading({message:"\u6A21\u62DF\u52A0\u8F7D\u4E2D...",forbidClick:!0,duration:1e3})},activated(){console.log("Cart activated")},computed:{submitBarText(){const t=this.checkedGoods.length;return"\u7ED3\u7B97"+(t?`(${t})`:"")},totalPrice(){return this.goods.reduce((t,o)=>t+(this.checkedGoods.indexOf(o.id)!==-1?o.price:0),0)}},methods:{formatPrice(t){return(t/100).toFixed(2)},onSubmit(){f("\u70B9\u51FB\u7ED3\u7B97")}}};function $(t,o,P,V,a,r){const h=n("van-notice-bar"),v=n("van-card"),x=n("van-checkbox"),g=n("van-checkbox-group"),k=n("van-submit-bar");return s(),_("div",null,[c(h,{"left-icon":"volume-o",wrapable:"",text:"tips: \u70B9\u51FB\u4E00\u4E2A\u5546\u54C1\u8FDB\u53BB\uFF0C\u9996\u6B21\u4F1A\u52A0\u8F7D\u9875\u9762\uFF0C\u7136\u540E\u4E0D\u8981\u9500\u6BC1\u8D2D\u7269\u8F66\u9875\u9762\uFF0C\u91CD\u65B0\u56DE\u5230\u8D2D\u7269\u8F66\u9875\u9762\uFF0C\u5728\u4E0D\u9500\u6BC1\u5546\u54C1\u9875\u9762\u7684\u524D\u63D0\u4E0B\uFF0C\u518D\u6B21\u70B9\u51FB\u540C\u6837\u7684\u5546\u54C1\u5219\u4E0D\u4F1A\u91CD\u65B0\u52A0\u8F7D\u65B0\u9875\u9762\uFF0C\u70B9\u51FB\u4E00\u4E0B\u8BD5\u8BD5\u5427"}),c(g,{class:"card-goods",modelValue:a.checkedGoods,"onUpdate:modelValue":o[0]||(o[0]=e=>a.checkedGoods=e)},{default:b(()=>[(s(!0),_(B,null,C(a.goods,e=>(s(),j(x,{class:"card-goods__item",key:e.id,name:e.id},{default:b(()=>[c(v,{title:e.title,desc:e.desc,num:e.num,price:r.formatPrice(e.price),thumb:e.thumb,onClick:y(w=>t.$router.push({name:"goods",query:{id:e.id}}),["stop"])},null,8,["title","desc","num","price","thumb","onClick"])]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue"]),c(k,{price:r.totalPrice,disabled:!a.checkedGoods.length,"button-text":r.submitBarText,onSubmit:r.onSubmit},null,8,["price","disabled","button-text","onSubmit"])])}var E=G(S,[["render",$],["__scopeId","data-v-58164687"]]);export{E as default};