<template>
    <div class="main">
        <div class="con">
            <div class="search">
                <h1>궁금한 내용을 빠르게 검색해보세요</h1>
                <el-input id="search-bar" v-model="searchInput" placeholder="검색할 내용을 입력하세요..."></el-input>
            </div>
            <div class="s_result">
                <ul>
                    <li v-if="searchInput != ''"><h3>해당하는 내용이 없습니다</h3></li>
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

    export default {
        name: "main",
        el: '.unsolved',

        data: function () {
            return {
                searchInput: '',
            }
        },
        methods: {
            gotoPage(pageName) {
                this.$router.push({path: "/" + pageName})
            }
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
        max-height: 500px;
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