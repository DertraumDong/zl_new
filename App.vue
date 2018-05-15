
<template>
  <div id="wrapper">

    <!-- Main -->
    <div id="main">
      <div class="inner">

        <!-- Header -->
        <header id="header">
          <a class="logo"><strong>DerTraum</strong></a>
          <ul class="icons">
            <li><a href="#" class="icon fa-github-alt"><span class="label">Twitter</span></a></li>
            <li><a href="#" class="icon fa-weibo"><span class="label">Facebook</span></a></li>
            <li><a href="#" class="icon fa-weixin"><span class="label">weixin</span></a></li>
            <!--<li><a href="#" class="icon fa-instagram"><span class="label">Instagram</span></a></li>
            <li><a href="#" class="icon fa-medium"><span class="label">Medium</span></a></li>-->
          </ul>
        </header>

        <!-- Banner -->
        <!--<section id="banner">
            <div class="content">
                <header>
                    <h3>Hi, 这里是DerTraum的博客</h3>
                    <p>专门分享自己文章的地方</p>
                </header>
                <p>目前全部页面尚处于待开发阶段，没有什么东西可供参考。待开发~~~</p>
                &lt;!&ndash;<ul class="actions">
                    <li><a href="#" class="button big">Learn More</a></li>
                </ul>&ndash;&gt;
            </div>
            <span class="image object">
                <img src="images/pic10.jpg" alt="" />
            </span>
        </section>-->

        <!-- Section -->
        <section v-for="item in articles">
            <div>
                <header>
                    <h2><a href="#">{{ item.title }}</a></h2>
                </header>
                <p>{{ item.content }}</p>


            </div>
        </section>
        <div class="block">
          <!--<span class="demonstration">直接前往</span>-->
          <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page.sync="currentPage"
                  :page-size="pageSize"
                  layout="prev, pager, next, jumper"
                  :total="pageCount">
          </el-pagination>
        </div>
        <!-- Section -->
        <!--<section>
            <header class="major">
                <h2>Ipsum sed dolor</h2>
            </header>
            <div class="posts">
                <article>
                    <a href="#" class="image"><img src="images/pic01.jpg" alt="" /></a>
                    <h3>Interdum aenean</h3>
                    <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                    <ul class="actions">
                        <li><a href="#" class="button">More</a></li>
                    </ul>
                </article>
                <article>
                    <a href="#" class="image"><img src="images/pic02.jpg" alt="" /></a>
                    <h3>Nulla amet dolore</h3>
                    <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                    <ul class="actions">
                        <li><a href="#" class="button">More</a></li>
                    </ul>
                </article>
                <article>
                    <a href="#" class="image"><img src="images/pic03.jpg" alt="" /></a>
                    <h3>Tempus ullamcorper</h3>
                    <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                    <ul class="actions">
                        <li><a href="#" class="button">More</a></li>
                    </ul>
                </article>
                <article>
                    <a href="#" class="image"><img src="images/pic04.jpg" alt="" /></a>
                    <h3>Sed etiam facilis</h3>
                    <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                    <ul class="actions">
                        <li><a href="#" class="button">More</a></li>
                    </ul>
                </article>
                <article>
                    <a href="#" class="image"><img src="images/pic05.jpg" alt="" /></a>
                    <h3>Feugiat lorem aenean</h3>
                    <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                    <ul class="actions">
                        <li><a href="#" class="button">More</a></li>
                    </ul>
                </article>
                <article>
                    <a href="#" class="image"><img src="images/pic06.jpg" alt="" /></a>
                    <h3>Amet varius aliquam</h3>
                    <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                    <ul class="actions">
                        <li><a href="#" class="button">More</a></li>
                    </ul>
                </article>
            </div>
        </section>-->

      </div>
    </div>

    <!-- Sidebar -->
    <div id="sidebar">
      <div class="inner">

        <!-- Search -->
        <section id="search" class="alt">
          <form method="post" action="#">
            <input type="text" name="query" id="query" placeholder="查找" />
          </form>
        </section>

        <!-- Menu -->
        <nav id="menu">
          <header class="major">
            <h2>菜单</h2>
          </header>
          <ul>
            <li><a href="index.html">主页</a></li>
            <li><a href="#">技术体会</a></li>
            <li><a href="#">Demo区</a></li>
            <li>
              <span class="opener">日志</span>
              <ul>
                <li><a href="#">旅游</a></li>
                <li><a href="#">日志</a></li>
                <li><a href="#">记录</a></li>
                <li><a href="#">随心</a></li>
              </ul>
            </li>
            <!--<li><a href="#">Etiam Dolore</a></li>
            <li><a href="#">Adipiscing</a></li>
            <li>
                <span class="opener">Another Submenu</span>
                <ul>
                    <li><a href="#">Lorem Dolor</a></li>
                    <li><a href="#">Ipsum Adipiscing</a></li>
                    <li><a href="#">Tempus Magna</a></li>
                    <li><a href="#">Feugiat Veroeros</a></li>
                </ul>
            </li>
            <li><a href="#">Maximus Erat</a></li>
            <li><a href="#">Sapien Mauris</a></li>
            <li><a href="#">Amet Lacinia</a></li>-->
          </ul>
        </nav>

        <!-- Section -->
        <section>
          <header class="major">
            <h2>未定义区</h2>
          </header>
          <div class="mini-posts">
            <article>
              <a href="#" class="image"><img src="src/assets/img/pic07.jpg" alt="" /></a>
              <p id="port">待开发~~~</p>
            </article>
            <article>
              <a href="#" class="image"><img src="src/assets/img/pic08.jpg" alt="" /></a>
              <p id="feginport">待开发~~~</p>
            </article>
            <article>
              <a href="#" class="image"><img src="src/assets/img/pic09.jpg" alt="" /></a>
              <p>待开发~~~</p>
            </article>
          </div>
          <ul class="actions">
            <li><a href="#" class="button">More</a></li>
          </ul>
        </section>

        <!-- Section -->
        <!--<section>
            <header class="major">
                <h2>Get in touch</h2>
            </header>
            <p>Sed varius enim lorem ullamcorper dolore aliquam aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin sed aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
            <ul class="contact">
                <li class="fa-envelope-o"><a href="#">information@untitled.tld</a></li>
                <li class="fa-phone">(000) 000-0000</li>
                <li class="fa-home">1234 Somewhere Road #8254<br />
                Nashville, TN 00000-0000</li>
            </ul>
        </section>-->

        <!-- Footer -->
        <footer id="footer">
          <p class="copyright">&copy; DerTraum, 版权所有。<br/>
            图片来源: <a target="_blank" href="https://unsplash.com">Unsplash</a>. 前端模板来源于: <a target="_blank" href="https://html5up.net">HTML5 UP</a>.<br/>
            若有侵权请及时联系。
          </p>
        </footer>

      </div>
    </div>

  </div>
