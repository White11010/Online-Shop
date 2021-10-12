<template>
    <div class="os-catalog"> 

        <os-catalog-item
            v-for="product in PRODUCTS"
            :key="product.article"
            :product_data="product"
            @addToCart="addToCart"
        />

    </div>
</template>

<script>    
    import osCatalogItem from './os-catalog-item.vue'
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: 'os-catalog',

        components: {
            osCatalogItem

        },
        computed: {
            ...mapGetters([
                'PRODUCTS'
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
        justify-content: space-between;
    }
</style>