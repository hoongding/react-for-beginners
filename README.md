# ReactJS로 영화 웹 서비스 만들기 - 개념.

## ReactJS : Interactive한 어플리케이션을 만들기 위해 제작되었음.

- 페이스북에서 만든 Framework!
- 우리가 어떤 언어를 공부하고 시작할때 살펴보아야할 것.

  1. 이 언어가 얼마나 많이 쓰이고 있는가
  2. 안전한가?(배포한 회사에서 이걸 계속 가져갈지 안가져갈지..)
  3. 커뮤니티가 얼마나 큰가??(ReactJS커뮤니티는 상당히 크다!)

- React JS : UI를 interactive하게 만들어준다.

## #2.2

### 리액트 규칙

1. HTML을 이 페이지에 직접 작성하지 않는다.
2. 그러면 button이나 span을 어디서 작성하냐?
   1. JS와 리액트를 이용해서 element를 생성할거임.

**React**

이 방식은 다시는 쓰지 않을거지만 React의 동작방식을 이해하기 위해 중요하다!

`const span = React.createElement("span", { id: "sexy-span" }, "Hello!");`

1. 두번째 인자는 span의 property를 추가해줄 수 있는 거임.

   property란? **class name** or **id**

2. 세번째 인자는 안에 들어갈 내용 추가!

**ReactDOM**

1. ReactDOM.render(span, root)

   : React Element를 가지고 HTML로 만들어 배치하겠다.

   : span을 root안에 render해달라!

**JS vs React**

JS : HTML → JS순서로

- HTML을 먼저 만들고 그걸 JS로 가져와서 HTML을 수정하는 방식!

리액트 : JS → HTML 순서.

- 모든 것이 JS로써 시작(제일 중요!)
- JS와 리액트를 사용해서 element를 생성할 때는 리액트는 업데이트가 필요한 element를 업데이트 할 것이다!
- 이말은 리액트가 결과물인 HTML을 업데이트 할 수 있다는 것!
- **리액트는 유저에게 보여질 내용을 컨트롤 할 수 있다.**

JS가 element를 생성하고 React JS가 그것을 HTML로 번역하는 것

React JS는 업데이트 해야 하는 HTML을 업데이트 할 수 있음

## #2.3

```jsx
const span = React.createElement("span", null, "Hello!");
const btn = React.createElement("button", null, "Click me");
const container = React.createElement("div", null, [span, btn]);
ReactDOM.render(container, root);
```

- 만약 span과 btn 둘다 render하고 싶다면 conatainer의 content에 배열로 저렇게 선언을 한 뒤 container를 render해주면! 둘다 render된다.

### React.createElement()

- Property자리에 Event Listener를 등록할 수 있다!

```jsx
const btn = React.createElement(
  "button",
  {
    onClick: () => console.log("im clicked"),
  },
  "Click me"
);
```

- 이런식으로 element를 생성할때 Click event도 넣어줄수 있어!!!

## #2.4

### ReactDOM

- 리액트 Element들을 가져다가 HTML로 바꿔준다.
- html body에 생성했던 div는 ReactDOM이 리액트 Element들을 가져다 놓을 곳.

## #2.5 JSX

### JSX

- JS를 확장한 문법.
- 기본적으로 리액트 요소를 만들 수 있게 해줌.
- HTML에서 사용한 문법과 흡사한 문법을 사용한다.

```jsx
**const Title = (
      <h3 id="title" onMouseEnter={() => console.log("mouse enter")}>
        Hello!
      </h3>
    );**

const h3 = React.createElement(
      "h3",
      {
        id: "title",
        onMouseEnter: () => console.log("mouse enter"),
      },
      "Hello!"
    );
```

위가 JSX, 아래가 어렵게 만들었던 것!! 완전 다르징~~

### JSX사용법(Babel)

- JSX로 적은 코드를 브라우저가 이해할 수 있는 형태로 바꿔줘야한다!

## #2.6 JSX(2) → 개발자들이 보기에 이해하기 쉽다.

**컴포넌트를 다른 컴포넌트 안에 넣고싶을때!!**

- 컴포넌트를 다른 컴포넌트 안에 넣어줄때 title, button같은 것들은 다 함수로 만들어줘야한다!
- function을 쓰거나 = > (Arrow Fucntion)을 쓰면 된다!
- 대신 이름은 무조건 첫글자 대문자로 만들어야 JSX가 이해한다.
- 만약 소문자로 적으면 그냥 HTML 태그라고 인식해버린다.

## #3.1 Understanding State

### 변수들을 JSX에 전달하는 방법

1. 중괄호{ } 안에 변수를 넣어주는 방법

### 리액트는 변경된 부분만 업데이트 된다! 예를들면 counter숫자만 업데이트되는것

