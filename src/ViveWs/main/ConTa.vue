<template>
  <div class="bdy">
    <div class="wrapper">
      <!-- <div class="block">
    <el-carousel height="400px">
      <el-carousel-item v-for="item in lblist" :key="item.id">
       <img :src="item.imgUrl" style="height: 400px;width: 100%;">
      </el-carousel-item> 
    </el-carousel>
   </div> -->
   <div style="height: 390px;">
     ·
    <lb></lb>
   </div>
    <div class="qb" >
     
      <h1>全部分类</h1>
      <!-- <div>
          <img src="https://yanxuan.nosdn.127.net/3102b963e7a3c74b9d2ae90e4380da65.png?quality=95&imageView" alt="">
        </div> -->
      <div v-for="(item, index) in navList" :key="index">
        <!-- item.name  -->
        <div>
          <span>{{ item.name }}</span>
          <img
            :src="`${item.picture}`"
            alt=""
            style="width: 100%; height: 100%"
          />
        </div>
      </div>
      </div>
    

    <div class="ck" v-for="item in nrList" :key="item.id">
      <h1>{{ item.name }}</h1>
      <!-- <a style="text-align: right;"></a> -->
      <router-link :to="`/sub?id=${item.id}`" style="text-align: right;" tag="p">查看全部</router-link>
      <br />
      <h2>温暖柔软，品质之选</h2>
      <div style="width: 100%; height: 100%;display: flex;">
        <div  v-for="value in item.goods" :key="value.id">
          {{ value.name }}
        <img
          alt=""
          :src="value.picture"
          style="width: 160px; height: 160px;"
        />
        </div>
        
      </div>
    </div>
 
  </div>
</div>
</template>
  
  <script>
import { getLb,getCategoryList, getQbList,getCategorygoods } from "@/api/index.js";
import lb from "./lb"
export default {
  name: "ConTa",
  props: ["id,id2"],
  data() {
    return {
      i:0,
      navList: [],
      lblist: [],
      zid:[],
      nrList:[]
    };
  },
  components:{
lb
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
      console.log(res.data.result);
      this.navList = res.data.result.children;
      this.nrList = res.data.result.children;
     console.log(this.nrList);
    });
    let u={
      id:1005999003
    }
    getCategorygoods(u).then((res) => {

console.log(res);
});
    // let qb={
    //   id:this.$route.query.id
    // }
    // console.log(this.zid);
    // getQbList(qb).then((res) => {
    //   console.log(res);
    // })
		}
    
   
  },
  created() {
    getCategorygoods().then((res) => {

      console.log(res);
    });
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
  
  <style scoped>
  .wrapper {
    width: 1240px;
    margin: 0 auto;
    /* display: flex; */
    margin-bottom: 20px;
    /* background-color: aqua; */
}
  .block{
    width: 1240px;
     height: 260px; 
    position: absolute;
    display: inline-block;
  }
.hz {
  margin: auto;
  width: 80%;

  display: grid;
  place-content: center;
}
.bdy {
  background-color: rgb(255, 255, 255);
  /* width: 800px; */

}
.qb h1 {
  text-align: center;

}
.qb{
  margin-top: 140px;
}
.qb div {
  float: left;
  display: inline-block;
  width: 150px;
  height: 150px;

}
.ck {
  float: left;
  display: inline-block;
  width: 100%;

  margin-bottom: 10px;
}
.ck h1,
h2 {
  text-align: center;
}
.sj {
  float: left;
  width: 100%;
  height: 300px;

}
.sj h1,
h2 {
  text-align: center;
}
.sp {
  text-align: center;
  float: left;
  width: 100%;
  height: 100px;
}
.yp {
  text-align: center;
  float: left;
  width: 100%;
  height: 100px;
}
</style>