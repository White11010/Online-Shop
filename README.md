# Online-Shop
## Краткое описание
Данное приложение представляет собой SPA (Single page application). В приложении доступно 2 страницы: Каталог и Корзина. Навигация между страницами осуществляется через ссылки в заголовке сайта.
### Каталог 
Доступна фильтрация по категориями и добавление товара в корзину.
### Корзина
Доступна возможность уменьшить и увеличить количество едениц уже добавленного товара, а также удаления его из корзины. В футере страницы отображается общая текущая сумма всех твоаров в корзине.
## Архитектура
### Back-end
В качестве сервера используется json-server, получающий данные из json файла db.json
### Front-end
Отправка запросов на сервер реализована при помощи **Аxios**

Хранение данных происходит в **Vuex store**

Навигация между страницами осуществляется через **Vue router**

#### Верстка

Все страницы и их компонены отзывчивые и адаптивные. Контент адекватно отображается на любых устройствах с любым разрешением экрана.
Для описания стилей использован препроцессор SASS (cинтаксис SCSS)
