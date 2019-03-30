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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjbWhfMS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ25iLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gJChmdW5jdGlvbigpe1xyXG4vLyAgICAgJCh3aW5kb3cpLnNjcm9sbCggZnVuY3Rpb24oKXtcclxuLy8gICAgICAgICAvKiAyICovXHJcbi8vICAgICAgICAgJCgnLmZhZGUnKS5lYWNoKCBmdW5jdGlvbihpKXtcclxuLy8gICAgICAgICAgICAgdmFyIGJvdHRvbV9vZl9vYmplY3QgPSAkKHRoaXMpLm9mZnNldCgpLnRvcCArICQodGhpcykub3V0ZXJIZWlnaHQoKTtcclxuLy8gICAgICAgICAgICAgdmFyIGJvdHRvbV9vZl93aW5kb3cgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCkgKyAkKHdpbmRvdykuaGVpZ2h0KCk7XHJcbi8vICAgICAgICAgICAgIC8qIDMgKi9cclxuLy8gICAgICAgICAgICAgaWYoIGJvdHRvbV9vZl93aW5kb3cgPiBib3R0b21fb2Zfb2JqZWN0LzIgKXtcclxuLy8gICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ29uJylcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH0pO1xyXG4vLyAgICAgfSk7XHJcbi8vIH0pO1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG4gICAgdmFyIG89JCh3aW5kb3cpLnNjcm9sbFRvcCgpLGE9byskKHdpbmRvdykuaGVpZ2h0KCksIHQ9YS01MDtcclxuICAgICQoXCIuZmFkZVwiKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIG89JCh0aGlzKS5vZmZzZXQoKS50b3A7dD49bz8kKHRoaXMpLmFkZENsYXNzKFwib25cIik6JCh0aGlzKS5yZW1vdmVDbGFzcyhcIm9uXCIpfSl9KSxcclxuICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXt2YXIgbz0kKHdpbmRvdykuc2Nyb2xsVG9wKCksYT1vKyQod2luZG93KS5oZWlnaHQoKSxcclxuICAgICAgICB0PWEtNTA7JChcIi5mYWRlXCIpLmVhY2goZnVuY3Rpb24oKXt2YXIgbz0kKHRoaXMpLm9mZnNldCgpLnRvcDt0Pj1vPyQodGhpcykuYWRkQ2xhc3MoXCJvblwiKTokKHRoaXMpLnJlbW92ZUNsYXNzKFwib25cIil9KVxyXG4gICAgfSlcclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuICAgICQoJy5ncmFwaC1saXN0Jykub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBncmFwaCA9IFtcInA5MFwiLFwicDcwXCIsXCJwNjBcIixcInA1MFwiLFwicDcwXCJdXHJcblxyXG4gICAgICAgICQoJy5ncmFwaC1saXN0LWl0ZW0+LmJhcicpLmVhY2goZnVuY3Rpb24oaW5kZXgpe1xyXG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKGdyYXBoW2luZGV4XSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcbiAgICAkKCcucHJvZmlsZS13cmFwLXRhYkxpc3QtaXRlbScpLm9uKCdjbGljaycsZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgdmFyIHRhYkluZGV4ID0gJCh0aGlzKS5pbmRleCgnLnByb2ZpbGUtd3JhcC10YWJMaXN0LWl0ZW0nKTtcclxuXHJcbiAgICAgICAgJCgnLnByb2ZpbGUtd3JhcC10YWJMaXN0LWl0ZW0+YScpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAgICQoJy5wcm9maWxlLXdyYXAtdGFiTGlzdC1pdGVtJykuZXEodGFiSW5kZXgpLmNoaWxkcmVuKCdhJykuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG5cclxuICAgICAgICAkKCcudGFiLWNvbnRlbnRzLXdyYXAnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICAgICAkKCcudGFiLWNvbnRlbnRzLXdyYXAnKS5lcSh0YWJJbmRleCkuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICB9KTtcclxufSk7XHJcbiJdfQ==
