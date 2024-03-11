<template>
  <div
    class="flex mg-t-5"
    style="justify-content: right"
    :style="UiService.isMobileFont()"
  >
    <span>* 각 지수는 3분 주기로 갱신합니다.</span>
  </div>
  <div class="flex mg-t-5" style="justify-content: right">
    <div class="flex" :style="UiService.isMobileFont()">
      <button
        class="mg-r-10"
        :class="{
          redBtn: chartType === 'D',
          'border-radius-8': chartType !== 'D',
        }"
        @click="changeChartType('D')"
      >
        일별
      </button>
      <button
        class="mg-r-10"
        :class="{
          redBtn: chartType === 'W',
          'border-radius-8': chartType !== 'W',
        }"
        @click="changeChartType('W')"
      >
        주별
      </button>
      <button
        class="mg-r-10"
        :class="{
          redBtn: chartType === 'M',
          'border-radius-8': chartType !== 'M',
        }"
        @click="changeChartType('M')"
      >
        월별
      </button>
      <button
        class="mg-r-10"
        :class="{
          redBtn: chartType === 'Y',
          'border-radius-8': chartType !== 'Y',
        }"
        @click="changeChartType('Y')"
      >
        년별
      </button>
    </div>
  </div>
  <div class="mg-t-10">
    <div
      class="flex"
      style="
        flex-wrap: wrap;
        max-width: 90%;
        margin: 0 auto;
        justify-content: space-around;
      "
    >
      <div style="min-width: 165px; width: 40%" v-if="kospi">
        <div
          class="flex"
          style="justify-content: flex-start; align-items: center"
        >
          <h4 class="t-a-c mg-r-15">KOSPI</h4>
          <div
            :class="UiService.setColorClass(kospi.output1.prdy_vrss_sign)"
            :style="UiService.isMobileFont()"
          >
            <span>{{ kospi.output1.bstp_nmix_prpr }}</span>
            <span>
              (<span
                :class="
                  UiService.setUpDownArrowClass(kospi.output1.prdy_vrss_sign)
                "
              ></span>
            </span>
            <span>{{ kospi.output1.bstp_nmix_prdy_vrss }})</span>
          </div>
        </div>
        <apexchart
          type="candlestick"
          :options="chartOptions"
          :series="kospiSeries"
        ></apexchart>
      </div>
      <div style="min-width: 165px; width: 40%" v-if="kosdaq">
        <div
          class="flex"
          style="justify-content: flex-start; align-items: center"
        >
          <h4 class="t-a-c mg-r-15">KOSDAQ</h4>
          <div
            :class="UiService.setColorClass(kosdaq.output1.prdy_vrss_sign)"
            :style="UiService.isMobileFont()"
          >
            <span>{{ kosdaq.output1.bstp_nmix_prpr }}</span>
            <span>
              (<span
                :class="
                  UiService.setUpDownArrowClass(kosdaq.output1.prdy_vrss_sign)
                "
              ></span>
            </span>
            <span>{{ kosdaq.output1.bstp_nmix_prdy_vrss }})</span>
          </div>
        </div>
        <apexchart
          type="candlestick"
          :options="chartOptions"
          :series="kosdaqSeries"
        ></apexchart>
      </div>
    </div>

    <div
      class="flex"
      style="
        flex-wrap: wrap;
        max-width: 90%;
        margin: 0 auto;
        justify-content: space-around;
      "
    >
      <div style="min-width: 165px; width: 40%" v-if="snp">
        <div
          class="flex"
          style="justify-content: flex-start; align-items: center"
        >
          <h4 class="t-a-c mg-r-15">S&P500</h4>
          <div
            :class="UiService.setColorClass(snp.output1.prdy_vrss_sign)"
            :style="UiService.isMobileFont()"
          >
            <span>{{ snp.output1.ovrs_nmix_prpr }}</span>
            <span>
              (<span
                :class="
                  UiService.setUpDownArrowClass(snp.output1.prdy_vrss_sign)
                "
              ></span>
            </span>
            <span>{{ snp.output1.ovrs_nmix_prdy_vrss }})</span>
          </div>
        </div>
        <apexchart
          type="candlestick"
          :options="chartOptions"
          :series="snpSeries"
        ></apexchart>
      </div>
      <div style="min-width: 165px; width: 40%" v-if="nasdaq">
        <div
          class="flex"
          style="justify-content: flex-start; align-items: center"
        >
          <h4 class="t-a-c mg-r-15">NASDAQ</h4>
          <div
            :class="UiService.setColorClass(nasdaq.output1.prdy_vrss_sign)"
            :style="UiService.isMobileFont()"
          >
            <span>{{ nasdaq.output1.ovrs_nmix_prpr }}</span>
            <span>
              (<span
                :class="
                  UiService.setUpDownArrowClass(nasdaq.output1.prdy_vrss_sign)
                "
              ></span>
            </span>
            <span>{{ nasdaq.output1.ovrs_nmix_prdy_vrss }})</span>
          </div>
        </div>
        <apexchart
          type="candlestick"
          :options="chartOptions"
          :series="nasdaqSeries"
        ></apexchart>
      </div>
    </div>

    <div
      class="flex"
      style="
        flex-wrap: wrap;
        max-width: 90%;
        margin: 0 auto;
        justify-content: space-around;
      "
    >
      <div style="min-width: 165px; width: 40%" v-if="daw">
        <div
          class="flex"
          style="justify-content: flex-start; align-items: center"
        >
          <h4 class="t-a-c mg-r-15">다우존스</h4>
          <div
            :class="UiService.setColorClass(daw.output1.prdy_vrss_sign)"
            :style="UiService.isMobileFont()"
          >
            <span>{{ daw.output1.ovrs_nmix_prpr }}</span>
            <span>
              (<span
                :class="
                  UiService.setUpDownArrowClass(daw.output1.prdy_vrss_sign)
                "
              ></span>
            </span>
            <span>{{ daw.output1.ovrs_nmix_prdy_vrss }})</span>
          </div>
        </div>
        <apexchart
          type="candlestick"
          :options="chartOptions"
          :series="dawSeries"
        ></apexchart>
      </div>
      <div style="min-width: 165px; width: 40%" v-if="philadelphia">
        <div
          class="flex"
          style="justify-content: flex-start; align-items: center"
        >
          <h4 class="t-a-c mg-r-15">필라델피아 <br />반도체 지수</h4>
          <div
            :class="
              UiService().setColorClass(philadelphia.output1.prdy_vrss_sign)
            "
            :style="UiService().isMobileFont()"
          >
            <span>{{ philadelphia.output1.ovrs_nmix_prpr }}</span>
            <span>
              (<span
                :class="
                  UiService().setUpDownArrowClass(
                    philadelphia.output1.prdy_vrss_sign
                  )
                "
              ></span>
            </span>
            <span>{{ philadelphia.output1.ovrs_nmix_prdy_vrss }})</span>
          </div>
        </div>
        <apexchart
          type="candlestick"
          :options="chartOptions"
          :series="philadelphiaSeries"
        ></apexchart>
      </div>
    </div>
  </div>
