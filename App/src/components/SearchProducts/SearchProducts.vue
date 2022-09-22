<template>
<div>
    <form class="form">
    <input name="search" type="text" id="search" v-model="search">
    <input type="submit" id="lupa" value="search" @click.prevent="SearchProducts">
    </form>
</div>
</template>
<script>
import SearchProducts from  "@/components/SearchProducts/SearchProducts";
export default SearchProducts;
</script>
<style lang="scss">
    @import "SearchProducts.scss";
</style>