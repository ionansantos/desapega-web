<template>
    <section class="products-container">
        <div v-if="products && products.length" class="products">
            <div class="products-res" v-for="(product, index) in products" :key="index">
                <router-link to="/">
                    <img v-if="product.fotos" :src="product.fotos[0].src" :alt="product.fotos[0].titulo">
                    <h2 class="title">{{product.nome}}</h2>
                    <p class="price">R$ {{product.preco}}</p>
                    <p class="description">{{product.descricao}}</p>
                </router-link>
            </div>
            <ProductsPage :productsTotal="productsTotal" :productsPerPage="productsPerPage"/>
        </div>
        <div v-else-if="products && products.length === 0" class="no-products">
            <p>Não foi possível realizar essa Busca...</p>
        </div>
    </section>
</template>

<script>
import ListProducts  from "@/components/ListProducts/ListProducts";
export default ListProducts;
</script>

<style lang="scss" scoped>
    @import "ListProducts.scss";
</style>
