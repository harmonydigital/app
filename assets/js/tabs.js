 
 
tabcontent = document.getElementsByClassName("tabcontent");
 
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    tabcontent[0].style.display = "block";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
for (i = 0; i < tabcontent.length; i++) {
  
  tabcontent[0].style.display = "block";
}
