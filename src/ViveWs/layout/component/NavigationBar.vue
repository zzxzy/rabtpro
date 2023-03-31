<template>
  <!-- 导航栏 -->
  <div class="nav">
    <div class="wrapper">
      <h1>
        <img
          src=" http://erabbit.itheima.net/img/logo.0940ebb5.png"
          alt=""
          class="p"
        />
      </h1>
      <ul>
        <li>
          <router-link replace to="/">首页</router-link>
        </li>
        <li
          @mouseover="showD(index)"
          @mouseout="hiD(index)"
          v-for="(item, index) in navList"
          :key="index">
          {{ item.children.id }}

          <router-link :to="`conta?id=${item.id}&id2=${item.children.id}`">
            {{ item.name }}</router-link
          >
        </li>
      </ul>
      <div class="as">
        <!-- <div>
                    <button class="q"></button>
                </div> -->
        <div style="box-shadow: rgb(170, 167, 167); position: 0, 0">
          <input type="text" placeholder="搜一搜" />
        </div>
        <!-- <div>
                    <button class="gw"></button>
                </div>
                <div class="s">
                    2
                </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { getHd } from "@/api/index.js";
export default {
  beforeRouteUpdate(to, from, next) {
    console.log("Route updated:", to);
    next();
  },
  data() {
    return {
      isDv: false,
      navList: [],
      categoryList: [],
    };
  },
  created() {
    // this.$http.all([this.getNavList(), this.getCategoryList()]).then((res) => {
    //   this.navList = res[0].data.result;
    //   console.log(res[0].data.result);
    // });
    this.csh();
    // let data={
    //     "page":1,
    //     "pageSize":20,
    //     "categoryId":"1005000"
    // }
    // getTemp(data).then(res=>{
    //     console.log(res);
    // })
  },
  watch: {
    $route(newVal, oldval) {
      if (newVal != oldval) {
        this.csh();
        console.log("Route changed:", newVal);
      }
    },
  },
  methods: {
    csh() {
      getHd().then((res) => {
        this.navList = res.data.result;

        console.log(res.data.result);
      });
    },
    // getNavList() {
    //   return this.$http.get(
    //     "https://apipc-xiaotuxian-front.itheima.net/home/category/head"
    //   );
    // },
    // getCategoryList() {
    //   return this.$http.get(
    //     "https://apipc-xiaotuxian-front.itheima.net/category?id=1005000"
    //   );
    // },
    showD(x) {
      if (x == 0) {
        this.isDv = true;
      }
      if (x == 1) {
        this.isDv = true;
      }
    },
    hiD(x) {
      if (x == 0) {
        this.isDv = false;
      }
      if (x == 1) {
        this.isDv = false;
      }
    },
  },
};
</script>

<style scoped>
.wrapper {
  width: 1240px;
  margin: 0 auto;
  display: flex;
  margin-bottom: 20px;
}
.data-v {
  /* position: absolute;
  left: 0;
  top: 80; */
  width: 80%;
  height: 132px;
  background-color: rgb(255, 255, 255);
}
.data-v li {
  display: inline-block;
}
.nav {
  height: 128px;
  background-color: rgb(255, 255, 255);
  float: left;
  width: 100%;
}

.nav h1 .p {
  width: 240px;
  height: 76px;
  float: left;
  line-height: 76px;
}

.nav h1 {
  padding-top: 10px;
  margin-right: 28px;
}

.nav ul {
  width: 100%;
  height: 110px;
}

.nav li {
  width: 70px;
  align-items: center;
  line-height: 110px;
  float: left;
}

.nav .as div {
  float: left;
  line-height: 110px;
}

.as .q {
  width: 22px;
  height: 27px;
  background-image: url(../images/sprites.png);
  border: 0;
  background-position: -79px -68px;
  background-color: white;
  margin-top: 54px;
}

.nav .as input {
  height: 27px;
  border: none;
  margin-left: 10px;
  /* box-shadow: rgb(170, 167, 167); */
}

.nav .gw {
  width: 22px;
  height: 27px;
  background-image: url(../images/sprites.png);
  border: 0;
  background-position: -120px -69px;
  background-color: white;
  margin-top: 54px;
}

.nav .s {
  position: absolute;
  right: -16px;
  top: 45px;
  background-color: rgb(255, 255, 255);
  width: 23px;
  height: 19px;
  border-radius: 10px;
  text-align: center;
  color: white;
  line-height: 128px;
}
</style>