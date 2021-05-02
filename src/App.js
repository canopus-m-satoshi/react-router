//  react-router-dom から必要なものをインポート
// BrowserRouter：ページ遷移をするための設定
// Link：ページ遷移の設定(aタグの役割)
// Swith：レンダリングの出し分け設定
// Route：Switchの中でrootにマッチしたものを表示させるための設定

import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
      </div>

      {/* homeのURLで来た場合には、homeコンポーネント表示させる */}
      <Switch>
        {/* 
        path：どのpathの時にどのコンポーネントを表示させるかという設定
        exact: URLの完全一致の判定 ※付けない場合、"/page1"でも"/"部分が一致しているという判定で,<Home>コンポーネントが呼び出されてしまう
        */}
        <Route exact path="/">
          <Home />
        </Route>

        {/* page1のURLで来た場合には、page１コンポーネント表示させる */}
        <Route path="/page1">
          <Page1 />
        </Route>

        {/* page2のURLで来た場合には、page１コンポーネント表示させる */}
        <Route path="/page2">
          <Page2 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
