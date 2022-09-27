<template>
<div>
    <form  class="form">
    <input id="search" type="text"  v-model="search" placeholder="Estou procurando por....">
    <input type="submit" id="lupa" value="search" @click.prevent="SearchProducts">
    </form>
    <div class="category">
        <ul class="category-list">
            <li>
                <img :src="gym" alt="">
                <p>Academia</p>
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
                <img :src="sports" alt="">
                <p>Esportes e Lazer</p>
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