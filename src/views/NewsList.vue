<template>
    <div class="list">
      <h1>📖 뉴스 리스트 📖</h1>
      <ul>
        <li v-for="(item,key) in data" :key="key">
          <span>{{ item.id }}</span>
          <p>{{ item.msg }}</p>
          <p><span>{{item.name}}</span></p>

        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  export default {
    computed:{
      ...mapState(['data'])
    },
    updated() {
      console.log('data', this.data);
    },
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
        padding: 2rem;
        background: #fff177;
        background: url('https://mblogthumb-phinf.pstatic.net/MjAxOTA0MDFfOSAg/MDAxNTU0MDk1OTY3Nzc5._ImT4L74KtVAqUYjXIJxspLpDzPDOs2xX5eRd2_irHMg.GkVbtPPSxCCBGRv23dkyWCFmhoJVmr28TLgwJNK7OjEg.JPEG.winter_cow/%EB%86%8D%EB%8B%B4%EA%B3%B0_%ED%95%B8%EB%93%9C%ED%8F%B0004.jpg?type=w800');
        background-position: left 900px;
        box-shadow: 0 0 1rem rgb(189, 188, 185);
        width: calc((100% - 2rem) / 2 - 4rem);
        list-style: none;
      }
    }
  }
  </style>
  