<template>
  <div class="home">
    <h1>{{sroteCount}}</h1>
    <button @click="addCount(5)">add</button>
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
    // mycount() {
    //   return this.localCount;
    // },
    ...mapState({
      sroteCount: "count",
      storeCount: state => state.count,
      totalCount(state) {
        return this.localCount + state.count;
      }
    })
  },
  methods: {
    // addCount() {
    //   this.$store.commit("addCount", 2);
    // }
    // commit 可以傳入 物件
    // addCount() {
    //   this.$store.commit({
    //     type: "addCount",
    //     step: 2
    //   });
    // }
    ...mapMutations(["addCount"])
  }
};
</script>
