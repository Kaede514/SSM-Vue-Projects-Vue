<template>
    <div>
        <h2>编辑用户信息</h2>
        <form action="">
            用户名：<input v-model="user.name" type="text"/><br>
            年&#12288龄：<input v-model="user.age" type="text"/><br>
            生&#12288日：<input v-model="user.birth" type="text"/><br>
            <input type="button" @click="editUser" value="保存"/>
        </form>
    </div>
</template>

<script>
export default {
    name: "UserEdit",
    data() {
        return {
            user: {
                id: ''
            }
        }
    },
    methods: {
        selectOne() {
            this.$http.get('http://localhost:8080/users/' + this.user.id).then(res => {
                this.user = res.data;
            });
        },
        editUser() {
            this.$http.put('http://localhost:8080/users/', this.user).then(res => {
                if(res.data.success) {
                    alert(res.data.msg + '，点击确定刷新当前数据');
                    this.$router.push('/user');
                }
            });
        }
    },
    created() {
        this.user.id = this.$route.params.id;
        this.selectOne();
    }
}
</script>

<style scoped>

</style>
