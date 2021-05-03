import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>Page2ページです</h1>

      {/* URLパラメータ */}
      <Link to="/page2/100">URL Parameter</Link>
      <br />
      {/* クエリパラメータ：URL末尾の?以下のもの */}
      <Link to="/page2/100?name=hogehoge">Query Parameter</Link>
    </div>
  );
};
