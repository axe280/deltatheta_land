<template>
  <header class="header">
    <div class="container">
      <div class="header-inner">
        <a href="/" class="logo">
          <img src="@/assets/img/logo.svg" alt="logo" />
        </a>

        <nav class="header-nav">
          <div class="header-nav-dd" :class="{ _open: opened.first }">
            <span class="header-nav-dd__item" @click="opened.first = !opened.first">
              How to trade
              <svg class="icon icon-arr-down">
                <use xlink:href="@/assets/img/sprite.svg#arr-down"></use>
              </svg>
            </span>
            <ul class="head-dd">
              <li><a href="#">Strategies / Fees</a></li>
              <li><a href="#">Commissions / Docs</a></li>
            </ul>
          </div>

          <div class="header-nav-dd" :class="{ _open: opened.second }">
            <span class="header-nav-dd__item" @click="opened.second = !opened.second">
              Research
              <svg class="icon icon-arr-down">
                <use xlink:href="@/assets/img/sprite.svg#arr-down"></use>
              </svg>
            </span>
            <ul class="head-dd" tabindex="-1" @blur="opened.second = false">
              <li><a href="#">Initiation of coverage</a></li>
              <li><a href="#">Flash notes</a></li>
              <li><a href="#">Trading ideas</a></li>
            </ul>
          </div>

          <div class="header-nav-dd" :class="{ _open: opened.third }">
            <span class="header-nav-dd__item" @click="opened.third = !opened.third">
              About
              <svg class="icon icon-arr-down">
                <use xlink:href="@/assets/img/sprite.svg#arr-down"></use>
              </svg>
            </span>
            <ul class="head-dd">
              <li><a href="#">Blog</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Career</a></li>
              <li><a href="#">delta.theta Token</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>

export default {
  name: 'Header',
  data: () => ({
    opened: {
      first: false,
      second: false,
      third: false,
    },
  }),
};
</script>
