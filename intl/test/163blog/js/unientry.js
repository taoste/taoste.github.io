/**
 * 页面js统一引入模块  使用原生js实现
 * */

var __ISDEVMODE = false;//是否开发模式

//去掉字符串前后的空白
var __trim = function(_str) {
    if(_str!=null) {
        return _str.replace(/(^\s*)|(\s*$)/g, "");
    } else {
        return null;
    }
};

/**
 * 解析url参数字符串，取得key对应的值
 * @param {String} _url    url字符串或hash串
 * @param {String} _key     key值
 * @param {String} _separator    分隔符
 * @return {String} key对应的value
 */
var getParmvalByKey = function(_url,_key,_separator){
    _url = _url || '';
    _separator = _separator || '?';
    _url = __trim(_url);
    if(_separator!='#'){
        var _index = _url.indexOf('#') || 0;
        if(_index>=0){
            _url = _url.substring(0,_index);
        }
    }
    _url = _url.substr(_url.indexOf(_separator)+1);

    if (!_url) return '';
    _url = _url.split('&');
    for(var i=0,l=_url.length,d;i<l;i++){
        d = _url[i].indexOf('=');
        if(_url[i].substring(0,d) === _key){
            return _url[i].substr(d+1)||'';
        }
    }
    return '';
};

//加载js
var loadScript = function(_uri,_cbload){
    var _script = document.createElement('script');
    _script.type = 'text/javascript';
    _script.charset = 'utf-8';
    _script.onload = function(e){
        if(!!_cbload) _cbload();
    };
    _script.onerror = function(e){
        alert(e);
    };
    _script.src = _uri;
    document.body.appendChild(_script);
};

(function(){
    var _list = document.getElementsByTagName('script');
    if(!_list || _list.length<=0) return;
    var _pagejs;
    for(var i=0;i<_list.length;i++){
        var _src = _list[i].src || '';
        if(_src.indexOf('/regulator/frontend/src/js/unientry.js')>=0){
            _pagejs = getParmvalByKey(_src,'pagejs','?');

        }
    }

    if(__ISDEVMODE){
        loadScript('/regulator/frontend/src/js/lib/nej/js/define.js?pro=/regulator/frontend/src/js/',function(){
            if(!!_pagejs){
                loadScript(_pagejs);
            }
        });
    } else{
        if(!!_pagejs){
            _pagejs = _pagejs.replace('/regulator/frontend/src/js/','/regulator/frontend/compress/r/js/');
            loadScript(_pagejs);
        }
    }


})();
