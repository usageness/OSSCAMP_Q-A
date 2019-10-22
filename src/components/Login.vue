<template>
    <div class="login">
        <div class="con">
            <img id="Q" alt="Q logo" width=100 src="../assets/logo_Q.png"><br>
            <el-form ref="form" :model="form" label-width="120px">
                <el-input v-model="idInput" placeholder="ID"></el-input>
                <el-input v-model="pwInput" placeholder="Password"></el-input>
                <el-button onClick="location.href='/'" type="success" plain>로그인</el-button>
            </el-form>

            <a id="forgot" href="https://cli.vuejs.org" target="_blank" rel="noopener">Forgot password?</a>

            <hr/>
            <el-button size="medium" onClick="location.href='/'" type="primary" plain round>Facebook 로그인</el-button>
            <el-button size="medium" onClick="location.href='/'" type="danger" plain round>Google 로그인</el-button>

        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data: function () {
            return {
                idInput:'',
                pwInput:''
            }
        }
    }
</script>


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

    #Q {
        margin-bottom:5%;
    }

    .login {
        width: 100%;
        padding-top: 10%;
        padding-bottom: 8%;
        margin-top: -5%;
    }

    .con {
        display: inline-block;
        margin: auto;
        width: 20%;
        padding: 2%;
        background: #dddddd;
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
