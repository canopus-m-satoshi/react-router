import { Page1 } from "../Page1";
import { Page1DetailA } from "../Page1DetailA";
import { Page1DetailB } from "../Page1DetailB";

// Page1配下コンポーネントのページ遷移の設定を切り出す
export const page1Routes = [
  { path: "/", exact: true, children: <Page1 /> },
  { path: "/detailA", exact: false, children: <Page1DetailA /> },
  { path: "/detailB", exact: false, children: <Page1DetailB /> }
];
