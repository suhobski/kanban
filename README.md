# kanban

Link: https://suhobski.github.io/kanban/

## Технологии
* БЭМ
* препроцессор Sass в синтаксисе Scss
* компонентный подход в scss и js
* хранение задач в Local Storage
* респонив от 2048px (2k display) до 320px (Iphone se)
* в мобильной версии переключение между списками через слайдер на нативном js
* коммиты по конвенции
* проект собран сборщиком Parcel

## Описание проекта

* Страница с 3-мя списками: *todo, in progress, done*.
* В каждом списке выводится количество элементов.
* Комментарии длиннее 2-ух строк скрываются после перезагрузки или переноса задачи в другой список. Реализована возможность развернуть комментарий по нажатию кнопки.
* Для каждого списка реализовать возможность полной очистки.

**Список "todo"**: 
* Добавить элемент: название задачи и выбор пользователя обязательные поля, можно оставить комментарий. Реализована проверка заполенния обязательных полей.
* При создании задачи к ней добавляется текущая дата.
* Можно удалить и перевести в список *in progress* по нажатии соответствующей клавиши.
* Список пользователей получен с удаленного **WEB API JSON Placeholder**

**Список "in progress"**: 
* Можно удалить элемент. Перед удалением появляется модальное окно с запросом на подтверждение. 
* Если пользователь пытается добавить 6-ой элемент в этот список, выводится предупреждение через модальное окно о том, что нужно что-то выполнить прежде чем добавлять еще. 
* Можно перевести элемент в список *done*.
* Подтверждение на полную очистку списка через модальное окно.

**Список "done"**:
* можно удалить элемент из списка, а также перевести элемент заново в список *todo*