> 왜 변경된 부분만 업데이트 되는게 좋을까?
> 리액트가 아닌경우, JS를 쓴 브라우저는 노드 정보가 바뀔때마다 노드트리(DOM)를 처음부터 다시 생성한다. (5단계를 거쳐..)
> 하지만 리액트는 Virtual DOM을 쓰기 때문에 우리 시야에 보이는 부분만 수정해서 보여주고 모든 업데이트가 끝나면 일괄적으로 합쳐서 실제 DOM에 던져준다!.
> ”렌더"는 렌더트리를 말씀하시는 것 같은데 프론트엔드는 이 렌더트리 단계를 얼마나 최적화하는 것이 중요한 부분이다!

## #3.2,3 setState part 1 - 리렌더링

### 리렌더링을 유발시키기 위해서 리액트가 가진 기능.

### 리액트 어플리케이션을 다룰때, 어디에 데이터를 담으면 될까?

```jsx
const data = React.useStaet();

let counter = 0;
function countUp() {}
```

결과값 : [undefined, f]

- data는 위와 같은 배열형식을 갖는다!
- 첫번째 요소는 변수(counter)
- 두번째 요소인 f 는 배열의 첫번째 요소를 변경시킬 수 있는 함수다!(modifier)

```jsx
const data = React.useStaet();
const counter = data[0];
const modifier = data[1];

const [counter, modifier] = React.useStaet(); //이렇게 한것이 위랑 똑같은 표현
```

```jsx
let [counter, setCounter] = React.useState(0);
const onClick = () => {
  setCounter((counter = counter + 1));
};
```

- data에서 두번째 요소인 함수, modifier는 첫번째 요소를 변경시킬 수 있는 함수다.
- 만약 modifier에서 첫번째 요소인 counter의 변화가 있다면 저 함수가 실행될때 알아서 rerendering을 해준다!

## #3.3 Recap

- React 컴포넌트 안에서 데이터를 어떻게 바꾸는지 배웠음!
- 컴포넌트 : 새로운 데이터를 가지고 Rerender하는것!

1. Hook을 이용해서 App이라는 함수형 컴포넌트 안에 state를 추가한다.

2. useState는 현재 state값과, 이것을 업데이트 하는 함수를 쌍으로 제공한다.

3. 배열 구조 분해를 이용해서, counter라는 변수에 초기 state값 0, setCounter라는 변수에 업데이트 함수를 할당한다.

4. 이후 변수를 컴포넌트에 연결하면, state를 변경할 때마다 리렌더링을 하면서 컴포넌트 전체가 재생성된다.

modifier함수를 이용해서 state를 바꾸면, 해당 컴포넌트가 재생성 되고 이 코드가 다시 실행된다. 대신 새로운 값을 가지고 다시 실행 될 것이다!!

모든 요소를 새로운 값을 가지고 재생성한다!

## #3.4 컴포넌트 다루기 - State

앱의 state를 바꾸는 법 - 2가지 방법!

< 더 배울 것 >

사용자들의 input을 어떻게 얻는지

form을 만들었을 때 state는 어떤식으로 작용하는지!

```jsx
setCounter(counter + 1); // 1. state를 변경하는 방법 1 직접 값을 넣어준다.

setCounter((current) => current + 1); // 2. 함수를 전달하여 state를 변경한다.
```

- state를 변경할 때 아래 방법으로 하는것이 훨씬 안전하다.
- 현재 staet를 바탕으로 다음 state를 계산해 내고 싶다면 아래와 같은 방법으로 계산하는 것이 안전!
- 예상치 못한 update가 발생한다면 위의 방법으로 할 경우 다른 값이 나올 수도 있다.
- 현재 state를 기반으로 계산을 하고 싶다면 함수를 이용한다!
- 다음 state의 값이 현재 값을 바탕으로 나올 수 있도록 하는 것이다!

## # 3.5, 6 Unit Conversion(단위 변환) 앱 만들기!

### JSX를 사용할 때 html과 다른 점 기억해두기!

1. JS에서 이미 선점된 단어들을 쓰면 안된다
   - for, class… 같은 JS에서 이미 선점되어있는 명령어를 쓰면 안된다.
   - 만약 for이나 class를 쓰기 위해선 htmlfor, className 같이 써야한다!

### 데이터를 업데이트하는 방법 : setState 함수 사용하기.(setMinutes)

```jsx
const [minutes, setMinutes] = React.useState();
const onChange = (event) => {
  setMinutes(event.target.value);
};

.....

<input
  value={minutes}
  id="minutes"
  placeholder="Minutes"
  type="number"
  **onChange={onChange}**
/>
```

- event를 넣어주는 이유는 input에 뭔가를 입력하면 onChange라는 이벤트를 리스닝하기 위함.
- input에 변화가 생기면 onChange함수가 실행됨
- 그래서 우리가 입력한 input의 value를 바탕으로 component를 업데이트를 해줄 수 있다!
- input에 onChange 이벤트를 넣어줘야 작동한다!

### useState에서 value의 디폴트값 설정해주기

```jsx
const [minutes, setMinutes] = React.useState(0);
```

- minutes의 default값은 0이다!

### 분 ↔ 시 변환 하기

