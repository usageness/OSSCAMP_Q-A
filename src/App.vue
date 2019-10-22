<template>
  <div id="app">
    <el-row>
      <el-col :span="24"><div class="grid-content bg-purple-dark">
        <div class="blank"> </div>
        <el-button onClick="location.href='/'" type="primary" icon="el-icon-s-home" round plain>메인</el-button>
        <el-button onClick="location.href='/login'" type="primary" icon="el-icon-user" round plain>내 계정</el-button>
        <el-button onClick="location.href='/'" type="primary" icon="el-icon-more-outline" round plain>더보기</el-button>
        <div class="blank"> </div>
      </div></el-col>
    </el-row>
    <router-view></router-view>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.blank {
  padding: 10px;
}

.el-row {
  text-align: right;
  margin-right: 0px;
&:last-child {
   margin-bottom: 0;
 }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  padding-right: 20px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>