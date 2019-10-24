<template>
    <div id="app">
        <div class="nav">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item index="0">
                    <img src="./assets/realLogo.png" alt="logo">
                </el-menu-item>
                <router-link to="/" tag="el-menu-item" index="1">메인</router-link>
                <el-submenu index="2">
                    <template slot="title">질문과 답변</template>
                    <router-link to="/board-unsolved" tag="el-menu-item" index="2-1">답변이 필요한 질문</router-link>
                    <router-link to="/board-solved" tag="el-menu-item" index="2-2">해결이 완료된 질문</router-link>
                    <router-link to="/board-popular" tag="el-menu-item" index="2-3">인기있는 질문</router-link>
                </el-submenu>
                <div class="block">
                    <router-link to="/login">
                        <el-avatar :size="40" :src="circleUrl"></el-avatar>
                    </router-link>
                </div>
            </el-menu>
        </div>

        <div>
            <div v-show="showing">
                <span id="postTitle">{{posting.title}}</span>
                <el-divider></el-divider>
                <span id="postContext">{{posting.con}}</span>
                <div id="postRecom">
                    <el-button type="warning" icon="el-icon-star-off" circle plain></el-button>
                    <span id="recomm">{{posting.recom}}</span>
                </div>
                <el-divider></el-divider>
                <div id="postReply">
                    <i class="el-icon-chat-square"></i>
                    <div id="replyarea">
                        <span class="replyblock">{{posting.reply}}</span>

                        <span class="replyblock">
                            <el-input
                                    type="textarea"
                                    :autosize="{ minRows: 2, maxRows: 6}"
                                    placeholder="답변을 작성해주세요"
                                    v-model="replyinput">
                            </el-input>
                        </span>
                    </div>
                </div>
                <div id="postButton">
                    <el-button @click="reply_open" type="primary" icon="el-icon-edit" plain>
                        답변하기
                    </el-button>
                    <el-button @click="handle_toggle" type="primary" plain>
                        닫기
                    </el-button>
                </div>
            </div>
        </div>

        <router-view></router-view>
    </div>
</template>


<script>
    import state from "@/store/modules/board/state";
    import * as boardActions from "@/store/modules/board/types";
    import {mapActions, mapGetters, mapState} from "vuex";

    export default {
        data() {
            return {
                activeIndex: '1',
                url: './assets/realLogo.png',
                circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
                replyinput: '',
            };
        },
        computed:
            mapGetters({
                showing: 'getShow',
                posting: 'getPost'
            })
        ,
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            handle_toggle: function () {
                this[boardActions.LOAD_SHOW_INVISIBLE]();
            },
            reply_open() {
                this.$message('답변 기능은 준비중입니다.');
            },
            ...mapActions(boardActions)
        },
        mounted() {
            this[boardActions.LOAD_SHOW_INVISIBLE]();
            console.log(state.is_Show);
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

    #postTitle {
        display: block;
        font-size: 16pt;
        padding-top: 30px;
        color: #aaaaaa;
        font-weight: bold;
    }

    #postContext {
        display: block;
        font-size: 14pt;
        color: #aaaaaa;
        padding-bottom: 30px;
    }

    #postRecom {
        display: block;
        color: #444444;
        padding-bottom: 10px;

    }

    #recomm {
        padding-left: 20px;
        color: #E6A23C;
        font-weight: bold;
    }

    #postReply {
        display: inline-block;
        color: #aaaaaa;
        padding-bottom: 10px;
        width: 80%;
        overflow: auto;
    }

    #postReply i {
        width: 5%;
    }
    #replyarea {
        display: inline-block;
        width: 85%;
    }

    .replyblock {
        display: inline-block;
        text-align: left;
        width: 100%;
        padding-top: 15px;
        padding-bottom: 15px;
        padding-left: 25px;
        padding-right: 25px;
        border: 1px dashed #dddddd;
    }

    #postButton {
        display: block;
    }
</style>