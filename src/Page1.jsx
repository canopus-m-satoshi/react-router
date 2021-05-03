import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  // arrの情報を持ったままdetailAにページ遷移
  const arr = [...Array(100).keys()];

  // linkタグを使わず、ボタンをクリックしたらページ遷移する方法(useHistory)
  const history = useHistory();

  // pushメソッドで引数に遷移先パスを渡す
  const onClickDetailA = () => history.push("/page1/detailA");

  return (
    <div>
      <h1>Page1ページです</h1>
      <Link to={{ pathname: "/page1/detailA", state: arr }}>DetailA</Link>
      <br />
      <Link to="/page1/detailB">DetailB</Link>
      <br />

      {/* linkタグを使わず、ボタンをクリックしたらページ遷移する方法(useHistory) */}
      <button onClick={onClickDetailA}>DetailA</button>
    </div>
  );
};
