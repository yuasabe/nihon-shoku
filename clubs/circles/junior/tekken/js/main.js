$("#menu-icon a").click(function(){
  $("#mainnavi").slideToggle("fast","linear");
  $("#menu-icon a").toggleClass("menu-on");
  return false;
});
