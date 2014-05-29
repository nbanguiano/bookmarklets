var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-XXXXXX-X']);
_gaq.push(['_setAllowLinker', true]);
_gaq.push(['_trackPageview']);
(function () {
	var ga = document.createElement('script'); ga.type = 'text/javascript';	ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

function addListener(el, ty, fu) {
	if (el.addEventListener) { el.addEventListener(ty, fu); }
 	else if (el.attachEvent) { el.attachEvent('on' + ty, fu); }
};

function crossTrackThis(el) {
	var isLink = (el.href != undefined) ? true : false;
	var isForm = (el.action != undefined) ? true : false;
	if(typeof _gaq != 'undefined') {
		var trackerObjects = _gat._getTrackers();
		for(var i = 0; i < trackerObjects.length; i++) {
			if (isForm) { el.method = "POST"; _gaq.push([trackerObjects[i]._getName(this)+'._linkByPost', el]); }
			else if (isLink) { el.href = trackerObjects[i]._getLinkerUrl(el.href); }
		};
	}
};

var resForms = jQuery('form[action*="ihotelier"]');
for (var i = 0; i < resForms.length; i++) {
	addListener(resForms[i], 'submit', crossTrackThis(resForms[i])); };

var resLinks = jQuery('a[href*="ihotelier"]');
for (var i = 0; i < resLinks.length; i++) {
	addListener(resLinks[i], 'hover', crossTrackThis(resLinks[i])); };
