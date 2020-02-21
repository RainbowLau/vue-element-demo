import Vue from 'vue'
import VueRouter from 'vue-router'
import ManageBook from "../views/ManageBook.vue";
import AddBook from "../views/AddBook.vue";
import PageFour from "../views/PageFour.vue";
import UpdateBook from "../views/UpdateBook.vue";
import Index from "../views/Index.vue";



Vue.use(VueRouter)

const routes = [
    /*动态设置菜单栏*/
  {
    path: "/",
    name: "图书管理",
    component: Index,
    show:true,
    redirect:"/ManageBook",
    children:[
      {
        path:'/manageBook',
        name:'查询图书',
        component: ManageBook
      },
      {
        path:'/addBook',
        name:'添加图书',
        component: AddBook
      }
    ]
  },
  {
    show: false,
    path:'/updateBook',
    name:'编辑图书',
    component: UpdateBook
  },

/*  {
    path: "/navigation",
    name: "导航二",
    component: Index,
    children:[
      {
        path:'/updateBook',
        name:'编辑图书',
        component: UpdateBook
      },
      {
        path:'/pageFour',
        name:'页面四',
        component: PageFour
      }

    ]
  },*/



]

const router = new VueRouter({
  mode: 'history',  /*去除网址后面的#号*/
  routes
})

export default router
