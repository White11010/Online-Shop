<template>
    <div class="os-main-wrapper">
        <p>{{title}}</p>
        <os-catalog/>
        <os-cart 
            v-if="CART.length"
            :cart_data="CART"
        />
    </div>
</template>

<script>
import OsCart from './os-cart.vue'
import OsCatalog from './os-catalog.vue'
import {mapGetters} from 'vuex'


    export default {
        name: 'os-main-wrapper',
        components: {
            OsCatalog,
            OsCart

        },
        props: {},
        data() {
            return {
                title: 'Main Wrapper'
            }
        },
        computed: {
            ...mapGetters([
                'CART'
            ])
        },
        methods: {},
        watch: {},

    }
</script>

<style>
    .os-main-wrapper{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 900px;
        margin: 0 auto;
    }
</style>