//아이템 선택 옵션
var option = option = document.getElementById("option").value;//디폴트 값 선정
document.getElementById("option").onchange = function() {
	option = document.getElementById("option").value;
	self.restart.call(self, event);
}

//합성 사운드
var mergeSound_level = 0;
var mergeSound = [
	new Audio("./sound/merge.mp3"),
	new Audio("./sound/merge.mp3"),
	new Audio("./sound/merge.mp3"),
	new Audio("./sound/merge.mp3"),
	new Audio("./sound/merge.mp3"),
	new Audio("./sound/merge.mp3"),
	new Audio("./sound/merge.mp3"),
	new Audio("./sound/merge.mp3"),
	new Audio("./sound/merge.mp3"),
	new Audio("./sound/merge.mp3")
];
for (var i=0;i<mergeSound.length-1; i++) {
	mergeSound[i].volume = 0.2;
}
//에픽 사운드
var epicSound = new Audio("./sound/epic.mp3");
	epicSound.volume = 0.2;
//승리 사운드
var victorySound = new Audio("./sound/victory.mp3");
	victorySound.volume = 0.2;
//게임오버 사운드
var gameoverSound = new Audio("./sound/gameover.mp3");
	gameoverSound.volume = 0.2;

//합성 스프라이트
var autoEffect;
function animation(target,frameWidth,now,limit,speed) {
	if (now - frameWidth >= limit) {
		target.style.backgroundPosition = (now - frameWidth).toString() + "px 0px";
		autoEffect = setTimeout(function() {
			animation(target,frameWidth,now - frameWidth,limit,speed);
		}, speed);
	} else {
		target.style.visibility = "hidden";
	}
}
//이미지 미리 불러오기
var imageList = [
	"./images/crystal_2.png",
	"./images/crystal_4.png",
	"./images/crystal_8.png",
	"./images/crystal_16.png",
	"./images/crystal_32.png",
	"./images/crystal_64.png",
	"./images/crystal_128.png",
	"./images/crystal_256.png",
	"./images/crystal_512.png",
	"./images/crystal_1024.png",
	"./images/item1.png",
	"./images/item2.png",
	"./images/item3.png",
	"./images/item4.png",
	"./images/item5.png"
];
for (var i=0;i<imageList.length-1;i++) {
	var tempImage = document.createElement('img');
	tempImage.src = imageList[i];
	tempImage.style.cssText = "width:1px;height:1px;display:none;";
	document.getElementsByTagName("body")[0].appendChild(tempImage);
}




//기존 기능들
function Tile(position, value) {
  this.x                = position.x;
  this.y                = position.y;
  this.value            = value || 2;

  this.previousPosition = null;
  this.mergedFrom       = null; // Tracks tiles that merged together
}

Tile.prototype.savePosition = function () {
  this.previousPosition = { x: this.x, y: this.y };
};

Tile.prototype.updatePosition = function (position) {
  this.x = position.x;
  this.y = position.y;
};

Tile.prototype.serialize = function () {
  return {
    position: {
      x: this.x,
      y: this.y
    },
    value: this.value
  };
};
