function getTitle(index){
	title=["Nuwa","Info Visualization","Social Computing","Michigan Legal Help",'USGS GLSC','Graphic Design']
	$('#header-project h4').html(title[index])
}
function getContent(index){
	projectindex=index
	fileurl='project/'+index+'.html'
	$(".project-content").load(fileurl)

}
window.onload=function(){
	projectindex=0
	// Fixed Top
	$(document).scroll(function(){
		if ($(this).scrollTop()>700){
			$('#header-navbar').removeClass('navbar-static-top')
			$('#header-navbar').addClass('navbar-fixed-top')
			$('body').css("margin-top","60px")
		}
		else{
			$('#header-navbar').removeClass('navbar-fixed-top')
			$('#header-navbar').addClass('navbar-static-top')
			$('body').css('margin-top',0)
		}});
	// scrolldown
	$('.scrolldown').hover(function(){
		$('.scrolldown').animate({
			'background-position-y':'70px'
		},70,'linear')
		$('.scrolldown').animate({
			'background-position-y':'50px'
		},30,'linear')
		$('.scrolldown').animate({
			'background-position-y':'70px'
		},30,'linear')
		

	},function(){
		$('.scrolldown').animate({
			'background-position-y':'40px'
		},50,'linear')

	});

	// Work header
	var scrollflag1=$('.section-header-1').offset().top-60;
	$(document).scroll(function(){
		if ($(this).scrollTop()<scrollflag1){
			var height=$(this).scrollTop()
			percentage1=(height-0)/(scrollflag1-0)*90+'%'
			// console.log(height)
			$('.section-header-1').css('background-position-y',percentage1)
		}
		else if($(this).scrollTop()>scrollflag1){
			$('.section-header-1').css('background-position-y','90%')
		}
	});
	// About header
	var scrollflag2=$('.section-header-2').offset().top-60;
	$(document).scroll(function(){
		if ($(this).scrollTop()<scrollflag2&&$(this).scrollTop()>scrollflag1){
			var height=$(this).scrollTop()
			// console.log((height-scrollflag1)/(scrollflag2-scrollflag1)*300)
			percentage2=(height-scrollflag1)/(scrollflag2-scrollflag1)*90+'%'
			$('.section-header-2').css('background-position-y',percentage2)
		}
		else if($(this).scrollTop()>scrollflag2){
			$('.section-header-2').css('background-position-y','90%')
		}
	});

	//Contact header
	var scrollflag3=$('.section-header-3').offset().top-60;
	$(document).scroll(function(){
		if ($(this).scrollTop()<scrollflag3&&$(this).scrollTop()>scrollflag2){
			var height=$(this).scrollTop()
			percentage3=(height-scrollflag2)/(scrollflag3-scrollflag2)*90+'%'
			$('.section-header-3').css('background-position-y',percentage3)
		}
		else if($(this).scrollTop()>scrollflag3){
			$('.section-header-3').css('background-position-y','90%')
		}
	});

	// Scroll to section
	$(document).ready(function(){
		$('a[href^="#"]').on('click',function (e) {
		    e.preventDefault();

		    var target = this.hash;
		    $target = $(target);

		    $('html, body').stop().animate({
		        'scrollTop': $target.offset().top-60
		    }, 900, 'swing', function () {
		        window.location.hash = target;
		    });
		});
	});

	// Navi Menu Selection
	$(document).scroll(function(){
		if($(this).scrollTop()<scrollflag1-20){
			naviSelection(4)
		}
		else if ($(this).scrollTop()<scrollflag2-20&&$(this).scrollTop()>=scrollflag1-20){
			naviSelection(0)
		}
		else if($(this).scrollTop()<scrollflag3-20&&$(this).scrollTop()>=scrollflag2-20){
			naviSelection(1)
		}
		else{
			naviSelection(2)
		}

	});

	// Brand Button
	$(document).scroll(function(){
		if($(this).scrollTop()<scrollflag1){
			$('#brand-button').css('display','none');
		}
		else{
			if($('#brand-button').css('display')=='none'){
				$('#brand-button').css({
					'display':'inline',
					'left':'-120px'
				});
				$('#brand-button').animate({
				'left':'10px'
				},150,'linear')
				$('#brand-button').animate({
				'left':'0px'
				},50,'linear')

			}
			
			
		}
	})

	// Project-list
	$('.project-list').each(function(){
		$(this).hover(function(){
			$(this).find('.project-detail').animate({
			'opacity':'1'
		},300,'linear')},function(){
			$(this).find('.project-detail').animate({'opacity':'0'},200,'swing');
		})
	});

	$('.project-list').each(function(index){
		$(this).click(function(){
			// console.log(index)
			getTitle(index)
			getContent(index)
			location.href='#works-section'
			$('#project-fixed').css('display','inline')
			$('#project-fixed').animate({
			'opacity':'1'
		},300,'linear')
			$('body').css('overflow','hidden')
		})
	});
	$('#fixed-close').hover(function(){
		$(this).animate({
			width:'40px',
			top:'60px',
			left:'-20px'

		},100,'swing')
	},function(){
			$(this).animate({
				width:'36px',
				top:'62px',
				left:'-18px'
			},50,'linear')
		});
	$('#fixed-close').click(function(){
		location.href='#works-section'
		
		$('#project-fixed').animate({
			'opacity':'0'
		},300,'linear',function(){
			$(this).css('display','none')
		})
		$('body').css('overflow','visible')

	});
	//project Arrow

	$(".arrowleft").hover(function(){
		$(this).animate({
			'background-position-y':'8px'
		},100,'swing')
	},function(){
		$(this).animate({
			'background-position-y':'10px'
		},100,'swing')
	});
	$(".arrowleft").click(function(){
		if (projectindex==0){
			projectindex=5
		}
		else{
			projectindex=projectindex-1
		}
		getContent(projectindex)
		getTitle(projectindex)
	})
	$(".arrowright").click(function(){
		if (projectindex==5){
			projectindex=0
		}
		else{
			projectindex=projectindex+1
		}
		getContent(projectindex)
		getTitle(projectindex)
	})

	$(".arrowright").hover(function(){
		$(this).animate({
			'background-position-y':'8px'
		},100,'swing')
	},function(){
		$(this).animate({
			'background-position-y':'10px'
		},100,'swing')
	});

	// Resume Arrow
	setTimeout(function(){
		if ($(document).scrollTop()<700){
			$('.resume').animate({
				'top':'-147px'
			},300,'swing',function(){
				setTimeout(function(){
					$(document).scroll(function(){
						$('.resume').animate({
							'height':'0',
							'top':'0',
							'opacity':'0'
						},500,'linear')
					})
				},3000)
				
			})
		}
	},3000)

	var dataset = {
		skill:  ['UX Design','Web Develop','UX Research','Data'],
	  	percent: [32,38,22,8],
	  	added:[0,32,70,92,100],
	  	color:["url(#grad0)","url(#grad1)","url(#grad2)","url(#grad3)"],
	  	degree:[245,65,107,137],
	  	text:[['Designing is always an interesting and',' creative work. I like to design impressive','things to improve the Usability, ease of',' use, and pleasure provided in the',' interaction with customers.']
	  			,['Web Development gives me a lot of',' fun for I can use my both front-end',' and back-end knowledge to implement',' amazing design and innovation ideas.']
	  			,['UX Research helps me understand how',' to meet the exact needs of the customers','and design them in a way that is easy','and joyful to use.']
	  			,['Data Science is not only some numbers',' for me, but also provides me another',' view to reconsider the world, especially',' when Big Data is coming.']
	  			]
	}

	var skillset= [
	{skill:'Wireframe',category:'UX Design',level:4},{skill:'Axure',category:'UX Design',level:4},
	{skill:'Balsamiq',category:'UX Design',level:3},{skill:'OmniGraffle',category:'UX Design',level:2},
	{skill:'Photoshop',category:'UX Design',level:4},{skill:'Illustrator',category:'UX Design',level:4},
	{skill:'HTML5',category:'Develop',level:4},{skill:'CSS3',category:'Develop',level:4},
	{skill:'Js/JQuery',category:'Develop',level:4},{skill:'PHP',category:'Develop',level:4},
	{skill:'SQL Database',category:'Develop',level:3},{skill:'Python',category:'Develop',level:4},
	{skill:'Java/Android',category:'Develop',level:2},{skill:'Contextual Ineqiry',category:'UX Research',level:4},
	{skill:'Usability Test',category:'UX Research',level:3},{skill:'Persona & Scenario',category:'UX Research',level:3},
	{skill:'Survey',category:'UX Research',level:4},{skill:'Heuristic Evaluation',category:'UX Research',level:2},
	{skill:'D3/SVG',category:'Data',level:4},{skill:'SPSS',category:'Data',level:2},
	{skill:'R',category:'Data',level:2}
	]

	var yAxisSet=[{tag:'Excellent',y:200},{tag:'Great',y:150},
				  {tag:'Good',y:100},{tag:'Familiar',y:50}]

	var width = 960
		oheight=400
	    height = 700,
	    radius = 180;
	    centerX= 170;
	    gwidth=width*0.9

	var pie = d3.layout.pie()
	    .sort(null);

	var arc = d3.svg.arc()
	    .innerRadius(radius - 140)
	    .outerRadius(radius - 50);
	var arc1=d3.svg.arc()
	    		.innerRadius(radius-179)
	    		.outerRadius(radius-25);
	//var color = d3.scale.category20();    		
	function color(i){
		if (i==0){return "#964111"}
		if (i==1){return "#2d3282"}
		if (i==2){return "#3c703b"}
		if (i==3){return "#cca62e"}
	}

	var svg = d3.select("#skill-visualization").append("svg")
	    .attr("width", width)
	    .attr("height", oheight)
	//Radius Gradient color
	var grads = svg.append("defs").selectAll("radialGradient").data(dataset.skill)
	    .enter().append("radialGradient")
	    .attr("gradientUnits", "userSpaceOnUse")
	    .attr("cx", 0)
	    .attr("cy", 0)
	    .attr("r", radius)
	    .attr("id", function(d, i) { return "grad" + i; })
	    // .attr("transform", "translate("+width/2+",220)");

	grads.append("svg:stop")
	    .attr("offset", "0%")
	    .attr("stop-color", "#FFF")
	    .attr("stop-opacity", 0.8);

	grads.append("svg:stop")
	    .attr("offset", "100%")
	    .attr("stop-color", function(d,i){
	    	return color(i)
	    })
	    .attr("stop-opacity", 0.8);
	//Linear Gradient Color
	var lgrads = svg.append("defs").selectAll("linearGradient").data(dataset.skill)
	    .enter().append("linearGradient")
	    .attr("x1", '50%')
	    .attr("x2", '50%')
	    .attr("y1", '-30%')
	    .attr("y2", '100%')
	    .attr("spreadMethod", "pad")
	    .attr("id", function(d, i) { return "lgrad" + i; })
	    // .attr("transform", "translate("+width/2+",220)");

	lgrads.append("svg:stop")
	    .attr("offset", "0%")
	    .attr("stop-color", function(d,i){
	    	return color(i)
	    })
	    .attr("stop-opacity", 0.8);

	lgrads.append("svg:stop")
	    .attr("offset", "130%")
	    .attr("stop-color", '#FFF')
	    .attr("stop-opacity", 0.8);


	var circlegroup= svg.append('g')
			
	// Rotated Circle

	var path = circlegroup.append('g').selectAll("path")
	    .data(pie(dataset.percent))
	    .enter().append("path")
	    .attr("fill", function(d, i) {return dataset.color[i]})
	    .attr("d", arc)
	    .attr("transform", "translate("+width/2+",220)")
	    .attr('class',function(d,i){return "path"+i})
	//Out Circle
	var outcircle= circlegroup.append('g')
	for (var i = 0; i < dataset.percent.length; i++) {
		idx=i+1
		// console.log(dataset.added[i]/100)
		arcs=d3.svg.arc()
			.innerRadius(radius-20)
			.outerRadius(radius-15)
			.startAngle(((dataset.added[i]+1)/100)*2*(Math.PI))
			.endAngle(((dataset.added[i+1]-1)/100)*2*(Math.PI))
		outcircle.append("path")
			.attr('d',arcs)
			.attr('fill','#494949')
			.attr("transform", "translate("+width/2+",220)")
	};

	var ourcir=outcircle.append('circle')
				.attr('cx',0)
				.attr('cy',0).attr('r',radius-2)
				.style('stroke-width',3)
				.style('stroke','#494949').style('fill','none')
				.attr("transform","translate("+width/2+",220)")

	//Text in path
	var skillTextGroups = circlegroup.append('g').selectAll("g")
	    .data(pie(dataset.percent))
	    .enter().append('g')
	    .attr("transform", "translate("+width/2+",220)")

	var skillText=skillTextGroups.append('text')
		.text(function(d,i){return dataset.skill[i]})
		.attr("transform", function(d) {
			return "translate(" + arc.centroid(d) + ")"; })
    	.attr("text-anchor", "middle")
    	.style({'cursor':'default'})
    	.attr("font-family", "sans-serif")
        .attr("font-size", "15px")
        .attr("fill", "#494949")

   	// Text on the right

   	var DetailTextGroup = circlegroup.append('g')
   	var DetailText = DetailTextGroup.selectAll('g')
		.data(dataset.text)
		.enter().append('g')
        .attr("transform", function(d,i){
        	j=(parseInt(i/2)*2-1)*300+width/2-115
        	k=(i%2*2-1)*105+180
        	return "translate("+j+","+k+")"
        })
        .attr('class',function(d,i){return "text"+i})
    DetailTexts=DetailText.selectAll('text').data(function(d){return d}).enter().append('text')
    	.text(function(d,i){return d})
    	.attr('x',0).attr('y',function(d,i){return i*25})
    	.style({'cursor':'default'})
    	.attr("font-family", "sans-serif")
        .attr("font-size", "15px")
        .attr("fill", "#e8ede8")
        .attr('opacity','0')


    //Animation
    path.transition().delay(100).duration(400)
    	.attr('transform','translate('+width/2+',220)rotate(120)')

    skillTextGroups.transition().duration(400).delay(100).attr('transform','translate('+width/2+',220)rotate(120)')
    skillText.transition().duration(400).delay(100).attr("transform", function(d) {
			return "translate(" + arc.centroid(d) + ")rotate(240)"; })

    outcircle.selectAll('path').transition().duration(400).delay(100).attr('transform','translate('+width/2+',220)rotate(120)')

    //Click
	path.on('click',function(d,i){
		$('#skill-visualization').animate({
				'height':'700px'
				},150,'linear')
		degree=dataset.degree[i]
		path.transition().duration(400)
			.attr('d',arc)
			.attr('transform','translate('+width/2+',220)rotate('+degree+')')
		skillTextGroups.transition().duration(400).attr('transform','translate('+width/2+',220)rotate('+degree+')')
	    skillText.transition().duration(350).attr("transform", function(d) {
	    		deg=360-degree
				return "translate(" + arc.centroid(d) + ")rotate("+deg+")"; })
	    outcircle.selectAll('path').transition().duration(400).attr('transform','translate('+width/2+',220)rotate('+degree+')')
		svg.transition().duration(200).attr('height',height)
		d3.select(this).transition().duration(400).delay(400).attr('d',arc1)
		idx=i
		bargroup.selectAll('rect')
			.attr('fill',function(d){
				category=''
				if (idx==0){category='UX Design'}
				if (idx==1){category='Develop'}
				if (idx==2){category='UX Research'}
				if (idx==3){category='Data'}
	        	if (d.category!=category) {return "#e8ede8"}
	        	if (d.category=='UX Design') {return "url('#lgrad0')"}
	        	if (d.category=='Develop') {return "url('#lgrad1')"}
	        	if (d.category=='UX Research') {return "url('#lgrad2')"} 
	        	if (d.category=='Data') {return "url('#lgrad3')"}     	
	        })
	    DetailTexts.transition().attr('opacity','1').attr('fill','#e8ede8')
	    classname='.text'+idx
	    d3.select(classname).selectAll('text').transition().attr('fill','#494949').attr('opacity','1').attr('textShadow','0px 1px 1px #fff')
		})
	
	DetailText.on('click',function(d,i){
		$('#skill-visualization').animate({
				'height':'700px'
				},150,'linear')
		degree=dataset.degree[i]
		path.transition().duration(400)
			.attr('d',arc)
			.attr('transform','translate('+width/2+',220)rotate('+degree+')')
		skillTextGroups.transition().duration(400).attr('transform','translate('+width/2+',220)rotate('+degree+')')
	    skillText.transition().duration(350).attr("transform", function(d) {
	    		deg=360-degree
				return "translate(" + arc.centroid(d) + ")rotate("+deg+")"; })
	    outcircle.selectAll('path').transition().duration(400).attr('transform','translate('+width/2+',220)rotate('+degree+')')
		svg.transition().duration(200).attr('height',height)
		pathname=".path"+i
		console.log(d3.select(pathname))
		d3.select(pathname).transition().duration(400).delay(400).attr('d',arc1)
		idx=i
		bargroup.selectAll('rect')
			.attr('fill',function(d){
				category=''
				if (idx==0){category='UX Design'}
				if (idx==1){category='Develop'}
				if (idx==2){category='UX Research'}
				if (idx==3){category='Data'}
	        	if (d.category!=category) {return "#e8ede8"}
	        	if (d.category=='UX Design') {return "url('#lgrad0')"}
	        	if (d.category=='Develop') {return "url('#lgrad1')"}
	        	if (d.category=='UX Research') {return "url('#lgrad2')"} 
	        	if (d.category=='Data') {return "url('#lgrad3')"}     	
	        })
	    DetailTexts.transition().attr('opacity','1').attr('fill','#e8ede8')
	    classname='.text'+idx
	    d3.select(classname).selectAll('text').transition().attr('fill','#494949').attr('opacity','1').attr('text-shadow','0px 1px 1px #fff')

	})
	

	
	//Mouse Enter

	// path.on('mouseenter',function(d,i){
	// 	d3.select(this).attr('fill','#DDD')
	// })
	// path.on('mouseleave',function(d,i){
	// 		d3.select(this).attr('fill',function(){return dataset.color[i]})
	// 	})

	// Lower Part	
	var bargroup = d3.select('svg').append('g')
					 .attr('transform','translate(80,400)')


   	
   	//Add Axis
   	var xAxis=bargroup.append('line')
   		.attr('x1','-10').attr('x2',gwidth-10)
   		.attr('y1','220').attr('y2','220')
   		.attr('stroke-width',2)
   		.attr('stroke','rgba(255,255,255,0.9)');

   	// var yAxis=bargroup.append('line')
   	// 	.attr('x1','-10').attr('x2','-10')
   	// 	.attr('y1','220').attr('y2','10')
   	// 	.attr('stroke-width',2)
   	// 	.attr('stroke','rgba(255,255,255,0.9)');

   

   	bargroup.append('g').selectAll("text").data(yAxisSet)
   		.enter().append('text')
   		.attr('x',-75).attr('y',function(d){return 215-d.y})
   		.text(function(d){return d.tag})
        .attr("font-family", "sans-serif")
        .attr("font-size", "14px")
        .attr("fill", "#494949");

    bargroup.append('g').selectAll('line').data(yAxisSet)
    	.enter().append('line')
    	.attr('x1',0).attr('x2',gwidth-10)
    	.attr('y1',function(d){return 215-d.y}).attr('y2',function(d){return 215-d.y})
    	.style('stroke-width','2')
    	.style('stroke','rgba(255,255,255,0.6)')
        .style("stroke-dasharray", ("3, 3"))
    // skill bar
    var bars = bargroup.selectAll('rect')
		.data(skillset)
		.enter().append('rect')
		.attr("x", function(d,i){return i*40})
  		.attr("y", function(d,i){return 215-d.level*50})                           
  		.attr("width", 38)
        .attr("height", function(d,i){return d.level*50})
        .attr('fill','#e8ede8')
     var xAxisText=bargroup.append('g').selectAll('text').data(skillset)
    	.enter().append("text")
    	.attr('x','30')
    	.attr('y','0')
   		.text(function(d,i){return d.skill})
        .attr("font-family", "sans-serif")
        .attr("font-size", "14px")
        .attr("fill", "#494949")
        .attr('transform',function(d,i){
        	xText=i*40+25
        	return 'translate('+xText+',240)rotate(-90)'});

    $( "#messageform" ).submit(function( event ) {
	  event.preventDefault();
	  var data = $(this).serializeArray();
	  var formData = {name:data[0].value,email:data[1].value,message:data[2].value}
	  $.ajax({
	  	url:'contact.php',
	  	type:"POST",
	  	data:formData,
	  	success: function(data, textStatus, jqXHR)
	    {
	        //data - response from server
	        $('#submit-button').removeClass('btn-primary')
	        $('#submit-button').addClass('btn-success')
	        $('#submit-button').addClass('disabled')
	        $('#submit-button').html('Successful')
	    },
	    error: function (jqXHR, textStatus, errorThrown)
	    {
	 		$('#submit-button').removeClass('btn-primary')
	        $('#submit-button').addClass('btn-fail')
	        $('#submit-button').html('Sorry, Something wrong happened')
	    }

	  })
	});
};

$(window).load(function(){
   // PAGE IS FULLY LOADED  
   // FADE OUT YOUR OVERLAYING DIV
   $('#loading-loader').fadeOut(400)
   $('#overlay>h3').fadeOut(400)
   $('#overlay').delay(400).fadeOut(800);

});

function naviSelection(idx){
	if (idx==4){
		$('#navi-button>li').each(function(){
			if ($(this).hasClass('active')){
				$(this).removeClass('active')
			}
		})
	}
	else{
		$('#navi-button>li').each(function(){
			if ($(this).hasClass('active')){
				$(this).removeClass('active')
			}
		})
		$('#navi-button>li').eq(idx).addClass('active')
	}
	
}


