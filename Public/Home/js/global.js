+ function($) {
  $(function() {
    // class
    $(document).on('click', '[data-toggle^="class"]', function(e) {
      e && e.preventDefault();
      var $this = $(e.target),
        $class, $target, $tmp, $classes, $targets;
      !$this.data('toggle') && ($this = $this.closest('[data-toggle^="class"]'));
      $class = $this.data()['toggle'];
      $target = $this.data('target') || $this.attr('href');
      $class && ($tmp = $class.split(':')[1]) && ($classes = $tmp.split(','));
      $target && ($targets = $target.split(','));
      $classes && $classes.length && $.each($targets, function(index, value) {
        if ($classes[index].indexOf('*') !== -1) {
          var patt = new RegExp('\\s' +
            $classes[index].replace(/\*/g, '[A-Za-z0-9-_]+').split(' ').join('\\s|\\s') +
            '\\s', 'g');
          $($this).each(function(i, it) {
            var cn = ' ' + it.className + ' ';
            while (patt.test(cn)) {
              cn = cn.replace(patt, ' ');
            }
            it.className = $.trim(cn);
          });
        }
        ($targets[index] != '#') && $($targets[index]).toggleClass($classes[index]) || $this.toggleClass($classes[index]);
      });
      $this.toggleClass('active');
    });

    // collapse nav
    $(document).on('click', 'nav a', function(e) {
      var $this = $(e.target),
        $active;
      $this.is('a') || ($this = $this.closest('a'));

      $active = $this.parent().siblings(".active");
      $active && $active.toggleClass('active').find('> ul:visible').slideUp(200);

      ($this.parent().hasClass('active') && $this.next().slideUp(200)) || $this.next().slideDown(200);
      $this.parent().toggleClass('active');

      $this.next().is('ul') && e.preventDefault();

      setTimeout(function() {
        $(document).trigger('updateNav');
      }, 300);
    });
  });
}(jQuery);
// 开启提示
$(function() {
  $('[data-toggle="tooltip"]').hover(function() {
    $(this).tooltip('show');
  });
});
$(function() {
    $('[data-toggle="popover"]').popover()
  })
  // 手机表格右侧滑动提示
$(function() {
  $(".table-responsive").scroll(function() {
    if ($(this).scrollLeft() > 0) {
      $(this).addClass("hideshadow");
    } else {
      $(this).removeClass("hideshadow");
    }
  })
});
// 返回顶部
$(function() {
  $(".backtop").on("click", function() {
    $("body,html").animate({
      "scrollTop": "0px"
    }, 200)
  })
});
// 判断浏览器
FuckInternetExplorer()
    function FuckInternetExplorer() {
        var browser = navigator.appName;
        var b_version = navigator.appVersion;
        var version = b_version.split(";");
  if (version.length > 1) {
            var trim_Version = parseInt(version[1].replace(/[ ]/g, "").replace(/MSIE/g, ""));
            if (trim_Version < 9) {
                broswer()
                return false;
            }
        }
        return true;
    }

function broswer() {
  layer.open({
    type: 1,
    title: "浏览器升级提示",
    area: ['520px', '280px'], //宽高
    content: '<div class="wrapper tc"><p class="lh2 t10">您的浏览器版本过低，为了更好的使用本系统，<br />请选择以下浏览器进行升级</p><div class="m-t-xl tc"><a class="iblock wraperl op" href="http://down.360safe.com/se/360se8.1.1.222.exe"><img src="img/360.jpg" alt="" /></a><a class="iblock wraperl op" href="https://www.baidu.com/link?url=vPmkQYU6byrBbPeUwCOpDu4HuAK-Eg-neslf9DxCMTuNVyBhHif85B3s3Ubbxi_hvQcIZzYnFAtIrlT1tYgbTLOVcjmBq6eyynHD_x7FKPu&wd=&eqid=fa606af9000776060000000357a95093"><img src="img/chrome.jpg" alt="" /></a></div></div>'
  });
}
// placeholder
/**
 * jQuery EnPlaceholder plug
 * EnPlaceholder是一个跨浏览器实现placeholder效果的jQuery插件
 * version 1.0
 * by Frans.Lee <dmon@foxmail.com>  http://www.ifrans.cn
 */
