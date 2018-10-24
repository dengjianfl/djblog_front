<template>
    <div class="home-page">
        <div class="home-item" v-for="(item, index) in articles" :key="index">
            <h1>
                <span>{{item.title}}</span>
                <span class="author">{{item.updateTime}}  Author : {{item.author}}</span>
            </h1>
            <div class="text">{{item.summary}}</div>
            <div class="item-label">
                <i class="iconfont icon-label"></i>
                <b>:</b>
                <span v-for="(tag, index) in item.tag" :key="index">{{tag}}</span>
            </div>
        </div>
    </div>
</template>
<script>
import moment from 'moment';
export default {
    data () {
        return {
            articles: []
        };
    },
    mounted () {
        // this.$ajax({
        //     url: `${process.env.API_MYBLOG_PATH}/getAllBlog`
        // }).then(res => {
        //     if (!res.isSuccess) {
        //         return false;
        //     }
        //     res.data.forEach(element => {
        //         element.updateTime = moment(element.updateTime).format('YYYY-MM-DD HH:mm:ss');
        //     });
        //     this.articles = res.data;
        //     console.log(this.articles);
        // });
    }
};
</script>
<style lang="scss">
.home-page{
    padding-left: 270px;
    padding-right: 20px;
    overflow: hidden;
    .home-item{
        padding-left: 18px;
        padding-right: 18px;
        background-color: #fff;
        border: solid 1px #eee;
        margin-top: 30px;
        border-radius: 6px;
        h1{
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 84px;
            border-bottom: solid 1px #ddd;
            font-size: 28px;

            .author{
                font-size: 14px;
                font-weight: normal;
            }
        }
    }
    .text{
        padding-top: 14px;
        padding-bottom: 14px;
        border-bottom: solid 1px #ddd;
        line-height: 28px;

    }
    .item-label{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 48px;
        i{
            font-size: 26px;
            color: #555;
        }
        b{
            margin-left: 4px;
            margin-right: 6px;
            font-weight: normal;
        }
        span{
            padding: 3px 6px;
            background: #000;
            color: #fff;
            font-size: 14px;
            margin-right: 8px;
        }
    }
}
</style>
