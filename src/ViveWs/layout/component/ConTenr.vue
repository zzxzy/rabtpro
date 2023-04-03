<template>
  <!-- 内容 -->
  <div class="banner">
    <div class="wrapper">
      <div class="left">
        <ul >
          <li class="ui"  @mouseover="showDiv(index)" @mouseout="hidDiv()" v-for="(item,index) in navList" :key="index">
            <a href="#">{{ item.name }}{{item.children[0].name  }}<span>＞</span></a>
            <ul>
              <div class="zs" v-show="isDiv" style="z-index: 2;">
        <div style="margin-top: 20px">
          <h2>分类推荐 <span class="xp">根据你的购买或游览推荐</span></h2>
        </div>
        <div class="tp">
          <div class="u"  v-for="(item, index) in jpglis"
          :key="index">
            <div style="float: left">
              <!-- {{ item}} -->
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

            </ul>
          </li>
         
        </ul>
      </div> 
      <div class="block" style="width: 100%;height: 100%;z-index: 1;">
    <el-carousel height="500px">
      <el-carousel-item v-for="im in lbz" :key="im.id">
       <img :src="`${im.imgUrl }`" alt="" style="height:500px ;">
      </el-carousel-item>
    </el-carousel>
  </div>
      
     
     
    </div>

  </div>
</template>

<script>
import {getCategoryList,getLb,getHd} from '@/api/index.js';
export default {

  data() {
    return {
      navList:[],
      jpglis:[],
      lbz:[],
      jpg:[],
      isDiv: false,
    
    };
  },
  created() {
    getHd().then((res) => {
        this.navList = res.data.result;
        for(var i = 0; i < 9; i++){
          console.log(res.data.result[i].goods);
          this.jpg.push(res.data.result[i].goods)
        }

      });
      
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
   
  },
  methods: {
    showDiv(index){
      console.log(index);
      this.jpglis = this.jpg[index]
      this.isDiv = true;
    },
    hidDiv(){
      this.isDiv = false;
    }
  },
};
</script>

<style scoped>
.ui ul{
  /* display: none; */
}
.ui:hover > ul{
  display: block;
}
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
  height: 68%;
 
 
  
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
    background-color: rgb(255, 255, 255);
}
.xp {
  font-size: 14px;
  color: rgb(236, 236, 236);
}
.zs {
    position: absolute;
    left: 376px;
    top: 179px;
    background-color: rgba(255, 248, 248, 0.868);
  width: 1034px;
  height: 66%;

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
  background-color: rgb(255, 255, 255);
  
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
  /* line-height: 50px; */
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