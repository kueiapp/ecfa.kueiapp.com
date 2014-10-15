$(function(){
    
/* global variables */    
    arrayTW = {};
    arrayCN = {};
    firstIndex = 0;
    secondIndex = 0;
    
/* function */    
    var appendCatPromise = function(c){
        $("#table-item-"+c).append('<ul>'); 
        var arr;
        if(c=='tw') arr = arrayTW;
        else arr = arrayCN;
        
        if('array' === jQuery.type(arr.cat_first[firstIndex].cat_second)){
            if('array' === jQuery.type(arr.cat_first[firstIndex].cat_second[secondIndex].cat_promise)){
                for(var j in arr.cat_first[firstIndex].cat_second[secondIndex].cat_promise){
                    $("#table-item-"+c+" ul:last-child").append(
                        '<li><b>'+arr.cat_first[firstIndex].cat_second[secondIndex].cat_promise[j].description+':</b>'+
                        arr.cat_first[firstIndex].cat_second[secondIndex].cat_promise[j].text+'</li>'
                    );
                }
            }
        }
        else{
            if('array' === jQuery.type(arr.cat_first[firstIndex].cat_second.cat_promise)){
                for(var j in arr.cat_first[firstIndex].cat_second.cat_promise){
                    $("#table-item-"+c+" ul:last-child").append(
                        '<li><b>'+arr.cat_first[firstIndex].cat_second.cat_promise[j].description+':</b>'+
                        arr.cat_first[firstIndex].cat_second.cat_promise[j].text+'</li>'
                    );
                }
            }
        }
    };
    var appendItemPromise = function(c,i){
        console.log('append item promise '+i+' on '+c);
        $("#table-item-"+c).append('<ul>');
        
        var arr;
        if(c=='tw') arr = arrayTW;
        else arr = arrayCN;
        
        if('array' === jQuery.type(arr.cat_first[firstIndex].cat_second)){
            if('array' === jQuery.type(arr.cat_first[firstIndex].cat_second[secondIndex].item)){
                for(var j in arr.cat_first[firstIndex].cat_second[secondIndex].item[i].item_promise){
                    $("#table-item-"+c+" ul:eq("+i+") ").append(
                        '<li><b>'+arr.cat_first[firstIndex].cat_second[secondIndex].item[i].item_promise[j].description+':</b>'+
                        arr.cat_first[firstIndex].cat_second[secondIndex].item[i].item_promise[j].text+'</li>'
                    );
                } 
            }
            else{
                for(var j in arr.cat_first[firstIndex].cat_second[secondIndex].item.item_promise){
                    $("#table-item-"+c+" ul:eq("+i+") ").append(
                        '<li><b>'+arr.cat_first[firstIndex].cat_second[secondIndex].item.item_promise[j].description+':</b>'+
                        arr.cat_first[firstIndex].cat_second[secondIndex].item.item_promise[j].text+'</li>'
                    );
                }
            }
        }
        else{
           if('array' === jQuery.type(arr.cat_first[firstIndex].cat_second.item)){
                for(var j in arr.cat_first[firstIndex].cat_second.item[i].item_promise){
                    $("#table-item-"+c+" ul:eq("+i+") ").append(
                        '<li><b>'+arr.cat_first[firstIndex].cat_second.item[i].item_promise[j].description+':</b>'+
                        arr.cat_first[firstIndex].cat_second.item[i].item_promise[j].text+'</li>'
                    );
                } 
            }
            else{
                for(var j in arr.cat_first[firstIndex].cat_second.item.item_promise){
                    $("#table-item-"+c+" ul:eq("+i+") ").append(
                        '<li><b>'+arr.cat_first[firstIndex].cat_second.item.item_promise[j].description+':</b>'+
                        arr.cat_first[firstIndex].cat_second.item.item_promise[j].text+'</li>'
                    );
                }
            } 
        }
    };
    
    var appendData = function(source){
        console.log('append data');
        var arr = [];
        
        if(source === 'tw'){
            arr = arrayTW;
        }
        else{
            arr = arrayCN;
        }
        $("#table-item-"+source).append('<ol>');
            if('array' === jQuery.type(arr.cat_first[firstIndex].cat_second)){
                if('array' === jQuery.type(arr.cat_first[firstIndex].cat_second[secondIndex].item)){  //多資料時用array           
                    var insertable = 0;
                    for(var i in arr.cat_first[firstIndex].cat_second[secondIndex].item){
                        $("#table-item-"+source+" ol").append(
                            '<li><a target="_blank" href="'+arr.cat_first[firstIndex].cat_second[secondIndex].item[i].url+'">'+
                            arr.cat_first[firstIndex].cat_second[secondIndex].item[i].description+
                            '</a> <a href="#" class="label label-default cpc">CPC內容</a>\
        <div class="alert alert-dismissable alert-warning hide">'+arr.cat_first[firstIndex].cat_second[secondIndex].item[i].text+
                            '</div></li>'
                        );
                        if('array' === jQuery.type(arr.cat_first[firstIndex].cat_second[secondIndex].item[i].item_promise)){ //有item_promise
                            appendItemPromise(source,i);
                        }
                        else{ //沒有item_promise
                            insertable = 1;
                        }
                    }
                    if(insertable) appendCatPromise(source);
                }
                else{ //一筆則用object
                    console.log('append more cat2 and one item')
                    $("#table-item-"+source).append(
                        '<ol><li><a target="_blank" href="'+arr.cat_first[firstIndex].cat_second[secondIndex].item.url+'">'+
                        arr.cat_first[firstIndex].cat_second[secondIndex].item.description+
                        '</a> <a href="#" class="label label-default cpc">CPC內容</a>\
        <div class="alert alert-dismissable alert-warning hide">'+arr.cat_first[firstIndex].cat_second[secondIndex].item.text+
                        '</div></li></ol>'
                    );
                    if('array' === jQuery.type(arr.cat_first[firstIndex].cat_second[secondIndex].item.item_promise)){
                        appendItemPromise(source,0);    
                    }
                    else{ //沒有item_promise
                        appendCatPromise(source);
                    }
                }
            }
            else{
                if('array' === jQuery.type(arr.cat_first[firstIndex].cat_second.item)){  //多資料時用array           
                    var insertable = 0;
                    for(var i in arr.cat_first[firstIndex].cat_second.item){
                        $("#table-item-"+source+" ol").append(
                            '<li><a target="_blank" href="'+arr.cat_first[firstIndex].cat_second.item[i].url+'">'+
                            arr.cat_first[firstIndex].cat_second.item[i].description+
                            '</a> <a href="#" class="label label-default cpc">CPC內容</a>\
        <div class="alert alert-dismissable alert-warning hide">'+arr.cat_first[firstIndex].cat_second.item[i].text+
                            '</div></li>'
                        );
                        if('array' === jQuery.type(arr.cat_first[firstIndex].cat_second.item[i].item_promise)){ //有item_promise
                            appendItemPromise(source,i);
                        }
                        else{ //沒有item_promise
                            insertable = 1;
                        }
                    }
                    if(insertable) appendCatPromise(source);
                }
                else{ //一筆則用object
                    console.log('append one cat2 and one item');
                    $("#table-item-"+source).append(
                        '<ol><li><a target="_blank" href="'+arr.cat_first[firstIndex].cat_second.item.url+'">'+
                        arr.cat_first[firstIndex].cat_second.item.description+
                        '</a> <a href="#" class="label label-default cpc">CPC內容</a>\
        <div class="alert alert-dismissable alert-warning hide">'+arr.cat_first[firstIndex].cat_second.item.text+
                        '</div></li></ol>'
                    );
                    if('array' === jQuery.type(arr.cat_first[firstIndex].cat_second.item.item_promise)){
                        appendItemPromise(source,0);    
                    }
                    else{ //沒有item_promise
                        appendCatPromise(source);
                    }
                }
            }
    };
    
    var cleanTR = function(source){
        $("#table-item-"+source).html('');
        $("#table-promise-"+source).html('');
    };
    
    $(document).on("click",".cpc",function(e){
        e.preventDefault();
        if($(this).siblings("div.alert").hasClass("hide")) $(this).siblings("div.alert").removeClass("hide");
        else $(this).siblings("div.alert").addClass("hide");
    });
    
    
/* Taiwan */
    $.get("asset/cat-tw.xml",function(xml){
        arrayTW = $.xml2json(xml);
        for(var i in arrayTW.cat_first){
            $("#cat-first-tw").append('<li><a class="item-first-tw" tabindex="'+i+'" href="#">'+arrayTW.cat_first[i].description+'</a></li>');
        }
    });
    
    $(document).on("click",".item-first-tw",function(e){
        e.preventDefault();
        firstIndex = $(this).attr('tabindex');
        $("#cat-first-title-tw").text($(this).text());
        $("#cat-second-title-tw").text('細類');
        $("#cat-second-tw").html('');
        if('array' === jQuery.type(arrayTW.cat_first[firstIndex].cat_second)){
            console.log('cat2 is array');
            for(var i in arrayTW.cat_first[firstIndex].cat_second){
                $("#cat-second-tw").append(
                    '<li><a class="item-second-tw" tabindex="'+i+'" href="#">'+arrayTW.cat_first[firstIndex].cat_second[i].description+'</a></li>'
                );
            }
        }
        else{
            console.log('cat2 is one');
            $("#cat-second-tw").append(
                '<li><a class="item-second-tw" tabindex="'+i+'" href="#">'+arrayTW.cat_first[firstIndex].cat_second.description+'</a></li>'
            );
        }
    });
    
    $(document).on("click",".item-second-tw",function(e){
        e.preventDefault();
        secondIndex = $(this).attr('tabindex');
        $("#cat-second-title-tw").text($(this).text());        
        cleanTR('tw');        
        appendData('tw');    
    });

    
/* China */    
    $.get("asset/cat-cn.xml",function(xml){
         arrayCN = $.xml2json(xml);
         for(var i in arrayCN.cat_first){
             $("#cat-first-cn").append('<li><a class="item-first-cn" tabindex="'+i+'" href="#">'+arrayCN.cat_first[i].description+'</a></li>');
         }
    });
    
    $(document).on("click",".item-first-cn",function(e){
        e.preventDefault();
        firstIndex = $(this).attr('tabindex');
        $("#cat-first-title-cn").text($(this).text());
        $("#cat-second-title-cn").text('細類');
        $("#cat-second-cn").html('');
        if('array' === jQuery.type(arrayCN.cat_first[firstIndex].cat_second)){
            for(var i in arrayCN.cat_first[firstIndex].cat_second){
                $("#cat-second-cn").append(
                    '<li><a class="item-second-cn" tabindex="'+i+'" href="#">'+arrayCN.cat_first[firstIndex].cat_second[i].description+'</a></li>'
                );
            }
        }
        else{
            $("#cat-second-cn").append(
                '<li><a class="item-second-cn" tabindex="'+i+'" href="#">'+arrayCN.cat_first[firstIndex].cat_second.description+'</a></li>'
            );
        }
    });
    
    $(document).on("click",".item-second-cn",function(e){
        e.preventDefault();
        secondIndex = $(this).attr('tabindex');
        $("#cat-second-title-cn").text($(this).text());
        cleanTR('cn');        
        appendData('cn');
    });
    
    
    
    
    
    
    
    
});
