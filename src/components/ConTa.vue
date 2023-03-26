<template>
  <div class="bdy">
    <div class="wrapper">
    <div class="block">
    <el-carousel height="400px">
      <el-carousel-item v-for="item in lblist" :key="item.id">
       <img :src="item.imgUrl" style="height: 400px;width: 100%;">
      </el-carousel-item>
    </el-carousel>
  
   </div>
    <div class="qb">
     
      <h1>全部分类</h1>
      <!-- <div>
          <img src="https://yanxuan.nosdn.127.net/3102b963e7a3c74b9d2ae90e4380da65.png?quality=95&imageView" alt="">
        </div> -->
      <div v-for="(item, index) in navList" :key="index">
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
    

    <div class="ck">
      <h1>-茶卡酒具-</h1>
      <br />
      <h2>温暖柔软，品质之选</h2>
      <div style="width: 130px; height: 170px">
        <img
          alt=""
          src="https://yanxuan-item.nosdn.127.net/cd2a6c9db98f656eb0386f2cc9b0b2b5.png"
          style="width: 150%; height: 100%"
        />
      </div>
    </div>
    <div class="sj">
      <h1>-水具杯壶-</h1>
      <br />
      <h2>温暖柔软，品质之选</h2>
      <div style="width: 130px; height: 170px">
        <img
          alt=""
          src="https://yanxuan-item.nosdn.127.net/c09706c1e85dd2f5c9886b4f3e0cbbf0.png"
          style="width: 150%; height: 100%"
        />
      </div>
    </div>
    <div class="sp">
      <h1>-宠物食品-</h1>
      <br />
      <h2>温暖柔软，品质之选</h2>
    </div>
    <div class="yp">
      <h1>-宠物用品-</h1>
      <br />
      <h2>温暖柔软，品质之选</h2>
    </div>
  </div>
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
    '$route' (to, from) {
    // 路由发生变化页面刷新
    console.log(to,from);
	this.$router.go(0);
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
     console.log(res);
    });
    let qb={
      id:this.zid
    }
    console.log(this.zid);
    getQbList(qb).then((res) => {
      console.log(res);
    })
  },
};
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
    height: 260px;
  }
.hz {
  margin: auto;
  width: 80%;
  background-color: rgb(255, 255, 255);
  display: grid;
  place-content: center;
}
.bdy {
  background-color: rgb(231, 236, 236);
  /* width: 800px; */

}
.qb h1 {
  text-align: center;
  background-color: rgb(253, 255, 254);
}
.qb{
  margin-top: 140px;
}
.qb div {
  float: left;
  width: 150px;
  height: 150px;
  background-color: rgb(253, 255, 254);
}
.ck {
  float: left;
  width: 100%;
  height: 300px;
  background-color: rgb(255, 255, 255);
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
  background-color: rgb(255, 255, 255);
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