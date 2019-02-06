$(document).ready(function(){
	var doc = document.documentElement;
	addEventListener("scroll", function(event) {
	    var top = this.scrollY,
	        left =this.scrollX;
	        console.log("top: " + top);
	        if(top >= 60 && top <= 300){
		    	anime({
				  targets: '#es4',
				  scale: { value: 1, duration: 100},
				  translateY: -200,
				  easing: 'easeInOutQuad',
				  complete: function(anim){
				  	console.log("hi");
				  }
				});
		    }
	        if(top >= 300 && top <= 550){
	        	anime({
				  targets: '#es5',
				  scale: { value: 1, duration: 100},
				  translateY: -200,
				  easing: 'easeInOutQuad',
				  complete: function(anim){
				  	console.log("hi");
				  }
				});
	        }
		    if(top >= 550 && top <= 900){
		    	anime({
				  targets: '#es6',
				  scale: { value: 1, duration: 100},
				  translateY: -200,
				  easing: 'easeInOutQuad',
				  complete: function(anim){
				  	console.log("hi");
				  }
				});
		    }
		    
	    });
	var description = 
		[{
			iType: ".jpg",
			name: "fire_tongue",
			p: "<b style='font-size: 100px;'>FIRE TONGUE REWARDS CLUB</b><br><br>F-T-R-C REPRESENTS THE FIRE TONGUE REWARDS CLUB. BASED IN NYC, WE CONNECT WITH THOUSANDS OF HOTTEST RESTAURENTS, ESTABLISH THIS HONRABLE SPICY CUSINE REWARDS CLUB FOR FIRE AFICIONADOS LIKE YOU.",
			numOfImages: 10,
			hasVideo: "true",
			vType: ".mp4",
			numOfVideos: 2
		},
		{
			iType: ".jpg",
			name: "xiangqi",
			p: "<b style='font-size: 100px;'>XIANGQI</b><br><br>Throughout childhood, I love to sit on my grandfather's lap to watch him play XIANGQI. My interest in XIANGQI starts there. During the summer-time, people often gather to play XIANGQI after dinner. Each of the XIANGQI moves is like strings, easily evoke people’s emotion. The excitement and nerves of people’s face are the most fascinating part of this game in my memory.",
			numOfImages: 10,
			hasVideo: "true",
			vType: ".mp4",
			numOfVideos: 1
		},
		{
			iType: ".jpg",
			name: "essentials",
			p: "<b style='font-size: 100px;'>ESSENTIALS<br><span style='font-size: 50px;'>/əˈsen(t)SHəl/</span></b><br><br>a basic thing that you cannot live or succeed without.<br> A moment in time. I am a 19 years old college student. The objects I pick represent things that important for me now. This project of photogrpahy descovered the importance of essentials in my daily life. With playful tone and Andy Warhol style of collage to express my innerself.",			
			numOfImages: 12,
			hasVideo: "true",
			vType: ".mp4",
			numOfVideos: 1
		}
		];

	var fire_tongue = description[0];
	var xiangqi = description[1];

	var List = ["fire_tongue","xiangqi","essentials"];
	var target;


	$("#description-close").click(function(e){
		$("#description").slideUp();
	    console.log("t");
	})

	$('.work a').click(function(e){
		window.scrollTo(0,0);
		e.preventDefault();
		var alt = $(this).find("img").attr("alt");
		$('#description-img').attr("src","img/" + alt + ".jpg");
		if(List.indexOf(alt) >= 0){
			$('#description-p').text(description[List.indexOf(alt)].p);
			//console.log(List.indexOf(alt) + description[List.indexOf(alt)].p);
		}
		console.log($(e.target).parent().parent()[0]);
		target = $(e.target).parent().parent()[0];
		
		var data = description[List.indexOf(alt)];

		//$(e.target).parent().parent().append("<div id='description'><p id='description-close'>CLOSE</p><p id='description-title'>" + description[List.indexOf(alt)].alt + "</p><img id='description-img' src=" + "img/" + alt + ".jpg>" + "<p id='description-p1'>" + description[List.indexOf(alt)].p) + "</p>";
		if(data.name == "fire_tongue"){
			$(e.target).parent().parent().parent().append("<div id='description'><p id='description-close'>CLOSE</p><p id='description-title'>" + data.name.replace(/[^a-z0-9\s]/gi, ' ') + "</p>");
			for(var i=0; i< data.numOfImages; i++){
				$("#description").append("<img class='description-img-fire_tongue'" + "id='description-img-" + i + "' src='img/" + data.name + "/" + data.name + "_" + i + data.iType + "'>");
			}
			$("#description").append("<p id='description-p1'>" + data.p + "</p></div>");

		}
		if(data.name == "xiangqi"){
			$(e.target).parent().parent().parent().append("<div id='description'><p id='description-close'>CLOSE</p><p id='description-title'>" + data.name.replace(/[^a-z0-9\s]/gi, ' ') + "</p>");
			for(var i=0; i< data.numOfImages; i++){
				$("#description").append("<img class='description-img-xiangqi'" + "id='description-img-" + i + "' src='img/" + data.name + "/" + data.name + "_" + i + data.iType + "'>");
			}
			$("#description").append("<p id='description-p1'>" + data.p + "</p></div>");

		}
		if(data.name == "essentials"){
			$(e.target).parent().parent().parent().append("<div id='description'><p id='description-close'>CLOSE</p><p id='description-title'>" + data.name.replace(/[^a-z0-9\s]/gi, ' ') + "</p>");
			for(var i=0; i< data.numOfImages; i++){
				$("#description").append("<img class='description-img-essentials'" + "id='description-img-" + i + "' src='img/" + data.name + "/" + data.name + "_" + i + data.iType + "'>");
			}
			$("#description").append("<p id='description-p1'>" + data.p + "</p></div>");

		}
		

		scrollImage(data.name);
		closeDescription();

	});
	function hoverImage(){
		
	}
	//scrolling animation
	function scrollImage(target){
		var t = ".description-img-" + target;
		var offset;
		if(t == ".description-img-fire_tongue"){
			offset = 6498;
		}else if(t ==".description-img-xiangqi"){
			offset = 2327;
		}else if(t ==".description-img-essentials"){
			offset = 1900;
		}
		window.addEventListener("scroll", function(event) {
	    var top = this.scrollY,
	        left =this.scrollX;
	        console.log("top: " + top);
	        console.log(t);

		    if(top == 0){
		        anime({
				  targets: t,
				  paddingLeft: { value: 300, duration: 800 },
				  easing: 'easeInOutQuad',
				  begin: function(anim) {
				    console.log("top0"); // true after 1000ms
				  }
				});
				anime({
				  targets: '#description-title',
				  scale: { value: 1, duration: 800 },
				  easing: 'easeInOutQuad',
				  begin: function(anim) {
				    console.log("top0"); // true after 1000ms
				  }
				});
		    }
		    
		    if(top >= 1 && top <= 399){
		        anime({
				  targets: '#description-title',
				  scale: { value: 2, duration: 100},
				  easing: 'easeInOutQuad',
				  complete: function(anim) {
				    console.log("top0"); // true after 1000ms
				  }
				});
		    }

		    if(top >= 400 && top <= 2599){
		        anime({
				  targets: t,
				  paddingLeft: { value: 0, duration: 400 },
				  easing: 'easeInOutQuad',
				  begin: function(anim) {
				    console.log("top175"); // true after 1000ms
				  }
				});
		    }
		    if(top <= offset){
		        anime({
				  targets: t,
				  translateY: 0,
				  scale: { value: 1, duration: 400 },
				  easing: 'easeInOutQuad',
				  begin: function(anim) {
				    console.log("top175"); // true after 1000ms
				  }
				});
		    }
		    if(top >= (offset)){
		        anime({
				  targets: t,
				  translateY: -700,
				  scale: { value: 1, duration: 400 },
				  easing: 'easeInOutQuad',
				  begin: function(anim) {
				    console.log("top175"); // true after 1000ms
				  }
				});
				anime({
				  targets: '#description-p1',
				  translateY: -250,
				  scale: { value: 1, duration: 400 },
				  easing: 'easeInOutQuad',
				  begin: function(anim) {
				    console.log("top175"); // true after 1000ms
				  }
				});
		    }


		}, false);
	} 

	//close	
	function closeDescription(){
		$("#description-close").click(function(e){
			$("#description").slideUp(800, function(){$("#description").remove(); console.log("removed")});
		});
		$(document).on('keyup',function(evt) {
		    if (evt.keyCode == 27) {
				$("#description").slideUp(800, function(){$("#description").remove(); console.log("removed")});
		    }
		});
	}

});