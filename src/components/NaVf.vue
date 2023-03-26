<template>
   <!-- 中部导航 -->
   <div class="bannernav2">
        <div class="wrapper">
            <div class="left">
                <h1>服饰</h1>
            </div>
            <div class="right">
                <ul>

                    <li style="margin-left: 500px;">
                        <a href="#">鞋子</a>
                    </li>

                    <li>
                        <a href="#">衣服</a>
                    </li>
                    <li>
                        <a href="#">鞋子</a>
                    </li>

                    <li>
                        <a href="#">衣服</a>
                    </li>
                    <li>
                        <a href="#">衣服</a>
                    </li>
                    <li>
                        <a href="#">鞋子</a>
                    </li>

                    <li>
                        <a href="#">衣服</a>
                    </li>
                    <li>
                        <a href="#">查看全部＞</a>
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
/* 中部导航3 */
.wrapper {
    width: 1240px;
    margin: 0 auto;
    display: flex;
}
.bannernav2 {
    height: 115px;
    background-color: white;
    display: flex;
}

.bannernav2 .left {
    line-height: 100px;
    margin-right: 40px;
}

.bannernav2 .left h1 {
    font-weight: 400;
    font-size: 30px;
}

.bannernav2 .right li {
    margin-right: 9px;
    margin-top: 40px;
}

.bannernav2 ul {
    display: flex;
}

.bannernav2 .right li a {
    color: rgb(32, 31, 31);
    height: 22px;
    width: 66px;
    display: inline-block;
    text-align: center;
    overflow: hidden;
}

.bannernav2 .right li:hover {
    background-color: rgb(155, 190, 155);
}

.bannernav2 .right li:nth-child(8n) {
    float: right;
}

</style>