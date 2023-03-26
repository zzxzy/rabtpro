<template>
    <div>
        <!-- 内容 -->
    <div class="banner2">
        <div class="wrapper">
            <!-- <div class="ad">
                <div class="a"></div>
                <div class="b"></div>
                <div class="c"></div>
                <div class="d"></div>
            </div> -->
            <ul>
                <li>
                    <a href="#">
                        <img src="../uploads/new_goods_1.jpg" alt="">
                        <h3>睿米无线吸尘器F8<br><span>899</span></h3>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="../uploads/new_goods_2.jpg" alt="">
                        <h3>智能环绕3D空调<br><span>31299</span></h3>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="../uploads/new_goods_3.jpg" alt="">
                        <h3>广东软软糯米煲仔饭<br><span>19</span></h3>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="../uploads/new_goods_4.jpg" alt="">
                        <h3>罗西机械智能手表<br>
                            <span>3399</span></h3>
                    </a>
                </li>
            </ul>
        </div>
    </div>
     <!-- 导航栏2 -->
     <!-- <div class="nav2">
        <div class="wrapper">
            <h1>人气推荐</h1>&nbsp;&nbsp;
            <div class="sa">
                <a href="#">人气爆款</a>&nbsp;&nbsp;
                <a href="#">不容错过</a>
            </div>

        </div>
    </div> -->
      <!-- 内容2 -->
      <div class="banner3">
        <div class="wrapper">
            <ul>
                <li>
                    <a href="#">
                        <img src="../uploads/popular_1.jpg" alt="">
                        <h3>特惠推荐<br><span>我猜得到 你的需要</span></h3>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="../uploads/popular_2.jpg" alt="">
                        <h3>爆款推荐<br><span>人气好推荐</span></h3>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="../uploads/popular_3.jpg" alt="">
                        <h3>场景使用一站买全<br><span>编辑精心整理推荐</span></h3>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="../uploads/popular_4.jpg" alt="">
                        <h3>领卷中心<br>
                            <span>发现更多超值优惠卷</span></h3>
                    </a>
                </li>
            </ul>

        </div>
    </div>


    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
/* 内容 */
.wrapper {
    width: 1240px;
    margin: 0 auto;
    display: flex;
}
.banner2 {
    height: 406px;
    width: 100%;
    /* background-color: coral; */
    display: flex;
}

.banner2 .ad {
    display: flex;
    justify-content: space-between;
}

.banner2 ul {
    display: flex;
}

.banner2 li {
    width: 305px;
    background-color: rgba(112, 194, 153, 0.3);
    margin-left: 5px;
}

.banner2 li img {
    height: 305px;
    width: 305px;
}

.banner2 li h3 {
    text-align: center;
    color: black;
    height: 70px;
    margin-top: 21px;
}

.banner2 li h3 span {
    color: rgb(207, 51, 51);
    display: inline-block;
    margin-top: 21px;
    position: relative;
    top: 0;
}

.banner2 li:hover {
    top: -3px;
    box-shadow: 0 3px 8px rgba(0, 0, 0, .2);
}

/* 中部内容3 */

.banner3 ul {
    display: flex;
}

.banner3 {
    height: 406px;
    background-color: rgb(255, 255, 255);
}

.banner3 li {
    /* margin: 0 15px 15px 0; */
    width: 305px;
    background-color: rgba(112, 194, 153, 0.3);
    margin-left: 5px;
    position: relative;
    top: 0;
}

.banner3 li img {
    height: 305px;
    width: 305px;
}

.banner3 li h3 {
    text-align: center;
    color: black;
    height: 88px;
    margin-top: 21px;
}

.banner3 li h3 span {
    color: rgb(170, 167, 167);
    display: inline-block;
    margin-top: 21px;
    font-weight: normal;
}

.banner3 li:hover {
    top: -3px;
    box-shadow: 0 3px 8px rgba(0, 0, 0, .2);
}



</style>