<template>
    <div class="main">
        <ul>
            <li><a href="#">메인</a></li>|
            <li><a href="#">알림</a></li>|
            <li><a href="#">내 정보</a></li>|
            <li><a href="#">로그아웃</a></li>
        </ul>

        <div class="con">
            <div class="search">
                <h1>궁금한 내용을 빠르게 검색해보세요</h1>
                <img alt="search_pic" width=30 src="../assets/glass.png"><input id="search-bar" v-model="search" placeholder="검색할 내용을 입력하세요...">
            </div>

            <div class = "menuList">
                <b-button variant="outline-primary" id="unsolvedQuestion" onClick="location.href='/#/main'">답변을 기다리는 질문</b-button>
                <b-button variant="outline-primary" id="solvedQuestion" onClick="location.href='/#/main'">해결된 질문</b-button>
                <b-button variant="outline-primary" id="bestQuestion" onClick="location.href='/#/main'">띵예의 전당</b-button>
            </div>

            <div class = "postView">
                <div class="unsolved">
                    <p class="boardName">- 답변해주세요!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi eget mauris pharetra et. Non tellus orci ac auctor augue. Elit at imperdiet dui accumsan sit. Ornare arcu dui vivamus arcu felis. Egestas integer eget aliquet nibh praesent. In hac habitasse platea dictumst quisque sagittis purus. Pulvinar elementum integer enim neque volutpat ac.</p>
                </div>

                <div class="solved">
                    <p class="boardName">- 해결됐읍니다</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi eget mauris pharetra et. Non tellus orci ac auctor augue. Elit at imperdiet dui accumsan sit. Ornare arcu dui vivamus arcu felis. Egestas integer eget aliquet nibh praesent. In hac habitasse platea dictumst quisque sagittis purus. Pulvinar elementum integer enim neque volutpat ac.</p>
                </div>

                <div class="best">
                    <p class="boardName">- 킹짱 답변 모음</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi eget mauris pharetra et. Non tellus orci ac auctor augue. Elit at imperdiet dui accumsan sit. Ornare arcu dui vivamus arcu felis. Egestas integer eget aliquet nibh praesent. In hac habitasse platea dictumst quisque sagittis purus. Pulvinar elementum integer enim neque volutpat ac.</p>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "main"
    }
</script>

<style scoped>
    .main {
        width:100%;
        margin-top: -3%;
    }
    h1 {
        margin-bottom:2%;
    }
    ul {
        display: inline-block;
        padding: 0;
        margin-left: 70%;
    }
    ul li {
        display: inline;
        margin-top: 5px;
        margin-left: 10px;
        margin-right: 10px;
        list-style: none;
        color: #5d7a59;
    }
    .nav ul li a {
        color: #5d7a59;
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
    .search #search-bar{
        width: 30%;
        font-size: 18pt;
        color: #222222;
        margin-left: 10px;
    }
    .menuList {
        padding-top: 50px;
    }
    .menuList button {
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
</style>