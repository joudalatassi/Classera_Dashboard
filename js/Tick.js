// dark mode
const themeToggle = document.getElementById('theme-toggle');  

document.addEventListener('DOMContentLoaded', () => {  
    const currentTheme = localStorage.getItem('theme');  
    if (currentTheme) {  
        document.body.classList.add(currentTheme);  
        themeToggle.checked = currentTheme === 'dark';  
    }  

    themeToggle.addEventListener('change', () => {  
        if (themeToggle.checked) {  
            document.body.classList.add('dark');  
            document.body.classList.remove('light');  
            localStorage.setItem('theme', 'dark');  
        } else {  
            document.body.classList.remove('dark');  
            document.body.classList.add('light');  
            localStorage.setItem('theme', 'light');  
        }  
    });  
});

// transition

function setActive(element) {  
   
    const items = document.querySelectorAll('.navbar li');  
    items.forEach(item => {  
        item.classList.remove('active');  
    });  
  
 
    element.classList.add('active');  
  }

//   4 chart box 

function createChart(containerId, colors) {
  var options = {
      series: [
      {
        data: [
          {
            x: '1',
            y: [4, 6]
          },
          {
            x: '2',
            y: [2, 8]
          },
          {
            x: '3',
            y: [0, 10]
          },
          {
            x: '4',
            y: [1, 9]
          },
          {
            x: '5',
            y: [3, 7]
          },
        ]
      }
    ],
      chart: {
      height: 120,
      width: 120,
      style: 'bold',
      type: 'rangeBar',
      zoom: {
        enabled: false
      },
      toolbar:{
          show: false
      },
    },
    plotOptions: {
      bar: {
        isDumbbell: true,
        columnWidth: 5,
        dumbbellColors: [[colors, colors]]
      }
    },
    legend: {
      show: false,
    },
    fill: {
      colors: colors,
    },
    grid: {
      xaxis: {
        lines: {
          show: false
        },
      },
      yaxis: {
        lines: {
          show: false
        },
      },
    },
    xaxis: {
      labels: {
        show: false
      },
      axisBorder: {
          show: false
      },
      axisTicks: {
          show: false
      }
    },
    yaxis: {
      labels: {
        show: false
      },
    },
    markers: {
      size: 5
    },
    tooltip:{
      enabled: false
    }
    };
  
    var chart = new ApexCharts(document.querySelector(containerId), options);
    chart.render();
  }
  
  var color1 = '#E91E63';
  var color2 = '#4285f4';
  var color3 = '#FF9800';
  var color4 = '#53b659';
  createChart('#chart1', color1);
  createChart('#chart2', color2);
  createChart('#chart3', color3);
  createChart('#chart4', color4);


//  ************** range ******************

const rangeInput = document.getElementById('rangeInput');  
const progressValue = document.getElementById('progressValue');  
const filled = document.getElementById('filled');  

function updateProgress() {  
    const percent = rangeInput.value;  
    filled.style.width = percent + '%';  
    progressValue.innerText = percent + '%';  
}  

rangeInput.addEventListener('input', updateProgress);  

updateProgress();


