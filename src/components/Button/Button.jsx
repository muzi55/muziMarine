import React from "react";
import classname from "classname";
import "./Button.scss";

// 버튼에서 받는값
// children => 버튼이름
// size => smail, medium, large  , medium-기본값
// color => blue, gray, pink , blue-기본값
// fullWidth  버튼의 width를 100%로 쭉 늘리는속성 입니다. 값으로는 true, false를 받으며 true일경우 true를 생략해 줘두 됩니다.
// className 이 버튼의 className을 추가합니다.
// rest 는 나머지 기타 속성들을 모아놓은겁니다. onClick, onFocus, 등 이벤트리스너와 다른속성을 넣을 수 있습니다.
function Button({ children, size = "medium", color = "white", fullWidth, className, type = "button", ...rest }) {
  return (
    <button
      type={type}
      className={classname(
        "Button",
        size,
        color,
        {
          fullWidth,
        },
        className
      )}
      {...rest}>
      {children}
    </button>
  );
}

export default React.memo(Button);
