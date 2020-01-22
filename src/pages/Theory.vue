<<template>
  <div class="body">
    <div class="text">
      <h1> {{ titles[index].title}}</h1>
      <p>Чтобы начать создание сайтов мы должны узнать немного о том,
        какие элементы HTML лучше всего использовать для отображения различных типов содержимого.
        Важно также понять, как элементы визуально отображаются на веб-странице,
        а также что различные элементы означают семантически.</p>
      <p> Добавь <link rel="stylesheet" href="style.css"> в тег head </p>

      <div class="editor">
        <div class="lineNumbers">
          1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10
        </div>
        <textarea class="code" v-on:input="changeCode">
 <html lang="ru">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
  </body>
 </html>
        </textarea>
      </div>
      <button @click="riseIndex">продолжить</button>
    </div>
    <div class="view">
      <div v-html="code"></div>
      <h2>Чему вы научитесь?</h2>
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
    width: 70%;
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
 .text {
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

</style>
