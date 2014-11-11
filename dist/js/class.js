$(document).ready(function(e) {
  $('img[usemap]').rwdImageMaps();
  var shown = new Boolean();
});

function highlightAir() {
    $("#classroom02").attr("src","../../img/classroom02-air.png");
}
function highlightLight() {
    $("#classroom02").attr("src","../../img/classroom02-lights.png");
}
function highlightDoor() {
    $("#classroom02").attr("src","../../img/classroom02-door.png");
}
function highlightWindow() {
    $("#classroom02").attr("src","../../img/classroom02-window.png");
}
function highlightOff(){
    $("#classroom02").attr("src","../../img/classroom02.png");
}
function highlightOff2(){
    $("#commute02").attr("src","../../img/commute02.png");
}
function hideAll() {
  $("#displayR").hide();
  $("#displayLights").hide();
  $("#displayDoor").hide();
  $("#displayWindow").hide();
}

function displayright(){
  // hideAll();
  //document.getElementById("displayR").style.display="block";
  $("#displayR").toggle(500);
  $("#classroom02").attr("src","../../img/classroom02-air.png");

  //$("html").css("overflow-y","hidden")
}

function displaylights(){
  // hideAll();
  //document.getElementById("displayR").style.display="block";

  $("#displayLights").toggle(500);
  //$("html").css("overflow-y","hidden")
  $("#classroom02").attr("src","../../img/classroom02-lights.png");
}

function displaydoor(){
  // hideAll();
  //document.getElementById("displayR").style.display="block";

  $("#displayDoor").toggle(500);
  //$("html").css("overflow-y","hidden")
  $("#classroom02").attr("src","../../img/classroom02-door.png");
}

function displaywindow(){
  // hideAll();
  //document.getElementById("displayR").style.display="block";

  $("#displayWindow").toggle(500);
  //$("html").css("overflow-y","hidden")
  $("#classroom02").attr("src","../../img/classroom02-window.png");
}

function hideAllDisplays() {
  $(".displayR").hide();
  $(".displayLights").hide();
  $(".displayWindow").hide();
  $(".displayDoor").hide();
}




function highlightBus() {
    $("#commute02").attr("src","../../img/commute02-bus.png");
}
function highlightTrain() {
    $("#commute02").attr("src","../../img/commute02-train.png");
}
function highlightCar() {
    $("#commute02").attr("src","../../img/commute02-car.png");
}





function displaybus(){
  //document.getElementById("displayR").style.display="block";

  $("#displayBus").toggle(500);
  //$("html").css("overflow-y","hidden")
  $("#commute02").attr("src","../../img/commute02-bus.png");
}
function displaycar(){
  //document.getElementById("displayR").style.display="block";

  $("#displayCar").toggle(500);
  //$("html").css("overflow-y","hidden")
  $("#commute02").attr("src","../../img/commute02-car.png");
}
function displaytrain(){
  //document.getElementById("displayR").style.display="block";

  $("#displayTrain").toggle(500);
  //$("html").css("overflow-y","hidden")
  $("#commute02").attr("src","../../img/commute02-train.png");
}
function hidebus(){
  //document.getElementById("displayR").style.display="none";
  $("#displayBus").fadeOut(500);
  $("#commute02").attr("src","../../img/commute02.png");
}
function hidecar(){
  //document.getElementById("displayR").style.display="none";
  $("#displayCar").fadeOut(500);
  $("#commute02").attr("src","../../img/commute02.png");
}
function hidetrain(){
  //document.getElementById("displayR").style.display="none";
  $("#displayTrain").fadeOut(500);
  $("#commute02").attr("src","../../img/commute02.png");
}





