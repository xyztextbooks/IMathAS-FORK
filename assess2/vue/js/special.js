(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["special"],{1148:function(e,t,s){"use strict";var n=s("a691"),i=s("1d80");e.exports="".repeat||function(e){var t=String(i(this)),s="",o=n(e);if(o<0||o==1/0)throw RangeError("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(t+=t))1&o&&(s+=t);return s}},1912:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"home"},[s("assess-header"),e.isTeacher?s("livepoll-nav",{attrs:{qn:e.curqn},on:{selectq:e.selectQuestion,openq:e.openInput,closeq:e.closeInput,newversion:e.newVersion}}):e._e(),e.isTeacher&&e.curstate>0&&e.curqn>-1?s("div",{staticClass:"subheader"},[s("div",{staticStyle:{"flex-grow":"1"},attrs:{id:"livepoll_qsettings"}},[s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.showQuestion,expression:"showQuestion"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.showQuestion)?e._i(e.showQuestion,null)>-1:e.showQuestion},on:{change:function(t){var s=e.showQuestion,n=t.target,i=!!n.checked;if(Array.isArray(s)){var o=null,r=e._i(s,o);n.checked?r<0&&(e.showQuestion=s.concat([o])):r>-1&&(e.showQuestion=s.slice(0,r).concat(s.slice(r+1)))}else e.showQuestion=i}}}),e._v(" "+e._s(e.$t("livepoll.show_question"))+" ")]),s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.showResults,expression:"showResults"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.showResults)?e._i(e.showResults,null)>-1:e.showResults},on:{change:function(t){var s=e.showResults,n=t.target,i=!!n.checked;if(Array.isArray(s)){var o=null,r=e._i(s,o);n.checked?r<0&&(e.showResults=s.concat([o])):r>-1&&(e.showResults=s.slice(0,r).concat(s.slice(r+1)))}else e.showResults=i}}}),e._v(" "+e._s(e.$t("livepoll.show_results"))+" ")]),s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.showAnswers,expression:"showAnswers"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.showAnswers)?e._i(e.showAnswers,null)>-1:e.showAnswers},on:{change:[function(t){var s=e.showAnswers,n=t.target,i=!!n.checked;if(Array.isArray(s)){var o=null,r=e._i(s,o);n.checked?r<0&&(e.showAnswers=s.concat([o])):r>-1&&(e.showAnswers=s.slice(0,r).concat(s.slice(r+1)))}else e.showAnswers=i},e.updateShowAnswers]}}),e._v(" "+e._s(e.showAnswersLabel)+" ")])]),e.timelimit>0&&e.starttime>0?s("timer",{attrs:{end:e.starttime+e.timelimit,total:e.timelimit}}):e._e()],1):e._e(),!e.isTeacher&&e.curstate>0?s("div",[s("h2",[e._v(" "+e._s(e.$t("question_n",{n:e.curqn+1}))+" ")])]):e._e(),s("div",{staticClass:"scrollpane",attrs:{"aria-label":e.$t("regions.questions")}},[!e.isTeacher||0!==e.curstate&&-1!==e.curqn?e._e():s("livepoll-settings",{staticClass:"questionpane"}),!e.isTeacher&&e.curstate<2?s("div",{staticClass:"questionpane"},[e._v(" "+e._s(e.$t("livepoll.waiting"))+" ")]):e._e(),e.curqn>=0&&(e.isTeacher&&e.curstate>0||!e.isTeacher&&e.curstate>1)?s("question",{directives:[{name:"show",rawName:"v-show",value:e.showQuestion,expression:"showQuestion"}],attrs:{qn:e.curqn,active:!0,state:e.curstate,seed:e.curseed}}):e._e(),e.isTeacher?s("livepoll-results",{attrs:{showresults:e.showResults&&e.curstate>1,showans:4===e.curstate,qn:e.curqn}}):e._e()],1)],1)},i=[],o=s("97cd"),r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"subheader"},[s("div",{staticClass:"flexrow",staticStyle:{"flex-grow":"1"},attrs:{role:"navigation","aria-label":e.$t("regions.qnav")}},[s("menu-button",{attrs:{id:"qnav",options:e.navOptions,selected:e.dispqn,searchby:"dispqn"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.option;return[e._v(" "+e._s(s.title)+" ")]}}])}),e.showNextPrev?s("button",{staticClass:"secondarybtn",attrs:{disabled:e.dispqn<=0,id:"qprev","aria-label":e.$t("previous")},on:{click:function(t){return e.selectQuestion(e.dispqn-1)}}},[s("icons",{attrs:{name:"left"}})],1):e._e(),e.showNextPrev?s("button",{staticClass:"secondarybtn",attrs:{disabled:e.dispqn>=e.navOptions.length-1,id:"qnext","aria-label":e.$t("next")},on:{click:function(t){return e.selectQuestion(e.dispqn+1)}}},[s("icons",{attrs:{name:"right"}})],1):e._e()],1),s("div",{staticStyle:{"flex-grow":"1"}},[2===e.curstate&&e.dispqn>0?s("button",{staticClass:"primary",on:{click:e.closeQuestion}},[e._v(" "+e._s(e.$t("livepoll.close_input"))+" ")]):e.curstate>0&&e.dispqn>0?s("button",{staticClass:"primary",on:{click:e.openQuestion}},[e._v(" "+e._s(e.$t("livepoll.open_input"))+" ")]):e._e(),e.curstate>2&&e.dispqn>0?s("button",{staticClass:"secondary",on:{click:e.newVersion}},[s("icons",{attrs:{name:"retake"}}),e._v(" "+e._s(e.$t("livepoll.new_version"))+" ")],1):e._e()]),s("div",[e._v(" "+e._s(e.studentCount)+" ")])])},a=[],l=(s("b64b"),s("ad76")),u=s("f05b"),c=s("6081"),h={name:"LivepollNav",props:["qn"],components:{MenuButton:l["a"],Icons:u["a"]},computed:{navOptions:function(){var e=this,t=[];t.push({onclick:function(){return e.$emit("selectq",0)},title:this.$t("livepoll.settings"),dispqn:0});var s=function(s){var n=parseInt(s)+1;t.push({onclick:function(){return e.$emit("selectq",n)},title:e.$t("question_n",{n:n}),dispqn:n})};for(var n in c["b"].assessInfo.questions)s(n);return t},showNextPrev:function(){return Object.keys(this.navOptions).length>1},dispqn:function(){return parseInt(this.qn)+1},curstate:function(){return c["b"].assessInfo.livepoll_status.curstate},studentCount:function(){return this.$tc("livepoll.stucnt",c["b"].livepollStuCnt)}},methods:{selectQuestion:function(e){this.$emit("selectq",e)},openQuestion:function(){this.$emit("openq")},closeQuestion:function(){this.$emit("closeq")},newVersion:function(){this.$emit("newversion")}}},p=h,d=(s("4204"),s("2877")),f=Object(d["a"])(p,r,a,!1,null,null,null),v=f.exports,w=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h2",[e._v(e._s(e.$t("livepoll.settings")))]),s("p",[s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.showQuestionDefault,expression:"showQuestionDefault"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.showQuestionDefault)?e._i(e.showQuestionDefault,null)>-1:e.showQuestionDefault},on:{change:function(t){var s=e.showQuestionDefault,n=t.target,i=!!n.checked;if(Array.isArray(s)){var o=null,r=e._i(s,o);n.checked?r<0&&(e.showQuestionDefault=s.concat([o])):r>-1&&(e.showQuestionDefault=s.slice(0,r).concat(s.slice(r+1)))}else e.showQuestionDefault=i}}}),e._v(" "+e._s(e.$t("livepoll.show_question_default"))+" ")]),s("br"),s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.showResultsLiveDefault,expression:"showResultsLiveDefault"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.showResultsLiveDefault)?e._i(e.showResultsLiveDefault,null)>-1:e.showResultsLiveDefault},on:{change:function(t){var s=e.showResultsLiveDefault,n=t.target,i=!!n.checked;if(Array.isArray(s)){var o=null,r=e._i(s,o);n.checked?r<0&&(e.showResultsLiveDefault=s.concat([o])):r>-1&&(e.showResultsLiveDefault=s.slice(0,r).concat(s.slice(r+1)))}else e.showResultsLiveDefault=i}}}),e._v(" "+e._s(e.$t("livepoll.show_results_live_default"))+" ")]),s("br"),s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.showResultsAfter,expression:"showResultsAfter"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.showResultsAfter)?e._i(e.showResultsAfter,null)>-1:e.showResultsAfter},on:{change:function(t){var s=e.showResultsAfter,n=t.target,i=!!n.checked;if(Array.isArray(s)){var o=null,r=e._i(s,o);n.checked?r<0&&(e.showResultsAfter=s.concat([o])):r>-1&&(e.showResultsAfter=s.slice(0,r).concat(s.slice(r+1)))}else e.showResultsAfter=i}}}),e._v(" "+e._s(e.$t("livepoll.show_results_after"))+" ")]),s("br"),s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.showAnswersAfter,expression:"showAnswersAfter"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.showAnswersAfter)?e._i(e.showAnswersAfter,null)>-1:e.showAnswersAfter},on:{change:function(t){var s=e.showAnswersAfter,n=t.target,i=!!n.checked;if(Array.isArray(s)){var o=null,r=e._i(s,o);n.checked?r<0&&(e.showAnswersAfter=s.concat([o])):r>-1&&(e.showAnswersAfter=s.slice(0,r).concat(s.slice(r+1)))}else e.showAnswersAfter=i}}}),e._v(" "+e._s(e.$t("livepoll.show_answers_after"))+" ")]),s("br"),s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.useTimer,expression:"useTimer"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.useTimer)?e._i(e.useTimer,null)>-1:e.useTimer},on:{change:function(t){var s=e.useTimer,n=t.target,i=!!n.checked;if(Array.isArray(s)){var o=null,r=e._i(s,o);n.checked?r<0&&(e.useTimer=s.concat([o])):r>-1&&(e.useTimer=s.slice(0,r).concat(s.slice(r+1)))}else e.useTimer=i}}}),e._v(" "+e._s(e.$t("livepoll.use_timer"))+" ")]),s("span",{directives:[{name:"show",rawName:"v-show",value:e.useTimer,expression:"useTimer"}]},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.questionTimelimit,expression:"questionTimelimit"}],attrs:{type:"text",size:"3"},domProps:{value:e.questionTimelimit},on:{input:function(t){t.target.composing||(e.questionTimelimit=t.target.value)}}}),e._v(" "+e._s(e.$t("livepoll.seconds"))+" ")])])])},m=[],b={name:"LivepollSettings",computed:{showQuestionDefault:{set:function(e){this.$set(c["b"].livepollSettings,"showQuestionDefault",e)},get:function(){return c["b"].livepollSettings.showQuestionDefault}},showResultsLiveDefault:{set:function(e){this.$set(c["b"].livepollSettings,"showResultsLiveDefault",e)},get:function(){return c["b"].livepollSettings.showResultsLiveDefault}},showResultsAfter:{set:function(e){this.$set(c["b"].livepollSettings,"showResultsAfter",e)},get:function(){return c["b"].livepollSettings.showResultsAfter}},showAnswersAfter:{set:function(e){this.$set(c["b"].livepollSettings,"showAnswersAfter",e)},get:function(){return c["b"].livepollSettings.showAnswersAfter}},useTimer:{set:function(e){this.$set(c["b"].livepollSettings,"useTimer",e)},get:function(){return c["b"].livepollSettings.useTimer}},questionTimelimit:{set:function(e){this.$set(c["b"].livepollSettings,"questionTimelimit",e)},get:function(){return c["b"].livepollSettings.questionTimelimit}}}},y=b,q=Object(d["a"])(y,w,m,!1,null,null,null),_=q.exports,g=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.qinfo.answeights?s("div",[s("p",[e._v(e._s(e.$tc("livepoll.numresults",e.numResults)))]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.showresults,expression:"showresults"}]},e._l(e.results,(function(t,n){return s("div",{key:n,staticClass:"med-below"},[t.hasOwnProperty("choices")?s("livepoll-results-choices",{attrs:{results:t,showans:e.showans}}):s("livepoll-results-general",{attrs:{results:t,showans:e.showans,itemid:e.qn+"-"+n}})],1)})),0)]):e._e()},A=[],I=(s("a15b"),s("4e82"),s("a9e3"),s("b680"),s("d3b7"),s("ac1f"),s("25f0"),s("466d"),s("5319"),s("1276"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("table",{staticClass:"LPres"},[s("thead",[s("tr",[s("th",[e._v(e._s(e.$t("livepoll.answer")))]),s("th",{staticStyle:{"min-width":"10em"}},[e._v(e._s(e.$t("livepoll.frequency")))])])]),s("tbody",e._l(e.results.choices,(function(t,n){return s("tr",{key:n,class:[e.showans?e.results.scoredata[n]>0?"LPshowcorrect":"LPshowwrong":""]},[s("td",[e._v(e._s(t))]),s("td",[s("span",{staticClass:"LPresbarwrap"},[s("span",{staticClass:"LPresbar",style:{width:Math.round(100*e.results.datatots[n]/e.results.maxfreq)+"%"}},[s("span",{staticClass:"LPresval"},[e._v(e._s(e.results.datatots[n]))])])])])])})),0)])}),x=[],k={name:"LivepollResultsChoices",props:["results","showans"],methods:{onUpdate:function(){var e=this;this.$nextTick((function(){setTimeout(window.drawPics,100),window.rendermathnode(e.$refs.main)}))}},mounted:function(){this.onUpdate()},watch:{results:function(e,t){this.onUpdate()}}},P=k,T=Object(d["a"])(P,I,x,!1,null,null,null),$=T.exports,R=function(){var e=this,t=e.$createElement,s=e._self._c||t;return"draw"===e.results.qtype&&0===e.results.initpts[11]?s("div",{ref:"main",staticClass:"LPdrawgrid"},e._l(e.sortedKeys,(function(t,n){return s("div",{key:n,class:[e.showans?e.results.scoredata[t]>0?"LPshowcorrect":"LPshowwrong":""]},[s("canvas",{staticClass:"drawcanvas",attrs:{id:"canvasLP"+e.itemid+"-"+n,width:e.results.initpts[6],height:e.results.initpts[7]}}),s("input",{attrs:{type:"hidden",id:"qnLP"+e.itemid+"-"+n}})])})),0):s("table",{ref:"main",staticClass:"LPres"},[s("thead",[s("tr",[s("th",[e._v(e._s(e.$t("livepoll.answer")))]),s("th",{staticStyle:{"min-width":"10em"}},[e._v(e._s(e.$t("livepoll.frequency")))])])]),s("tbody",e._l(e.sortedKeys,(function(t,n){return s("tr",{key:n,class:[e.showans?e.results.scoredata[t]>0?"LPshowcorrect":"LPshowwrong":""]},["draw"===e.results.qtype?s("td",[s("canvas",{staticClass:"drawcanvas",attrs:{id:"canvasLP"+e.itemid+"-"+n,width:e.results.initpts[6],height:e.results.initpts[7]}}),s("input",{attrs:{type:"hidden",id:"qnLP"+e.itemid+"-"+n}})]):s("td",[e._v(" "+e._s(t)+" ")]),s("td",[s("span",{staticClass:"LPresbarwrap"},[s("span",{staticClass:"LPresbar",style:{width:Math.round(100*e.results.datatots[t]/e.results.maxfreq)+"%"}},[s("span",{staticClass:"LPresval"},[e._v(e._s(e.results.datatots[t]))])])])])])})),0)])},S=[],O=(s("fb6a"),{name:"LivepollResultsGeneral",props:["results","showans","itemid"],computed:{sortedKeys:function(){var e=this.results.datatots,t=Object.keys(e);return t.sort((function(t,s){return e[s]-e[t]}))}},methods:{onUpdate:function(){var e=this;if("draw"===this.results.qtype){for(var t=0;t<this.sortedKeys.length;t++){var s=this.sortedKeys[t].replace(/\(/g,"[").replace(/\)/g,"]");s=s.split(";;"),""!==s[0]&&(s[0]="["+s[0].replace(/;/g,"],[")+"]"),s="[["+s.join("],[")+"]]";var n="LP"+this.itemid+"-"+t;window.canvases[n]=this.results.initpts.slice(),window.canvases[n].unshift(n),window.drawla[n]=JSON.parse(s)}this.$nextTick((function(){for(var t=0;t<e.sortedKeys.length;t++)window.imathasDraw.initCanvases("LP"+e.itemid+"-"+t)}))}this.$nextTick((function(){setTimeout(window.drawPics,100),window.rendermathnode(e.$refs.main)}))}},mounted:function(){this.onUpdate()},watch:{results:function(e,t){this.onUpdate()}}}),L=O,C=Object(d["a"])(L,R,S,!1,null,null,null),N=C.exports,E={name:"LivepollResults",props:["qn","showresults","showans"],components:{LivepollResultsChoices:$,LivepollResultsGeneral:N},computed:{qinfo:function(){return c["b"].assessInfo.questions[this.qn]},numResults:function(){return c["b"].livepollResults.hasOwnProperty(this.qn)?Object.keys(c["b"].livepollResults[this.qn]).length:0},params:function(){for(var e=[],t=0;t<this.qinfo.answeights.length;t++)0===t&&this.qinfo.jsparams.hasOwnProperty(this.qn)?e[t]=this.qinfo.jsparams[this.qn]:e[t]=this.qinfo.jsparams[1e3*(this.qn+1)+t];return e},results:function(){for(var e=[],t=0;t<this.qinfo.answeights.length;t++){var s={},n={};if(this.params[t].hasOwnProperty("livepoll_choices"))for(var i=0;i<this.params[t].livepoll_choices.length;i++)s[i]=0,n[i]=0;var o=this.params[t].qtype,r="choices"===o||"multans"===o;if(r){var a=void 0;a="choices"===o?this.params[t].livepoll_ans.toString().split(/\s+or\s+/):this.params[t].livepoll_ans.toString().split(/\s*,\s*/);for(var l=0;l<a.length;l++)n[a[l]]=1}var u=[],h=void 0;for(var p in c["b"].livepollResults[this.qn]){var d=c["b"].livepollResults[this.qn][p].ans[t];d=r?d.toString().split("|"):o.match(/calc/)||"numfunc"===o?["`"+d+"`"]:[d],"draw"===o&&(h=this.condenseDraw(d[0]),u.hasOwnProperty(h)||(u[h]=d[0]));for(var f=0;f<d.length;f++)"draw"===o&&s.hasOwnProperty(u[h])?s[u[h]]+=1:s.hasOwnProperty(d[f])?s[d[f]]+=1:(s[d[f]]=1,n[d[f]]=c["b"].livepollResults[this.qn][p].score[t])}var v=1;for(var w in s)s[w]>v&&(v=s[w]);if(e[t]={datatots:s,scoredata:n,maxfreq:v,qtype:o},r&&(e[t].choices=this.params[t].livepoll_choices),"draw"===o){for(var m=this.params[t].livepoll_drawinit,b=1;b<Math.min(11,m.length);b++)m[b]=Number(m[b]);e[t].initpts=m}}return e}},methods:{condenseDraw:function(e){var t=e.replace(/\(/g,"[").replace(/\)/g,"]");t=t.split(";;"),""!==t[0]&&(t[0]="["+t[0].replace(/;/g,"],[")+"]"),t="[["+t.join("],[")+"]]";var s,n,i,o,r=JSON.parse(t);if(r[0].length>0)for(var a=0;a<r[0].length;a++)2===r[0][a].length&&r[0][a].sort((function(e,t){return e[0]===t[0]?e[1]-t[1]:e[0]-t[0]}));else if(r.length>4&&r[4].length>0)return e;if(r[1].length>0&&r[1].sort((function(e,t){return e[0]===t[0]?e[1]-t[1]:e[0]-t[0]})),r[2].length>0&&r[2].sort((function(e,t){return e[0]===t[0]?e[1]-t[1]:e[0]-t[0]})),r.length>3&&r[3].length>0)for(var l=0;l<r[3].length;l++)s=r[3][l],5===s[0]?(s[1]===s[3]?n=[5,"x",s[1]]:(i=(s[4]-s[2])/(s[3]-s[1]),o=s[2]-i*s[1],n=[5,i.toFixed(4),o.toFixed(2)]),r[3][l]=n):5.2===s[0]?(s[1]===s[3]?n=[5.2,"x",s[1],s[2]]:(i=(s[4]-s[2])/(s[3]-s[1]),n=[5.2,i.toFixed(4),s[1],s[2]]),r[3][l]=n):5.3===s[0]?(n=s[1]<s[3]||s[1]===s[3]&&s[2]<s[4]?[5.3,s[1],s[2],s[3],s[4]]:[5.3,s[3],s[4],s[1],s[2]],r[3][l]=n):6===s[0]?(s[1]===s[3]?n=[6,"x",s[1],s[2]]:(i=(s[4]-s[2])/((s[3]-s[1])*(s[3]-s[1])),n=[6,i.toFixed(4),s[1],s[2]]),r[3][l]=n):6.5===s[0]?(s[1]===s[3]?n=[6.5,"x",s[1],s[2]]:(o=s[3]>s[1]?1:-1,i=(s[4]-s[2])/Math.sqrt(Math.abs(s[3]-s[1])),n=[6.5,i.toFixed(4),o,s[1],s[2]]),r[3][l]=n):8===s[0]&&(s[1]===s[3]?n=[8,"x",s[1],s[2]]:(i=(s[4]-s[2])/Math.abs(s[3]-s[1]),n=[8,i.toFixed(4),s[1],s[2]]),r[3][l]=n);return JSON.stringify(r)}}},Q=E,F=(s("5a24"),Object(d["a"])(Q,g,A,!1,null,null,null)),j=F.exports,V=s("5dc8"),D=s("84ac"),M={name:"livepoll",components:{LivepollNav:v,Question:V["a"],LivepollSettings:_,LivepollResults:j,AssessHeader:o["a"],Timer:D["a"]},data:function(){return{showQuestion:!0,showResults:!0,showAnswers:!0,onSettings:!1,livepollTimer:null,socket:null}},computed:{isTeacher:function(){return c["b"].assessInfo.is_teacher},curqn:function(){return this.onSettings?-1:parseInt(c["b"].assessInfo.livepoll_status.curquestion)-1},curseed:function(){return c["b"].assessInfo.livepoll_status.seed},curstate:function(){return c["b"].assessInfo.livepoll_status.curstate},starttime:function(){return c["b"].assessInfo.livepoll_status.startt},timelimit:function(){return c["b"].livepollSettings.useTimer?parseInt(c["b"].livepollSettings.questionTimelimit):0},showAnswersLabel:function(){return this.curstate<3?this.$t("livepoll.show_answers_after"):this.$t("livepoll.show_answers")}},methods:{updateUsercount:function(e){c["b"].livepollStuCnt=e.cnt,0===e.teachcnt&&(c["b"].assessInfo.livepoll_status.curstate=0)},addResult:function(e){c["b"].livepollResults.hasOwnProperty(this.curqn)||this.$set(c["b"].livepollResults,this.curqn,{}),e.score=JSON.parse(e.score),e.ans=JSON.parse(e.ans),this.$set(c["b"].livepollResults[this.curqn],e.user,e)},showHandler:function(e){"showq"===e.action?(c["a"].clearInitValue(e.qn),this.$set(c["b"].assessInfo,"livepoll_status",{curstate:2,curquestion:parseInt(e.qn)+1,seed:parseInt(e.seed),startt:parseInt(e.startt)})):this.$set(c["b"].assessInfo,"livepoll_status",Object.assign(c["b"].assessInfo.livepoll_status,{curquestion:parseInt(e.qn)+1,curstate:parseInt(e.action)}))},selectQuestion:function(e){clearTimeout(this.livepollTimer);var t=parseInt(e)-1;-1!==t?(this.onSettings=!1,t!==this.curqn&&(this.showQuestion=c["b"].livepollSettings.showQuestionDefault,this.showResults=c["b"].livepollSettings.showResultsLiveDefault,this.showAnswers=c["b"].livepollSettings.showAnswersAfter,t>=0&&c["a"].setLivepollStatus({newquestion:e,newstate:1}))):this.onSettings=!0},openInput:function(){var e=this;c["a"].setLivepollStatus({newquestion:this.curqn+1,newstate:2}),this.timelimit>0&&(this.livepollTimer=window.setTimeout((function(){return e.closeInput()}),1e3*this.timelimit))},closeInput:function(){clearTimeout(this.livepollTimer);var e=this.showAnswers?4:3;c["b"].livepollSettings.showResultsAfter&&(this.showResults=!0),c["a"].setLivepollStatus({newquestion:this.curqn+1,newstate:e})},newVersion:function(){c["a"].setLivepollStatus({newquestion:this.curqn+1,newstate:1,forceregen:1}),this.$set(c["b"].livepollResults,this.curqn,{})},updateShowAnswers:function(){if(this.curstate>2){var e=this.showAnswers?4:3;c["a"].setLivepollStatus({newquestion:this.curqn+1,newstate:e})}}},mounted:function(){var e=this,t=c["b"].assessInfo.livepoll_server,s=c["b"].assessInfo.livepoll_data,n="room="+s.room+"&now="+s.now;s.sig&&(n+="&sig="+encodeURIComponent(s.sig)),this.socket=window.io("https://"+t+":3000",{query:n}),this.socket.off(),this.socket.on("livepoll usercount",(function(t){return e.updateUsercount(t)})),c["b"].assessInfo.is_teacher?this.socket.on("livepoll qans",(function(t){return e.addResult(t)})):this.socket.on("livepoll show",(function(t){return e.showHandler(t)}))},created:function(){0===c["b"].assessInfo.livepoll_status.curquestion&&this.isTeacher&&(this.onSettings=!0)}},U=M,H=(s("3ada"),Object(d["a"])(U,n,i,!1,null,null,null));t["default"]=H.exports},2024:function(e,t,s){},"26a5":function(e,t,s){"use strict";var n=s("9578"),i=s.n(n);i.a},"296b":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"home"},[s("assess-header"),s("videocued-nav",{attrs:{cue:e.cue,toshow:e.toshow},on:{jumpto:e.jumpTo}},[s("videocued-result-nav",{staticClass:"med-left",attrs:{qn:e.qn,cue:e.cue},on:{jumpto:e.jumpTo}})],1),s("div",{staticClass:"scrollpane",attrs:{role:"region","aria-label":e.$t("regions.q_and_vid")}},[s("intro-text",{key:"-1",attrs:{active:-1==e.cue,html:e.intro}}),s("div",{directives:[{name:"show",rawName:"v-show",value:e.cue>-1&&-1===e.qn,expression:"cue > -1 && qn === -1"}],attrs:{id:"playerwrapper"}},[s("div",{staticClass:"video-wrapper-wrapper",style:{"max-width":e.videoWidth+"px"}},[s("div",{staticClass:"fluid-width-video-wrapper",style:{"padding-bottom":e.aspectRatioPercent+"%"}},[s("div",{attrs:{id:"player"}})])])]),e._l(e.questionArray,(function(t){return s("div",{key:t,class:{inactive:t!=e.qn},attrs:{"aria-hidden":t!=e.qn}},[s("inter-question-text-list",{attrs:{pos:"before",qn:t,active:t==e.qn}}),s("full-question-header",{directives:[{name:"show",rawName:"v-show",value:t==e.qn,expression:"curqn == qn"}],attrs:{qn:t}}),s("question",{attrs:{qn:t,active:t==e.qn,getwork:1}}),s("inter-question-text-list",{attrs:{pos:"after",qn:t,active:t==e.qn}})],1)}))],2)],1)},i=[],o=(s("ac1f"),s("1276"),s("97cd")),r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"subheader",attrs:{role:"navigation","aria-label":e.$t("regions.qvidnav")}},[s("menu-button",{attrs:{id:"qnav",options:e.navOptions,selected:e.curOption,searchby:"title"},scopedSlots:e._u([{key:"default",fn:function(e){var t=e.option,n=e.selected;return[s("videocued-nav-list-item",{attrs:{option:t,selected:n}})]}}])}),e._t("default")],2)},a=[],l=(s("b64b"),s("ad76")),u=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",{staticClass:"flex-nowrap-center"},[s("span",{staticClass:"qname-wrap"},[s("icons",{staticClass:"qstatusicon",attrs:{name:e.statusIcon}}),s("span",{class:{greystrike:""!==e.nameHover},attrs:{title:e.nameHover}},[e._v(" "+e._s(e.option.title)+" ")]),e._v(" "+e._s(e.scoreDisplay)+" ")],1),e.selected?e._e():s("span",{staticClass:"redoicon"},[e.canRetry?s("icons",{attrs:{name:"retry"}}):e._e()],1),e.selected?e._e():s("span",{staticClass:"redoicon"},[e.canRegen?s("icons",{attrs:{name:"retake"}}):e._e()],1)])},c=[],h=s("f05b"),p=s("6081"),d=s("6c5a"),f={name:"VideocuedNavListItem",props:["option","selected"],components:{Icons:h["a"]},mixins:[d["a"]],computed:{statusIcon:function(){if("v"===this.option.type||"f"===this.option.type)return"video";if("q"===this.option.type){if("unattempted"===p["b"].assessInfo.questions[this.option.qn].status){if(1===this.qsAttempted[this.option.qn])return"attempted";if(this.qsAttempted[this.option.qn]>0)return"partattempted"}return p["b"].assessInfo.questions[this.option.qn].status}return"none"},nameHover:function(){return"q"===this.option.type&&0!==p["b"].assessInfo.questions[this.option.qn].withdrawn?this.$t("header.withdrawn"):""},scoreDisplay:function(){if("q"!==this.option.type)return"";var e=p["b"].assessInfo.questions[this.option.qn];if(e.hasOwnProperty("gbscore")){var t=e.canretry?"(":"[";return t+=e.gbscore+"/"+e.points_possible,t+=e.canretry?")":"]",t}return this.$tc("header.pts",e.points_possible)},canRetry:function(){if("q"===this.option.type){var e=p["b"].assessInfo.questions[this.option.qn];return e.canretry}return!1},canRegen:function(){if("q"===this.option.type){var e=p["b"].assessInfo.questions[this.option.qn];return e.regens_remaining}return!1}}},v=f,w=(s("26a5"),s("2877")),m=Object(w["a"])(v,u,c,!1,null,null,null),b=m.exports,y={name:"VideocuedNav",props:["cue","toshow"],components:{MenuButton:l["a"],VideocuedNavListItem:b},computed:{hasIntro:function(){return""!==p["b"].assessInfo.intro},navOptions:function(){var e=this,t=[];this.hasIntro&&t.push({onclick:function(){return e.$emit("jumpto",-1,"i")},title:this.$t("intro"),type:"i"});for(var s=function(s){var n=p["b"].assessInfo.videocues[s];t.push({onclick:function(){return e.$emit("jumpto",s,"v")},type:"v",title:n.title,cue:s}),n.hasOwnProperty("qn")&&t.push({onclick:function(){return e.$emit("jumpto",s,"q")},type:"q",title:e.$t("question_n",{n:parseInt(n.qn)+1}),qn:parseInt(n.qn),cue:s,subitem:!0}),n.hasOwnProperty("followuptime")&&t.push({onclick:function(){return e.$emit("jumpto",s,"f")},type:"f",title:n.followuptitle,cue:s,subitem:!0})},n=0;n<p["b"].assessInfo.videocues.length;n++)s(n);return t},curOption:function(){var e=parseInt(this.cue);if(-1===e&&this.hasIntro)return 0;for(var t=this.hasIntro?1:0;t<this.navOptions.length;t++)if(this.navOptions[t].cue===e&&this.navOptions[t].type===this.toshow)return t;return-1},showNextPrev:function(){return Object.keys(this.navOptions).length>1},prevLink:function(){return this.curOption<=0?"":this.navOptions[this.curOption-1].internallink},nextLink:function(){return this.curOption>=this.navOptions.length-1?"":this.navOptions[this.curOption+1].internallink}}},q=y,_=(s("6869"),Object(w["a"])(q,r,a,!1,null,null,null)),g=_.exports,A=s("e536"),I=s("0597"),x=function(){var e=this,t=e.$createElement,s=e._self._c||t;return-1===e.qn||e.showNav?s("div",[-1===e.qn&&-1===e.cue?s("button",{staticClass:"primary",on:{click:e.startVid}},[e._v(" "+e._s(e.$t("videocued.start"))+" ")]):e._e(),e.qn>-1&&e.hasNextVid?s("button",{class:{primary:"correct"!==e.status||!e.showSkip},on:{click:e.nextVidLink}},[e._v(" "+e._s(e.$t("videocued.continue",{title:e.nextVidTitle}))+" ")]):e._e(),e.qn>-1&&e.showSkip?s("button",{staticClass:"primary",on:{click:e.skipLink}},[e._v(" "+e._s(e.$t("videocued.skipto",{title:e.skipTitle}))+" ")]):e._e()]):e._e()},k=[],P={name:"VideocuedResultNav",props:["qn","cue"],computed:{qdata:function(){return p["b"].assessInfo.questions[this.qn]},showNav:function(){return p["b"].inProgress&&p["b"].assessInfo.hasOwnProperty("questions")&&this.qdata.hasOwnProperty("score")&&(this.qdata.try>0||this.qdata.hasOwnProperty("tries_remaining_range"))&&0===this.qdata.withdrawn},showScores:function(){return"during"===p["b"].assessInfo.showscores},status:function(){if(!this.showScores||!this.qdata.hasOwnProperty("parts"))return"neutral";for(var e=0;e<this.qdata.parts.length;e++)if(0===this.qdata.parts[e].try||this.qdata.parts[e].rawscore<.98)return"neutral";return"correct"},nextVidType:function(){return p["b"].assessInfo.videocues[this.cue].hasOwnProperty("followuptitle")?"followup":"nextseg"},hasNextVid:function(){return"followup"===this.nextVidType||p["b"].assessInfo.videocues.hasOwnProperty(this.cue+1)},nextVidTitle:function(){return"followup"===this.nextVidType?p["b"].assessInfo.videocues[this.cue].followuptitle:p["b"].assessInfo.videocues[this.cue+1].title},showSkip:function(){return"correct"===this.status&&"followup"===this.nextVidType&&p["b"].assessInfo.videocues.hasOwnProperty(this.cue+1)},skipTitle:function(){return p["b"].assessInfo.videocues[this.cue+1].title}},methods:{skipLink:function(){this.$emit("jumpto",this.cue+1,"v")},nextVidLink:function(){"followup"===this.nextVidType?this.$emit("jumpto",this.cue,"f"):this.$emit("jumpto",this.cue+1,"v")},startVid:function(){this.$emit("jumpto",0,"v")}}},T=P,$=Object(w["a"])(T,x,k,!1,null,null,null),R=$.exports,S=s("5dc8"),O=s("eeaa"),L={name:"videocued",components:{FullQuestionHeader:A["a"],VideocuedNav:g,Question:S["a"],VideocuedResultNav:R,InterQuestionTextList:I["a"],AssessHeader:o["a"],IntroText:O["a"]},data:function(){return{youtubeApiLoaded:!1,videoWidth:600,aspectRatioPercent:56.2,ytplayer:null,timer:null,cue:0,toshow:"v"}},computed:{curCue:function(){return this.cue>-1?p["b"].assessInfo.videocues[this.cue]:{}},qn:function(){return"q"===this.toshow?parseInt(this.curCue.qn):-1},timeCues:function(){var e={};for(var t in p["b"].assessInfo.videocues)p["b"].assessInfo.videocues[t].hasOwnProperty("qn")&&(e[p["b"].assessInfo.videocues[t].time]=parseInt(t));return e},nextVidTimes:function(){for(var e={},t=0;t<p["b"].assessInfo.videocues.length;t++)p["b"].assessInfo.videocues[t].hasOwnProperty("followuptime")&&p["b"].assessInfo.videocues.hasOwnProperty(t+1)?e[p["b"].assessInfo.videocues[t].followuptime]=t:!p["b"].assessInfo.videocues[t].hasOwnProperty("qn")&&p["b"].assessInfo.videocues.hasOwnProperty(t+1)&&(e[p["b"].assessInfo.videocues[t].time]=t);return e},intro:function(){return p["b"].assessInfo.intro},questionArray:function(){for(var e={},t=0;t<p["b"].assessInfo.questions.length;t++)e[t]=t;return e}},methods:{createPlayer:function(){var e=this,t=!!(document.exitFullscreen||document.mozCancelFullScreen||document.webkitExitFullscreen||document.msExitFullscreen),s={autoplay:0,wmode:"transparent",fs:t?1:0,controls:2,rel:0,modestbranding:1,showinfo:0},n=p["b"].assessInfo.videoar.split(":"),i=window.innerHeight-50;this.videoWidth=n[0]/n[1]*i,this.aspectRatioPercent=Math.round(1e3*i/this.videoWidth)/10,this.ytplayer=new window.YT.Player("player",{height:i,width:this.videoWidth,videoId:p["b"].assessInfo.videoid,playerVars:s,events:{onReady:function(){return e.handlePlayerReady()},onStateChange:function(t){return e.handlePlayerStateChange(t)},onError:function(t){return e.handlePlayerError(t)}}})},exitFullscreen:function(){var e=document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement;e&&(document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen())},checkTime:function(){var e=this,t=Math.floor(this.ytplayer.getCurrentTime());!this.timeCues.hasOwnProperty(t)||"v"===this.toshow&&this.cue===this.timeCues[t]+1||"f"===this.toshow&&this.cue===this.timeCues[t]||this.ytplayer.getPlayerState()!==window.YT.PlayerState.PLAYING?(this.nextVidTimes.hasOwnProperty(t)&&this.cue===this.nextVidTimes[t]&&(this.cue=this.cue+1,this.toshow="v"),this.timer=window.setTimeout((function(){e.checkTime()}),200)):this.jumpTo(parseInt(this.timeCues[t]),"q")},handlePlayerReady:function(){window.$("iframe#player").removeAttr("height").removeAttr("width").css("height","").css("width","")},handlePlayerStateChange:function(e){var t=this;e.data===window.YT.PlayerState.PLAYING?this.timer=window.setTimeout((function(){t.checkTime()}),200):e.data===window.YT.PlayerState.ENDED&&"v"===this.toshow&&this.curCue.hasOwnProperty("qn")&&(window.clearTimeout(this.timer),this.jumpTo(this.cue,"q"))},handlePlayerError:function(e){p["b"].errorMsg=e.data},jumpTo:function(e,t){if(-1===e||"q"===t)this.exitFullscreen(),this.ytplayer&&this.ytplayer.pauseVideo();else{var s=p["b"].assessInfo.videocues[e],n=0;if("v"===t){if(e>0){var i=p["b"].assessInfo.videocues[e-1];n=i.hasOwnProperty("followuptime")?i.followuptime:i.time}}else"f"===t&&(n=s.time);this.ytplayer.seekTo(n,!0),this.ytplayer.playVideo()}this.cue=e,this.toshow=t}},created:function(){var e=this;""!==p["b"].assessInfo.intro&&(this.cue=-1,this.toshow="i"),window.onYouTubePlayerAPIReady=function(){e.youtubeApiLoaded=!0,e.createPlayer()};var t=document.createElement("script");t.src="//www.youtube.com/player_api",document.head.appendChild(t)}},C=L,N=Object(w["a"])(C,n,i,!1,null,null,null);t["default"]=N.exports},"3ada":function(e,t,s){"use strict";var n=s("2024"),i=s.n(n);i.a},"408a":function(e,t,s){var n=s("c6b6");e.exports=function(e){if("number"!=typeof e&&"Number"!=n(e))throw TypeError("Incorrect invocation");return+e}},4204:function(e,t,s){"use strict";var n=s("e5c2"),i=s.n(n);i.a},"5a24":function(e,t,s){"use strict";var n=s("d9e6"),i=s.n(n);i.a},6869:function(e,t,s){"use strict";var n=s("e45e"),i=s.n(n);i.a},9578:function(e,t,s){},a9e3:function(e,t,s){"use strict";var n=s("83ab"),i=s("da84"),o=s("94ca"),r=s("6eeb"),a=s("5135"),l=s("c6b6"),u=s("7156"),c=s("c04e"),h=s("d039"),p=s("7c73"),d=s("241c").f,f=s("06cf").f,v=s("9bf2").f,w=s("58a8").trim,m="Number",b=i[m],y=b.prototype,q=l(p(y))==m,_=function(e){var t,s,n,i,o,r,a,l,u=c(e,!1);if("string"==typeof u&&u.length>2)if(u=w(u),t=u.charCodeAt(0),43===t||45===t){if(s=u.charCodeAt(2),88===s||120===s)return NaN}else if(48===t){switch(u.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+u}for(o=u.slice(2),r=o.length,a=0;a<r;a++)if(l=o.charCodeAt(a),l<48||l>i)return NaN;return parseInt(o,n)}return+u};if(o(m,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var g,A=function(e){var t=arguments.length<1?0:e,s=this;return s instanceof A&&(q?h((function(){y.valueOf.call(s)})):l(s)!=m)?u(new b(_(t)),s,A):_(t)},I=n?d(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;I.length>x;x++)a(b,g=I[x])&&!a(A,g)&&v(A,g,f(b,g));A.prototype=y,y.constructor=A,r(i,m,A)}},b680:function(e,t,s){"use strict";var n=s("23e7"),i=s("a691"),o=s("408a"),r=s("1148"),a=s("d039"),l=1..toFixed,u=Math.floor,c=function(e,t,s){return 0===t?s:t%2===1?c(e,t-1,s*e):c(e*e,t/2,s)},h=function(e){var t=0,s=e;while(s>=4096)t+=12,s/=4096;while(s>=2)t+=1,s/=2;return t},p=l&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!a((function(){l.call({})}));n({target:"Number",proto:!0,forced:p},{toFixed:function(e){var t,s,n,a,l=o(this),p=i(e),d=[0,0,0,0,0,0],f="",v="0",w=function(e,t){var s=-1,n=t;while(++s<6)n+=e*d[s],d[s]=n%1e7,n=u(n/1e7)},m=function(e){var t=6,s=0;while(--t>=0)s+=d[t],d[t]=u(s/e),s=s%e*1e7},b=function(){var e=6,t="";while(--e>=0)if(""!==t||0===e||0!==d[e]){var s=String(d[e]);t=""===t?s:t+r.call("0",7-s.length)+s}return t};if(p<0||p>20)throw RangeError("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return String(l);if(l<0&&(f="-",l=-l),l>1e-21)if(t=h(l*c(2,69,1))-69,s=t<0?l*c(2,-t,1):l/c(2,t,1),s*=4503599627370496,t=52-t,t>0){w(0,s),n=p;while(n>=7)w(1e7,0),n-=7;w(c(10,n,1),0),n=t-1;while(n>=23)m(1<<23),n-=23;m(1<<n),w(1,1),m(2),v=b()}else w(0,s),w(1<<-t,0),v=b()+r.call("0",p);return p>0?(a=v.length,v=f+(a<=p?"0."+r.call("0",p-a)+v:v.slice(0,a-p)+"."+v.slice(a-p))):v=f+v,v}})},d9e6:function(e,t,s){},e45e:function(e,t,s){},e5c2:function(e,t,s){}}]);
//# sourceMappingURL=special.js.map