1. 분 입력하면 시로 바꿔주기
2. reset버튼 만들기
3. 시 → 분으로도 만들기(flip이용!)

### Flipped함수 만들기

```python
const onFlip = () => setFlipped((current) => !current);
```

- setFlipped함수 안에서 flipped 변수를 바로 controll 할 수 있지만 current로 써서 충돌이 없게끔 방지한다.

### 3.7~ 마지막 → 파일에 설명 적어둠

### 4.1 컴포넌트 다루기 - Props

위에서 만들어봤던 분 ↔ 시, km ↔ mile 이런식으로 컴포넌트를 만들 수 있다 → Divide & Conquer

이제 Props에 대해 배울거야!

**Props : 부모 컴포넌트로부터 자식 컴포넌트에 데이터를 보낼 수 있게 해주는 방법.**

- 위에서 다뤘던 컴포넌트들은 부모 컴포넌트(App)으로부터 데이터를 필요로 하지 않았음
- 그래서 이제부터는 부모컴포넌트로부터 자식컴포넌트로 데이터를 보내는 연습을 할 거임!

Component : 단지 Function(함수)다. JSX를 반환하는!

### React Js에서 style을 바꾸고 싶다면?

1. CSS 사용하기
2. 여러 라이브러리 사용하기
3. Tag 내의 Style을 변경하기.

**Style 동일하게 여러개 적용하고 싶어! 어떻게 할까?**

- 컴포넌트 하나에 Style을 만들어준다.
- 그리고 재사용한다!

**그러면 어떻게 재사용할까?**

- 컴포넌트(function) 옆에 있는 괄호에 props를 넣어준다!

```jsx
Btn({banana : "Save Changes"})
<Btn banana="Save Changes" />
```

- 위와 아래는 똑같은 뜻이다!
- banana라는 argument를 Btn에 보내주는 것!
- 어떤 prop이든 Btn 컴포넌트에 보내게 되면 그것들은 첫번째 argument 속으로 들어간다.

```html
function Btn(props) {
      // 우리가 적용하고 싶은 Style의 버튼을 하나 만들어서 재사용한다!
      return (
        <button
          style={{
            backgroundColor: "tomato",
            color: "white",
            padding: "10px 20xp",
            boarderRadius: 10,
          }}
        >
          {props.banana}
        </button>
      );

```

- 이런식으로 컴포넌트에 들어간 props는 Object이고 우리는 key인 banana를 가지고 이런식으로 Btn을 재사용 할 수 있다!
- 하지만 이렇게 props를 자주 쓰진 않고 ShortCut으로 이렇게 많이 쓴다
- property를 오브젝트로부터 꺼내는 것이 ShortCut이다!

```jsx
function Btn({ banana }) {
  // 우리가 적용하고 싶은 Style의 버튼을 하나 만들어서 재사용한다!
  return (
    <button
      style={{
        backgroundColor: "tomato",
        color: "white",
        padding: "10px 20xp",
        boarderRadius: 10,
      }}
    >
      {banana}
    </button>
  );
}
```

```jsx
<Btn text="Save Changes" onClick={changeValue} />
```

그래서 컴포넌트 옆에 어떤 것을 넣더라도 그것들은 단지 prop이 되는 거임.

**결코 실제 HTML 태그 안에 들어가는 것이 아님!**

컴포넌트 안에서 직접 설정 해줘야한다!

- **props 안에는 함수도 넣어줄 수 있다!**

### React Memo(Memorize)

- 리액트에게 우리는 이 컴포넌트가 prop이 변경되지 않는다면 다시 그리는(Render) 것을 원치 않는다고 얘기 해줄 수 있다.
- 뭐… 생각없이 그냥 안써도 되지만 Optimization을 위해선 memorize하고 있는게 당연히 좋겠지?

```jsx
**const MemorizedBtn = React.memo(Btn);

<div>
   <MemorizedBtn text={value} changeValue={changeValue} />
   <MemorizedBtn text="Continue" />
</div>**
```

- 이렇게 선언하고 밑에처럼 쓰면! state가 바뀔때만 Render한다!

## 4-2

### 컴포넌트를 다룰때 우리가 알아야 하는 것

1. State
2. Props
3. Prop Types

### Prop Types

- 먼저 Component에서 엄청 많은 Prop을 다룰 때 문제가 생긴다!
- 잘못된 prop을 전달한다거나..
- 그래서 Prop의 Type을 검사해주는 !! prop-type을 넣어주면~ 된다!

```jsx
Btn.propTypes = {
  // Prop의 Type을 검사하여 경고 문구를 띄워준다!
  text: PropTypes.string.isRequired,
  fontSize: PropTypes.number,
};
```

## 5-1 Create React App

`create-react-app`: ReactJS 어플리케이션을 만드는데 훨씬 쉬워진다!!

- 많은 사전 설정들을 도와준다!
- publish하는 명령어를 가지고 있다

npm create-react-app “자신이 만들 폴더이름"

이렇게 치면 초기 설정으로 만들어준다!
