new Chart(document.getElementById("stackedBar2"), {
    type: "bar",
    data: {
        labels: ["Diseño (General)", "Diseño Industrial", "Diseño Gráfico"],
        datasets: [{
            label: "Sueldo bruto mensual",
            data: [1195000, 1021000, 985000],
            backgroundColor: "rgba(255, 0, 255, 0.4)",
            borderColor: "rgba(255, 0, 255, 1)",
            borderWidth: 1,
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                grid: { color: "rgba(0,0,0,0.06)" },
                border: { color: "#ccc" },
                ticks: {
                    font: { family: "'Georama', sans-serif", size: 11 },
                    color: "#999",
                },
                title: {
                    display: true,
                    text: "Carrera",
                    font: { family: "'Georama', sans-serif", size: 12, weight: "600" },
                    color: "#666",
                },
            },
            y: {
                beginAtZero: true,
                max: 1500000,
                grid: { color: "rgba(0,0,0,0.06)" },
                border: { color: "#bbb", dash: [4, 4] },
                ticks: {
                    callback: (v) => '$' + (v / 1000000).toFixed(1) + 'M',
                    font: { family: "'Georama', sans-serif", size: 11 },
                    color: "#999",
                },
                title: {
                    display: true,
                    text: "Sueldo bruto mensual (CLP)",
                    font: { family: "'Georama', sans-serif", size: 12, weight: "600" },
                    color: "#666",
                },
            },
        },
        plugins: {
            legend: {
                display: true,
                position: "top",
                labels: {
                    font: { family: "'Georama', sans-serif", size: 11 },
                    color: "#666",
                },
            },
            tooltip: {
                backgroundColor: "#fff",
                borderColor: "#ddd",
                borderWidth: 1,
                titleColor: "#111",
                bodyColor: "#555",
                titleFont: { family: "'Georama', sans-serif", size: 12, weight: "600" },
                bodyFont: { family: "'Georama', sans-serif", size: 11 },
                padding: 10,
                callbacks: {
                    label: function(context) {
                        return ` ${context.dataset.label}: $${context.parsed.y.toLocaleString('es-CL')}`;
                    }
                }
            }
        }
    }
});
