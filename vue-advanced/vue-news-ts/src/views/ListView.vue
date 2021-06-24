<template>
  <div>
    <ListItem :items="newsItems"></ListItem>
  </div>
</template>

<script>
import { fetchNews } from "@/api";
import ListItem from "../components/ListItem.vue";
import bus from "../utils/bus";

export default {
  data() {
    return {
      newsItems: [],
    };
  },
  components: {
    ListItem,
  },
  methods: {
    async fetchNewsItems() {
      const response = await fetchNews();
      this.newsItems = response.data;
    },
  },
  created() {
    this.fetchNewsItems();
  },
};
</script>

<style>
</style>
