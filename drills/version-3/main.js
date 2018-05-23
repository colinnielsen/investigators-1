var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: [
      "2014", "2015", "2016"
    ],
    datasets: [
      {
        label: '# of Graduated students',
        data: [73, 199, 395],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)'
        ],
        borderWidth: 1
      }
    ]
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
});
