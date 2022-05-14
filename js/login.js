function loginClick(){
  const inputId = document.getElementById('id').value;
  const inputPw = document.getElementById('pw').value;
  for(let i=0;i<userProfileList.length;i++){
    if(userProfileList[i].id==inputId){
      if(userProfileList[i].pw==inputPw){
        console.log("id : "+userProfileList[i].id+"\npw : "+userProfileList[i].pw+"\nuserNumber : "+userProfileList[i].userNumber);
        window.location.href='main.html?userNumber='+userProfileList[i].userNumber;
        return;
      }
    }
    console.log("아이디 또는 비밀번호가 일치하지 않습니다");//한번만 시행되게
    const main = document.querySelector('.main');
    const noneIdTag=document.querySelector('p');
    main.style="margin-top:200px; width:350px; height:310px; border:1px solid lightgray; background:white; border-radius:10px;";
    noneIdTag.innerHTML="아이디 또는 비밀번호가 일치하지 않습니다";
  }
}
