<template>
  <div>
    <HeaDer></HeaDer>
    <NavigationBar></NavigationBar>
    <ConTenr></ConTenr>
    <!-- <router-view></router-view> -->
  
    <NaVe></NaVe>
    <ConTen></ConTen>
    <NaVf></NaVf>
    <ConTf></ConTf>
  </div>
</template>

<script>
import HeaDer from "../components/HeaDer";
import NavigationBar from "../components/NavigationBar"
import ConTenr from "../components/ConTenr"
import NaVe from "../components/NaVe"
import ConTen from "../components/ConTen"
import NaVf from "../components/NaVf"
import ConTf from "../components/ConTf"
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