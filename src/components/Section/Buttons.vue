<template >
    <div class="buttons">
        <div class="buttons__options">
            <a class="buttons__option" v-for="(item, index) of option" :key="index" href="">{{ item }}</a>
        </div>
        <a class="buttons__games" v-for="(item, index) of games" :key="index" href="">{{ item }}</a>
    </div>
</template>
<script>
export default {
    name: 'SidebarButtons',
    data() {
        return {
            option: ['Пинкоины', 'Достижения Casino', 'Лотерея', 'Акции'],
            games: ['Турниры', 'Все игры', 'NetEnt', 'Microgaming', 'Amatic', 'Play n GO', 'Endorphina', 'Quickspin', 'Thunderkick', 'Pragmatic', 'Playtech', 'Blueprint', 'Push Gaming', 'Red Tiger', 'ELK Studios', 'Spinomenal', 'Igrosoft', 'Nolimit City', 'Belatra', 'Platipus', 'iSoftBet', 'BGaming', 'Wazdan', 'PariPlay', 'BetSoft', 'Booming', 'MrSlotty', 'PG Soft', 'Tom Horn', 'World Match', 'Evoplay', 'GameArt', 'Habanero', 'Bet2Tech', '1x2gaming', 'Iron Dog Studio', 'FelixGaming', 'Lottery']
        }


    }


}
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
        font-family: 'PT Sans';
        font-weight: 400;
        font-size: 16px;
        color: #FFFFFF;
        background: linear-gradient(180deg, #DE3C21 0%, #B41B0F 100%);
        width: 276px;
        height: 35px;
        padding: 8px 0 10px 10px;

        &:first-child {
            border-radius: 6px 6px 0 0;
        }

        &:last-child {
            border-radius: 0 0 6px 6px;
        }
    }

    &__games {
        display: flex;
        flex-direction: column;
        text-decoration: none;
        font-family: 'PT Sans';
        font-weight: 400;
        font-size: 16px;
        color: #FFFFFF;
        background: linear-gradient(180deg, #424242 0%, #343434 100%);
        width: 276px;
        height: 36px;
        padding: 8px 0 10px 10px;
        border-bottom: 1px solid #656565;

        &:nth-child(2) {
            border-radius: 6px 6px 0 0;
        }

        &:last-child {
            border-radius: 0 0 6px 6px;
        }

    }
}


@media screen and (max-width:1050px) {
    .buttons {
        &__option {
            width: 100%;
        }
        &__games{
            width: 100%;    
        }
    }
}
</style>