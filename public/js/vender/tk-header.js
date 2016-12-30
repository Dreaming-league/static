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

    //菜单下拉框
    $('.dropdown').dropdown({
        action: 'activate',
        onChange: function(value, text, $selectedItem) {
            // custom action
            //console.info(value);
            //console.info(text);
            //console.info($selectedItem);
            //$selectedItem.addClass(" active blue ");
            $("#head-menu div div a").removeClass("active blue");
        }
    });

    //菜单下拉框搜索
    //$('.ui.search.tk-menu-search').search({
    //    source: head_data
    //});

    //菜单点击事件
    $("#head-menu div div").click(function(){
        $(this).parent().siblings().children().children().removeClass("active blue");
        $(this).children().addClass("active blue");
        $(".tk-more").removeClass("active");
    });
    //更多菜单点击事件
    //$("#head-menu-more div").click(function(){
    //    $("#head-menu div a").removeClass("active blue");
    //    $(this).siblings().children().removeClass("active");
    //    $(this).children().addClass("active");
    //    $(".tk-more").css("active");
    //});

});