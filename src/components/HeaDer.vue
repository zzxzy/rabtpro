<template>
  <div class="header">
        <div class="wrapper">
            <ul>
                <li style="margin-left: 610px;">
                    <a>请先登录</a>
                </li>
                <li>
                    <a>免费注册</a>
                </li>
                <li>
                    <a>我的订单</a>
                </li>
                <li>
                    <a>会员中心</a>
                </li>
                <li>
                    <a>帮助中心</a>
                </li>
                <li>
                    <a>在线客服</a>
                </li>

                <li>

                    <a>
                        <p class="wc"></p>手机版</a>
                </li>

            </ul>

        </div>
<router-view></router-view>
    </div>
</template>

<script>
// import {getBrand,getTemp} from '@/api/index.js';
// import { log } from 'console';

export default {
    created(){
        // getBrand({"limit":7}).then(res=>{
        //     console.log(res);
        // })
        // let data={
        //     "page":1,
        //     "pageSize":20,
        //     "categoryId":"1005000"
        // }
        // getTemp(data).then(res=>{
        //     console.log(res);
        // })
    }
};
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

ul {
    list-style: none;
}

a {
    text-decoration: none;
}
.header li .wc {
    width: 12px;
    height: 18px;
    background-image: url(../images/sprites.png);
    border: 0;
    display: inline-block;
    background-position: -160px -69px;
}

.wrapper {
    width: 1240px;
    margin: 0 auto;
    display: flex;
}

.header {
    height: 50px;
    background-color: rgb(48, 46, 46);
    margin: 0px auto;
}

.header ul li a {
    /* a标签默认是行内元素，宽高由内容撑开，并且无法设置宽高，此时默认情况用户只能点击文字区域才能调整 */
    /* 如果把a标签转换成块级元素，此时可以设置宽高，会让a标签范围更大，用户可以点击调整的区域也越大 */
    display: block;
    /* 宽度不设置块元素会默认占满一行 */
    height: 26px;
    text-decoration: none;
    color: rgb(255, 255, 255);
    text-align: center;
    line-height: 30px;
    border-right: 1px solid #ccc;
    margin-top: 12px;
    font-size: 12px;
}

.header ul li {
    position: relative;
    float: left;
    width: 90px;
    height: 50px;
    /* 自动内减 */
    box-sizing: border-box;
}

.header li a {
    color: rgb(255, 255, 255);
}

.header ul {
    display: flex;
    justify-content: end;
    align-items: center;
}

</style>