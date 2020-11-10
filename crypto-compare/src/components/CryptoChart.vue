<template>
  <div>
    <div class='row-even'>
    <a href="https://www.coingecko.com/en/coins/bitcoin">Bitcoin on Coingecko</a>
    <a href="https://www.coingecko.com/en/coins/ethereum">Ethereum on Coingecko</a>
    <a href="https://www.coingecko.com/en/coins/monero">Monero on Coingecko</a>
    </div>
    <br/><br/><br/>
    <div class="chart-wrapper">
      <apexchart
      id="apexx"
        v-if='this.series[0].data.length === 27 && this.series[1].data.length === 27 && this.series[2].data.length === 27'
        width="800"
        type="line"
        :options="options"
        :series="series"
      >
      </apexchart>
    </div>
  </div>
</template>

<script>
export default {
  name: "CryptoChart",
  data: () => ({
   options: {
      chart: {
        id: "vuechart-example",
      },
      dataLabels: {
              enabled: true,
            },
      xaxis: {
        categories: [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "27",
        ],
      },
      title: {
        text: "Recent Price Changes",
        align: "center",
        style: {
          fontSize: "20px",
        },
      },
      colors: ["#00897b", 'red', 'blue' ],
    },
    series: [
      {
        name: "BTC",
        data: [],
      },
      {
        name: "ETH",
        data: [],
      },
      {
        name: "XMR",
        data: [],
      },
    ],
  }),
  // created() {
  //   console.log(this.series)
  // }
  created() {
    let vv = this;
    // Simple GET request using fetch
    fetch("https://api.coinranking.com/v1/public/coins")
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          for (let i = 0; i < data.data.coins.length; i++) {
            if (data.data.coins[i].symbol === "XMR") {
              vv.series[2].data = data.data.coins[i].history;
            }
            if (data.data.coins[i].symbol === "BTC") {
              vv.series[0].data = data.data.coins[i].history;
            }
            if (data.data.coins[i].symbol === "ETH") {
              vv.series[1].data = data.data.coins[i].history;
            }
          }
        }
      });
  },
};
</script>

<style scoped>
div.chart-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  }

#apexx{
background-color: rgba(256,256,256,0.9);
}

a{
  color: white;
  text-shadow: 2px 2px black;
  font-size: 1.5em;
  font-weight: 700;
  
}

.row-even {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
</style>