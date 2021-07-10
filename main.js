const categories = [
     {
      category: [
        { label: "2021-05-04Е09:50:20" },
        { label: "2021-05-04T10:30:40" },
        { label: "2021-05-04T11:05:52" },
        { label: "2021-05-04T11:44:28" },
        { label: "2021-05-04T12:26:10" },
        { label: "2021-05-04T13:01:01" },
      ]
    }
  ];



 
  // Construct the dataset comprising multiple series
  const dataset = [
    {
      seriesname: "Агломерат 3ЗСМК крупный",
      chart: {},
      data: [
        { value: `23.9` },
        { value: "26.2" },
        { value: "27.2" },
        { value: "27.3" },
        { value: "27.4" },
        { value: "26.9" },
       
      ]
    },
    {
      seriesname: "Агломерат 3ЗСМК мелкий",
      chart: {},
      data: [
        { value: "43.2" },
        { value: "42.8" },
        { value: "43.8" },
        { value: "43.9" },
        { value: "44.3" },
        { value: "43.3" },  
      ]
    },
    {
        seriesname: "Агломерат складской",
        chart: {},
        data: [
          { value: "8.8" },
          { value: "16.9" },
          { value: "16.6" },
          { value: "16.4" },
          { value: "16.8" },
          { value: "30.9" },
        ]
      },
      {
        seriesname: "Окатыши карельские НО",
        chart: {},
        data: [
          { value: "17.7" },
          { value: "16.3" },
          { value: "13.8" },
          { value: "13.6" },
          { value: "13.5" },
          { value: "14.4" },
        ]
      }
  ];

  //STEP 3 - Chart Configurations
  var chartConfigurations = {
    type: "stackedcolumn2d",
    renderAt: "chart-container",
    width: "1400",
    height: "800",
    dataFormat: "json",
    dataSource: {
      chart: {
        theme: "fusion",
        caption: "ИЗМЕНЕНИЯ В СОСТАВЕ ШИХТЫ ДЛЯ РАЗНЫХ ВИДОВ СЫРЬЯ В ЗАВИСИМОСТИ ОТ ВРЕМЕНИ В ПРОЦЕНТАХ",
        xAxisname: "",
        yAxisName: "",
        showValues: "1",
      },
      categories: categories,
      dataset: dataset
    }
  };
  FusionCharts.ready(function() {
    var fusioncharts = new FusionCharts(chartConfigurations);
    fusioncharts.render();
  });
 
 
function createApp() {   //---- Функция создания нового столбца. Для комфортного использования лучше использовать ajax или react 
 
    
    categories[0].category.push({label:"2021-05-04T13:01:01" })
    dataset[0].data.push( { value: "26.9" },)
    dataset[1].data.push( { value: "26.9" },)
    dataset[2].data.push( { value: "26.9" },)
    dataset[3].data.push( { value: "26.9" },)
}

createApp() //----- уже вызвана

const newData = [20.9]
setInterval(function(){ //--- если поступили новые данные, то параметр изменяется
   
    if (newData.length == 0) {
       
    }else{
        dataset[0].data[0] = newData
    }
}, 4000)

