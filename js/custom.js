// 旺旺通國際有限公司
$(".wanwanton").click(function(event) {
  var title = "<strong>旺旺通國際有限公司</strong>";
  var text = "<p>旺旺通國際有限公司形象網站，主要為介紹此公司的營運。</p>";
  var img = "wanwanton.jpg";
  var showCancelButton = false;
  var front = "http://sushentravel.web.youp.ga/wanwanton";
  var backstage = "#";
  webs(title, text, showCancelButton, img, front, backstage);
});
// 旺旺通國際有限公司

// 旺旺通國際有限公司-黑卡介紹
$(".blackcard").click(function(event) {
  var title = "<strong>旺旺通國際有限公司-黑卡介紹</strong>";
  var text = "<p>黑卡介紹形象網站，主要為介紹黑卡如何使用與可在哪裡使用。</p>"+
  "<h5 style='color:red'>(測試帳號:test;密碼:test)</h5>";
  var showCancelButton = false;
  var img = "blackcard.jpg";
  var front = "http://sushentravel.web.youp.ga/blackcard";
  var backstage = "#";
  webs(title, text, showCancelButton, img, front, backstage);
});
// 旺旺通國際有限公司-黑卡介紹

// 旅遊網站
$(".travel").click(function(event) {
  var title = "<strong>旅遊網站</strong>";
  var text =
  "<p>平時喜歡旅行的我，有時不知道要往哪裡跑，在當時也在學習串接api，便也在政府開放資料網查到有景點與美食資料"+
  "並把資料串接到自己的網站，也隨時能得知新資料。</p>"+
  "<h5 style='color:red'>(測試帳號:test@test.com;密碼:test)</h5>";
  var showCancelButton = false;
  var img = "travel.jpg";
  var front = "http://sushentravel.web.youp.ga/blackcard";
  var backstage = "#";
  webs(title, text, showCancelButton, img, front, backstage);
});
// 旅遊網站

// 富利管理顧問有限公司
$(".fulirich").click(function(event) {
  var title = "<strong>富利管理顧問有限公司</strong>";
  var text = "<p>富利管理顧問有限公司形象網站，主要為介紹此公司的營運。</p>"+
  "<h5 style='color:red'>(後台管理)<br />(測試帳號:admin;密碼:admin)</h5>";
  var showCancelButton = true;
  var img = "fulirich.jpg";
  var front = "http://sushentravel.web.youp.ga/fulirich";
  var backstage = "http://sushentravel.web.youp.ga/fulirich/login";
  webs(title, text, showCancelButton, img, front, backstage);
});
// 富利管理顧問有限公司

// Madtown Barbell
$(".gym").click(function(event) {
  var title = "<strong>Madtown Barbell</strong>";
  var text = "<p>此為健身房網站，主要是紀錄會員進出時間與管理會員使用的專案</p>"+
  "<p>當加入會員時，會員需選擇特定專案才能進入健身房，"+
  "而會員進入健身房時，使用條碼掃描器逼會員卡，"+
  "系統便會記錄會員當下時間，若會員專案快過期便會做提醒動作</p>"+
  "<h5 style='color:red'>(後台管理)<br />(測試帳號:90218104;密碼:90218104)</h5>";
  var showCancelButton = true;
  var img = "gym.jpg";
  var front = "http://sushentravel.web.youp.ga/gym";
  var backstage = "http://sushentravel.web.youp.ga/gym/login";
  webs(title, text, showCancelButton, img, front, backstage);
});
// Madtown Barbell

// 台東大學-圖書館
$(".library").click(function(event) {
  var title = "<strong>台東大學-圖書館</strong>";
  var text = "";
  var img = "1.jpg";
  imgs(title, text, img);
});
// 台東大學-圖書館

// 宜蘭六十石山-金針花
$(".sixty").click(function(event) {
  var title = "<strong>宜蘭六十石山-金針花</strong>";
  var text = "";
  var img = "2.jpg";
  imgs(title, text, img);
});
// 宜蘭六十石山-金針花

// 高雄岡山-崗山之眼
$(".eye").click(function(event) {
  var title = "<strong>高雄岡山-崗山之眼</strong>";
  var text = "";
  var img = "3.jpg";
  imgs(title, text, img);
});
// 高雄岡山-崗山之眼


function webs(title, text, showCancelButton, img, front, backstage){
  swal({
    title: title,
    html: text,
    imageUrl: "images/works/"+img,
    imageAlt: img,
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
    confirmButtonText: 'ok',
    confirmButtonColor: '#198b3f',
    confirmButtonClass: 'btn',
    width: "90rem"
  });
}
