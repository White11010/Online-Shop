<template>
    <div class="os-cart">
        <router-link :to="{name: 'catalog'}">
            <div class="os-catalog__link_to_cart">Back to catalog</div>
        </router-link>
        <os-cart-item
            v-for="(item, index) in CART"
            :key="item.article"
            :cart_item_data="item"
            @deleteFromCart="deleteFromCart(index)"
            
        />
   
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    import osCartItem from './os-cart-item.vue'
    
    export default {
        name: 'os-cart',
        components: {
            osCartItem,
        },
        computed: {
            ...mapGetters([
                'CART'
            ]),
        },
        props: {

        },
        methods: {
            ...mapActions([
                'DELETE_FROM_CART'

            ]),
            deleteFromCart(index) {
                this.DELETE_FROM_CART(index);
            }
        }
    }
</script>

<style>
    .os-cart{
        width: 100%;
    }
</style>