// Compiled by ClojureScript 0.0-2371
goog.provide('om_mini_form.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('om_tools.dom');
goog.require('om_tools.dom');
goog.require('om.core');
goog.require('om.core');
om_mini_form.core.make_text = (function make_text(s,path){var map__7845 = cljs.core.get_in.call(null,s,path);var map__7845__$1 = ((cljs.core.seq_QMARK_.call(null,map__7845))?cljs.core.apply.call(null,cljs.core.hash_map,map__7845):map__7845);var label = cljs.core.get.call(null,map__7845__$1,new cljs.core.Keyword(null,"label","label",1718410804));var id = clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.core.name,path));return om_tools.dom.element.call(null,React.DOM.fieldset,cljs.core.apply.call(null,React.DOM.label,{"htmlFor": om_tools.dom.format_opts.call(null,id)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[label],null)))),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.dom.input.call(null,{"onChange": om_tools.dom.format_opts.call(null,((function (map__7845,map__7845__$1,label,id){
return (function (e){return om.core.update_BANG_.call(null,s,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"value","value",305978217)),e.target.value);
});})(map__7845,map__7845__$1,label,id))
), "value": om_tools.dom.format_opts.call(null,cljs.core.get_in.call(null,s,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"value","value",305978217)))), "type": "text", "id": om_tools.dom.format_opts.call(null,id), "name": om_tools.dom.format_opts.call(null,id)})],null)));
});
om_mini_form.core.make_checkbox = (function make_checkbox(s,path){var map__7854 = cljs.core.get_in.call(null,s,path);var map__7854__$1 = ((cljs.core.seq_QMARK_.call(null,map__7854))?cljs.core.apply.call(null,cljs.core.hash_map,map__7854):map__7854);var label = cljs.core.get.call(null,map__7854__$1,new cljs.core.Keyword(null,"label","label",1718410804));var checked = cljs.core.get.call(null,map__7854__$1,new cljs.core.Keyword(null,"checked","checked",-50955819));var options = cljs.core.get.call(null,map__7854__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.core.name,path));return cljs.core.apply.call(null,React.DOM.fieldset,{"id": om_tools.dom.format_opts.call(null,id)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.label,label,cljs.core.PersistentVector.EMPTY),(function (){var iter__4379__auto__ = ((function (map__7854,map__7854__$1,label,checked,options,id){
return (function iter__7855(s__7856){return (new cljs.core.LazySeq(null,((function (map__7854,map__7854__$1,label,checked,options,id){
return (function (){var s__7856__$1 = s__7856;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__7856__$1);if(temp__4126__auto__)
{var s__7856__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7856__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__7856__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__7858 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__7857 = (0);while(true){
if((i__7857 < size__4378__auto__))
{var i = cljs.core._nth.call(null,c__4377__auto__,i__7857);cljs.core.chunk_append.call(null,b__7858,(function (){var item_id = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i));return cljs.core.apply.call(null,React.DOM.label,{"htmlFor": om_tools.dom.format_opts.call(null,item_id)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.dom.input.call(null,{"onChange": om_tools.dom.format_opts.call(null,((function (i__7857,item_id,i,c__4377__auto__,size__4378__auto__,b__7858,s__7856__$2,temp__4126__auto__,map__7854,map__7854__$1,label,checked,options,id){
return (function (e){var chk_path = cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"checked","checked",-50955819));var chked = e.target.checked;if(cljs.core.truth_(chked))
{om.core.transact_BANG_.call(null,s,chk_path,((function (i__7857,chk_path,chked,item_id,i,c__4377__auto__,size__4378__auto__,b__7858,s__7856__$2,temp__4126__auto__,map__7854,map__7854__$1,label,checked,options,id){
return (function (p1__7846_SHARP_){return cljs.core.conj.call(null,p1__7846_SHARP_,i);
});})(i__7857,chk_path,chked,item_id,i,c__4377__auto__,size__4378__auto__,b__7858,s__7856__$2,temp__4126__auto__,map__7854,map__7854__$1,label,checked,options,id))
);
} else
{om.core.transact_BANG_.call(null,s,chk_path,((function (i__7857,chk_path,chked,item_id,i,c__4377__auto__,size__4378__auto__,b__7858,s__7856__$2,temp__4126__auto__,map__7854,map__7854__$1,label,checked,options,id){
return (function (p1__7847_SHARP_){return cljs.core.disj.call(null,p1__7847_SHARP_,i);
});})(i__7857,chk_path,chked,item_id,i,c__4377__auto__,size__4378__auto__,b__7858,s__7856__$2,temp__4126__auto__,map__7854,map__7854__$1,label,checked,options,id))
);
}
return om.core.update_BANG_.call(null,s,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core.mapv.call(null,((function (i__7857,chk_path,chked,item_id,i,c__4377__auto__,size__4378__auto__,b__7858,s__7856__$2,temp__4126__auto__,map__7854,map__7854__$1,label,checked,options,id){
return (function (p1__7848_SHARP_){return cljs.core.get_in.call(null,cljs.core.deref.call(null,s),cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"options","options",99638489))).call(null,p1__7848_SHARP_).call(null,(1));
});})(i__7857,chk_path,chked,item_id,i,c__4377__auto__,size__4378__auto__,b__7858,s__7856__$2,temp__4126__auto__,map__7854,map__7854__$1,label,checked,options,id))
,cljs.core.get_in.call(null,cljs.core.deref.call(null,s),chk_path)));
});})(i__7857,item_id,i,c__4377__auto__,size__4378__auto__,b__7858,s__7856__$2,temp__4126__auto__,map__7854,map__7854__$1,label,checked,options,id))
), "name": om_tools.dom.format_opts.call(null,item_id), "id": om_tools.dom.format_opts.call(null,item_id), "checked": om_tools.dom.format_opts.call(null,cljs.core.contains_QMARK_.call(null,checked,i)), "value": om_tools.dom.format_opts.call(null,i), "type": "checkbox"}),om_tools.dom.element.call(null,React.DOM.span,options.call(null,i).call(null,(0)),cljs.core.PersistentVector.EMPTY)],null))));
})());
{
var G__7859 = (i__7857 + (1));
i__7857 = G__7859;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7858),iter__7855.call(null,cljs.core.chunk_rest.call(null,s__7856__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7858),null);
}
} else
{var i = cljs.core.first.call(null,s__7856__$2);return cljs.core.cons.call(null,(function (){var item_id = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i));return cljs.core.apply.call(null,React.DOM.label,{"htmlFor": om_tools.dom.format_opts.call(null,item_id)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.dom.input.call(null,{"onChange": om_tools.dom.format_opts.call(null,((function (item_id,i,s__7856__$2,temp__4126__auto__,map__7854,map__7854__$1,label,checked,options,id){
return (function (e){var chk_path = cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"checked","checked",-50955819));var chked = e.target.checked;if(cljs.core.truth_(chked))
{om.core.transact_BANG_.call(null,s,chk_path,((function (chk_path,chked,item_id,i,s__7856__$2,temp__4126__auto__,map__7854,map__7854__$1,label,checked,options,id){
return (function (p1__7846_SHARP_){return cljs.core.conj.call(null,p1__7846_SHARP_,i);
});})(chk_path,chked,item_id,i,s__7856__$2,temp__4126__auto__,map__7854,map__7854__$1,label,checked,options,id))
);
} else
{om.core.transact_BANG_.call(null,s,chk_path,((function (chk_path,chked,item_id,i,s__7856__$2,temp__4126__auto__,map__7854,map__7854__$1,label,checked,options,id){
return (function (p1__7847_SHARP_){return cljs.core.disj.call(null,p1__7847_SHARP_,i);
});})(chk_path,chked,item_id,i,s__7856__$2,temp__4126__auto__,map__7854,map__7854__$1,label,checked,options,id))
);
}
return om.core.update_BANG_.call(null,s,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core.mapv.call(null,((function (chk_path,chked,item_id,i,s__7856__$2,temp__4126__auto__,map__7854,map__7854__$1,label,checked,options,id){
return (function (p1__7848_SHARP_){return cljs.core.get_in.call(null,cljs.core.deref.call(null,s),cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"options","options",99638489))).call(null,p1__7848_SHARP_).call(null,(1));
});})(chk_path,chked,item_id,i,s__7856__$2,temp__4126__auto__,map__7854,map__7854__$1,label,checked,options,id))
,cljs.core.get_in.call(null,cljs.core.deref.call(null,s),chk_path)));
});})(item_id,i,s__7856__$2,temp__4126__auto__,map__7854,map__7854__$1,label,checked,options,id))
), "name": om_tools.dom.format_opts.call(null,item_id), "id": om_tools.dom.format_opts.call(null,item_id), "checked": om_tools.dom.format_opts.call(null,cljs.core.contains_QMARK_.call(null,checked,i)), "value": om_tools.dom.format_opts.call(null,i), "type": "checkbox"}),om_tools.dom.element.call(null,React.DOM.span,options.call(null,i).call(null,(0)),cljs.core.PersistentVector.EMPTY)],null))));
})(),iter__7855.call(null,cljs.core.rest.call(null,s__7856__$2)));
}
} else
{return null;
}
break;
}
});})(map__7854,map__7854__$1,label,checked,options,id))
,null,null));
});})(map__7854,map__7854__$1,label,checked,options,id))
;return iter__4379__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,options)));
})()],null))));
});
om_mini_form.core.make_select = (function make_select(s,path){var map__7865 = cljs.core.get_in.call(null,s,path);var map__7865__$1 = ((cljs.core.seq_QMARK_.call(null,map__7865))?cljs.core.apply.call(null,cljs.core.hash_map,map__7865):map__7865);var label = cljs.core.get.call(null,map__7865__$1,new cljs.core.Keyword(null,"label","label",1718410804));var options = cljs.core.get.call(null,map__7865__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.core.name,path));return om_tools.dom.element.call(null,React.DOM.fieldset,cljs.core.apply.call(null,React.DOM.label,{"htmlFor": om_tools.dom.format_opts.call(null,id)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[label],null)))),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.select,{"onChange": om_tools.dom.format_opts.call(null,((function (map__7865,map__7865__$1,label,options,id){
return (function (e){var idx = e.target.value;var idx_path = cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"index","index",-1531685915));var val = cljs.core.get_in.call(null,cljs.core.deref.call(null,s),cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"options","options",99638489))).call(null,idx).call(null,(1));var val_path = cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"value","value",305978217));om.core.update_BANG_.call(null,s,val_path,val);
return om.core.update_BANG_.call(null,s,idx_path,idx);
});})(map__7865,map__7865__$1,label,options,id))
), "value": om_tools.dom.format_opts.call(null,cljs.core.get_in.call(null,s,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"index","index",-1531685915)))), "id": om_tools.dom.format_opts.call(null,id), "name": om_tools.dom.format_opts.call(null,id)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var iter__4379__auto__ = ((function (map__7865,map__7865__$1,label,options,id){
return (function iter__7866(s__7867){return (new cljs.core.LazySeq(null,((function (map__7865,map__7865__$1,label,options,id){
return (function (){var s__7867__$1 = s__7867;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__7867__$1);if(temp__4126__auto__)
{var s__7867__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7867__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__7867__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__7869 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__7868 = (0);while(true){
if((i__7868 < size__4378__auto__))
{var i = cljs.core._nth.call(null,c__4377__auto__,i__7868);cljs.core.chunk_append.call(null,b__7869,cljs.core.apply.call(null,om.dom.option,{"value": om_tools.dom.format_opts.call(null,i)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[options.call(null,i).call(null,(0))],null)))));
{
var G__7870 = (i__7868 + (1));
i__7868 = G__7870;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7869),iter__7866.call(null,cljs.core.chunk_rest.call(null,s__7867__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7869),null);
}
} else
{var i = cljs.core.first.call(null,s__7867__$2);return cljs.core.cons.call(null,cljs.core.apply.call(null,om.dom.option,{"value": om_tools.dom.format_opts.call(null,i)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[options.call(null,i).call(null,(0))],null)))),iter__7866.call(null,cljs.core.rest.call(null,s__7867__$2)));
}
} else
{return null;
}
break;
}
});})(map__7865,map__7865__$1,label,options,id))
,null,null));
});})(map__7865,map__7865__$1,label,options,id))
;return iter__4379__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,options)));
})()],null))))],null)));
});
om_mini_form.core.make_radio = (function make_radio(s,path){var map__7876 = cljs.core.get_in.call(null,s,path);var map__7876__$1 = ((cljs.core.seq_QMARK_.call(null,map__7876))?cljs.core.apply.call(null,cljs.core.hash_map,map__7876):map__7876);var label = cljs.core.get.call(null,map__7876__$1,new cljs.core.Keyword(null,"label","label",1718410804));var checked = cljs.core.get.call(null,map__7876__$1,new cljs.core.Keyword(null,"checked","checked",-50955819));var options = cljs.core.get.call(null,map__7876__$1,new cljs.core.Keyword(null,"options","options",99638489));var id = clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.core.name,path));return cljs.core.apply.call(null,React.DOM.fieldset,{"id": om_tools.dom.format_opts.call(null,id)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.label,label,cljs.core.PersistentVector.EMPTY),(function (){var iter__4379__auto__ = ((function (map__7876,map__7876__$1,label,checked,options,id){
return (function iter__7877(s__7878){return (new cljs.core.LazySeq(null,((function (map__7876,map__7876__$1,label,checked,options,id){
return (function (){var s__7878__$1 = s__7878;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__7878__$1);if(temp__4126__auto__)
{var s__7878__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7878__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__7878__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__7880 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__7879 = (0);while(true){
if((i__7879 < size__4378__auto__))
{var i = cljs.core._nth.call(null,c__4377__auto__,i__7879);cljs.core.chunk_append.call(null,b__7880,(function (){var item_id = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i));return cljs.core.apply.call(null,React.DOM.label,{"htmlFor": om_tools.dom.format_opts.call(null,item_id)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.dom.input.call(null,{"onChange": om_tools.dom.format_opts.call(null,((function (i__7879,item_id,i,c__4377__auto__,size__4378__auto__,b__7880,s__7878__$2,temp__4126__auto__,map__7876,map__7876__$1,label,checked,options,id){
return (function (e){var chk_path = cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"checked","checked",-50955819));om.core.update_BANG_.call(null,s,chk_path,i);
return om.core.update_BANG_.call(null,s,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core.get_in.call(null,cljs.core.deref.call(null,s),cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"options","options",99638489))).call(null,i).call(null,(1)));
});})(i__7879,item_id,i,c__4377__auto__,size__4378__auto__,b__7880,s__7878__$2,temp__4126__auto__,map__7876,map__7876__$1,label,checked,options,id))
), "name": om_tools.dom.format_opts.call(null,item_id), "id": om_tools.dom.format_opts.call(null,item_id), "checked": om_tools.dom.format_opts.call(null,cljs.core._EQ_.call(null,checked,i)), "value": om_tools.dom.format_opts.call(null,i), "type": "radio"}),om_tools.dom.element.call(null,React.DOM.span,options.call(null,i).call(null,(0)),cljs.core.PersistentVector.EMPTY)],null))));
})());
{
var G__7881 = (i__7879 + (1));
i__7879 = G__7881;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7880),iter__7877.call(null,cljs.core.chunk_rest.call(null,s__7878__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7880),null);
}
} else
{var i = cljs.core.first.call(null,s__7878__$2);return cljs.core.cons.call(null,(function (){var item_id = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i));return cljs.core.apply.call(null,React.DOM.label,{"htmlFor": om_tools.dom.format_opts.call(null,item_id)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.dom.input.call(null,{"onChange": om_tools.dom.format_opts.call(null,((function (item_id,i,s__7878__$2,temp__4126__auto__,map__7876,map__7876__$1,label,checked,options,id){
return (function (e){var chk_path = cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"checked","checked",-50955819));om.core.update_BANG_.call(null,s,chk_path,i);
return om.core.update_BANG_.call(null,s,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core.get_in.call(null,cljs.core.deref.call(null,s),cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"options","options",99638489))).call(null,i).call(null,(1)));
});})(item_id,i,s__7878__$2,temp__4126__auto__,map__7876,map__7876__$1,label,checked,options,id))
), "name": om_tools.dom.format_opts.call(null,item_id), "id": om_tools.dom.format_opts.call(null,item_id), "checked": om_tools.dom.format_opts.call(null,cljs.core._EQ_.call(null,checked,i)), "value": om_tools.dom.format_opts.call(null,i), "type": "radio"}),om_tools.dom.element.call(null,React.DOM.span,options.call(null,i).call(null,(0)),cljs.core.PersistentVector.EMPTY)],null))));
})(),iter__7877.call(null,cljs.core.rest.call(null,s__7878__$2)));
}
} else
{return null;
}
break;
}
});})(map__7876,map__7876__$1,label,checked,options,id))
,null,null));
});})(map__7876,map__7876__$1,label,checked,options,id))
;return iter__4379__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,options)));
})()],null))));
});
om_mini_form.core.run_once = (function (){var called = cljs.core.atom.call(null,false);return ((function (called){
return (function (f){if(cljs.core.not.call(null,cljs.core.deref.call(null,called)))
{cljs.core.reset_BANG_.call(null,called,true);
return f.call(null);
} else
{return null;
}
});
;})(called))
})();
om_mini_form.core.build = (function build(s,form_path){var ks = cljs.core.keys.call(null,cljs.core.get_in.call(null,s,form_path));om_mini_form.core.run_once.call(null,((function (ks){
return (function (){var form = cljs.core.get_in.call(null,s,form_path);var seq__7897 = cljs.core.seq.call(null,cljs.core.keys.call(null,form));var chunk__7898 = null;var count__7899 = (0);var i__7900 = (0);while(true){
if((i__7900 < count__7899))
{var k = cljs.core._nth.call(null,chunk__7898,i__7900);var type_7911 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(form.call(null,k));var path_7912 = cljs.core.conj.call(null,form_path,k);var vpath_7913 = cljs.core.conj.call(null,path_7912,new cljs.core.Keyword(null,"value","value",305978217));var opt_path_7914 = cljs.core.conj.call(null,path_7912,new cljs.core.Keyword(null,"options","options",99638489));var G__7901_7915 = (((type_7911 instanceof cljs.core.Keyword))?type_7911.fqn:null);switch (G__7901_7915) {
case "checkbox":
om.core.update_BANG_.call(null,s,vpath_7913,cljs.core.mapv.call(null,((function (seq__7897,chunk__7898,count__7899,i__7900,G__7901_7915,type_7911,path_7912,vpath_7913,opt_path_7914,k,form,ks){
return (function (p1__7882_SHARP_){return cljs.core.get_in.call(null,s,opt_path_7914).call(null,p1__7882_SHARP_).call(null,(1));
});})(seq__7897,chunk__7898,count__7899,i__7900,G__7901_7915,type_7911,path_7912,vpath_7913,opt_path_7914,k,form,ks))
,cljs.core.get_in.call(null,s,cljs.core.conj.call(null,path_7912,new cljs.core.Keyword(null,"checked","checked",-50955819)))));

break;
case "radio":
om.core.update_BANG_.call(null,s,vpath_7913,cljs.core.get_in.call(null,s,opt_path_7914).call(null,cljs.core.get_in.call(null,s,cljs.core.conj.call(null,path_7912,new cljs.core.Keyword(null,"checked","checked",-50955819)))).call(null,(1)));

break;
case "select":
om.core.update_BANG_.call(null,s,vpath_7913,cljs.core.get_in.call(null,s,opt_path_7914).call(null,cljs.core.get_in.call(null,s,cljs.core.conj.call(null,path_7912,new cljs.core.Keyword(null,"index","index",-1531685915)))).call(null,(1)));

break;
case "text":

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_7911))));

}
{
var G__7917 = seq__7897;
var G__7918 = chunk__7898;
var G__7919 = count__7899;
var G__7920 = (i__7900 + (1));
seq__7897 = G__7917;
chunk__7898 = G__7918;
count__7899 = G__7919;
i__7900 = G__7920;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__7897);if(temp__4126__auto__)
{var seq__7897__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7897__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__7897__$1);{
var G__7921 = cljs.core.chunk_rest.call(null,seq__7897__$1);
var G__7922 = c__4410__auto__;
var G__7923 = cljs.core.count.call(null,c__4410__auto__);
var G__7924 = (0);
seq__7897 = G__7921;
chunk__7898 = G__7922;
count__7899 = G__7923;
i__7900 = G__7924;
continue;
}
} else
{var k = cljs.core.first.call(null,seq__7897__$1);var type_7925 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(form.call(null,k));var path_7926 = cljs.core.conj.call(null,form_path,k);var vpath_7927 = cljs.core.conj.call(null,path_7926,new cljs.core.Keyword(null,"value","value",305978217));var opt_path_7928 = cljs.core.conj.call(null,path_7926,new cljs.core.Keyword(null,"options","options",99638489));var G__7902_7929 = (((type_7925 instanceof cljs.core.Keyword))?type_7925.fqn:null);switch (G__7902_7929) {
case "checkbox":
om.core.update_BANG_.call(null,s,vpath_7927,cljs.core.mapv.call(null,((function (seq__7897,chunk__7898,count__7899,i__7900,G__7902_7929,type_7925,path_7926,vpath_7927,opt_path_7928,k,seq__7897__$1,temp__4126__auto__,form,ks){
return (function (p1__7882_SHARP_){return cljs.core.get_in.call(null,s,opt_path_7928).call(null,p1__7882_SHARP_).call(null,(1));
});})(seq__7897,chunk__7898,count__7899,i__7900,G__7902_7929,type_7925,path_7926,vpath_7927,opt_path_7928,k,seq__7897__$1,temp__4126__auto__,form,ks))
,cljs.core.get_in.call(null,s,cljs.core.conj.call(null,path_7926,new cljs.core.Keyword(null,"checked","checked",-50955819)))));

break;
case "radio":
om.core.update_BANG_.call(null,s,vpath_7927,cljs.core.get_in.call(null,s,opt_path_7928).call(null,cljs.core.get_in.call(null,s,cljs.core.conj.call(null,path_7926,new cljs.core.Keyword(null,"checked","checked",-50955819)))).call(null,(1)));

break;
case "select":
om.core.update_BANG_.call(null,s,vpath_7927,cljs.core.get_in.call(null,s,opt_path_7928).call(null,cljs.core.get_in.call(null,s,cljs.core.conj.call(null,path_7926,new cljs.core.Keyword(null,"index","index",-1531685915)))).call(null,(1)));

break;
case "text":

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_7925))));

}
{
var G__7931 = cljs.core.next.call(null,seq__7897__$1);
var G__7932 = null;
var G__7933 = (0);
var G__7934 = (0);
seq__7897 = G__7931;
chunk__7898 = G__7932;
count__7899 = G__7933;
i__7900 = G__7934;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(ks))
);
return cljs.core.apply.call(null,React.DOM.form,{"onChange": om_tools.dom.format_opts.call(null,((function (ks){
return (function (){return cljs.core.List.EMPTY;
});})(ks))
), "className": "binding-form"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var iter__4379__auto__ = ((function (ks){
return (function iter__7903(s__7904){return (new cljs.core.LazySeq(null,((function (ks){
return (function (){var s__7904__$1 = s__7904;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__7904__$1);if(temp__4126__auto__)
{var s__7904__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7904__$2))
{var c__4377__auto__ = cljs.core.chunk_first.call(null,s__7904__$2);var size__4378__auto__ = cljs.core.count.call(null,c__4377__auto__);var b__7906 = cljs.core.chunk_buffer.call(null,size__4378__auto__);if((function (){var i__7905 = (0);while(true){
if((i__7905 < size__4378__auto__))
{var k = cljs.core._nth.call(null,c__4377__auto__,i__7905);cljs.core.chunk_append.call(null,b__7906,(function (){var path = cljs.core.conj.call(null,form_path,k);var type = cljs.core.get_in.call(null,s,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"type","type",1174270348)));var G__7909 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__7909) {
case "checkbox":
return om_mini_form.core.make_checkbox.call(null,s,path);

break;
case "radio":
return om_mini_form.core.make_radio.call(null,s,path);

break;
case "select":
return om_mini_form.core.make_select.call(null,s,path);

break;
case "text":
return om_mini_form.core.make_text.call(null,s,path);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
})());
{
var G__7936 = (i__7905 + (1));
i__7905 = G__7936;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7906),iter__7903.call(null,cljs.core.chunk_rest.call(null,s__7904__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7906),null);
}
} else
{var k = cljs.core.first.call(null,s__7904__$2);return cljs.core.cons.call(null,(function (){var path = cljs.core.conj.call(null,form_path,k);var type = cljs.core.get_in.call(null,s,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"type","type",1174270348)));var G__7910 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__7910) {
case "checkbox":
return om_mini_form.core.make_checkbox.call(null,s,path);

break;
case "radio":
return om_mini_form.core.make_radio.call(null,s,path);

break;
case "select":
return om_mini_form.core.make_select.call(null,s,path);

break;
case "text":
return om_mini_form.core.make_text.call(null,s,path);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
})(),iter__7903.call(null,cljs.core.rest.call(null,s__7904__$2)));
}
} else
{return null;
}
break;
}
});})(ks))
,null,null));
});})(ks))
;return iter__4379__auto__.call(null,ks);
})()],null))));
});
om_mini_form.core.extract = (function extract(s,form_path){var ks = cljs.core.keys.call(null,cljs.core.get_in.call(null,s,form_path));return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (ks){
return (function (p1__7938_SHARP_){return cljs.core.PersistentHashMap.fromArrays([p1__7938_SHARP_],[new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,s,cljs.core.conj.call(null,form_path,p1__7938_SHARP_)))]);
});})(ks))
,ks));
});

//# sourceMappingURL=core.js.map