;(function ($) {
    $.fn.extend({
        "placeholder":function (options) {
            options = $.extend({
                placeholderColor:'#ACA899',
                isUseSpan:false, //是否使用插入span标签模拟placeholder的方式,默认false,默认使用value模拟
                onInput:true  //使用标签模拟(isUseSpan为true)时，是否绑定onInput事件取代focus/blur事件
            }, options);
      
            $(this).each(function () {
                var _this = this;
                var supportPlaceholder = 'placeholder' in document.createElement('input');
                if (!supportPlaceholder) {
                    var defaultValue = $(_this).attr('placeholder');
                    var defaultColor = $(_this).css('color');
                    if (options.isUseSpan == false) {
                        $(_this).focus(function () {
                            var pattern = new RegExp("^" + defaultValue + "$|^$");
                            pattern.test($(_this).val()) && $(_this).val('').css('color', defaultColor);
                        }).blur(function () {
                                if ($(_this).val() == defaultValue) {
                                    $(_this).css('color', defaultColor);
                                } else if ($(_this).val().length == 0) {
                                    $(_this).val(defaultValue).css('color', options.placeholderColor)
                                }
                            }).trigger('blur');
                    } else {
                        var $imitate = $('<span class="wrap-placeholder" style="position:absolute; display:inline-block; overflow:hidden; color:'+options.placeholderColor+'; width:'+$(_this).outerWidth()+'px; height:'+$(_this).outerHeight()+'px;">' + defaultValue + '</span>');
                        $imitate.css({
                            'margin-left':$(_this).css('margin-left'),
                            'margin-top':$(_this).css('margin-top'),
                            'font-size':$(_this).css('font-size'),
                            'font-family':$(_this).css('font-family'),
                            'font-weight':$(_this).css('font-weight'),
                            'padding-left':parseInt($(_this).css('padding-left')) + 2 + 'px',
                            'line-height':_this.nodeName.toLowerCase() == 'textarea' ? $(_this).css('line-weight') : $(_this).outerHeight() + 'px',
                            'padding-top':_this.nodeName.toLowerCase() == 'textarea' ? parseInt($(_this).css('padding-top')) + 2 : 0
                        });
                        $(_this).before($imitate.click(function () {
                            $(_this).trigger('focus');
                        }));

                        $(_this).val().length != 0 && $imitate.hide();

                        if (options.onInput) {
                            //绑定oninput/onpropertychange事件
                            var inputChangeEvent = typeof(_this.oninput) == 'object' ? 'input' : 'propertychange';
                            $(_this).bind(inputChangeEvent, function () {
                                $imitate[0].style.display = $(_this).val().length != 0 ? 'none' : 'inline-block';
                            });
                        } else {
                            $(_this).focus(function () {
                                $imitate.hide();
                            }).blur(function () {
                                    /^$/.test($(_this).val()) && $imitate.show();
                                });
                        }
                    }
                }
            });
            return this;
        }
    });
})(jQuery);
$(function() {
  $('input, textarea').placeholder({isUseSpan:true});
});
// 自适应等高
function coldg(){
    var tjh=0;
    $(".coldg .item").css({height:"auto"})
    $(".coldg .item").each(function(){
        if($(this).height()>tjh){tjh=$(this).height()}
    });
    $(".coldg .item").height(tjh)
};
$(function(){
    coldg();
    $(window).resize(function(){coldg();})
});
// 图片固定比例
function imgfonder(){
    $(".imgfonder").height($(".imgfonder").width())    
};
$(function(){
  imgfonder();
});
$(window).resize(function(){
  imgfonder();
});
// 滚动到id
function scrollToID(id, speed) {
  var offSet = 67;
  var targetOffset = $(id).offset().top - offSet;
  $('html,body').animate({
    scrollTop: targetOffset
  }, speed);
}
// navigation click actions 
$(function () {
    $('.scroll-link').on('click', function(event) {
        event.preventDefault();
        var sectionID = $(this).attr("data-id");
        scrollToID('#' + sectionID, 750);
    });
});
//数量增减
$(function() {
    $(".js-num .jianj").on("click", function() {
        var num = parseInt($(this).parents(".js-num").find(".numval").val());
        if (num > 1) {
            num -= 1;
            $(this).parents(".js-num").find(".numval").val(num);
        } else {
            alert("最少1")
        }
    });
    $(".js-num .jiaj").on("click", function() {
        var num = parseInt($(this).parents(".js-num").find(".numval").val());
        num += 1;
        $(this).parents(".js-num").find(".numval").val(num);
    });
});

// 模拟radio
$(function(){
  $(".eradio-item").on("click",function(){
    $(this).parents(".eradio").find(".eradio-item").removeClass("checked");
    $(this).addClass("checked");
    $(this).parents(".eradio").trigger("changez");
  })
});
// 模拟check
$(function(){
  $(".echeck-item").on("click",function(){
    $(this).toggleClass("checked");
  })
})
$(function() {
  $('.textarea-hauto').each(function() {
    this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
  }).on('input', function() {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
  });
})
// select
$(function() {
    // $(".select-group .sitem:first").addClass('selected')
    $("body").on('click', '.select-group .sitem', function() {
        $(this).closest(".select-group").find(".sitem").removeClass('selected')
        $(this).addClass('selected');
        $(this).closest(".select-group").trigger("selectChange");
    });
});
// checkbox开关
$(function() {
    $("body").on('click', '.icheckbox', function() {
        $(this).toggleClass('checked');
        $(this).closest(".icheckbox").trigger("checkboxChange");
    });
});