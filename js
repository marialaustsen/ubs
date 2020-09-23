Highcharts.setOptions({
  colors: ['#dbaa35', '#a36650', '#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4']
});
var chart = Highcharts.chart('container', {
  chart: {
    type: 'spline'
  },
  title: {
    text: 'Live Data (CSV)'
  },

  subtitle: {
    text: 'Data input from a remote CSV file'
  },

  xAxis: {
    type: "datetime",
  },

  yAxis: {

    title: {
      text: null,
    }

  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: false,
      }
    }
  },
  legend: {
    itemStyle: {
      color: '#dbaa35',
      fontWeight: 'bold'
    }
  },
  data: {
    csvURL: 'https://marialaustsen.com/LineChart_Data.csv',
    enablePolling: true
  }
});
$('#title').click(function() {
  chart.setTitle({
    text: document.getElementById("ftitle").value
  });
  chart.setTitle(null, {
    text: document.getElementById("subtitle").value
  });
  chart.xAxis[0].setTitle({
    text: document.getElementById("xaxis").value
  });
  chart.yAxis[0].setTitle({
    text: document.getElementById("yaxis").value
  });
  var newname = document.getElementById("seriesname").value;
  var series = chart.series[0],
    name = newname;

  series.name = name;
  series.legendItem.attr('text', name);
  chart.legend.render();
});

$.each(['spline', 'column', 'pie'], function(i, type) {
  $('#' + type).click(function() {
    chart.series[0].update({
      type: type
    });
  });
});


$("#csvfile").click(function() {
  $(".onebox").show('slow', function() {});
});
