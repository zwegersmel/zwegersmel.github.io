window.onload=function() {
	var postfix = document.URL.split('/').reverse()[0];
	if (!postfix) {
		selectActive('home');
	} else {
		selectActive(postfix.split('\.')[0]);
	}
}

function selectActive(id) {
	document.getElementById(id).className = "active";
}