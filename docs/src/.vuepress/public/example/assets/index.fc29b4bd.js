import{N as i,t as u,u as m,S as l,v as p,k as f,r as a,o as s,f as _,g as c,w as b,F as C,x as B,c as y,y as G}from"./vendor.551af9b9.js";/* empty css              */import{B as d}from"./index.d24a4421.js";import{_ as S}from"./index.aa5a8666.js";const $={components:{[i.name]:i,[u.name]:u,[m.name]:m,[l.name]:l,[p.name]:p},data(){return{checkedGoods:["2"],goods:[{id:"1",title:"\u8FDB\u53E3\u9999\u8549",desc:"\u7EA6250g\uFF0C2\u6839",price:200,num:1,thumb:d+"/images/banana.jpeg"},{id:"2",title:"\u9655\u897F\u871C\u68A8",desc:"\u7EA6600g",price:690,num:1,thumb:d+"/images/sydney.jpeg"},{id:"3",title:"\u7F8E\u56FD\u4F3D\u529B\u679C",desc:"\u7EA6680g/3\u4E2A",price:2680,num:1,thumb:d+"/images/apple1.jpeg"}]}},created(){console.log("Cart created")},mounted(){this.$toast.loading({message:"\u6A21\u62DF\u52A0\u8F7D\u4E2D...",forbidClick:!0,duration:1e3})},activated(){console.log("Cart activated")},computed:{submitBarText(){const t=this.checkedGoods.length;return"\u7ED3\u7B97"+(t?`(${t})`:"")},totalPrice(){return this.goods.reduce((t,o)=>t+(this.checkedGoods.indexOf(o.id)!==-1?o.price:0),0)}},methods:{formatPrice(t){return(t/100).toFixed(2)},onSubmit(){f("\u70B9\u51FB\u7ED3\u7B97")}}};function w(t,o,P,V,n,r){const v=a("van-notice-bar"),h=a("van-card"),g=a("van-checkbox"),x=a("van-checkbox-group"),k=a("van-submit-bar");return s(),_("div",null,[c(v,{"left-icon":"volume-o",wrapable:"",text:"tips: \u70B9\u51FB\u4E00\u4E2A\u5546\u54C1\u8FDB\u53BB\uFF0C\u9996\u6B21\u4F1A\u52A0\u8F7D\u9875\u9762\uFF0C\u7136\u540E\u4E0D\u8981\u9500\u6BC1\u8D2D\u7269\u8F66\u9875\u9762\uFF0C\u91CD\u65B0\u56DE\u5230\u8D2D\u7269\u8F66\u9875\u9762\uFF0C\u5728\u4E0D\u9500\u6BC1\u5546\u54C1\u9875\u9762\u7684\u524D\u63D0\u4E0B\uFF0C\u518D\u6B21\u70B9\u51FB\u540C\u6837\u7684\u5546\u54C1\u5219\u4E0D\u4F1A\u91CD\u65B0\u52A0\u8F7D\u65B0\u9875\u9762\uFF0C\u70B9\u51FB\u4E00\u4E0B\u8BD5\u8BD5\u5427"}),c(x,{class:"card-goods",modelValue:n.checkedGoods,"onUpdate:modelValue":o[0]||(o[0]=e=>n.checkedGoods=e)},{default:b(()=>[(s(!0),_(C,null,B(n.goods,e=>(s(),y(g,{class:"card-goods__item",key:e.id,name:e.id},{default:b(()=>[c(h,{title:e.title,desc:e.desc,num:e.num,price:r.formatPrice(e.price),thumb:e.thumb,onClick:G(j=>t.$router.push({name:"goods",query:{id:e.id}}),["stop"])},null,8,["title","desc","num","price","thumb","onClick"])]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue"]),c(k,{price:r.totalPrice,disabled:!n.checkedGoods.length,"button-text":r.submitBarText,onSubmit:r.onSubmit},null,8,["price","disabled","button-text","onSubmit"])])}var q=S($,[["render",w],["__scopeId","data-v-58164687"]]);export{q as default};
