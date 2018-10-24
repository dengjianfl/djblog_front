<template>
<div class="base-side">
    <div class="person-img">
        <img src="../assets/images/avatar.png" alt="">
    </div>
    <div class="name">邓健的博客</div>
    <div class="text">时刻保持一颗上进心</div>
    <div class="nav">
        <ul>
            <router-link :to="{path: '/'}" active-class="active" exact>
                <li class="nav-item">
                    <i class="iconfont icon-homepage"></i>
                    <span>首页</span>
                </li>
            </router-link>
            <router-link :to="{path: '/classification'}" active-class="active" exact>
                <li class="nav-item">
                    <i class="iconfont icon-activity"></i>
                    <span>归类</span>
                </li>
            </router-link>
            <router-link :to="{path: '/tags'}" active-class="active" exact>
                <li class="nav-item">
                    <i class="iconfont icon-label"></i>
                    <span>标签</span>
                </li>
            </router-link>
             <li class="nav-item">
                <i class="iconfont icon-accessory"></i>
                <span>友链</span>
            </li>
             <li class="nav-item">
                <i class="iconfont icon-people"></i>
                <span>关于</span>
            </li>
        </ul>
    </div>
</div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.base-side{
    width: 250px;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background: #252736 url(../assets/images/base-side-bg-pic.png);
    color: #8e8e8e;
    z-index: 10002;
}
.person-img{
    margin: 0 auto;
    width: 120px;
    height: 120px;
    margin-top: 50px;
    background-color: #fff;
    border-radius: 50%;
    overflow: hidden;

    img{
        width: 100%;
        height: auto;
        border: none;
    }
}
.name{
    font-size: 18px;
    text-align: center;
    margin-top: 17px;
}
.text{
    font-size: 14px;
    text-align: center;
    margin-top: 10px;
}
.nav{
    margin-top: 22px;
    border-top: solid 1px #000;
    border-bottom: solid 1px #444;
    .nav-item{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 48px;
        border-top: solid 1px #444;
        border-bottom: solid 1px #000;
        padding-right: 40px;
        .iconfont{
            margin-right: 22px;
        }
        span{
            font-size: 15px;
        }
    }
    a{
        color: #8e8e8e;
    }
    .active{
        color: #fff;
    }
}
</style>
