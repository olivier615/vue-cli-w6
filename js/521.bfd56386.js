"use strict";(self["webpackChunkcli_demo"]=self["webpackChunkcli_demo"]||[]).push([[521],{3521:function(e,l,a){a.r(l),a.d(l,{default:function(){return W}});var s=a(6252),m=a(3577),o=a(9963);const r={class:"home container"},d={class:"mb-3"},n=(0,s._)("label",{for:"email",class:"form-label"},"Email",-1),i={class:"mb-3"},u=(0,s._)("label",{for:"name",class:"form-label"},"姓名",-1),t={class:"mb-3"},c=(0,s._)("label",{for:"tel",class:"form-label"},"電話",-1),f={class:"mb-3"},b=(0,s._)("label",{for:"address",class:"form-label"},"地址",-1),p={class:"mb-3"},v=(0,s._)("label",{for:"message",class:"form-label"},"留言",-1),_=["onClick"];function V(e,l,a,V,h,k){const g=(0,s.up)("FieldTemp"),W=(0,s.up)("error-message"),w=(0,s.up)("FormTemp");return(0,s.wg)(),(0,s.iD)("div",r,[(0,s.Wm)(w,{onSubmit:k.onSubmit},{default:(0,s.w5)((({errors:e,values:a,validate:r})=>[(0,s.Uk)((0,m.zw)(e)+" "+(0,m.zw)(a)+" ",1),(0,s._)("div",d,[n,(0,s.Wm)(g,{id:"email",name:"email",type:"email",class:(0,m.C_)(["form-control",{"is-invalid":e["email"]}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:h.form.user.email,"onUpdate:modelValue":l[0]||(l[0]=e=>h.form.user.email=e)},null,8,["class","modelValue"]),(0,s.Wm)(W,{name:"email",class:"invalid-feedback"})]),(0,s._)("div",i,[u,(0,s.Wm)(g,{id:"name",name:"姓名",type:"text",class:(0,m.C_)(["form-control",{"is-invalid":e["姓名"]}]),placeholder:"請輸入姓名",rules:"required",modelValue:h.form.user.name,"onUpdate:modelValue":l[1]||(l[1]=e=>h.form.user.name=e)},null,8,["class","modelValue"]),(0,s.Wm)(W,{name:"姓名",class:"invalid-feedback"})]),(0,s._)("div",t,[c,(0,s.Wm)(g,{id:"tel",name:"電話",type:"tel",class:(0,m.C_)(["form-control",{"is-invalid":e["電話"]}]),placeholder:"請輸入電話",rules:"required|min:8",modelValue:h.form.user.tel,"onUpdate:modelValue":l[2]||(l[2]=e=>h.form.user.tel=e)},null,8,["class","modelValue"]),(0,s.Wm)(W,{name:"電話",class:"invalid-feedback"})]),(0,s._)("div",f,[b,(0,s.Wm)(g,{id:"address",name:"地址",type:"text",class:(0,m.C_)(["form-control",{"is-invalid":e["地址"]}]),placeholder:"請輸入地址",rules:"required",modelValue:h.form.user.address,"onUpdate:modelValue":l[3]||(l[3]=e=>h.form.user.address=e)},null,8,["class","modelValue"]),(0,s.Wm)(W,{name:"地址",class:"invalid-feedback"})]),(0,s._)("div",p,[v,(0,s.wy)((0,s._)("textarea",{id:"message",class:"form-control",cols:"15",rows:"5","onUpdate:modelValue":l[4]||(l[4]=e=>h.form.message=e)},null,512),[[o.nr,h.form.message]])]),(0,s._)("button",{class:"btn me-2 btn-outline-primary",type:"button",onClick:r}," 送出訂單 ",8,_)])),_:1},8,["onSubmit"])])}var h={data(){return{form:{user:{name:"",email:"",tel:"",address:""},message:""}}},methods:{onSubmit(){console.log(this.user)}},mounted(){console.log(this)}},k=a(3744);const g=(0,k.Z)(h,[["render",V]]);var W=g}}]);
//# sourceMappingURL=521.bfd56386.js.map