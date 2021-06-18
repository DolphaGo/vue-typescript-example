import { CommitOptions, Store } from "vuex";
import { Mutations } from "./mutations";
import { RootState } from "./state";

export type MyMutations = {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
};

// 스토어에다가 Mutations 타입만 갈아 끼워준다는 소리가 된다. (MyMutations에 커밋을 정의했으니까!)
export type MyStore = Omit<Store<RootState>, "commit"> & MyMutations; // 즉 Store에서 커밋만 빼고(Omit) 타입을 가져오겠다는 것

// Omit 이란?
// const person = {
//   name: "a",
//   age: 10,
//   skill: "js",
// };

// const phago =  Omit<person, 'skill'>
// phago = {
//     name : 'a',
//     age : 10
// }

// Omit이란 특정 키만 빼고 나머지를 다 갖겠다는 의미이다.
