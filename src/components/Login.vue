<template>
  <div class="login">
    <img alt="Q logo" width=100 src="../assets/logo_Q.png"><br>
    <div class="con">
      <h1>Login</h1>
      <img alt="id_pic" width=15 src="../assets/user.png"><input v-model="id" placeholder="id"><br>
      <img alt="pw_pic" width=15 src="../assets/lock.png"><input v-model="pw" placeholder="pw">
      <button id="login" onClick="location.href='/#/main'">Login</button>

      <a id ="forgot" href="https://cli.vuejs.org" target="_blank" rel="noopener">Forgot password?</a>

      <hr/>

      <button id="facebook" onClick="location.href='/#/main'">Login With Facebook</button>
      <button id="google" onClick="location.href='/#/main'">Login With Google</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
img {
  display: inline-block;
}
.login{
  width: 100%;
  padding-top: 10%;
  padding-bottom: 8%;
}
.con{
  display: inline-block;
  margin: auto;
  width: 15%;
  padding-bottom: 30px;
  background: #dddddd;
}
.con button {
  display: inline-block;
  width: 89%;
  height: 40px;
  font-size: 16pt;
  margin-top: 10px;
}
.con input {
  display: inline-block;
  width: 80%;
  font-size: 16pt;
  margin-top: 10px;
  margin-left: 5px;
}
#forgot {
  display: inline-block;
  margin-top: 50px;
}
</style>
