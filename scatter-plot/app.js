const data = [
    [ 400, 200 ],
    [ 210,140 ],
    [ 722,300 ],
    [ 70,160 ],
    [ 250,50 ],
    [ 110,280 ],
    [ 699,225 ],
    [ 90, 220 ]
];

// let data = [
//     { date: '07/01/2019', num: 20 },
//     { date: '07/02/2019', num: 31 },
//     { date: '07/03/2019', num: 37 },
//     { date: '07/04/2019', num: 32 },
//     { date: '07/05/2019', num: 32 },
//     { date: '07/06/2019', num: 29 },
//     { date: '07/07/2019', num: 35 },
//     { date: '07/08/2019', num: 30 },
//     { date: '07/09/2019', num: 22 },
//     { date: '07/10/2019', num: 34 },
// ];
const chartWidth = 800;
const chartHeight = 400;
const padding = 50;

const timeParse = d3.timeParse('%m/%d/%Y');
const timeFormat = d3.timeFormat('%b %e');

// data = data.map((el) => ({ date: timeParse(el.date ), num: el.num }));

const svg = d3.select('#chart')
    .append('svg')
    .attr('height', chartHeight)
    .attr('width', chartWidth);

// create scales
const xScale = d3.scaleLinear()
    .domain([0, d3.max(data, (d) => d[0])])
    .range([padding, chartWidth - padding * 2]);

const yScale = d3.scaleLinear()
    .domain([0, d3.max(data, (d) => d[1])])
    // yScale range reversed to account for wonky SVG coordinates
    .range([chartHeight - padding, padding]);

const aScale = d3.scaleSqrt()
    .domain([0, d3.max(data, (d) => d[0])])
    .range([0, 25]);

// create axes
const xAxis = d3.axisBottom(xScale);
const yAxis = d3.axisLeft(yScale).ticks(5).tickFormat((d) => `${d}%`);

svg.append('g')
    .attr('class', 'x-axis')
    .attr('transform', `translate(0, ${chartHeight - padding})`)
    .call(xAxis);

svg.append('g')
    .attr('class', 'y-axis')
    .attr('transform', `translate(${padding}, 0)`)
    .call(yAxis);

svg.selectAll('circle')
    .data(data)
    .enter()
    .append('circle')
    .attr('cx', (d) => xScale(d[0]))
    .attr('cy', (d) => yScale(d[1]))
    .attr('r', (d) => aScale(d[1]))
    .attr('fill', '#D1AB0E')

svg.append('g').selectAll('text')
    .data(data)
    .enter()
    .append('text')
    .text((d) => d.join(', '))
    .attr('x', (d) => xScale(d[0]))
    .attr('y', (d) => yScale(d[1]))
