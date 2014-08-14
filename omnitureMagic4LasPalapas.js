var CI, CO, ND, RT, SP, EN, CU;
function digUserSession(){
	var US = userSession;
	CI /* Check In */ = new Date(parseInt(US.CheckIn));
	CO /* Check Out */ = new Date(parseInt(US.CheckOut));
	ND /* No of Days */ = US.Nights;
	RT /* Room Type */ = US.RoomTypeName;
	SP /* Selected Package */ = US.dayRatePlanName;
	EN /* Enhancement */ = (US.SavedEnhancements!=undefined)?US.SavedEnhancements.split('//')[2]:'Skipped or not avaliable';
	CU /* Currency */ = US.SelectedCurrency;
};

function loadOmnitureJS(){
	var omniScript = document.createElement('script');
	omniScript.src = 'https://d3jr0l7gvmikzd.cloudfront.net/omniture/sc/s_code.js'
	document.getElementsByTagName('head')[0].appendChild(omniScript);
	if (window.console) {console.log('Omni JS loaded');}
}



var hotelName = 'Las Palapas';
var hotelChannel = 'Reservations';
var bookingStep = window.location.pathname.split('/').pop();

var PageInfo = {'bookings.jsp': {'stepName': 'Step 1/5 - Select Dates' ,'events': 'scAdd'},
				'select_rooms.jsp': {'stepName': 'Step 2/5 – Rooms & Rates' ,'events': 'event10'},
				'enhancements.jsp': {'stepName': 'Step 3/5 – Add Ons' ,'events': 'event10'},
				'confirm.jsp': {'stepName': 'Step 4/5 – Guests' ,'events': 'event10'},
				'reservation.jsp': {'stepName': 'Step 5/5 - Confirmation' ,'events': 'purchase'}
}

var _PRICE_ = '', _NIGHTS_ = '', _CONFID_ = '';

// Update s_account and define s_sites
var s_account='hebsthegarlandcom', s_sites='laspalapas.net, IHOTELIER.COM';

// callback function to fire Omniture code
function omniture_callback() {
	digUserSession();
	try {

		s.pageName = hotelName + ' / ' + hotelChannel + ' - ' + PageInfo[bookingStep].stepName;
		s.channel = hotelName + ' / ' + hotelChannel;
		s.events = PageInfo[bookingStep].events;
		s.products = (bookingStep == 'reservation.jsp') ? ';'+hotelName+' ;'+_NIGHTS_+';'+_PRICE_ : ';'+hotelName ;

		s.eVar3 = (CI) ? CI : '';
		s.eVar4 = (CO) ? CO : '';
		s.eVar5 = (ND) ? ND : '';
		s.eVar6 = (RT) ? RT : '';
		s.eVar7 = (CU) ? CU : '';
		
		s.zip = '00000';
		s.purchaseID = _CONFID_;
		
		s.eVar8 = _PRICE_;
		s.eVar16 = (SP) ? SP : '';
		s.eVar17 = _CONFID_;
		s.eVar18 = 'N/A';
		s.eVar40 = 'N/A';

		s.eVar12 = hotelName;

		if (window.console) {console.log(s);}

	} catch(ex) {}

	// do not touch this line
	if(s_code=s.t()) { eval(s_code.replace(/<\/?[^>]+>/gi,'')); }

	if (window.console) {console.log('Omni Callbacks called');}
}
if (bookingStep != 'reservation.jsp') { setTimeout( loadOmnitureJS, 1500 ); }



_CONFID_ = ihConfirmID; _PRICE_ = ihAmount; _NIGHTS_ = ihNights;
setTimeout( loadOmnitureJS, 1500 );
