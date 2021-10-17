<template>
    <div class="os-catalog-item">
        <img class="os-catalog-item__pic" :src=" require('../../assets/images/' + product_data.image) " alt="img">
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

<style lang="scss">
    .os-catalog-item{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        flex: 0  auto;
        
        /* flex-basis: 30%; */
        /* box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22); */
        box-shadow: 0 0 8px 0 #8a8a8a00;
        margin: 0;
        padding: 70px 20px 0;
        box-sizing: border-box;
        width: 25%;
        // min-width: 300px;
        

        &__img {
            
            height: 100%;
            width: 100%;
            object-fit: contain;
        }

    }

</style>