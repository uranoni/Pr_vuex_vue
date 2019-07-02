<template>
  <div class="home">
    <h1>{{count}}</h1>
    <button @click="addCount">add</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {},
  computed: {
    count() {
      return this.$store.state.count;
    }
  },
  methods: {
    addCount() {
      this.$store.commit("addCount");
    }
  }
};
</script>
