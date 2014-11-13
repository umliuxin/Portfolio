window.onload=function(){
	var dataset = {
		skill:  ['Develop','Design','Data'],
	  	percent: [45, 40, 15],
	  	colors:['#FFFD83','#FF6A6A','#4096CC'],
	  	added:[0,45,85,100]
	}

	var skillset= [
	{skill:'Illustrator',category:'Develop',level:4},{skill:'Photoshop',category:'Develop',level:4},
	{skill:'Photoshop',category:'Develop',level:3},{skill:'Photoshop',category:'Develop',level:2},
	{skill:'Photoshop',category:'Develop',level:2},{skill:'Photoshop',category:'Develop',level:3},
	{skill:'Photoshop',category:'Design',level:1},{skill:'Photoshop',category:'Develop',level:1},
	{skill:'Photoshop',category:'Design',level:3},{skill:'Photoshop',category:'Develop',level:2},
	{skill:'Photoshop',category:'Design',level:2},{skill:'Photoshop',category:'Data',level:3},
	{skill:'Photoshop',category:'Data',level:1},{skill:'Photoshop',category:'Data',level:1}
	]

	var yAxisSet=[{tag:'Excellent',y:200},{tag:'Great',y:150},
				  {tag:'Good',y:100},{tag:'Familiar',y:50}]

	var width = 900,
	    height = 700,
	    radius = 180;
	    centerX= 170;
	    gwidth=700


	var pie = d3.layout.pie()
	    .sort(null);

	var arc = d3.svg.arc()
	    .innerRadius(radius - 120)
	    .outerRadius(radius - 50);

	var svg = d3.select("#visualization").append("svg")
	    .attr("width", width)
	    .attr("height", height)
	    

	var circlegroup= svg.append('g')
			
	// Rotated Circle

	var path = circlegroup.append('g').selectAll("path")
	    .data(pie(dataset.percent))
	    .enter().append("path")
	    .attr("fill", function(d, i) {return dataset.colors[i]})
	    .attr("d", arc)
	    .attr("transform", "translate(200,220)")


	// Vertical Line
	var vline = circlegroup.append('g').selectAll('line').data(dataset.added)
				.enter().append('line')
				.attr('x1',function(d,i){return d*gwidth/100+70}).attr('x2',function(d){return d*gwidth/100+70})
		   		.attr('y1','50').attr('y2','360')
		   		.style('stroke-width','2')
		    	.style('stroke','rgba(255,255,255,0.6)')
		        .style("stroke-dasharray", ("3, 3"))
	
	var skillTextGroups = circlegroup.append('g').selectAll("g")
	    .data(pie(dataset.percent))
	    .enter().append('g')
	    .attr("transform", "translate(200,220)")

	var skillText=skillTextGroups.append('text')
		.text(function(d,i){return dataset.skill[i]})
		.attr("transform", function(d) {
			return "translate(" + arc.centroid(d) + ")"; })
    	.attr("text-anchor", "middle")

    path.transition().delay(100)
    	.attr('transform','translate(200,220)rotate(120)')

    skillTextGroups.transition().delay(100).attr('transform','translate(200,220)rotate(120)')
    skillText.transition().delay(100).attr("transform", function(d) {
			return "translate(" + arc.centroid(d) + ")rotate(240)"; })

	path.on('click',function(d,i){
		pwidth=200+i*200
		protate=0
		d3.selectAll("path").transition().attr('transform','translate('+pwidth+',220)rotate('+90*i+')')
		})
		.on('mouseenter',function(){
			arc1=d3.svg.arc()
	    		.innerRadius(0)
	    		.outerRadius(radius - 50);
			d3.select(this).transition().attr('d',arc1);
			arc1=d3.svg.arc()
	    		.innerRadius(0)
	    		.outerRadius(radius-25);
			d3.select(this).transition().delay(200).attr('d',arc1)


		})
		.on('mouseout',function(){
			d3.select(this).transition().attr('d',arc)
		})




	// Lower Part	
	var bargroup = d3.select('svg').append('g')
					 .attr('transform','translate(80,370)')


   	
   	//Add Axis
   	var xAxis=bargroup.append('line')
   		.attr('x1','-10').attr('x2',gwidth-10)
   		.attr('y1','220').attr('y2','220')
   		.attr('stroke-width',2)
   		.attr('stroke','rgba(255,255,255,0.9)');

   	var yAxis=bargroup.append('line')
   		.attr('x1','-10').attr('x2','-10')
   		.attr('y1','220').attr('y2','10')
   		.attr('stroke-width',2)
   		.attr('stroke','rgba(255,255,255,0.9)');

    var xAxisText=bargroup.append('g').selectAll('text').data(skillset)
    	.enter().append("text")
    	.attr('x','20')
    	.attr('y','0')
   		.text(function(d,i){return d.skill})
        .attr("font-family", "sans-serif")
        .attr("font-size", "14px")
        .attr("fill", "white")
        .attr('transform',function(d,i){return 'translate('+i*45+',240)rotate(45)'});

   	bargroup.append('g').selectAll("text").data(yAxisSet)
   		.enter().append('text')
   		.attr('x',-75).attr('y',function(d){return 215-d.y})
   		.text(function(d){return d.tag})
        .attr("font-family", "sans-serif")
        .attr("font-size", "14px")
        .attr("fill", "white");

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
		.attr("x", function(d,i){return i*45})
  		.attr("y", function(d,i){return 215-d.level*50})                           
  		.attr("width", 40)
        .attr("height", function(d,i){return d.level*50})
        .attr('fill',function(d){
        	if (d.category=='Design') {return "#FFFD83"}
        	if (d.category=='Develop') {return "#FF6A6A"}
        	if (d.category=='Data') {return "#4096CC"} 
        })

}