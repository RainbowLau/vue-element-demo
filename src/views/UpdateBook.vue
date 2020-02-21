<template>

    <el-form :model="book" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
        <el-form-item label="书名" prop="id">
            <el-input v-model="book.id" readOnly></el-input>
        </el-form-item>
        <el-form-item label="书名" prop="name">
            <el-input v-model="book.name" ></el-input>
        </el-form-item>
        <el-form-item label="作者" prop="author">
            <el-input v-model="book.author" ></el-input>
        </el-form-item>
        <el-form-item label="出版社" prop="publish">
            <el-input v-model="book.publish" ></el-input>
        </el-form-item>
        <el-form-item label="页码" prop="pages">
            <el-input  v-model.number="book.pages" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="价格" prop="price">
            <el-input  v-model.number="book.price" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="数列" prop="bookcaseid">
            <el-input  v-model.number="book.bookcaseid" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="状态" prop="abled">
            <el-input  v-model.number="book.abled" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
    </el-form>
</template>



<script>
    export default {
        name: "UpdateBook",
        data() {
            return {
                book: {
                    id: '',
                    name: '',
                    author: '',
                    publish: '',
                    pages: '',
                    price: '',
                    bookcaseid: '',
                    abled: ''
                },
                rules: {
                    name: [
                        {required: true, message: '请输入活动名称', trigger: 'blur'},
                    ],

                    pages: [
                        {required: true, message: '编号不能为空'},
                        {type: 'number', message: '编号必须为数字值'}
                    ]
                }
            };
        },
        created() {
            const _this = this
            axios.get('http://localhost:8181/book/findBookById/'+this.$route.query.id).then(function (result) {
                _this.book = result.data
            })
        },
        methods: {
            submitForm(formName) {
                /*表示vue对象*/

                const _this = this
                /*this 表示该方法*/
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        console.log(this.book)
                        axios.put('http://localhost:8181/book/updateBook', this.book).then(function (resultUpdate) {
                            if (resultUpdate.data == 'success') {
                                _this.$alert('《' + _this.book.name + '》修改成功！', '消息', {
                                    confirmButtonText: '确定',
                                    callback: action => {
                                        _this.$router.push('/ManageBook')
                                    }
                                })
                            }
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                //this.$refs[formName].resetFields();
                const _this = this
                axios.get('http://localhost:8181/book/findBookById/'+this.$route.query.id).then(function (result) {
                    _this.book = result.data
                })
            }


        }
    }
</script>


<style scoped>

</style>