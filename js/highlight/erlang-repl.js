(window.textWebpackJsonp=window.textWebpackJsonp||[]).push([[58],{455:function(e,n,a){"use strict";function r(e){return e?"string"==typeof e?e:e.source:null}function o(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];var o=n.map((function(e){return r(e)})).join("");return o}e.exports=function(e){return{name:"Erlang REPL",keywords:{built_in:"spawn spawn_link self",keyword:"after and andalso|10 band begin bnot bor bsl bsr bxor case catch cond div end fun if let not of or orelse|10 query receive rem try when xor"},contains:[{className:"meta",begin:"^[0-9]+> ",relevance:10},e.COMMENT("%","$"),{className:"number",begin:"\\b(\\d+(_\\d+)*#[a-fA-F0-9]+(_[a-fA-F0-9]+)*|\\d+(_\\d+)*(\\.\\d+(_\\d+)*)?([eE][-+]?\\d+)?)",relevance:0},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,{begin:o(/\?(::)?/,/([A-Z]\w*)/,/((::)[A-Z]\w*)*/)},{begin:"->"},{begin:"ok"},{begin:"!"},{begin:"(\\b[a-z'][a-zA-Z0-9_']*:[a-z'][a-zA-Z0-9_']*)|(\\b[a-z'][a-zA-Z0-9_']*)",relevance:0},{begin:"[A-Z][a-zA-Z0-9_']*",relevance:0}]}}}}]);
//# sourceMappingURL=erlang-repl.js.map?v=ad12c6769c858aec836a