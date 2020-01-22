 <<template>
 <div>
     <div class="box">
         <div class="text">
             <h1>Добро пожаловать!</h1>
             <p>текст текст текст ектст тек ст ект с</p>
  <router-link to="/theory">
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
    padding: 10px 20px 10px 20px;
  }
 </style>
