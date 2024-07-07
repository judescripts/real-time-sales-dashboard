const socket = io();

// D3.js setup
const d3Chart = d3.select('#d3-chart')
    .append('svg')
    .attr('width', 600)
    .attr('height', 400)
    .append('g')
    .attr('transform', 'translate(50,50)');

const xScale = d3.scaleBand().range([0, 500]).padding(0.1);
const yScale = d3.scaleLinear().range([300, 0]);

const xAxis = d3Chart.append('g')
    .attr('transform', 'translate(0,300)');

const yAxis = d3Chart.append('g');

const updateD3Chart = (data) => {
    xScale.domain(data.map(d => d.product));
    yScale.domain([0, d3.max(data, d => d.sales)]);

    xAxis.call(d3.axisBottom(xScale));
    yAxis.call(d3.axisLeft(yScale));

    const bars = d3Chart.selectAll('.bar').data(data);

    bars.enter()
        .append('rect')
        .attr('class', 'bar')
        .merge(bars)
        .transition()
        .duration(1000)
        .attr('x', d => xScale(d.product))
        .attr('y', d => yScale(d.sales))
        .attr('width', xScale.bandwidth())
        .attr('height', d => 300 - yScale(d.sales))
        .attr('fill', 'steelblue');

    bars.exit().remove();

    // Add legend
    const legend = d3Chart.selectAll('.legend').data(data);

    legend.enter()
        .append('text')
        .attr('class', 'legend')
        .attr('x', (d, i) => xScale(d.product) + xScale.bandwidth() / 2)
        .attr('y', d => yScale(d.sales) - 10)
        .attr('text-anchor', 'middle')
        .merge(legend)
        .text(d => d.sales);

    legend.exit().remove();
};

// Plotly setup
const plotlyData = [{
    x: [],
    y: [],
    mode: 'lines+markers'
}];

const plotlyLayout = {
    title: 'Real-Time Sales',
    xaxis: {
        title: 'Time'
    },
    yaxis: {
        title: 'Total Sales'
    }
};

Plotly.newPlot('plotly-chart', plotlyData, plotlyLayout);

const updatePlotlyChart = (data) => {
    const time = new Date().toLocaleTimeString();
    const sales = data.reduce((sum, d) => sum + d.sales, 0);

    Plotly.extendTraces('plotly-chart', {
        x: [[time]],
        y: [[sales]]
    }, [0]);

    if (plotlyData[0].x.length > 10) {
        Plotly.relayout('plotly-chart', {
            'xaxis.range': [plotlyData[0].x.length - 10, plotlyData[0].x.length]
        });
    }
};

socket.on('salesData', (data) => {
    updateD3Chart(data);
    updatePlotlyChart(data);
});
