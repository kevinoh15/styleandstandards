//Detect URL and style links

$(document).ready(function () {

if(window.location.href.indexOf("grid") != -1){
 $('a[name=grid]').addClass('selected');
}

else if(window.location.href.indexOf("sprite") != -1){
 $('a[name=sprite]').addClass('selected');
}

else if(window.location.href.indexOf("colors") != -1){
 $('a[name=colors]').addClass('selected');
}

else if(window.location.href.indexOf("type") != -1){
 $('a[name=type]').addClass('selected');
}

else if(window.location.href.indexOf("sizing") != -1){
 $('a[name=sizing]').addClass('selected');
}

else if(window.location.href.indexOf("forms") != -1){
 $('a[name=forms]').addClass('selected');
}

else if(window.location.href.indexOf("popups") != -1){
 $('a[name=popups]').addClass('selected');
}

});