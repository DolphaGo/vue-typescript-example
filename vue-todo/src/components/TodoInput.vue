<template>
  <div>
    <label for="todo-input">오늘 할 일 : </label>
    <input id="todo-input" type="text" :value="item" @input="handleInput" />
    <!-- 키보드 Input에 대한 이벤트 -->
    <button @click="addTodo" type="button">추가</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  //   props: ["item"],
  props: {
    item: {
      type: String, // props 타입 정의
      required: true, // 필수값 정의
    },
  },
  methods: {
    handleInput(event: InputEvent) {
      //   console.log(event);
      //   if (!event.target) {
      //     return;
      //   }
      const eventTarget = event.target as HTMLInputElement;
      this.$emit("DolphaGo", eventTarget.value); // 여기서의 "Input"("DolphaGo"로 변경) 이벤트는 컴포넌트간에 대화하기 위한 수단임 -> 받는 쪽에서 @input(@DolphaGo)로 받아서 처리
    },
    addTodo() {
      this.$emit("add");
    },
  },
});
</script>

<style scoped>
</style>