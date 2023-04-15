<template lang="">
  <div class="burger__wrapper">
    <div class="burger" @click="isModalOpen = !isModalOpen">
      <img src="@/assets/img/icons/menu.png" alt="burger" v-if="!isModalOpen" />
      <img src="@/assets/img/icons/close.png" alt="burger" v-else />
    </div>
    <aside class="burger__menu" :class="{ open: isModalOpen }">
      <div class="header__buttons">
        <a
          class="button"
          :href="siteLink"
          :class="item.option"
          v-for="(item, index) of headerButtons"
          :key="index"
        >
          {{ item.name }}
        </a>
      </div>
      <Sidebar class="burger__sidebar" />
      <Buttons />
    </aside>
  </div>
</template>

<script>
import Sidebar from "@/components/Section/Sidebar.vue";
import Buttons from "@/components/Section/Buttons.vue";
import { mapGetters } from "vuex";
export default {
  name: "BurgerSection",
  components: {
    Sidebar,
    Buttons,
  },
  data() {
    return {
      isModalOpen: false,
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
.burger {
  position: relative;
  z-index: 19;

  &__menu {
    position: fixed;
    transition: all 0.3s;
    z-index: 9;
    top: 0;
    right: -0%;
    transform: translate(100%, 0px);
    background: #303131;
    overflow-y: auto;
    height: 100vh;
    padding: 70px 30px;
    border: 1px solid #141414;

    &.open {
      transform: translate(0%, 0px);
    }
  }

  &__wrapper {
    display: none;
    position: fixed;
    z-index: 19;
    top: 30px;
    right: 30px;
  }
}

@media screen and (max-width: 1200px) {
  .burger {
    &__menu {
    }

    img {
      width: 30px;
    }

    &__wrapper {
      display: block;
    }
  }
}

.header {
  padding: 36px 43px 51px 43px;
  display: flex;
  align-items: center;

  &__buttons {
    margin-left: auto;

    .button {
      text-decoration: none;
      display: inline-block;
    }

    .login {
      background: linear-gradient(180deg, #50c5ac 0%, #3fa18d 50%, #2e7f70 100%);
      font-family: "PT Sans";
      font-weight: 400;
      font-size: 15px;
      line-height: 35px;
      color: #ffffff;
      padding: 0 36px;
      border: 1px solid #55a399;
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
@media screen and (max-width: 480px) {
  .burger {
    &__wrapper {
      top: 15px;
    }
  }
}
</style>
