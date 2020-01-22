<template >
  <div>
    <div class="box">
      <div class="text">
        <h1>{{ questions[index].question}}</h1>

        <button @click="checkAnswer">{{answers[index].answer1}}</button>
        <button @click="checkAnswer">{{answers[index].answer2}}</button>
        <button @click="checkAnswer">{{answers[index].answer3}}</button>
        <button @click="checkAnswer">{{answers[index].answer4}}</button>
      </div>
    </div>
  </div>
</template>


 <<script>
 export default {
     data() {
     return{

    questions: [
      {question: "Какое правило CSS написано корректно?"},
      {question: "Какой элемент добавляет изображение?"},
    ],
    answers: [
      {
        answer1: "a { color: red; }",
        answer2: "a { color = red; }",
        answer3: "a [ color: red; ]",
        answer4: "{ a:color=red; }",
        correct: "a { color: red; }",
      },
      {
        answer1: "<image src=\"image.png\">",
        answer2: "<img src=\"image.png\">",
        answer3: "<picture src=\"image.png\">",
        answer4: "<img href=\"image.png\">",
        correct: "<img src=\"image.png\">",
      },
    ],
    index: 0,
    scores: 0,
     };
  },
   methods: {
    checkAnswer(selectedAnswer) {
      currentAnswer = this.answers[this.index]
      if (currentAnswer.correct == selectedAnswer) {
        this.scores++
        this.index++
      } else {
        this.index++
      }
    },
  }
};

 </script>

 <<style scoped>
 .text{
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
</style>
