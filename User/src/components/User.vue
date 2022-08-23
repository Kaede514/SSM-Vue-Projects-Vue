<template>
    <div>
        <h1>用户列表</h1>
        <table border="1">
            <tr>
                <th>id</th>
                <th>姓名</th>
                <th>年龄</th>
                <th>生日</th>
                <th>操作</th>
            </tr>
            <tr v-for="user in users" :key="user.id">
                <td>{{user.id}}</td>
                <td>{{user.name}}</td>
                <td>{{user.age}}</td>
                <td>{{user.birth}}</td>
                <td>
                    <!-- javascript:;阻止a链接默认事件 -->
                    <a :href="'#/user/edit/' + user.id">修改</a>
                    <a href="javascript:;" @click="delRow(user.id)">删除</a>
                </td>
            </tr>
        </table>
        <a href="#/user/add">添加</a>

        <router-view/>
    </div>
</template>

<script>
export default {
    name: "User",
    data() {
        return {
            users: []
        }
    },
    methods: {
        selectAll() {
            this.$http.get('http://localhost:8080/users?page=1&rows=5').then(res => {
                this.users = res.data.users;
            });
        },
        delRow(id) {
            this.$http.delete("http://localhost:8080/users/" + id).then(res => {
                if(res.data.success) {
                    alert(res.data.msg + '，点击确定刷新当前数据');
                    this.selectAll();
                }
            })
        }
    },
    created() {
        this.selectAll();
    },
    watch: {    //用来监听
        $route: {   //监听路由的变化
            handler: function (val, oldVal) {
                console.log(val);
                //添加用户信息跳转回用户界面时，刷新用户列表
                if(val.path === '/user') {
                    this.selectAll();
                }
            }
        }
    }
}
</script>

<style scoped>

</style>
