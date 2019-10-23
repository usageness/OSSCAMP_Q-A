<template>
    <div id="app">
        <div class="nav">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item index="0" disabled><img
                        src="./assets/realLogo.png" alt="logo">
                </el-menu-item>
                <router-link to="/" tag="el-menu-item" index="1">메인</router-link>
                <el-submenu index="2">
                    <template slot="title">질문과 답변</template>
                    <router-link to="/board-unsolved" tag="el-menu-item" index="2-1">답변이 필요한 질문</router-link>
                    <router-link to="/board-solved" tag="el-menu-item" index="2-2">해결이 완료된 질문</router-link>
                    <router-link to="/board-popular" tag="el-menu-item" index="2-3">인기있는 질문</router-link>
                </el-submenu>
                <div class="block">
                    <router-link to="/login"><el-avatar :size="40" :src="circleUrl"></el-avatar></router-link>
                </div>
            </el-menu>
        </div>

        <router-view></router-view>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                activeIndex: '1',
                url: './assets/realLogo.png',
                circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                // eslint-disable-next-line no-console
                console.log(key, keyPath);
            }
        }
    }
</script>


<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        width: 80%;
        min-width: 650px;
        margin-left: 10%;
        margin-right: 10%;
        color: #2c3e50;
    }

    .nav {
        display: block;
    }

    .el-menu {
        width: 100%;
    }

    .el-avatar {
      margin-top: 10px;
      margin-right: 10px;
      float: right;
    }

    .blank {
        padding: 10px;
    }

    .el-row {
        text-align: right;
        margin-right: 0px;

    &
    :last-child {
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