<template>
    <div class="os-cart-item">
        <img class="os-catalog-item__pic" :src=" require('../../assets/images/' + cart_item_data.image) " alt="img">
        <div class="os-cart-item__info">
            <p>{{cart_item_data.name}}</p>
            <p>{{cart_item_data.price}}</p>
            <p>{{cart_item_data.article}}</p>
        </div>
        <div class="os-cart-item__quantity">
            <p>Quantity: </p>
            <span>
                <span class="os-cart-item__quantity_btn" @click="decrementItem">-</span>
                {{cart_item_data.quantity}}
                <span class="os-cart-item__quantity_btn" @click="incrementItem">+</span>
            </span>
        </div>
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
            },
            decrementItem() {
                this.$emit('decrement');
            },
            incrementItem() {   
                this.$emit('increment');
            }
        },
        mounted() {
            
        }
    }
</script>

<style lang="scss">
    .os-cart-item{
        display: flex;
        justify-content: space-between;
        align-items: center;

        &__quantity{

            &_btn{
                cursor: pointer;
            }
        }
    }
</style>