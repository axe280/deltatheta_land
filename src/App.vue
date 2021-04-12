<template>
  <div id="app" class="page-wrapper">
    <div class="page-body">
      <Header />

      <router-view :key="$route.fullPath" />
    </div>

    <footer class="footer">
      <div class="container">
        <div class="footer-head">
          <a href="/" class="logo">
            <img src="@/assets/img/logo.svg" alt="logo" />
          </a>
          <span class="copy">© Copyright 2021 delta.theta </span>
        </div>

        <div class="footer-row">
          <div class="footer-col">
            <nav class="footer-nav">
              <ul>
                <li><b>How to trade</b></li>
                <li><a href="#">Strategies / Fees</a></li>
                <li><a href="#">Commissions / Docs</a></li>
              </ul>
              <ul>
                <li><b>Research</b></li>
                <li><a href="#">Initiation of coverage</a></li>
                <li><a href="#">Flash notes</a></li>
                <li><a href="#">Trading ideas</a></li>
              </ul>
              <ul>
                <li><b>About</b></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Career</a></li>
                <li><a href="#">delta.theta Token</a></li>
              </ul>
            </nav>
          </div>

          <div class="footer-col">
            <div class="soc-inline">
              <a href="#">
                <svg class="icon icon-tw">
                  <use xlink:href="@/assets/img/sprite.svg#tw"></use>
                </svg>
              </a>
              <a href="#">
                <svg class="icon icon-fb">
                  <use xlink:href="@/assets/img/sprite.svg#fb"></use>
                </svg>
              </a>
              <a href="#">
                <svg class="icon icon-telegram">
                  <use xlink:href="@/assets/img/sprite.svg#telegram"></use>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>
