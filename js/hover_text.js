/*{
	var e = window.event;
	//get mouse point
    // from http://www.quirksmode.org/js/events_properties.html#position
        let posx = 0;
        let posy = 0;
		if (!e) e = window.event;
		if (e.pageX || e.pageY) {
            posx = e.pageX;
			posy = e.pageY;
		}
		else if (e.clientX || e.clientY) 	{
			posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
			posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
		}
  

    class HoverImage{
    	constructor(){
    		
    	}
    }
    console.log(posx);

}*/