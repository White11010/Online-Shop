<template>
    <div class="os-header">
        
        <router-link :to="{name: 'catalog'}">
            <div class="os-header__logo">MY ONLINE SHOP</div>
        </router-link>
        

        <router-link :to="{name: 'cart'}">
            <div class="os-header__link_to_cart">CART: {{CART.length}}</div>
        </router-link>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: 'os-header',
        computed: {
            ...mapGetters([
                'CART'
            ])
        }
    }
</script>

<style lang="scss">

    .os-header{
  
        position: fixed;
        top: 0;
        left: 0;
        padding: 18px 30px;
        width: 100%;
        min-height: 60px;
        box-sizing: border-box;
        background-color: black;
        display: flex;
        justify-content: space-between;
        align-items: center;

        
        &__logo{
            color: #FFF;
            font-size: 18px;
            font-weight: bold;
        }   
        &__link_to_cart{
            color: #FFF;
            font-size: 18px;

        } 
    }

</style>

