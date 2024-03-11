<template></template>

<script setup>
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";
import { userInfoStore } from "@/stores/userInfoStore";
import { bankAccountStore } from "@/stores/bankAccountStore";

const userInfoSt = userInfoStore();
const bankAccountSt = bankAccountStore();

const route = useRoute();
const router = useRouter();

onMounted(async () => {
  const snsType = route.params.snsType;

  if (snsType === "kakao") {
    const code = route.query.code;
    try {
      const response = await axios.get("/login/oauth/kakao?code=".concat(code));
      if (response.data) {
        setUserInfoStore(response.data);
        setBankAccountStore(response.data.bankAccounts);
      }
    } catch (e) {
      await router.push("/");
    }
  }

  if (snsType === "google") {
    const code = route.query.code;
    const scope = route.query.scope;
    const response = await axios.get(
      "/login/oauth/google?code=".concat(code).concat("&scope=").concat(scope)
    );
    if (response.data) {
      setUserInfoStore(response.data);
      setBankAccountStore(response.data.bankAccounts);
    }
  }
});

const setBankAccountStore = (data) => {
  bankAccountSt.setBankAccounts(data);
};

const setUserInfoStore = (data) => {
  userInfoSt.setMemberId(data.memberId);
  userInfoSt.setNickName(data.nickName);
  userInfoSt.setDefaultBankAccountId(data.defaultBankAccountId);
  userInfoSt.setEmail(data.email);
  userInfoSt.setProfileImgUrl(data.profileImgUrl);
};
</script>
