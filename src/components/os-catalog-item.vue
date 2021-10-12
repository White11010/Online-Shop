<template>
    <div class="os-catalog-item">
        <img class="os-catalog-item__pic" :src=" require('../assets/images/' + product_data.image) " alt="img">
        <p class="os-catalog-item__name">{{product_data.name}}</p>
        <p class="os-catalog-item__price">Price: {{product_data.price}} руб.</p>
        <button 
            class="os-catalog-item__add_to_cart_btn btn" 
            @click="addToCart"
        >Add to cart
        </button>
    </div>
</template>

<script>
export default {
    name: 'os-catalog-item',
    props: {
        product_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
        addToCart() {
            this.$emit('addToCart' ,this.product_data)
        }
    }
}
</script>

<style>
    .os-catalog-item{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        flex-basis: 30%;
        /* box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22); */
        box-shadow: 0 0 8px 0 #8a8a8a00;
        margin: 8px;
    }

</style>