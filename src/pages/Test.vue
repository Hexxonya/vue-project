9<template>
  <div>
    <div class="box">
      <transition name="fade" mode="out-in">
      <div class="text" v-if="index < 9">
        <h1>{{ questions[index].question}}</h1>

        <button @click="checkAnswer(answers[index].answer1.id)" >{{answers[index].answer1.text}}</button>
        <button @click="checkAnswer(answers[index].answer2.id)"  >{{answers[index].answer2.text}}</button>
        <button @click="checkAnswer(answers[index].answer3.id)"  >{{answers[index].answer3.text}}</button>
        <button @click="checkAnswer(answers[index].answer4.id)"  >{{answers[index].answer4.text}}</button>
      </div>
        <div v-else >
          <h2>Ваш результат {{scores}} / {{index}}</h2>
          <p> Молодец, вот ты все и прошел, приглашаем тебя в <a href="https://mospolytech.ru/index.php?id=5315">Московский политех</a></p>

        </div>
      </transition>
    </div>
  </div>
</template>


<
<script>
  export default {
    data() {
      return {

        questions: [
          {question: "Какое правило CSS написано корректно?"},
          {question: "Какой элемент добавляет изображение?"},
          {question: "Какой тег располагается “голове”<head> кода сайта?"},
          {question: "Что из этого служит строкой в таблице?"},
          {question: "Куда нужно записывать свойства стилей при создании сайта?"},
          {question: "При помощи чего создается заголовок?"},
          {question: "Для того чтобы создать ссылку нужно использовать тег:"},
          {question: "Какое свойство отвечает за высоту в css?"},
          {question: "Как сделать перенос на новую строку?"},
        ],
        answers: [
          {
            answer1: { id: 1, text: "a { color: red; }" },
            answer2: { id: 2, text: "a { color = red; }" },
            answer3: { id: 3, text: "a [ color: red; ]" },
            answer4: { id: 4, text: "{ a:color=red; }" },
            correct: 1,
          },
          {
            answer1: { id: 1, text: "<image src=\"image.png\">" },
            answer2: { id: 2, text: "<img src=\"image.png\">" },
            answer3: { id: 3, text: "<picture src=\"image.png\">" },
            answer4: { id: 4, text: "<img href=\"image.png\">" },
            correct: 2,
          },
          {
            answer1: { id: 1, text: "color" },
            answer2: { id: 2, text: "title" },
            answer3: { id: 3, text: "h1" },
            answer4: { id: 4, text: "table" },
            correct: 2,
          },
          {
            answer1: { id: 1, text: "td" },
            answer2: { id: 2, text: "tr" },
            answer3: { id: 3, text: "st" },
            answer4: { id: 4, text: "li" },
            correct: 2,
          },
          {
            answer1: { id: 1, text: "<stili>" },
            answer2: { id: 2, text: "<body>" },
            answer3: { id: 3, text: "<style>" },
            answer4: { id: 4, text: "<styl’>" },
            correct: 3,
          },
          {
            answer1: { id: 1, text: "z1-6" },
            answer2: { id: 2, text: "h1-6" },
            answer3: { id: 3, text: "f1-6" },
            answer4: { id: 4, text: "p1-6" },
            correct: 2,
          },
          {
            answer1: { id: 1, text: "<s>" },
            answer2: { id: 2, text: "<li>" },
            answer3: { id: 3, text: "<div>" },
            answer4: { id: 4, text: "<a>" },
            correct: 4,
          },
          {
            answer1: { id: 1, text: "hight" },
            answer2: { id: 2, text: "width" },
            answer3: { id: 3, text: "height" },
            answer4: { id: 4, text: "heith" },
            correct: 3,
          },
          {
            answer1: { id: 1, text: "С помощью тега <br>" },
            answer2: { id: 2, text: "С помощью тега <rb>" },
            answer3: { id: 3, text: "С помощью тега <next>" },
            answer4: { id: 4, text: "С помощью тега <go>" },
            correct: 1,
          },
        ],
        tresults: [
          {tresult: "Мдееее..."},
          {tresult: "Мдаааа..."},
          {tresult: "Могло быть и лучше"},
          {tresult: "Старайся"},
          {tresult: "Неплохо"},
          {tresult: "Уже неплохо"},
          {tresult: "Хорошо"},
          {tresult: "Отлично получается"},
          {tresult: "Идеально"},
        ],
        index: 0,
        scores: 0,
      };
    },
    methods: {
      checkAnswer(selectedAnswerId) {
        const currentAnswer = this.answers[this.index]
        if (currentAnswer.correct === selectedAnswerId) {
          this.scores++
          this.index++
        } else {
          this.index++
        }
      },
    },
    computed: {
      results() {
        return this.index <= 8 ;
      }
    },
  };

</script>

<
<style scoped>


  a {
    color: #17e7a4;
  }
  .text {
    text-align: center;
    width: 390px;
  }

  button {
    background-color: #17e7a4;
    border: none;
    border-radius: 4px;
    font-size: 24px;
    line-height: 20px;
    color: #fff;
    cursor: pointer;
    padding: 10px 10px 10px 10px;
    margin: 15px;
    width: 100%;
  }

  button:active {
    outline: none;
  }
  button:not(.disabled):hover {
    background-color: #ffea78;
    transition: 0.2s;
  }

</style>
