/**
 * controllers/blog/index.js
 * Controller for blog pages
 */

(function(global) { 
  "usr strict";

  // -- dependency modules
  var extend = require('extend');

  // -- define / local variables
  var sampleEntry = {
    'title': 'タイトル',
    'image': 'http://placehold.jp/1280x960.png',
    'text' : (function() { /*そのころわたくしは、モリーオ市の博物局に勤めて居りました。
十八等官でしたから役所のなかでも、ずうっと下の方でしたし俸給もほんのわずかでしたが、受持ちが標本の採集や整理で生れ付き好きなことでしたから、わたくしは毎日ずいぶん愉快にはたらきました。殊にそのころ、モリーオ市では競馬場を植物園に拵え直すというので、その景色のいいまわりにアカシヤを植え込んだ広い地面が、切符売場や信号所の建物のついたまま、わたくしどもの役所の方へまわって来たものですから、わたくしはすぐ宿直という名前で月賦で買った小さな蓄音器と二十枚ばかりのレコードをもって、その番小屋にひとり住むことになりました。わたくしはそこの馬を置く場所に板で小さなしきいをつけて一疋の山羊を飼いました。毎朝その乳をしぼってつめたいパンをひたしてたべ、それから黒い革のかばんへすこしの書類や雑誌を入れ、靴もきれいにみがき、並木のポプラの影法師を大股にわたって市の役所へ出て行くのでした。
あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。
またそのなかでいっしょになったたくさんのひとたち、ファゼーロとロザーロ、羊飼のミーロや、顔の赤いこどもたち、地主のテーモ、山猫博士のボーガント・デストゥパーゴなど、いまこの暗い巨きな石の建物のなかで考えていると、みんなむかし風のなつかしい青い幻燈のように思われます。では、わたくしはいつかの小さなみだしをつけながら、しずかにあの年のイーハトーヴォの五月から十月までを書きつけましょう。*/}).toString().match(/\/\*([^]*)\*\//)[1]
  };

  // -- settings
  exports.engine = 'ejs';
  exports.prefix = '/blog';

  exports.before = function(req, res, next) {
    next();
  };

  // -- actions
  exports.index = function(req, res, next) {
    var entries = [];
    for (var i = 1; i <= 5; i++) {
      var tmp = extend({ id : i }, sampleEntry);
      tmp.title += i;
      entries.push(tmp);
    }

    res.render('index', {
      'entries': entries
    });
  };

})((this || 0).self || global);
