// -----
// Documentation : https://developers.google.com/analytics/devguides/collection/gajs/eventTrackerGuide
//----

function pushEvent(category, action, opt_label, opt_value, opt_noninteraction){
	
	// Only if Google Analytics is present
	if(typeof _gaq != 'undefined'){	
		// Get all trackers
		var trackerObjects = _gat._getTrackers();

		// Loop through all trackers, send event to each
		for(var i= trackerObjects.length; i >= 0; i--)
		{
					if(typeof trackerObjects[i] == 'undefined' || trackerObjects[i] == 'function' )
							continue;

					trackerObjects[i]._trackEvent(category, action, opt_label);
					console.log('Event ' + i + ': ' + category + ' | ' + action + ' | '+opt_label);
		}	
		
	}
}
