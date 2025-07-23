import React from "react";
// window

function FirstForm() {
    //js

  //jsx
  return (
    <div>
      <h1>로그인</h1>
      <div>
        <form>
          <input
            type="email"
            value={userEmail}
            placeholder="등록된 이메일을 입력하세요"
          />
          <input
            type="password"
            value={userPassword}
            placeholder="비밀번호를 입력하세요"
          />
          {/* 체크박스 */}
          <button type="submit">로그인</button>
        </form>
      </div>
    </div>
  );

}

export default FirstForm;
