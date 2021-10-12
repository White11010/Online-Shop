<template>
    <div class="os-cart">
        <h1>Cart</h1>
        <os-cart-item
            v-for="(item, index) in cart_data"
            :key="item.article"
            :cart_item_data="item"
            @deleteFromCart="deleteFromCart(index)"
        />
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    import osCartItem from './os-cart-item.vue'
    
    export default {
        name: 'os-cart',
        components: {
            osCartItem,
        },
        props: {
            cart_data: {
                type: Array,
                default() {
                    return []
                }
            }
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