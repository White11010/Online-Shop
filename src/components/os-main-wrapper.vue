<template>
    <div class="os-main-wrapper">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>

    </div>
</template>

<script>

    export default {
        name: 'os-main-wrapper',

        props: {},
        data() {
            return {
                title: 'Main Wrapper'
            }
        },
        computed: {

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