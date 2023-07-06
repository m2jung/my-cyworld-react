import { Global } from "@emotion/react";
import { globalStyles } from "../src/components/commons/styles/globalStyles";
// 모드 페이지가 합쳐지는 setting page

export default function App({ Component }: AppProps): JSX.Element {
  //Layout import해서 body 내용만 props.children으로 변경
  return (
    <div>
      <div>==== _app.js 컴포넌트 시작 부분 ==== </div>
        <Component />
      <div>==== _app.js 컴포넌트 끝부분 ==== </div>
    </div>
  );
}