</template>
<script>

    export default {
        created: function () {
            this.fetchData(this.article);
        },
        data() {
            return {
                hosturl : this.hosturl(),
                articles : [
                ],
                mouthGroup : [
                ],
                /*分页组件*/
                currentPage : 1,
                pageCount : 0,
                pageSize : 5,
                /*全局对象参数*/
                article : {
                    pageNo:1,
                    pageSize:5,
                },
            }

        },
      methods: {
          fetchData: function () {
              // 传统写法
              var options ={emulateJSON:true};
              this.$http.post(this.hosturl+'/qg/article/list', this.article,options).then(function(response){
                  // 响应成功回调
                  this.articles = response.body.articleResult.rows;
                  this.pageCount = response.body.articleResult.total;

              }, function(response){
                  // 响应错误回调
              });
              /*this.$http.post(this.hosturl+'/qg/article/queryMouth', article,options).then(function(response){
                  // 响应成功回调
                  this.mouthGroup = response.body.mouthGroup;
              }, function(response){
                  // 响应错误回调
              });*/
          },
          handleSizeChange(val) {
              console.log(`每页 ${val} 条`);
          },
          handleCurrentChange(val) {
              this.article.pageNo = val;
              this.fetchData(this.article);
              console.log(`当前页: ${val}`);
              this.toTop();
          },
          toTop(){
              var gotoTop= function(){
                  var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
                  currentPosition -= 10;
                  if (currentPosition > 0) {
                      window.scrollTo(0, currentPosition);
                  }
                  else {
                      window.scrollTo(0, 0);
                      clearInterval(timer);
                      timer = null;
                  }
              }
              var timer=setInterval(gotoTop,1);
          }
      }

    };
</script>


<style>

</style>

