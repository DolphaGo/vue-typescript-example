import { NewsItem } from "@/api";
import { RootState } from "./state";

enum MutationTypes {
  SET_NEWS = "SET_NEWS",
}

// Vuex 내부적으로 Mutation 이라는 예약어를 사용하고 있다. 따라서 -s 를 붙여서 Mutations라고 명명하였다.
const mutations = {
  [MutationTypes.SET_NEWS](state: RootState, news: NewsItem[]) {
    state.news = news;
  },
};

type Mutations = typeof mutations;

export { MutationTypes, mutations, Mutations };

// export default {
//   SET_NEWS(state, news) {
//     state.news = news;
//   },
//   SET_ASK(state, ask) {
//     state.ask = ask;
//   },
//   SET_JOBS(state, jobs) {
//     state.jobs = jobs;
//   },
//   SET_USER(state, user) {
//     state.user = user;
//   },
//   SET_ITEM(state, item) {
//     state.item = item;
//   },
//   SET_LIST(state, list) {
//     state.list = list;
//   },
// };
