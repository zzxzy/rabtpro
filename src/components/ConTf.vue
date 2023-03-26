<template>
  <!--中部内容4  -->
  <div class="banner4">
        <div class="wrapper">
            <div class="left">
                <a href="#">
                    <img src="../uploads/clothes_goods_cover.jpg" alt="">
                </a>
            </div>
            <div class="right">
                <ul>
                    <li>
                        <a href="#"><img src="../uploads/clothes_goods_3.jpg" alt="">
                            <h4>dfgdghgf</h4>
                        </a>
                    </li>
                    <li>
                        <a href="#"><img src="../uploads/clothes_goods_6.jpg" alt=""></a>
                    </li>
                    <li>
                        <a href="#"><img src="../uploads/clothes_goods_7.jpg" alt=""></a>
                    </li>
                    <li>
                        <a href="#"><img src="../uploads/seckill_goods_2.jpg" alt=""></a>
                    </li>
                    <li>
                        <a href="#"><img src="../uploads/collect_goods_4.jpg" alt=""></a>
                    </li>
                    <li>
                        <a href="#"><img src="../uploads/brand_goods_4.jpg" alt=""></a>
                    </li>
                    <li>
                        <a href="#"><img src="../uploads/clothes_goods_5.jpg" alt=""></a>
                    </li>
                    <li>
                        <a href="#"><img src="../uploads/clothes_goods_8.jpg" alt=""></a>
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
.wrapper {
    width: 1240px;
    margin: 0 auto;
    display: flex;
}
.banner4 {
    display: flex;
}

.banner4 .wrapper .left {
    height: 610px;
    width: 240px;
    background-color: hotpink;
}

.banner4 .left img {
    width: 240px;
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
    width: 245px;
    height: 305px;
    background-color: khaki;
    margin-left: 5px;
    /* flex-wrap: wrap;
    display: flex;
    flex-direction: column; */
}

.banner4 .right img {
    width: 245px;
    height: 245px;
}
</style>