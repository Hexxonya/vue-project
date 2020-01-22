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
← Открой тэг тут -->
<title> Web-technology </title>
← И закрой тут-->
  <body>
<h1>Привет</h1>
  </body>
</html>
        </textarea>
        <button @click="riseIndex">продолжить</button>
      </div>
    </div>
    <div class="view">
      <div v-html="code"></div>
      <h2>Чему вы научитесь?</h2>
      <li>Обзор семантики</li>
      <li>Использование текстовых элементов</li>
      <li>Создание структуры</li>
      <li>Знакомство с CSS</li>
      <img src="../assets/shapes-01.svg" alt="">
      <img src="../assets/shapes-03.svg" alt="">
      <img src="../assets/shapes-07.svg" alt="">
      <img src="../assets/shapes-10.svg" alt="">
    </div>
  </div>
</template>

<<script >
 export default {
   data () {
     return {
       index: 0,
       code: 'введите текст',
       titles: [
         { title: "Первые шаги"},
         { title: "второе задание"},
       ],
       texts: [
         { text: "Тег <head> является “головой” html-кода и одной из 2 основных его составляющих, " +
             "он предназначен для хранения служебной информации о странице, а именно название сайта в строке URL, " +
             "присваивание стилей, а также подключение css-документов. Он располагается первым в теге <html>," +
             " сразу перед <body>."},
         { text: "второе задание"},
       ],
       tasks: [
         { task: "Попробуй создать “голову” сайта с помощью открывающего тэга <head> и закрывающего </ head>"},
         { task: "второе задание"},
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
     margin-top: 250px;

  }
  button:active {
  outline: none;
}
button:not(.disabled):hover {
  background-color: #F12D22;
}
  .view {
       background-color: #17e7a4;
       width: 50%;
      box-sizing: border-box;
       padding: 2em;
       color: black;
  }

  img {
    width: 150px;
  }

</style>
