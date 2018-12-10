var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

var storyText = "俺は:insertx:。" +
                "俺は:inserty:が気に入らない。" +
                ":insertz:とfeatしてdisってやる。おつかれさん。";

var insertX = ["Eminem",
              "Drake",
              "SnoopDogg",
              "笑福亭鶴瓶",
              "ゴルゴ13"];
var insertY = ["傲慢な奴",
              "酢豚に入ってるパイナップル",
              "水をはじく雑巾",
              "でかすぎるプッチンプリン"];
var insertZ = ["大阪市長",
              "引っ越しおばさん",
              "デンゼルワシントン",
              "秋元康",
              "ペットのわんちゃん"];

randomize.addEventListener('click', result);

function result() {
  var newStory = storyText
  var xItem = randomValueFromArray(insertX);
  var yItem = randomValueFromArray(insertY);
  var zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if(customName.value !== '') {
    var name = customName.value;
    newStory = newStory.replace('おつかれさん',name);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
