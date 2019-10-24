<template>
    <div id="app">
        <ul>
            <li id="head">
                <div class="head">번호</div>
                글 제목
            </li>
            <li v-for="(item, index) in items" :key="index" @click="context_view(item.title, item.context, item.recom, item.reply)">
                <div class="idx">{{index}}</div>
                {{item.title}}
            </li>
        </ul>
        <el-pagination
                background
                layout="prev, pager, next"
                :total="10">

        </el-pagination>
        <div class="write"><el-button type="primary" icon="el-icon-edit" @click="write_open">작성하기</el-button></div>
    </div>
</template>

<script>
    import * as boardActions from "@/store/modules/board/types";
    import {mapActions, mapGetters, mapState} from "vuex";
    import state from "@/store/modules/board/state";


    export default {
        name: "board",
        components: {},

        computed: {
            ...mapState({
                items({board}) {
                    console.log("state ", board);
                    //console.log("DDD test111 ", board.items)
                    return board.items;
                },
                isInit({board}) {
                    return board.isInit;
                }
            })
        },

        methods: {
            context_view: function (title, con, recom, reply) {
                console.log("클릭댐 main", state.is_Show, title, con);
                this[boardActions.LOAD_SHOW_VISIBLE]({title: title, con: con, recom: recom, reply: reply});
            },
            write_open() {
                this.$message('질문 기능은 준비중입니다.');
            },
            ...mapActions(boardActions)

        },
        mounted() {
            console.log("DDD start1", this.isInit);
            if (this.isInit == false || this.loaded != "unsolved") {
                console.log("DDD start2");
                this[boardActions.LOAD_ITEMS_UNSOLVED]();
            }
        }
    }
</script>

<style scoped>
    ul {
        list-style: none;
    }

    ul li {
        padding: 30px;
        border-bottom: 1px solid #cccccc;
    }

    ul li:hover {
        background-color: #eeeeee;
    }

    ul li div {
        margin-top: 5px;
        display: inline;
        float: left;
    }

    ul li .head {
        margin-top: 0px;
        margin-left: -12px;
        display: inline;
        float: left;
        font-weight: bold;
    }

    ul #head {
        padding: 30px;
        background-color: #eeeeee;
        border-bottom: 1px solid #cccccc;
    }
    .write {
        display: inline-block;
        float: right;
    }
</style>