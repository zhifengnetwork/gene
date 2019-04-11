// 商品详情

$(function(){

    //点击收藏
    $('.shou').click(function(){
        var acc = $(this)
        if(acc.children().children().hasClass('active')){
            acc.children().children().attr('src','../../img/purchase/product/collection@2x.png').removeClass('active')
        }else{
            acc.children().children().attr('src','../../img/purchase/product/collection-r@2x.png').addClass('active')
        }
    })

    //领取优惠券
    $('.coupon').click(function(){
        var add = $(this)
        $('.receive_coupon').show()  //遮罩层
        $('.receive_box').show()     //优惠券
        thisScrollNum = $(document).scrollTop();
				$('.wrap_frame').css({
					'position': 'fixed',
					'top': -thisScrollNum,
					'left': 0,
                    'height': '100%',
                    'width':'100%',
                    'touch-action':'pan-y'
				});
				$('html').css({
					'height': '100%'
				});
    })

    //隐藏优惠券
    $('.receive_coupon').click(coupon) //遮罩层
    $('.achieve').click(coupon)        //完成


    function coupon(){
        $('.receive_coupon').hide()  //遮罩层
        $('.receive_box').hide()     //优惠券
        /*恢复滑动*/
        $('.wrap_frame').css({
            'position': '',
            'top': '',
            'left': '',
            'height': '',
            'width':''
        });
        $('html').css({
            'height': ''
        });
        /*恢复当前用户滚动的位置！*/
        $(document).scrollTop(thisScrollNum);
		$("body").unbind("touchmove");
    }

    //使用优惠券
    $('.use').click(function(){
         var employ = $(this)
         var img = `<img src="../../img/purchase/logo@2x.png" alt="" class="been">`
         if(employ.parent().hasClass('coupon_use')){
         employ.parent().addClass('employ').removeClass('coupon_use')
         employ.parent().append(img)
         $('.popup').show()
         $('.popup').animate({
             opactiy:1
         }
         ,1000,function(){
            $('.popup').hide()
         }) 
         }
    })
})