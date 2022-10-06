$(".button").on({
    mouseenter: function(){
        $(this).addClass('hover');
    },
    mouseleave: function(){
        $(this).removeClass('hover');
    },
   click: function(){
        $(this).css("background-color","#FB9F4E");
        $(this).css("box-shadow", "inset");
    },
})