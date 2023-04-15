<template>
  <header class="header">
    <a class="header__logo" :href="siteLink">
      <img src="@/assets/img/logo_casino 1.svg" alt="logo" />
    </a>

    <nav class="navigation">
      <a class="navigation__link" :href="siteLink" v-for="(item, index) of navList" :key="index">{{
        item
      }}</a>
    </nav>
    <div class="header__buttons">
      <a
        :href="siteLink"
        class="button"
        :class="item.option"
        v-for="(item, index) of headerButtons"
        :key="index"
      >
        {{ item.name }}
      </a>
    </div>
  </header>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "HeaderLanding",
  data() {
    return {
      navList: [
        "Зеркало",
        "Моб. версия",
        "Вход",
        "Бонусы",
        "Промокод",
        "Отзывы",
        "Регистрация",
        "Скачать",
      ],
      headerButtons: [
        {
          name: "Вход",
          option: "login",
        },
        {
          name: "Регистрация",
          option: "registration",
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["siteLink"]),
  },
};
</script>
<style lang="scss" scoped>
.header {
  padding: 36px 43px 51px 43px;
  display: flex;
  align-items: center;

  &__buttons {
    margin-left: auto;

    .button {
      text-decoration: none;
      display: inline-block;
      &:hover{
        opacity: .5;
      }
      

    }

    .login {
      background: linear-gradient(180deg, #50c5ac 0%, #3fa18d 50%, #2e7f70 100%);
      font-family: "PT Sans";
      font-weight: 400;
      font-size: 15px;
      line-height: 35px;
      color: #ffffff;
      padding: 0 36px;
      // border: 1px solid #55a399;
      border: none;
      margin: 0 8px 0 0;
      
    }

    .registration {
      background: linear-gradient(180deg, #de3c21 0%, #c32c1c 100%);
      font-family: "PT Sans";
      font-weight: 400;
      font-size: 15px;
      line-height: 35px;
      color: #ffffff;
      padding: 0 48px;
      border: 1px solid #bc2502;
    }
  }
}

.navigation {
  margin: 0 0 0 92px;

  &__link {
    margin: 0 36px 0 0;
    color: #a9a9a9;
    font-family: PT Sans;
    font-weight: 400;
    font-size: 19px;
    text-decoration: none;
    &:hover {
      opacity: 0.5;
    }
  }
}

@media screen and (max-width: 1500px) {
  .navigation {
    margin-left: 15px;
    display: flex;
    gap: 15px;

    &__link {
      margin-right: 0;
      font-size: 16px;
    }
  }
}

@media screen and (max-width: 1200px) {
  .navigation {
    display: none;
  }

  .header {
    &__buttons {
      display: none;
    }
  }
}

@media screen and (max-width: 480px) {
  .header {
    padding: 20px 43px;

    &__logo {
      img {
        width: 60%;
      }
    }
  }
}
</style>
