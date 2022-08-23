<template>
    <div>
        <h2>添加用户信息</h2>
        <form action="">
            用户名：<input v-model="user.name" type="text"/><br>
            年&#12288龄：<input v-model="user.age" type="text"/><br>
            生&#12288日：<input v-model="user.birth" type="text"/><br>
            <input type="button" @click="saveUser" value="提交"/>
        </form>
    </div>
</template>

<script>
export default {
    name: "UserAdd",
    data() {
        return {
            user: {}
        }
    },
    methods: {
        saveUser() {
            this.$http.post("http://localhost:8080/users", this.user).then(res => {
                if(res.data.success) {
                    alert(res.data.msg + '，点击确定刷新当前数据');
                    //切换路由
                    this.$router.push('/user');
                }
            });
        }
    }
}
</script>

<style scoped>

</style>
