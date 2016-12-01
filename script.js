var noon = 12;
var evening = 18;
var wakeup = 6;
var lunchtime = 12;
var naptime = 14;
var partytime = 17;


var updateClock = function()
{
var messageText;
var barackImage = document.getElementById("barack");
var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";

var time = new Date().getHours();
var timeEventJS = document.getElementById("timeEvent");


if (time < noon) {
  image = "http://www.you-can-be-funny.com/images/obamamessage.jpg";
  messageText="Good Morning, Sunshine!";
}
else if (time >= evening) {
  image = "http://www.techeye.net/wp-content/uploads/2015/05/obama-funny-face-grr-growl-640x397-e1432714055495.jpg";
  messageText="Rawwr!! Good evening!";
  }
else {
  image = "https://obamadiary.files.wordpress.com/2012/03/obama-laughing-on-af1.jpg?w=524&h=837";
  messageText="Lol! Good Afternoon!";
}


if (time == wakeup) {
  image = "http://assets.nydailynews.com/polopoly_fs/1.22441.1313690570!/img/httpImage/image.jpg_gen/derivatives/gallery_1200/gal-tired-obama2-jpg.jpg";
  messageText="Wakey wakey! Up and At 'Em"
}
else if (time == lunchtime) {
  image = "https://d.ibtimes.co.uk/en/full/209522/president-barack-obama-eight-month-old-cooper.jpg";
  messageText = "Lunch time! Nomnomnom!";
}
else if (time == naptime) {
  image = "https://media1.popsugar-assets.com/files/thumbor/VLLkdEDmkRaAQ8QKLxM3D8mIRr4/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2016/10/26/877/n/38761221/4ee8b47d58110c3c667865.36553778_edit_img_image_42619254_1477497949/i/Funniest-President-Obama-Moments-Videos.jpg";
  messageText= "Nap Time is Here!";
}
else if (time == partytime) {
  image = "http://www.msnbc.com/sites/msnbc/files/styles/ratio--3-2--830x553/public/h_50431388_copy.jpg?itok=w3f4uXYV";
  messageText="Party Time! Yass!";
}
console.log(time);
console.log(messageText);

barackImage.src=image;
timeEventJS.innerText = messageText;

var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');

    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    // Set hours
    if (hours >= noon)
    {
        meridian = "PM";
    }
    if (hours > noon)
    {
        hours = hours - 12;
    }

    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }

    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }

    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";

    clock.innerText = clockTime;
};
showCurrentTime();
}


updateClock();
var oneSecond = 1000;
setInterval( updateClock, oneSecond);

var partyTimeButton1 = document.getElementById("partyTimeButton");

var partyEvent = function()
{
  console.log("1 Party Event");
    if (partytime < 0)
    {
        partytime = new Date().getHours();
        partyTimeButton1.innerText = "Party Over";
        partyTimeButton1.style.background = "#f22415";
    }
    else
    {
        partytime = -1;
        partyTimeButton1.innerText = "PARTY TIME!";
        partyTimeButton1.style.background = "#222";
    }
};

partyTimeButton1.addEventListener("click", partyEvent);

wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
lunchTimeSelector.addEventListener('change', lunchTimeEvent);
napTimeSelector.addEventListener('change', napTimeEvent);

partyEvent();
