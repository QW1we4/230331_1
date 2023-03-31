import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const onClickAdd = () => {
    setCount(count + 1);
  };
  const onClickSubreact = () => {
    // setCount((prev) => {
    //   return prev - 1;
    // });

    if (count <= 0) {
      alert("count의 값이 0보다 작을 수 없습니다!");
      return;
    }

    setCount(count - 1);
  };

  return (
    <div className="bg-red-100 min-h-screen flex flex-col justify-center items-center">
      <div>{count}</div>
      <button
        className="bg-green-300 w-12 h-12 rounded-full"
        onClick={onClickAdd}
      >
        +
      </button>
      <button
        className="bg-red-300 w-12 h-12 rounded-full"
        onClick={onClickSubreact}
      >
        -
      </button>
    </div>
  );
};

export default App;

// function Add(a, b) {
//   return a + b;
// }

// (a, b) => {
//   return a + b;
// }

// noUseState = noUseState +1; 이 세개는 같은 동작을 함
// noUseSate ++;
// noUseState += 1;
