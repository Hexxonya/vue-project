 <<template>
 <div>
   <img id="one" src="../assets/shapes-01.svg" alt="">
   <img id="two" src="../assets/shapes-02.svg" alt="">
   <img id="three" src="../assets/shapes-03.svg" alt="">
   <img id="four" src="../assets/shapes-04.svg" alt="">
   <img id="five" src="../assets/shapes-05.svg" alt="">
   <img id="six" src="../assets/shapes-06.svg" alt="">
   <img id="sev" src="../assets/shapes-07.svg" alt="">
   <img id="eight" src="../assets/shapes-08.svg" alt="">
   <img id="nine" src="../assets/shapes-09.svg" alt="">
   <img id="ten" src="../assets/shapes-10.svg" alt="">
     <div class="box">
         <div class="text">
           <h1>Будущий студент!</h1>
             <p>
               Тебя приветствуем Московский политехнический университет или просто Политех.
               Сегодня ты узнаешь чему учат на направлении веб-технологии, о том как создаются сайты,
               а также лично примешь участие в его создании.Удачи!</p>
  <router-link to="/theory" >
         <button>Начать</button></router-link>
         </div>
     </div>
 </div>
 </template>

 <<script>
 export default {

 }
 </script>

 <<style scoped>

#one {
  width: 150px;
  animation: translating 24s ease-out 0s infinite;
  position: absolute;
}
#two {
  width: 170px;
  animation: translating2 55s linear 0s infinite;
  position: absolute;
}
#three {
  width: 200px;
  animation: translating3 31s ease-in-out 0s infinite;
  position: absolute;
}
#four {
  width: 180px;
  animation: translating4 29s linear 0s infinite;
  position: absolute;
}
#five {
  width: 180px;
  animation: translating5 33s ease-in 0s infinite;
  position: absolute;
}
#six {
  width: 180px;
  animation: translating6 29s ease-in-out 0s infinite;
  position: absolute;
}
#sev {
  width: 180px;
  animation: translating7 30s ease-in 0s infinite;
  position: absolute;
}
#eight {
  width: 180px;
  animation: translating8 28s linear 0s infinite;
  position: absolute;
}
#nine {
  width: 180px;
  animation: translating9 53s ease-in 0s infinite;
  position: absolute;
}
#ten {
  width: 180px;
  animation: translating10 28s ease-in-out 0s infinite;
  position: absolute;
}
@keyframes translating {
   0%  { transform: translate(240px, 240px);}
   25% { transform: translate(740px, 421px);}
   50% { transform: translate(240px, 0px);}
   75% { transform: translate(750px, 540px);}
  85% { transform: translate(950px, 330px);}
   100%{ transform: translate(240px, 240px);}
 }
@keyframes translating2 {
  0%  { transform: translate(462px,462px);}
  25% { transform: translate(919px, 46px);}
  50% { transform: translate(111px, 140px);}
  75% { transform: translate(0, 140px);}
  100%{ transform: translate(462px, 462px);}
}
@keyframes translating3 {
  0%  { transform: translate(100px, 100px);}
  25% { transform: translate(540px, 330px);}
  50% { transform: translate(40px, 420px);}
  75% { transform: translate(0, 169px);}
  100%{ transform: translate(100px, 100px);}
}
@keyframes translating4 {
  0%  { transform: translate(111px, 111px);}
  25% { transform: translate(588px, 309px);}
  50% { transform: translate(240px, 140px);}
  75% { transform: translate(0, 140px);}
  100%{ transform: translate(111px, 111px);}
}
@keyframes translating5 {
  0%  { transform: translate(0px, 411px);}
  25% { transform: translate(588px, 309px);}
  50% { transform: translate(240px, 140px);}
  75% { transform: translate(0, 140px);}
  100%{ transform: translate(0px, 411px);}
}
@keyframes translating6 {
  0%  { transform: translate(862px,0px);}
  25% { transform: translate(919px, 46px);}
  50% { transform: translate(111px, 140px);}
  75% { transform: translate(0, 140px);}
  100%{ transform: translate(862px,0px);}
}
@keyframes translating6 {
  0%  { transform: translate(1262px,0px);}
  25% { transform: translate(619px, 46px);}
  50% { transform: translate(1011px, 140px);}
  75% { transform: translate(552, 140px);}
  85% { transform: translate(999px, 233px);}
  100%{ transform: translate(1262px,0px);}
}
@keyframes translating7 {
  0%  { transform: translate(1032px,372px);}
  25% { transform: translate(619px, 46px);}
  50% { transform: translate(1011px, 140px);}
  75% { transform: translate(552, 140px);}
  100%{ transform: translate(1032px,372px);}
}
@keyframes translating7 {
  0%  { transform: translate(1032px,372px);}
  25% { transform: translate(619px, 46px);}
  50% { transform: translate(1011px, 140px);}
  75% { transform: translate(552, 140px);}
  100%{ transform: translate(1032px,372px);}
}
@keyframes translating8 {
  0%  { transform: translate(100px, 100px);}
  25% { transform: translate(540px, 330px);}
  50% { transform: translate(40px, 420px);}
  75% { transform: translate(0, 169px);}
  100%{ transform: translate(100px, 100px);}
}
@keyframes translating9 {
  0%  { transform: translate(911px, 16px);}
  25% { transform: translate(540px, 330px);}
  50% { transform: translate(942px, 420px);}
  75% { transform: translate(0, 169px);}
  100%{ transform: translate(911px, 16px);}
}
@keyframes translating10 {
  0%  { transform: translate(1311px, 297px);}
  25% { transform: translate(724px, 127px);}
  50% { transform: translate(1240px, 388px);}
  75% { transform: translate(641, 169px);}
  100%{ transform: translate(1311px, 297px);}
}


  .text{
      text-align: center;
      width: 390px;
  }
  p {
    font-size: 20px;
  }

  button {
    background-color: #17e7a4;
    border: none;
    border-radius: 4px;
    font-size: 24px;
    line-height: 20px;
    color: #fff;
    cursor: pointer;
    padding: 10px 20px 10px 20px;
  }

 </style>
