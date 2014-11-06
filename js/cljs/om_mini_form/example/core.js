// Compiled by ClojureScript 0.0-2371
goog.provide('om_mini_form.example.core');
goog.require('cljs.core');
goog.require('om_mini_form.core');
goog.require('om_mini_form.core');
goog.require('om_tools.dom');
goog.require('om_tools.dom');
goog.require('om.core');
goog.require('om.core');
if(typeof om_mini_form.example.core.app_state !== 'undefined')
{} else
{om_mini_form.example.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"headline","headline",-157157727),"Om In-page Form Binding Demo",new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text-field","text-field",1955422445),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),"This is text",new cljs.core.Keyword(null,"label","label",1718410804),"Text",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)], null),new cljs.core.Keyword(null,"select-field","select-field",-820562432),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"index","index",-1531685915),(0),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["option 1","first"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["option 2","second"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["option 3","third"], null)], null),new cljs.core.Keyword(null,"label","label",1718410804),"Select",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"select","select",1147833503)], null),new cljs.core.Keyword(null,"checkbox-field","checkbox-field",399653862),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"label","label",1718410804),"Checkbox Field",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["chkbox 1",(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["chkbox 2",(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["chkbox 3",(3)], null)], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"checkbox","checkbox",1612615655)], null),new cljs.core.Keyword(null,"radio-field","radio-field",-2063842691),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"checked","checked",-50955819),(0),new cljs.core.Keyword(null,"label","label",1718410804),"Radio Field",new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["radio 1",(function (){return cljs.core.print.call(null,(1));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["radio 2",(function (){return cljs.core.print.call(null,(2));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["radio 3",(function (){return cljs.core.print.call(null,(3));
})], null)], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"radio","radio",1323726374)], null)], null),new cljs.core.Keyword(null,"claims","claims",1454900969),"Copyleft",new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"text-field","text-field",1955422445)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"select-field","select-field",-820562432)], null)], null)], null));
}
om_mini_form.example.core.main = (function main(){return om.core.root.call(null,(function (app,owner){if(typeof om_mini_form.example.core.t7912 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_mini_form.example.core.t7912 = (function (owner,app,main,meta7913){
this.owner = owner;
this.app = app;
this.main = main;
this.meta7913 = meta7913;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_mini_form.example.core.t7912.cljs$lang$type = true;
om_mini_form.example.core.t7912.cljs$lang$ctorStr = "om-mini-form.example.core/t7912";
om_mini_form.example.core.t7912.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"om-mini-form.example.core/t7912");
});
om_mini_form.example.core.t7912.prototype.om$core$IRenderState$ = true;
om_mini_form.example.core.t7912.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,s){var self__ = this;
var ___$1 = this;return om_tools.dom.element.call(null,React.DOM.div,om_tools.dom.element.call(null,React.DOM.h3,new cljs.core.Keyword(null,"headline","headline",-157157727).cljs$core$IFn$_invoke$arity$1(self__.app),cljs.core.PersistentVector.EMPTY),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_mini_form.core.build.call(null,self__.app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471)], null))],null)));
});
om_mini_form.example.core.t7912.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7914){var self__ = this;
var _7914__$1 = this;return self__.meta7913;
});
om_mini_form.example.core.t7912.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7914,meta7913__$1){var self__ = this;
var _7914__$1 = this;return (new om_mini_form.example.core.t7912(self__.owner,self__.app,self__.main,meta7913__$1));
});
om_mini_form.example.core.__GT_t7912 = (function __GT_t7912(owner__$1,app__$1,main__$1,meta7913){return (new om_mini_form.example.core.t7912(owner__$1,app__$1,main__$1,meta7913));
});
}
return (new om_mini_form.example.core.t7912(owner,app,main,null));
}),om_mini_form.example.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
});

//# sourceMappingURL=core.js.map