var name = "蘇湧盛";
$(".name").text(name);
var birthday = "1994/09/15";
$(".birthday").text(birthday);
var email = "d7339803@gmail.com";
$(".email").text(email);
var phone = "0906-405-019";
$(".phone").text(phone);
var homePhone = "(08)7560623";
$(".homePhone").text(homePhone);
var address = "屏東市大洲里65號";
$(".address").text(address);
var driverLicense = "普通重型機車駕照、普通小型車駕照";
$(".driverLicense").text(driverLicense);
var haveTran = "普通重型機車"; // 具備交通工具
$(".haveTran").text(haveTran);
var employmentStatus = "就業中"; // 就業狀態
$(".employmentStatus").text(employmentStatus);

/* 關於我 */
var aboutMe1 = "我的名字是蘇湧盛，生長在和樂的家庭中，" +
    "父母工作從事資源回收，因此從父母的身上看見他們對工作的認真態度，" +
    "不斷提醒著自己必須與他們學習；從小就擁有著滿滿好奇心與喜歡嘗試新鮮的我，" +
    "一個人在無聊時，便會出其不意的想出小遊戲讓自己不會無聊，" +
    "小時候滿腦子就裝滿許多好奇心及創造力，這點令家人有些意外。";
var aboutMe2 = "還記得我國中時，第一次碰到電腦的那種愉悅感，" +
    "就開始對電腦產生了極大的興趣，每當父母工作回來我總是滿懷期待的心情，" +
    "去尋找回收物裡面是否有電腦，把原本故障的電腦修理到可以使用，每當遇到問題時，" +
    "便會上網查詢資料看看有無解決方案，運用現有的資源，一次又一次反覆的練習，" +
    "不斷地充實自己讓自己得到了許多寶貴的經驗。雖然當時還沒有程式的這項概念，" +
    "但對電腦本身硬體方面的基本知識，從一開始的不懂進而的產生瞭解，" +
    "舉例如：組裝、檢查與除錯，自己已有概念尋找方法。" +
    "也從那時候開始嚮往自己朝工程師方向進修與學習，親身實際的操作才是最好的學習方式。"
var aboutMe3 = "到了高中也選擇跟電腦有相關的資訊科，" +
    "也考取了電腦相關的證照如：電腦硬體裝修乙級與電腦軟體丙級；" +
    "再到大學之前，事先都以硬體維修方面為主；直到大學課堂上有一堂C語言課程，" +
    "才進階瞭解程式語言，裡面包含了邏輯的運用讓我當時絞盡腦汁，" +
    "所學的每一堂課程中老師用心指導後，讓我們親自做出自己想呈現的作品，" +
    "那種完成作品所得到的成就感，並從那時候開始對於設計作品有了另一種興趣。";
var aboutMe4 = "當時因我喜歡四處旅遊、拍照，但卻對臺灣各個景點方面還沒有很深入瞭解，" +
    "腦海突發奇想，或許可以設計出自己想呈現的旅遊網站，" +
    "把自己四處出遊的景點照收集起來，結合到自己所設計的網站上，" +
    "方便的從網頁內容找出當地特色美食，讓搜尋此網站的觀看者多了許多旅遊方向以及便利性。";
var aboutMe5 = "目前是以個人開發為主，許多企業目前從向團隊合作，" +
    "因此，希望能有機會與團隊一起開發系統，一同培養出共同默契、向心力，" +
    "想用自己所學為公司貢獻一點心力，希望能給我機會互相學習一同成長。";
var about = [aboutMe1, aboutMe2, aboutMe3, aboutMe4, aboutMe5];

about.forEach(function (data) {
    $(".about").append("<p>" + data + "</p>");
});
