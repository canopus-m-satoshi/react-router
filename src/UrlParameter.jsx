//  useParamsフックス：URLパラメータを扱う
//  useLocationフックス：クエリパラメータを扱う

import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();

  // URLの？以降の文字列を取得→取得したserachをURLSearchParamsの引数に渡→
  const { search } = useLocation();

  // URLSearchParams：クエリパラメータないで使える便利なメソッド等を提供
  const query = new URLSearchParams(search);
  // console.log(query);

  return (
    <div>
      <h1>UrlParameterページです</h1>
      <p>パラメータ は {id}</p>
      <p>クエリパラメータ は {query.get("name")}</p>
    </div>
  );
};
