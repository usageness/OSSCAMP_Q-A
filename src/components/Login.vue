<template>
    <div class="login">
        <div class="con">
            <img id="Q" alt="Q logo" width=100 src="../assets/logo_Q.png"><br>
            <el-form ref="form" :model="form" label-width="120px">
                <el-input v-model="idInput" placeholder="ID"></el-input>
                <el-input v-model="pwInput" placeholder="Password" show-password></el-input>
                <el-button @click="onSubmit()" type="success" plain>로그인</el-button>
            </el-form>

            <a id="forgot" href="https://cli.vuejs.org" target="_blank" rel="noopener">Forgot password?</a>

            <hr/>
            <router-link to="/">
                <el-button size="medium" type="primary" plain round>Facebook 로그인</el-button>
            </router-link>
            <router-link to="/">
                <el-button size="medium" type="danger" plain round>Google 로그인</el-button>
            </router-link>

        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data: function () {
            return {
                errorBag: {name: []},
                idInput: '',
                pwInput: '',
                visible: false
            }
        },
        methods: {
            onSubmit() {
                if(this.idInput != '' && this.pwInput != '')
                    this.$router.push({path: "/"});
                else
                    this.$message('아이디와 비밀번호를 확인해주세요');
            }
        }
    }
</script>


<style scoped>
    hr {
        border-color: #cccccc;
        border-style: dashed;
    }

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

    .router-link {
        display: inline-block;
    }

    #Q {
        margin-bottom: 5%;
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
        border: 1px Dashed #dddddd;
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

    .el-input {
        margin-bottom: 10px;
    }

    .el-button {
        width: 100%;
        margin-bottom: 10px;
    }
</style>
