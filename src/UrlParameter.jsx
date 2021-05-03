//  useParamsフックスでURLパラメータを扱う
import { useParams } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>UrlParameterページです</h1>
      <p>UrlParameter is {id}</p>
    </div>
  );
};
