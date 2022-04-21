var userNumber=0;

function tableHide_Show()  {
  const table=document.getElementById('profile-tables');
  if(table.style.display==''){
    table.style.display = 'none';
  }
  else if(table.style.display=='none'){
    table.style.display = '';
  }
}
window.onload = function profilePageEnter(){
  userNumber = getParameterByName('userNumber');
  var home=document.querySelector('.home');
  home.setAttribute("onclick","location.href='main.html?userNumber="+userNumber+"'")
  var profile=document.querySelector('.profilePage');
  profile.setAttribute("onclick","location.href='userProfile.html?userNumber="+userNumber+"'");
  history.replaceState({}, null, location.pathname);
  var name=document.querySelector('.userName');
  var field=document.querySelector('.userField');
  for(let i=0;i<userProfileList.length;i++){
    if(userProfileList[i].userNumber==userNumber){
      name.innerHTML=userProfileList[i].name;
      field.innerHTML="관심분야 : "+userProfileList[i].field;
      history.replaceState({}, null, location.pathname);
    }
  }
}
function getParameterByName(id){
  id = id.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + id + "=([^&#]*)"), results = regex.exec(location.search);
  return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
$(function(){
	$(document).mousedown(function(e){
		if($("#profile-tables").is(":visible")){
			$("#profile-tables").each(function(){
				var l_position=$(this).offset();
				l_position.right=parseInt(l_position.left)+($(this).width());
				l_position.bottom=parseInt(l_position.top)+parseInt($(this).height());
				if((l_position.left<=e.pageX&&e.pageX<=l_position.right)&&(l_position.top<=e.pageY&&e.pageY<=l_position.bottom)){
				}
        else{
					$(this).hide();
				}
      });
    }
  });
});
