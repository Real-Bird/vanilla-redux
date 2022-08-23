import { legacy_createStore as createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const ADD = "ADD";
const MINUS = "MINUS";

/**
 * @param {Object} countModifier - 상태를 변화시키는 reducer이다.
 * @param {number} count - 상태 파라미터이다.
 * @param {Object} action - dispatch로 불러온 type에 해당하는 함수를 실행한다.
 * @return {number} reducer 내부에서 변경된 데이터가 현재 state로 변경된다.
 */
const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

const countStore = createStore(countModifier);

/**
 * @inner
 * @param
 */
const onChange = () => {
  number.innerText = countStore.getState();
};

/**
 * reducer가 동작할 때마다 state 변화를 감지하는 함수
 * @param {Object} onChange - 변화 시 동작하는 함수
 */
countStore.subscribe(onChange);

/**
 * @param {Object} dispatch - reducer가 실행할 action을 호출하는 함수이다.
 */
add.addEventListener("click", () => countStore.dispatch({ type: ADD }));
minus.addEventListener("click", () => countStore.dispatch({ type: MINUS }));
