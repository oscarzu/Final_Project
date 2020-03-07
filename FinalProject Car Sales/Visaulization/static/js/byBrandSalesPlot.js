var tutu = undefined;

let YearHibGraph = d3.json("/hybridComplete").then(data => {
    console.log("HOLA")
    tutu = data;

    mes = data.map(d => d.Month)
    mes = Array.from(new Set(mes));
    console.log(mes)

    let extractor = (x_datos, fecha) => {
        return x_datos.filter(d => d.Year === fecha).map(d => d.Total_Sales)
    }
    var trace1 = {
        x: mes,
        y: extractor(data, "2016"),
        type: 'bar',
        name: '2016',
        marker: {
            color: 'rgb(49,130,189)',
            opacity: 0.7,
        }
    };
    var trace2 = {
        x: mes,
        y: extractor(data, "2017"),
        type: 'bar',
        name: '2017',
        marker: {
            color: 'rgb(233, 150, 122)',
            opacity: 0.5
        }
    };
    var trace3 = {
        x: mes,
        y: extractor(data, "2018"),
        type: 'bar',
        name: '2018',
        marker: {
            color: 'rgb(138, 43, 226)',
            opacity: 0.5
        }
    }

    var trace4 = {
        x: mes,
        y: extractor(data, "2019"),
        type: 'bar',
        name: '2019',
        marker: {
            color: 'rgb(0, 139, 139)',
            opacity: 0.5
        }
    }

    var datos = [trace1, trace2, trace3, trace4];
    var layout = {
        title: {
            text: '2016-2019 Year Sales',
            font: {
                family: 'Consolas',
                size: 24
            },
            xref: 'paper',
            x: 0.05,

        },
        xaxis: { title: "Month", tickangle: 30, family: 'Consolas' },
        yaxis: { title: "Sales", family: 'Consolas' },

        barmode: 'group'
    };
    const config = { responsive: true }
    Plotly.newPlot('adobadas', datos, layout, config);

});

// var trace1 = {
//     x: [1, 2, 3, 4],
//     y: [10, 11, 12, 13],
//     mode: 'markers',
//     marker: {
//         color: ['hsl(0,100,40)', 'hsl(33,100,40)', 'hsl(66,100,40)', 'hsl(99,100,40)'],
//         size: [12, 22, 32, 42],
//         opacity: [0.6, 0.7, 0.8, 0.9]
//     },
//     type: 'scatter'
// };

// var trace2 = {
//     x: [1, 2, 3, 4],
//     y: [11, 12, 13, 14],
//     mode: 'markers',
//     marker: {
//         color: 'rgb(31, 119, 180)',
//         size: 18,
//         symbol: ['circle', 'square', 'diamond', 'cross']
//     },
//     type: 'scatter'
// };

// var trace3 = {
//     x: [1, 2, 3, 4],
//     y: [12, 13, 14, 15],
//     mode: 'markers',
//     marker: {
//         size: 18,
//         line: {
//             color: ['rgb(120,120,120)', 'rgb(120,120,120)', 'red', 'rgb(120,120,120)'],
//             width: [2, 2, 6, 2]
//         }
//     },
//     type: 'scatter'
// };

// var data = [trace1, trace2, trace3];

// var layout = { showlegend: false };

// Plotly.newPlot('adobadas', data, layout);