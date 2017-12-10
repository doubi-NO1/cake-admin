<template>
    <div class="home">
        <img src="/static/images/bg.jpg" alt="bg">
        <div class="login">
            <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
                <el-form-item label="用户名:">
                    <el-input v-model="user" placeholder="用户名"></el-input>
                </el-form-item>
                <el-form-item label="密码:">
                    <el-input v-model="password" placeholder="密码" type="password"></el-input>
                </el-form-item>
                <el-button type="primary" class="login-btn">登录</el-button>
            </el-form>
        </div>
    </div>
</template>
<script>
export default {
  data() {
      return {
           user: '',
           password: '',
           labelPosition: 'right',
           formLabelAlign: {
                name: '',
                region: '',
                type: ''
           }    
      };
  }
}
</script>
<style lang="scss">
    .home {
        margin-top: 10px;
        border-top: 5px solid #f69225;
        position: relative;
        .login{
            position: absolute;
            width: 400px;
            border-radius: 10px;
            border: 3px solid rgba(255,255,255,0.5);
            background: #fff;
            top: 105px;
            right: 50px;
            padding: 30px 10px 20px 10px;
        }
        .login-btn{
            display: block;
            margin: 0 auto;
            width: 200px;
            background: #f69225;
            border: #f69225 solid 1px;
        }
    }
</style>

