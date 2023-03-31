<template>
  <!--中部内容4  -->
  <div class="banner4">
        <div class="wrapper" >
           <div class="iu" v-for="item in jujalist" :key="item.id">
            <!-- {{ item.name }} -->
          
            <div class="left">
                
                <a href="#">
                    <img :src="`${item.picture}`" alt="">
                </a>
            </div>
            <div class="right">
                <ul>
                    <li v-for="(item,index) in jx[i++].goods" :key="index">
                        <a href="#"><img :src="`${item.picture}`" alt="">
                            <h4>{{ item.name }}}</h4>
                        </a>
                    </li>
                   
                </ul>
            </div>
           </div>
        </div>
    </div>
</template>

<script>
import {getgoods} from "@/api/index"
export default {
data(){
    return{
        i:0,
        jujalist:[],
        jx:[]
    }
},
created(){
    getgoods().then(res=>{
        this.jujalist = res.data.result
        this.jx=res.data.result
        console.log(this.jx);
        console.log(res.data.result);
    })
}
}
</script>

<style scoped>
.iu{
    display: flex;
    flex-wrap: wrap;
}
/* .right ul{
    display: flex;
    flex-wrap: wrap;
} */
.wrapper {
    width: 1240px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
}
.banner4 {
    display: flex;
}

.banner4 .wrapper .left {
    height: 600px;
    width: 240px;
    background-color: hotpink;
}

.banner4 .left img {
    width: 240px;
    height: 600px;
}

.banner4 ul {
    display: flex;
    flex-wrap: wrap;
    /* flex-direction: column; */
}

.banner4 .wrapper .right {
    height: 610px;
    width: 1000px;
    background-color: rgb(160, 192, 138);
}

.banner4 .right ul li {
    width: 145px;
    height: 145px;
    background-color: khaki;
    margin-left: 75px;
    margin-top: 20px;
    margin-bottom: 140px;
    /* flex-wrap: wrap;
    display: flex;
    flex-direction: column; */
}

.banner4 .right img {
    width: 145px;
    height: 145px;
}
</style>