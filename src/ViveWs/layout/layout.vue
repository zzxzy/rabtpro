

<template>
  <div>
     <HeaDer></HeaDer>
    <NavigationBar></NavigationBar>
    <router-view></router-view>
    <!-- <HeaDer></HeaDer>
    <NavigationBar></NavigationBar> -->
<!--    
    <ConTenr></ConTenr>
    
    <NaVe></NaVe>
    <ConTen></ConTen>
    <NaVf></NaVf>
    <ConTf></ConTf> -->
  </div>
</template>

<script>
import HeaDer from "../layout/component/HeaDer";
import NavigationBar from "../layout/component/NavigationBar"
import ConTenr from "../layout/component/ConTenr"
import NaVe from "../layout/component/NaVe"
import ConTen from "../layout/component/ConTen"
import NaVf from "../layout/component/NaVf"
import ConTf from "../layout/component/ConTf"
export default {
    components: {
    HeaDer,
    NavigationBar,
    ConTenr,
    NaVe,
    ConTen,
    NaVf,
    ConTf
  },
}
</script>

<style>

</style>