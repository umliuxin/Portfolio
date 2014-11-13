content=[]
content[0]='<h2 style="font-size:16px; color:#999999">The question I want to solve is to help find flights or destinations with least delay when people are arranging their travel, finding the best flights or discovering the best destination.</h2><img src="../img/project/delay1.png"  class="projectbigpic"/><h2 style="font-size:16px; color:#999999">In order to present the flight delay condition all over the United States thoroughly, the tool should show departure and arrival delay condition in one city, departure and arrival delay condition of one specific flight, departure and arrival delay condition between two specific cities, comparison between cities, flights, carriers or the other categories, time series of departure and arrival delay condition, and the reason of delay.</h2>'
content[1]='<div class="projectpictitle"><h2 style="font-size:16px; color:#999999">IllinoisLegalAidOnline.org is planning to publish their automatic online help service in 2013. After first round of development, my teammates and I are going to conduct two rounds of usability testing for the developing "Online Access System". By analyzing the results and generated findings and recommendations for the organization to do further improvement.</h2></div><img src="../img/project/asb.png"  class="projectbigpic"/><div class="projectpictitle"><h2 style="font-size:16px; color:#999999">IllinoisLegalAidOnline.org is an online system aims to triage website visitors to see if they qualify for free legal aid from LAF. People who qualify for the service, will be allowed to access legal aid provided by the institution. For those who do not qualify for the help, will be directed to other legal information for solving their legal problem.</h2></div><img src="../img/project/asb1.png"  class="projectbigpic"/><div class="projectpictitle"><h2 style="font-size:16px; color:#999999">Given project scope, the target participants of test should be the potential users who would apply for legal aid by Online Access System. The potential users are lower-income Illinois residents, who can’t afford an attorney and seek information on finding legal services.<br></h2></div>'

function getContent(index){

	// $.ajax({url:fileurl,success:function(result){
	// 	console.log(result)
 //    	$(".project-content").html(result);
 //  }});
	$(".project-content").load('project/0.html')

	// $('.project-content').html(content[1])
}