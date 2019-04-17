var images_about = [];
		var project_slides = [];
		var project_slides_titles = [];
		var project_size = 0;
		var project_current_index = 0;
		var projects_id = ["book", 
							"xiangqi", 
							"crag", 
							"fluge", 
							"fire", 
							"eye",
							"movingeye", 
							"pepsi"];
		var projects_id_index = 0;
		var projects_id_size = projects_id.length;
		var timer = 1;
			
			
			
			
		function force_css(){		
		
		
			if($(window).width() > 850){
				document.getElementById("left_header").innerHTML = "YULA YE";
			}
			else{
				document.getElementById("left_header").innerHTML = "YULA YE";
			}
			
			if(timer === 1){
				jQuery.get("textes/about.txt", function(data) {
					document.getElementById("li").innerHTML = data;
				});
			}
			
			if($(window).width() > 700){
								
				var dropdown = document.getElementById('ul');
					
				if (timer === 0) {
					$('#id').css('width', '75%');
					$('#id').css('display', 'block');
					$('#id').css("border-right", "1px solid black");
					$('#id').css("border-top", "1px solid black");					
				} 
				$('#article').css("border-right", "1px solid black");
				$('#article').css("border-bottom", "0px solid black");
				$('#w').css("background-color", "white");
				$('#a').css('width', '50%');
				$('#jrs').css('width', '25%');
				$('#w').css('display', 'inline-block');
			}
			else{
				$('#article').css("border-right", "0px solid black");
				$('#article').css("border-bottom", "1px solid black");
				$('#w').css("background-color", "black");
				$('#id').css('display', 'none');
				$('#a').css('width', '60%');
				$('#jrs').css('width', '40%');
				$('#w').css('display', 'none');
			}
				
			var h = $( window ).height();
			var headerHeight = $('header').outerHeight();
			h = h-headerHeight;
			$('#li').css('height', h+'px');
			$('#li_jrs').css('height', h+'px');
		}
	
		
		
		$(window).bind('resize', function(){		
			force_css();
		});
		
		
		
		jQuery(document).ready(function($){
		
			force_css();
			
			
			
			
			
			var active_dropdown = 0;
			$(".dropdown").click(function(e){
			
				$(".dropdown").off('click');
				$(".dropdown").on('click', function(){					
					var fontStyle = $('#about').css( "font-style" );
					if(fontStyle === "italic"){
						$('#about').css('font-style', 'normal');
					}
					else{
						$('#about').css('font-style', 'italic');
					}
					if(active_dropdown == 0){
						active_dropdown++;
						clearInterval(interval);
						//$('#about').css('font-style', 'italic');
					}
					else{
						active_dropdown = 0;
						//$('#about').css('font-style', 'normal');
						if(timer === 1){
							interval = window.setInterval(slideshow, 5000);
						}
					}
					e.preventDefault();
					var $this = $(this).children(".dropdown-content");
					$(".dropdown-content:visible").not($this).slideToggle(200); //Close submenu already opened
					$this.slideToggle(200); //Open the new submenu
					
					if(timer === 0){
						e.preventDefault();
						var dropdown_jrs = $(".dropdown_jrs").children(".dropdown-content_jrs");
						$(".dropdown-content_jrs:visible").not(dropdown_jrs).slideToggle(200); //Close submenu already opened
						dropdown_jrs.slideToggle(200); //Open the new submenu
					}
				});
				
				
				
				
				var fontStyle = $('#about').css( "font-style" );
				if(fontStyle === "italic"){
					$('#about').css('font-style', 'normal');
				}
				else{
					$('#about').css('font-style', 'italic');
				}
				if(active_dropdown == 0){
					active_dropdown++;
					clearInterval(interval);
					//$('#about').css('font-style', 'italic');
				}
				else{
					active_dropdown = 0;
					//$('#about').css('font-style', 'normal');
					if(timer === 1){
						interval = window.setInterval(slideshow, 5000);
					}
				}
				e.preventDefault();
				var $this = $(this).children(".dropdown-content");
				$(".dropdown-content:visible").not($this).slideToggle(200); //Close submenu already opened
				$this.slideToggle(200); //Open the new submenu
				
				if(timer === 0){
					e.preventDefault();
					var dropdown_jrs = $(".dropdown_jrs").children(".dropdown-content_jrs");
					$(".dropdown-content_jrs:visible").not(dropdown_jrs).slideToggle(200); //Close submenu already opened
					dropdown_jrs.slideToggle(200); //Open the new submenu
				}
			});

			
			
			
			
			
			

			$("#li_jrs").click(function(e){
				$(".dropdown").click();
			});
			
			$("#ul li #li").css("hyphens","none");
			$("#ul li #li").css("font-size","25px");
				
			function closeAbout(){
				$('#ul').css('display', 'none');
				$('#ul_jrs').css('display', 'none');
				$('#about').css('font-style', 'normal');
			}
		
			function setImagesAbout(){
				$("#about_image_top").css('background-image',images_about[0]);
				$("#about_image_middle").css('background-image',images_about[1]);
				$("#about_image_bottom").css('background-image',images_about[2]);
			}
		
		//---------------------------------------------------------------book--------------------------------------------------------------------------
			$("#book").click(function(){
				jQuery.get("textes/bookcover.txt", function(data) {
					document.getElementById("li").innerHTML = data;
				});						
				projectInitialisationStepOne();	
				$(this).css('font-style', 'italic');				
				projects_id_index = 21;				
				console.log("enter");	
				project_slides = ['url("images/Book_Cover/Links/01.jpg")',
								'url("images/Book_Cover/Links/02.jpg")',
								'url("images/Book_Cover/Links/03.jpg")',];
				project_slides_titles = ['Book Cover Design',
										'A SHELTER / Book Cover Design',
										'ACTIVE RHYTHM / Book Cover Design',];
				projectInitialisationStepTwo();
			});		
		//-----------------------------------------------------------------------------------------------------------------------------------------
		
		
		
		//---------------------------------------------------------------xiangqi--------------------------------------------------------------------------
			$("#xiangqi").click(function(){
				jQuery.get("textes/xiangqi.txt", function(data) {
					document.getElementById("li").innerHTML = data;
				});						
				projectInitialisationStepOne();	
				$(this).css('font-style', 'italic');				
				projects_id_index = 20;
				console.log("enter");					
				project_slides = ['url("images/Xiangqi_Book_Design/Links/01.jpg")',
								'url("images/Xiangqi_Book_Design/Links/03.gif")',
								'url("images/Xiangqi_Book_Design/Links/04.jpg")',
								'url("images/Xiangqi_Book_Design/Links/05.jpg")',
								'url("images/Xiangqi_Book_Design/Links/06.jpg")',
								'url("images/Xiangqi_Book_Design/Links/07.jpg")',
								'url("images/Xiangqi_Book_Design/Links/08.jpg")',];
				project_slides_titles = ['The Lost Legacy: Chinese Chess / Book',
										'The Lost Legacy: Chinese Chess / Book Interior 01',
										"The Lost Legacy: Chinese Chess / Book Interior 02",
										"The Lost Legacy: Chinese Chess / Book Interior 03",
										"The Lost Legacy: Chinese Chess / Envelope",
										"The Lost Legacy: Chinese Chess / Chessboard and Pieces",
										"The Lost Legacy: Chinese Chess / Chessboard in Detail",];
				images_about = ['url("images/Xiangqi_Book_Design/Links/01.jpg")',
								'url("images/Xiangqi_Book_Design/Links/06.jpg")',
								'url("images/Xiangqi_Book_Design/Links/01.jpg")'];
				projectInitialisationStepTwo();
			});		
		//-----------------------------------------------------------------------------------------------------------------------------------------

		//---------------------------------------------------------------crag--------------------------------------------------------------------------
			$("#crag").click(function(){
				jQuery.get("textes/crag.txt", function(data) {
					document.getElementById("li").innerHTML = data;
				});
				projectInitialisationStepOne();
				$(this).css('font-style', 'italic');
				projects_id_index = 3;
				project_slides = ['url("images/Craigslist_Campaign/Links/01.gif")',
								'url("images/Craigslist_Campaign/Links/03.gif")',
								'url("images/Craigslist_Campaign/Links/04.gif")',
								'url("images/Craigslist_Campaign/Links/05.gif")',
								'url("images/Craigslist_Campaign/Links/06.jpg")',
								'url("images/Craigslist_Campaign/Links/07.jpg")',];
				project_slides_titles = ["Craigslist / Campaign",
										"Craigslist / Animated Poster",
										"Craigslist / Instagram Story",
										"Craigslist / Subway Ads",
										"Craigslist / Building Ads",
										"Craigslist / Campaign"];
	
				projectInitialisationStepTwo();
			});		
		//-----------------------------------------------------------------------------------------------------------------------------------------	
								
				
		//--------------------------------------------------------------------fluge---------------------------------------------------------------------		
			$("#fluge").click(function(){
				jQuery.get("textes/flug.txt", function(data) {
					document.getElementById("li").innerHTML = data;
				});			
				projectInitialisationStepOne();
				$(this).css('font-style', 'italic');
				projects_id_index = 19;								
				project_slides = ['url("images/Fluge/Links/01.jpg")',
								'url("images/Fluge/Links/02.jpg")',
								'url("images/Fluge/Links/03.jpg")',
								'url("images/Fluge/Links/04.jpg")',
								'url("images/Fluge/Links/05.jpg")',
								'url("images/Fluge/Links/06.jpg")',
								'url("images/Fluge/Links/07.jpg")',
								'url("images/Fluge/Links/08.jpg")',
								'url("images/Fluge/Links/09.jpg")',
								'url("images/Fluge/Links/10.jpg")',
								'url("images/Fluge/Links/11.jpg")',
								'url("images/Fluge/Links/12.jpg")',
								'url("images/Fluge/Links/13.jpg")',
								'url("images/Fluge/Links/14.jpg")',
								'url("images/Fluge/Links/15.jpg")',];
				project_slides_titles = ['Flüge Collaboration / Branding / 01',
										'Flüge Collaboration / Branding / 02',
										'Flüge Collaboration / Branding / 03',
										'Flüge Collaboration / Branding / 04',
										'Flüge Collaboration / Branding / 05',
										'Flüge Collaboration / Branding / 06',
										'Flüge Collaboration / Branding / 07',
										'Flüge Collaboration / Branding / 08',
										'Flüge Collaboration / Branding / 09',
										'Flüge Collaboration / Branding / 10',
										'Flüge Collaboration / Branding / 11',
										'Flüge Collaboration / Branding / 12',
										'Flüge Collaboration / Branding / 13',
										'Flüge Collaboration / Branding / 14',
										'Flüge Collaboration / Branding / 15',];
				projectInitialisationStepTwo();
			});	
		//-----------------------------------------------------------------------------------------------------------------------------------------
				
				
				
				
		//---------------------------------------------------------------fire--------------------------------------------------------------------------
			$("#fire").click(function(){
				jQuery.get("textes/fire.txt", function(data) {
					document.getElementById("li").innerHTML = data;
				});
				projectInitialisationStepOne();
				$(this).css('font-style', 'italic');
				projects_id_index = 2;
				project_slides = ['url("images/Fire_Tongue_Branding/Links/01.jpg")',
								'url("images/Fire_Tongue_Branding/Links/02.jpg")',
								'url("images/Fire_Tongue_Branding/Links/03.gif")',
								'url("images/Fire_Tongue_Branding/Links/04.jpg")',
								'url("images/Fire_Tongue_Branding/Links/05.jpg")',
								'url("images/Fire_Tongue_Branding/Links/06.jpg")',
								'url("images/Fire_Tongue_Branding/Links/07.jpg")',
								'url("images/Fire_Tongue_Branding/Links/08.jpg")',
								'url("images/Fire_Tongue_Branding/Links/09.jpg")',
								'url("images/Fire_Tongue_Branding/Links/10.jpg")',
								'url("images/Fire_Tongue_Branding/Links/11.jpg")',
								'url("videos/Fire_Tongue_Branding/Links/12.mp4")',];
				project_slides_titles = ["Fire Tongue Reword Club / Identity Design",
										"Fire Tongue Reword Club / Visual Concept",
										"Fire Tongue Reword Club / Booklet",
										"Fire Tongue Reword Club / Booklet Interior 01",
										"Fire Tongue Reword Club / Booklet Interior 02",
										"Fire Tongue Reword Club / Booklet Interior 03",
										"Fire Tongue Reword Club / Booklet Interior 04",
										"Fire Tongue Reword Club / Booklet Interior",
										"Fire Tongue Reword Club / Invitation letter",
										"Fire Tongue Reword Club / Business Card",
										"Fire Tongue Reword Club / Map Poster",
										"Fire Tongue Reword Club / Prints",
										"Fire Tongue Reword Club / Experiencial Installation",];
				projectInitialisationStepTwo();
			});		
		//-----------------------------------------------------------------------------------------------------------------------------------------

		
		
		//---------------------------------------------------------------eye--------------------------------------------------------------------------
			$("#eye").click(function(){
				jQuery.get("textes/eye.txt", function(data) {
					document.getElementById("li").innerHTML = data;
				});
				projectInitialisationStepOne();
				$(this).css('font-style', 'italic');
				projects_id_index = 1;
				project_slides = ['url("images/Moving_Eye/Links/01.jpg")',
								'url("images/Moving_Eye/Links/02.jpg")',
								'url("images/Moving_Eye/Links/03.gif")',
								'url("images/Moving_Eye/Links/04.gif")',
								'url("images/Moving_Eye/Links/05.gif")',
								'url("images/Moving_Eye/Links/06.jpg")',
								'url("images/Moving_Eye/Links/07.jpg")',
								'url("images/Moving_Eye/Links/08.gif")',
								'url("images/Moving_Eye/Links/09.gif")',
								'url("images/Moving_Eye/Links/10.gif")',
								'url("images/Moving_Eye/Links/11.gif")',];
				project_slides_titles = ["Moving Eye Exhibition / Title Page",
										"Moving Eye Exhibition / Verbal Concept",
										"Moving Eye Exhibition / Sample Artworks",
										"Moving Eye Exhibition / Visual Concept",
										"Moving Eye Exhibition / Visual Elements",
										"Moving Eye Exhibition / Tickets",
										"Moving Eye Exhibition / Visitor ID Card",
										"Moving Eye Exhibition / Posters",
										"Moving Eye Exhibition / Instagram Ads",
										"Moving Eye Exhibition / UI/UX Visual",
										"Moving Eye Exhibition / Exhibition Title Walls + Interior + Subway Ads",];
				projectInitialisationStepTwo();
			});		
		//-----------------------------------------------------------------------------------------------------------------------------------------

				
				
				
		//---------------------------------------------------------------pepsi--------------------------------------------------------------------------
			$("#pepsi").click(function(){
				jQuery.get("textes/pepsi.txt", function(data) {
					document.getElementById("li").innerHTML = data;
				});
				projectInitialisationStepOne();
				$(this).css('font-style', 'italic');
				projects_id_index = 8;
				project_slides = ['url("images/Pepsi_Seeing_The_World/Links/01.jpg")',
								'url("images/Pepsi_Seeing_The_World/Links/02.jpg")',
								'url("images/Pepsi_Seeing_The_World/Links/03.jpg")',
								'url("images/Pepsi_Seeing_The_World/Links/04.jpg")',
								'url("images/Pepsi_Seeing_The_World/Links/05.jpg")',
								'url("images/Pepsi_Seeing_The_World/Links/06.gif")',
								'url("images/Pepsi_Seeing_The_World/Links/07.jpg")',
								'url("images/Pepsi_Seeing_The_World/Links/08.jpg")',
								'url("images/Pepsi_Seeing_The_World/Links/09.jpg")',
								'url("images/Pepsi_Seeing_The_World/Links/10.jpg")'];
				project_slides_titles = ["Pepsi Seeing the World / Social Media Campaign",
										"Pepsi Seeing the World / Social Media Campaign",
										"Pepsi Seeing the World / Social Media Campaign",
										"Pepsi Seeing the World / Social Media Campaign",
										"Pepsi Seeing the World / Social Media Campaign",
										"Pepsi Seeing the World / Social Media Campaign",
										"Pepsi Seeing the World / Social Media Campaign",
										"Pepsi Seeing the World / Social Media Campaign",
										"Pepsi Seeing the World / Social Media Campaign",
										"Pepsi Seeing the World / Social Media Campaign"];
			
				projectInitialisationStepTwo();
			});		
		//-----------------------------------------------------------------------------------------------------------------------------------------
		
		
		
			function projectInitialisationStepOne(){
				document.getElementById("prev").innerHTML = 1;
				$('#article').css("cursor", "pointer");
				var last_project = projects_id[projects_id_index];
				//$('#'+last_project).css('font-style', 'normal');
				timer = 0;
				clearInterval(interval);				
				closeAbout();
				if($(window).width() > 700){
					$('#id').css('display', 'block');
				}
			}	
				
				
			function projectInitialisationStepTwo(){
				setImagesAbout();
				project_size = project_slides.length;
				project_current_index = 0;
				$("#slider").fadeOut(500);
				setTimeout(function() {
					$("#slider").css('background-image',project_slides[0]).fadeIn(500);  						
				}, 500); 	
				document.getElementById("next").innerHTML = project_size;
				document.getElementById("center_footer").innerHTML = project_slides_titles[0];
				document.getElementById("more").innerHTML = "MORE";
			}	
				
				
				
				
				
			$("#prev").click(function(){
				$('#ul').css('display', 'none');
				if(project_current_index > 0){
					project_current_index--;
				}
				document.getElementById("prev").innerHTML = project_current_index+1;
				document.getElementById("center_footer").innerHTML = project_slides_titles[project_current_index];
				$("#slider").fadeOut(500);
				setTimeout(function() {
					$("#slider").css('background-image',project_slides[project_current_index]).fadeIn(500);  						
				}, 500); 	
			});		
			
			
			
			$("#prev_slider").click(function(){
				if(timer === 0){
					$("#prev").click();
				}
			});




			$("#next").click(function(){
				$('#ul').css('display', 'none');
				if(project_current_index < project_size-1){
					project_current_index++;
				}
				document.getElementById("prev").innerHTML = project_current_index+1;
				document.getElementById("center_footer").innerHTML = project_slides_titles[project_current_index];
				$("#slider").fadeOut(500);
				setTimeout(function() {
					$("#slider").css('background-image',project_slides[project_current_index]).fadeIn(500);  						
				}, 500); 	
			});	
			
			
			
			
			$("#next_slider").click(function(){
				if(timer === 0){
					$("#next").click();
				}
			});
			
			
			
			
			
			$("#more").click(function(){
				$('#ul').css('display', 'none');
				document.getElementById("prev").innerHTML = 1;
				if(projects_id_index < projects_id_size -1){
					projects_id_index++;
				}
				else{
					projects_id_index = 0;
				}
				var project_to_display = projects_id[projects_id_index];
				$("#"+project_to_display).click();	
			});
				
				
				
				
				
				
				
				
			var n = 0;	
			var interval = window.setInterval(slideshow, 4000);
			var main_project_images = ['url("images/WEB_MAIN.jpg")',
								'url("images/Book_Cover/Links/01.jpg")',
								'url("images/Xiangqi_Book_Design/Links/07.jpg")',
								'url("images/Fluge/Links/11.jpg")',
								'url("images/Pepsi_Seeing_The_World/Links/10.jpg")',
								'url("images/Craigslist_Campaign/Links/03.gif")',
								'url("images/Moving_Eye/Links/12.gif")',
								'url("images/Fire_Tongue_Branding/Links/08.jpg")',];
			var nbrImages = main_project_images.length;
			
			
			function slideshow(){
				n++;
				if(n > nbrImages-1){
					n = 0;
				}
				$("#slider").fadeOut(500);
				setTimeout(function() {
					$("#slider")
						.css('background-image',main_project_images[n])
						.fadeIn(500);
				}, 500); 
			}

			
		});