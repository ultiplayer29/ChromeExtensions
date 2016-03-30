/**
 * @author Paderic Driscoll
 */

var currentURL = window.location.href;
var currentPathname = window.location.pathname;
if(currentURL.indexOf("reddit") > -1){
	nsfwBlocker();}
if(currentURL.indexOf("tumblr") > -1){
	tumblrBlocker();}
var storedHash = window.location.hash;
window.setInterval(function () {
    if (window.location.hash != storedHash) {
        storedHash = window.location.hash;
        nsfwBlocker();
		tumblrBlocker();
    }
}, 100);
 
function nsfwBlocker(){
	var nsfwElement = document.getElementsByClassName("over18");
	var over18checkButton = document.getElementsByClassName("c-btn c-btn-primary");
	var reddPicsNSFW = document.getElementById("nav-nsfw");
	if(currentURL.indexOf("nsfw") > -1 || currentURL.indexOf("NSFW") > -1){
		window.location = "http://blocked.com-default.ws/?type=chromium-m&url="+currentPathname+"&11603695233&p=1878";
	}
	else if(over18checkButton[1] != null){
		over18checkButton[1].value = "no"; 
	}
	else if(reddPicsNSFW != null){
		reddPicsNSFW.href = "/?rating=sfw&r=1438699037";
	} 
	else if(nsfwElement.length > 5){
		window.location = "http://blocked.com-default.ws/?type=chromium-m&url="+currentPathname+"&11603695233&p=1878";
	}
	else{
		for(y=0;y<nsfwElement.length;y++){
			if(nsfwElement[y]!= "[object HTMLDivElement]")
				continue;
			else{
				var listItem = nsfwElement[y].getElementsByClassName("state-button hide-button");
				var clickButton = listItem[0].getElementsByTagName("a");
				clickButton[0].click();
			}
		}
	}
 }
 
 function tumblrBlocker(){
	var url = window.location.href,
		postTag = document.getElementsByClassName("post_tag"),
		blockedTags = ["nsfw", "NSFW", "adult-oriented","ADULT-ORIENTED","Adult-Oriented","Adult-oriented"];
		
	for(z=0;z<postTag.length;z++){
		for(x=0;x<blockedTags.length;x++){
			if(postTag[z].title.indexOf(blockedTags[x]) > -1){
				window.location = "http://blocked.com-default.ws/?type=chromium-m&url="+currentPathname+"&11603695233&p=1878";
				break;
			}
		}
	}
 }
 