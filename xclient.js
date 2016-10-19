/*
* @Author: wujiyu
* @Date:   2016-10-19 10:18:52
* @Last Modified by:   wujiyu
* @Last Modified time: 2016-10-19 10:19:37
*/

// ==UserScript==
// @name         XClient下载链接自动提取
// @namespace    http://www.farwmarth.net/
// @version      0.1
// @description  XClient
// @author       You
// @match        http://xclient.info/*
// @grant        unsafeWindow
// ==/UserScript==


(function() {
    var host = location.host;

    if(host == 'xclient.info'&&location.href.indexOf("a=dl")!=-1){
        var btn_down_link =document.getElementsByClassName("btn_down_link")[0];
        var code =btn_down_link .getAttribute("data-clipboard-text");
        var url =btn_down_link .getAttribute("data-link");
        var href_txt = "<a class='btn_down_link pop_btn' href='" + url + "#" + code + "' target='_blank'>" + '去下载' + '</a>';

        var down_wrap =document.getElementsByClassName("down_wrap")[0];
        down_wrap.innerHTML = href_txt;
        console.log(url)
    }
})();
