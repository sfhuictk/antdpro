(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[25],{JYQO:function(e,t,r){"use strict";var a=r("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r("p0pE")),u=a(r("d6i3")),s=r("LSGW"),i={namespace:"userAndregister",state:{status:void 0},effects:{submit:u.default.mark(function e(t,r){var a,n,i,d;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.payload,n=r.call,i=r.put,e.next=4,n(s.fakeRegister,a);case 4:return d=e.sent,e.next=7,i({type:"registerHandle",payload:d});case 7:case"end":return e.stop()}},e)})},reducers:{registerHandle:function(e,t){var r=t.payload;return(0,n.default)({},e,{status:r.status})}}},d=i;t.default=d},LSGW:function(e,t,r){"use strict";var a=r("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.fakeRegister=i;var n=a(r("d6i3")),u=a(r("1l/V")),s=a(r("sy1d"));function i(e){return d.apply(this,arguments)}function d(){return d=(0,u.default)(n.default.mark(function e(t){return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.default)("/api/register",{method:"POST",data:t}));case 1:case"end":return e.stop()}},e)})),d.apply(this,arguments)}}}]);