let body 	= document.querySelector("body");
let ad 		= document.querySelector("#ad");
let close 	= document.querySelector("#close");
let lang 	= document.querySelector(".languages");
let en = "en", ru = "ru";
let langFlag = ru;
function changeLang(langId){
	document.querySelector("#" + langFlag).classList.remove('currentLang');
	document.querySelector("#" + langId).classList.add('currentLang');
	langFlag = langId;
};
lang.addEventListener("click", function (event) {
	if (event.target.tagName != "SPAN") return;
	changeLang(event.target.id);
});	
close.addEventListener("click", function (event) {
	body.removeChild(ad);
}); 
changeLang(ru);