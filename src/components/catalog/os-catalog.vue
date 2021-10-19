<template>
    <div class="os-catalog"> 
        <os-filter-menu
            :itemFilters="itemFilters"  
        />
        <os-catalog-item
            v-for="product in PRODUCTS"
            :key="product.article"
            :product_data="product"
            @addToCart="addToCart"
        />

    </div>
</template>

<script>    
    import osCatalogItem from '../catalog/os-catalog-item.vue'
    import osFilterMenu from './os-filter-menu.vue'
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: 'os-catalog',
        components: {
            osCatalogItem,
            osFilterMenu
        },
        data() {
            return {
                itemFilters: [
                    {type: 'clothes', categories: [{name: 'T-shirt', id: 1}, {name: 'Hoodie', id: 2}, { name: 'Longsleeve', id: 3}], id: 1},
                    {type: 'accessories', categories: [{ name: 'Jewelery', id: 1}, { name: 'Bags', id: 2}], id: 2}
                ],
            }
        },
        computed: {
            ...mapGetters([
                'PRODUCTS',
                'CART'
            ]),

        },
        methods: {
            ...mapActions([
                'GET_PRODUCTS_FROM_API',
                'ADD_TO_CART'
            ]),
            addToCart(data) {
                this.ADD_TO_CART(data)
            }
        },
        mounted() {
            this.GET_PRODUCTS_FROM_API()  
        }

    }
</script>

<style>
    .os-catalog{
        display: flex;
        flex-wrap: wrap;
        justify-content: start;
        margin-top: 60px;
    }
    
</style>