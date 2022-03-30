import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの阿多を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {
  //liタグを生成
  const li = document.createElement("li");

  //divを生成
  const div = document.createElement("div");
  div.className = "list-row";

  const p = document.createElement("p");
  p.innerText = text;

  //button(完了)タグ作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された追加ボタンの親タグ(li)を完了リストに追加
    deleteFromIncomplete(div.parentNode);

    //完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    //ToDo内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    //div以下を初期化
    addTarget.textContent = null;

    //pタグ生成
    const p = document.createElement("p");
    p.innerText = text;

    //戻すボタンを生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //押された戻すボタンの親タグを完了リストから削除
      const deleteTarget = div.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      //テキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    //divタグの子要素に各要素を設定
    addTarget.appendChild(p);
    addTarget.appendChild(backButton);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(li);
  });

  //button(削除)タグ作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ(li)を未完了リストから削除
    deleteFromIncomplete(div.parentNode);
  });

  //divタグの子要素に各要素を設定
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //liタグの子要素にdivタグとその子要素を追加
  li.appendChild(div);

  //未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

//butaonを削除
const deleteFromIncomplete = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
