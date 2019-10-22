<template>
    <div class="main">
        <div class="nav">
            <ul>
                <li><a href="#">메인</a></li>|
                <li><a href="#">알림</a></li>|
                <li><a href="#">내 정보</a></li>|
                <li><a href="#">로그아웃</a></li>
            </ul>
        </div>

        <div class="con">
            <div class="search">
                <h1>궁금한 내용을 빠르게 검색해보세요</h1>
                <img alt="search_pic" width=30 src="../assets/glass.png"><input id="search-bar" v-model="search" placeholder="검색할 내용을 입력하세요...">
            </div>

            <div class = "menuList">
                <button id="unsolvedQuestion" onClick="location.href='/#/main'">답변을 기다리는 질문</button>
                <button id="solvedQuestion" onClick="location.href='/#/main'">해결된 질문</button>
                <button id="bestQuestion" onClick="location.href='/#/main'">띵예의 전당</button>
            </div>

            <div class = "postView">
                <div class="unsolved">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi eget mauris pharetra et. Non tellus orci ac auctor augue. Elit at imperdiet dui accumsan sit. Ornare arcu dui vivamus arcu felis. Egestas integer eget aliquet nibh praesent. In hac habitasse platea dictumst quisque sagittis purus. Pulvinar elementum integer enim neque volutpat ac.</p>
                </div>

                <div class="solved">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi eget mauris pharetra et. Non tellus orci ac auctor augue. Elit at imperdiet dui accumsan sit. Ornare arcu dui vivamus arcu felis. Egestas integer eget aliquet nibh praesent. In hac habitasse platea dictumst quisque sagittis purus. Pulvinar elementum integer enim neque volutpat ac.</p>
                </div>

                <div class="best">
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
    .nav {
        text-align: right;
    }
    .nav ul li {
        display: inline-block;
        margin-top: 5px;
        margin-left: 10px;
        margin-right: 10px;
        color: #5d7a59;
    }
    .nav ul li a {
        color: #5d7a59;
    }
    .search {
        background-color: #5d7a59;
        color: #dddddd;
        padding-top: 10px;
        padding-bottom: 40px;
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
        width: 25%;
        font-size: 18pt;
        background-color: #5d7a59;
        color: #dddddd;
        border: 0;
    }
    .menuList button:hover{
        background-color: #71a25b;
    }
    .postView {
        display: inline-block;
        padding-top: 50px;
        width: 90%;
        margin-bottom: 10%;
    }
    .postView .unsolved {
        display: inline-block;
        padding: 1%;
        margin-right: 1%;
        background-color: #dddddd;
        border-radius: 10%;
        max-width: 24%;
    }
    .postView .solved {
        display: inline-block;
        padding: 1%;
        margin-left: 1%;
        margin-right: 1%;
        background-color: #dddddd;
        border-radius: 10%;
        max-width: 24%;
    }
    .postView .best {
        display: inline-block;
        padding: 1%;
        margin-left: 1%;
        background-color: #dddddd;
        border-radius: 10%;
        max-width: 24%;
    }
</style>