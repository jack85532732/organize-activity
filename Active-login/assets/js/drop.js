$(document).ready(function() {
    $(".filter-refine").click(function() {
        $(".filter-more").toggle();
        $(".filter-arrow").toggleClass("filter-close");
        $(".filter-hide").toggle();
        $(".filter-show").toggle();
    });
});

$(document).ready(function() {
    $(".filter-refinea").click(function() {
        $(".filter-more").toggle();
        $(".filter-arrow").toggleClass("filter-close");
        $(".filter-hide").toggle();
        $(".filter-show").toggle();
    });
});

$(document).ready(function() {
    $(".views-drop").click(function() {
        $(".views-drop-cont").toggle();
    });
});

$(document).ready(function() {
    $(".views-item-more").click(function() {
        $(".views-item-summary p").toggle();
    });
});

$(document).ready(function() {
    $(".layers-close").click(function() {
        $(".layers").hide();
    });
});

$(function() {

    $("#ele4").find('.button-printer').on('click', function() {
        $(".print-web").show();
        //Print ele4 with custom options
        $("#ele4").print({
            //Use Global styles
            globalStyles: false,
            //Add link with attrbute media=print
            mediaPrint: false,
            //Custom stylesheet
            stylesheet: "http://fonts.useso.com/css?family=Inconsolata",
            //Print in a hidden iframe
            iframe: false,
            //Don't print this
            noPrintSelector: ".avoid-this",
            //Add this at top
            prepend: "",
            //Add this on bottom
            append: "<br/>Buh Bye!"
        });
        $(".print-web").hide();
    });
});

$(document).ready(function() {

    $(".menu-channels").children("li").mouseenter(function() {
        $(this).find("a:first").addClass("menu-current");
        var menu_content = $(this).find(".menu-content");
        if (0 !== menu_content.length)
        {
            $(this).find(".current-channel").removeClass("swiper-slide-on-01");
            $(this).addClass("is-selected");
            menu_content.show();
        }
    }).mouseleave(function() {
        var menu_content = $(this).find(".menu-content");
        if (0 !== menu_content.length)
        {
            $(this).removeClass("is-selected");
            $(this).find(".current-channel").addClass("swiper-slide-on-01");
            menu_content.hide();
        }
        $(this).find("a:first").removeClass("menu-current");
    });
});

$('[name="nice-select"]').click(function(e) {
    $('[name="nice-select"]').find('ul').hide();
    $(this).find('ul').show();
    e.stopPropagation();
});
$('[name="nice-select"] li').hover(function(e) {
    $(this).toggleClass('on');
    e.stopPropagation();
});
$('[name="nice-select"] li').click(function(e) {
    var val = $(this).text();
    $(this).parents('[name="nice-select"]').find('input').val(val);
    $('[name="nice-select"] ul').hide();
    e.stopPropagation();
});
$(document).click(function() {
    $('[name="nice-select"] ul').hide();
});