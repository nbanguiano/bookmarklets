(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
 
ga('create', 'UA-10326466-1', 'auto');
ga('require', 'linker');
ga('linker:autoLink', ['ihotelier.com']);
ga('send', 'pageview');

function addListener(el, ty, fu) {
	if (el.addEventListener) el.addEventListener(ty, fu);
	else if (el.attachEvent) el.attachEvent('on' + ty, fu);
};

function crossTrackThis(ev) {
	ev = event || window.event; var target = ev.target || ev.srcElement;
	if (target && target.action) {ga('linker:decorate', target);};
};

// Functionality for links still missing.

var resForm = document.getElementById('reservation_form');
addListener(resForm, 'submit', crossTrackThis);
