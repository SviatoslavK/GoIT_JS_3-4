var doc = document;
var parentElem = doc.body;

var container = doc.createElement('div');
    container.className = "container";
    parentElem.appendChild(container);

var header = doc.createElement('h1');
    header.innerHTML = "Тест по программированию";
    header.className = "header";
    container.appendChild(header);

var ol = doc.createElement('ol');
    ol.className = "question-list";
    container.appendChild(ol);

var li = doc.createElement('li');
    li.innerHTML = "Вопрос №1";
    ol.appendChild(li);

var li2 = doc.createElement('li');
    li2.innerHTML = "Вопрос №2";
    ol.appendChild(li2);

var li3 = doc.createElement('li');
    li3.innerHTML = "Вопрос №3";
    ol.appendChild(li3);

var ul1 = doc.createElement('ul');
    li.appendChild(ul1);
var ul2 = doc.createElement('ul');
    li2.appendChild(ul2);
var ul3 = doc.createElement('ul');
    li3.appendChild(ul3);

var ul1Li1 = doc.createElement('li');
    ul1Li1.innerHTML = "<label><input type='checkbox'>  Вариант ответа № 1</label>";
    ul1.appendChild(ul1Li1);

var ul1Li2 = doc.createElement('li');
    ul1Li2.innerHTML = "<label><input type='checkbox'>  Вариант ответа № 2</label>";
    ul1.appendChild(ul1Li2);

var ul1Li3 = ul1Li2.cloneNode(true);
    ul1Li3.querySelector('label').innerHTML = "<label><input type='checkbox'>  Вариант ответа № 3</label>";
    ul1.appendChild(ul1Li3);

var ul2Li1 = doc.createElement('li');
    ul2Li1.innerHTML = "<label><input type='checkbox'>  Вариант ответа № 1</label>";
    ul2.appendChild(ul2Li1);

var ul2Li2 = doc.createElement('li');
    ul2Li2.innerHTML = "<label><input type='checkbox'>  Вариант ответа № 2</label>";
    ul2.appendChild(ul2Li2);

var ul2Li3 = doc.createElement('li');
    ul2Li3.innerHTML = "<label><input type='checkbox'>  Вариант ответа № 3</label>";
    ul2.appendChild(ul2Li3);

var ul3Li1 = doc.createElement('li');
    ul3Li1.innerHTML = "<label><input type='checkbox'>  Вариант ответа № 1</label>";
    ul3.appendChild(ul3Li1);

var ul3Li2 = doc.createElement('li');
    ul3Li2.innerHTML = "<label><input type='checkbox'>  Вариант ответа № 2</label>";
    ul3.appendChild(ul3Li2);

var ul3Li3 = doc.createElement('li');
    ul3Li3.innerHTML = "<label><input type='checkbox'> Вариант ответа № 3</label>";
    ul3.appendChild(ul3Li3);

var button = doc.createElement('button');
    button.className = "btn btn-default bnt-lg my_btn";
    button.innerHTML = "Проверить";
    container.appendChild(button);

