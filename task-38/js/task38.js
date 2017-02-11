/*思路
* 获取相应列的值，进行排序
* 操作dom改变行的顺序
* */
function g(elem) {
    return document.getElementById(elem);
}
var container=g('container');
//create table
var result=[
    [
        "姓名",
        "yuwen",
        "shuxue",
        "yingyu",
        "zongfen"
    ],
    [
        "大锤",
        90,
        80,
        10,
        180
    ],
    [
        "天使",
         50,
        60,
        80,
        190
    ],
    [
        "黑影",
        70,
        100,
        85,
        255
    ]
];
var table=document.createElement('table');
var tbody=document.createElement('tbody');
table.appendChild(tbody);
for(var i=0; i<4; i++){
    var tr=document.createElement('tr');
    for(var j=0; j<5; j++){
        var td=document.createElement('td');
        td.innerHTML=result[i][j]
        tr.appendChild(td);
    }
    tbody.appendChild(tr);
}
container.appendChild(table)