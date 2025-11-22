$(function(){
  // 旺旺通國際有限公司
  $("#wanwanton").click(function() {
    let title = "<strong>旺旺通國際有限公司</strong>";
    let text = "<p>旺旺通國際有限公司形象網站，主要介紹公司的營運。</p>";
    let img = "wanwanton.jpg";
    let showCancelButton = false;
    let front = "http://sushentravel.web.youp.ga/wanwanton";
    let backstage = "#";
    webs(title, text, showCancelButton, img, front, backstage);
  });
  // 旺旺通國際有限公司

  // 旺旺通國際有限公司-黑卡介紹
  $("#blackcard").click(function() {
    let title = "<strong>旺旺通國際有限公司-黑卡介紹</strong>";
    let text = "<p>黑卡介紹形象網站，主要為介紹黑卡如何使用與可在哪裡使用。</p>"
    let showCancelButton = false;
    let img = "blackcard.jpg";
    let front = "http://sushentravel.web.youp.ga/blackcard";
    let backstage = "#";
    webs(title, text, showCancelButton, img, front, backstage);
  });
  // 旺旺通國際有限公司-黑卡介紹

  // 旅遊網站
  $("#travel").click(function() {
    let title = "<strong>旅遊網站</strong>";
    let text = "<p>旅遊資訊整合專案： 透過串接政府 Open Data API，實現景點與美食資料的即時獲取與自動更新。此專案展現了獨立開發與外部 API 整合的實戰能力。</p>";
    let showCancelButton = false;
    let img = "travel.jpg";
    let front = "http://sushentravel.web.youp.ga/travel";
    let backstage = "#";
    webs(title, text, showCancelButton, img, front, backstage);
  });
  // 旅遊網站

  // 富利管理顧問有限公司
  $("#fulirich").click(function() {
    let title = "<strong>富利管理顧問有限公司</strong>";
    let text = "<p>富利管理顧問有限公司形象網站，主要為介紹此公司的營運。</p>";
    let showCancelButton = false;
    let img = "fulirich.jpg";
    let front = "http://sushentravel.web.youp.ga/fulirich";
    let backstage = "http://sushentravel.web.youp.ga/fulirich/login";
    webs(title, text, showCancelButton, img, front, backstage);
  });
  // 富利管理顧問有限公司

  // Madtown Barbell
  $("#gym").click(function() {
    let title = "<strong>Madtown Barbell</strong>";
    let text = "<p>此為健身房網站，主要是紀錄會員進出時間與管理會員使用的專案</p>"+
    "<p>當加入會員時，會員需選擇特定專案才能進入健身房，"+
    "而會員進入健身房時，使用條碼掃描器逼會員卡，"+
    "系統便會記錄會員當下時間，若會員專案快過期便會做提醒動作</p>";
    let showCancelButton = false;
    let img = "gym.jpg";
    let front = "http://sushentravel.web.youp.ga/gym";
    let backstage = "http://sushentravel.web.youp.ga/gym/login";
    webs(title, text, showCancelButton, img, front, backstage);
  });
  // Madtown Barbell

  // changgeng 長庚紀念醫院高雄院區-醫療品質暨病人安全委員會
  $("#changgeng").click(function() {
    let title = "<strong>長庚紀念醫院高雄院區-醫療品質暨病人安全委員會</strong>";
    let text = "<p>此為醫療品質暨病人安全委員會形象網站，主要為介紹此小組內部組織，"+
               "讓不認識的人能快速的了解本組的運作方向。</p>";
    let img = "changgeng.jpg";
    imgs(title, text, img);

  });
  // changgeng

  // 台東大學-圖書館
  $(".library").click(function() {
    let title = "<strong>台東大學-圖書館</strong>";
    let text = "";
    let img = "1.jpg";
    imgs(title, text, img);
  });
  // 台東大學-圖書館

  // 宜蘭六十石山-金針花
  $(".sixty").click(function() {
    let title = "<strong>宜蘭六十石山-金針花</strong>";
    let text = "";
    let img = "2.jpg";
    imgs(title, text, img);
  });
  // 宜蘭六十石山-金針花

  // 高雄岡山-崗山之眼
  $(".eye").click(function() {
    let title = "<strong>高雄岡山-崗山之眼</strong>";
    let text = "";
    let img = "3.jpg";
    imgs(title, text, img);
  });
  // 高雄岡山-崗山之眼
});



function webs(title, text, showCancelButton, img, front, backstage){
  swal({
    title: title,
    html: text,
    imageUrl: "images/works/"+img,
    imageAlt: img,
    showConfirmButton:false,
    showCancelButton: showCancelButton,
    confirmButtonText: '連至網站',
    confirmButtonColor: '#28a745',
    confirmButtonClass: 'btn',
    cancelButtonText: '連至後台',
    cancelButtonColor: '#d33',
    cancelButtonClass: 'btn'
  }).then((result) => {
    if (result.value) {
      window.open(front);
    }else if(result.dismiss === swal.DismissReason.cancel) {
      window.open(backstage);
    }
  });
}

function imgs(title, text, img){
  swal({
    title: title,
    html: text,
    imageUrl: "images/works/"+img,
    imageAlt: img,
    showConfirmButton:false,
    confirmButtonText: 'ok',
    confirmButtonColor: '#198b3f',
    confirmButtonClass: 'btn',
    width: "85rem"
  });
}
