var user = detect.parse(navigator.userAgent);

	if (user.browser.family == "Firefox") {
		document.getElementById('div-grad').style.width = "105px";
	};

	if (user.browser.family == "Chrome") {
		document.getElementById('dates').style.position = "relative";
		document.getElementById('dates').style.top = "30px";
	};
