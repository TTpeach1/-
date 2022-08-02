<template>
  <div class="login-container">
    <!-- 登录框 -->
    <div class="login-box">
      <!-- 登录图标 -->
      <div class="login-icon">
        <img src="../../assets/404_images/images/login/loginicon.png" alt="" />
      </div>
      <!-- 主体内容区域 -->
      <div class="login-form">
        <div style="margin: 20px" />
        <el-form
          :label-position="labelPosition"
          :model="ruleForm"
          :rules="rules"
          ref="loginForm"
        >
          <el-form-item prop="loginName">
            <el-input
              v-model="ruleForm.loginName"
              prefix-icon="el-icon-mobile-phone"
              placeholder="请输入账号/手机号"
            />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="ruleForm.password"
              ref="password"
              prefix-icon="el-icon-lock"
              placeholder="请输入密码"
            >
              <!-- 眼睛图标 -->
              <div slot="suffix">
                <i
                  v-if="isShow"
                  class="dikede dkd-yanjing"
                  @click="isShowPass"
                />
                <i
                  v-else
                  class="dikede dkd-yanjing1"
                  @click="isShowPass"
                /></div
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="ruleForm.code"
              class="last-rz-input"
              placeholder="请输入验证码"
            >
              <p slot="prefix" class="login-rz-icon">
                <i class="dikede dkd-shimingrenzheng" />
              </p>
            </el-input>
            <div class="login-code" @click="refreshCode">
              <img ref="imgCode" src="" alt="" />
            </div>
          </el-form-item>
          <el-button type="primary" class="login-btn" @click="onSubmit"
            >login</el-button
          >
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { imageCodeApi } from '@/api'
export default {
  components: {},
  data() {
    return {
      labelPosition: 'right',
      isShow: false,
      ruleForm: {
        loginName: 'admin',
        password: 'admin',
        code: '',
        clientToken: '',
        loginType: 0
      },
      rules: {
        loginName: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          {
            pattern: /^[a-z]{5}/,
            message: '用户名格式不正确,请输入5位字母',
            trigger: 'blur'
          }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            pattern: /^[a-z]{5}/,
            message: '密码格式不正确,请输入5位字母',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  created() {
    this.imageCode()
  },
  mounted() {
    // 初始化验证
  },
  methods: {
    async onSubmit() {
      await this.$refs.loginForm.validate((result,error)=>{
        if(!result){
          return console.log(error);
        }
      })
      this.$store.dispatch('user/getToken',this.ruleForm)

      // console.log(res)
    },
    //隐藏和显示眼睛图标
    isShowPass() {
      this.isShow = !this.isShow
      if (this.isShow) {
        this.$refs.password.type = 'password'
      } else {
        this.$refs.password.type = 'text'
      }
    },
    //点击验证码图片切换
    refreshCode() {
      this.imageCode()
    },
    //获取验证码图片
    async imageCode() {
      try {
        // 随机四位整数
        const num = Math.floor(Math.random() * 10000)
        // console.log(num)
        this.ruleForm.clientToken = num
        const res = await imageCodeApi(num)
        this.$refs.imgCode.src = res.request.responseURL
        console.log(res, '获取验证码')
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('../../assets/404_images/images/login/bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  .login-rz-icon {
    line-height: 52px;
  }
  // 登录框
  .login-box {
    position: relative;
    width: 518px;
    height: 388px;
    padding: 76px 35px 0;
    background: #fff;
    -webkit-box-shadow: 0 3px 70px 0 rgb(30 111 72 / 35%);
    box-shadow: 0 3px 70px 0 rgb(30 111 72 / 35%);
    border-radius: 10px;
    .login-icon {
      position: absolute;
      width: 96px;
      height: 96px;
      top: -46px;
      left: 210px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    // 表单
    .login-form {
      .el-input {
        font-size: 16px;
      }
      // 验证码
      .login-code {
        position: absolute;
        right: 0;
        top: 1px;
      }
      // 表单框
      /deep/.el-input__inner {
        height: 52px;
        padding-left: 40px;

        .last-rz-input {
          position: relative;
        }
        .el-input--prefix .el-input__inner {
          position: relative;
        }
      }
      .el-input__suffix {
        div {
          line-height: 52px;
        }
      }
      .login-rz-icon {
        margin: 0;
        padding-left: 3px;
      }
      .login-btn {
        width: 100%;
        height: 52px;
        background: linear-gradient(262deg, #2e50e1, #6878f0);
        opacity: 0.91;
        border-radius: 8px;
        color: #fff;
        text-shadow: 0 7px 22px #cfcfcf;
      }
    }
  }
}
</style>
