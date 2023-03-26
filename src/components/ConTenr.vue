<template>
  <!-- 内容 -->
  <div class="banner">
    <div class="wrapper">
      <div class="left">
        <ul>
          <li  @mouseover="showDiv(1)" @mouseout="hidDiv(1)">
            <a href="#">居家&nbsp;&nbsp;&nbsp;茶卡酒具 水具杯壶<span>＞</span></a>
          </li>
          <li  @mouseover="showDiv(2)" @mouseout="hidDiv(2)">
            <a href="#">美食&nbsp;&nbsp;&nbsp;面点 干果<span>＞</span></a>
          </li>
          <li  @mouseover="showDiv(3)" @mouseout="hidDiv(3)">
            <a href="#">餐厨&nbsp;&nbsp;&nbsp;数码 产品<span>＞</span></a>
          </li>
          <li  @mouseover="showDiv(4)" @mouseout="hidDiv(4)">
            <a href="#"
              >电器&nbsp;&nbsp;&nbsp;床品 四件套 被枕<span>＞</span></a
            >
          </li>
          <li  @mouseover="showDiv(5)" @mouseout="hidDiv(5)">
            <a href="#">居家&nbsp;&nbsp;&nbsp;奶粉 玩具 辅食<span>＞</span></a>
          </li>
          <li  @mouseover="showDiv(6)" @mouseout="hidDiv(6)">
            <a href="#">洗护&nbsp;&nbsp;&nbsp;护发 洗护 美妆<span>＞</span></a>
          </li>
          <li  @mouseover="showDiv(7)" @mouseout="hidDiv(7)">
            <a href="#">孕婴&nbsp;&nbsp;&nbsp;奶粉 玩具<span>＞</span></a>
          </li>
          <li @mouseover="showDiv(8)" @mouseout="hidDiv(8)">
            <a href="#">服饰&nbsp;&nbsp;&nbsp;女装 男装<span>＞</span></a>
          </li>
          <li  @mouseover="showDiv(9)" @mouseout="hidDiv(9)">
            <a href="#">杂货&nbsp;&nbsp;&nbsp;户外 图书<span>＞</span></a>
          </li>
          <li @mouseover="showDiv(9)" @mouseout="hidDiv(9)">
            <a href="#">品牌&nbsp;&nbsp;&nbsp;品牌制造<span>＞</span></a>
          </li>
        </ul>
      </div> 
      <div class="block" style="width: 100%;height: 100%;">
    <el-carousel height="500px">
      <el-carousel-item v-for="im in lbz" :key="im.id">
       <img :src="`${im.imgUrl }`" alt="" style="height:500px ;">
      </el-carousel-item>
    </el-carousel>
  </div>
      
     
      <div class="zs" v-show="isDiv">
        <div style="margin-top: 20px">
          <h2>分类推荐 <span class="xp">根据你的购买或游览推荐</span></h2>
        </div>
        <div class="tp">
          <div class="u"  v-for="(item, index) in concentList"
          :key="index">
            <div style="float: left">
              <img :src="`${item.picture}`" width="100px" alt="" />
            </div>
            <div>
              <span
                >{{ item.name }}<br />
                <p class="hd">{{ item.desc }}</p>
                <p>{{ item.price }}</p>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="zs" v-show="isDiv2">
        <div style="margin-top: 20px">
          <h2 >分类推荐 <span class="xp">根据你的购买或游览推荐</span></h2>
        </div>
        <div class="tp">
          <div class="u" v-for="(item, index) in concentList2"
          :key="index">
            <div style="float: left">
              <img :src="`${item.picture}`" width="100px" alt="" />
            </div>
            <div>
              <span
                >{{ item.name }}<br />
                <p class="hd">{{ item.desc }}</p>
                <p>{{ item.price }}</p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="zs" v-show="isDiv3">
        <div style="margin-top: 20px">
          <h2>分类推荐 <span class="xp">根据你的购买或游览推荐</span></h2>
        </div>
        <div class="tp">
          <div class="u"  v-for="(item, index) in concentList3"
          :key="index">
            <div style="float: left">
              <img :src="`${item.picture}`" width="100px" alt="" />
            </div>
            <div>
              <span
                >{{ item.name }}<br />
                <p class="hd">{{ item.desc }}</p>
                <p>{{ item.price }}</p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="zs" v-show="isDiv4">
        <div style="margin-top: 20px">
          <h2>分类推荐 <span class="xp">根据你的购买或游览推荐</span></h2>
        </div>
        <div class="tp">
          <div class="u" v-for="(item, index) in concentList4"
          :key="index">
            <div style="float: left">
              <img :src="`${item.picture}`" width="100px" alt="" />
            </div>
            <div>
              <span
                >{{ item.name }}<br />
                <p class="hd">{{ item.desc }}</p>
                <p>{{ item.price }}</p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="zs" v-show="isDiv5">
        <div style="margin-top: 20px">
          <h2>分类推荐 <span class="xp">根据你的购买或游览推荐</span></h2>
        </div>
        <div class="tp">
          <div class="u"  v-for="(item, index) in concentList5"
          :key="index">
            <div style="float: left">
              <img :src="`${item.picture}`" width="100px" alt="" />
            </div>
            <div>
              <span
                >{{ item.name }}<br />
                <p class="hd">{{ item.desc }}</p>
                <p>{{ item.price }}</p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="zs" v-show="isDiv6">
        <div style="margin-top: 20px">
          <h2>分类推荐 <span class="xp">根据你的购买或游览推荐</span></h2>
        </div>
        <div class="tp">
          <div class="u" v-for="(item, index) in concentList6"
          :key="index">
            <div style="float: left">
              <img :src="`${item.picture}`" width="100px" alt="" />
            </div>
            <div>
              <span
                >{{ item.name }}<br />
                <p class="hd">{{ item.desc }}</p>
                <p>{{ item.price }}</p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="zs" v-show="isDiv7">
        <div style="margin-top: 20px">
          <h2>分类推荐 <span class="xp">根据你的购买或游览推荐</span></h2>
        </div>
        <div class="tp">
          <div class="u"  v-for="(item, index) in concentList7"
          :key="index">
            <div style="float: left">
              <img :src="`${item.picture}`" width="100px" alt="" />
            </div>
            <div>
              <span
                >{{ item.name }}<br />
                <p class="hd">{{ item.desc }}</p>
                <p>{{ item.price }}</p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="zs" v-show="isDiv8">
        <div style="margin-top: 20px">
          <h2>分类推荐 <span class="xp">根据你的购买或游览推荐</span></h2>
        </div>
        <div class="tp">
          <div class="u" v-for="(item, index) in concentList8"
          :key="index">
            <div style="float: left">
              <img :src="`${item.picture}`" width="100px" alt="" />
            </div>
            <div>
              <span
                >{{ item.name }}<br />
                <p class="hd">{{ item.desc }}</p>
                <p>{{ item.price }}</p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="zs" v-show="isDiv9">
        <div style="margin-top: 20px">
          <h2>分类推荐 <span class="xp">根据你的购买或游览推荐</span></h2>
        </div>
        <div class="tp">
          <div class="u"  v-for="(item, index) in concentList9"
          :key="index">
            <div style="float: left">
              <img :src="`${item.picture}`" width="100px" alt="" />
            </div>
            <div>
              <span
                >{{ item.name }}<br />
                <p class="hd">{{ item.desc }}</p>
                <p>{{ item.price }}</p>
              </span>
            </div>
          </div>
        </div>
      </div>


    </div>

  </div>
