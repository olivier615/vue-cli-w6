"use strict";(self["webpackChunkcli_demo"]=self["webpackChunkcli_demo"]||[]).push([[605],{1530:function(t,a,s){function i(t){return{all:t=t||new Map,on:function(a,s){var i=t.get(a);i?i.push(s):t.set(a,[s])},off:function(a,s){var i=t.get(a);i&&(s?i.splice(i.indexOf(s)>>>0,1):t.set(a,[]))},emit:function(a,s){var i=t.get(a);i&&i.slice().map((function(t){t(s)})),(i=t.get("*"))&&i.slice().map((function(t){t(a,s)}))}}}s.d(a,{Z:function(){return e}});const o=i();var e=o},605:function(t,a,s){s.r(a),s.d(a,{default:function(){return I}});var i=s(6252);function o(t,a,s,o,e,n){const r=(0,i.up)("FrontViewNavBar"),c=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(r),(0,i.Wm)(c)],64)}var e=s(3577);const n={class:"navbar navbar-expand-lg navbar-light"},r={class:"container-fluid"},c=(0,i.Uk)("前台"),l=(0,i._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,i._)("span",{class:"navbar-toggler-icon"})],-1),d={class:"collapse navbar-collapse",id:"navbarSupportedContent"},h={class:"navbar-nav me-auto mb-2 mb-lg-0"},p={class:"nav-item"},u=(0,i.Uk)("首頁"),g={class:"nav-item"},v=(0,i.Uk)("購物車"),m={class:"nav-item"},f=(0,i.Uk)("產品列表"),b={class:"nav-item"},_=(0,i.Uk)("進入後台"),C=(0,i.Uk)(" 結帳 "),L={class:"badge rounded-pill bg-danger"};function k(t,a,s,o,k,w){const D=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("nav",n,[(0,i._)("div",r,[(0,i.Wm)(D,{class:"navbar-brand",to:"/"},{default:(0,i.w5)((()=>[c])),_:1}),l,(0,i._)("div",d,[(0,i._)("ul",h,[(0,i._)("li",p,[(0,i.Wm)(D,{class:"nav-link",to:"/"},{default:(0,i.w5)((()=>[u])),_:1})]),(0,i._)("li",g,[(0,i.Wm)(D,{class:"nav-link",to:"/cart"},{default:(0,i.w5)((()=>[v])),_:1})]),(0,i._)("li",m,[(0,i.Wm)(D,{class:"nav-link",to:"/products"},{default:(0,i.w5)((()=>[f])),_:1})]),(0,i._)("li",b,[(0,i.Wm)(D,{class:"nav-link",to:"/admin"},{default:(0,i.w5)((()=>[_])),_:1})])]),(0,i.Wm)(D,{class:"btn btn-primary",to:"/order"},{default:(0,i.w5)((()=>[C,(0,i._)("span",L,(0,e.zw)(k.cartData.carts?.length),1)])),_:1})])])])}var w=s(1530),D={data(){return{products:{},productId:"",cartData:{},isLoading:"",form:{user:{name:"",email:"",tel:"",address:""},message:""}}},methods:{updateQty(t){this.isLoading=t.id;const a={product_id:t.id,qty:t.qty};this.$http.put(`https://vue3-course-api.hexschool.io/v2/api/otispath/cart/${t.id}`,{data:a}).then((t=>{this.getCartData(),this.isLoading=""})).catch((t=>{console.log(t),this.isLoading=""}))},deleteCartItem(t){this.isLoading=t,this.$http.delete(`https://vue3-course-api.hexschool.io/v2/api/otispath/cart/${t}`).then((t=>{this.getCartData(),this.isLoading=""})).catch((t=>{console.log(t),this.isLoading=""}))},cleanCart(){this.isLoading=!0,this.$http.delete("https://vue3-course-api.hexschool.io/v2/api/otispath/carts").then((t=>{this.getCartData(),this.isLoading=""})).catch((t=>{console.log(t),this.isLoading=""}))},addItemToCart(t,a=1){const s={product_id:t,qty:a};this.isLoading=t,this.$http.post("https://vue3-course-api.hexschool.io/v2/api/otispath/cart",{data:s}).then((t=>{this.getCartData(),this.isLoading=""})).catch((t=>{console.log(t),this.isLoading=""}))},openProductModal(t){this.productId=t,this.$refs.productModal.openModal()},getCartData(){this.$http.get("https://vue3-course-api.hexschool.io/v2/api/otispath/cart").then((t=>{this.cartData=t.data.data})).catch((t=>{console.log(t)}))},submitOrder(){this.isLoading=!0,this.$http.post("https://vue3-course-api.hexschool.io/v2/api/otispath/order",{data:this.form}).then((t=>{alert("訂單已成功送出"),this.getCartData(),this.$refs.form.resetForm(),this.isLoading=""})).catch((t=>{console.log(t),this.isLoading=""}))}},mounted(){this.getCartData(),w.Z.on("get-cart",(()=>{this.getCartData()}))}},$=s(3744);const x=(0,$.Z)(D,[["render",k]]);var W=x,y={components:{FrontViewNavBar:W}};const U=(0,$.Z)(y,[["render",o]]);var I=U}}]);
//# sourceMappingURL=605.ddeadd11.js.map