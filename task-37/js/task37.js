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
//居中
var clientH=document.documentElement.clientHeight;
var clientW=document.documentElement.clientWidth;
var alertWindow=document.getElementsByClassName("alert-window")[0];
alertWindow.style.top=(clientH-300)/2+"px";
alertWindow.style.left=(clientW-500)/2+"px";
//事先定义一些变量;
//移动窗口功能增加;
var isDragging=false;
var isSizing=false;
var startPosX=0;
var startPosY=0;
var endPosX=0;
var endPosY=0;
var moveX=0;
var moveY=0;
//进行鼠标移动
var alertHeader=alertWindow.getElementsByClassName("alert-window-header")[0];
var alertSize=alertWindow.getElementsByClassName("size")[0];
var alertContent=alertWindow.getElementsByClassName("alert-window-content")[0];
//对header按下鼠标
//对size按下鼠标
alertHeader.onmousedown=function (event) {
    var e=event||window.event;
    startPosX=e.pageX-alertWindow.offsetLeft;
    startPosY=e.pageY-alertWindow.offsetTop;
    isDragging=true;
};
alertSize.onmousedown=function (event) {
    var e=event||window.event;
    startPosX=e.pageX-alertWindow.offsetWidth;
    startPosY=e.pageY-alertWindow.offsetHeight;
    isSizing=true;
}
//移动鼠标
window.onmousemove=function (event) {
    var e=event||window.event;
    if(isDragging==true){
        endPosX=e.pageX;
        endPosY=e.pageY;
        moveX=endPosX-startPosX;
        moveY=endPosY-startPosY;
        alertWindow.style.top=moveY+"px";
        alertWindow.style.left=moveX+"px";
    };
    if(isSizing==true){
        endPosX=e.pageX;
        endPosY=e.pageY;
        moveX=endPosX-startPosX;
        moveY=endPosY-startPosY;
        alertWindow.style.width=moveX+"px";
        alertWindow.style.height=moveY+"px";
        alertContent.style.height=moveY-30+"px";
    }
};
document.onmouseup=function () {
    isDragging=false;
    isSizing=false;
}
//窗口大小变化

window.onload=function () {
    windowShow();
};