</template>
<script setup>
import UiService from "@/service/UiService";
import { onMounted, ref } from "vue";
import axios from "axios";

const kosdaq = ref(null);
const kospi = ref(null);
const snp = ref(null);
const nasdaq = ref(null);
const philadelphia = ref(null);
const daw = ref(null);

const kosdaqSeries = ref([]);
const kospiSeries = ref([]);
const snpSeries = ref([]);
const nasdaqSeries = ref([]);
const dawSeries = ref([]);
const philadelphiaSeries = ref([]);

const chartType = ref("D");
const chartOptions = ref({
  chart: {
    height: 350,
    type: "candlestick",
    toolbar: {
      show: false,
    },
  },
  title: {
    text: "",
    align: "left",
  },
  plotOptions: {
    candlestick: {
      colors: {
        upward: "#fa0202",
        downward: "#0213fa",
      },
    },
  },
  tooltip: {
    enabled: true,
  },
  xaxis: {
    type: "category",
    labels: {
      show: !UiService.isMobile(),
      formatter: function (val) {
        return val;
      },
    },
  },
  yaxis: {
    show: !UiService.isMobile(),
    tooltip: {
      enabled: false,
    },
  },
});

const changeChartType = (val) => {
  chartType.value = val;
};

onMounted(() => {
  getIndexChartData();
});

const getIndexChartData = async () => {
  let res = await axios.get(
    "/api/dashboard/index-chart/".concat(chartType.value)
  );
  console.log(res);
};
</script>

<style scoped></style>
