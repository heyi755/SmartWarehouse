(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21a3d2"],{bb51:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),a={style:{padding:"10px"}},i=Object(r["n"])("div",{id:"myChart",style:{width:"600px",height:"600px"}},null,-1);function o(e,t,n,o,c,u){var d=Object(r["S"])("el-card"),s=Object(r["S"])("el-col"),l=Object(r["S"])("el-row");return Object(r["J"])(),Object(r["m"])("div",a,[Object(r["q"])(l,{gutter:10},{default:Object(r["hb"])((function(){return[Object(r["q"])(s,{span:12},{default:Object(r["hb"])((function(){return[Object(r["q"])(d,null,{default:Object(r["hb"])((function(){return[i]})),_:1})]})),_:1})]})),_:1})])}n("159b");var c=n("b775"),u={name:"Home",data:function(){return{}},mounted:function(){this.drawLine()},methods:{drawLine:function(){var e=this.$root.echarts.init(document.getElementById("myChart")),t={title:{text:"各地区用户比例统计图",subtext:"虚拟数据",left:"left"},tooltip:{trigger:"item"},legend:{orient:"vertical",trigger:"item",left:"center"},toolbox:{show:!0,feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},restore:{show:!0},saveAsImage:{show:!0}}},series:[{name:"用户比例",type:"pie",radius:[50,150],center:["50%","60%"],roseType:"area",itemStyle:{borderRadius:8},data:[]}]};c["a"].get("/user/count").then((function(n){"0"===n.code&&(n.data.forEach((function(e){t.series[0].data.push({name:e.address,value:e.count})})),e.setOption(t))}))}}};u.render=o;t["default"]=u}}]);
//# sourceMappingURL=chunk-2d21a3d2.56c495e7.js.map