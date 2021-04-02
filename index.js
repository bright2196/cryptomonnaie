


fetch(
    "https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,BNB,MKR,LTC,FIL,BCH&tsyms=USD,EUR,GBP"
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      var usdValues = [
        ["Ethereum", data["ETH"]["USD"]],
        ["Binance Coin", data["BNB"]["USD"]],
        ["Maker", data["MKR"]["USD"]],
        ["Litecoin", data["LTC"]["USD"]],
        ["Filecoin", data["FIL"]["USD"]],
        ["Bitcoin Cash", data["BCH"]["USD"]],
      ];
  
      usdValues.sort(function (a, b) {
        return b[1] - a[1];
      });
  
      var labels = [];
      var usdNumbers = [];
  
      usdValues.forEach((element) => {
        labels.push(element[0]);
        usdNumbers.push(element[1]);
      });
  
  
  
  
      var eurValues = [
        ["Ethereum", data["ETH"]["EUR"]],
        ["Binance Coin", data["BNB"]["EUR"]],
        ["Maker", data["MKR"]["EUR"]],
        ["Litecoin", data["LTC"]["EUR"]],
        ["Filecoin", data["FIL"]["EUR"]],
        ["Bitcoin Cash", data["BCH"]["EUR"]],
      ];
  
      eurValues.sort(function (a, b) {
        return b[1] - a[1];
      });
  
      var eurNumbers = [];
  
      eurValues.forEach((element) => {
        eurNumbers.push(element[1]);
      });
  
  
  
  
      var gbpValues = [
        ["Ethereum", data["ETH"]["GBP"]],
        ["Binance Coin", data["BNB"]["GBP"]],
        ["Maker", data["MKR"]["GBP"]],
        ["Litecoin", data["LTC"]["GBP"]],
        ["Filecoin", data["FIL"]["GBP"]],
        ["Bitcoin Cash", data["BCH"]["GBP"]],
      ];
  
      gbpValues.sort(function (a, b) {
        return b[1] - a[1];
      });
  
      var gbpNumbers = [];
  
      gbpValues.forEach((element) => {
        gbpNumbers.push(element[1]);
      });
  
  
  
      
      Chart.defaults.global.defaultFontColor = '#F9EAD7';
      Chart.defaults.global.defaultFontFamily = 'myriad-devanagari, sans-serif';
      Chart.defaults.global.defaultFontSize	 = 17;

      var ctx = document.getElementById("chart").getContext("2d");
      var chart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: labels,
          fontColor: '#F9EAD7',
          datasets: [
            {
              label: "Prix actuel en $",
              data: usdNumbers,
              backgroundColor: "rgba( 255, 228, 1, 1)",
              borderWidth: 1,
              fontColor: '#F9EAD7'
            },{
              label: "Prix actuel en €",
              data: eurNumbers,
              backgroundColor: "rgba(235, 10, 0, 1)",
              borderColor: "rgba(235, 10, 0, 1)",
              borderWidth: 1,
              fontColor: '#F9EAD7'
            },{
              label: "Prix actuel en £",
              data: gbpNumbers,
              backgroundColor: "rgba(  21, 102, 255, 1)",
              borderColor: "rgba(  21, 102, 255, 1)",
              borderWidth: 1,
              fontColor: '#F9EAD7'
            }
          ],
        },
        options: {
            legend: {
                labels: {
                    fontColor: '#F9EAD7',
                    fontFamily: "myriad-devanagari, sans-serif",
                    fontSize: 17,
                }
               
            }, 
          

          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        },
      });
    })
    .catch((err) => {
      console.log(err);
    });

   
