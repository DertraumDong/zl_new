
<template>
  <el-container style="margin:auto;height: 100%;max-width: 1270px;min-height: 1080px">
    <el-header>
      <el-row>
        <el-col :span="1">
          <div class="grid-content bg-purple">
            <img src="/src/assets/img/portsmouth.png" height="40" width="40"/>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content bg-purple" style="">
            DerTraum
          </div>
        </el-col>
        <el-col :span="10">
          <div class="grid-content bg-purple-light" style="line-height: 40px">
            <div>主页</div>
            <div>技术体会</div>
            <div>个人阅读书单</div>
            <div><a href="/src/common/404.html">demo区</a></div>
            <div aria-disabled="false">日志</div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light">
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple-light">
            <el-input
                    placeholder="请输入内容"
                    prefix-icon="el-icon-search"
                    v-model="input21">
            </el-input>
          </div>
        </el-col>
      </el-row>
    </el-header>

      <el-container style="height: 100%">
        <el-aside width="250px">
          <div style="padding-top: 20px;">
            <img src="/src/assets/img/pic04.jpg" height="180" width="180"/>
          </div>
          <div style="padding-top: 20px;">
            <img src="/src/assets/img/pic05.jpg" height="180" width="180"/>
          </div>
          <div style="margin-bottom: 20px;">
            <h4>月份统计</h4>
            <ul class="zl-mouth" v-for="(item, key, index) in mouthGroup">
              <li><a href="#">{{ item.mouthTitle }}（{{ item.mouthCount }}）</a></li>
            </ul>
          </div>
        </el-aside>
        <el-container>
          <el-main>
            <el-carousel :interval="5000" arrow="always" style="margin-bottom: 30px;">
              <el-carousel-item v-for="(item, key, index) in todos" :key="index">
                <img :src="item.src"  :alt="item.altstring"  ref="img" height="100%" width="100%">
              </el-carousel-item>
            </el-carousel>
            <el-row >
              <el-col :span="12" v-for="(item, key, index) in articles" style="padding: 10px">
                <el-card :body-style="{ padding: '0px' }">
                  <img src="/src/assets/img/404.jpg" class="image">
                  <div style="padding: 14px;">
                    <span>{{ item.title }}</span>
                    <div class="bottom clearfix">
                      <time class="time">{{ item.createTime | formatDateCommon }}</time>
                      <el-button type="text" class="button">查看</el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>
            <!--<div style="text-align: left" >
              <h3></h3>
              <span>作者:{{ item.author }}</span>
              <p>{{ item.content }}</p>
              <span>创建于:</span>

            </div>-->
          </el-main>
          <el-footer>
            <p class="copyright">© DerTraum, 版权所有。<br>
              图片来源: <a target="_blank" href="https://unsplash.com">Unsplash</a>.
            </p>
          </el-footer>
        </el-container>
      </el-container>


  </el-container>
</template>
<script>

    export default {
        created: function () {
            this.fetchData();
        },
        data() {
            return {
                hosturl : this.hosturl(),
                todos: [
                    { src :'/src/assets/img/pic15.jpg',altstring:"商户端"},
                    { src :'/src/assets/img/pic16.jpg',altstring:"商户端"},
                    { src :'/src/assets/img/pic17.jpg',altstring:"商户端"},
                    { src :'/src/assets/img/pic18.jpg',altstring:"商户端"}
                ],
                articles : [
                ],
                mouthGroup : [
                ]
            }

        },
      methods: {
          fetchData: function () {
              // 传统写法
              var article = {};
              var options ={emulateJSON:true};
              this.$http.post(this.hosturl+'/qg/article/list', article,options).then(function(response){
                  // 响应成功回调
                  this.articles = response.body.articleResult.rows;
              }, function(response){
                  // 响应错误回调
              });
              this.$http.post(this.hosturl+'/qg/article/queryMouth', article,options).then(function(response){
                  // 响应成功回调
                  this.mouthGroup = response.body.mouthGroup;
              }, function(response){
                  // 响应错误回调
              });
          },
      }

    };
</script>


<style>
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .zl-mouth {
    margin: 0px;
    padding: 0px;
  }
  .zl-mouth li{
    padding: 5px;
    list-style-type:none;
    text-decoration:none;  /*超链接无下划线*/
  }
  .zl-mouth li a{
    text-decoration:none;  /*超链接无下划线*/
  }
  .zl-mouth li a:hover {
    text-decoration:underline;  /*鼠标放上去有下划线*/
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
  }
  .bg-purple {
    line-height: 40px;
    text-align: left;
    color: #999999;
  }
  .bg-purple-light {
    text-align: left;
    line-height: 40px;
  }
  .bg-purple-light div{
    cursor: pointer;
    color: #999999;
    padding-left: 40px;
    float: left;
  }
  .bg-purple-light :hover{
    color: #d3dce6;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    padding: 10px;
  }

  .el-header, .el-footer {
    color: #333;
    text-align: center;
    height: 30px;
  }

  .el-aside {
    color: #333;
    text-align: center;
    height: 100%;
  }

  .el-main {
    color: #333;
    text-align: center;
    height: 100%;
  }

</style>

