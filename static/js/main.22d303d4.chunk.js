(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(6),r=a.n(o),l=a(1),i=a(2),s=a(4),u=a(3),m=(a(12),a(13),function(){return(new Date).toLocaleTimeString()}),k=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={date:m()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.clockTimer=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.clockTimer)}},{key:"tick",value:function(){var e=m();console.log(e),this.setState({date:e})}},{key:"render",value:function(){var e=this.props.name,t=this.state.date;return c.a.createElement("section",null,c.a.createElement("h1",{className:"card-title"},"React clock ".concat(e)),c.a.createElement("p",{className:"card-text mb-3"},"Current time: ".concat(t)))}}]),a}(c.a.Component),b=function(){return Math.floor(100*Math.random())},h=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={clockName:0,isClockVisible:!0},e.changeName=function(){var t=b();console.log("The Clock was renamed from ".concat(e.state.clockName," to ").concat(t)),e.setState({clockName:t})},e.toggleClockVisible=function(){e.setState({isClockVisible:!e.state.isClockVisible})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.changeName,t=this.toggleClockVisible,a=this.state,n=a.clockName,o=a.isClockVisible;return c.a.createElement("div",{className:"App card card-body text-center"},o&&c.a.createElement(k,{name:n}),c.a.createElement("button",{type:"button",className:"btn btn-primary mb-1",onClick:e},"Change name"),c.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:t},o?"Hide Clock":"Show Clock"))}}]),a}(c.a.Component);r.a.render(c.a.createElement(h,null),document.getElementById("root"))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.22d303d4.chunk.js.map