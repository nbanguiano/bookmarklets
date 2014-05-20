javascript:(function(){
// As learned in the "Enhancing the DOM" course at Lynda.com
 
	var o = document.createElement('div'); 
	o.id = 'signature'; 
	o.style.position = 'absolute'; 
	o.style.backgroundColor = 'rgba(0,0,0,0.7)'; 
	o.style.width = window.innerWidth + 'px'; 
	o.style.height = window.innerHeight + 'px'; 
	o.style.top = window.pageYOffset + 'px'; 
	o.style.left = window.pageXOffset + 'px'; 
	document.body.appendChild(o); 

	var t = document.createElement('textarea'); 
	t.rows = '7'; 
	t.cols = '100'; 
	t.value = __ADD_ANYTHING_YOU_WANT_TO_SHOW_HERE__; 
	t.style.display = 'block'; 
	t.style.position = 'absolute'; 
	t.style.marginLeft = '20%'; 
	t.style.marginTop = '100px'; 

	o.appendChild(t); 
	o.addEventListener('click', function(){ 
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
