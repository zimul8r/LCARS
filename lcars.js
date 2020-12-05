//handles sound effects
var soundEfx = new Audio('http://www.trekcore.com/audio/background/tng_bridge_1.mp3');
 soundEfx.play();
var btnSoundEfx = new Audio('http://www.trekcore.com/audio/aliensounds/andorean_ship_beeps_2.mp3');

$(".panel_buttons").on("click", function(){
  btnSoundEfx.play();
})

//handles star date timer
var time = new Date().toString();
var convertDate = moment(new Date(time));
 $('#time').text("Star Date:  " + moment(convertDate).format("MMM Do YYYY, h:mm:ss a"));

//handles menu clicks
var bridgeURL = 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQhcXKbDFkCsUsbcvCb3kfnmQhqIy84-VckqS4QHkny4u_DRuyj';
var engineeringURL = 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcStkkW0ltYwmqRr-C_4vE1Lm9DCxOpspAmNcuoKxlSS3zD2W4ey'
$('.panel_buttons').click(function(){
  $('#panel_main').fadeIn().css('background-image', 'url(' + bridgeURL + ')');
})
