<template>
    <div class="main">

        <div class="con">
            <div class="search">
                <el-row>
                    <el-col :span="24">
                        <div class="grid-content bg-purple-dark">
                            <h1>궁금한 내용을 빠르게 검색해보세요</h1>
                            <el-input id="search-bar" v-model="searchInput" placeholder="검색할 내용을 입력하세요..."></el-input>
                            <div class="blank"></div>
                        </div>
                    </el-col>
                </el-row>

            </div>

            <div class="menuList">
                <el-button size="medium" onClick="location.href='/'" type="primary" plain round>답변을 기다리는 질문</el-button>
                <el-button size="medium" onClick="location.href='/'" type="success" plain round>해결된 질문</el-button>
                <el-button size="medium" onClick="location.href='/'" type="warning" plain round>띵예의 전당</el-button>
            </div>

            <div class="postView">
                <div class="unsolved">
                    <p class="boardName">- 답변해주세요!</p>
                    <ul>
                        <li v-for="post in list1" :key="post">{{post}}</li>
                    </ul>
                </div>

                <div class="solved">
                    <p class="boardName">- 해결됐읍니다</p>
                    <ul>
                        <li v-for="post in list2" :key="post">{{post}}</li>
                    </ul>

                </div>

                <div class="best">
                    <p class="boardName">- 킹짱 답변 모음</p>
                    <ul>
                        <li v-for="post in list3" :key="post">{{post}}</li>
                    </ul>

                </div>

            </div>
        </div>
    </div>
</template>

<script>
    /*
    var board1 = {
        list:["질문글의제목1","질문글의제목2","질문글의제목3","질문글의제목4","질문글의제목5"]
    }
    */


    export default {
        name: "main",
        el: '.unsolved',
        data: function () {
            return {
                searchInput: '',

                list1: ["질문 글 제목1", "질문 글 제목2", "질문 글 제목3"],
                list2: ["답변 완료 글 제목1", "답변 완료 글 제목2", "답변 완료 글 제목3"],
                list3: ["띵답 글 제목1", "띵답 글 제목2", "띵답 글 제목3"]


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
        background-color: #5d7a59;
        color: #dddddd;
        padding-top: 3%;
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

    .menuList {
        padding-top: 50px;
    }

    .menuList .el-button {
        width: 17%;
        font-size: 18pt;
    }

    .postView {
        display: inline-block;
        padding-top: 50px;
        width: 90%;
        margin-bottom: 10%;
    }

    .postView .unsolved {
        display: inline-block;
        text-align: left;
        padding: 1%;
        margin-right: 0.5%;
        background-color: #dddddd;
        border-radius: 10%;
        max-width: 24%;
    }

    .postView .solved {
        display: inline-block;
        text-align: left;
        padding: 1%;
        margin-left: 0.5%;
        margin-right: 0.5%;
        background-color: #dddddd;
        border-radius: 10%;
        max-width: 24%;
    }

    .postView .best {
        display: inline-block;
        text-align: left;
        padding: 1%;
        margin-left: 0.5%;
        background-color: #dddddd;
        border-radius: 10%;
        max-width: 24%;
    }

    .boardName {
        font-weight: bold;
        font-size: 14pt;
    }


    .el-input {
        width: 30%;
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