<template>
  <div class="login-page">
    <!-- <img src="../../../public/bg2.fc58c850.png" alt=""> -->
    <!-- 背景视频 -->
    <video
      class="login-video"
      src="../../../../top-video.mp4"
      autoplay
      mtued
      preload="auto"
      loop
      style="width:100%"
    ></video>
    <!-- 整个form提交表单 -->
    <div class="login-el-form">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <h1>天涯明月刀</h1>
        <!-- 用户名 -->
        <el-form-item label="用户名" prop="username">
          <el-input
            type="text"
            v-model="ruleForm.username"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="ruleForm.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <!-- 提交按钮 -->
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >提交信息</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
/*
  登入逻辑的实现：
    1.收集用户输入的username&password传递给后端
    2.登入过后，将后端返回的token存储到本地，跳转到主页
    3.每次请求都携带token到请求头
    4.展示token校验正确的数据
    5.校验不通过，跳转到登录页
 */

import { login } from "@/api"; //引入封装好的login方法

export default {
  data() {
    //校验用户名
    var validateUsername = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        callback();
      }
    };
    //校验密码
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      //input输入的值
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [{ validator: validateUsername, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          //代表本地校验通过
          // console.log(this.ruleForm.username,this.ruleForm.password);

          //打开登入动画
          const loading = this.$loading({
            lock: true,
            text: "loading",
            spinner: "el-icon-loading",
            background: "rgba(0,0,0,0.7)"
          });

          //发送登入请求
          login(this.ruleForm.username, this.ruleForm.password)
            .then(res => {
              // console.log(res);
              //关闭登入动画
              loading.close();

              if (res.data.state) {
                this.$message.success("还是华田记得密码啊！！");
                //用户名密码正确，讲token存入本地
                localStorage.setItem("wwd-0224", res.data.token);
                //跳转到主页
                this.$router.push("/");
              } else {
                //用户名密码错误
                this.$message.error("曹正淳你的密码错了 ！菜鸡！！");
              }
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style>
html,
body {
  height: 100%;
  width: 100%;
  border: hidden;
  overflow: hidden;
  padding: 0;
  margin: 0;
}
img {
  position: absolute;
  top: 200px;
  left: 200px;
  width: 350px;
  opacity: 0.7;
}
h1 {
  color: #fff;
  font-family: cursive;
}
.login-el-form {
  position: absolute;
  top: 80px;
  right: 150px;
  width: 400px;
  padding: 80px 0px 100px 0;
  background: rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 10%;
}
.el-form-item__label {
  width: 100px !important;
  color: #fff !important;
}

.login-video {
  height: 100%;
}
.el-button {
  width: 260px;
  font: 30px/40px "";
  background: linear-gradient(
    90deg,
    rgb(14, 241, 71),
    rgb(233, 16, 117)
  ) !important;
}
.el-form-item__label {
  width: 60px !important;
}
.el-form-item__content {
  margin-left: 60px !important;
}
.el-input__inner {
  background: rgba(100, 66, 66, 0.1) !important;
  color: #fff !important;
}
.el-form-item {
  margin: 0 40px;
}
</style>
