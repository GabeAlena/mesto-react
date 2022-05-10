# Проект №11: Место-реакт

Данный сайт это сервис Mesto: интерактивная страница, куда можно добавлять фотографии, удалять их и ставить лайки. 
Сайт создан при помощи библиотеки реакт. В данной версии сайта данные карточек и профиля приходят с сервера. 
Сайт состоит из следующих блоков: **header**,  **profile**, **elements**, **footer**. 

Блок **profile** содержит данные пользователя, где при клике на значок "редактирования профиля" вылезает попап окно. Данное всплывающее окно содержит кнопку submit, которая дает возможность редактировать данные профиля, а также кнопку крестик, которая дает возможность закрыть попап окно без редактирования профиля.

Блок **elements** представляет из себя грид-контейнер с фотографиями различных мест России. Появление карточек с фотографиями реализовано при помощи запроса к серверу. Также в этом блоке реализован эффект hover при наведении курсора мыши на сердечко под фото, а также при наведении на элемент "trash".

На сайте реализована возможность открытия попапа с картинкой любой карточки и закрытие кликом на крестик.

Сайт адаптирован под следующие размерешения страницы: *320px*, *768px*, *1024px* и *1280px*. То есть компоненты сайта изменяются при увеличении/уменьшении размеров страницы. 

В вёрстке проекта построена файловая структура по БЭМ.

Код JS, по сравнению с работой №9, разбит на функциональные компоненты **App**, **Card**, **Footer**, **PopupWithForm**, **ImagePopup**, **Header** и **Main**. 

Класс **Api** хранит в себе все запросы к серверу. Он имеет конструктор и методы работы с API. Информация о пользователе подгружается с сервера при помощи GET-запроса на URL. Начальные карточки также подгружаются с сервера при помощи GET-запроса. Отредактированные данные профиля сохраняются на сервере (обновляются) при помощи метода PATCH. Добавление новой карточки на сервер реализовано при помощи POST-запроса. Для удаления карточки используется DELETE-запрос с указанием id нужной карточки. Постановка и снятие лайка реализованы при помощи PUT-запроса и DELETE-запроса. Обновление аватара пользователя - при помощи PATCH-запроса.

**App** - является главным функциональным компонентом приложения, который включает в себя все остальные компоненты. В нем содержаться хуки useState, управляющие внутренним состоянием попапов.

Сборка проекта реализуется при помощи вебпака.

Ссылка на данный проект на сайте GitHub Pages: https://gabealena.github.io/mesto/.