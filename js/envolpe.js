window.onload=function(){
	
	var width = 960,
	    height = 300
	    


	
	var svg = d3.select("#visualization").append("svg")
	    .attr("width", width)
	    .attr("height", height)

	var resumegroup=svg.append('g')

	paper=resumegroup.append('rect')
		.attr('x',0)
		.attr('y',0)
		.attr('width',110)
		.attr('height',160)
		.attr('stroke-width',2)
   		.attr('stroke','rgba(255,255,255,0.9)')
   		.attr('transform','translate(200,100)');


   	envolpe=resumegroup.append('rect')
		.attr('x',0)
		.attr('y',0)
		.attr('width',200)
		.attr('height',150)
		.attr('stroke-width',2)
   		.attr('stroke','rgba(255,255,255,0.9)')
   		.attr('transform','translate(500,100)');
   	

    linedata1=[{'x':0,'y':150},{'x':100,'y':60},{'x':200,'y':150}]
   	var lineFunction1 = d3.svg.line()
 		.x(function(d) { return d.x; })
        .y(function(d) { return d.y; })
        .interpolate("linear");
    var linegraph = svg.append("path")
    				.attr("d",lineFunction1(linedata1))
    				.attr("stroke","white")
    				.attr("stroke-width",2)
    				.attr('transform','translate(500,100)')
    				.attr('fill','black');


   	linedata=[{'x':0,'y':0},{'x':100,'y':90},{'x':200,'y':0}]
   	var lineFunction = d3.svg.line()
 		.x(function(d) { return d.x; })
        .y(function(d) { return d.y; })
        .interpolate("linear");
    var linegraph = svg.append("path")
    				.attr("d",lineFunction(linedata))
    				.attr("stroke","white")
    				.attr("stroke-width",2)
    				.attr('transform','translate(500,100)')
    				.attr('fill','black');


    //	paper.transition().attr('transform','translate(200,100)rotate(90)')

}