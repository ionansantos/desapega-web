<template>
    <section class="products-container">
        <div class="products-res" v-for="product in products" :key="product.id">
            <img v-if="product.fotos" :src="product.fotos[0].src" :alt="product.fotos[0].titulo">
            <h2 class="titulo">{{product.nome}}</h2>
            <p class="preco">{{product.preco}}</p>
            <p class="descricao">{{product.descricao}}</p>
        </div>
    </section>
</template>

<script>
import ListProducts  from "@/components/ListProducts/ListProducts";
export default ListProducts;
</script>

<style lang="scss">
    @import "ListProducts.scss";
</style>
