$(".gear-check").click(function () {
    $(".color-option").toggle(".show")
});
var colorLi = $(".color-option ul li")
colorLi
    .eq(0).css("backgroundColor", "#e41b17").end()
    .eq(1).css("backgroundColor", "#009AFF").end()
    .eq(2).css("backgroundColor", "#E426D5").end()
    .eq(3).css("backgroundColor", "#fff400")

colorLi.click(function () {
    $("link[href*='theme']").attr("href", $(this).attr("data-value"));
});
window.onload = () => {
    $(".loading-overlay .spinner").fadeOut(2000,
        function () {
            $(this).parent().fadeOut(2000,
                function () {
                    $("body").css("overflow", "auto");

                    $(this).remove();
                });
        });
}
let scrollTop = document.getElementById("scroll-top")
window.onscroll = () => {
    if($(this).scrollTop() > 200){
        scrollTop.classList.add("Active")        
    }else{
        scrollTop.classList.remove("Active")
    }
}