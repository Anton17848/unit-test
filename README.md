# unit-test

[![Build status](https://ci.appveyor.com/api/projects/status/fld59xpcifx6oet0?svg=true)](https://ci.appveyor.com/project/Anton17848/dz-classes)

# Домашнее задание к лекции «Классы, наследование»

**Важно**: каждая задача выполняется в виде отдельного проекта с собственным GitHub репозиторием.

**Важно**: код должен проходить ESLint без ошибок.

**Важно**: тесты должны обеспечивать 100% покрытие тестируемых функций по строкам.

**Важно**: решения должны быть построены на базе [шаблона Webpack](/ci-template).

В личном кабинете на сайте [netology.ru](http://netology.ru/) в поле комментария к домашней работе вставьте ссылки на ваш GitHub-проекты.

---

## Классы, наследование

### Легенда

Вы решили перейти на классы и реализовать иерархию, выделив в качестве базового класса класс `Character`, а для остальных персонажей создать классы, наследующиеся от него.

### Описание

Реализуйте описанную иерархию классов: класс `Character` является родительским для всех остальных, 6 дочерних классов `Bowerman`, `Swordsman`, `Magician`, `Daemon`, `Undead`, `Zombie` от него наследуются, сами задавая свои характеристики.

Свойства, которые должны быть у объектов класса `Character`:
1. `name` - имя
1. `type` - тип
1. `health` - уровень жизни
1. `level` - уровень персонажа
1. `attack` - атака
1. `defence` - защита

1. npm init
2. npm install --save-dev jest
3. npm install --save-dev jest-babel
4. npm install --save-dev @babel/core @babel/cli @babel/preset-env babel-loader
5. npm install core-js@3
6. npm install --save-dev eslint  
7. npm install --save-dev eslint-config-airbnb-base
8. npm install --save-dev eslint-plugin-jest
9. npm install --save-dev eslint-config-airbnb-base
10. npm install --save-dev css-loader
11. npm install --save-dev html-loader
12. npm install --save-dev html-webpack-plugin
13. npm install --save-dev style-loader
14. npm install --save-dev webpack
15. npm install --save-dev webpack-cli
16. npm install --save-dev  webpack-dev-server    