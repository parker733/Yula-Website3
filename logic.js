var images_about = [];
		var project_slides = [];
		var project_slides_titles = [];
		var project_size = 0;
		var project_current_index = 0;
		var projects_id = ["book", "xiangqi", "crag", "fluge", "fire",
									"movingeye", "pepsi"];
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
				jQuery.get("textes/about.txt", function(data) {
					document.getElementById("li").innerHTML = data;
				});						
				projectInitialisationStepOne();	
				$(this).css('font-style', 'italic');				
				projects_id_index = 21;				
				console.log("enter");	
				project_slides = ['url("images/book_Cover/Links/01.jpg")',
								'url("images/book_Cover/Links/02.jpg")',
								'url("images/book_Cover/Links/03.jpg")',
								'url("images/book_Cover/Links/04.jpg")'];
				project_slides_titles = ['Book Cover Design',
										'A SHELTER / Book Cover Design',
										'ACTIVE RHYTHM / Book Cover Design',
										"INFO / Book Cover Design"];
				projectInitialisationStepTwo();
			});		
		//-----------------------------------------------------------------------------------------------------------------------------------------
		
		
		
		//---------------------------------------------------------------xiangqi--------------------------------------------------------------------------
			$("#xiangqi").click(function(){
				jQuery.get("textes/about.txt", function(data) {
					document.getElementById("li").innerHTML = data;
				});						
				projectInitialisationStepOne();	
				$(this).css('font-style', 'italic');				
				projects_id_index = 20;
				console.log("enter");					
				project_slides = ['url("images/Xiangqi_Book_Design/Links/01.jpg")',
								'url("images/Xiangqi_Book_Design/Links/02.jpg")',
								'url("images/Xiangqi_Book_Design/Links/03.gif")',
								'url("images/Xiangqi_Book_Design/Links/04.jpg")',
								'url("images/Xiangqi_Book_Design/Links/05.jpg")',
								'url("images/Xiangqi_Book_Design/Links/06.jpg")',
								'url("images/Xiangqi_Book_Design/Links/07.jpg")',
								'url("images/Xiangqi_Book_Design/Links/08.jpg")',
								'url("images/Xiangqi_Book_Design/Links/09.jpg")'];
				project_slides_titles = ['The Lost Legacy: Chinese Chess / Book',
										'The Lost Legacy: Chinese Chess / A Note to Readers',
										'The Lost Legacy: Chinese Chess / Book Interior 01',
										"The Lost Legacy: Chinese Chess / Book Interior 02",
										"The Lost Legacy: Chinese Chess / Book Interior 03",
										"The Lost Legacy: Chinese Chess / Envelope",
										"The Lost Legacy: Chinese Chess / Chessboard and Pieces",
										"The Lost Legacy: Chinese Chess / Chessboard in Detail",
										"The Lost Legacy: Chinese Chess / Chess pieces in Detail"];
				projectInitialisationStepTwo();
			});		
		//-----------------------------------------------------------------------------------------------------------------------------------------

		//---------------------------------------------------------------crag--------------------------------------------------------------------------
			$("#crag").click(function(){
				jQuery.get("textes/about.txt", function(data) {
					document.getElementById("li").innerHTML = data;
				});
				projectInitialisationStepOne();
				$(this).css('font-style', 'italic');
				projects_id_index = 3;
				project_slides = ['url("images/Craigslist_Campaign/Links/01.gif")',
								'url("images/Craigslist_Campaign/Links/02.gif")',
								'url("images/Craigslist_Campaign/Links/03.gif")',
								'url("images/Craigslist_Campaign/Links/04.gif")',
								'url("images/Craigslist_Campaign/Links/05.gif")',
								'url("images/Craigslist_Campaign/Links/06.jpg")',
								'url("images/Craigslist_Campaign/Links/07.jpg")',];
				project_slides_titles = ["Craigslist / Campaign",
										"Craigslist / Info",
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
				jQuery.get("textes/about.txt", function(data) {
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
								'url("images/Fluge/Links/15.jpg")',
								'url("images/Fluge/Links/16.jpg")',
								'url("images/Fluge/Links/17.jpg")',
								'url("images/Fluge/Links/18.jpg")',
								'url("images/Fluge/Links/19.jpg")',];
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
										'Flüge Collaboration / Branding / 15',
										'Flüge Collaboration / Branding / 16',
										'Flüge Collaboration / Branding / 17',
										'Flüge Collaboration / Branding / 18',
										'Flüge Collaboration / Branding / 19',];
				projectInitialisationStepTwo();
			});	
		//-----------------------------------------------------------------------------------------------------------------------------------------
				
				
				
				
		//---------------------------------------------------------------fire--------------------------------------------------------------------------
			$("#fire").click(function(){
				jQuery.get("textes/about.txt", function(data) {
					document.getElementById("li").innerHTML = data;
				});
				projectInitialisationStepOne();
				$(this).css('font-style', 'italic');
				projects_id_index = 2;
				project_slides = ['url("images/Fire_Tongue_Branding/Links/01.jpg")',
								'url("images/Fire_Tongue_Branding/Links/02.jpg")',
								'url("images/Fire_Tongue_Branding/Links/03.jpg")',
								'url("images/Fire_Tongue_Branding/Links/04.gif")',
								'url("images/Fire_Tongue_Branding/Links/05.jpg")',
								'url("images/Fire_Tongue_Branding/Links/06.jpg")',
								'url("images/Fire_Tongue_Branding/Links/07.jpg")',
								'url("images/Fire_Tongue_Branding/Links/08.jpg")',
								'url("images/Fire_Tongue_Branding/Links/09.jpg")',
								'url("videos/Fire_Tongue_Branding/Links/10.mp4")',];
				project_slides_titles = ["Fire Tongue Reword Club / Identity Design",
										"Fire Tongue Reword Club / Visual Concept 01",
										"Fire Tongue Reword Club / Visual Concept 02",
										"Fire Tongue Reword Club / Booklet",
										"Fire Tongue Reword Club / Booklet Interior",
										"Fire Tongue Reword Club / Invitation letter",
										"Fire Tongue Reword Club / Business Card",
										"Fire Tongue Reword Club / Map Poster",
										"Fire Tongue Reword Club / Prints",
										"Fire Tongue Reword Club / Experiencial Installation",];
				projectInitialisationStepTwo();
			});		
		//-----------------------------------------------------------------------------------------------------------------------------------------

		
		
		//---------------------------------------------------------------buffalo_66--------------------------------------------------------------------------
			$("#buffalo_66").click(function(){
				jQuery.get("textes/buffalo_66v3.txt", function(data) {
					document.getElementById("li").innerHTML = data;
				});
				projectInitialisationStepOne();
				$(this).css('font-style', 'italic');
				projects_id_index = 1;
				project_slides = ['url("images/buffalo66/johanne_roten_buffalo66_F00.jpg")',
								'url("images/buffalo66/johanne_roten_buffalo66_F01.jpg")',
								'url("images/buffalo66/johanne_roten_buffalo66_F02.jpg")',
								'url("images/buffalo66/johanne_roten_buffalo66_F03.jpg")'];
				project_slides_titles = ["poster, 420 Ã— 594 mm, matt paper, digital print",
										"poster detail, 420 Ã— 594 mm, matt paper, digital print",
										"poster detail, 420 Ã— 594 mm, matt paper, digital print",
										"poster detail, 420 Ã— 594 mm, matt paper, digital print"];
				images_about = ['url("images/buffalo66/about/johanne_roten_buffalo66_S00.jpg")',
								'url("images/buffalo66/about/johanne_roten_buffalo66_S01.jpg")',
								'url("images/buffalo66/about/johanne_roten_buffalo66_S02.jpg")'];
				projectInitialisationStepTwo();
			});		
		//-----------------------------------------------------------------------------------------------------------------------------------------

				
				
				
		//---------------------------------------------------------------memory--------------------------------------------------------------------------
			$("#memory").click(function(){
				jQuery.get("textes/memoryv1.txt", function(data) {
					document.getElementById("li").innerHTML = data;
				});
				projectInitialisationStepOne();
				$(this).css('font-style', 'italic');
				projects_id_index = 8;
				project_slides = ['url("images/memory/johanne_roten_memory_F00.jpg")',
								'url("images/memory/johanne_roten_memory_F01.jpg")',
								'url("images/memory/johanne_roten_memory_F02.jpg")',
								'url("images/memory/johanne_roten_memory_F03.jpg")'];
				project_slides_titles = ["coaster series, vector illustrations, cardboard, offset",
										"coaster series, vector illustrations, cardboard, offset",
										"coaster series, vector illustrations, cardboard, offset",
										"coaster series, vector illustrations, cardboard, offset"];
				images_about = ['url("images/memory/about/johanne_roten_memory_S00.jpg")',
								'url("images/memory/about/johanne_roten_memory_S01.jpg")',
								'url("images/memory/about/johanne_roten_memory_S02.jpg")'];
				projectInitialisationStepTwo();
			});		
		//-----------------------------------------------------------------------------------------------------------------------------------------






				
		//---------------------------------------------------------------cause_effet--------------------------------------------------------------------------
			$("#cause_effet").click(function(){
				jQuery.get("textes/graphisme_de_cause_effetv1.txt", function(data) {
					document.getElementById("li").innerHTML = data;
				});				
				projectInitialisationStepOne();
				$(this).css('font-style', 'italic');
				projects_id_index = 0;
				project_slides = ['url("images/cause_effet/johanne_roten_causeeffet_F01.jpg")',
								'url("images/cause_effet/johanne_roten_causeeffet_F02.jpg")',
								'url("images/cause_effet/johanne_roten_causeeffet_F03.jpg")',
								'url("images/cause_effet/johanne_roten_causeeffet_F04.jpg")',
								'url("images/cause_effet/johanne_roten_causeeffet_F05.jpg")',
								'url("images/cause_effet/johanne_roten_causeeffet_F06.jpg")',
								'url("images/cause_effet/johanne_roten_causeeffet_F07.jpg")',
								'url("images/cause_effet/johanne_roten_causeeffet_F08.jpg")'];
				project_slides_titles = ["book cover, 250 Ã— 325 mm, matt paper, digital print",
										"double page, 250 Ã— 325 mm, matt paper, digital print",
										"double page, 250 Ã— 325 mm, matt paper, digital print",
										"double page, 250 Ã— 325 mm, matt paper, digital print",
										"double page, 250 Ã— 325 mm, matt paper, digital print",
										"double page, 250 Ã— 325 mm, matt paper, digital print",
										"double page, 250 Ã— 325 mm, matt paper, digital print",
										"double page, 250 Ã— 325 mm, matt paper, digital print"];
				images_about = ['url("images/cause_effet/about/johanne_roten_causeeffet_S00.jpg")',
								'url("images/cause_effet/about/johanne_roten_causeeffet_S01.jpg")',
								'url("images/cause_effet/about/johanne_roten_causeeffet_S02.jpg")'];
				projectInitialisationStepTwo();
			});		
		//-----------------------------------------------------------------------------------------------------------------------------------------

		
		
		//---------------------------------------------------------------mon_idee--------------------------------------------------------------------------
			$("#mon_idee").click(function(){
				jQuery.get("textes/c_etait_mon_idee.txt", function(data) {
					document.getElementById("li").innerHTML = data;
				});
				projectInitialisationStepOne();
				$(this).css('font-style', 'italic');
				projects_id_index = 4;
				project_slides = ['url("images/cetait_mon_idee/johanne_roten_cetaitmonidee_F00.jpg")',
								'url("images/cetait_mon_idee/johanne_roten_cetaitmonidee_F01.jpg")',
								'url("images/cetait_mon_idee/johanne_roten_cetaitmonidee_F02.jpg")',
								'url("images/cetait_mon_idee/johanne_roten_cetaitmonidee_F03.jpg")',
								'url("images/cetait_mon_idee/johanne_roten_cetaitmonidee_F04.jpg")',
								'url("images/cetait_mon_idee/johanne_roten_cetaitmonidee_F05.jpg")',
								'url("images/cetait_mon_idee/johanne_roten_cetaitmonidee_F06.jpg")',
								'url("images/cetait_mon_idee/johanne_roten_cetaitmonidee_F07.jpg")',
								'url("images/cetait_mon_idee/johanne_roten_cetaitmonidee_F08.jpg")',
								'url("images/cetait_mon_idee/johanne_roten_cetaitmonidee_F09.jpg")',
								'url("images/cetait_mon_idee/johanne_roten_cetaitmonidee_F10.jpg")',
								'url("images/cetait_mon_idee/johanne_roten_cetaitmonidee_F11.jpg")',
								'url("images/cetait_mon_idee/johanne_roten_cetaitmonidee_F12.jpg")',
								'url("images/cetait_mon_idee/johanne_roten_cetaitmonidee_F13.jpg")',
								'url("images/cetait_mon_idee/johanne_roten_cetaitmonidee_F14.jpg")',
								'url("images/cetait_mon_idee/johanne_roten_cetaitmonidee_F15.jpg")',
								'url("images/cetait_mon_idee/johanne_roten_cetaitmonidee_F16.jpg")',
								'url("images/cetait_mon_idee/johanne_roten_cetaitmonidee_F17.jpg")',
								'url("images/cetait_mon_idee/johanne_roten_cetaitmonidee_F18.jpg")'];
				project_slides_titles = ["2 editions linked by an elastic, 150 Ã— 210 mm, matt paper, digital print",
										"cover detail, 150 Ã— 210 mm, matt paper, digital print",
										"2 editions, 150 Ã— 210 mm, matt paper, digital print",
										"editions detail",
										"edition double page, 300 Ã— 210 mm, matt paper, digital print",
										"edition double page, 300 Ã— 210 mm, matt paper, digital print",
										"edition double page, 300 Ã— 210 mm, matt paper, digital print",
										"edition double page, 300 Ã— 210 mm, matt paper, digital print",
										"edition double page, 300 Ã— 210 mm, matt paper, digital print",
										"edition double page, 300 Ã— 210 mm, matt paper, digital print",
										"edition double page, 300 Ã— 210 mm, matt paper, digital print",
										"edition double page, 300 Ã— 210 mm, matt paper, digital print",
										"edition double page, 300 Ã— 210 mm, matt paper, digital print",
										"edition double page, 300 Ã— 210 mm, matt paper, digital print",
										"edition double page, 300 Ã— 210 mm, matt paper, digital print",
										"edition double page, 300 Ã— 210 mm, matt paper, digital print",
										"edition double page, 300 Ã— 210 mm, matt paper, digital print",
										"edition double page, 300 Ã— 210 mm, matt paper, digital print",
										"edition double page, 300 Ã— 210 mm, matt paper, digital print"];
				images_about = ['url("images/cetait_mon_idee/about/johanne_roten_cetaitmonidee_S00.jpg")',
								'url("images/cetait_mon_idee/about/johanne_roten_cetaitmonidee_S01.jpg")',
								'url("images/cetait_mon_idee/about/johanne_roten_cetaitmonidee_S02.jpg")'];
				projectInitialisationStepTwo();
			});		
		//-----------------------------------------------------------------------------------------------------------------------------------------

		
		
		
		
		
		
		//---------------------------------------------------------------remind_me_to_forget--------------------------------------------------------------------------
			$("#remind_me_to_forget").click(function(){
				jQuery.get("textes/remind_me_to_forgetv1.txt", function(data) {
					document.getElementById("li").innerHTML = data;
				});
				projectInitialisationStepOne();
				$(this).css('font-style', 'italic');
				projects_id_index = 5;
				project_slides = ['url("images/remind_me_to_forget/johanne_roten_remindmetoforget_F00.jpg")',
								'url("images/remind_me_to_forget/johanne_roten_remindmetoforget_F01.jpg")',
								'url("images/remind_me_to_forget/johanne_roten_remindmetoforget_F03.jpg")',
								'url("images/remind_me_to_forget/johanne_roten_remindmetoforget_F04.jpg")',
								'url("images/remind_me_to_forget/johanne_roten_remindmetoforget_F05.jpg")',
								'url("images/remind_me_to_forget/johanne_roten_remindmetoforget_F06.jpg")',
								'url("images/remind_me_to_forget/johanne_roten_remindmetoforget_F07.jpg")',
								'url("images/remind_me_to_forget/johanne_roten_remindmetoforget_F08.jpg")',
								'url("images/remind_me_to_forget/johanne_roten_remindmetoforget_F10.jpg")',
								'url("images/remind_me_to_forget/johanne_roten_remindmetoforget_F11.jpg")',
								'url("images/remind_me_to_forget/johanne_roten_remindmetoforget_F12.jpg")',
								'url("images/remind_me_to_forget/johanne_roten_remindmetoforget_F13.jpg")',
								'url("images/remind_me_to_forget/johanne_roten_remindmetoforget_F14.jpg")',
								'url("images/remind_me_to_forget/johanne_roten_remindmetoforget_F15.jpg")',
								'url("images/remind_me_to_forget/johanne_roten_remindmetoforget_F17.jpg")',
								'url("images/remind_me_to_forget/johanne_roten_remindmetoforget_F18.jpg")',
								'url("images/remind_me_to_forget/johanne_roten_remindmetoforget_F19.jpg")'];
				project_slides_titles = ["book cover, 270 Ã— 355 mm, matt paper, digital print",
										"double page, 540 Ã— 355 mm, matt paper, digital print",
										"double page, 540 Ã— 355 mm, matt paper, digital print",
										"double page, 540 Ã— 355 mm, matt paper, digital print",
										"series of photographs",
										"double page, 540 Ã— 355 mm, matt paper, digital print",
										"double page, 540 Ã— 355 mm, matt paper, digital print",
										"double page, 540 Ã— 355 mm, matt paper, digital print",
										"double page, 540 Ã— 355 mm, matt paper, digital print",
										"double page, 540 Ã— 355 mm, matt paper, digital print",
										"double page, 540 Ã— 355 mm, matt paper, digital print",
										"double page, 540 Ã— 355 mm, matt paper, digital print",
										"series of photographs",
										"ddouble page, 540 Ã— 355 mm, matt paper, digital print",
										"series of photographs",
										"double page, 540 Ã— 355 mm, matt paper, digital print",
										"ddouble page, 540 Ã— 355 mm, matt paper, digital print"];
				images_about = ['url("images/remind_me_to_forget/about/johanne_roten_remindmetoforget_S00.jpg")',
								'url("images/remind_me_to_forget/about/johanne_roten_remindmetoforget_S01.jpg")',
								'url("images/remind_me_to_forget/about/johanne_roten_remindmetoforget_S02.jpg")'];
				projectInitialisationStepTwo();
			});		
		//-----------------------------------------------------------------------------------------------------------------------------------------

		
		
		
		
		//---------------------------------------------------------------totally_drunk--------------------------------------------------------------------------
			$("#totally_drunk").click(function(){
				jQuery.get("textes/totally_drunkv2.txt", function(data) {
					document.getElementById("li").innerHTML = data;
				});
				projectInitialisationStepOne();
				$(this).css('font-style', 'italic');
				projects_id_index = 16;
				project_slides = ['url("images/totally_drunk/johanne_roten_totallydrunk_F00.jpg")',
								'url("images/totally_drunk/johanne_roten_totallydrunk_F01.jpg")',
								'url("images/totally_drunk/johanne_roten_totallydrunk_F02.jpg")'];
				project_slides_titles = ["poster 1 detail, 210 Ã— 297 mm, digital version",
										"poster 2, 210 Ã— 297 mm, digital version",
										"poster 3 detail, 210 Ã— 297 mm, digital version"];
				images_about = ['url("images/totally_drunk/about/johanne_roten_totallydrunk_S00.jpg")',
								'url("images/totally_drunk/about/johanne_roten_totallydrunk_S01.jpg")',
								'url("images/totally_drunk/about/johanne_roten_totallydrunk_S02.jpg")'];
				projectInitialisationStepTwo();
			});		
		//-----------------------------------------------------------------------------------------------------------------------------------------



		//---------------------------------------------------------------estivale_open_air_festival--------------------------------------------------------------------------
			$("#estivale_open_air_festival").click(function(){
				jQuery.get("textes/estivale_open_air_festivalv3.txt", function(data) {
					document.getElementById("li").innerHTML = data;
				});
				projectInitialisationStepOne();
				$(this).css('font-style', 'italic');
				projects_id_index = 17;
				project_slides = ['url("images/estivale_open_air_festival/johanne_roten_estivale_openair_F00.jpg")',
								'url("images/estivale_open_air_festival/johanne_roten_estivale_openair_F01.jpg")',
								'url("images/estivale_open_air_festival/johanne_roten_estivale_openair_F02.jpg")'];
				project_slides_titles = ["poster detail, grey version, 895 Ã— 1280 mm, blueback paper, offset",
										"poster series, 895 Ã— 1280 mm, blueback paper, offset",
										"poster series, 895 Ã— 1280 mm, blueback paper, offset"];
				images_about = ['url("images/estivale_open_air_festival/about/johanne_roten_estivale_openair_S00.jpg")',
								'url("images/estivale_open_air_festival/about/johanne_roten_estivale_openair_S01.jpg")',
								'url("images/estivale_open_air_festival/about/johanne_roten_estivale_openair_S02.jpg")'];
				projectInitialisationStepTwo();
			});		
		//-----------------------------------------------------------------------------------------------------------------------------------------

			
			
			
			
			
		//---------------------------------------------------------------especes_dimages--------------------------------------------------------------------------
			$("#especes_dimages").click(function(){
				jQuery.get("textes/especes_dimagesv2.txt", function(data) {
					document.getElementById("li").innerHTML = data;
				});
				projectInitialisationStepOne();
				$(this).css('font-style', 'italic');
				projects_id_index = 13;
				project_slides = ['url("images/especes_dimages/johanne_roten_especes_images_F00.jpg")',
								'url("images/especes_dimages/johanne_roten_especes_images_F01.jpg")',
								'url("images/especes_dimages/johanne_roten_especes_images_F02.jpg")',
								'url("images/especes_dimages/johanne_roten_especes_images_F03.jpg")'];
				project_slides_titles = ["view of the exhibition, Geneva",
										"view of the exhibition, Geneva",
										"view of the exhibition, Geneva",
										"view of the exhibition, Geneva"];
				images_about = ['url("images/especes_dimages/about/johanne_roten_especes_images_S00.jpg")',
								'url("images/especes_dimages/about/johanne_roten_especes_images_S01.jpg")',
								'url("images/especes_dimages/about/johanne_roten_especes_images_S02.jpg")'];
				projectInitialisationStepTwo();
			});		
		//-----------------------------------------------------------------------------------------------------------------------------------------




		//---------------------------------------------------------------dada--------------------------------------------------------------------------
			$("#dada").click(function(){
				jQuery.get("textes/dadav3.txt", function(data) {
					document.getElementById("li").innerHTML = data;
				});
				projectInitialisationStepOne();
				$(this).css('font-style', 'italic');
				projects_id_index = 10;
				project_slides = ['url("images/dada/johanne_roten_dada_F00.jpg")',
								'url("images/dada/johanne_roten_dada_F02.jpg")',
								'url("images/dada/johanne_roten_dada_F03.jpg")',
								'url("images/dada/johanne_roten_dada_F04.jpg")',
								'url("images/dada/johanne_roten_dada_F05.jpg")',
								'url("images/dada/johanne_roten_dada_F06.jpg")',
								'url("images/dada/johanne_roten_dada_F07.jpg")',
								'url("images/dada/johanne_roten_dada_F08.jpg")',
								'url("images/dada/johanne_roten_dada_F09.jpg")',
								'url("images/dada/johanne_roten_dada_F10.jpg")',
								'url("images/dada/johanne_roten_dada_F11.jpg")',
								'url("images/dada/johanne_roten_dada_F12.jpg")',
								'url("images/dada/johanne_roten_dada_F14.jpg")'];
				project_slides_titles = ["poster detail, 859 Ã— 1280 mm, blueback paper, offset",
										"poster, 859 Ã— 1280 mm, blueback paper, offset",
										"12-pages newspaper, 320 Ã— 470 mm, matt paper, offset",
										"12-pages newspaper detail",
										"12-pages newspaper cover",
										"12-pages newspaper double page",
										"12-pages newspaper double page",
										"12-pages newspaper double page",
										"12-pages newspaper detail",
										"12-pages newspaper double page",
										"12-pages newspaper back cover",
										"flyer, 148 Ã— 210 mm, matt paper, digital print",
										"view of the Manor, Martigny"];
				images_about = ['url("images/dada/about/johanne_roten_dada_S00.jpg")',
								'url("images/dada/about/johanne_roten_dada_S01.jpg")',
								'url("images/dada/about/johanne_roten_dada_S02.jpg")'];
				projectInitialisationStepTwo();
			});		
		//-----------------------------------------------------------------------------------------------------------------------------------------
		
		
		
		
		
		//---------------------------------------------------------------balades_dans_le_vignoble--------------------------------------------------------------------------
			$("#balades_dans_le_vignoble").click(function(){
				jQuery.get("textes/balades_dans_le_vignoblev2.txt", function(data) {
					document.getElementById("li").innerHTML = data;
				});
				projectInitialisationStepOne();
				$(this).css('font-style', 'italic');
				projects_id_index = 14;
				project_slides = ['url("images/balades_dans_le_vignoble/johanne_roten_vignoble_F00.jpg")',
								'url("images/balades_dans_le_vignoble/johanne_roten_vignoble_F01.jpg")',
								'url("images/balades_dans_le_vignoble/johanne_roten_vignoble_F02.jpg")'];
				project_slides_titles = ["view of the exhibition, in the vineyard, Ollon",
										"view of the exhibition, in the vineyard, Ollon",
										"view of the exhibition, in the vineyard, Ollon"];
				images_about = ['url("images/balades_dans_le_vignoble/about/johanne_roten_vignoble_S00.jpg")',
								'url("images/balades_dans_le_vignoble/about/johanne_roten_vignoble_S01.jpg")',
								'url("images/balades_dans_le_vignoble/about/johanne_roten_vignoble_S02.jpg")'];
				projectInitialisationStepTwo();
			});		
		//-----------------------------------------------------------------------------------------------------------------------------------------
		
		
		
		//---------------------------------------------------------------le_fanzine--------------------------------------------------------------------------
			$("#le_fanzine").click(function(){
				jQuery.get("textes/le_fanzinev3.txt", function(data) {
					document.getElementById("li").innerHTML = data;
				});
				projectInitialisationStepOne();
				$(this).css('font-style', 'italic');
				projects_id_index = 7;
				project_slides = ['url("images/le_fanzine/johanne_roten_fanzine_F00.jpg")',
								'url("images/le_fanzine/johanne_roten_fanzine_F01.jpg")',
								'url("images/le_fanzine/johanne_roten_fanzine_F02.jpg")',
								'url("images/le_fanzine/johanne_roten_fanzine_F03.jpg")',
								'url("images/le_fanzine/johanne_roten_fanzine_F04.jpg")',
								'url("images/le_fanzine/johanne_roten_fanzine_F05.jpg")',
								'url("images/le_fanzine/johanne_roten_fanzine_F06.jpg")'];
				project_slides_titles = ["opened newspaper, 210 Ã— 297 mm, offset",
										"newspaper detail, 210 Ã— 297 mm, offset",
										"newspaper detail, 210 Ã— 297 mm, offset",
										"newspaper covers, 210 Ã— 297 mm, offset",
										"newspaper cover, 210 Ã— 297 mm, offset",
										"newspaper double page, 420 Ã— 297 mm, offset",
										"newspaper cover, 210 Ã— 297 mm, offset"];
				images_about = ['url("images/le_fanzine/about/johanne_roten_fanzine_S00.jpg")',
								'url("images/le_fanzine/about/johanne_roten_fanzine_S01.jpg")',
								'url("images/le_fanzine/about/johanne_roten_fanzine_S02.jpg")'];
				projectInitialisationStepTwo();
			});		
		//-----------------------------------------------------------------------------------------------------------------------------------------




		
		//---------------------------------------------------------------primo--------------------------------------------------------------------------
			$("#primo").click(function(){
				jQuery.get("textes/primov2.txt", function(data) {
					document.getElementById("li").innerHTML = data;
				});
				projectInitialisationStepOne();
				$(this).css('font-style', 'italic');
				projects_id_index = 11;
				project_slides = ['url("images/primo/johanne_roten_primo_F00.jpg")',
								'url("images/primo/johanne_roten_primo_F02.jpg")',
								'url("images/primo/johanne_roten_primo_F03.jpg")',
								'url("images/primo/johanne_roten_primo_F01.jpg")',
								'url("images/primo/johanne_roten_primo_F04.jpg")',
								'url("images/primo/johanne_roten_primo_F05.jpg")'];
				project_slides_titles = ["vector illustration, 270 Ã— 360 mm, silkscreen",
										"silkscreen detail",
										"silkscreen detail",
										"vector illustration, 270 Ã— 360 mm, silkscreen",
										"view of the exhibition, NeuchÃ¢tel",
										"view of the exhibition, NeuchÃ¢tel"];
				images_about = ['url("images/primo/about/johanne_roten_primo_S00.jpg")',
								'url("images/primo/about/johanne_roten_primo_S01.jpg")',
								'url("images/primo/about/johanne_roten_primo_S02.jpg")'];
				projectInitialisationStepTwo();
			});		
		//-----------------------------------------------------------------------------------------------------------------------------------------

		
		//---------------------------------------------------------------th_big_picture--------------------------------------------------------------------------
			$("#th_big_picture").click(function(){
				jQuery.get("textes/th_big_picturev2.txt", function(data) {
					document.getElementById("li").innerHTML = data;
				});
				projectInitialisationStepOne();
				$(this).css('font-style', 'italic');
				projects_id_index = 9;
				project_slides = ['url("images/th_big_picture/johanne_roten_big_picture_F00.jpg")',
								'url("images/th_big_picture/johanne_roten_big_picture_F01.jpg")',
								'url("images/th_big_picture/johanne_roten_big_picture_F03.jpg")',
								'url("images/th_big_picture/johanne_roten_big_picture_F04.jpg")'];
				project_slides_titles = ["view of the exhibition, ECAL, Renens",
										"view of the exhibition, ECAL, Renens",
										"view of the exhibition, ECAL, Renens",
										"view of the exhibition, ECAL, Renens"];
				images_about = ['url("images/th_big_picture/about/johanne_roten_big_picture_S00.jpg")',
								'url("images/th_big_picture/about/johanne_roten_big_picture_S01.jpg")',
								'url("images/th_big_picture/about/johanne_roten_big_picture_S02.jpg")'];
				projectInitialisationStepTwo();
			});		
		//--------------------------------------------------------------------------------------------------------------------
		
		


		
		
		//---------------------------------------------------------------seiler_schmidt--------------------------------------------------------------------------
			$("#seiler_schmidt").click(function(){
				jQuery.get("textes/seiler_schmidtv1.txt", function(data) {
					document.getElementById("li").innerHTML = data;
				});
				projectInitialisationStepOne();
				$(this).css('font-style', 'italic');
				projects_id_index = 15;
				project_slides = ['url("images/seiler_schmidt/johanne_roten_seiler_schmidt_F00.jpg")',
								'url("images/seiler_schmidt/johanne_roten_seiler_schmidt_F01.jpg")',
								'url("images/seiler_schmidt/johanne_roten_seiler_schmidt_F03.jpg")',
								'url("images/seiler_schmidt/johanne_roten_seiler_schmidt_F04.jpg")',
								'url("images/seiler_schmidt/johanne_roten_seiler_schmidt_F05.jpg")',
								'url("images/seiler_schmidt/johanne_roten_seiler_schmidt_F06.jpg")',
								'url("images/seiler_schmidt/johanne_roten_seiler_schmidt_F07.jpg")',
								'url("images/seiler_schmidt/johanne_roten_seiler_schmidt_F08.jpg")',
								'url("images/seiler_schmidt/johanne_roten_seiler_schmidt_F09.jpg")',
								'url("images/seiler_schmidt/johanne_roten_seiler_schmidt_F10.jpg")',
								'url("images/seiler_schmidt/johanne_roten_seiler_schmidt_F11.jpg")'];
				project_slides_titles = ["poster, 895 Ã— 1280 mm, blueback paper, offset",
										"poster detail, 895 Ã— 1280 mm, blueback paper, offset",
										"flyers, blue and grey versions, 148 Ã— 210 mm, matt paper, offset",
										"exhibition catalog cover, 210 Ã— 280 mm, matt paper, offset",
										"exhibition catalog double page, 420 Ã— 280 mm",
										"exhibition catalog double page, 420 Ã— 280 mm",
										"exhibition catalog double page, 420 Ã— 280 mm",
										"exhibition catalog double page, 420 Ã— 280 mm",
										"exhibition catalog double cover, 210 Ã— 280 mm",
										"exhibition catalog double page, 420 Ã— 280 mm",
										"exhibition catalog double page, 420 Ã— 280 mm"];
				images_about = ['url("images/seiler_schmidt/about/johanne_roten_seiler_schmidt_S00.jpg")',
								'url("images/seiler_schmidt/about/johanne_roten_seiler_schmidt_S01.jpg")',
								'url("images/seiler_schmidt/about/johanne_roten_seiler_schmidt_S02.jpg")'];
				projectInitialisationStepTwo();
			});		
		//--------------------------------------------------------------------------------------------------------------------
		

		
		
		//---------------------------------------------------------------fri_son--------------------------------------------------------------------------
			$("#fri_son").click(function(){
				jQuery.get("textes/fri_sonv2.txt", function(data) {
					document.getElementById("li").innerHTML = data;
				});
				projectInitialisationStepOne();
				$(this).css('font-style', 'italic');
				projects_id_index = 6;
				project_slides = ['url("images/fri_son/johanne_roten_frison_F00.jpg")',
								'url("images/fri_son/johanne_roten_frison_F01.jpg")',
								'url("images/fri_son/johanne_roten_frison_F02.jpg")',
								'url("images/fri_son/johanne_roten_frison_F03.jpg")',
								'url("images/fri_son/johanne_roten_frison_F04.jpg")'];
				project_slides_titles = ["booklet cover, 210 Ã— 297 mm, matt paper, offset",
										"booklet double page, 420 Ã— 297 mm, matt paper, offset",
										"booklet double page, 420 Ã— 297 mm, matt paper, offset",
										"booklet double page, 420 Ã— 297 mm, matt paper, offset",
										"booklet double page, 420 Ã— 297 mm, matt paper, offset"];
				images_about = ['url("images/fri_son/about/johanne_roten_frison_S00.jpg")',
								'url("images/fri_son/about/johanne_roten_frison_S01.jpg")',
								'url("images/fri_son/about/johanne_roten_frison_S02.jpg")'];
				projectInitialisationStepTwo();
			});		
		//--------------------------------------------------------------------------------------------------------------------
		
		
		
		
		
		
		//---------------------------------------------------------------dakar_martigny--------------------------------------------------------------------------
			$("#dakar_martigny").click(function(){
				jQuery.get("textes/dakar_martignyv4.txt", function(data) {
					document.getElementById("li").innerHTML = data;
				});
				projectInitialisationStepOne();
				$(this).css('font-style', 'italic');
				projects_id_index = 12;
				project_slides = ['url("images/dakar_martigny/johanne_roten_dakar_F00.jpg")',
								'url("images/dakar_martigny/johanne_roten_dakar_F01.jpg")',
								'url("images/dakar_martigny/johanne_roten_dakar_F02.jpg")',
								'url("images/dakar_martigny/johanne_roten_dakar_F03.jpg")',
								'url("images/dakar_martigny/johanne_roten_dakar_F04.jpg")',
								'url("images/dakar_martigny/johanne_roten_dakar_F05.jpg")',
								'url("images/dakar_martigny/johanne_roten_dakar_F06.jpg")'];
				project_slides_titles = ["exhibition catalog cover, 200 Ã— 260 mm, glossy paper, offset",
										"exhibition catalog double page, 400 Ã— 260 mm",
										"exhibition catalog double page, 400 Ã— 260 mm",
										"exhibition catalog double page, 400 Ã— 260 mm",
										"exhibition catalog double page, 400 Ã— 260 mm",
										"exhibition catalog double page, 400 Ã— 260 mm",
										"totebag detail, cotton, silkscreen"];
				images_about = ['url("images/dakar_martigny/about/johanne_roten_dakar_S00.jpg")',
								'url("images/dakar_martigny/about/johanne_roten_dakar_S01.jpg")',
								'url("images/dakar_martigny/about/johanne_roten_dakar_S02.jpg")'];
				projectInitialisationStepTwo();
			});		
		//--------------------------------------------------------------------------------------------------------------------
		
		
		
		
		//---------------------------------------------------------------triennale--------------------------------------------------------------------------
			$("#triennale").click(function(){
				jQuery.get("textes/triennale_valais_wallis_2017v1.txt", function(data) {
					document.getElementById("li").innerHTML = data;
				});
				projectInitialisationStepOne();
				$(this).css('font-style', 'italic');
				projects_id_index = 18;
				project_slides = ['url("images/triennale/johanne_roten_T17_F00.jpg")',
								'url("images/triennale/johanne_roten_T17_F01.jpg")',
								'url("images/triennale/johanne_roten_T17_F02.jpg")',
								'url("images/triennale/johanne_roten_T17_F03.jpg")',
								'url("images/triennale/johanne_roten_T17_F06.jpg")',
								'url("images/triennale/johanne_roten_T17_F07.jpg")',
								'url("images/triennale/johanne_roten_T17_F08.jpg")',
								'url("images/triennale/johanne_roten_T17_F09.jpg")',
								'url("images/triennale/johanne_roten_T17_F10.jpg")',
								'url("images/triennale/johanne_roten_T17_F11.jpg")',
								'url("images/triennale/johanne_roten_T17_F15.jpg")',
								'url("images/triennale/johanne_roten_T17_F16.jpg")',
								'url("images/triennale/johanne_roten_T17_F17.jpg")',
								'url("images/triennale/johanne_roten_T17_F20.jpg")',
								'url("images/triennale/johanne_roten_T17_F21.jpg")',
								'url("images/triennale/johanne_roten_T17_F22.jpg")',
								'url("images/triennale/johanne_roten_T17_F23.jpg")',
								'url("images/triennale/johanne_roten_T17_F25.jpg")',
								'url("images/triennale/johanne_roten_T17_F26.jpg")',
								'url("images/triennale/johanne_roten_T17_F28.jpg")',
								'url("images/triennale/johanne_roten_T17_F29.jpg")',
								'url("images/triennale/johanne_roten_T17_F30.jpg")',
								'url("images/triennale/johanne_roten_T17_F31.jpg")',
								'url("images/triennale/johanne_roten_T17_F32.jpg")'];
				project_slides_titles = ["stickers, 100 Ã— 40 mm, glossy paper, offset",
										"booklet institutions, 97 Ã— 205 mm, matt paper, offset",
										"booklet institutions double page, 194 Ã— 205 mm, matt paper, offset",
										"booklet institutions double page, 194 Ã— 205 mm, matt paper, offset",
										"two sided flyer, 148 Ã— 210 mm, matt paper, digital print",
										"opened flyer, 148 Ã— 210 mm, matt paper, digital print",
										"TRIENNALE 2017 map, 100 Ã— 205 mm, matt paper, offset",
										"TRIENNALE 2017 opened map, 100 Ã— 205 mm, matt paper, offset",
										"exhibition catalog, book 1 cover, 140 Ã— 210 mm, matt paper, offset",
										"exhibition catalog, book 1 double page, 280 Ã— 210 mm",
										"exhibition catalog, book 1 double page, 280 Ã— 210 mm",
										"exhibition catalog, book 1 double page, 280 Ã— 210 mm",
										"exhibition catalog, book 1 double page, 280 Ã— 210 mm",
										"exhibition catalog, book 1 double page, 280 Ã— 210 mm",
										"exhibition catalog, book 1 detail",
										"exhibition catalog, book 1 double page, 280 Ã— 210 mm",
										"exhibition catalog, book 1 double page, 280 Ã— 210 mm",
										"exhibition catalog, book 2 cover, 140 Ã— 210 mm, matt paper, offset",
										"exhibition catalog, book 2 double page, 280 Ã— 210 mm",
										"exhibition catalog, book 2 double page, 280 Ã— 210 mm",
										"exhibition catalog, book 2 double page, 280 Ã— 210 mm",
										"exhibition catalog, book 2 double page, 280 Ã— 210 mm",
										"exhibition catalog, book 2 double page, 280 Ã— 210 mm",
										"poster series, 895 Ã— 1980 mm, blueback paper, silkscreen"];
				images_about = ['url("images/triennale/about/johanne_roten_T17_S00.jpg")',
								'url("images/triennale/about/johanne_roten_T17_S01.jpg")',
								'url("images/triennale/about/johanne_roten_T17_S02.jpg")'];
				projectInitialisationStepTwo();
			});		
		//--------------------------------------------------------------------------------------------------------------------
		
		
		
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
			var interval = window.setInterval(slideshow, 5000);
			var main_project_images = ['url("images/book/johanne_roten_book_SF")',
									'url("images/balades_dans_le_vignoble/johanne_roten_vignoble_SF.jpg")',
									'url("images/black_list/johanne_roten_black_list_SF.jpg")',
									'url("images/buffalo66/johanne_roten_buffalo66_SF.jpg")',
									'url("images/cause_effet/johanne_roten_causeeffet_SF.jpg")',
									'url("images/dada/johanne_roten_dada_SF.jpg")',
									'url("images/dakar_martigny/johanne_roten_dakar_SF.jpg")',
									'url("images/especes_dimages/johanne_roten_especes_images_SF.jpg")',
									'url("images/estivale_open_air_festival/johanne_roten_estivale_openair_SF.jpg")',
									'url("images/fri_son/johanne_roten_frison_SF.jpg")',
									'url("images/hors_jeu/johanne_roten_horsjeu_SF.jpg")',
									'url("images/le_fanzine/johanne_roten_fanzine_SF.jpg")',
									'url("images/memory/johanne_roten_memory_SF.jpg")',
									'url("images/primo/johanne_roten_primo_SF.jpg")',
									'url("images/seiler_schmidt/johanne_roten_seiler_schmidt_SF.jpg")',
									'url("images/supernova_martigny/johanne_roten_supernova_SF.jpg")',
									'url("images/th_big_picture/johanne_roten_big_picture_SF.jpg")',
									'url("images/totally_drunk/johanne_roten_totallydrunk_SF.jpg")',
									'url("images/tristes_anthropiques/johanne_roten_tristes_anthropiques_SF.jpg")',
									'url("images/triennale/johanne_roten_T17_SF00.jpg")'];
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