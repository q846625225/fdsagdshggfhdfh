$("#title4, #title3").css("display", "none");
$(".title_span").click(function () {
    if ($(this).attr("index") == 1) {
        $("#title4, #title3").slideUp();
        $(this).attr("index", "0")
        $(this).html("查看剩余标题  ∨")
    } else {
        $("#title4, #title3").slideDown();
        $(this).attr("index", "1");
        $(this).html("隐藏标题 ∧")
    }
})
$(".title1_div2_2").css("display", "none");
$(".span2").click(function () {
    if ($(this).attr("index") == 1) {
        $(this).parent().prev().slideUp();
        $(this).parent().prev().prev().slideUp();
        $(this).attr("index", "0")
        $(this).html("查看剩余二级标题  ∨")
    } else {
        $(this).parent().prevAll().slideDown();
        $(this).attr("index", "1");
        $(this).html("隐藏二级标题 ∧")
    }
})
$(".title1_div2").css("display", "none")
$(".title1_span").click(function (e) {
    e.preventDefault();
    if ($(this).attr("index") == 1) {
        $(this).attr("index", "0")
        $(this).html("∨")
        $(this).parent().next().slideUp();
    } else {
        $(this).parent().next().slideDown();
        $(this).attr("index", "1");
        $(this).html("∧")
    }
});
$(".span1").click(function (e) {
    $(document)[0].onclick =null;
    e.preventDefault();
    $("#mask").css("display", "block")
    $("#title>span").css("display", "inline-block")
    var a = $(this).parent().parent().attr("index");
    var b = $(this).parent().attr("index");
    var str = a + "-" + b;
    console.log(str);
    $("#title>span").html(str);
    var height = $("#title").height() / 2 - 50;
    $("#title>span").css("top", height);
    setInterval(function () {
        $(document)[0].onclick = function () {
            $("#mask").css("display", "none")
            $("#title>span").css("display", "none")
        }
    }, 500)
});