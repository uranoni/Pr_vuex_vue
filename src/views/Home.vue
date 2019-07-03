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
  data() {
    return {
      localCount: 0
    };
  },
  computed: {
    mycount() {
      return this.localCount;
    },
    ...mapState({
      // sroteCount:'count',
      storeCount: state => state.count,
      totalCount(state) {
        return this.localCount + state.count;
      }
    })
  },
  methods: {
    ...mapMutations(["addCount"])
  }
};
</script>
