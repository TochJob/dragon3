<template>
  <div class="banner">
    <div class="banner__wrapper">
      <h2 class="banner__heading">Еженедельный Cashback 10%</h2>
      <p class="banner__paragraph">Каждый понедельник</p>
    </div>
    <a class="banner__link" :href="siteLink">Получить бонус</a>
    <img class="banner__img girl" src="@/assets/img/banner/girl.png" alt="girl" />
    <img class="banner__img money" src="@/assets/img/banner/money.png" alt="money" />
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: "BannerLanding",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["siteLink"]),
  },
};
</script>
<style lang="scss" scoped>
.banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #131313;
  border-radius: 14px;
  max-width: 1135px;
  padding: 52px 169px 52px 66px;
  position: relative;
  z-index: 1;

  &__img {
    position: absolute;
    z-index: -1;

    &.girl {
      height: 222px;
      top: 0;
      right: 48%;
    }

    &.money {
      right: 35px;
      bottom: 0;
      height: 189px;
    }
  }

  &__heading {
    font-family: "PT Sans";
    font-weight: 700;
    font-size: 48px;
    line-height: 50px;
    color: #ffffff;
    width: 317px;
  }

  &__paragraph {
    font-family: "PT Sans";
    font-weight: 700;
    font-size: 15px;
    color: #ffffff;
    padding: 0 0 0 0;
  }

  &__link {
    font-family: "Arial";
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 40px;
    color: #ffffff;
    background: linear-gradient(180deg, #c80406 0%, #c32f1e 100%);
    border-radius: 8px;
    padding: 13px 34px;
    text-decoration: none;
  }
}

@media screen and (max-width: 1500px) {
  .banner {
    padding: 42px 100px 42px 42px;
    background: url(@/assets/img/banner/girl.png) left 50% bottom no-repeat;
    background-color: #131313;
    background-size: contain;

    .girl {
      display: none;
    }
  }
}

@media screen and (max-width: 992px) {
  .banner {
    max-width: 760px;
    padding: 40px;

    &__link {
      font-size: 15px;
      padding: 10px 20px;
    }

    &__heading {
      font-size: 34px;
      line-height: 38px;
    }
  }
}

@media screen and (max-width: 620px) {
  .banner {
    background: #131313;

    &__link {
      font-size: 13px;
      padding: 10px 15px;
    }

    &__img {
      &.money {
        height: 90%;
      }
    }
  }
}

@media screen and (max-width: 576px) {
  .banner {
    &__link {
      font-size: 10px;
      width: 40%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__heading {
      width: auto;
      max-width: 280px;
    }
  }
}

@media screen and (max-width: 480px) {
  .banner {
    padding: 10px;
    &__heading {
      font-size: 15px;
      line-height: 100%;
    }
    &__paragraph {
      font-size: 10px;
    }
    &__link {
      width: 80%;
      line-height: 120%;
    }
  }
}
</style>
