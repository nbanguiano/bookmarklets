jQuery(document).ready(function(){
	try {
		(function(XD){

			function crossTrackThis(el) {
				if (window.console) { console.log('crossTrackThis called'); }
				var isLink = (el.href != undefined) ? true : false;
				var isForm = (el.action != undefined) ? true : false;
				if(typeof _gaq != 'undefined') {
					var trackerObjects = _gat._getTrackers();
					if (isForm) { el.method = "POST"; _gaq.push([trackerObjects[0]._getName(this)+'._linkByPost', el]); }
					else if (isLink) { el.href = trackerObjects[0]._getLinkerUrl(el.href); }
				}
			};

			function pushEvent(category, action, opt_label, opt_value, opt_noninteraction){
				if(typeof _gaq != 'undefined') {
					var trackerObjects = _gat._getTrackers();	
					trackerObjects[0]._trackEvent(category, action, opt_label);
					if (window.console) { console.log('Event : ' + category + ' | ' + action + ' | '+ opt_label); }
				}
			};

			var resLinks = jQuery('a[href*="' + XD + '"]').on('click', function(){
				crossTrackThis(jQuery(this)[0]);
				pushEvent('Click to ' + XD, 'click', 'Link - ' + jQuery(this)[0].text.replace(/\s+/g," "));
			});

			var resForms = jQuery('form[action*="' + XD + '"]').on('submit', function(){
				crossTrackThis(jQuery(this)[0]);
				var xs = jQuery(jQuery(this)[0]).find('input[type="submit"]');
				var xv = (xs != 'undefined') ? xs.val() : 'N/A';
				pushEvent('Click to ' + XD, 'click', 'Form - ' + xv.replace(/\s+/g," "))
			});
			
		})('ihotelier');
	} catch(e) {}
});
