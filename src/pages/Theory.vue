<<template>
  <div class="body">
    <div class="textTheory">
      <h1> {{ titles[index].title}}</h1>
      <p> {{ texts[index].text}} </p>
      <p> {{ tasks[index].task}}</p>
      <div class="editor">
        <div class="lineNumbers">
          1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10
        </div>
        <textarea class="code" v-on:input="changeCode">
    <!DOCTYPE html>
    <html lang="ru">
     ← Открой head  тут -->
    <title> Web-technology </title>
    ← И закрой тут-->
     ← Открой body  тут -->
    <h1>Привет</h1>
    ← И закрой тут-->
    </html>
        </textarea>
        <button :disabled='isDisabled' @click="riseIndex" >продолжить</button>
      </div>
      <span>© 2020 Personal <a href="https://mospolytech.ru/">Mospolytech</a> All Rights</span>
    </div>
    <div class="view">
      <div v-html="code"   v-model='terms' ></div>
      <h2>Чему вы научитесь?</h2>
      <li>Обзор семантики</li>
      <li>Использование текстовых элементов</li>
      <li>Создание структуры</li>
      <li>Знакомство с CSS</li>
      <img src="../assets/shapes-01.svg" alt="">
      <img src="../assets/shapes-03.svg" alt="">
      <img src="../assets/shapes-07.svg" alt="">
      <img src="../assets/shapes-10.svg" alt="">
      <img src="polytech.png" alt="">
    </div>
  </div>
</template>

<<script >
 export default {
   data() {
     return {
       index: 0,
       code: 'введите текст',
       terms: false,
       titles: [
         {title: "Первые шаги"},
         {title: "Второе задание"},
         {title: "Списки"},
         {title: "Тег для переноса <br> "},
         {title: "Вставка изображения  <img>"},
       ],
       texts: [
         {
           text: "Тег <head> является “головой” html-кода и одной из 2 основных его составляющих, " +
             "он предназначен для хранения служебной информации о странице, а именно название сайта в строке URL, " +
             "присваивание стилей, а также подключение css-документов. Он располагается первым в теге <html>," +
             " сразу перед <body>." +
             "Элемент <body> предназначен для хранения содержания веб-страницы (контента), отображаемого в окне браузера." +
             " Информацию, которую следует выводить в документе, следует располагать именно внутри контейнера <body>. " +
             "К такой информации относится текст, изображения, теги, скрипты JavaScript и т.д."
         },
         {
           text: "Для создания основной структуры текста используют заголовки. " +
             "В HTML существует целое семейство заголовочных тегов: от <h1> до <h6>. " +
             "Тег <h1> обозначает самый важный заголовок (заголовок верхнего уровня), " +
             "а тег <h6> обозначает подзаголовок самого нижнего уровня. Буква «h» в названии тега" +
             " — это первая буква английского «heading».Вот простой пример заголовка <h1>Заголовок </h1>."
         },
         {
           text: "Теперь давай разберемся в том, как создавать простые списки. HTML-списки используются для группировки" +
             " связанных между собой фрагментов информации. Существует три вида списков:" +
             "маркированный список — <ul> — каждый элемент списка <li> отмечается маркером," +
             "нумерованный список — <ol> — каждый элемент списка <li> отмечается цифрой," +
             "список определений — <dl> — состоит из пар термин <dt> — <dd> определение"
         },
         {
           text: "Теперь давай попробуем заставить элементы на нашем сайте переходить на новую строку. " +
             "В этом нам поможет тег <br>.  Тег <br> устанавливает перевод строки в том месте, где этот тег находится." +
             " В отличие от тега абзаца <p>, использование тега <br> не добавляет пустой отступ перед строкой. " +
             "Если текст, в котором используется перевод строки, обтекает плавающий элемент, " +
             "то с помощью атрибута clear тега <br> можно сделать так, чтобы следующая строка начиналась ниже элемента."
         },
         {
           text: "Тег <img> предназначен для отображения на веб-странице изображений в графическом формате GIF, JPEG или PNG. " +
             "Адрес файла с картинкой задаётся через атрибут src. Если необходимо, то рисунок можно сделать ссылкой на другой файл," +
             " поместив тег <img> в контейнер <a>. При этом вокруг изображения отображается рамка, которую можно убрать, добавив атрибут border=\"0\" " +
             "в тег <img>. Рисунки также могут применяться в качестве карт-изображений, когда картинка содержит активные области, " +
             "выступающие в качестве ссылок. Такая карта по внешнему виду ничем не отличается от обычного изображения, но при этом оно может " +
             "быть разбито на невидимые зоны разной формы, где каждая из областей служит ссылкой. Например <img src=”icon.png”>"
         },
       ],
       tasks: [
         {task: "Попробуй обернуть элементы сайта в его head  и body"},
         {task: "Давай вместе попробуем сделать заголовок:"},
         {task: "Попробуй сделать список из 2 элементов:"},
         {task: "Проверим его в действии:"},
         {task: "Попробуй поместить  изображение polytech.png на наш сайт:"},
       ],
       answers: [
         {answer: "<h1> Политех </h1>"},
         {answer: "<h1> Пол </h1>"},
       ],
     };
   },
   methods: {
     changeCode: function (event) {
       this.code = event.target.value
     },
     riseIndex() {
       this.index++
     }
   },
   computed: {
     isDisabled: function () {
         return !this.terms;
       }
     }
 }

</script>

<<style scoped>


  .body {
    display: flex;
  }

  .editor {
    width: 85%;
    height: 320px;
    padding: 10px 10px 10px 40px;
    background-color: #ddd;
    border-radius: 4px;
    position: relative;
  }

  .lineNumbers{
    background-color: #999;
    color: #D5D5D5;
    position: absolute;
    line-height: 2;
    top: 0;
    left: 0;
    padding: 10px 6px;
    text-align: right;
    border-top-left-radius: 4px;
  }
  .code {
      height: 320px;
      width: 70%;
     border: none;
    outline: none;
     resize: none;
     background-color: #ddd;
     line-height: 2.4;
  }
 .textTheory {
       width: 50%;
       box-sizing: border-box;
       padding: 2em;
  }

   button {
    background-color: #EB5B52;;
    border: none;
    border-radius: 4px;
    font-size: 24px;
    line-height: 20px;
    color: #fff;
    cursor: pointer;
    padding: 10px 20px 10px 20px;
     position: absolute;
     margin-top: 270px;

  }
  button:active {
  outline: none;
}
button:not(.disabled):hover {
  background-color: #F12D22;
}

span {
  text-align: center;
  color: #999999;
  position: absolute;
  margin-top: 50px;
}

a {
  color: #17e7a4;
}
  .view {
       background-color: #17e7a4;
       width: 50%;
      box-sizing: border-box;
       padding: 2em;
       color: black;
    height: 754px;
  }

  img {
    width: 150px;
  }

</style>
