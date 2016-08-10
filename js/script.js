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

for (var i = 0; i < 3; i++) {

    var li = doc.createElement('li');
    li.innerHTML = "Вопрос №" + [i + 1];
    ol.appendChild(li);

    var ul = doc.createElement('ul');
    li.appendChild(ul);

    for (var k = 0; k < 3; k++) {
        var ulLi = doc.createElement('li');
        ulLi.innerHTML = "<label><input type='checkbox'>  Вариант ответа №" + [k + 1] + "</label>";
        ul.appendChild(ulLi);
    }
};

var button = doc.createElement('button');
    button.className = "btn btn-default bnt-lg my_btn";
    button.innerHTML = "Проверить мои результаты";
    container.appendChild(button);

