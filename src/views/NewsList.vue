<template>
    <div class="list">
      <h1>📖 뉴스 리스트 📖</h1>
      <ul>
        <li v-for="(item,key) in data" :key="key">
          <div class="liCont">
            <span class="day">{{ item.date }}</span>
            <p>{{ item.msg }}</p>
            <p><span>작성자 : {{item.name}}</span></p>
            <button class="deleteBtn" @click="deleteBtnHandler(item.id)">✕</button>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from 'vuex';
  export default {
    computed:{
      ...mapState(['data'])
    },
    updated() {
      console.log('data', this.data);
    },
    methods:{
      ...mapActions(['news']),
      deleteBtnHandler(postId){ // x버튼 클릭
        this.news({type:'delete', data:{id:postId}});
      }
    }
  }
  </script>
  
  <style scoped lang="scss">
  .list{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ul{
      padding: 0;
      width: 430px;
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;

      li{
        position: relative;
        z-index: 0;
        box-shadow: 0 0 1rem rgb(65, 133, 72);
        width: calc((100% - 2rem) / 2);
        list-style: none;

        .liCont{
          background: rgba(255,255,255,0.9);
          padding: 2rem;

          .day{
            position: relative;
            z-index: 0;

            &::after{
              position: absolute;
              z-index: -1;
              background: rgb(113, 255, 128);
              content: '';
              top: 0.7rem;
              left:0;
              width:100%;
              height: 0.3rem;
            }
          }

          .deleteBtn{
            border: 0;
            background: rgb(113, 255, 128);
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 30px;
            height: 30px;
            font-size: 1.5rem;
            position: absolute;
            top:0;
            right:0;
          }
        }
      }

      li::after{
        content:'';
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        width:100%;
        height: 100%;

        background: url('https://mblogthumb-phinf.pstatic.net/MjAxOTA0MDFfOSAg/MDAxNTU0MDk1OTY3Nzc5._ImT4L74KtVAqUYjXIJxspLpDzPDOs2xX5eRd2_irHMg.GkVbtPPSxCCBGRv23dkyWCFmhoJVmr28TLgwJNK7OjEg.JPEG.winter_cow/%EB%86%8D%EB%8B%B4%EA%B3%B0_%ED%95%B8%EB%93%9C%ED%8F%B0004.jpg?type=w800');
        background-position: left 900px;

      }
    }
  }
  </style>
  