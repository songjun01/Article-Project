var userNumber=0;
var num=1;

function reporterProfile(para_reporterId,para_subscribeCount,para_startDate,para_reporterName,para_reporterField){
  const name = document.getElementById('reporterName');
  const field = document.getElementById('reporterField');
  const subscribeCnt = document.getElementById('reporterSubcribeCount');
  name.innerHTML=para_reporterName+" 기자";
  field.innerHTML="활동 분야 : "+para_reporterField;
  subscribeCnt.innerHTML="구독자 : "+para_subscribeCount+"명";
}
function reporterArticle(articleTitle, articleDay, articleTime, reporterId, subscribeCount, articleReporter, articleLike, articleContent){
  var a = document.querySelector('.reporter-article');
  var article = document.createElement('div');
  article.id="article";
  article.class="mx-auto";
  article.style="height:auto; width:90%; margin-left:5%; margin-right:5%; margin-top:30px; border:0.7px solid lightgray; text-align:left;";
  a.appendChild(article);

  var title = document.createElement('h3');
  title.id="title";
  title.style="text-align:left; padding-top:30px; padding-left:30px; padding-bottom:0px; height:auto; width:90%;";
  article.appendChild(title);
  title.name=articleTitle;
  title.innerHTML=articleTitle;

  var date = document.createElement('p');
  date.style="text-align:left; padding-left:30px; padding-bottom:0px; height:20px; width:50%; margin-top:0px; margin-bottom:0px;";
  article.appendChild(date);
  date.innerHTML=(articleDay+" "+articleTime);

  var reporter = document.createElement('a');
  reporter.href="reporter.html?reporterid="+reporterId;
  reporter.id="reporter";
  reporter.style="text-align:left; padding-left:30px; height:20px; width:100px; text-decoration-line:none; color:black;";
  article.appendChild(reporter);
  reporter.innerHTML=articleReporter+" 기자";

  var subscribe = document.createElement('button');
  subscribe.id="subscribe-button"+String(num);
  subscribe.type="button";
  subscribe.name="subscribe-button";
  subscribe.setAttribute("onclick","subscribeClick('"+num+"')");
  subscribe.className="btn btn-outline-primary";
  subscribe.style="margin-top:0px; margin-right:40px; width:80px; height:30px; padding:0px; float:right;";
  article.appendChild(subscribe);
  subscribe.innerHTML="구독하기";

  var point=document.createElement('button');
  point.id="point";
  point.type="button";
  point.className="point-button";
  point.name="point";
  point.setAttribute("onclick","point_tableHide_Show('"+num+"')");
  point.style="text-align:center; margin-top:-25px; margin-left:95%; margin-right:20px; float:right; padding-left:0px; padding-right:0px; padding-top:0px; padding-bottom:0px; height:20px; width:5px; cursor:pointer;";
  article.appendChild(point);

  var point_img=document.createElement('img');
  point_img.id="point-img"+String(num);
  point_img.src="c:/Programming/HTML/article project/img/point.png";
  point_img.alt="";
  point_img.style="height:20px; width:5px;";
  point.appendChild(point_img);

  var point_table=document.createElement('table');
  point_table.id="point-tables"+String(num);
  point_table.className="point-tables"+String(num);
  point_table.style="position:absolute; margin-top:10px; margin-left:50%; width:150px; height:40px; background-color:whitesmoke; border:0 solid black; border-radius: 5px; display:none;";
  article.appendChild(point_table);

  var point_table_tr=document.createElement('tr');
  point_table.appendChild(point_table_tr);

  var point_table_td=document.createElement('td');
  point_table_td.className="point-tables";
  point_table_td.style="padding:10px; cursor:pointer;";
  point_table_tr.appendChild(point_table_td);
  point_table_td.innerHTML="기사 신고";

  var contents_box = document.createElement('div');
  contents_box.id="contents_box";
  contents_box.class="mx-auto";
  contents_box.style="height:auto; width:auto; margin-top:20px; margin-left:10px; margin-right:10px; margin-bottom:10px; border:2px solid whitesmoke;";
  article.appendChild(contents_box);

  var content = document.createElement('p');
  content.id="content";
  content.style="text-align:left; padding-top:10px; padding-left:10px; height:auto; width:95%;";
  contents_box.appendChild(content);
  content.innerHTML=articleContent;

  var like = document.createElement('button');
  like.id="like";
  like.type="button";
  like.name="like"+String(num);
  like.setAttribute("onclick","likeClick('"+num+"')");
  like.style="text-align:center; margin-left:30px; margin-bottom:20px; padding-left:0px; padding-right:0px; padding-top:0px; padding-bottom:0px; height:30px; width:30px; cursor:pointer;";
  article.appendChild(like);

  var like_img=document.createElement('img');
  like_img.id="like-img"+String(num);
  like_img.src="c:/Programming/HTML/article project/img/like-black.png";
  like_img.alt="";
  like_img.style="width:25px;";
  like.appendChild(like_img);

  var likeCnt=document.createElement('p');
  likeCnt.id="like-count"+String(num);
  likeCnt.style="text-align:left; margin-top:-47px; margin-left:60px; width:100px";
  article.appendChild(likeCnt);
  likeCnt.innerHTML=articleLike;
}
function subscribeClick(click_num){
  const target = document.getElementById('subscribe-button'+String(click_num));
  if(target.innerText=="구독하기"){
    target.innerText="구독중";
  }
  else if(target.innerText=="구독중"){
    target.innerText="구독하기";
  }
}
function tableHide_Show()  {
  const table=document.getElementById('profile-tables');
  if(table.style.display==''){
    table.style.display = 'none';
  }
  else if(table.style.display=='none'){
    table.style.display = '';
  }
}
function point_tableHide_Show(click_num)  {
  const table=document.getElementsByClassName('point-tables'+String(click_num))[0];
  if(table.style.display==''){
    table.style.display = 'none';
  }
  else if(table.style.display=='none'){
    table.style.display = '';
  }
}
function likeClick(click_num){
  const target = document.getElementById('like-img'+String(click_num));
  const targetLikeCnt=document.getElementById('like-count'+String(click_num));
  console.log("text : "+targetLikeCnt.innerHTML);
  var cnt=Number(targetLikeCnt.innerHTML);
  if(target.src=="file:///C:/Programming/HTML/article%20project/img/like-black.png"){
    target.src="c:/Programming/HTML/article project/img/like-red.png";
    cnt++;
  }
  else if(target.src=="file:///C:/Programming/HTML/article%20project/img/like-red.png"){
    target.src="c:/Programming/HTML/article project/img/like-black.png";
    cnt--;
  }
  for(let i=0;i<articleList.length;i++){
    if(i==click_num){
      articleList[i].likeCount=cnt;
      targetLikeCnt.innerHTML=cnt;
    }
  }
  console.log("cnt : "+cnt);
}
window.onload = function reporterPageEnter(){
  var id = getParameterByName('reporterid');
  userNumber = getParameterByName('userNumber');
  var home=document.querySelector('.home');
  home.setAttribute("onclick","location.href='main.html?userNumber="+userNumber+"'")
  var profile=document.querySelector('.profilePage');
  profile.setAttribute("onclick","location.href='userProfile.html?userNumber="+userNumber+"'");
  history.replaceState({}, null, location.pathname);
  for(let i=0;i<articleList.length;i++){
    if(articleList[i].reporterId==id)
    reporterArticle(articleList[i].title, articleList[i].day, articleList[i].time, articleList[i].reporterId, articleList[i].subscribe, articleList[i].reporter, articleList[i].likeCount, articleList[i].content);
    num++;
  }
  for(let i=0;i<reporterList.length;i++){
    if(reporterList[i].id==id){
      reporterProfile(reporterList[i].id,reporterList[i].subscribeCount,reporterList[i].startDate,reporterList[i].name,reporterList[i].field);
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
$(function(){
	$(document).mousedown(function(e){
    for(let i=1; i<=articleList.length;i++){
    	if($("#point-tables"+String(i)).is(":visible")){
    		$("#point-tables"+String(i)).each(function(){
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
    }
  });
});
