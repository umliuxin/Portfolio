window.onload=function(){
	var dataset = {
		skill:  ['UX Design','Web Develop','UX Research','Data'],
	  	percent: [32,38,22,8],
	  	added:[0,32,70,92,100],
	  	color:["url(#grad0)","url(#grad1)","url(#grad2)","url(#grad3)"],
	  	degree:[245,65,107,137]
	 	}


	var width = 480
		oheight=400
	    height = 400,
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
	var color = d3.scale.category20();    		


	var svg = d3.select("#narrow-skill-visualization").append("svg")
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
	    .attr("stop-opacity", 1);
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
	    .attr("stop-color", "#FFF")
	    .attr("stop-opacity", 0.8);

	lgrads.append("svg:stop")
	    .attr("offset", "100%")
	    .attr("stop-color", function(d,i){
	    	return color(i)
	    })
	    .attr("stop-opacity", 0.9);


	var circlegroup= svg.append('g')
			
	// Rotated Circle

	var path = circlegroup.append('g').selectAll("path")
	    .data(pie(dataset.percent))
	    .enter().append("path")
	    .attr("fill", function(d, i) {return dataset.color[i]})
	    .attr("d", arc)
	    .attr("transform", "translate("+width/2+",220)")
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
        .attr("fill", "#666")


    //Animation
    path.transition().delay(100)
    	.attr('transform','translate('+width/2+',220)rotate(120)')

    skillTextGroups.transition().delay(100).attr('transform','translate('+width/2+',220)rotate(120)')
    skillText.transition().delay(100).attr("transform", function(d) {
			return "translate(" + arc.centroid(d) + ")rotate(240)"; })

    outcircle.selectAll('path').transition().delay(100).attr('transform','translate('+width/2+',220)rotate(120)')

    //Click
	path.on('click',function(d,i){
		degree=dataset.degree[i]
		path.transition().duration(200)
			.attr('d',arc)
			.attr('transform','translate('+width/2+',220)rotate('+degree+')')
		skillTextGroups.transition().duration(200).attr('transform','translate('+width/2+',220)rotate('+degree+')')
	    skillText.transition().duration(150).attr("transform", function(d) {
	    		deg=360-degree
				return "translate(" + arc.centroid(d) + ")rotate("+deg+")"; })
	    outcircle.selectAll('path').transition().duration(200).attr('transform','translate('+width/2+',220)rotate('+degree+')')
		d3.select(this).transition().duration(300).delay(400).attr('d',arc1)
		})
	
	
}
