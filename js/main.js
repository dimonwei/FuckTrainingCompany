var url = "http://dimon.s-api.yunvm.com/FC.json";
//前程无忧
function job51() {
    $.getJSON(url, function(data) {
        for (var i = 0; i < data.length; i++) {
            $("a:contains('" + data[i] + "')").parent().parent().fadeOut();
        }
    });
}
//智联招聘
function zhaopin() {
    $.getJSON(url, function(data) {
        for (var i = 0; i < data.length; i++) {
            $("a:contains('" + data[i] + "')").parent().parent().fadeOut();
        }
    });
}
//汇博人才网
function huibo() {
    // var a = document.getElementsByClassName("postIntro");
    // for (var i = 0; i < a.length; i++) {
    //     $.getJSON(url, function(data) {
    //         for (var j = 0; j < data.length; j++) {
    //             if (a[i].getElementsByTagName("a")[0].text == data[j]) {
    //                 console.log(a[i].getElementsByTagName("a")[0].text + "|" + data[j]);
    //             }
    //         }
    //     });
    // }
    console.log("正在开发");
}

function check() {
    if (location.host.indexOf("51job") != -1) {
        console.info("正在执行前程无忧培训机构净化操作");
        job51();
        console.info("净化完成!");
    }
    if (location.host.indexOf("huibo") != -1) {
        console.info("正在执行汇博人才网培训机构净化操作");
        huibo();
        console.info("净化完成!");
    }
    if (location.host.indexOf("zhaopin") != -1) {
        console.info("正在执行智联招聘培训机构净化操作");
        zhaopin();
        console.info("净化完成!");
    }

}

check();
