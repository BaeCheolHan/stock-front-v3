<template>
  <header></header>
  <div class="flex header">
    <div
      class="profile-wrap"
      style="font-size: 15px"
      v-if="userInfoSt.isLogin()"
    >
      <li
        class="ti-angle-double-right mg-l-10 mg-r-15"
        @click="openNav"
        style="cursor: pointer"
      ></li>
    </div>
    <div class="profile-wrap" v-if="!userInfoSt.isLogin()">
      <button
        class="kakao-login-small mg-l-15"
        @click="snsLoginBtn('kakao')"
      ></button>
      <button
        class="google-login-small mg-l-15"
        @click="snsLoginBtn('google')"
      ></button>
    </div>
    <div class="flex">
      <div v-if="!UiService.isMobile()">
        <button class="search-btn" @click="searchStockPop">검색</button>
      </div>
      <ExchangeRate />
      <div v-if="UiService.isMobile()">
        <button class="search-btn" @click="searchStockPop">검색</button>
      </div>
    </div>
  </div>

  <div class="overlay-lnb" @click="closeNav" style="display: none"></div>

  <div id="sidenav-lnb" class="sidenav">
    <div v-if="userInfoSt.isLogin()">
      <div>
        <div class="flex">
          <div class="profile-wrap" @click="goPage('/')">
            <img class="profile-thumbnail" :src="userInfoSt.profileImgUrl" />
            <div class="profile-nickname">
              <span>{{ userInfoSt.nickName }}</span>
            </div>
          </div>
          <div>
            <button
              class="closer mg-r-10"
              @click="closeNav"
              style="color: #818181"
            >
              &times;
            </button>
          </div>
        </div>
        <div>
          <v-divider class="mg-b-10"></v-divider>
        </div>
      </div>
      <div class="side-menus" style="height: 100%">
        <ul>
          <li @click="goPage('/')">홈</li>
          <li @click="goPage('/my')">내 주식 관리</li>
          <li @click="goPage('/settings')">설정</li>
          <li @click="logout">로그아웃</li>
        </ul>
      </div>
    </div>
    <ReferencesArea />
  </div>
</template>
<script setup>
import ReferencesArea from "@/components/header/etc/RefferencesArea.vue";
import { userInfoStore } from "@/stores/userInfoStore";
import UiService from "@/service/UiService";
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";
import ExchangeRate from "@/components/header/ExchageRate.vue";
import { bankAccountStore } from "@/stores/bankAccountStore";

const userInfoSt = userInfoStore();
const bankAccountSt = bankAccountStore();
const router = useRouter();

const searchPop = ref(false);
const isSearch = ref(false);

const openNav = () => {
  document.getElementById("sidenav-lnb").style.width = "250px";
  document.getElementsByClassName("overlay-lnb")[0].style.display = "";
};

const snsLoginBtn = async (snsType) => {
  let res = await axios.get("/login/".concat(snsType));
  location.replace(res.data.loginUri);
};

const searchStockPop = () => {
  searchPop.value = true;
};

const closeNav = () => {
  document.getElementById("sidenav-lnb").style.width = "0px";
  document.getElementsByClassName("overlay-lnb")[0].style.display = "none";
};

const goPage = (url) => {
  router.push(url);
};

const logout = () => {
  userInfoSt.$reset();
  bankAccountSt.$reset();
  closeNav();
  router.push("/");
};
</script>

<style scoped></style>
