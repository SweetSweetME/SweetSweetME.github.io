$(function(){
    /**
     * 交流学习
     */
    function autoCreate(){
        var title, detail, img, see, like, arr;
        var json = {
            "article": [
                {"title": "前端技术层出不穷，敢问路在何方？", "img": "images/blog-3.jpg", "detail": "回想2012年还是jquery的天下，后来2015年vue、react开始盛行，到现在的红的发紫也才不过3年光景，当然vue生态圈的nuxt,版本一个又一个，不少同学抱怨：老了，学不动了。那么如何选择学习的课程，如何合理安排时间学习呢？我们先来看下对于一个大前端的同学来说有哪些技能点需要掌握？有的同学说这张图已经很吓人了，实际上这张图还描述...", "see": 6099, "like": 42},
                {"title": "javascript学习思维导图", "img": "images/blog-3.jpg", "detail": "JavaScript 小编每天都会跟大家分享文章，也会给大家提供web前端学习资料。", "see": 3622, "like": 27},
                {"title": "前端技术层出不穷，敢问路在何方？", "img": "images/blog-3.jpg", "detail": "回想2012年还是jquery的天下，后来2015年vue、react开始盛行，到现在的红的发紫也才不过3年光景，当然vue生态圈的nuxt,react的next也是水涨船高，各个技术框架一波又一波，版本一个又一个，不少同学抱怨：老了，学不动了。那么如何选择学习的课程，如何合理安排时间学习呢？实际上这张图还描述...", "see": 6099, "like": 42},
                {"title": "前端技术层出不穷，敢问路在何方？", "img": "images/blog-3.jpg", "detail": "回想2012年还是jquery的天下，后来2015年vue、react开始盛行，到现在的红的发紫也才不过3年光景，当然vue生态圈的nuxt,react的next也是水涨船高，各个技术框架一波又一波，版本一个又一个，不少同学抱怨：老了，学不动了。那么如何选择学习的课程，如何合理安排时间学习呢？我们先来看下对于一个大前端的同学来说有哪些技能点需要掌握？有的同学说这张图已经很吓人了，实际上这张图还描述...", "see": 6099, "like": 42},
                {"title": "javascript学习思维导图", "img": "images/blog-3.jpg", "detail": "JavaScript 数据类型JavaScript 变量Javascript 运算符JavaScript 流程控制JavaScript 数组JavaScript 函数基础JavaScript 字符串函数JavaScript 正则表达式DOM 基本操作Window 对象javascript学习思维导图", "img": "images/blog-3.jpg", "detail": "JavaScript 数据类型JavaScript 变量Javascript 运算符JavaScript 流程控制JavaScript 数组JavaScript 函数基础JavaScript 字符串函数JavaScript javascript学习思维导图", "img": "images/blog-3.jpg", "detail": "JavaScript 数据类型JavaScript 变量Javascript 运算符JavaScript 流程控制JavaScript 数组JavaScript 函数基础JavaScript 字符串函数JavaScript 本文资料分享结束喜欢看小编文章的点个订阅或者喜欢！小编每天都会跟大家分享文章，也会给大家提供web前端学习资料。", "see": 3622, "like": 27},
                {"title": "javascript学习思维导图", "img": "images/blog-3.jpg", "detail": "JavaScript 数据类型JavaScript 变量Javascript 运算符JavaScript 流程控制JavaScript 数组JavaScript 函数基础JavaScript 字符串函数JavaScript 正则表达式DOM 基本操作Window 对象本文资料分享结束喜欢看小编文章的点个订阅或者喜欢！小编每天都会跟大家分享文章，也会给大家提供web前端学习资料。", "see": 3622, "like": 27},
                {"title": "前端技术层出不穷，敢问路在何方？", "img": "images/blog-3.jpg", "detail": "回想2012年还是jquery的天下，我们先来看下对于一个大前端的同学来说有哪些技能点需要掌握？有的同学说这张图已经很吓人了，实际上这张图还描述...", "see": 6099, "like": 42},
                {"title": "前端技术层出不穷，敢问路在何方？", "img": "images/blog-3.jpg", "detail": "回想2012年还是jquery的天下，后来2015年vue、react开始盛行，到现在的红的发紫也才不过3年光景，当然vue生态圈的nuxt,react的next也是水涨船高，各个技术框架一波又一波，版本一个又一个，不少同学抱怨：老了，学不动了。", "see": 6099, "like": 42},
                {"title": "javascript学习思维导图", "img": "images/blog-3.jpg", "detail": "JavaScript 数据类型JavaScript 变量Javascript 运算符JavaScript 流程控制JavaScript 数组JavaScript 函数基础JavaScript 字符串函数JavaScript 正则表达式DOM 基本操作Window 对象本文资料分享结束喜欢看小编文章的点个订阅或者喜欢！小编每天都会跟大家分享文章，也会给大家提供web前端学习资料。", "see": 3622, "like": 27},
                {"title": "javascript学习思维导图", "img": "images/blog-3.jpg", "detail": "JavaScript 数据类型JavaScript 变量Javascript 运算符JavaScript 流程控制JavaScript 数组JavaScript 函数基础JavaScript 字符串函数JavaScript 正则表达式DOM 基本操作Window 对象本文资料分享结束喜欢看小编文章的点个订阅或者喜欢！小编每天都会跟大家分享文章，也会给大家提供web前端学习资料。", "see": 3622, "like": 27},
                {"title": "前端技术层出不穷，敢问路在何方？", "img": "images/blog-3.jpg", "detail": "回想2012年还是jquery的天下，后来2015年vue、react开始盛行，到现在的红的发紫也才不过3年光景，当然vue生态圈的nuxt,react的next也是水涨船高，各个技术框架一波又一波，版本一个又一个，不少同学抱怨：老了，学不动了。那么如何选择学习的课程，如何合理安排时间学习呢？我们先来看下对于一个大前端的同学来说有哪些技能点需要掌握？有的同学说这张图已经很吓人了，实际上这张图还描述...", "see": 6099, "like": 42},
                {"title": "前端技术层出不穷，敢问路在何方？", "img": "images/blog-3.jpg", "detail": "各个技术框架一波又一波，版本一个又一个，不少同学抱怨：老了，学不动了。那么如何选择学习的课程，如何合理安排时间学习呢？我们先来看下对于一个大前端的同学来说有哪些技能点需要掌握？有的同学说这张图已经很吓人了，实际上这张图还描述...", "see": 6099, "like": 42},
                {"title": "javascript学习思维导图", "img": "images/blog-3.jpg", "detail": "JavaScript 数据类型JavaScript 变量Javascript 运算符JavaScript 流程控制JavaScript 数组JavaScript 函数基础JavaScript 字符串函数JavaScript 正则表达式DOM 基本操作Window 对象本文资料分享结束喜欢看小编文章的点个订阅或者喜欢！小编每天都会跟大家分享文章，也会给大家提供web前端学习资料。", "see": 3622, "like": 27}
            ]
        };
        // console.log(json);
        $("#comment_box").innerHTML = '';
        for( var i=0; i<json["article"].length; i++ ){
            arr = json["article"];
            title = arr[i].title;
            detail = arr[i].detail;
            img = arr[i].img;
            see = arr[i].see;
            like = arr[i].like;

            $("#comment_box")[0].innerHTML += '<article>' +
                '<div class="box">' +
                '<span>手记文章</span>' +
                '<div class="up">' +
                '<h3>' + title + '</h3>' +
                '<div><img src="' + img + '" alt=""></div>' +
                '</div>' +
                '<p>' + detail + '</p>' +
                '</div>' +
                '<div class="btn-box">' +
                '<span>浏览 ' + see + '</span>' +
                '<span>推荐 ' + like + '</span>' +
                '<a href="javascript:;">阅读全文-></a>' +
                '</div>' +
                '</article>'
        }
        var height = $("#comment_box")[0].offsetHeight;
        $("#comment_box")[0].style.height = height + 'px';
        // console.log(($("#comment_box")[0].offsetWidth/4-$("article")[0].offsetWidth)/2);
        var num = ($("#comment_box")[0].offsetWidth/4-$("article")[0].offsetWidth)/2;
        var allBox = $("#comment_box article"), arr = [], minHeight, minIndex;
        for( var i=0; i<json["article"].length; i++ ){
            // console.log($("article")[i]);
            $("article")[i].style.margin = '0 ' + num + 'px 20px';
        }
        var boxHeight;
        var boxWidth = $("#comment_box article")[0].offsetWidth + 26;
        for( var i=0; i<allBox.length; i++ ){
            boxHeight = allBox[i].offsetHeight;
            if(i<4){
                arr.push(boxHeight + 60);
            }else{
                minHeight = Math.min.apply(this, arr);
                minIndex = getMinBoxIndex(arr, minHeight);
                allBox[i].style.position = 'absolute';
                allBox[i].style.left = minIndex*boxWidth + 'px';
                allBox[i].style.top = minHeight + 'px';
                arr[minIndex] += boxHeight + 30;
            }
        }
        function Scroll(){
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
            // console.log(scrollTop);
            if(scrollTop>=700&&scrollTop<=900){
                for( var i=8; i<allBox.length; i++ ){
                    boxHeight = allBox[i].offsetHeight;
                    if(i<4){
                        arr.push(boxHeight + 60);
                    }else{
                        minHeight = Math.min.apply(this, arr);
                        minIndex = getMinBoxIndex(arr, minHeight);
                        allBox[i].style.position = 'absolute';
                        allBox[i].style.left = minIndex*boxWidth + 'px';
                        allBox[i].style.top = minHeight + 'px';
                        arr[minIndex] += boxHeight + 30;
                    }
                }
            }
        }
        // window.onscroll = function(){
        // 	// Scroll();
        // };
        // Scroll();
    }
    autoCreate();
    function getMinBoxIndex(arr, val){
        for(var i=0; i<arr.length; i++){
            if(arr[i] === val){
                return i;
            }
        }
    }
});