</template>

<script>
import {getCategoryList,getLb} from '@/api/index.js';
export default {
  // props:['id','title'],
  data() {
    return {
      lbz:[],
      isDiv: false,
      isDiv2: false,
      isDiv3: false,
      isDiv4: false,
      isDiv5: false,
      isDiv6: false,
      isDiv7: false,
      isDiv8: false,
      isDiv9: false,
      concentList: [],
      concentList2: [],
      concentList3: [],
      concentList4: [],
      concentList5: [],
      concentList6: [],
      concentList7: [],
      concentList8: [],
      concentList9: [],
    };
  },
  created() {
    let data={
            id:"1005000"
        }
        getCategoryList(data).then(res=>{
            console.log(res);
        })
        getLb().then((res) => {
      this.lbz=res.data.result
      console.log(res.data.result[0].imgUrl);
    });
    // this.$http.all([this.getNavList(), this.getCategoryList()]).then((res) => {
    //   this.concentList = res[0].data.result[0].goods;
    //   this.concentList2 = res[0].data.result[1].goods;
    //   this.concentList3 = res[0].data.result[2].goods;
    //   this.concentList4 = res[0].data.result[3].goods;
    //   this.concentList5 = res[0].data.result[4].goods;
    //   this.concentList6 = res[0].data.result[5].goods;
    //   this.concentList7 = res[0].data.result[6].goods;
    //   this.concentList8 = res[0].data.result[7].goods;
    //   this.concentList9 = res[0].data.result[8].goods;
    // //   this.concentList3 = res[0].data.result[9].goods;
    //   console.log(res[0].data.result[2].goods);
    // });
  },
  methods: {
    // showDiv(x) {
    //     if(x==1){
    //         this.isDiv = true;
    //     }
    //     if(x==2){
    //         this.isDiv2 = true;
    //     }
    //     if(x==3){
    //         this.isDiv3 = true;
    //     }
    //     if(x==4){
    //         this.isDiv4 = true;
    //     }
    //     if(x==5){
    //         this.isDiv5 = true;
    //     }
    //     if(x==6){
    //         this.isDiv6 = true;
    //     }
    //     if(x==7){
    //         this.isDiv7 = true;
    //     }
    //     if(x==8){
    //         this.isDiv8 = true;
    //     }
    //     if(x==9){
    //         this.isDiv9 = true;
    //     }
    // },
    // hidDiv(x) {
    //  if(x==1){
    //     this.isDiv = false;
    //  }
    //  if(x==2){
    //     this.isDiv2 = false;
    //  }
    //  if(x==3){
    //     this.isDiv3 = false;
    //  }
    //  if(x==4){
    //     this.isDiv4 = false;
    //  }
    //  if(x==5){
    //     this.isDiv5 = false;
    //  }
    //  if(x==6){
    //     this.isDiv6 = false;
    //  }
    //  if(x==7){
    //     this.isDiv7 = false;
    //  }
    //  if(x==8){
    //     this.isDiv8 = false;
    //  }
    //  if(x==9){
    //     this.isDiv9 = false;
    //  }
    // },
    // // getNavList() {
    //   return this.$http.get(
    //     "https://apipc-xiaotuxian-front.itheima.net/home/category/head"
    //   );
    // },
    // getCategoryList() {
    //   return this.$http.get(
    //     "https://apipc-xiaotuxian-front.itheima.net/category?id=1005000"
    //   );
    // },
  },
  
  
};
</script>

