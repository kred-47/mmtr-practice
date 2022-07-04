#Сборка проекта на Gulp 4
###Быстро настроить сборку вашего проекта на Gulp и писать код на:

HTML, PUG
CSS, SCSS, SASS, LESS, STYLUS
Java Script, Type Script, Coffee Script
Функционал сборки
компиляция препроцессора PUG
минификация HTML
компиляция препроцессоров LESS, SASS, STYLUS
минификация CSS
автоматическое добавление префиксов CSS
транспиляция языков Type Script и Coffee Script
преобразования кода ECMAScript 2015 + в обратно совместимую версию JavaScript с помощью Babel
минификация JavaScript
объединение нескольких файлов JavaScript в один
сжатие изображений
отслеживание новых изображений, которые еще не были сжаты
отслеживание изменений в файлах и автоматический запуск повторной обработки
генерация sourcemaps
отображение размеров файлов в терминале
локальный сервер с автоматическим обновлением страницы при изменении файлов
Input
HTML	Styles	Scripts	Images
Каталог	src/	src/styles/	src/scripts/	src/img/
Расширение	.html, .pug	.css, .sass, .scss, .less, .styl	.js, .ts, .coffee	.jpg, .png, .gif
Output
HTML	CSS	JavaScript	Images
Путь	dist/	dist/css/style.min.css	dist/js/main.min.js	dist/img/
#Зaпуск:
Скачать все файлы проекта
В терминале перейти в каталог проекта
Выполнить команду: npm i (должен быть установлен node.js)
Создать каталоги и файлы
Выполнить команду: gulp (запуск таска default)
Писать свой код и наслаждаться автоматической сборкой проекта.
Используемые NPM пакеты
gulp Сборщик Gulp
gulp-htmlmin Минификация HTML файлов
gulp-pug Pug препроцессор HTML кода
gulp-less Компиляция Less файлов
gulp-stylus Компиляция Styl файлов
sass Компилятор Sass
gulp-sass Компиляция Sass и Scss файлов
gulp-uglify Сжатие и оптимизация Java Script кода
gulp-coffee Преобразует Coffee Script в Java Script
gulp-typescript Преобразует Type Script в Java Script
typescript Язык Type Script
gulp-babel Преобразует Java Script в старый стандарт
@babel/core Ядро Babel
@babel/preset-env Пресет для компиляции Babel
gulp-clean-css Минификация и оптимизация CSS файлов
del Удаление каталогов и файлов
gulp-sourcemaps Карта строк кода для инструментов разработчика
gulp-autoprefixer Автоматическое добавление префиксов в CSS
gulp-imagemin Сжатие изображений
gulp-concat Объединение нескольких файлов в один
gulp-newer Отслеживание только новых файлов
gulp-rename Переименовывает файлы
gulp-size Отображение информации о размерах файлов в терминале
browser-sync Автоматическое обновление сайта при изменении файлов