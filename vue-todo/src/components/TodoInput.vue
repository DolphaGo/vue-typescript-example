<template>
  <div>
    <label for="todo-input"></label>
    <input id="todo-input" type="text" :value="item" @input="handleInput" />
    <!-- 키보드 Input에 대한 이벤트 -->
    <button @click="addTodo" type="button">add</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["item"],
  methods: {
    handleInput(event: any) {
      event.target.value;
      this.$emit("DolphaGo", event.target.value); // 여기서의 Input("DolphaGo") 이벤트는 컴포넌트간에 대화하기 위한 수단임
    },
    addTodo() {
      console.log("add");
    },
  },
});
</script>

<style scoped>
</style>