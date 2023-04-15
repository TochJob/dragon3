<template>
  <div class="buttons">
    <div class="buttons__options">
      <a class="buttons__option" v-for="(item, index) of option" :key="index" :href="siteLink">{{
        item
      }}</a>
    </div>
    <a class="buttons__games" v-for="(item, index) of games" :key="index" :href="siteLink">{{
      item
    }}</a>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "SidebarButtons",
  data() {
    return {
      option: ["Пинкоины", "Достижения Casino", "Лотерея", "Акции"],
      games: [
        "Турниры",
        "Все игры",
        "NetEnt",
        "Microgaming",
        "Amatic",
        "Play n GO",
        "Endorphina",
        "Quickspin",
        "Thunderkick",
        "Pragmatic",
        "Playtech",
        "Blueprint",
        "Push Gaming",
        "Red Tiger",
        "ELK Studios",
        "Spinomenal",
        "Igrosoft",
        "Nolimit City",
        "Belatra",
        "Platipus",
        "iSoftBet",
        "BGaming",
        "Wazdan",
        "PariPlay",
        "BetSoft",
        "Booming",
        "MrSlotty",
        "PG Soft",
        "Tom Horn",
        "World Match",
        "Evoplay",
        "GameArt",
        "Habanero",
        "Bet2Tech",
        "1x2gaming",
        "Iron Dog Studio",
        "FelixGaming",
        "Lottery",
      ],
    };
  },
  computed: {
    ...mapGetters(["siteLink"]),
  },
};
</script>
<style lang="scss" scoped>
.buttons {
  &__options {
    margin: 0 0 10px 0;
  }

  &__option {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    font-family: "PT Sans";
    font-weight: 400;
    font-size: 16px;
    color: #ffffff;
    background: linear-gradient(180deg, #de3c21 0%, #b41b0f 100%);
    width: 276px;
    height: 35px;
    padding: 8px 0 10px 10px;

    &:hover {
      background: linear-gradient(180deg, #bd341c 0%, #7a110a 100%);

    }

    &:first-child {
      border-radius: 6px 6px 0 0;
    }

    &:last-child {
      border-radius: 0 0 6px 6px;
      position: relative;

      &::before {
        position: absolute;
        content: "";
        background-image: url("@/assets/img/glow-lights.gif");
        width: calc(100% + 26px);
        height: 65px;
        top: 0;
        -webkit-transform: translateY(-50%);
        transform: translateY(-23%);
        left: -13px;
        background-size: 100% 100%, 0, 0;
        mix-blend-mode: screen;
        z-index: 1;
      }
    }
  }

  &__games {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    font-family: "PT Sans";
    font-weight: 400;
    font-size: 16px;
    color: #ffffff;
    background: linear-gradient(180deg, #424242 0%, #343434 100%);
    width: 276px;
    height: 36px;
    padding: 8px 0 10px 10px;
    border-bottom: 1px solid #656565;

    &:hover {
      background: linear-gradient(180deg, #313131 0%, #222222 100%);
    }

    &:nth-child(2) {
      border-radius: 6px 6px 0 0;
    }

    &:last-child {
      border-radius: 0 0 6px 6px;
    }
  }
}

@media screen and (max-width: 1200px) {
  .buttons {
    &__option {
      width: 100%;
    }
    &__games {
      width: 100%;
    }
  }
}
</style>
