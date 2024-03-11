import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const exchangeRateStore = defineStore(
  "exchangeRateStore",
  () => {
    const basePrice = ref(null);
    const cashBuyingPrice = ref(null);
    const cashSellingPrice = ref(null);
    const date = ref(null);
    const time = ref(null);
    const high52wDate = ref(null);
    const high52wPrice = ref(null);
    const highPrice = ref(null);
    const low52wDate = ref(null);
    const low52wPrice = ref(null);
    const lowPrice = ref(null);
    const modifiedAt = ref(null);
    const timestamp = ref(null);

    const getBasePrice = computed(() => basePrice.value);
    const getCashSellingPrice = computed(() => cashSellingPrice.value);
    const getCashBuyingPrice = computed(() => cashBuyingPrice.value);
    const getDate = computed(() => date.value);
    const getTime = computed(() => time.value);
    const getHigh52wDate = computed(() => high52wDate.value);
    const getHigh52wPrice = computed(() => high52wPrice.value);
    const getHighPrice = computed(() => highPrice.value);
    const getLow52wDate = computed(() => low52wDate.value);
    const getLow52wPrice = computed(() => low52wPrice.value);
    const getLowPrice = computed(() => lowPrice.value);
    const getModifiedAt = computed(() => modifiedAt.value);
    const getTimestamp = computed(() => timestamp.value);

    function setValue(param) {
      basePrice.value = param.basePrice;
      cashBuyingPrice.value = param.cashBuyingPrice;
      cashSellingPrice.value = param.cashSellingPrice;
      date.value = param.date;
      time.value = param.time;
      high52wDate.value = param.high52wDate;
      high52wPrice.value = param.high52wPrice;
      highPrice.value = param.highPrice;
      low52wDate.value = param.low52wDate;
      low52wPrice.value = param.low52wPrice;
      lowPrice.value = param.lowPrice;
      modifiedAt.value = param.modifiedAt;
      timestamp.value = param.timestamp;
    }

    return {
      basePrice,
      cashSellingPrice,
      cashBuyingPrice,
      date,
      time,
      highPrice,
      high52wDate,
      high52wPrice,
      low52wDate,
      low52wPrice,
      lowPrice,
      modifiedAt,
      timestamp,
      getBasePrice,
      getCashSellingPrice,
      getCashBuyingPrice,
      getDate,
      getTime,
      getHigh52wDate,
      getHigh52wPrice,
      getHighPrice,
      getLow52wDate,
      getLow52wPrice,
      getLowPrice,
      getModifiedAt,
      getTimestamp,
      setValue,
    };
  },
  { persist: true }
);
