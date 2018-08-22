/**
 * 博客公告模块
 * */
define('{pro}module/index.js', ['{pro}system.js', '{pro}window/moveToLofterWin.js', '{pro}window/exportBlogWin.js'], function(){
    var p = P('loft.m'),
        __proIndexModule,
        __supIndexModule;

    p._$$IndexModule = C();
    __proIndexModule = p._$$IndexModule._$extend(P('loft.w')._$$MModule, true);
    __supIndexModule = p._$$IndexModule._$supro;

    __proIndexModule._$initialize = function(){
        this._$super();
        this.__checkLogin();

        //LOFTER-8632:「新增紧急需求」博客下线-LOFTER站内导入网易博客的链接调整至公告
        try{
            if(top.location.search.indexOf('bottom')>=0){
                location.hash = '#foot';
            }
        } catch(e){}

    };

    //页面初始化
    __proIndexModule.__initPage = function(){
        this.__btnExport = E._$getElement('btn-export');
        this.__btnMove = E._$getElement('btn-move');

        V._$addEvent(this.__btnExport, 'click', function(_event){
            V._$stop(_event);
            if(!this.__isLogin){
                try{
                    parent.login4iframe();
                } catch(e){}
            } else{
                if(!this.__userData || !this.__userData.blogAccount){
                    //alert('博客帐号数据有误');
                    return;
                }
                var _passportName = this.__userData.blogAccount.passportName || '';
                loft.w._$$ExportBlogWin._$show({parent: document.body, title:'导出你的博客文章到电脑', passportName:_passportName});
            }

        }._$bind(this));

        V._$addEvent(this.__btnMove, 'click', function(_event){
            V._$stop(_event);
            if(!this.__isLogin){
                try{
                    parent.login4iframe();
                } catch(e){}
            } else{
                //迁移流程
                loft.w._$$MoveToLofterWin._$show({
                    parent: document.body,
                    userData:this.__userData
                });
            }

        }._$bind(this));

    };

    //登录判断
    __proIndexModule.__checkLogin = function(){
        var data = '';
        var url = "/regulator/api/blog/blogAccount";
        var options = {
            'url': url,
            'method': "POST",
            'rtype': "json",
            'data': data,
            'onload': function(data){
                data = data || {};
                this.__userData = data.data;
                if(data.resCode===0){
                    this.__isLogin = true;
                } else{
                    this.__isLogin = false;
                }
                this.__initPage();
            }._$bind(this),
            'onerror': function(err){
                this.__initPage();
            }._$bind(this)
        };
        P('loft.x')._$sendRequest(url, options);
    };

    new p._$$IndexModule();
});