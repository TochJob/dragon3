<template>
  <div class="sidebar">
    <div class="sidebar__box">
      <p class="sidebar__bonus">Стартовый бонус</p>
      <p class="sidebar__money">25 000 RUB</p>
      <img class="sidebar__arrows" src="@/assets/img/icons/arrow.png" alt="Arrows" />
    </div>
    <a class="sidebar__button" :href="siteLink">Получить сейчас</a>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: "SidebarLanding",
  computed: {
    ...mapGetters(["siteLink"]),
  },
};
</script>
<style lang="scss">
@import "@/assets/scss/animate.scss";
.sidebar {
  background-color: #303131;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

  &__box {
    border-style: groove;
    border-radius: 15px;
    border-color: #f46d5b;
    border-width: 4px;
    align-items: center;
    box-sizing: border-box;
    padding: 12px 24px 8px 24px;
  }

  &__bonus {
    font-family: "PT Sans";
    font-weight: 400;
    font-size: 24px;
    line-height: 26px;
    color: #24bb9d;
  }

  &__money {
    font-family: "PT Sans";
    font-weight: 400;
    font-size: 24px;
    line-height: 26px;
    color: #c80406;
    margin: 3px 0;
  }

  &__arrows {
    width: 41px;
    height: 42px;
    animation: arrow infinite 3s;
  }

  &__button {
    text-decoration: none;
    background: linear-gradient(180deg, #50c5ac 0%, #3fa18d 50%, #2e7f70 100%);
    border: 1px solid #55a399;
    border-radius: 6px;
    font-family: "PT Sans";
    font-weight: 400;
    font-size: 15px;
    line-height: 16px;
    color: #ffffff;
    width: 103px;
    height: 43px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 22px 0 80px 0;
  }
}

@media screen and (max-width: 1200px) {
  .sidebar {
    &__button {
      margin-bottom: 15px;
      width: 100%;
    }

    &__box {
      margin: 15px 0;
    }
  }

  .header__buttons {
    .button {
      font-size: 10px !important;
      line-height: 25px !important;
    }
  }
}

@media screen and (max-width: 480px) {
  .sidebar {
    &__bonus {
      font-size: 17px;
      line-height: 26px;
    }
    &__box {
      margin-bottom: 0;
      padding: 12px 12px 8px 12px;
    }

    &__money {
      font-size: 12px;
      line-height: 15px;
      margin-bottom: 20px;
    }
    &__arrows {
      height: auto;
      width: 35px;
    }
    &__button {
      font-size: 12px;
    }
  }
  .buttons {
    &__option,
    &__games {
      font-size: 13px !important;
      padding: 5px 0 6px 7px !important;
      height: auto !important;
    }
    &__option{
        &:last-child{
            &::before{
                height: 56px !important;
            }
        }
    }
  }
}
</style>
