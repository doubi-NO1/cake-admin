<template>
   <div class="header">
       <el-row>
        <el-col :span="10" class="logo">
            <img src="/static/images/logo.png">
            <span>网站管理后台</span>            
        </el-col>
        <el-col :span="2">
            
        </el-col>
       </el-row>
   </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
.header{
    padding: 20px 30px;
    box-shadow: 0 0 5px rgba(0,0,0,0.2);
    .logo {
        img {
            border-right: #ccc solid 1px;
            padding-left: 30px;
            vertical-align: middle;
            margin-right: 15px;
        }
        span {
            font-size: 26px;
            color: #333;
            font-weight: 500;
            vertical-align: middle;
        }
    }
}
</style>
