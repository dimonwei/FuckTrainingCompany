var url = "https://code.aliyun.com/dimonwei/FuckTrainingCompany/raw/master/sources/FC.json";
var host=location.host;

//前程无忧
function job51() {

    $.getJSON(url, function(data) {
        for (var i = 0; i < data.length; i++) {
            $("a:contains('" + data[i] + "')").parent().parent().remove();
        }
    });
    //删除前程无忧,底部广告
    $(".mainleft").remove();
    $(".tResult_bottom_roll").remove();
    $("#topIndex").remove();
}

//智联招聘
function zhaopin() {
    $.getJSON(url, function(data) {
        for (var i = 0; i < data.length; i++) {
            $("a:contains('" + data[i] + "')").parent().parent().remove();
        }
    });
    //删除智联右侧广告
    $(".newlist_right_code").remove();
    //删除智联二维码提示
    $(".wechat").remove();
    //删除底部广告
    $(".satsurvey").remove();
    $(".interested-thing").remove();
}

//过滤网站
function check() {
    if (host.indexOf("search.51job.com") != -1) {
        job51();
    }
    if (host.indexOf("sou.zhaopin.com") != -1) {
        zhaopin();
    }

}

check();
