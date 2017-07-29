/**
 * Created by fuchao on 01/07/2017.
 */
$(function() {
    var site = window.location.host;
    var pageImg = $('.banner-button-box').find('img')[0].src;
    var key;
    if (site.match('localhost')) {
        key = 'finance';
    } else {
        key = site.split('.')[1].slice(5);
    }
    $('.tit2').find('img')[0].src = site + '/img/logo-' + key + '.png';
    $('.qr-code').find('img')[0].src = site + '/img/qr-' + key + '.png';
    if (pageImg.match('union')) {
        pageImg = site + '/img/union-' + key + '.png';
    }
    if (pageImg.match('contact')) {
        pageImg = site + '/img/contact-' + key + '.png';
    }

    if ("" != "" && "" != "") {
        var now = new Date();
        var enddate = "".replace(/-/g, "/");
        if (Date.parse(enddate) >= now.getTime()) {
            $(".index-notice").show();
        }
    };
    var imgwidth = $(".content").width() / 2 - 300 + 'px'
    $(".index-tit").css({
        "left": imgwidth,
        "display": "block"
    })


    $(window).resize(function() {
        var imgwidth = $(".content").width() / 2 - 300 + 'px'
        $(".index-tit").css("left", imgwidth)
    })
    var imgwidth = $(".content").width() / 2 - 300 + 'px'
    $(".index-tit").css({
        "left": imgwidth,
        "display": "block"
    })

    var time = null
    $(".index-nav").mouseenter(function() {
        $(this).stop("true", "true").css("width", "170px")
        $(".nav-list a").show()
        $(".subnav-list a").css("display", "block")
        $(".tit").css("display", "none")
        $(".tit2").css("display", "block")
        $(".list1 .qr-code-warp").show()
        clearTimeout(time)
    }).mouseleave(function() {
        time = setTimeout(function() {
            $(".nav-list a").hide()
            $(".tit").css("display", "block")
            $(".tit2").css("display", "none")
            $(".subnav-list a").css("display", "none")
            $(".index-nav").stop("true", "true").animate({
                width: 50
            }, 200)
            $(".tit").removeClass("titadd")
            $(".list1 .qr-code-warp").hide()
        }, 1000)
    })

    $(".nav-menu").mouseenter(function() {
        $(this).children().show()
    }).mouseleave(function() {
        $(this).find("ul").hide()
    })
    $(".notice-top").click(function() {
        $(".index-notice").hide()
    })
    $(".menucontainer-list").click(function(event) {
        event.stopPropagation();
    });
});