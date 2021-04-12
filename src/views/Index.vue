<template>
  <main class="main index-page">
    <section class="main-section">
      <div class="container text_center">
        <h1>An ecosystem of products for insuring and making money for farmers in the BSC network</h1>
        <div class="main-sec-row">
          <div class="main-phone">
            <img srcset="@/assets/img/phone-screen.png" alt="">
          </div>
          <div class="main-role">
            <div class="title-site title-site_h2">I’m a farmer</div>
            <p>Get insurance against dumping or increase your profits from farming </p>
            <a href="#" class="btn btn_border">Launch delta.theta LITE</a>
          </div>
          <div class="main-role">
            <div class="title-site title-site_h2">I’m a trader</div>
            <p>Make money on any market movement by trading delta.theta options</p>
            <a href="#" class="btn btn_primary">Launch delta.theta LITE</a>
          </div>
        </div>
      </div>
    </section>

    <section class="st-section _gray">
      <div class="container">
        <div class="section-st-head">
          <h2 class="title-site_h1">Not a professional trader?</h2>
          <p>Take advantagе of delta.theta in 3 easy-to-use cases</p>
        </div>

        <div class="mobile-scroll-wrapper">
          <div class="strategies-tiles">
            <div class="strategy-tile" :class="{ _active: true }">
              <button class="btn btn_xxs btn_ghost btn_icon btn_ic-primary" type="button">
                <svg class="icon icon-plus">
                  <use xlink:href="@/assets/img/sprite.svg#plus"></use>
                </svg>
              </button>
              <div class="strategy-tile__icon">
                <svg class="icon icon-fig-house">
                  <use xlink:href="@/assets/img/sprite.svg#fig-house"></use>
                </svg>
              </div>
              <strong>Hedge Risks</strong>
              <p>Protect your assets from being dumped with delta.theta! Buy Put option.</p>
            </div>

            <div class="strategy-tile">
              <a href="#" class="btn btn_xxs btn_ghost btn_icon btn_ic-primary">
                <svg class="icon icon-plus">
                  <use xlink:href="@/assets/img/sprite.svg#plus"></use>
                </svg>
              </a>
              <div class="strategy-tile__icon">
                <svg class="icon icon-fig-left">
                  <use xlink:href="@/assets/img/sprite.svg#fig-left"></use>
                </svg>
              </div>
              <strong>Sell expensive</strong>
              <p>Make more money on farming! Sell Call option.</p>
            </div>

            <div class="strategy-tile">
              <a href="#" class="btn btn_xxs btn_ghost btn_icon btn_ic-primary">
                <svg class="icon icon-plus">
                  <use xlink:href="@/assets/img/sprite.svg#plus"></use>
                </svg>
              </a>
              <div class="strategy-tile__icon">
                <svg class="icon icon-fig-right">
                  <use xlink:href="@/assets/img/sprite.svg#fig-right"></use>
                </svg>
              </div>
              <strong>Buy cheaper</strong>
              <p>Make money on pending orders!</p>
            </div>
          </div>
        </div>

        <div class="tabs-bl">
          <div class="tabs-head">
            <div class="tabs-tt">Protect your assets from being dumped with delta.theta! Buy Put option.</div>
            <p>Do you farm and are afraid the asset will drop in value? Buy insurance! Choose an asset, choose an expiration date and choose an insurance rate (Put price). Choose a price at which you are ready to buy insurance or check other participants offer.  </p>
          </div>

          <ul class="tabs-list-info">
            <li>
              <div class="tabs-list-info__icon">
                <svg class="icon icon-ptrn-pic-1">
                  <use xlink:href="@/assets/img/sprite.svg#ptrn-pic-1"></use>
                </svg>
                <svg class="icon icon-pic-cristal">
                  <use xlink:href="@/assets/img/sprite.svg#pic-cristal"></use>
                </svg>
              </div>
              <div class="tabs-list-info__about">
                <span>You have 1 ETH. </span>
                <span>The current rate is $2,000. <strong>You are afraid of the dump.</strong></span>
              </div>
            </li>

            <li>
              <div class="tabs-list-info__icon">
                <svg class="icon icon-ptrn-pic-2">
                  <use xlink:href="@/assets/img/sprite.svg#ptrn-pic-2"></use>
                </svg>
                <svg class="icon icon-pic-house">
                  <use xlink:href="@/assets/img/sprite.svg#pic-house"></use>
                </svg>
              </div>
              <div class="tabs-list-info__about">
                <span><strong>Insurance purchase</strong></span>
                <span>Token - ETH</span>
                <span>Quantity - 1</span>
                <span>Insurance rate (Put price) - $2,000</span>
                <span>Term - 11 days</span>
                <span>Cost - $80</span>
              </div>
            </li>

            <li>
              <div class="tabs-list-info__icon">
                <svg class="icon icon-ptrn-pic-2">
                  <use xlink:href="@/assets/img/sprite.svg#ptrn-pic-2"></use>
                </svg>
                <svg class="icon icon-pic-process-success">
                  <use xlink:href="@/assets/img/sprite.svg#pic-process-success"></use>
                </svg>
              </div>
              <div class="tabs-list-info__about">
                <span>The rate of ETH drops to $1,000. <strong>You use your insurance and sell 1 ETH at the rate of $2,000 with 100% guarantee.</strong></span>
              </div>
            </li>

            <li>
              <div class="tabs-list-info__icon">
                <svg class="icon icon-ptrn-pic-3">
                  <use xlink:href="@/assets/img/sprite.svg#ptrn-pic-3"></use>
                </svg>
                <svg class="icon icon-pic-device">
                  <use xlink:href="@/assets/img/sprite.svg#pic-device"></use>
                </svg>
              </div>
              <div class="tabs-list-info__about">
                <span>Go to light terminal, </span>
                <span><strong>choose “Buy Put Option”.</strong></span>
              </div>
            </li>

            <li>
              <div class="tabs-list-info__icon">
                <svg class="icon icon-ptrn-pic-4">
                  <use xlink:href="@/assets/img/sprite.svg#ptrn-pic-4"></use>
                </svg>
                <svg class="icon icon-pic-form">
                  <use xlink:href="@/assets/img/sprite.svg#pic-form"></use>
                </svg>
              </div>
              <div class="tabs-list-info__about">
                <span>Choose an asset, quantity, insurance rate (Put price), term of insurance and cost.</span>
              </div>
            </li>

            <li>
              <div class="tabs-list-info__icon">
                <svg class="icon icon-ptrn-pic-5">
                  <use xlink:href="@/assets/img/sprite.svg#ptrn-pic-5"></use>
                </svg>
                <svg class="icon icon-pic-graph">
                  <use xlink:href="@/assets/img/sprite.svg#pic-graph"></use>
                </svg>
              </div>
              <div class="tabs-list-info__about">
                <span>Terminal gives a breakeven level from which course the insurance starts to work.</span>
              </div>
            </li>
          </ul>

          <div class="text_center">
            <a href="#" class="btn btn_primary btn_shadow">Launch delta.theta LITE</a>
          </div>
        </div>

        <div class="tabs-bl tabs-bl_sell">
          <div class="tabs-head">
            <div class="tabs-tt">Make more money on farming! Sell Call option.</div>
            <p>Do you farm and hold an asset to sell it at a higher rate? Create a call option - a pending sell order on your asset at the rate YOU want and get extra profit as a reward for your position! </p>
          </div>

          <ul class="tabs-list-info">
            <li>
              <div class="tabs-list-info__icon">
                <svg class="icon icon-ptrn-pic-1">
                  <use xlink:href="@/assets/img/sprite.svg#ptrn-pic-1"></use>
                </svg>
                <svg class="icon icon-pic-cristal">
                  <use xlink:href="@/assets/img/sprite.svg#pic-cristal"></use>
                </svg>
              </div>
              <div class="tabs-list-info__about">
                <span>You have 1 ETH. </span>
                <span>The current rate is $1700. <strong>You are willing to sell at $1,800.</strong></span>
              </div>
            </li>

            <li>
              <div class="tabs-list-info__icon">
                <svg class="icon icon-ptrn-pic-2">
                  <use xlink:href="@/assets/img/sprite.svg#ptrn-pic-2"></use>
                </svg>
                <svg class="icon icon-pic-sell">
                  <use xlink:href="@/assets/img/sprite.svg#pic-sell"></use>
                </svg>
              </div>
              <div class="tabs-list-info__about">
                <span><strong>Create a Call option</strong></span>
                <span>Token - ETH</span>
                <span>Quantity - 1</span>
                <span>Selling rate - $1,800</span>
                <span>Period of order validity - 11 days</span>
                <span>The desired reward - $70</span>
                <span>ETH is blocked until the order is triggered or cancelled</span>
              </div>
            </li>

            <li>
              <div class="tabs-list-info__icon">
                <svg class="icon icon-ptrn-pic-2">
                  <use xlink:href="@/assets/img/sprite.svg#ptrn-pic-2"></use>
                </svg>
                <svg class="icon icon-pic-process-success">
                  <use xlink:href="@/assets/img/sprite.svg#pic-process-success"></use>
                </svg>
              </div>
              <div class="tabs-list-info__about">
                <span><strong>If the order fails, your profit = $70 reward.</strong></span>
                <span>ETH is unblocked.</span>
                <span>OR</span>
                <span><strong>The exchange rate goes up to $1,850 - the order triggers.</strong></span>
                <span>Your profit = $70 reward + profit from the sale at the desired rate.</span>
              </div>
            </li>

            <li>
              <div class="tabs-list-info__icon">
                <svg class="icon icon-ptrn-pic-3">
                  <use xlink:href="@/assets/img/sprite.svg#ptrn-pic-3"></use>
                </svg>
                <svg class="icon icon-pic-device">
                  <use xlink:href="@/assets/img/sprite.svg#pic-device"></use>
                </svg>
              </div>
              <div class="tabs-list-info__about">
                <span>Go to light terminal</span>
              </div>
            </li>

            <li>
              <div class="tabs-list-info__icon">
                <svg class="icon icon-ptrn-pic-4">
                  <use xlink:href="@/assets/img/sprite.svg#ptrn-pic-4"></use>
                </svg>
                <svg class="icon icon-pic-form">
                  <use xlink:href="@/assets/img/sprite.svg#pic-form"></use>
                </svg>
              </div>
              <div class="tabs-list-info__about">
                <span>Choose an asset, quantity, selling rate, order term and desired reward</span>
              </div>
            </li>

            <li>
              <div class="tabs-list-info__icon">
                <svg class="icon icon-ptrn-pic-6">
                  <use xlink:href="@/assets/img/sprite.svg#ptrn-pic-6"></use>
                </svg>
                <svg class="icon icon-pic-clock">
                  <use xlink:href="@/assets/img/sprite.svg#pic-clock"></use>
                </svg>
              </div>
              <div class="tabs-list-info__about">
                <span>Once the price is set, wait for buyers </span>
              </div>
            </li>
          </ul>

          <div class="text_center">
            <a href="#" class="btn btn_primary btn_shadow">Launch delta.theta LITE</a>
          </div>
        </div>

        <div class="tabs-bl tabs-bl_buy">
          <div class="tabs-head">
            <div class="tabs-tt">Make money on pending orders! </div>
            <p>Do you plan to buy the asset cheaper? Create a Put Option, a Buy Pending Order at the price YOU want and earn extra profit on your current position!</p>
          </div>

          <ul class="tabs-list-info">
            <li>
              <div class="tabs-list-info__icon">
                <svg class="icon icon-ptrn-pic-1">
                  <use xlink:href="@/assets/img/sprite.svg#ptrn-pic-1"></use>
                </svg>
                <svg class="icon icon-pic-d">
                  <use xlink:href="@/assets/img/sprite.svg#pic-d"></use>
                </svg>
              </div>
              <div class="tabs-list-info__about">
                <span>You have 1000 DAI. </span>
                <span>The current ETH rate is $2500. <strong>You are willing to buy ETH at $2000.</strong></span>
              </div>
            </li>

            <li>
              <div class="tabs-list-info__icon">
                <svg class="icon icon-ptrn-pic-2">
                  <use xlink:href="@/assets/img/sprite.svg#ptrn-pic-2"></use>
                </svg>
                <svg class="icon icon-pic-buy">
                  <use xlink:href="@/assets/img/sprite.svg#pic-buy"></use>
                </svg>
              </div>
              <div class="tabs-list-info__about">
                <span><strong>Create a Put option</strong></span>
                <span>Token - ETH</span>
                <span>Quantity - 1</span>
                <span>Purchase rate - $2000</span>
                <span>Period of order validity - 11 days</span>
                <span>The desired reward - $50</span>
                <span>DAI is blocked until the order is triggered or cancelled</span>
              </div>
            </li>

            <li>
              <div class="tabs-list-info__icon">
                <svg class="icon icon-ptrn-pic-2">
                  <use xlink:href="@/assets/img/sprite.svg#ptrn-pic-2"></use>
                </svg>
                <svg class="icon icon-pic-process-success">
                  <use xlink:href="@/assets/img/sprite.svg#pic-process-success"></use>
                </svg>
              </div>
              <div class="tabs-list-info__about">
                <span><strong>The rate falls to $2000 - the order is triggered.</strong></span>
                <span>Your profit = premium of $50 + a profitable deal at a good rate.</span>
                <span>OR</span>
                <span><strong>The order does not trigger -</strong> your profit - the reward of $50.</span>
                <span>DAI is unlocked.</span>
              </div>
            </li>

            <li>
              <div class="tabs-list-info__icon">
                <svg class="icon icon-ptrn-pic-3">
                  <use xlink:href="@/assets/img/sprite.svg#ptrn-pic-3"></use>
                </svg>
                <svg class="icon icon-pic-device">
                  <use xlink:href="@/assets/img/sprite.svg#pic-device"></use>
                </svg>
              </div>
              <div class="tabs-list-info__about">
                <span>Go to light terminal</span>
              </div>
            </li>

            <li>
              <div class="tabs-list-info__icon">
                <svg class="icon icon-ptrn-pic-4">
                  <use xlink:href="@/assets/img/sprite.svg#ptrn-pic-4"></use>
                </svg>
                <svg class="icon icon-pic-form">
                  <use xlink:href="@/assets/img/sprite.svg#pic-form"></use>
                </svg>
              </div>
              <div class="tabs-list-info__about">
                <span>Choose an asset, quantity, selling rate, order term and desired reward</span>
              </div>
            </li>
          </ul>

          <div class="text_center">
            <a href="#" class="btn btn_primary btn_shadow">Launch delta.theta LITE</a>
          </div>
        </div>
      </div>
    </section>

    <section class="st-section">
      <div class="container">
        <div class="section-st-head">
          <h2 class="title-site_h1">Want more?</h2>
          <p>Monetize your analytical skills by trading options on delta.theta. <b><a href="#">Get all the benefits of our PRO terminal</a></b></p>
        </div>

        <div class="desk-preview">
          <picture>
            <source srcset="@/assets/img/desktop-screen.png" media="(min-width: 600px)">
            <source srcset="@/assets/img/desktop-screen-mob.png">
            <img srcset="@/assets/img/desktop-screen.png" alt="">
          </picture>
        </div>

        <div class="text_center">
          <a href="#" class="btn btn_primary">Launch delta.theta PRO</a>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Index',
};
</script>
