import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const userInfoStore = defineStore(
  "userInfoStore",
  () => {
    const nickName = ref(null);
    const defaultBankAccountId = ref(null);
    const profileImgUrl = ref(null);
    const memberId = ref(null);
    const email = ref(null);

    const getNickName = computed(() => nickName.value);
    const getMemberId = computed(() => memberId.value);
    const getEmail = computed(() => email.value);
    const getDefaultBankAccountId = computed(() => defaultBankAccountId.value);
    const getProfileImgUrl = computed(() => defaultBankAccountId.value);

    function setNickName(param) {
      nickName.value = param;
    }

    function setMemberId(param) {
      memberId.value = param;
    }

    function setEmail(param) {
      email.value = param;
    }

    function setDefaultBankAccountId(param) {
      defaultBankAccountId.value = param;
    }

    function setProfileImgUrl(param) {
      profileImgUrl.value = param;
    }

    function isLogin() {
      return memberId.value ? true : false;
    }

    function $reset() {
      nickName.value = null;
      defaultBankAccountId.value = null;
      profileImgUrl.value = null;
      memberId.value = null;
      email.value = null;
    }

    return {
      nickName,
      defaultBankAccountId,
      profileImgUrl,
      memberId,
      email,
      getNickName,
      getDefaultBankAccountId,
      getProfileImgUrl,
      getMemberId,
      getEmail,
      setNickName,
      setDefaultBankAccountId,
      setProfileImgUrl,
      setMemberId,
      setEmail,
      isLogin,
      $reset,
    };
  },
  { persist: true }
);
