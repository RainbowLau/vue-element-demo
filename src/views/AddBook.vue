<template>

    <el-form :model="book" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
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
        name: "AddBook",
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
        methods: {
            submitForm(formName) {
                /*表示vue对象*/
                const _this = this

                /*this 表示该方法*/
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        console.log(this.book)
                        axios.post('http://localhost:8181/book/addBook', this.book).then(function (resultAdd) {
                            if (resultAdd.data == 'success') {
                                _this.$alert('《' + _this.book.name + '》添加成功！', '消息', {
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
                this.$refs[formName].resetFields();
            }


        }
    }
</script>


<style scoped>

</style>