import '../css/content.css';

const escape2Html = (str) => {
  let temp = document.createElement('div');
  temp.innerHTML = str;
  let output = temp.innerText || temp.textContent;
  temp = null;
  return output;
};

window.onload = () => {
  let nodes = document.getElementsByTagName('textarea');
  for (let i = 0; i < nodes.length; i++) {
    let html = nodes[i].innerHTML;
    nodes[i].classList.add('no-html-raw');
    let div = document.createElement('div');
    div.innerHTML = escape2Html(html);
    div.classList.add('no-html');
    let parent = nodes[i].parentNode;
    parent.classList.add('no-html-out');
    parent.appendChild(div);
  }
};
