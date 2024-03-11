import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const bankAccountStore = defineStore(
  "bankAccountStore",
  () => {
    const bankAccounts = ref([]);

    const getBankAccounts = computed(() => bankAccounts.value);

    function setBankAccounts(params) {
      for (let param of params) {
        bankAccounts.value.push({
          alias: param.alias,
          bank: param.bank,
          bankInfo: {
            bankCode: param.bankInfo.bankCode,
            bankName: param.bankInfo.bankName,
            code: param.bankInfo.code,
          },
          id: param.id,
          memo: param.memo,
        });
      }
    }

    function $reset() {
      bankAccounts.value = [];
    }

    return {
      bankAccounts,
      getBankAccounts,
      setBankAccounts,
      $reset,
    };
  },
  { persist: true }
);
