<template>
    <ul v-if="pageTotal > 1">
        <li v-for="page in pageTotal" :key="page">
            <router-link :to="{query: query(page)}" class="active-link exact-active-link">{{page}}</router-link>
        </li>
    </ul>
</template>

<script>
import ProductsPage from "@/components/ProductsPage/ProductsPage";
export default ProductsPage

</script>
<style lang="scss" scoped>
    @import "ProductsPage.scss";
</style>