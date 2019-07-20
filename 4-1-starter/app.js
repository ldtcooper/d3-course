const data = [];
const chartWidth = 800;
const chartHeight = 400;
const barPadding = 5;

for (let i = 0; i < 5; i++) {
    const num = d3.randomUniform(1,50)
    data.push(Math.floor(num()));
}

const svg = d3.select('#chart')
    .append('svg')
    .attr('width', chartWidth)
    .attr('height', chartHeight);

svg.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', (d, i) => i * (chartWidth / data.length))
    .attr('y', (d) => chartHeight - (d * 5))
    .attr('width', (chartWidth / data.length) - barPadding)
    .attr('height', (d) => d * 5)
    .attr('fill', 'green');

svg.selectAll('text')
    .data(data)
    .enter()
    .append('text')
    .text((d) => d)
    .attr('x', (d, i) => i * (chartWidth / data.length) + (chartWidth / data.length - barPadding) / 2)
    .attr('y', (d) => chartHeight - (d * 5) - 2)
    .attr('text-anchor', 'middle')
