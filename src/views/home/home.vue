<template>
    <div class="home">
      <home-nav-bar/>
      <div class="banner">
        <img src="@/assets/img/home/banner.webp" alt="">
      </div>

      <div class="location">
        <div class="city">广州</div>
        <div class="position">
          <span class="text">我的位置</span>
          <img src="@/assets/img/home/icon_location.png" alt="">
        </div>
      </div>
    </div>
  </template>
  
  <script setup>

    import HomeNavBar from './cpns/home-nav-bar.vue'
    // import HomeSearchBox from './cpns/home-search-box.vue'
    import homeSearchBox from './cpns/home-search-box.vue';

  
  </script>
  
  <style lang="less" scoped>
  
  .home {
    padding-bottom: 100px;
  }

  .banner {
    img {
      width: 100%;
    }
  }

  </style>
  