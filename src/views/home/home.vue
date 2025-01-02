<template>
  <div class="home">
    <home-nav-bar/>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <home-search-box/>
  </div>
</template>
  
  <script setup>
    import useHomeStore from '@/stores/modules/home'
    import HomeNavBar from './cpns/home-nav-bar.vue'
    import homeSearchBox from './cpns/home-search-box.vue';


    //发送网络请求
    const homeStore = useHomeStore()
    homeStore.fetchHotSuggests()
  
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
  