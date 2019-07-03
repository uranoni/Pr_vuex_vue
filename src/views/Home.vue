<template>
  <div class="home">
    <h1>{{count}}</h1>
    <button @click="addCount">add</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "home",
  // es5
  // computed: mapState(["count"]),
  // methods: mapMutations(["addCount"])
  //es6
  computed: {
    ...mapState(["count"])
  },
  methods: {
    ...mapMutations(["addCount"])
  }
};
</script>
