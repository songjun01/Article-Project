function tableHide_Show()  {
  const table=document.getElementById('profile-tables');
  if(table.style.display==''){
    table.style.display = 'none';
  }
  else if(table.style.display=='none'){
    table.style.display = '';
  }
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
