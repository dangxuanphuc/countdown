$(document).ready(function() {
  var list = "<li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>";
  var ool = "<ol>" + list + "</ol>";
  $(".spot").after(ool);
  var date = "<div class='date'></div>";
  $(".spot").before(date);
  var week = "<div class='week'></div>";
  $(".date").before(week);
  var year = "<div class='year'></div>";
  $(".date").before(year);
  var times = "<div class='times'></div>";
  $(".date").before(times);

  var starttime = new Date("2021/2/12");
  setInterval(function () {
    var nowtime = new Date();
    var time = starttime - nowtime;
    var day = parseInt(time / 1000 / 60 / 60 / 24);
    var hour = parseInt(time / 1000 / 60 / 60 % 24);
    var minute = parseInt(time / 1000 / 60 % 60);
    var seconds = parseInt(time / 1000 % 60);

    var syday = "<span>" + hour + "</span>" + "h" + "<span>" + minute + "</span>" + "m" + "<span class='Lose'>" + seconds + "</span>" + "s";
    $('.time').html("<p>New Year's Eve Countdown</p>" + "<p><span>" + day + "</span>" + "days</p>");
    $(".sydate").html(syday);
  }, 1000);

    function Todayss(){
        var day = new Date();  //日期
        var Y = day.getFullYear();  //年
        var M = day.getMonth() + 1;  //月
        var D = day.getDate();  //日
        var U = day.getUTCDay();  //周
        var H = day.getHours();  //时
        var MIN = day.getMinutes();  //分
        var S = day.getSeconds();  //秒
        var MSs = day.getMilliseconds();
        var MS = MSs.toString().substring(0,2);
        var sss = S * 6,
          mmm = MIN * 6 + (sss * 0.01),
          hhh = (H * 30) + (MIN * 0.5);
        var rotss = "rotate(" + sss + "deg)";
        var rotmm = "rotate(" + mmm + "deg)";
        var rothh = "rotate(" + hhh + "deg)";
        $(".HH").css({"transform":rothh});
        $(".MM").css({"transform":rotmm});
        $(".SS").css({"transform":rotss});
        if(M < 10){M = "0" + M;};
        if(D < 10){D = "0" + D;};
        if(H < 10){H = "0" + H;};
        if(MIN < 10){MIN = "0" + MIN;};
        if(S < 10){S = "0" + S;};

      switch (U){
          case 0:U="Sunday";
        break;
          case 1:U="Monday";
        break;
          case 2:U="Tuesday";
        break;
          case 3:U="Wednesday";
        break;
          case 4:U="Thursday";
        break;
          case 5:U="Friday";
        break;
          case 6:U="Saturday";
        break;
      };

      var week = U;
      $(".week").html(week);

      var year = Y;
      $(".year").html(year);

      var date = "<span>" + M + "</span>" + "月" + "<span>" + D + "</span>" + "日";
      $(".date").html(date);

      var times = "<span>" + H + "</span>" + ":" + "" + "<span>" + MIN + "</span>" + ":" + "" + "<span>" + S + "</span>" + ":" + "" + "<span>" + MS + "</span>";
      $(".times").html(times);
    }
    setInterval(Todayss, 10);

    $(".message").click(function(){
      $(".key").addClass("keys");
      $(".key").removeClass("remove");
    });

    function Closs(){
      $(".key").removeClass("keys");
      $(".key").addClass("remove");
      setTimeout(function(){
        $(".key").removeClass("remove");
      },1000);
    };

    $(".iocnBox").click(function(){
      Closs()
    });
    $(".today").click(function(){
      var ksyss = $(".key").hasClass("keys");
      if(ksyss == true){
        Closs()
      }
    });

    var mess = "<span class='B-span2'>Happy New Year to you and me!</span><span>Hello 2021</span>";
    $(".barrage").append(mess);

    $(".buts").click(function(){
      var mes = $(".van-field__control").val();
      if(!mes){
        var Tipss = "<div class='Tipss'>You haven’t entered anything yet</div>";
        $("body").append(Tipss);
        setTimeout(function(){
          $(".Tipss").remove();
        },1500)
      }else{
        var x = 10;
        var y = 0;

        var col = ["#3fd316","#0dd2ef","#ff0000","#3fd316","#0dd2ef","#ffffff","#3fd316","#0dd2ef","#ff0000","#3fd316"];
        var colors = parseInt(Math.random() * (x - y + 1) + y);
        var rand = parseInt(Math.random() * (x - y + 1) + y) * 15;
        var sudu = parseInt(Math.random() * (x - y + 1) + y) * 3;
        if(sudu < 1){
          sudu = 10;
        };
        var dasdass = " animation: Barrag " + sudu + "s linear infinite;";
        var dasdass2 = " -webkit-animation: Barrag " + sudu + "s linear infinite;";
        var colorss = "color:" + col[colors] + ";";
        var spans = "<span" + " style='top:" + rand + "px;" + colorss + dasdass + dasdass2 + "'>" + mes + "</span>";

        $(".barrage").append(spans);

        var Tips = "<div class='Tips'>Sent successfully!</div>";
        $("body").append(Tips);
        setTimeout(function(){
          $(".Tips").remove();
        },1500)
      }
    });
    $(".empty").click(function(){
      $(".van-field__control").val("");
      $(".empty").css("opacity","0")
    });
    $(".van-field__control").bind('input propertychange', function() {
      var vals = $(".van-field__control").val();
      if(vals == ""){
        $(".empty").css("opacity","0")
      }else{
        $(".empty").css("opacity","1")
      }
    })
});
