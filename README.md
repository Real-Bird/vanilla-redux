# Vanilla Redux

`Javascript`로 만들어진 모든 어플리케이션에서 상태를 관리할 수 있도록 돕는 라이브러리이다.

## createStore

- `createStore`에는 `state`를 변환하는 `reducer`를 인자로 받는다.
- 하나의 앱에는 하나의 `Store`만 가지는 것을 원칙으로 한다.
- 내부에 있는 함수 중 3가지를 사용한다.

```javascript
const Store = createStore(reducer);
```

### reducer

- `state`와 `action`을 인자로 받는다.
- `action`에 따라 `state`를 변경하여 리턴한다.
  - `action`은 `dispatch`가 보내는 트리거에 따라 동작한다.

```javascript
const reducer = (state, action) => {
  switch (action.type) {
    case "A_type":
      return `change A ${state}`;
    case "B_type":
      return `change B ${state}`;
    default:
      return `not change ${state}`;
  }
};
```

### getState

- `Store`가 가지고 있는 현재 `state`를 반환한다.

```javascript
const currentState = Store.getState();
```

### dispatch

- `reducer`의 `action`에 보내는 트리거 함수이다.
- `type`에 적힌 트리거에 따라 `reducer` 내부에서 `state`를 어떻게 변환할지 결정한다.

```javascript
Store.dispatch({ type: "A_type" });
```

### subscribe

- `reducer`가 동작할 때마다 반응하는 함수이다.

```javascript
Store.subscribe(() => Store.getState());
```
