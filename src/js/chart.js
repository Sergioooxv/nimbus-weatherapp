
// Plugin para fondo transparente
Chart.register({
    id: 'transparentBackground',
    beforeDraw: (chart) => {
        const ctx = chart.canvas.getContext('2d');
        ctx.save();
        ctx.globalCompositeOperation = 'destination-over';
        ctx.fillStyle = 'transparent';
        ctx.fillRect(0, 0, chart.width, chart.height);
        ctx.restore();
    }
});

const ctx = document.getElementById('tempChart').getContext('2d');

const tempChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['6am', '9am', '12pm', '3pm', '6pm', '9pm'],
        datasets: [{
            data: [18, 20, 24, 26, 23, 19],
            borderColor: 'rgba(255, 255, 255, 0.6)',
            borderWidth: 2,
            pointRadius: 0,
            tension: 0.4,
            fill: false,
            backgroundColor: 'transparent'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false }
        },
        scales: {
            x: {
                ticks: { display: false},
                grid: { display: false },
                border: { display: false }
            },
            y: { display: false }
        }
    }
});