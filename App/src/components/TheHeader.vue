<template>
    <header>
        <nav>
            <router-link to="/" class="logo">
                <img src="@/assets/img/desapega-letter.png" alt="Desapega" width="180">
            </router-link>
            <router-link class="btn" to="/login">Anunciar / Entrar</router-link>
        </nav>
    </header>
</template>

<script>
    export default {
        name: "TheHeader"
    }
</script>

<style scoped>

    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px 20px;
        box-shadow: 0 2px 4px rgba(30,60,90, 0.1);
    }

    

</style>
