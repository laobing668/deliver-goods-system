<template>
  <div class="login-page">
    <div class="inputBox">
      <el-input placeholder="请输入账号" v-model="account" clearable>
      </el-input>
      <el-input
        placeholder="请输入密码"
        v-model="password"
        show-password
        class="input2"
      ></el-input>
      <el-button class="btn" @click="login()" type="primary">登录</el-button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.login-page {
  height: 100%;
  width: 100%;
  background: url('../assets/images/login_bg.jpeg');
  padding: 20vh;
  box-sizing: border-box;
  .inputBox {
    width: 350px;
    margin: 0 auto;
    padding: 25px;
    box-sizing: border-box;
    box-shadow: 0 20px 60px rgb(0 0 0 / 40%), 0 0 150px rgb(0 0 0 / 40%);
    text-align: center;
    border-radius: 5px;
    .input2 {
      margin: 30px 0;
    }
    .btn {
      width: 100%;
    }
  }
}
</style>
<script>
import { login } from '@/request/api';
export default {
  name: 'login',
  components: {
  },
  data() {
    return {
      account: '',
      password: ''
    };
  },
  mounted() {
    this.test()
  },
  methods: {
    test() {
      console.log('store1',this.$store.state)
    },
    async login(){
      localStorage.setItem('gsuToken','test111')
      // this.$router.push({
      //   name: "/",
      // });
      this.$router.push('/')
      return
      if(!this.account){
        this.$message({
          message: '请输入账号',
          type: 'warning'
        });
        return
      }else if(!this.accountpassword){
        this.$message({
          message: '请输入密码',
          type: 'warning'
        });
        return
      }
      let data = {
        account:this.account,
        accountpassword:this.accountpassword
      }
      let result = await login(data)
      this.$store.commit('setUserInfo', result);
      this.$store.commit('setToken', result.token);
      localStorage.setItem('goodsSystemUserInfo',result)
      localStorage.setItem('gsuToken',result.token)
      this.$router.push({
        name: "/",
        // query: {
        //   stock_out_sn: item.stock_out_sn
        // }
      });
    }
  }
}
</script>
