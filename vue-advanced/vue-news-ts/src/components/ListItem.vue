<template>
  <ul class="news-list">
    <li v-for="news in items" :key="news.id" class="post">
      <div class="points">
        {{ news.points || 0 }}
      </div>
      <div>
        <p class="news-title">
          <template v-if="news.domain">
            <a :href="news.url">{{ news.title }}</a
            ><small class="link-text" v-if="news.domain"
              >({{ news.domain }})</small
            >
          </template>
          <template v-else>
            <router-link :to="`/item/${news.id}`">{{ news.title }}</router-link
            ><small
              ><a class="link-text" :href="news.domain" v-if="news.domain"
                >({{ news.domain }})</a
              ></small
            >
          </template>
        </p>
        <small v-if="news.user" class="link-text">
          by
          <router-link :to="`/user/${news.user}`" class="link-text">{{
            news.user
          }}</router-link>
        </small>
        <small v-if="news.time_ago" class="link-text">
          <!-- {{ news.time_ago.concat(", 2021") }} -->
          {{ timeAgo(news) }}
        </small>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { NewsItem } from "@/api";
import Vue, { PropType } from "vue";
export default Vue.extend({
  props: {
    items: {
      type: Array as PropType<NewsItem[]>, // 타입스크립트가 아니라면, import 식으로 뜬다.
      required: true,
    },
  },

  methods: {
    timeAgo(news: NewsItem): string {
      return news.time_ago.concat(", 2021");
    },
  },

  computed: {
    // timeAgo(): string {
    //   return this.items[0].time_ago.concat(", 2021");
    // },
    listItems(): any {
      return this.$store.getters.fetchedList;
    },
  },
});
</script>

<style scoped>
.news-list {
  padding: 0;
  margin: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  color: #42b883;
  display: flex;
  align-items: center;
  justify-content: center;
}
.link-text {
  color: #828282;
}
.news-title {
  margin: 0;
}
</style>
