function submit(){
  if(document.getElementById('chrome').checked){
    var element = document.getElementById('dc');
    element.innerHTML += "<button type='button' id='bageButton' text-align='center' onclick='badge()'>Badge Init</button>";
    window.location.href = "/home/nate/Dan's stuff/tuzag/Hack-a-Thon/HUSTLE.crx"
  }
}
function badge(){	
  var BadgeID= "SPARKYBOOMMAN";
  if (!BadgeID){
  	message('Error: No badege identified');
  	return
  }	
  localStorage.setItem('BadgeID', BadgeID);
  window.alert(localStorage.getItem('BadgeID'));
  //chrome.storage.sync.set({'badgeID': BadgeID}, function(){window.alert('Badge was save');});
  }