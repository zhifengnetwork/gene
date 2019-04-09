// 商品详情

$(function(){
      
    $('.store_buy').click(function(){
        $(window).attr('location','/html/purchase/order.html');
    })

    //点击收藏
    $('.item_img').click(function(){
        var acc = $(this)
        if(acc.children().hasClass('active')){
            acc.children().attr('src','../../img/purchase/product/collection-r@2x.png').removeClass('active')
        }else{
            acc.children().attr('src','../../img/purchase/product/collection@2x.png').addClass('active')
        }
    })
})