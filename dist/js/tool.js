(()=>{"use strict";var e={744:(e,t)=>{t.Z=(e,t)=>{const a=e.__vccOpts||e;for(const[e,l]of t)a[e]=l;return a}}},t={};function a(l){var o=t[l];if(void 0!==o)return o.exports;var n=t[l]={exports:{}};return e[l](n,n.exports,a),n.exports}(()=>{const e=Vue;var t={key:0,class:"sidebar-section"},l={class:"sidebar-label"},o={class:"sidebar-icon sidebar-fa-icon"},n=["aria-expanded"],s={class:"sidebar-label"},c={class:"sidebar-icon sidebar-fa-icon"},i={class:"sidebar-section-label"},r={key:2,class:"sidebar-section-title"},d={class:"sidebar-label"},m={class:"sidebar-icon sidebar-fa-icon"},p={class:"sidebar-section-label"},u={key:3,class:"mt-1 space-y-1"};const h={mixins:[{data:function(){return{collapsed:!1}},created:function(){this.collapsed=JSON.parse(localStorage.getItem(this.localStorageKey))},unmounted:function(){localStorage.setItem(this.localStorageKey,this.collapsed)},methods:{toggleCollapse:function(){this.collapsed=!this.collapsed,localStorage.setItem(this.localStorageKey,this.collapsed)}},computed:{ariaExpanded:function(){return!1===this.collapsed?"true":"false"},shouldBeCollapsed:function(){return this.collapsed},localStorageKey:function(){return"nova.navigation.".concat(this.item.key,".collapsed")}}}],props:["item"],methods:{handleClick:function(){this.toggleCollapse()}}};const k=(0,a(744).Z)(h,[["render",function(a,h,k,b,f,g){var E=(0,e.resolveComponent)("Link"),C=(0,e.resolveComponent)("CollapseButton");return k.item.items.length?((0,e.openBlock)(),(0,e.createElementBlock)("div",t,[k.item.path?((0,e.openBlock)(),(0,e.createBlock)(E,{key:0,href:k.item.path,class:"sidebar-section-title"},{default:(0,e.withCtx)((function(){return[(0,e.createElementVNode)("span",l,[(0,e.createElementVNode)("span",o,[(0,e.createElementVNode)("i",{class:(0,e.normalizeClass)(k.item.icon)},null,2)]),(0,e.createElementVNode)("span",{class:(0,e.normalizeClass)([{"font-bold inertia-link-active":k.item.active},"sidebar-section-label"])},(0,e.toDisplayString)(k.item.name),3)])]})),_:1},8,["href"])):!k.item.path&&k.item.collapsable?((0,e.openBlock)(),(0,e.createElementBlock)("button",{key:1,"aria-expanded":a.ariaExpanded,class:"sidebar-section-title",onClick:h[0]||(h[0]=function(){return g.handleClick&&g.handleClick.apply(g,arguments)})},[(0,e.createElementVNode)("span",s,[(0,e.createElementVNode)("span",c,[(0,e.createElementVNode)("i",{class:(0,e.normalizeClass)(k.item.icon)},null,2)]),(0,e.createElementVNode)("span",i,(0,e.toDisplayString)(k.item.name),1)]),(0,e.createVNode)(C,{collapsed:a.collapsed,to:k.item.path,class:"ml-auto"},null,8,["collapsed","to"])],8,n)):((0,e.openBlock)(),(0,e.createElementBlock)("h3",r,[(0,e.createElementVNode)("span",d,[(0,e.createElementVNode)("span",m,[(0,e.createElementVNode)("i",{class:(0,e.normalizeClass)(k.item.icon)},null,2)]),(0,e.createElementVNode)("span",p,(0,e.toDisplayString)(k.item.name),1)])])),a.collapsed?(0,e.createCommentVNode)("",!0):((0,e.openBlock)(),(0,e.createElementBlock)("div",u,[((0,e.openBlock)(!0),(0,e.createElementBlock)(e.Fragment,null,(0,e.renderList)(k.item.items,(function(t){return(0,e.openBlock)(),(0,e.createBlock)((0,e.resolveDynamicComponent)(t.component),{key:t.name,item:t},null,8,["item"])})),128))]))])):(0,e.createCommentVNode)("",!0)}]]);Nova.booting((function(e,t){e.component("menu-section-fa",k)}))})()})();