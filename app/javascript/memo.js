  const buildHTML = (XHR) => {
    const item = XHR.response.post;
    const html = `
      <div class="post">
        <div class="post-date">
          投稿日時：${item.created_at}
        </div>
        <div class="post-content">
          ${item.content}
        </div>
      </div>`;
    return html;
  };

function post (){
  const submit = document.getElementById("submit");
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    // console.log("イベント発火");
    const form = document.getElementById("form");
    const formData = new FormData(form);
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/posts", true); //「posts」→「post」にした
    XHR.responseType = "json";
    XHR.send(formData);
    XHR.onload = () => {
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      };
      const list = document.getElementById("list");
      const formText = document.getElementById("content");
      //上に移動したデータ
      // const item = XHR.response.post;
      // const html = `
      //   <div class="post">
      //     <div class="post-date">
      //       投稿日時：${item.created_at}
      //     </div>
      //     <div class="post-content">
      //       ${item.content}
      //     </div>
      //   </div>`;
      //   list.insertAdjacentHTML("afterend", html);
      //下1行追記したデータ
      list.insertAdjacentHTML("afterend", buildHTML(XHR));
        formText.value = "";
    };
  });
};

window.addEventListener('load', post);