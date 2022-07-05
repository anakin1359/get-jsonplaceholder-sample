import axios from "axios";
import "./styles.css";

export default function App() {
  const onClickUsers = () => {
    alert("[DEBUG] onClickUsers buttonが押されました");
    // *****.thenでaxios.getした後に実行する処理を定義
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
    // axios.get("https://jsonplaceholder.typicode.com/users_dummy").then((res) => {
      console.log("[DEBUG] users api (all): ", res);
      console.log("[DEBUG] users api (data): ", res.data);
    }).catch((err) => {
      // catchを使用することでAPI実行時に何等かのエラーが発生した場合に行う処理を設定
      console.error(err);
    });
  }

  const onClickUser1 = () => {
    alert("[DEBUG] onClickUser1 buttonが押されました");
    // Queryパラメータで実行
    // axios.get("https://jsonplaceholder.typicode.com/users?id=1").then((res) => {

    // エンドポイントで実行
    axios.get("https://jsonplaceholder.typicode.com/users/5").then((res) => {
      console.log("[DEBUG] user1 api (all): ", res);
      console.log("[DEBUG] user1 api (data): ", res.data);
    }).catch((err) => {
      console.error(err);
    });
  }

  return (
    <div className="App">
      <button onClick={onClickUsers}>users</button>
      <br />
      <button onClick={onClickUser1}>id=1のuser</button>
    </div>
  );
}
