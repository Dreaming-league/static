//头事件
$(function(){
    //github搜索
    $('.ui.search.github')
        .search({
            type          : 'category',
            minCharacters : 3,
            apiSettings   : {
                onResponse: function(githubResponse) {
                    var
                        response = {
                            results : {}
                        }
                        ;
                    // translate GitHub API response to work with search
                    $.each(githubResponse.items, function(index, item) {
                        var
                            language   = item.language || 'Unknown',
                            maxResults = 8
                            ;
                        if(index >= maxResults) {
                            return false;
                        }
                        // create new language category
                        if(response.results[language] === undefined) {
                            response.results[language] = {
                                name    : language,
                                results : []
                            };
                        }
                        // add result to category
                        response.results[language].results.push({
                            title       : item.name,
                            description : item.description,
                            url         : item.html_url
                        });
                    });
                    return response;
                },
                url: '//api.github.com/search/repositories?q={query}'
            }
        })
    ;

    //头菜单
    var head_data = {
        items: [
            { menu: 'CMS系统' ,href:"#" ,active:'' ,icon0: 'icon home' ,icon1 :'floating ui green mini circular label',tip: '新' },
            { menu: '数据可视化系统' ,href:"#",active:'',icon0: 'icon home' ,icon1 :'floating ui green mini circular label',tip: '新' },
            { menu: '权限管理' ,href:"#",active:'active blue',icon0: 'icon privacy' ,icon1 :'floating ui green mini circular label',tip: '新' },
            { menu: '后台菜单管理' ,href:"#",active:'',icon0: 'icon sitemap' ,icon1 :'ui floating red mini circular label',tip: '2' }
        ]
    };
    //right floated
    var head_data_more = {
        items: [
            { menu: '系统设置' ,href:"#",active:'',icon0: 'icon loading setting' ,icon1 :'ui right floated red mini circular label',tip: '3' },
            { menu: '系统设置' ,href:"#",active:'',icon0: 'icon loading setting' ,icon1 :'ui right floated red mini circular label',tip: '3' }
        ]
    };
    var head_menu = new Vue({
        el: '#head-menu',
        data: head_data
    });
    var head_menu_more = new Vue({
        el: '#head-menu-more',
        data: head_data_more
    });

    //菜单下拉框
    $('.dropdown').dropdown({
        action: 'activate',
        onChange: function(value, text, $selectedItem) {
            // custom action
            //console.info(value);
            //console.info(text);
            //console.info($selectedItem);
            $selectedItem.addClass("active blue");
            $("#head-menu div a").removeClass("active blue");
        }
    });

    //菜单下拉框搜索
    $('.ui.search.tk-menu-search').search({
        source: head_data
    });

    //菜单点击事件
    $("#head-menu div").click(function(){
        $(this).siblings().children().removeClass("active blue");
        $(this).children().addClass("active blue");
        $(".tk-more").removeClass("active");
    });
    //更多菜单点击事件
    //$("#head-menu-more div").click(function(){
    //    alert(1);
    //    $("#head-menu div a").removeClass("active blue");
    //    $(this).siblings().children().removeClass("active");
    //    $(this).children().addClass("active");
    //    $(".tk-more").css("active");
    //});

});