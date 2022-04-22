function joinClick(){
  var id;
  var pw;
  var pwEqual=1;
  var num=0;
  var emptyCount=0;

  var joinInputName=document.querySelector('.joinInputName').value;
  var joinInputId=document.querySelector('.joinInputId').value;
  var joinInputPw=document.querySelector('.joinInputPw').value;
  var joinInputPwOk=document.querySelector('.joinInputPwOk').value;
  var joinInputField=document.querySelector('.joinInputField').value;

  var noneNameTag=document.querySelector('.noneNameTag');
  var noneIdTag=document.querySelector('.noneIdTag');
  var nonePwTag=document.querySelector('.nonePwTag');
  var nonePwOkTag=document.querySelector('.nonePwOkTag');
  var noneFieldTag=document.querySelector('.noneFieldTag');

  noneNameTag.innerHTML="";
  noneIdTag.innerHTML="";
  nonePwTag.innerHTML="";
  nonePwOkTag.innerHTML="";
  noneFieldTag.innerHTML="";

  if(joinInputName==""){
    noneNameTag.innerHTML="이름을 입력하세요";
    emptyCount++;
  }
  if(joinInputId==""){
    noneIdTag.innerHTML="아이디를 입력하세요";
    emptyCount++;
  }
  if(joinInputPw==""){
    nonePwTag.innerHTML="비밀번호를 입력하세요";
    emptyCount++;
  }
  if(joinInputPwOk==""){
    nonePwOkTag.innerHTML="비밀번호를 한번 더 입력하세요";
    emptyCount++;
  }
  if(joinInputPw!=joinInputPwOk){
    nonePwTag.innerHTML="";
    nonePwOkTag.innerHTML="비밀번호가 일치하지 않습니다";
    emptyCount++;
    pwEqual=0;
  }
  if(joinInputField==""){
    noneFieldTag.innerHTML="관심분야를 입력하세요";
    emptyCount++;
  }
  for(let i=0;i<userProfileList.length;i++){
    if(userProfileList[i].id==joinInputId){
      noneIdTag.innerHTML="사용불가능한 아이디입니다";
    }
    else{
      num++;
    }
  }
  if(num==userProfileList.length && pwEqual==1 && emptyCount==0){
    console.log("회원가입 가능");
  }
  else{
    console.log("회원가입 불가능");
  }
}
