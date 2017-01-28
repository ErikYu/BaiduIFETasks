/**
 * Created by erik on 17-1-28.
 */
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
function moveWindow() {
    var clientx=0;
    var clienty=0;
    var clientx1=0;
    var clienty1=0;
    var isDraging=false;
    var movey=0;
    var alertWindow=document.getElementsByClassName("alert-window")[0];
    var alertHeader=alertWindow.getElementsByClassName("alert-window-header")[0];
    alertHeader.addEventListener("mousedown", function(event) {
        var e=event || window.event;
        clientx=e.clientX;
        clienty=e.clientY;
        isDraging=true;
        alertHeader.addEventListener("mousemove",function (event) {
            if (isDraging==true){
                var e=event || window.event;
                clientx1=clientx;
                clienty1=clienty;
                clientx1=e.clientX;
                clienty1=e.clientY;
                var movex=clientx1-clientx;
                movey=clienty1-clienty;
                console.log(movey);
                alertWindow.style.top+=movey+"px";
                // alertWindow.setAttribute("style", "transform: translateY("+movey+"px)");
            }
        });
        window.addEventListener("mouseup", function(event) {
            isDraging=false;
            clientx=0;
            clienty=0;
            clientx1=0;
            clienty1=0;
            movey=0;
        })
    });


    // alertWindow.style.top='150px';
    // console.log(x);

}

window.onload=function () {
    windowShow();
    moveWindow();
}