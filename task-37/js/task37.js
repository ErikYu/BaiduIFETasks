/**
 * Created by erik on 17-1-28.
 */
function windowShow() {
    if(!document.getElementsByClassName) return false;
    if(!document.getElementById) return false;
    var btn=document.getElementById("login");
    var alertWindow=document.getElementsByClassName("alert-window")[0];
    var mask=document.getElementsByClassName("mask")[0];
    var close=document.getElementById("close");
    alertWindow.style.display="block";  //js无法获取外部样式表
    btn.onclick=function () {
        alertWindow.style.display="block";
        mask.style.display="block";
    }

    close.onclick=mask.onclick=function (){
        alertWindow.style.display="none";
        mask.style.display="none";
    }
}
//获得浏览器宽高
var clientH=document.documentElement.clientHeight;
var clientW=document.documentElement.clientWidth;
console.log(clientH);
var alertWindow=document.getElementsByClassName("alert-window")[0];
alertWindow.style.top=(clientH-300)/2+"px";
alertWindow.style.left=(clientW-500)/2+"px";

alertWindow.onmousedown=function (event) {
    var e=event||window.event;
}
window.onload=function () {
    windowShow();
}