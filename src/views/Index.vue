<template>
    <div >
        <el-container style="height: 700px; border: 1px solid #eee">
            <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
                <el-menu :router="true" :default-openeds="['0','1']">
                    <el-submenu v-for="(one,indexOne) in $router.options.routes" :key="indexOne" :index="indexOne.toString()" v-if="one.show">
                        <template slot="title"><i class="el-icon-message"></i>{{one.name}}</template><!--:动态判断-->
                        <el-menu-item v-for="(two,indexTwo) in one.children" :key="indexTwo" :index="two.path" :class="$route.path==two.path?'is-active':''">{{two.name}}</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>

            <el-container>
                <el-header style="text-align: right; font-size: 12px">
                    <el-dropdown>
                        <i class="el-icon-setting" style="margin-right: 15px"></i>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>查看</el-dropdown-item>
                            <el-dropdown-item>新增</el-dropdown-item>
                            <el-dropdown-item>删除</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <span>王小虎</span>
                </el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>

            </el-container>

        </el-container>




    </div>
</template>

<script>
    export default {
        name: "Index"
    };
</script>

<style>
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }

    .el-aside {
        color: #333;
    }
</style>