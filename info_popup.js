javascript:(function(){

	var o = document.createElement('div'); 
	o.id = 'signature'; 
	o.style.position = 'absolute'; 
	o.style.zIndex = '999';
	o.style.backgroundColor = 'rgba(0,0,0,0.7)'; 
	o.style.width = window.innerWidth + 'px'; 
	o.style.height = window.innerHeight + 'px'; 
	o.style.top = window.pageYOffset + 'px'; 
	o.style.left = window.pageXOffset + 'px'; 
	document.body.appendChild(o);

	var t = document.createElement('textarea'); 
	t.rows = '10'; t.cols = '80';
	t.style.display = 'block';
	t.style.position = 'absolute'; 
	t.style.marginLeft = '25%';
	t.style.marginTop = '5%'; 
	
	var text = 'WHATEVER_YOU_WANT_TO_DISPLAY'
	t.value = text;

	var h3 = document.createElement('H3');
	h3.style.marginLeft = '25%';
	h3.style.marginTop = '100px';
	h3.style.zIndex = '1000';
	h3.style.color = 'white';
	h3.style.cursor = 'pointer';
	var c = document.createTextNode('Close X');
	
	h3.appendChild(c);
	o.appendChild(h3);
	o.appendChild(t);

	h3.addEventListener('click', function(){ 
		if(o){ 
			window.removeEventListener('resize', window, false); 
			window.removeEventListener('scroll', window, false); 
			o.parentNode.removeChild(o); 
		} 
	}, false); 

	window.addEventListener('scroll', function(){ 
		if(o){ 
			o.style.top = window.pageYOffset + 'px'; 
			o.style.left = window.pageXOffset + 'px'; 
		} 
	}, false); 

	window.addEventListener('resize', function(){ 
		if(o){ 
			o.style.width = window.innerWidth + 'px'; 
			o.style.height = window.innerHeight + 'px'; 
			o.style.top = window.pageYOffset + 'px'; 
			o.style.left = window.pageXOffset + 'px'; 
		} 
	}, false);

})();
