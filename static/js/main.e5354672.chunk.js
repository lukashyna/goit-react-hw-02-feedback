(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{13:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(2),o=a.n(r),l=a(3),u=a(4),i=a(5),s=a(7),d=a(6),m=function(e){var t=e.title,a=e.children;return c.a.createElement("section",{className:"section"},c.a.createElement("h2",null,t),a)},b=function(e){var t=e.good,a=e.neutral,n=e.bad,r=e.total,o=e.positivePercentage;return c.a.createElement("div",null,c.a.createElement("h2",null,"Statistics"),c.a.createElement("div",null,c.a.createElement("p",null,"Good: ",t),c.a.createElement("p",null,"Neutral: ",a),c.a.createElement("p",null,"Bad: ",n),c.a.createElement("p",null,"Total: ",r),c.a.createElement("p",null,"Percentage: ",o,"%")))},p=function(e){var t=e.func,a=e.option;return c.a.createElement("button",{type:"button",onClick:t,name:a},a)},v=function(e){var t=e.options,a=e.onLeaveFeedback;return c.a.createElement("div",null,t.map((function(e){return c.a.createElement(p,{func:a,option:e,key:e})})))},E=function(e){var t=e.message;return c.a.createElement("span",null,t)},f=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.options=Object.keys(e.state),e.handleFeedback=function(t){var a=t.target.name;e.setState((function(e){return Object(l.a)({},a,e[a]+1)}))},e.countTotalFeedback=function(){return e.state.good+e.state.neutral+e.state.bad},e.countPositiveFeedbackPercentage=function(){var t=e.countTotalFeedback(),a=e.state.good;return Math.round(100*a/t)},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,n=e.bad;return c.a.createElement("div",null,c.a.createElement(m,{title:"Please leave feedback"},c.a.createElement(v,{options:this.options,onLeaveFeedback:this.handleFeedback})),c.a.createElement(m,{title:"Statistics"},this.countTotalFeedback()?c.a.createElement(b,{good:t,neutral:a,bad:n,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):c.a.createElement(E,{message:"No feedback :("})))}}]),a}(n.Component);o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(f,null)),document.getElementById("root"))},8:function(e,t,a){e.exports=a(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.e5354672.chunk.js.map