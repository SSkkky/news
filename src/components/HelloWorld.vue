<template>
  <section class="HelloWorld">
    <form @submit.prevent="dataFn">
      <div class="textArea">
        <label for="author">작성자</label>
        <input type="text" id="author" name="author" v-model="name">
      </div>
      <div class="textArea">
        <label for="msg">내용</label>
        <textarea name="msg" id="msg" cols="30" rows="10" v-model="msg"></textarea>
      </div>
      <button>전송</button>
    </form>
  </section>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  name: 'HelloWorld',
  methods:{
    ...mapActions(['news']),


    dataFn(){
      let today = new Date();
      let year = today.getFullYear();
      let month = today.getMonth()+1;
      let day = today.getDate();

      let time = year + '.' + month + '.' + day;
      this.news({type:'post', data:{id:new Date().getTime(), date:time, name:this.name, msg:this.msg}});
      this.$router.push('list');
      },
  }
}
</script>

<style scoped lang="scss">
.HelloWorld{
    display: flex;
    justify-content: center;

    form{
      padding: 2rem;
      padding-bottom: 10rem;
      background: url('https://blog.kakaocdn.net/dn/JO2YD/btrdesDB2BR/cngwKI9UOTbtHmfxsUH8W0/img.png');
      background-color: rgba(255,255,255,0.8);
      background-position: center 1950px;
      background-size: cover;
      border-radius: 1rem;
      border: 5px solid gray;
      width: 430px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      gap: 1rem;

      .textArea{
        width: 100%;
        display: flex;
        justify-content: space-between;
        gap: 1rem;

        label{
          width: 60px;
          text-align: left;
          word-wrap: nowrap;
        }

        input, textarea{
          width: 100%;
        }
      }

      button{
        transition: 0.2s ease-in-out;
        background: gray;
        padding: 1rem 0;
        border-radius: 0.5rem;
        border: 0;
        color: #fff;
      }

      button:hover{
        background: #000;
      }
    }
}
  

</style>
