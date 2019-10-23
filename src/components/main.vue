<template>
    <div class="main">
        <div class="con">
            <div class="search">
                <h1>궁금한 내용을 빠르게 검색해보세요</h1>
                <el-input id="search-bar" v-model="searchInput" placeholder="검색할 내용을 입력하세요..."></el-input>
            </div>
            <div class="s_result" v-if="searchInput!=''" v-show="true">
                <ul>
                    <li v-for="(item, index) in items" :key="index" v-if="item.title.includes(searchInput)" @click="context_view(item.title, item.context)">{{item.title}}</li>
                </ul>
            </div>
            <div class="menuList">
                <el-button @click="gotoPage('board-unsolved')" type="primary" plain >답변을 기다리는 질문
                </el-button>
                <el-button @click="gotoPage('board-solved')" type="success" plain >해결이 완료된 질문
                </el-button>
                <el-button @click="gotoPage('board-popular')" type="warning" plain >인기있는 질문과 답변
                </el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import * as boardActions from "@/store/modules/board/types";
    import {mapActions, mapGetters, mapState} from "vuex";
    import App from "@/App";
    import state from "@/store/modules/board/state";

    export default {
        name: "main",

        data: function () {
            return {
                searchInput: '',
            }
        },
        computed: {
            ...mapState({
                items({board}) {
                    console.log("state >> ", board);
                    //console.log("DDD test111 ", board.items)
                    return board.items;
                },
                isInit({board}) {
                    return board.isInit;
                }
            })
        },
        methods: {
            gotoPage(pageName) {
                this.$router.push({path: "/" + pageName})
            },
            context_view: function (title, con) {
                console.log("클릭댐 main", state.is_Show, title, con);
                this[boardActions.LOAD_SHOW]();
                App.title = title;
                App.con = con;
            },
            ...mapActions(boardActions)
        },
        mounted() {
            console.log("DDD start1 main", this.isInit);
            console.log("DDD start2 main");
            this[boardActions.LOAD_ITEMS_SEARCHED]();
        }
    }
</script>

<style scoped>
    .main {
        width: 100%;
        margin-top: -3%;
    }

    h1 {
        margin-bottom: 2%;
    }

    h3 {
        color: #bbbbbb;
    }

    ul {
        display: inline;
        list-style: none;
    }

    ul li {
        padding: 8px;
        border-bottom: 1px dashed #eeeeee;
    }
    ul li:hover {
        background-color: #eeeeee;
    }

    .blank {
        padding: 10px;
    }

    .nav ul li a {
        color: #333333;
    }

    .search {
        color: #bbbbbb;
        padding-top: 10%;
        padding-bottom: 3%;
    }

    .search img {
        padding-top: 2px;
    }

    .search #search-bar {
        width: 30%;
        font-size: 18pt;
        color: #222222;
        margin-left: 10px;
    }
    .s_result {
        margin: auto;
        max-width: 60%;
        max-height: 500px;
        overflow: auto;
    }
    .menuList {
        padding-top: 50px;
    }

    .menuList .el-button {
        width: 17%;
        font-size: 18pt;
    }

    .boardName {
        font-weight: bold;
        font-size: 14pt;
    }

    .el-input {
        width: 30%;
    }

    .el-button {
        overflow: hidden;
        padding: 10px;
    }

    .el-row {
        text-align: center;

    &
    :last-child {
        margin-bottom: 0;
    }

    }

    .el-col {
        border-radius: 0px;
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
    }

    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
</style>