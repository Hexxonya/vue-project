<template>
  <div>
    <div class="box">
      <div class="text">
        <h1>{{ questions[index].question}}</h1>

        <button @click="checkAnswer(answers[index].answer1.id)">{{answers[index].answer1.text}}</button>
        <button @click="checkAnswer(answers[index].answer2.id)">{{answers[index].answer2.text}}</button>
        <button @click="checkAnswer(answers[index].answer3.id)">{{answers[index].answer3.text}}</button>
        <button @click="checkAnswer(answers[index].answer4.id)">{{answers[index].answer4.text}}</button>
      </div>
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
            answer1: { id: 1, text: "<img src=\"image.png\">" },
            answer2: { id: 2, text: "<img src=\"image.png\">" },
            answer3: { id: 3, text: "<picture src=\"image.png\">" },
            answer4: { id: 4, text: "<img href=\"image.png\">" },
            correct: 1,
          },
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
    }
  };

</script>

<
<style scoped>
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
