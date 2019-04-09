// 订单确认
$(function(){
    
     //使用余额
    $('.difference').click(function(){
        var acc = $(this)
        if(acc.children().hasClass('active')){
            acc.children().attr('src','../../img/purchase/button@2x.png').removeClass('active');
            acc.next().show()
        }else{
            acc.children().attr('src','../../img/purchase/Button-box@2x.png').addClass('active');
            acc.next().hide()
        }
    })
})