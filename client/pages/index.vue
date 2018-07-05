<template>
  <section class="container">
    <!--<div>-->
    <!--<Header></Header>-->
    <!--<a href="/users">users</a>-->
    <nuxt-link to="/users">users</nuxt-link>

    <!--<ul>
      <li v-for="item in data">{{item.title}}</li>
    </ul>-->

    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="id"
        width="380">
      </el-table-column>
      <el-table-column
        prop="nickname"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="status"
        label="地址">
      </el-table-column>
    </el-table>


    <!--</div>-->
  </section>
</template>

<script>
  import * as api from '../api/api'

  export default {
    components: {
//    Header
    },
    async asyncData({app}) {
      /*let para={
        page:2,
        token: 'df90909892f54598a72c8ecbd98fae2c'
      };
      app.$axios({
        method: 'get',
        url: `/category`,
        data:para,
        withCredentials:true,
        headers: {
          'Content-Type':'application/x-www-form-urlencoded',
          'Cookie': para.token
        }
      })
        .then(function (res) {
          console.log(res);
          let result = res.data;
          return result;
        })
        .catch(function (err) {
          return {
            msg: '请求失败',
            result: {},
            status: -1
          };
          console.log('请求失败', err);
        });*/

    },
    data() {
      return {
        tableData: []
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.getData();
      });
    },
    methods: {
      getData() {

        let para = {
          page: 2,
          token: 'df90909892f54598a72c8ecbd98fae2c'
        };
        api.getAdminUsersList(para).then((res) => {
//        let data = JSON.parse(res.data.data.categories);
          let data = JSON.parse(res.data.datas);
          console.log(res);
          this.tableData = data.items;
        });

      }
    }

  }
</script>

<style>
  .container {
    min-height: 100vh;
    /*display: flex;*/
    justify-content: center;
    align-items: center;
    /*text-align: center;*/
  }

  .title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
</style>
