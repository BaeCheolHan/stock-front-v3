<template>
  <div class="exchange-rate-wrap" v-if="exchangeRateSt.basePrice">
    <p class="red font-weight-bold">
      {{ exchangeRateSt.basePrice }}원 ({{ exchangeRateSt.date }} :
      {{ exchangeRateSt.time }})
    </p>
    <span class="mg-r-30">살때 : {{ exchangeRateSt.cashBuyingPrice }}</span>
    <span>팔때 : {{ exchangeRateSt.cashSellingPrice }}</span>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import axios from "axios";
import { exchangeRateStore } from "@/stores/exchangeRateStore";

const exchangeRateSt = exchangeRateStore();

onMounted(async () => {
  let res = await axios.get("/api/exchange-rate");
  exchangeRateSt.setValue(res.data);
});
</script>

<style scoped></style>
