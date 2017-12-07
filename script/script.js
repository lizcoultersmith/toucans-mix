

window.onload = function(){
  startTime();
  phrase();
  randomCompliment();
}
//declaring variables
var dateObj = new Date();
var internalhour = dateObj.getHours();

//phrase below the time
function phrase() {
  if (internalhour>=0 && internalhour<12) {
      $("#phrase").append("Good Morning, ");
}

else if (internalhour>=12 && internalhour<17) {
      $("#phrase").append("Good Afternoon, ");
}

else {
      $("#phrase").append("Good Evening, ");
}
}


function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;}

// the clock function
function startTime() {
  var dateObj = new Date();

if ($('#timeCheck').is(':checked') === true)

{
  var getHours = dateObj.getHours();
  var getMinutes = dateObj.getMinutes();
  h= checkTime(getHours);
  m = checkTime(getMinutes);
  document.getElementById("clock").innerHTML= h + ":" + m;
  var t = setTimeout(startTime, 1000); //this calls the fuction after every second

  //check and uncheck the radio button
  $(':radio').mousedown(function(e){
  var $self = $(this);
  if( $self.is(':checked') ){
    var uncheck = function(){
      setTimeout(function(){$self.removeAttr('checked');},0);
    };
    var unbind = function(){
      $self.unbind('mouseup',up);
    };
    var up = function(){
      uncheck();
      unbind();
    };
    $self.bind('mouseup',up);
    $self.one('mouseout', unbind);
  }
});
}

else  {

  var h = dateObj.toLocaleString('en-US', { hour: 'numeric',minute:'numeric', hour12: true });
  document.getElementById("clock").innerHTML= h;
  var t = setTimeout(startTime, 1000); //this calls the fuction after every second
}
}

//Compliments next to phrase
function randomCompliment () {
  var arrayOfCompliments = ["handsome.", "cutie.", "human.", "pal.", "smart.", "sexy.","classy."];
  var randomCompliment = Math.floor(Math.random()*arrayOfCompliments.length);
  $("#phrase").append(arrayOfCompliments[randomCompliment]);
}
