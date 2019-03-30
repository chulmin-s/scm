// $(function(){
//     $(window).scroll( function(){
//         /* 2 */
//         $('.fade').each( function(i){
//             var bottom_of_object = $(this).offset().top + $(this).outerHeight();
//             var bottom_of_window = $(window).scrollTop() + $(window).height();
//             /* 3 */
//             if( bottom_of_window > bottom_of_object/2 ){
//                 $(this).addClass('on')
//             }
//         });
//     });
// });

$(function(){
    var o=$(window).scrollTop(),a=o+$(window).height(), t=a-50;
    $(".fade").each(function(){
        var o=$(this).offset().top;t>=o?$(this).addClass("on"):$(this).removeClass("on")})}),
    $(window).scroll(function(){var o=$(window).scrollTop(),a=o+$(window).height(),
        t=a-50;$(".fade").each(function(){var o=$(this).offset().top;t>=o?$(this).addClass("on"):$(this).removeClass("on")})
    })

$(function(){
    $('.graph-list').on('click',function(){
        var graph = ["p90","p70","p60","p50","p70"]

        $('.graph-list-item>.bar').each(function(index){
            $(this).addClass(graph[index]);
        });
    });
});

$(function(){
    $('.profile-wrap-tabList-item').on('click',function(e){

        e.preventDefault();

        var tabIndex = $(this).index('.profile-wrap-tabList-item');

        $('.profile-wrap-tabList-item>a').removeClass('on');
        $('.profile-wrap-tabList-item').eq(tabIndex).children('a').addClass('on');


        $('.tab-contents-wrap').removeClass('on');
        $('.tab-contents-wrap').eq(tabIndex).addClass('on');
    });
});
