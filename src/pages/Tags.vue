<template>
<div class="tags-page">
    <div class="title">标签</div>
    <div class="all-tags">
        <span>mysql</span>
        <span>vue</span>
        <span>node.js</span>
        <span>linux</span>
    </div>
</div>
</template>
<script>
export default {

};
</script>
<style lang="scss">
body,
html
{
    background-color: #fff;
}
.tags-page{
    padding-left: 290px;
    .title{
        height: 100px;
        line-height: 100px;
        font-size: 30px;
        font-weight: 500;
    }
    .all-tags{
        display: flex;
        justify-content: flex-start;
        span{
            font-size: 16px;
            font-weight: 600;
            padding: 8px 20px;
            border-radius: 20px;
            border: 1px solid #000;
            margin-right: 18px;

            &:hover {
                background-color: #000;
                color: #fff;
                cursor: pointer;
            }
        }
    }
}
</style>
