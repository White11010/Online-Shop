<template>
    <div class="os-cart-item">
        <img class="os-catalog-item__pic" :src=" require('../assets/images/' + cart_item_data.image) " alt="img">
        <div class="os-cart-item__info">
            <p>{{cart_item_data.name}}</p>
            <p>{{cart_item_data.price}}</p>
            <p>{{cart_item_data.article}}</p>
        </div>
        <div class="os-cart-item__quantity">
            <p>Quantity: </p>
            {{cart_item_data.quantity}}</div>
        <button @click="deleteFromCart">Delete</button>
    </div>
</template>

<script>
    export default {
        name: "os-cart-item",
        props: {
            cart_item_data: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        methods: {
            deleteFromCart() {
                this.$emit('deleteFromCart');
            }
        },
        mounted() {

        }
    }
</script>

<style>
    .os-cart-item{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>