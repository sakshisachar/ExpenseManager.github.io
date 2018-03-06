// Chart.js scripts
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';



var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
var d = new Date();
var n = monthNames[d.getMonth()];
var labelValuesForArea = new Array();
var dd = d.getDate();
for(var i = 1; i<=dd ;i++){
    var val = n + ' ' + i;
    labelValuesForArea.push(val);
}

var labelValuesForBar = new Array();
for(var i =0;i<=d.getMonth();i++){
    var val = monthNames[i];
    labelValuesForBar.push(val);
}

// -- Area Chart 
var ctx = document.getElementById("myAreaChart");
var lineData = new Array();
 
    if(localStorage.getItem("dailyExpenses") !== null){
       
        var exp =JSON.parse(localStorage.getItem("dailyExpenses"));
        
        lineData = exp;
       
      }
      
var BarData = new Array();
if(localStorage.getItem("monthlyExpenses") !== null){
       
        var exp =JSON.parse(localStorage.getItem("monthlyExpenses"));
        BarData = exp;
       
      }
      
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: labelValuesForArea,
    datasets: [{
      label: "Sessions",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 20,
      pointBorderWidth: 2,
      data: lineData,
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 40000,
          maxTicksLimit: 10
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});



// -- Bar Chart 
var ctx = document.getElementById("myBarChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: labelValuesForBar,
    datasets: [{
      label: "Revenue",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: BarData,
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 15000,
          maxTicksLimit: 10
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});


// -- Pie Chart 
var labelsForPieChart = ["Home", "Transportation", "Entertainment", "Miscellaneous"];
var ctx = document.getElementById("myPieChart");
var PieData = new Array();
if(localStorage.getItem("homeExpense") !== null){
       
        var exp =JSON.parse(localStorage.getItem("homeExpense"));
        PieData.push(exp);
       
      }
 if(localStorage.getItem("transportExpense") !== null){
       
        var exp =JSON.parse(localStorage.getItem("transportExpense"));
        PieData.push(exp);
       
      }
 if(localStorage.getItem("entertainmentExpense") !== null){
       
        var exp =JSON.parse(localStorage.getItem("entertainmentExpense"));
        PieData.push(exp);
       
      }
 if(localStorage.getItem("miscellaneous") !== null){
       
        var exp =JSON.parse(localStorage.getItem("miscellaneous"));
        PieData.push(exp);
       
      }
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: labelsForPieChart,
    datasets: [{
      data: PieData,
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
    }],
  },
});
