import { legacy_createStore as createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

/**
 * @param {reducer} 상태를 변화시키는 함수이다.
 * @return {modified state} reducer 내부에서 변경된 데이터가 현재 state로 변경된다.
 */
const countModifier = (count = 0) => {
  number.innerText = count;
  return count;
};

const countStore = createStore(countModifier);
