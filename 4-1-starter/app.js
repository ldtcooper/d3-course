var data = [10,20,30,40,50];

d3.select('#chart')
    .selectAll('rect')
    .data(data)
    .enter();
