// === Chart.js Visualizations by Rishika Katna ===

// 1️⃣ BAR CHART — Recipes per Cuisine
const ctxBar = document.getElementById('barChart');
new Chart(ctxBar, {
  type: 'bar',
  data: {
    labels: ['Italian', 'American', 'Indian', 'Chinese', 'Mexican'],
    datasets: [{
      label: 'Recipes per Cuisine',
      data: [12, 8, 10, 6, 7],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#FF9F40'],
      borderRadius: 8
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: { display: true, text: 'Popular Recipe Categories' },
      legend: { position: 'bottom' }
    }
  }
});

// 2️⃣ PIE CHART — Recipe Difficulty Distribution
const ctxPie = document.getElementById('pieChart');
new Chart(ctxPie, {
  type: 'pie',
  data: {
    labels: ['Easy', 'Medium', 'Hard'],
    datasets: [{
      data: [40, 35, 25],
      backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384']
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: { display: true, text: 'Recipe Difficulty Levels' }
    }
  }
});

// 3️⃣ LINE CHART — Monthly Recipe Views
const ctxLine = document.getElementById('lineChart');
new Chart(ctxLine, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
      label: 'Monthly Recipe Views',
      data: [100, 120, 150, 130, 170],
      borderColor: '#4CAF50',
      fill: false,
      tension: 0.3,
      pointRadius: 5
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: { display: true, text: 'Recipe Popularity Over Time' }
    }
  }
});
