<template>
    <section class="login">
            <h1>Login</h1>
        <form>
            <label for="email">Email</label>
            <input type="email" name="email" v-model="login.email">
            <label for="senha">Senha</label>
            <input type="password" name="password" v-model="login.senha">
            <button class="btn" @click="logar">Logar</button>
        </form>
        <p class="perdeu">
            <a href="/" target="_blank">Perdeu a senha ? Clique aqui.</a>
        </p>
        <LoginCreate/>
    </section>
</template>
<script>
    import Login from "@/views/Login/Login";
    export default Login;
</script>
<style  lang="scss" scoped>
    @import "Login.scss";
</style>