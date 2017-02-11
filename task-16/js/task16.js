/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
var cityInput=document.getElementById('aqi-city-input');
var numInput=document.getElementById('aqi-value-input');
function addAqiData() {
    var city=cityInput.value;
    var num=numInput.value;
    //正则表达式检测 .match()方法
    if(!city.match(/^[A-Za-z\u4E00-\u9FA5]+$/)){
        alert("error city");
    } else if(!num.match(/^\d+$/)){
        alert("error num")
    } else{
        aqiData[city]=num;
    }
    return aqiData;
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList(data) {
    var table=document.getElementById('aqi-table');
    items='<tr><td>city</td><td>Qua</td><td>operation</td></tr>';
    for(var city in aqiData){
        items+='<tr><td>'+city+'</td><td>'+aqiData[city]+'</td><td><button>删除</button></td>'+'</tr>'
    }
    table.innerHTML=items;
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList(aqiData);
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle() {
    // do sth.

    renderAqiList();
}

function init() {

    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    document.getElementById('add-btn').onclick=addBtnHandle;
    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数

}

init();
