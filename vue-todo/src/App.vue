<template>
  <div>
    <header>
      <h1>Vue Todo with Typescript</h1>
    </header>
    <main>
      <TodoInput
        :item="todoText"
        @input="updateTodoText"
        @add="addTodoItem"
      ></TodoInput>
      <div>
        <ul>
          <TodoListItem
            v-for="(todoItem, index) in todoItems"
            :key="index"
            :index="index"
            :todoItem="todoItem"
            @remove="removeTodoItem"
            @toggle="toggleItemCompleted"
          ></TodoListItem>
          <!-- <li>아이템 1</li>
          <li>아이템 2</li>
          <li>아이템 3</li> -->
        </ul>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TodoInput from "./components/TodoInput.vue";
import TodoListItem from "./components/TodoListItem.vue";

const STORAGE_KEY = "vue-todo-ts-v1";
const storage = {
  save(todoItems: Todo[]) {
    const parsed = JSON.stringify(todoItems); // 배열을 string으로 만들어주자.
    localStorage.setItem(STORAGE_KEY, parsed);
  },
  fetch(): Todo[] {
    const todoItems = localStorage.getItem(STORAGE_KEY) || "[]"; // null 인경우 빈 배열 리턴
    const result = JSON.parse(todoItems); // json string을 객체로 변환해줌
    return result;
  },
};

export interface Todo {
  title: string;
  done: boolean;
}

export default Vue.extend({
  components: { TodoInput, TodoListItem },

  data() {
    return {
      todoText: "",
      todoItems: [] as Todo[],
    };
  },
  methods: {
    updateTodoText(value: string) {
      this.todoText = value;
    },
    addTodoItem() {
      const value = this.todoText;
      //   const todo: Todo = {
      //     title: "aa",
      //     done: true,
      //   };
      this.todoItems.push({
        title: this.todoText,
        done: false,
      });
      storage.save(this.todoItems);
      //   localStorage.setItem(value, value);
      this.initTodoText();
    },
    initTodoText() {
      this.todoText = "";
    },
    fetchTodoItems() {
      //   axios.get("todos");
      this.todoItems = storage.fetch().sort((a, b) => {
        // 물론 (a:Todo, b:Todo) 라고 할 수 도 있겠지만, 이보다는 fetch의 결과로 Todo[] 를 리턴함을 표현해주는 것이 더 좋다.
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
    },
    removeTodoItem(index: number) {
      console.log("remove", index);
      this.todoItems.splice(index, 1); // index 위치 1개 지우기
      storage.save(this.todoItems);
    },
    toggleItemCompleted(todoItem: Todo, index: number) {
      this.todoItems.splice(index, 1, {
        // title: todoItem.title, 모두다 이렇게 바꿀 순 없다. 따라서 다음과 같이 es6 문법을 적용하자
        ...todoItem,
        done: !todoItem.done,
      });
      storage.save(this.todoItems);
    },
  },
  created() {
    this.fetchTodoItems();
  },
});
</script>

<style scoped>
</style>