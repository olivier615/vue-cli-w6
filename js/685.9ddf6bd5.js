"use strict";(self["webpackChunkcli_demo"]=self["webpackChunkcli_demo"]||[]).push([[685],{8685:function(e,s,o){o.r(s),o.d(s,{default:function(){return g}});var r=o(6252),t=o(9963);const n={class:"container"},a={class:"row justify-content-center"},l=(0,r._)("h1",{class:"h3 mb-3 font-weight-normal"},"請先登入",-1),i={class:"col-8"},u={id:"form",class:"form-signin"},c={class:"form-floating mb-3"},d=(0,r._)("label",{for:"username"},"Email address",-1),m={class:"form-floating"},p=(0,r._)("label",{for:"password"},"Password",-1),h=(0,r._)("p",{class:"mt-5 mb-3 text-muted"},"© 2021~∞ - 六角學院",-1);function f(e,s,o,f,w,_){return(0,r.wg)(),(0,r.iD)("div",n,[(0,r._)("div",a,[l,(0,r._)("div",i,[(0,r._)("form",u,[(0,r._)("div",c,[(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":s[0]||(s[0]=e=>w.user.username=e),type:"email",class:"form-control",id:"username",placeholder:"name@example.com",required:"",autofocus:""},null,512),[[t.nr,w.user.username]]),d]),(0,r._)("div",m,[(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":s[1]||(s[1]=e=>w.user.password=e),type:"password",class:"form-control",id:"password",placeholder:"Password",required:""},null,512),[[t.nr,w.user.password]]),p]),(0,r._)("button",{onClick:s[2]||(s[2]=(0,t.iM)(((...e)=>_.login&&_.login(...e)),["prevent"])),class:"btn btn-lg btn-primary w-100 mt-3",type:"submit"}," 登入 ")])])]),h])}var w={data(){return{url:"https://vue3-course-api.hexschool.io/v2",user:{username:"",password:""}}},methods:{login(){const e=`${this.url}/admin/signin`;this.$http.post(e,this.user).then((e=>{const{token:s,expired:o}=e.data;document.cookie=`otisToken=${s};expires=${new Date(o)}; path=/`,this.$router.push("/admin")})).catch((e=>{console.log(e.data)}))}}},_=o(3744);const b=(0,_.Z)(w,[["render",f]]);var g=b}}]);
//# sourceMappingURL=685.9ddf6bd5.js.map