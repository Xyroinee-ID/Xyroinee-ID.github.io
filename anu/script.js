var clickMessage = document.querySelector("#click-message");
var iconMessage = document.querySelector(".icon-message");
var clickInfo = document.querySelector("#click-info");
var iconInfo = document.querySelector(".icon-info");

clickMessage.addEventListener('click', function(){
  try {
    window.location.href = "#header"
    iconMessage.classList.toggle('icon-message-flex')
    iconInfo.classList.remove('icon-info-flex')
  } catch(e) { alert(e) }
})
clickInfo.addEventListener('click', function(){
  try {
    window.location.href = "#header"
    iconInfo.classList.toggle('icon-info-flex')
    iconMessage.classList.remove('icon-message-flex')
  } catch(e) { alert(e) }
})
