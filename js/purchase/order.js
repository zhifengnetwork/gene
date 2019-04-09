// 订单确认
$(function(){
    
     //使用余额
    $('.difference').click(function(){
        var acc = $(this)
        if(acc.children().hasClass('active')){
            acc.children().attr('src','../../img/purchase/button@2x.png').removeClass('active');
            acc.next().show()
            acc.parent().next().show()
        }else{
            acc.children().attr('src','../../img/purchase/Button-box@2x.png').addClass('active');
            acc.next().hide()
            acc.parent().next().hide()
        }
    })

    //加
    $('.add').click(function(){
       var num = $(this).prev().prop('value')
       var s = parseInt(num)+1
       if(s == 0){return;}
       $(this).prev().attr('value',s)
    })

    //减
    $('.subtract').click(function(){
        var num = $(this).next().prop('value')
        var s = parseInt(num)-1
        if(s == 0){return;}
        $(this).next().attr('value',s)
    })

    
})