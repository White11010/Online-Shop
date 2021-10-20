<template>
  <div class="os-main-wrapper">
    <os-header />
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import osHeader from "./os-header.vue";

export default {
  name: "os-main-wrapper",
  components: {
    osHeader,
  },
  props: {},
  data() {
    return {
      title: "Main Wrapper",
    };
  },
  computed: {},
  methods: {},
  watch: {},
};
</script>

<style>
.os-main-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* max-width: 900px; */
  margin: 0 auto;
  font-family: "HelveticaNeueCyr-Medium", sans-serif;
  text-transform: uppercase;
  font-weight: 700;
}
</style>
