new Chart(document.getElementById("stackedBar"), {
    type: "bar",
    data: {
        labels: ["Diseño Gráfico", "Diseño Industrial", "Diseño (General)"],
        datasets: [{
            label: "Arancel anual",
            data: [3100000, 3800000, 4200000],
            backgroundColor: "rgba(94, 79, 162, 0.4)",
            borderColor: "rgba(94, 79, 162, 1)",
            borderWidth: 1,
        }]
    },
    options: {
        indexAxis: 'y',
        responsive: true,
        scales: {
            x: {
                beginAtZero: true,
                max: 5000000,
                grid: { color: "rgba(0,0,0,0.06)" },
                border: { color: "#ccc" },
                ticks: {
                    callback: (v) => '$' + (v / 1000000).toFixed(1) + 'M',
                    font: { family: "'Georama', sans-serif", size: 11 },
                    color: "#999",
                },
            },
            y: {
                grid: { display: false },
                border: { color: "#bbb", dash: [4, 4] },
                ticks: {
                    font: { family: "'Georama', sans-serif", size: 11 },
                    color: "#999",
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
                        return ` ${context.dataset.label}: $${context.parsed.x.toLocaleString('es-CL')}`;
                    }
                }
            }
        }
    }
});
