d3.csv('./data.csv').then((data) => {
    console.log(data);
    generate(data);
});

function generate(data) {
    d3.select('body')
        .selectAll('p')
        .data(data)
        .enter()
        .append('p')
        .text((d) => `${d.name} is ${d.age} years old`)
        .style('color', (d) => d > 25 ? 'red' : 'blue');
}
