//dark mode

const themeToggle = document.getElementById('theme-toggle');  
const body = document.body;  

document.addEventListener('DOMContentLoaded', () => {  
    const currentTheme = localStorage.getItem('theme');  
    if (currentTheme) {  
        body.classList.add(currentTheme);  
        themeToggle.checked = currentTheme === 'dark';  
    }  

    themeToggle.addEventListener('change', () => {  
        if (themeToggle.checked) {  
            body.classList.add('dark');  
            body.classList.remove('light');  
            localStorage.setItem('theme', 'dark');  
            updateChartsColors('#ccc', '#242526'); // ألوان الوضع الداكن  
        } else {  
            body.classList.remove('dark');  
            body.classList.add('light');  
            localStorage.setItem('theme', 'light');  
            updateChartsColors('#333', '#fff'); // ألوان الوضع الفاتح  
        }  
    });  
});  

/***********range********* */

const slideValue = document.querySelector(".rate-percent");
const inputSlider = document.querySelector(".rate-input");

inputSlider.oninput = () => {
  let value = inputSlider.value;
  slideValue.textContent = value + "%";
  slideValue.style.left = (value) + "%";
};

//Initial position
slideValue.style.left = (inputSlider.value) +"%";
slideValue.textContent = inputSlider.value + "%";



//*****************************
//  111111111111111111111111111111111*/

let counterElement1 = document.getElementById('counter1');  
let count1 = 0;  
let target1 = 17825;  
let speed1 = Math.floor(target1 / 200);  

let interval1 = setInterval(() => {  
    count1 += speed1;  
    if (count1 >= target1) {  
        count1 = target1;  
        clearInterval(interval1);  
    }  
    counterElement1.innerText = count1.toLocaleString(); 
}, 1);

//222222222222222222222222222222222222222222222

let counterElement2 = document.getElementById('counter2');  
let count2 = 0;  
let target2 = 785021;  
let speed2 = Math.floor(target1 / 5);  

let interval2 = setInterval(() => {  
    count2 += speed2;  
    if (count2 >= target2) {  
        count2 = target2;  
        clearInterval(interval2);  
    }  
    counterElement2.innerText = count2.toLocaleString(); 
}, 1);

//3333333333333333333333333333333333333

let counterElement3 = document.getElementById('counter3');  
let count3 = 0;  
let target3 = 8482;  
let speed3 = Math.floor(target1 / 200);  

let interval3 = setInterval(() => {  
    count3 += speed3;  
    if (count3 >= target3) {  
        count3 = target3;  
        clearInterval(interval3);  
    }  
    counterElement3.innerText = count3.toLocaleString(); 
}, 1);

//44444444444444444444444444444444444444444

let counterElement4 = document.getElementById('counter4');  
let count4 = 0;  
let target4 = 1420;  
let speed4 = Math.floor(target1 / 200);  

let interval4 = setInterval(() => {  
    count4 += speed4;  
    if (count4 >= target4) {  
        count4 = target4;  
        clearInterval(interval4);  
    }  
    counterElement4.innerText = count4.toLocaleString(); 
}, 1);


// charts color 


function updateChartsColors(textColor, bodyColor) {  
    chart1.updateOptions({  
        chart: {  
            foreColor: textColor,  
        }  
    });  

    chart2.updateOptions({  
        stroke: {  
            colors: [bodyColor],  
        }  
    });  

    chart3.updateOptions({  
        chart: {  
            foreColor: textColor,  
        },  
        stroke: {  
            width: 1,  
            colors: [bodyColor],  
        }  
    });  
}  

// ****************chart1*********************  
var options1 = {  
    series: [{  
        name: 'series1',  
        data: [31, 40, 28, 51, 42, 109, 100]  
    }, {  
        name: 'series2',  
        data: [11, 32, 45, 32, 34, 52, 41]  
    }],  
    chart: {  
        height: 200,  
        type: 'area'  
    },  
    dataLabels: {  
        enabled: false  
    },  
    stroke: {  
        curve: 'smooth'  
    },  
    xaxis: {  
        type: 'datetime',  
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]  
    },  
    tooltip: {  
        x: {  
            format: 'dd/MM/yy HH:mm'  
        },  
    },  
};  

var chart1 = new ApexCharts(document.querySelector("#chart1"), options1);  
chart1.render();  

// ****************chart2************************  
var options2 = {  
    series: [44, 55, 13, 33],  
    chart: {  
        width: 250,  
        type: 'donut',  
    },  
    dataLabels: {  
        enabled: false  
    },  
    responsive: [{  
        breakpoint: 480,  
        options: {  
            chart: {  
                width: 200  
            },  
            legend: {  
                show: false  
            },  
            tooltip: {  
                enabled: false  
            }  
        }  
    }],  
    legend: {  
        position: 'bottom',  
        offsetY: 0,  
        height: 100,  
        show: false  
    }  
};  

var chart2 = new ApexCharts(document.querySelector("#chart2"), options2);  
chart2.render();  

// ***************chart3*******************  
var options3 = {  
    series: [{  
        name: 'Marine Sprite',  
        data: [44, 55]  
    }, {  
        name: 'Striking Calf',  
        data: [53, 32]  
    }, {  
        name: 'Tank Picture',  
        data: [12, 17]  
    }, {  
        name: 'Bucket Slope',  
        data: [9, 7]  
    }, {  
        name: 'Reborn Kid',  
        data: [25, 12]  
    }],  
    chart: {  
        type: 'bar',  
        height: 150,  
        stacked: true,  
        stackType: '100%'  
    },  
    plotOptions: {  
        bar: {  
            horizontal: true,  
        },  
    },  
    stroke: {  
        width: 1,  
        colors: ['#fff']  
    },  
    xaxis: {  
        categories: ['Response', 'Resulation Time'],  
    },  
    tooltip: {  
        y: {  
            formatter: function (val) {  
                return val + "K"  
            }  
        }  
    },  
    fill: {  
        opacity: 1  
    },  
    legend: {  
        position: 'top',  
        horizontalAlign: 'left',  
        offsetX: 40  
    }  
};  

var chart3 = new ApexCharts(document.querySelector("#chart3"), options3);  
chart3.render();
