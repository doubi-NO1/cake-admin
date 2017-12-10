<template>
    <div class="nav">
        <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
          >
            <el-menu-item index="1">
                <i class="el-icon-menu"></i>
                <span slot="title">模版管理</span>
            </el-menu-item>
            <el-menu-item index="2">
                <i class="el-icon-star-on"></i>
                <span slot="title">标签管理</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>
<script>
export default {
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>
<style lang="scss">
    .nav{
        position: relative;
    }
</style>