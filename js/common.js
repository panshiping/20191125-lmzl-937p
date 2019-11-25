


$(window).on("load orientationchange resize", function() {
    
  /*
    $(".sc_fix tr td").each(function(i,e) {
      $(".sc_fix tr th:eq("+i+"), .sc_fix tr td:eq("+i+")").heightLine();
    });
    */
  
  
  
  
  /* 
     * 現在の回転角度を取得して縦横の判定を行う
     * 90 と -90 の場合は横向きであると判断できる
     */
    if(Math.abs(window.orientation) === 90) {
      console.log("横");
      if($('div.table .sc').length){
        $('div.table .sc').addClass("nonesc");
      }
      if($('div.table .sc_fix').length){
        $('div.table .sc_fix').addClass("nonesc");
        
        $(".sc_fix tr td").each(function(i,e) {
          $(".sc_fix tr th:eq("+i+"), .sc_fix tr td:eq("+i+")").heightLine("destroy");
          $(".sc_fix tr th:eq("+i+"), .sc_fix tr td:eq("+i+")").heightLine();
        });
      }
      

      
    } else {
      console.log("縦");
      if($('div.table .sc').length){
        $('div.table .sc').removeClass("nonesc");
      }
      if($('div.table .sc_fix').length){
        $('div.table .sc_fix').removeClass("nonesc");
        
        $(".sc_fix tr td").each(function(i,e) {
          $(".sc_fix tr th:eq("+i+"), .sc_fix tr td:eq("+i+")").heightLine("destroy");
          $(".sc_fix tr th:eq("+i+"), .sc_fix tr td:eq("+i+")").heightLine();
        });
      }
    }

    /*
     * 何らかの処理を追加
     */
});