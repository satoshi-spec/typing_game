const url = 'https://qiita.com/api/v2/tags/javascript/items';
const btn = document.getElementById('btn');
const list = document.getElementById('list');

const createList = item => {
    const li = document.createElement('li');
    const a = document.createElement('a');

    a.href = item.url;
    li.textContent = item.title;

    a.appendChild(li);
    list.appendChild(a);
}

btn.addEventListener('click', () => {
    list.innerHTML = ''; // 結果表示部分をリセット

    fetch(url)
    .then(data => data.json())
    .then(data => {

        data.forEach(item => createList(item))

    })

})