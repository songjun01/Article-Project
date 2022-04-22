var find=0;

window.onload = function onload(){
  find = getParameterByName('find');//find=1 이면 아이디, find=2 이면 비밀번호 찾기
  var firstBox=document.querySelector('.firstBox');
  var secondBox=document.querySelector('.secondBox');

  console.log("firstBox : "+firstBox);
  if(find==1){
    firstBox.setAttribute("placeholder","이름을 입력하세요");
    secondBox.setAttribute("placeholder","비밀번호를 입력하세요");
  }
  else if(find==2){
    firstBox.setAttribute("placeholder","이름을 입력하세요");
    secondBox.setAttribute("placeholder","아이디를 입력하세요");
  }
  history.replaceState({}, null, location.pathname);
}
function findClick(){
  var firstBoxValue=document.querySelector('.firstBox').value;
  var secondBoxValue=document.querySelector('.secondBox').value;
  var noneTag=document.querySelector('p');
  console.log("first : "+firstBoxValue+"\nsecond : "+secondBoxValue);
  if(find==1){
    for(let i=0;i<userProfileList.length;i++){
      if(userProfileList[i].name==firstBoxValue && userProfileList[i].pw==secondBoxValue){
        noneTag.innerHTML="아이디는 : "+userProfileList[i].id+" 입니다";
        return;
      }
      noneTag.innerHTML="일치하는 아이디가 없습니다";
    }
  }
  else if(find==2){
    for(let i=0;i<userProfileList.length;i++){
      if(userProfileList[i].name==firstBoxValue && userProfileList[i].id==secondBoxValue){
        noneTag.innerHTML="비밀번호는 : "+userProfileList[i].pw+" 입니다";
        return;
      }
      noneTag.innerHTML="일치하는 비밀번호가 없습니다";
    }
  }
}
function getParameterByName(id){
  id = id.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + id + "=([^&#]*)"), results = regex.exec(location.search);
  return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
