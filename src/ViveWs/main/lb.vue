<template>
<div class="block">
    <el-carousel height="400px">
      <el-carousel-item v-for="item in lblist" :key="item.id">
       <img :src="item.imgUrl" style="height: 400px;width: 100%;">
      </el-carousel-item>
    </el-carousel>  
    </div>
</template>

<script>
import { getLb,getCategoryList, getQbList } from "@/api/index.js";
export default {
    name: "ConTa",
  props: ["id,id2"],
  data() {
    return {
      navList: [],
      lblist: [],
      zid:[],
    };
  },
  watch: {
    $route(newVal, oldVal) {
    // 路由发生变化页面刷新
   if(newVal!=oldVal) {
    getLb().then((res) => {
      this.lblist=res.data.result
      console.log(res.data.result);
    })
    let data = {
      id: this.$route.query.id,
    };
    getCategoryList(data).then((res) => {
      console.log(res);
      this.navList = res.data.result.children;
     console.log(res);
    });
		}
    
   
  },
  created() {
    // getHd().then((res) => {
    //   this.navList = res.data.result[0].children;

    //   console.log(res.data.result[0].children[0].picture);
    // });
    getLb().then((res) => {
      this.lblist=res.data.result
      console.log(res.data.result);
    });
    
    // let z=this.$route.query.id
    console.log(this.$route.query.id);
    console.log(this.$route.query.id2);
    let data = {
      id: this.$route.query.id,
    };
    getCategoryList(data).then((res) => {
      this.navList = res.data.result.children;
this.zid=res.data.result.children.id;
     console.log(this.navList);
    });
    let qb={
      id:this.zid
    }
    console.log(this.zid);
    getQbList(qb).then((res) => {
      console.log(res);
    })
  },
}}

</script>

<style>

</style>