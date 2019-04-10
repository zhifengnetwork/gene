// 订单确认
$(function(){
     //页面加载调用函数求总价
     sumTotal()

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
       var $sub = $(this)
       var num = $(this).prev().prop('value')
       var s = parseInt(num)+1
       if(s == 0){return;}
       $sub.prev().attr('value',s)
       //单行数量
       $sub.parent().parent().prev().children(':last-child').children('.num').html(`x${s}`)
    //    sumPrice($sub.next(),parseInt($('.price').html().slice(1)))
       //调用求和
       sumTotal()
    })

    //减
    $('.subtract').click(function(){
        var $sub = $(this)
        var num = $(this).next().prop('value')
        var s = parseInt(num)-1
        if(s == 0){return;}
        $sub.next().attr('value',s)
        //单行数量
        $sub.parent().parent().prev().children(':last-child').children('.num').html(`x${s}`)
        // sumPrice($sub.next(),parseInt($('.price').html().slice(1)))
        //调用求和
       sumTotal()
    })

    //总价求和函数封装
    function sumTotal(){
        var total=0;
        $(".price").each((i,elem)=>{
            total+=parseInt($(elem).html().slice(1))*parseInt($(elem).next().html().slice(1))
        })
        $(".price_red").html(`¥${total.toFixed(2)}`)
    }

        //单行小计求和函数封装
    // function sumPrice(numObject,priceObject){
    //     // var price=priceObject.parent().prev().html().replace(/\s+$|^\s+/g,"").slice(1);
    //     var price=priceObject
    //     var num=numObject.attr('value')
    //     return price*num
    // }
    
})