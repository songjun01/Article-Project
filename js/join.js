function joinClick(){
  let pwEqual=1;
  let num=0;
  let emptyCount=0;

  const joinInputName=document.querySelector('.joinInputName').value;
  const joinInputId=document.querySelector('.joinInputId').value;
  const joinInputPw=document.querySelector('.joinInputPw').value;
  const joinInputPwOk=document.querySelector('.joinInputPwOk').value;
  const joinInputField=document.querySelector('.joinInputField').value;

  const noneNameTag=document.querySelector('.noneNameTag');
  const noneIdTag=document.querySelector('.noneIdTag');
  const nonePwTag=document.querySelector('.nonePwTag');
  const nonePwOkTag=document.querySelector('.nonePwOkTag');
  const noneFieldTag=document.querySelector('.noneFieldTag');

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
