<template>
  <!-- 商品信息 -->
  <div class="wrapper">
    <div class="dd">
        <div class="love">
      <div class="dt">
        <img :src="images[0]" alt="" width="100%" height="100%" />
      </div>
      <ul class="small">
        <li v-for="(img, i) in images" :key="img" :class="{ active: i === 1 }">
          <img
            @mouseenter="currIndex = i"
            :src="img"
            alt=""
            width="64px"
            height="64px"
          />
        </li>
      </ul>
    </div>
    <div class="rj">
<p></p>
<p></p>
<p></p>
<div>
    
</div>
    </div>
    </div>
    
  </div>
</template>

<script>
import { getproductgoods } from "@/api/index";
export default {
  name: "product",
  props: ["id"],
  data() {
    return {
      images: [],
    };
  },
  created() {
    console.log(this.$props.id);
    let u = {
      id: this.$props.id,
    };
    getproductgoods(u).then((res) => {
      this.images = res.data.result.mainPictures;
      console.log(res.data.result.mainPictures);
    });
  },
};
</script>

<style  scoped>
.rj{
    background-color: aquamarine;
}
.dd{
    display: flex;
    width: 580px;
    height: 600px;
}
ul li{
    margin-bottom: 20px;
    margin-left: 10px;
}
.love{
    display: flex;
    width: 100%;
    height: 400px;
}
.dt{
    width: 400px;
    height: 400px;
    background: #f5f5f5;
   
    cursor: move;
}
.wrapper {
  width: 1240px;
  margin: 0 auto;
  /* display: flex; */
  margin-bottom: 20px;
  /* background-color: aqua; */
}
.tty {
  display: flex;
}

</style>