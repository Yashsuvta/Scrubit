"use strict";(self.webpackChunkscrubbit_music_app_application=self.webpackChunkscrubbit_music_app_application||[]).push([[913],{7913:(R,p,r)=>{r.r(p),r.d(p,{ProfileModule:()=>H});var d=r(6895),f=r(7206),u=r(6225),e=r(4650),m=r(6198),g=r(7185),h=r(5412),w=r(8527),c=r(3456),l=r(4006),x=r(7392),v=r(4144);function P(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"img",20),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.backToHome())}),e.qZA()}}function C(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"img",20),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.editProfile=!1)}),e.qZA()}}function Z(o,s){if(1&o&&(e.TgZ(0,"span",34),e._uU(1),e.qZA()),2&o){const t=e.oxw(3);e.xp6(1),e.hij(" ",t.validationError.full_name,"")}}function M(o,s){if(1&o&&(e.TgZ(0,"span",34),e._uU(1),e.qZA()),2&o){const t=e.oxw(3);e.xp6(1),e.hij(" ",t.validationError.username,"")}}const _=function(){return{standalone:!0}};function T(o,s){if(1&o){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",26)(2,"label",27),e._uU(3,"Full Name"),e.qZA(),e.TgZ(4,"input",28,29),e.NdJ("ngModelChange",function(i){e.CHM(t);const a=e.oxw(2);return e.KtG(a.user.full_name=i)}),e.qZA(),e.YNc(6,Z,2,1,"span",30),e.qZA(),e.TgZ(7,"div",26)(8,"label",31),e._uU(9,"Email"),e.qZA(),e.TgZ(10,"input",32,33),e.NdJ("ngModelChange",function(i){e.CHM(t);const a=e.oxw(2);return e.KtG(a.user.username=i)}),e.qZA(),e.YNc(12,M,2,1,"span",30),e.qZA(),e.BQk()}if(2&o){const t=e.oxw(2);e.xp6(4),e.Q6J("ngModel",t.user.full_name)("ngModelOptions",e.DdM(7,_)),e.xp6(2),e.Q6J("ngIf",t.validationError.full_name),e.xp6(4),e.Q6J("ngModel",t.user.username)("ngClass",t.validationError.username?"is-invalid":"")("ngModelOptions",e.DdM(8,_)),e.xp6(2),e.Q6J("ngIf",t.validationError.username)}}function y(o,s){if(1&o&&(e.TgZ(0,"span",48),e._uU(1),e.qZA()),2&o){const t=e.oxw(3);e.xp6(1),e.hij(" ",t.validationError.old_password,"")}}function b(o,s){if(1&o&&(e.TgZ(0,"span",48),e._uU(1),e.qZA()),2&o){const t=e.oxw(3);e.xp6(1),e.hij(" ",t.validationError.new_password,"")}}function A(o,s){if(1&o&&(e.TgZ(0,"span",48),e._uU(1),e.qZA()),2&o){const t=e.oxw(3);e.xp6(1),e.hij(" ",t.validationError.confirm_password,"")}}function E(o,s){if(1&o){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",26)(2,"label",35),e._uU(3," Old password "),e.qZA(),e.TgZ(4,"input",36,37),e.NdJ("ngModelChange",function(i){e.CHM(t);const a=e.oxw(2);return e.KtG(a.user.old_password=i)}),e.qZA(),e.TgZ(6,"mat-icon",38),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.toggleVisibility())}),e._uU(7),e.qZA(),e.YNc(8,y,2,1,"span",39),e.qZA(),e.TgZ(9,"div",26)(10,"label",40),e._uU(11," New password "),e.qZA(),e.TgZ(12,"input",41,42),e.NdJ("ngModelChange",function(i){e.CHM(t);const a=e.oxw(2);return e.KtG(a.user.new_password=i)}),e.qZA(),e.TgZ(14,"mat-icon",43),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.togglePasswordVisibility())}),e._uU(15),e.qZA(),e.YNc(16,b,2,1,"span",39),e.qZA(),e.TgZ(17,"div",26)(18,"label",44),e._uU(19," Confirm password "),e.qZA(),e.TgZ(20,"input",45,46),e.NdJ("ngModelChange",function(i){e.CHM(t);const a=e.oxw(2);return e.KtG(a.user.confirm_password=i)}),e.qZA(),e.TgZ(22,"mat-icon",47),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.toggleVisibilityConfirm())}),e._uU(23),e.qZA(),e.YNc(24,A,2,1,"span",39),e.qZA(),e.BQk()}if(2&o){const t=e.oxw(2);e.xp6(4),e.Q6J("ngModel",t.user.old_password)("ngClass",t.validationError.old_password?"is-invalid":"")("type",t.Showpassword?"text":"password"),e.xp6(3),e.hij(" ",t.Showpassword?"visibility":"visibility_off"," "),e.xp6(1),e.Q6J("ngIf",t.validationError&&t.validationError.old_password),e.xp6(4),e.Q6J("ngModel",t.user.new_password)("ngClass",t.validationError.new_password?"is-invalid":"")("type",t.showPassword?"text":"password"),e.xp6(2),e.Q6J("ngClass",t.validationError.new_password?"eyeicon-profile-new-after":"eyeicon-profile-new-before"),e.xp6(1),e.hij(" ",t.showPassword?"visibility":"visibility_off"," "),e.xp6(1),e.Q6J("ngIf",t.validationError&&t.validationError.new_password),e.xp6(4),e.Q6J("ngModel",t.user.confirm_password)("ngClass",t.validationError.confirm_password?"is-invalid":"")("type",t.showPasswordConfirm?"text":"password"),e.xp6(2),e.Q6J("ngClass",t.validationError.confirm_password?"eyeicon-profile-confirm-after":"eyeicon-profile-confirm-before"),e.xp6(1),e.hij(" ",t.showPasswordConfirm?"visibility":"visibility_off"," "),e.xp6(1),e.Q6J("ngIf",t.validationError&&t.validationError.confirm_password)}}function J(o,s){1&o&&e._UZ(0,"img",49)}function N(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"div")(1,"div",21)(2,"form",22,23),e.NdJ("ngSubmit",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.onSubmit(i.user))}),e.YNc(4,T,13,9,"ng-container",16),e.YNc(5,E,25,17,"ng-container",16),e.TgZ(6,"button",24),e._uU(7),e.YNc(8,J,1,0,"img",25),e.qZA()()()()}if(2&o){const t=e.oxw();e.xp6(4),e.Q6J("ngIf",!t.changePassword),e.xp6(1),e.Q6J("ngIf",t.changePassword),e.xp6(2),e.Oqu(t.changePassword?"Change Password":"Save"),e.xp6(1),e.Q6J("ngIf",!t.changePassword)}}function U(o,s){if(1&o&&(e.TgZ(0,"p",59),e._uU(1),e.qZA()),2&o){const t=e.oxw(2);e.xp6(1),e.Oqu(t.profileName)}}function q(o,s){1&o&&(e.TgZ(0,"p",59),e._uU(1,"-"),e.qZA())}function k(o,s){if(1&o&&(e.TgZ(0,"p",59),e._uU(1),e.qZA()),2&o){const t=e.oxw(2);e.xp6(1),e.Oqu(t.profileMail)}}function I(o,s){1&o&&(e.TgZ(0,"p",59),e._uU(1,"-"),e.qZA())}function O(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"div",50)(1,"div",7)(2,"div",51)(3,"ul",52)(4,"li")(5,"label",53),e._uU(6,"Display Name"),e.qZA()(),e.TgZ(7,"li"),e.YNc(8,U,2,1,"p",54),e.YNc(9,q,2,0,"p",54),e.qZA()()(),e.TgZ(10,"div")(11,"button",55),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.edit())}),e._uU(12," Edit "),e.qZA()()(),e.TgZ(13,"div",7)(14,"div",51)(15,"ul",52)(16,"li")(17,"label",53),e._uU(18,"Email"),e.qZA()(),e.TgZ(19,"li"),e.YNc(20,k,2,1,"p",54),e.YNc(21,I,2,0,"p",54),e.qZA()()(),e.TgZ(22,"div")(23,"button",55),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return i.editProfile=!0,e.KtG(i.changePassword=!1)}),e._uU(24," Edit "),e.qZA()()(),e.TgZ(25,"div",7)(26,"div",51)(27,"ul",52)(28,"li")(29,"label",56),e._uU(30,"Password"),e.qZA()(),e.TgZ(31,"li")(32,"h1",57),e._uU(33,". . . . . . ."),e.qZA()()()(),e.TgZ(34,"div",58)(35,"button",55),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return i.editProfile=!0,e.KtG(i.changePassword=!0)}),e._uU(36," Change "),e.qZA()()()()}if(2&o){const t=e.oxw();e.xp6(8),e.Q6J("ngIf",t.profileName),e.xp6(1),e.Q6J("ngIf",!t.profileName),e.xp6(11),e.Q6J("ngIf",t.profileMail),e.xp6(1),e.Q6J("ngIf",!t.profileMail)}}function S(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"button",60),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.logout())}),e._uU(1,"Log Out"),e._UZ(2,"img",61),e.qZA()}}const Q=[{path:"",component:(()=>{class o{constructor(t,n,i,a,G,K){this.coreService=t,this.location=n,this.toastr=i,this.dialog=a,this.authService=G,this.router=K,this.profile={full_name:"",email:""},this.errorMsg=!1,this.user={},this.editProfile=!1,this.changePassword=!1,this.validationError={},this.Showpassword=!1,this.showPassword=!1,this.showPasswordConfirm=!1}togglePasswordVisibility(){this.showPassword=!this.showPassword}toggleVisibility(){this.Showpassword=!this.Showpassword}toggleVisibilityConfirm(){this.showPasswordConfirm=!this.showPasswordConfirm}ngOnInit(){let t=localStorage.getItem("FOO")||"{}",i=f.AES.decrypt(t,"$SCRUB$").toString(f.enc.Utf8);i=i.split("@")[0],this.avtar=i.charAt(0).toUpperCase(),this.showUser()}show(t){this.coreService.spinnerShow(t)}backToHome(){this.editProfile=!1,this.location.back(),this.validationError={}}showUser(){this.show(!0),this.coreService.get("user/").subscribe({next:t=>{this.show(!1),this.profileMail=t.email,this.profileName=t.full_name,this.user.full_name=this.profileName,this.user.username=this.profileMail},error:()=>{this.show(!1),this.close=!0,this.errorMsg=!0}})}edit(){this.editProfile=!0}onSubmit(t){if(this.changePassword&&this.validateInputs(t)){let n={old_password:t.old_password,new_password:t.new_password};this.show(!0),this.coreService.put("user/password",n).subscribe({next:i=>{this.show(!1),this.toastr.success("Password Updated Successfully","Success",{timeOut:3e3}),i&&this.logout(),this.editProfile=!1,this.changePassword=!1},error:()=>{this.show(!1),this.close=!0,this.errorMsg=!0}})}t.username===this.profileMail||this.changePassword?this.changePassword||this.validateInputs(t)&&(this.show(!0),this.coreService.put("user/details",t).subscribe({next:n=>{this.show(!1),this.toastr.success("Profile Updated Successfully","Success",{timeOut:3e3}),this.showUser(),this.editProfile=!1},error:()=>{this.show(!1)}})):this.validateInputs(t)&&this.dialog.open(u.z,{disableClose:!0,data:{profileData:t,title:"Are you sure you want to update your email?",message:"This process required reverification of your updated Mail Id."}})}validateInputs(t){this.validationError={};let n=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.username&&""!==t.username.trim()?n.test(t.username)||(this.validationError.username="Please enter valid email!"):this.validationError.username="Please enter your email!",t.old_password&&""!==t.old_password.trim()||!this.changePassword?(!t.old_password||t.old_password.length<8)&&(this.validationError.old_password="Require minimum 8 letter!"):this.validationError.old_password="Please enter your password",(t.confirm_password?""===t.confirm_password.trim():this.changePassword)?this.validationError.confirm_password="Please enter your password!":(t.confirm_password?t.confirm_password.length<8:this.changePassword)&&(this.validationError.confirm_password="Require minimum 8 letter!"),t.confirm_password!=t.new_password&&this.changePassword&&(this.validationError.confirm_password="your confirm password does not match!"),(t.new_password?""===t.new_password.trim():this.changePassword)?this.validationError.new_password="Please enter your password":(t.new_password?t.new_password.length<8:this.changePassword)&&(this.validationError.new_password="Require minimum 8 letter!"),(!t.full_name||""===t.full_name.trim())&&(this.validationError.full_name="please enter your full name!"),!(!n.test(t.username)||!t.username||""===t.username.trim()||t.confirm_password!=t.new_password&&this.changePassword||(!t.confirm_password||t.confirm_password.length<8)&&this.changePassword||(!t.confirm_password||""===t.confirm_password.trim())&&this.changePassword||(!t.old_password||""===t.old_password.trim())&&this.changePassword||(!t.old_password||t.old_password.length<8)&&this.changePassword||(!t.new_password||""===t.new_password.trim())&&this.changePassword||(!t.new_password||t.new_password.length<8)&&this.changePassword||!t.full_name||""===t.full_name.trim()||(this.validationError={},0))}logout(){this.authService.clearSessionStorage(),this.router.navigate(["/landing-page"])}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(m.p),e.Y36(d.Ye),e.Y36(g._W),e.Y36(h.uw),e.Y36(w.e),e.Y36(c.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-profile"]],decls:26,vars:7,consts:[["rel","stylesheet","href","/assets/css/bootstrap.min.css"],[1,"container-fluid","p-0","bg-color-blue"],[1,"auth-wrapper"],[1,"main"],[1,"col-12","mb-4","mt-2","d-flex","justify-content-flex-start","align-items-center"],["class","cursor-pointer","src","/assets/profile-page-assets/back-icon.svg",3,"click",4,"ngIf"],[1,"mb-0","fs-42","font-nunito"],[1,"row"],[1,"col-2"],[1,"profile-dp","mb-4"],[1,"position-relative","d-inline-block"],[1,"avtar-text","fs-42","font-poppins"],[1,"cursor-pointer","edit-badge",3,"click"],["src","/assets/profile-page-assets/edit-icon.svg"],[1,"col-9","d-flex","ml-4","p-0","justify-content-flex-start","align-items-center"],[1,"pl-3",2,"font-weight","bold"],[4,"ngIf"],["class","white-profile-card font-poppins ",4,"ngIf"],[1,"mt-5","logout"],["class","btn btn-logout fs-18 mb-4",3,"click",4,"ngIf"],["src","/assets/profile-page-assets/back-icon.svg",1,"cursor-pointer",3,"click"],[1,"col-12","mt-5"],[1,"font-poppins",3,"ngSubmit"],["myForm","ngForm"],["type","submit",1,"btn","btn-logout","fs-18","mb-4"],["class","pl-2","src","assets/profile-page-assets/save.svg",4,"ngIf"],[1,"form-group","mb-4"],["for","full_name",1,"d-flex","fs-16","text-muted"],["type","text","id","full_name",3,"ngModel","ngModelOptions","ngModelChange"],["full_name","ngModel"],["class","invalid-feedback ml-2 d-flex mb-3",4,"ngIf"],["for","username",1,"fs-16","text-muted","d-flex"],["type","text","id","username",3,"ngModel","ngClass","ngModelOptions","ngModelChange"],["username","ngModel"],[1,"invalid-feedback","ml-2","d-flex","mb-3"],["for","old_password",1,"d-flex","fs-16","text-muted"],["name","old_password","type","password","id","old_password","matInput","",3,"ngModel","ngClass","type","ngModelChange"],["old_password","ngModel"],[1,"eyeicon-profile-old",3,"click"],["class","invalid-feedback mb-3 ml-2 d-flex",4,"ngIf"],["for","new_password",1,"fs-16","text-muted","d-flex"],["name","new_password","type","password","id","password","name","password","matInput","",3,"ngModel","ngClass","type","ngModelChange"],["new_password","ngModel"],[1,"eyeicon-profile-new","cursor-pointer",3,"ngClass","click"],["for","confirm_password",1,"fs-16","text-muted","d-flex"],["name","confirm_password","type","password","id","confirm_password","matInput","",3,"ngModel","ngClass","type","ngModelChange"],["confirm_password","ngModel"],[1,"cursor-pointer",3,"ngClass","click"],[1,"invalid-feedback","mb-3","ml-2","d-flex"],["src","assets/profile-page-assets/save.svg",1,"pl-2"],[1,"white-profile-card","font-poppins"],[1,"col-sm-8","col-form-label","pt-0","pb-0"],[1,"list-unstyled","justify-content-flex-start","display-grid"],[1,"mb-1","float-left","text-muted","fs-16"],["class","float-left fs-20",4,"ngIf"],[1,"btn","btn-edit",3,"click"],[1,"mb-0","float-left","text-muted","fs-16"],[1,"float-left","fs-20",2,"font-weight","bold"],[1,""],[1,"float-left","fs-20"],[1,"btn","btn-logout","fs-18","mb-4",3,"click"],["src","assets/profile-page-assets/logout.svg",1,"pl-2"]],template:function(t,n){1&t&&(e._UZ(0,"link",0),e.TgZ(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),e.YNc(5,P,1,0,"img",5),e._uU(6,"\xa0\xa0 "),e.YNc(7,C,1,0,"img",5),e._uU(8,"\xa0\xa0 "),e.TgZ(9,"h1",6),e._uU(10,"Profile"),e.qZA()(),e.TgZ(11,"div",7)(12,"div",8)(13,"div",9)(14,"div",10)(15,"span",11),e._uU(16),e.qZA()(),e.TgZ(17,"div",12),e.NdJ("click",function(){return n.editProfile=!0}),e._UZ(18,"img",13),e.qZA()()(),e.TgZ(19,"div",14)(20,"h2",15),e._uU(21),e.qZA()()(),e.YNc(22,N,9,4,"div",16),e.YNc(23,O,37,4,"div",17),e.TgZ(24,"div",18),e.YNc(25,S,3,0,"button",19),e.qZA()()()()),2&t&&(e.xp6(5),e.Q6J("ngIf",!n.editProfile),e.xp6(2),e.Q6J("ngIf",n.editProfile),e.xp6(9),e.Oqu(n.avtar),e.xp6(5),e.Oqu(n.profileName),e.xp6(1),e.Q6J("ngIf",n.editProfile),e.xp6(1),e.Q6J("ngIf",!n.editProfile),e.xp6(2),e.Q6J("ngIf",!n.editProfile))},dependencies:[d.mk,d.O5,l._Y,l.Fj,l.JJ,l.JL,l.On,l.F,x.Hw,v.Nt],styles:[".auth-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative;justify-content:center;overflow:hidden;min-width:100%;min-height:calc(100vh - 52px);text-align:center}.card[_ngcontent-%COMP%]{justify-content:center;box-shadow:none;border-style:none;background:rgba(255,255,255,.8);box-shadow:0 0 20px #c7e3ff80;border-radius:20px}.btn-blue[_ngcontent-%COMP%]{background:#0094FF;border-radius:29px;width:190px;height:52px;color:#fff;font-size:18px;font-family:Poppins;border:none}.card-body[_ngcontent-%COMP%]{justify-content:center;margin-top:2rem}.main[_ngcontent-%COMP%]{justify-content:center;align-items:center;width:35rem!important}input[_ngcontent-%COMP%]{font-size:16px;height:auto;margin:0;outline:0;padding:15px;width:100%;background:rgba(255,255,255,.8);box-shadow:0 0 20px #c7e3ff80;border-radius:30px;opacity:.5;border:1px solid white}.btn-logout[_ngcontent-%COMP%]{outline:none;color:#fff;background:#0096FF;border-radius:29px;width:190px;height:52px;border:none;font-family:Poppins;font-weight:500}.btn-logout[_ngcontent-%COMP%]:hover{color:#fff!important}.avtar-text[_ngcontent-%COMP%]{position:relative;top:24px;line-height:50px;color:#fff;font-weight:700}.eyeicon-profile-old[_ngcontent-%COMP%]{position:absolute;right:2rem;top:2.5rem}.eyeicon-profile-new-before[_ngcontent-%COMP%]{position:absolute;top:9rem;right:2rem}.eyeicon-profile-new-after[_ngcontent-%COMP%]{position:absolute;top:10.5rem;right:2rem}.eyeicon-profile-confirm-before[_ngcontent-%COMP%]{position:absolute;top:15.5rem;right:2rem}.eyeicon-profile-confirm-after[_ngcontent-%COMP%]{position:absolute;bottom:8.5rem;right:2rem}"]}),o})()}];let Y=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[c.Bz.forChild(Q),c.Bz]}),o})();var F=r(6227);let H=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[d.ez,Y,F.m]}),o})()}}]);