<style scoped>
.wrapper {
    width: 1240px;
    margin: 0 auto;
    display: flex;
    height: 500px;
}
.hd {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.tp {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
  height: 80%;
 
 
  
}
.tp span{
    margin-top: 10px;
}
.tp .hd +p{
    color: rgb(232, 82, 82);
}
.tp p{
    margin-top: 10px;
   
}
.tp .u{
    width: 300px;
    height: 100px;
    margin-top: 40px;
    background-color: rgb(96, 247, 255);
}
.xp {
  font-size: 14px;
  color: rgb(236, 236, 236);
}
.zs {
    position: absolute;
    left: 280px;
    top: 30;
    background-color: rgba(255, 248, 248, 0.868);
  width: 82%;
  height: 100%;

}
.zs h2{
    margin-left: 20px;
    color: rgb(51, 53, 53);
}
.zs h2 span{
   
    color: rgb(76, 78, 78);
}
.banner {
  height: 628px;
  background-color: cadetblue;
  
  width: 100%;
}



.banner .left {
  width: 249px;
  height: 500px;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
}

.banner li a {
  color: white;
  margin-left: 36px;
}

.banner li a span {
  float: right;
  margin-right: 9px;
}

.banner li {
  display: inline-block;
  height: 50px;
  width: 100%;
  line-height: 50px;
}

.banner li:hover {
  background-color: teal;
}

/* .ty {
  width: 200px;
  height: 100px;
  background-color: rgb(20, 117, 84);
} */
</style>