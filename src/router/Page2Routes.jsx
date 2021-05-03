import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter";

export const page2Routes = [
  { path: "/", exact: true, children: <Page2 /> },
  // URLパラメーターを扱う場合、pathの末尾に「：任意の名称」とする
  { path: "/:id", exact: false, children: <UrlParameter /> }
];
