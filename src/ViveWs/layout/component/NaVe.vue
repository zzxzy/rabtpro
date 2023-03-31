<template>
   <!-- 导航栏 -->
   <div class="nav2">
        <div class="wrapper">
            <h1>新鲜好物</h1>&nbsp;&nbsp;
            <div class="sa">
                <a href="#">新鲜出炉</a>&nbsp;&nbsp;
                <a href="#">品质靠谱</a>
            </div>
            <div class="a">
                <a href="#">查看全部</a>&nbsp;&nbsp;>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
/* 导航栏2 */
.wrapper {
    width: 1240px;
    margin: 0 auto;
    display: flex;
}
.nav2 {
    height: 112px;
    background-color: rgb(233, 251, 255);
    display: flex;
}

.nav2 h1 {
    line-height: 112px;
    width: 130px;
    font-weight: normal;
    /* flex: 1; */
}

.nav2 .sa {
    line-height: 112px;
    display: flex;
    flex: 2;
}

.nav2 .a {
    line-height: 112px;
}


</style>