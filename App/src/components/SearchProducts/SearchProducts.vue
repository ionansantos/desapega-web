<template>
<div>
    <form  class="form">
    <input class="search" name="search" type="text" id="search" v-model="search" placeholder="Estou procurando por....">
    <mdicon name="Magnify" size="50" id="lupa" value="search" @click.prevent="SearchProducts"></mdicon>
    </form>
    <div class="category">
        <ul class="category-list">
            <li>
                <img :src="purchases" alt="">
                <p>mercado</p>
            </li>
            <li>
                <img :src="travel" alt="">
                <p>Viagens</p>
            </li>
            <li>
                <img :src="computing" alt="">
                <p>Informática</p>
            </li>
            <li>
                <img :src="music" alt="">
                <p>Musica</p>
            </li>
            <li>
                <img :src="jobs" alt="">
                <p>Compras</p>
            </li>
            <li>
                <img :src="properties" alt="">
                <p>imoveis</p>
            </li>
        </ul>
    </div>
</div>
</template>
<script>
import SearchProducts from  "@/components/SearchProducts/SearchProducts";
export default SearchProducts;
</script>
<style lang="scss">
    @import "SearchProducts.scss";
</style>