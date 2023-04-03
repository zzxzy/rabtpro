<template>
  <div class="wrapper">
    <div class="top1">
        <div style="color:gainsboro ;">品牌：</div>
    <div>      
  <div>
    <a href="" style="color: greenyellow;">全部</a>
<a href="" v-for="item in pp
" :key="item.id">{{ item.name }}</a>
</div>
    </div>
    </div>
   <div class="top">
    
<div  style="color:gainsboro ;">颜色：</div>
<div>
    <a href="" style="color: greenyellow;">全部</a>
<a href="" v-for="item in cslist
" :key="item.id">{{ item.name }}</a>
</div>
   </div>
   <div class="bu">
<div class="nv">  
   <div class="mr">
    <a href="">默认排序</a>
    <a href="">最新商品</a>
    <a href="">最高人气</a>
    <a href="">评论最多</a>
    <a href="">价格排序</a>
   </div>
    <div>
        <label>
            <input type="checkbox" name="hobbies" value="reading">
            仅显示有货商品
        </label>
        <label>
            <input type="checkbox" name="hobbies" value="reading">
            仅显示特惠商品
        </label>
    </div>
</div>
<ul class="qb">
     <router-link :to="`/product?id=${item.id}`" style="text-align: right;" tag="li" v-for="item in qblist" :key="item.id">
    <!-- {{ item.name }} -->
    <img
          alt=""
          :src="item.picture"
          style="width: 160px; height: 160px;"
        /> 
        <p>{{ item.name }}</p>
        <p>{{ item.desc }}</p>
        <p>{{ item.price }}</p>
    </router-link>
</ul>
   </div>
  </div>
</template>

<script>
import {getCategorygoods,getfilter} from "@/api/index"
export default {
    name: "sub",
  props: ["id"],
  data(){
    return {
        cslist:[],
        pp:[],
        qblist:[]
    }
  },
 created(){
    console.log(this.$props.id);
    let u={
      id:this.$props.id,
      page:1,
      pageSize:60,
      pages:18
    }
    getCategorygoods(u).then((res) => {
this.qblist=res.data.result.items
console.log(res.data);
}),
getfilter(u).then(res=>{
    this.pp=res.data.result.brands
    console.log(res.data.result.brands);
    this.cslist=res.data.result.saleProperties[0].properties
    console.log(res.data.result.saleProperties[0].properties);
    console.log(this.cslist);
 })
 },
 
}
</script>

<style scoped>
.mr{
    width: 588px;
    height: 30px;
    display: flex;
    margin-bottom: 20px;
    margin-top: 40px;
}
.mr a{
    width: 97px;
    height: 30px;
    border: 1px solid rgb(236, 236, 236);
    text-align: center;
    line-height: 30px;
   
}
.mr a:first-child{
    background: #27ba9b;
    border-color: #27ba9b;
    color: #fff;
}
.nv{
    display: flex;
    justify-content: space-between;
}
.qb{
    display: flex;
    flex-wrap: wrap;
    padding: 0 20px;
}
.qb li{
    width: 220px;
    height: 299px;
}
.qb p{
    text-align: center;
}
.wrapper {
    width: 1240px;
    margin: 0 auto;
    /* display: flex; */
    margin-bottom: 20px;
    /* background-color: aqua; */
}
.top{
    width: 100%;
    display: flex;
    height: 138.97;
    background-color: rgb(218, 195, 224);
}
.top1{
    width: 100%;
    display: flex;
    height: 138.97;
    background-color: rgb(192, 250, 196);
    margin-bottom: 20px;
}
.top a{
    width: 70px;
    height: 40px;
    margin-right: 36px;
}
.top1 a{
    width: 70px;
    height: 40px;
    margin-right: 36px;
}
</style>