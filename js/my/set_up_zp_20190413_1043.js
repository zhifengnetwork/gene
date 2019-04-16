window.onload = function () {
    /*
   * 上传头像
   */
    $("#selectAvatar").change(function (e) {
        for (var i = 0; i < e.target.files.length; i++) {
            var file = e.target.files.item(i);
            //验证是否为图片，不是就跳出循环
            if (!(/^image\/.*$/i.test(file.type))) {
                alert("请选择图片上传！")
                continue;
            }
            //实例化FileReader API  
            var freader = new FileReader();
            freader.readAsDataURL(file);
            freader.onload = function (e) {
                $("#avatarPic").attr("src", e.target.result);  //显示图片
            }
        }
    });



    /*
    * 修改昵称
    */
//  $(".set-up-list .item[data-index='1']").click(function () {
//      $(".mask").show();
//      $(".reviseName").show();
//      $(".popup-wrap").css("bottom", "0");
//  });

    $(".reviseName .reviseBtn").click(function () {
        var newVal = $(".newUsername").val();
        $("#nameVal").html(newVal);
    })

    // 获取焦点
    $(".newUsername,.codeNum").focus(function(){
        scroolToEnd();
        return;
    })
    //失去焦点
    $(".newUsername,.codeNum").blur(function(){
        scroolToSart();
    })

    function scroolToEnd() { 
        $('.popup-wrap').scrollTop($('.popup-wrap').height(),100);
    }
    function scroolToSart() { 
        scrollTo(0,0);
    }


    // $(".newUsername,.codeNum").focus(function () {
    //     var target = this;
    //     // 使用定时器是为了让输入框上滑时更加自然
    //     setTimeout(function () {
    //         target.scrollIntoView(true);
    //         target.scrollIntoViewIfNeeded();
    //     }, 100);
    // });

    // $(".newUsername,.codeNum").blur(function(){
    //     setTimeout(function () {
    //         window.scrollTo(0, document.body.scrollTop + 1); 
    //         document.body.scrollTop >= 1 && window.scrollTo(0, document.body.scrollTop - 1); 
    //     }, 100);
    // })


    //修改性别
    $(".set-up-list .item[data-index='2']").click(function () {
        $(".mask").show();
        $(".reviseSex").show();
        $(".popup-wrap").css("bottom", "0");
    });

    $(".sex label").click(function (e) {
        //判断事件来源，如果是input，则阻止冒泡
        // if ($(e.target).is("input"))
        // return;
        var sexVal = $(this).find("span").html();
        $(this).find("input").addClass("checked").parent().siblings().find("input").removeClass("checked");
        $("#sexVal").html(sexVal);
        $(".mask").hide();
        $(".reviseName,.reviseSex,.revisePhone").hide();
        $(".popup-wrap").css("bottom", "-100%");
    })

    //修改手机号码
    $(".set-up-list .item[data-index='3']").click(function () {
        $(".mask").show();
        $(".revisePhone").show();
        $(".popup-wrap").css("bottom", "0");
    });

    //验证码倒计时
    $(".codeBtn").click(function () {
        var s = 60;
        callback();
        //循环定时器
        var T = window.setInterval(callback, 1000);
        function callback() {
            if (s <= 1) {
                //移除定时器
                window.clearInterval(T);
                $(".codeBtn").text('获取验证码');
                $(".codeBtn").removeAttr("disabled");
            } else {
                $(".codeBtn").text(--s + '秒后再获取');
                $(".codeBtn").attr('disabled', "true");
            }
        }
    })

    //修改
    $(".revisePhone .reviseBtn").click(function () {
        var phoneVal = $(".phoneNum").val();
        $("#phoneVal").text(phoneVal);
    })

    /*
    * 关闭弹框
    */
//  $(".closeBtn,.reviseBtn").click(function () {
//      $(".mask").hide();
//      $(".reviseName,.reviseSex,.revisePhone").hide();
//      $(".popup-wrap").css("bottom", "-100%");
//
//  })







}


