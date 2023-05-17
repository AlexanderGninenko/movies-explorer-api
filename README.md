# Проект: Movies Explorer. Backend

### Обзор
* О проекте
* Особенности
* Инструкция
* Технологии
___

❔ **О проекте**
Данный проект представляет собой бэкенд часть проекта Movies Explorer.
Развернут на Node.js с помощью Express.
Используется база данных MongoDB.
Подключены валидаторы

🔍 **Особенности**

На данном этапе реализован следущий функционал:
* Настроен CORS
* Генерируется токен для хранения в cookie
* Подключены мидлварины для валидации приходящих данных с помощью celebrate, Joi
* Реализованы кастомные ошибки (400, 401, 403, 409, 500)
* Пароли хешируются с помощью bcryptjs
* Подключен логгер ошибок

___

⚙️ **Инструкция по развёртыванию:**
* Клонировать репозиторий
```sh
$ git clone https://github.com/AlexanderGninenko/movies-explorer-api.git
```
* Установить зависимости
```sh
$ npm install
```
* Запустить проект
```sh
$ npm run dev
```

#### 🔧 Технологии
![JavaScript](https://img.shields.io/badge/-JavaScript-05122A?style=flat&logo=javascript)&nbsp;
![Node.js](https://img.shields.io/badge/-Node.js-05122A?style=flat&logo=Node.js)&nbsp;
![Express](https://img.shields.io/badge/-Express-05122A?style=flat&logo=Express)&nbsp;
![MongoDB](https://img.shields.io/badge/-MongoDB-05122A?style=flat&logo=MongoDB)&nbsp;
![CORS](https://img.shields.io/badge/-CORS-05122A?style=flat&logo=CORS)&nbsp;
![JSON](https://img.shields.io/badge/-JSON-05122A?style=flat&logo=JSON)&nbsp;


**Автор проекта:**  Александр Гниненко
