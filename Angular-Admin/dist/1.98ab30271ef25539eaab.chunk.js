webpackJsonp([1],{"72Ni":function(t,n,e){"use strict";var o=e("TToO").__decorate,i=e("TToO").__metadata;Object.defineProperty(n,"__esModule",{value:!0});var r=e("WT6e");n.CKButtonDirective=function(){function t(){this.click=new r.EventEmitter}return t.prototype.initialize=function(t){var n=this;t.instance.addCommand(this.command,{exec:function(t){n.click.emit(t)}}),t.instance.ui.addButton(this.name,{label:this.label,command:this.command,toolbar:this.toolbar,icon:this.icon})},t.prototype.ngOnInit=function(){if(!this.name)throw new Error('Attribute "name" is required on <ckbutton>');if(!this.command)throw new Error('Attribute "command" is required on <ckbutton>')},o([r.Output(),i("design:type",Object)],t.prototype,"click",void 0),o([r.Input(),i("design:type",String)],t.prototype,"label",void 0),o([r.Input(),i("design:type",String)],t.prototype,"command",void 0),o([r.Input(),i("design:type",String)],t.prototype,"toolbar",void 0),o([r.Input(),i("design:type",String)],t.prototype,"name",void 0),o([r.Input(),i("design:type",String)],t.prototype,"icon",void 0),o([r.Directive({selector:"ckbutton"})],t)}()},"97vE":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e("WT6e"),i=function(){},r=e("INQx"),u=e("3w1A"),d=e("UPmS"),l=e("Xjw4"),a=e("7DMc"),s=e("bfOx");e("NujX"),e("6Qvr"),e("TToO"),e("tZ2B"),e("PIsA"),e("OVmG"),e("3lw+"),e("1Q68"),e("VwZZ"),e("GK6M"),e("fKB6"),e("T4hI"),e("E4iY"),e("Jn0N"),e("319O"),e("6VmJ");var c=e("JXyw");e("2ESx"),e("fmCu"),e("jhW9"),e("YaPU"),e("AMGY"),e("pU/0"),e("ehgS");var p=e("w9is");e("DGZn"),e("keGL");var h=e("g5jc");e("gIN1"),e("FcdX"),e("HdCx"),e("/4Bh"),e("ce/b"),e("8D5t"),e("Qnch"),e("Jwyl"),e("zrQW"),e("mnL7"),e("BX3T"),e("4zOZ"),e("Ne5x"),e("x6VL"),e("1Bqh"),e("Veqx"),e("+3/4"),e("0P3J"),e("E5SG"),e("3a3m"),e("CB8l"),e("OmGl"),e("5X6E"),e("lAP5"),e("9Ocp"),e("T1Dh"),e("E7f3"),e("0FoY"),Error,e("DDro"),e("/acl"),e("etqZ");var g=function(){function t(){this.loaded=!1,this.list={},this.emitter=new h.Subject}return t.prototype.getChangeEmitter=function(){return this.emitter},t.prototype.load=function(t,n){var e=this;if(this.loaded)return this;this.loaded=!0;var o=[];return t.endsWith("/")||(t+="/"),[t+"ueditor.config.js",!0===n?t+"ueditor.all.js":t+"ueditor.all.min.js"].forEach(function(t){return o.push(e.loadScript(t))}),Promise.all(o).then(function(t){e.emitter.next(!0)}),this},t.prototype.loadScript=function(t){var n=this;return new Promise(function(e,o){if(!0!==n.list[t]){n.list[t]=!0;var i=document.createElement("script");i.type="text/javascript",i.src=t,i.charset="utf-8",i.readyState?i.onreadystatechange=function(){"loaded"!==i.readyState&&"complete"!==i.readyState||(i.onreadystatechange=null,e({path:t,loaded:!0,status:"Loaded"}))}:i.onload=function(){e({path:t,loaded:!0,status:"Loaded"})},i.onerror=function(n){return e({path:t,loaded:!1,status:"Loaded"})},document.getElementsByTagName("head")[0].appendChild(i)}else e({path:t,loaded:!0,status:"Loaded"})})},t}(),f=function(){this._hook_finished=!1},m=function(){function t(t,n,e,i,r){this.el=t,this.ss=n,this.router=e,this.defConfig=i,this.cd=r,this.inited=!1,this.events={},this.loading=!0,this.id="_ueditor-"+Math.random().toString(36).substring(2),this.loadingTip="\u52a0\u8f7d\u4e2d...",this.onPreReady=new o.EventEmitter,this.onReady=new o.EventEmitter,this.onDestroy=new o.EventEmitter,this.onContentChange=new o.EventEmitter,this.onChange=Function.prototype,this.onTouched=Function.prototype}return t.prototype.ngOnInit=function(){var t=this;this.inited=!0,this.path=this.defConfig&&this.defConfig.path,this.path||(this.path="./assets/ueditor/"),this.route$=this.router.events.pipe(Object(p.a)(function(t){return t instanceof s.b}),Object(c.a)(100),Object(p.a)(function(n){return!!document.querySelector("#"+t.id)})).subscribe(function(n){t.destroy(),t.init()})},t.prototype.ngAfterViewInit=function(){var t=this;window.UE?this.init():this.ss.load(this.path,!0).getChangeEmitter().subscribe(function(n){t.init()})},t.prototype.ngOnChanges=function(t){this.inited&&t.config&&(this.destroy(),this.init())},t.prototype.init=function(t){var n=this;if(!window.UE)throw new Error("uedito js\u6587\u4ef6\u52a0\u8f7d\u5931\u8d25");if(!this.instance){this.defConfig&&this.defConfig.hook&&(this.defConfig._hook_finished||(this.defConfig._hook_finished=!0,this.defConfig.hook(UE))),this.onPreReady.emit(this);var e=Object.assign({UEDITOR_HOME_URL:this.path},this.defConfig&&this.defConfig.options,this.config,t),o=UE.getEditor(this.id,e);o.ready(function(){n.loading=!1,n.instance=o,n.value&&n.instance.setContent(n.value),n.onReady.emit(n),n.cd.markForCheck()}),o.addListener("contentChange",function(){n.value=o.getContent(),n.onChange(n.value),n.onTouched(n.value),n.onContentChange.emit(n.value)})}},t.prototype.destroy=function(){if(this.instance){for(var t=0,n=this.events;t<n.length;t++){var e=n[t];this.instance.removeListener(e,this.events[e])}this.instance.removeListener("ready"),this.instance.removeListener("contentChange"),this.instance.destroy(),this.instance=null}this.onDestroy.emit()},Object.defineProperty(t.prototype,"Instance",{get:function(){return this.instance},enumerable:!0,configurable:!0}),t.prototype.setLanguage=function(t){var n=this;this.ss.loadScript(this.path+"/lang/"+t+"/"+t+".js").then(function(e){n.destroy(),UE._bak_I18N||(UE._bak_I18N=UE.I18N),UE.I18N={},UE.I18N[t]=UE._bak_I18N[t],n.init()})},t.prototype.addListener=function(t,n){this.events[t]||(this.events[t]=n,this.instance.addListener(t,n))},t.prototype.removeListener=function(t){this.events[t]&&(this.instance.removeListener(t,this.events[t]),delete this.events[t])},t.prototype.ngOnDestroy=function(){this.destroy(),this.route$&&this.route$.unsubscribe()},t.prototype.writeValue=function(t){this.value=t,this.instance&&this.instance.setContent(this.value)},t.prototype.registerOnChange=function(t){this.onChange=t},t.prototype.registerOnTouched=function(t){this.onTouched=t},t.prototype.setDisabledState=function(t){t?this.instance.setDisabled():this.instance.setEnabled()},t}(),v=o["\u0275crt"]({encapsulation:0,styles:[".ueditor-textarea[_ngcontent-%COMP%]{display:none;}"],data:{}});function y(t){return o["\u0275vid"](0,[(t()(),o["\u0275eld"](0,0,null,null,0,"div",[["class","loading"]],[[8,"innerHTML",1]],null,null,null,null))],null,function(t,n){t(n,0,0,n.component.loadingTip)})}function C(t){return o["\u0275vid"](2,[o["\u0275qud"](402653184,1,{host:0}),(t()(),o["\u0275ted"](-1,null,["\n    "])),(t()(),o["\u0275eld"](2,0,[[1,0],["host",1]],null,0,"textarea",[["class","ueditor-textarea"]],[[8,"id",0]],null,null,null,null)),(t()(),o["\u0275ted"](-1,null,["\n    "])),(t()(),o["\u0275and"](16777216,null,null,1,null,y)),o["\u0275did"](5,16384,null,0,l.NgIf,[o.ViewContainerRef,o.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),o["\u0275ted"](-1,null,["\n    "]))],function(t,n){t(n,5,0,n.component.loading)},function(t,n){t(n,2,0,o["\u0275inlineInterpolate"](1,"",n.component.id,""))})}var b=function(){function t(){this.ueditorContent="<p>\u4e00\u4e9b\u6587\u672c</p>",this.ueditorConfig={autoHeightEnabled:!0,autoFloatEnabled:!0,autosave:!1,initialFrameHeight:400}}return t.prototype.ngOnInit=function(){},t}(),E=o["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function O(t){return o["\u0275vid"](0,[(t()(),o["\u0275eld"](0,0,null,null,1,"app-content-title",[["introduction","UEditor\u662f\u7531\u767e\u5ea6web\u524d\u7aef\u7814\u53d1\u90e8\u5f00\u53d1\u6240\u89c1\u5373\u6240\u5f97\u5bcc\u6587\u672cweb\u7f16\u8f91\u5668\uff0c\u5177\u6709\u8f7b\u91cf\uff0c\u53ef\u5b9a\u5236\uff0c\u6ce8\u91cd\u7528\u6237\u4f53\u9a8c\u7b49\u7279\u70b9\uff0c\u5f00\u6e90\u57fa\u4e8eMIT\u534f\u8bae\uff0c\u5141\u8bb8\u81ea\u7531\u4f7f\u7528\u548c\u4fee\u6539\u4ee3\u7801..."],["title","UEditor"]],null,null,null,u.b,u.a)),o["\u0275did"](1,114688,null,0,d.a,[],{title:[0,"title"],introduction:[1,"introduction"]},null),(t()(),o["\u0275ted"](-1,null,["\n"])),(t()(),o["\u0275eld"](3,0,null,null,6,"ueditor",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(t,n,e){var o=!0;return"ngModelChange"===n&&(o=!1!==(t.component.ueditorContent=e)&&o),o},C,v)),o["\u0275did"](4,4964352,null,0,m,[o.ElementRef,g,[2,s.l],f,o.ChangeDetectorRef],{config:[0,"config"],loadingTip:[1,"loadingTip"]},null),o["\u0275prd"](1024,null,a.NG_VALUE_ACCESSOR,function(t){return[t]},[m]),o["\u0275did"](6,671744,null,0,a.NgModel,[[8,null],[8,null],[8,null],[2,a.NG_VALUE_ACCESSOR]],{model:[0,"model"],options:[1,"options"]},{update:"ngModelChange"}),o["\u0275pod"](7,{standalone:0}),o["\u0275prd"](2048,null,a.NgControl,null,[a.NgModel]),o["\u0275did"](9,16384,null,0,a.NgControlStatus,[a.NgControl],null,null),(t()(),o["\u0275ted"](-1,null,["\n"]))],function(t,n){var e=n.component;t(n,1,0,"UEditor","UEditor\u662f\u7531\u767e\u5ea6web\u524d\u7aef\u7814\u53d1\u90e8\u5f00\u53d1\u6240\u89c1\u5373\u6240\u5f97\u5bcc\u6587\u672cweb\u7f16\u8f91\u5668\uff0c\u5177\u6709\u8f7b\u91cf\uff0c\u53ef\u5b9a\u5236\uff0c\u6ce8\u91cd\u7528\u6237\u4f53\u9a8c\u7b49\u7279\u70b9\uff0c\u5f00\u6e90\u57fa\u4e8eMIT\u534f\u8bae\uff0c\u5141\u8bb8\u81ea\u7531\u4f7f\u7528\u548c\u4fee\u6539\u4ee3\u7801..."),t(n,4,0,e.ueditorConfig,""),t(n,6,0,e.ueditorContent,t(n,7,0,!0))},function(t,n){t(n,3,0,o["\u0275nov"](n,9).ngClassUntouched,o["\u0275nov"](n,9).ngClassTouched,o["\u0275nov"](n,9).ngClassPristine,o["\u0275nov"](n,9).ngClassDirty,o["\u0275nov"](n,9).ngClassValid,o["\u0275nov"](n,9).ngClassInvalid,o["\u0275nov"](n,9).ngClassPending)})}var T=o["\u0275ccf"]("app-ueditor",b,function(t){return o["\u0275vid"](0,[(t()(),o["\u0275eld"](0,0,null,null,1,"app-ueditor",[],null,null,null,O,E)),o["\u0275did"](1,114688,null,0,b,[],null,null)],function(t,n){t(n,1,0)},null)},{},{},[]),D=e("SSgK"),N=o["\u0275crt"]({encapsulation:2,styles:[],data:{}});function _(t){return o["\u0275vid"](0,[o["\u0275qud"](402653184,1,{host:0}),(t()(),o["\u0275eld"](1,0,[[1,0],["host",1]],null,0,"textarea",[],null,null,null,null,null))],null,null)}var M=function(){function t(){this.ckeditorContent="<p>Some html</p>"}return t.prototype.ngOnInit=function(){},t}(),I=o["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function w(t){return o["\u0275vid"](0,[(t()(),o["\u0275eld"](0,0,null,null,1,"app-content-title",[["introduction","The battle-tested WYSIWYG HTML editor, when you need even more features and legacy compatibility."],["title","CKEditor 4"]],null,null,null,u.b,u.a)),o["\u0275did"](1,114688,null,0,d.a,[],{title:[0,"title"],introduction:[1,"introduction"]},null),(t()(),o["\u0275ted"](-1,null,["\n\n"])),(t()(),o["\u0275eld"](3,0,null,null,9,"ckeditor",[["debounce","500"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(t,n,e){var o=!0;return"ngModelChange"===n&&(o=!1!==(t.component.ckeditorContent=e)&&o),o},_,N)),o["\u0275did"](4,13287424,null,2,D.CKEditorComponent,[o.NgZone],{config:[0,"config"],readonly:[1,"readonly"],debounce:[2,"debounce"]},null),o["\u0275qud"](603979776,1,{toolbarButtons:1}),o["\u0275qud"](603979776,2,{toolbarGroups:1}),o["\u0275pod"](7,{uiColor:0,height:1}),o["\u0275prd"](1024,null,a.NG_VALUE_ACCESSOR,function(t){return[t]},[D.CKEditorComponent]),o["\u0275did"](9,671744,null,0,a.NgModel,[[8,null],[8,null],[8,null],[2,a.NG_VALUE_ACCESSOR]],{model:[0,"model"]},{update:"ngModelChange"}),o["\u0275prd"](2048,null,a.NgControl,null,[a.NgModel]),o["\u0275did"](11,16384,null,0,a.NgControlStatus,[a.NgControl],null,null),(t()(),o["\u0275ted"](-1,null,["\n"])),(t()(),o["\u0275ted"](-1,null,["\n\n"]))],function(t,n){var e=n.component;t(n,1,0,"CKEditor 4","The battle-tested WYSIWYG HTML editor, when you need even more features and legacy compatibility."),t(n,4,0,t(n,7,0,"#f7f7f7",400),!1,"500"),t(n,9,0,e.ckeditorContent)},function(t,n){t(n,3,0,o["\u0275nov"](n,11).ngClassUntouched,o["\u0275nov"](n,11).ngClassTouched,o["\u0275nov"](n,11).ngClassPristine,o["\u0275nov"](n,11).ngClassDirty,o["\u0275nov"](n,11).ngClassValid,o["\u0275nov"](n,11).ngClassInvalid,o["\u0275nov"](n,11).ngClassPending)})}var S=o["\u0275ccf"]("app-ckeditor",M,function(t){return o["\u0275vid"](0,[(t()(),o["\u0275eld"](0,0,null,null,1,"app-ckeditor",[],null,null,null,w,I)),o["\u0275did"](1,114688,null,0,M,[],null,null)],function(t,n){t(n,1,0)},null)},{},{},[]),j=e("XHgV"),U=e("Uo70"),k=e("9Sd6"),L=e("z7Rf"),R=e("ItHS"),K=e("OE0E"),A=e("6sdf"),V=e("U/+3"),G=e("1T37"),P=e("+j5Y"),x=e("NwsS"),B=e("Mcof"),W=e("7u3n"),Z=e("Z+/l"),q=e("vbUM"),F=e("YKDW"),z=e("O3jC"),H=e("H2yr"),Y=e("TBIh"),J=e("704W"),X=e("AP/s"),Q=e("XMYV"),$=e("W91W"),tt=e("gsbp"),nt=e("bkcK"),et=e("Sp5+"),ot=e("L4Ea"),it=e("o0lk"),rt=function(){},ut=function(){function t(){}return t.forRoot=function(n){return{ngModule:t,providers:[{provide:f,useValue:n}]}},t}(),dt=e("9G7n");e.d(n,"EditorModuleNgFactory",function(){return lt});var lt=o["\u0275cmf"](i,[],function(t){return o["\u0275mod"]([o["\u0275mpd"](512,o.ComponentFactoryResolver,o["\u0275CodegenComponentFactoryResolver"],[[8,[r.a,T,S]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["\u0275mpd"](4608,l.NgLocalization,l.NgLocaleLocalization,[o.LOCALE_ID,[2,l["\u0275a"]]]),o["\u0275mpd"](4608,j.a,j.a,[]),o["\u0275mpd"](4608,U.a,U.a,[]),o["\u0275mpd"](6144,k.b,null,[l.DOCUMENT]),o["\u0275mpd"](4608,k.c,k.c,[[2,k.b]]),o["\u0275mpd"](5120,L.d,L.a,[[3,L.d],[2,R.c],K.c,[2,l.DOCUMENT]]),o["\u0275mpd"](4608,A.b,A.b,[]),o["\u0275mpd"](4608,V.h,V.h,[j.a]),o["\u0275mpd"](4608,V.g,V.g,[V.h,o.NgZone,l.DOCUMENT]),o["\u0275mpd"](136192,V.d,V.b,[[3,V.d],l.DOCUMENT]),o["\u0275mpd"](5120,V.k,V.j,[[3,V.k],[2,V.i],l.DOCUMENT]),o["\u0275mpd"](5120,V.f,V.e,[[3,V.f],o.NgZone,j.a]),o["\u0275mpd"](5120,G.c,G.a,[[3,G.c],o.NgZone,j.a]),o["\u0275mpd"](5120,G.f,G.e,[[3,G.f],j.a,o.NgZone]),o["\u0275mpd"](4608,P.g,P.g,[G.c,G.f,o.NgZone,l.DOCUMENT]),o["\u0275mpd"](5120,P.c,P.h,[[3,P.c],l.DOCUMENT]),o["\u0275mpd"](4608,P.f,P.f,[G.f,l.DOCUMENT]),o["\u0275mpd"](5120,P.d,P.k,[[3,P.d],l.DOCUMENT]),o["\u0275mpd"](4608,P.a,P.a,[P.g,P.c,o.ComponentFactoryResolver,P.f,P.d,o.ApplicationRef,o.Injector,o.NgZone,l.DOCUMENT]),o["\u0275mpd"](5120,P.i,P.j,[P.a]),o["\u0275mpd"](5120,x.a,x.b,[P.a]),o["\u0275mpd"](4608,B.d,B.d,[j.a]),o["\u0275mpd"](135680,B.a,B.a,[B.d,o.NgZone]),o["\u0275mpd"](5120,W.b,W.c,[P.a]),o["\u0275mpd"](5120,Z.b,Z.a,[[3,Z.b]]),o["\u0275mpd"](4608,a["\u0275i"],a["\u0275i"],[]),o["\u0275mpd"](4608,q.a,q.a,[]),o["\u0275mpd"](4608,F.j,F.j,[F.m,F.f,F.c,F.h,F.b,F.k,F.l]),o["\u0275mpd"](4608,z.k,z.k,[z.d,z.b,o.Injector,K.c,o.NgZone]),o["\u0275mpd"](4608,H.NgDragDropService,H.NgDragDropService,[]),o["\u0275mpd"](4608,g,g,[]),o["\u0275mpd"](512,l.CommonModule,l.CommonModule,[]),o["\u0275mpd"](512,j.b,j.b,[]),o["\u0275mpd"](512,Y.c,Y.c,[]),o["\u0275mpd"](512,J.b,J.b,[]),o["\u0275mpd"](512,k.a,k.a,[]),o["\u0275mpd"](256,U.b,!0,[]),o["\u0275mpd"](512,U.e,U.e,[[2,U.b]]),o["\u0275mpd"](512,L.c,L.c,[]),o["\u0275mpd"](512,U.i,U.i,[]),o["\u0275mpd"](512,A.c,A.c,[]),o["\u0275mpd"](512,V.a,V.a,[]),o["\u0275mpd"](512,X.c,X.c,[]),o["\u0275mpd"](512,Q.l,Q.l,[]),o["\u0275mpd"](512,$.k,$.k,[]),o["\u0275mpd"](512,tt.c,tt.c,[]),o["\u0275mpd"](512,nt.c,nt.c,[]),o["\u0275mpd"](512,G.b,G.b,[]),o["\u0275mpd"](512,P.e,P.e,[]),o["\u0275mpd"](512,U.g,U.g,[]),o["\u0275mpd"](512,U.f,U.f,[]),o["\u0275mpd"](512,x.c,x.c,[]),o["\u0275mpd"](512,B.c,B.c,[]),o["\u0275mpd"](512,W.d,W.d,[]),o["\u0275mpd"](512,Z.c,Z.c,[]),o["\u0275mpd"](512,F.g,F.g,[]),o["\u0275mpd"](512,a["\u0275ba"],a["\u0275ba"],[]),o["\u0275mpd"](512,a.FormsModule,a.FormsModule,[]),o["\u0275mpd"](512,et.a,et.a,[]),o["\u0275mpd"](512,ot.NgDragDropModule,ot.NgDragDropModule,[]),o["\u0275mpd"](512,it.a,it.a,[]),o["\u0275mpd"](512,s.n,s.n,[[2,s.s],[2,s.l]]),o["\u0275mpd"](512,rt,rt,[]),o["\u0275mpd"](512,ut,ut,[]),o["\u0275mpd"](512,dt.CKEditorModule,dt.CKEditorModule,[]),o["\u0275mpd"](512,i,i,[]),o["\u0275mpd"](256,W.a,{showDelay:0,hideDelay:0,touchendHideDelay:1500},[]),o["\u0275mpd"](1024,s.j,function(){return[[{path:"ueditor",component:b},{path:"ckeditor",component:M}]]},[]),o["\u0275mpd"](256,f,{path:"assets/ueditor/",options:{themePath:"/Angular-Admin/dist/assets/ueditor/themes/"}},[])])})},"9G7n":function(t,n,e){"use strict";var o=e("TToO").__decorate;Object.defineProperty(n,"__esModule",{value:!0});var i=e("WT6e"),r=e("Xjw4"),u=e("SSgK"),d=e("72Ni"),l=e("J+nx");n.CKEditorModule=function(){return o([i.NgModule({imports:[r.CommonModule],declarations:[u.CKEditorComponent,d.CKButtonDirective,l.CKGroupDirective],exports:[u.CKEditorComponent,d.CKButtonDirective,l.CKGroupDirective]})],function(){})}()},"J+nx":function(t,n,e){"use strict";var o=e("TToO").__decorate,i=e("TToO").__metadata;Object.defineProperty(n,"__esModule",{value:!0});var r=e("WT6e"),u=e("72Ni");n.CKGroupDirective=function(){function t(){}return t.prototype.ngAfterContentInit=function(){var t=this;this.toolbarButtons.forEach(function(n){return n.toolbar=t.name})},t.prototype.initialize=function(t){t.instance.ui.addToolbarGroup(this.name,this.previous,this.subgroupOf),this.toolbarButtons.forEach(function(n){n.initialize(t)})},o([r.Input(),i("design:type",String)],t.prototype,"name",void 0),o([r.Input(),i("design:type",Object)],t.prototype,"previous",void 0),o([r.Input(),i("design:type",String)],t.prototype,"subgroupOf",void 0),o([r.ContentChildren(u.CKButtonDirective),i("design:type",r.QueryList)],t.prototype,"toolbarButtons",void 0),o([r.Directive({selector:"ckgroup"})],t)}()},SSgK:function(t,n,e){"use strict";var o=e("TToO").__decorate,i=e("TToO").__metadata;Object.defineProperty(n,"__esModule",{value:!0});var r=e("WT6e"),u=e("7DMc"),d=e("72Ni"),l=e("J+nx");n.CKEditorComponent=function(){function t(t){this.zone=t,this.change=new r.EventEmitter,this.editorChange=new r.EventEmitter,this.ready=new r.EventEmitter,this.blur=new r.EventEmitter,this.focus=new r.EventEmitter,this.contentDom=new r.EventEmitter,this.fileUploadRequest=new r.EventEmitter,this._value=""}return n=t,Object.defineProperty(t.prototype,"value",{get:function(){return this._value},set:function(t){t!==this._value&&(this._value=t,this.onChange(t))},enumerable:!0,configurable:!0}),t.prototype.ngOnChanges=function(t){t.readonly&&this.instance&&this.instance.setReadOnly(t.readonly.currentValue)},t.prototype.ngOnDestroy=function(){var t=this;this.instance&&setTimeout(function(){t.instance.removeAllListeners(),CKEDITOR.instances[t.instance.name].destroy(),t.instance.destroy(),t.instance=null})},t.prototype.ngAfterViewInit=function(){this.ckeditorInit(this.config||{})},t.prototype.ngAfterViewChecked=function(){this.ckeditorInit(this.config||{})},t.prototype.updateValue=function(t){var n=this;this.zone.run(function(){n.value=t,n.onChange(t),n.onTouched(),n.change.emit(t)})},t.prototype.ckeditorInit=function(t){var n=this;if("undefined"==typeof CKEDITOR)console.warn("CKEditor 4.x is missing (http://ckeditor.com/)");else{if(this.instance||!this.documentContains(this.host.nativeElement))return;this.readonly&&(t.readOnly=this.readonly),this.instance=CKEDITOR.replace(this.host.nativeElement,t),this.instance.setData(this.value),this.instance.on("instanceReady",function(t){n.instance.getData()!==n.value&&n.instance.setData(n.value),n.ready.emit(t)}),this.instance.on("change",function(t){n.onTouched();var e=n.instance.getData();n.value!==e&&(n.debounce?(n.debounceTimeout&&clearTimeout(n.debounceTimeout),n.debounceTimeout=setTimeout(function(){n.updateValue(e),n.debounceTimeout=null},parseInt(n.debounce))):n.updateValue(e)),n.editorChange.emit(t)}),this.instance.on("blur",function(t){n.blur.emit(t)}),this.instance.on("focus",function(t){n.focus.emit(t)}),this.instance.on("contentDom",function(t){n.contentDom.emit(t)}),this.instance.on("fileUploadRequest",function(t){n.fileUploadRequest.emit(t)}),this.toolbarGroups.forEach(function(t){t.initialize(n)}),this.toolbarButtons.forEach(function(t){t.initialize(n)})}},t.prototype.writeValue=function(t){this._value=t,this.instance&&this.instance.setData(t)},t.prototype.onChange=function(t){},t.prototype.onTouched=function(){},t.prototype.registerOnChange=function(t){this.onChange=t},t.prototype.registerOnTouched=function(t){this.onTouched=t},t.prototype.documentContains=function(t){return document.contains?document.contains(t):document.body.contains(t)},o([r.Input(),i("design:type",Object)],t.prototype,"config",void 0),o([r.Input(),i("design:type",Boolean)],t.prototype,"readonly",void 0),o([r.Input(),i("design:type",String)],t.prototype,"debounce",void 0),o([r.Output(),i("design:type",Object)],t.prototype,"change",void 0),o([r.Output(),i("design:type",Object)],t.prototype,"editorChange",void 0),o([r.Output(),i("design:type",Object)],t.prototype,"ready",void 0),o([r.Output(),i("design:type",Object)],t.prototype,"blur",void 0),o([r.Output(),i("design:type",Object)],t.prototype,"focus",void 0),o([r.Output(),i("design:type",Object)],t.prototype,"contentDom",void 0),o([r.Output(),i("design:type",Object)],t.prototype,"fileUploadRequest",void 0),o([r.ViewChild("host"),i("design:type",Object)],t.prototype,"host",void 0),o([r.ContentChildren(d.CKButtonDirective),i("design:type",r.QueryList)],t.prototype,"toolbarButtons",void 0),o([r.ContentChildren(l.CKGroupDirective),i("design:type",r.QueryList)],t.prototype,"toolbarGroups",void 0),o([r.Input(),i("design:type",Object),i("design:paramtypes",[Object])],t.prototype,"value",null),n=o([r.Component({selector:"ckeditor",providers:[{provide:u.NG_VALUE_ACCESSOR,useExisting:r.forwardRef(function(){return n}),multi:!0}],template:"<textarea #host></textarea>"})],t);var n}()}});