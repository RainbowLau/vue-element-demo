<template>
<div>
    <el-table
            :data="tableData"
            border
            style="width: 100%">
        <el-table-column
                fixed
                prop="id"
                label="ID"
                width="120">
        </el-table-column>
        <el-table-column
                prop="name"
                label="书名"
                width="180">
        </el-table-column>
        <el-table-column
                prop="author"
                label="作者"
                width="180">
        </el-table-column>
        <el-table-column
                prop="publish"
                label="出版社"
                width="180">
        </el-table-column>
        <el-table-column
                prop="pages"
                label="总页数"
                width="120">
        </el-table-column>
        <el-table-column
                prop="price"
                label="价格"
                width="120">
        </el-table-column>
        <el-table-column
                prop="bookcaseid"
                label="书列"
                width="120">
        </el-table-column>
        <el-table-column
                prop="abled"
                label="状态"
                width="120">
        </el-table-column>
        <el-table-column
                label="操作"
                width="100">
            <template slot-scope="scope">
                <el-button @click="editBook(scope.row)" type="text" size="small">修改</el-button>
                <el-button @click="deleteBook(scope.row)" type="text" size="small">删除</el-button>
            </template>
        </el-table-column>
    </el-table>

    <el-pagination
            align="right"
            background
            layout="prev, pager, next"
            :page-size="parseInt(pageSize)"
            :total="parseInt(pageTotal)"
            @current-change="changePages"
            >
    </el-pagination>
</div>






</template>

<script>
    export default {
        name: "PageOne",
        data() {
            return {
                pageSize:'',
                pageTotal:'',
                tableData: []
            }
        },
        created() {
            const _this = this
            axios.get("http://localhost:8181/book/findAllPage/0/6").then(function (resultBook) {
                _this.tableData=resultBook.data.content
                _this.pageSize=parseInt(resultBook.data.size)
                _this.pageTotal=parseInt(resultBook.data.totalElements)
            })
        },
        methods:{
            editBook(row){
                this.$router.push({
                  path:'/updateBook',
                    query:{
                      id:row.id
                    }
                })
                /*console.log(row.id)*/
                /*
                * 1. 先跳转到相应页面
                * */
            },
            deleteBook(row){
                const _this = this
                axios.delete('http://localhost:8181/book/deleteBookById/'+row.id).then(function () {
                    _this.$alert('《' + row.name + '》删除成功！', '消息', {
                        confirmButtonText: '确定',
                        callback: action => {
                            window.location.reload()
                        }
                    })
                })
            },



            /*随便传一个对象就能得到页码*/
            changePages(currentPage){
                const _this = this
                axios.get('http://localhost:8181/book/findAllPage/'+(currentPage-1)+'/6').then(function (resultBook) {
                    _this.tableData=resultBook.data.content
                    _this.pageSize=resultBook.data.size
                    _this.pageTotal=resultBook.data.totalElements
                })
            }

        }
    }

</script>

<style scoped>

</style>