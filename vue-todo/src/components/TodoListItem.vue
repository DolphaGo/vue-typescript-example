<template>
  <div>
    <li class="item" :class="todoItemClass" @click="toggleCompleted">
      {{ todoItem.title }}
      <button @click="removeItem">삭제</button>
    </li>
  </div>
</template>

<script lang="ts">
import { Todo } from "@/App.vue";
import Vue, { PropType } from "vue";

export default Vue.extend({
  props: {
    todoItem: Object as PropType<Todo>,
    index: Number,
  },
  computed: {
    todoItemClass(): string | null {
      return this.todoItem.done ? "complete" : null;
    },
  },
  methods: {
    removeItem() {
      this.$emit("remove", this.index);
    },
    toggleCompleted() {
      this.$emit("toggle", this.todoItem, this.index);
    },
  },
});
</script>

<style scoped>
.item {
  cursor: pointer;
}
.complete {
  text-decoration: line-through;
}
</style>