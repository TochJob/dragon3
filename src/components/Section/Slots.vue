<template class="slots">
    <div class="slots__buttons">
        <div class="slots__buttons-wrapper">
            <div class="slots__options" v-for="(item, index) of options" :key="index">
                <a class="slots__options-link" href="" v-for="(el, index) of item" :key="index">{{ el }}</a>
            </div>
        </div>
        <div class="slots__winners">
            <div class="slots__winner" v-for="(item, index) of winners" :key="index">
                <h3 class="slots__heading">{{ item.title }}</h3>
                <img class="slots__img" :src="item.img" :alt="item.title">
                <div class="slots__winner-list">
                    <p class="slots__name">{{ item.name }}</p>
                    <p class="slots__prize">{{ item.prize }}</p>
                </div>
            </div>
        </div>
        <div class="slots__games">
            <a class="slots__game" v-for="(item, index) of games" :key="index" href="">
                <img class="slots__game-image" :src="item.img" :alt="item.name">
                <div class="slots__game-name">
                    <h3 class="slots__names">{{ item.name }}</h3>
                    <img class="slots__favor" :src="item.icon" alt="favor">
                </div>
            </a>
        </div>
        <a class="slots__red-button" href="">Показать все игры</a>
    </div>
</template>
<script>
export default {
    name: 'SlotsLanding',
    data() {
        return {
            options: [
                ['ТОП игр недели', 'Сейчас выигрывают', 'ТОП игр месяца'],
                ['Новинки', 'Слоты', 'Рулетки', 'Карточные']
            ],
            winners: [
                {
                    title: 'Magical Amazon',
                    img: require('@/assets/img/slots/magical_amazon.png'),
                    name: 'dimon6',
                    prize: '1600 ₽'
                },
                {
                    title: 'Lucky Streak 3',
                    img: require('@/assets/img/slots/lucky_streak.png'),
                    name: '+79671',
                    prize: '1200 ₽'
                },
                {
                    title: 'Crazy Monkey',
                    img: require('@/assets/img/slots/crazy_monkey.png'),
                    name: '+79121',
                    prize: '1600 ₽'
                },
                {
                    title: '9 Masks of Fire',
                    img: require('@/assets/img/slots/masks_of_fire.png'),
                    name: '+77018',
                    prize: '9600 KZT'
                },
                {
                    title: 'Midas Golden Touch',
                    img: require('@/assets/img/slots/midas.png'),
                    name: '+79649',
                    prize: '1200 RUB'
                }
            ],
            games: [
                {
                    img: require('@/assets/img/games/hot_fruit.png'),
                    name: 'Hot Fruits 100',
                    icon: require('@/assets/img/icons/span.png'),
                },
                {
                    img: require('@/assets/img/games/lucky_joker.png'),
                    name: 'Lucky Joker 100',
                    icon: require('@/assets/img/icons/span.png'),
                },
                {
                    img: require('@/assets/img/games/asgardians.png'),
                    name: 'Asgardians',
                    icon: require('@/assets/img/icons/span.png'),
                },
                {
                    img: require('@/assets/img/games/agent.png'),
                    name: 'Agent Destiny',
                    icon: require('@/assets/img/icons/span.png'),
                },
                {
                    img: require('@/assets/img/games/resident.png'),
                    name: 'Resident',
                    icon: require('@/assets/img/icons/span.png'),
                },
                {
                    img: require('@/assets/img/games/book_of_oz.png'),
                    name: 'Book of Oz',
                    icon: require('@/assets/img/icons/span.png'),
                },
                {
                    img: require('@/assets/img/games/streak.png'),
                    name: 'Lucky Streak 3',
                    icon: require('@/assets/img/icons/span.png'),
                },
                {
                    img: require('@/assets/img/games/big_bad_wolf.png'),
                    name: 'Big Bad Wolf',
                    icon: require('@/assets/img/icons/span.png'),
                },
                {
                    img: require('@/assets/img/games/book_of_dead.png'),
                    name: 'Book of Dead',
                    icon: require('@/assets/img/icons/span.png'),
                },
                {
                    img: require('@/assets/img/games/dead_or_alive.png'),
                    name: 'Dead or Alive II',
                    icon: require('@/assets/img/icons/span.png'),
                }
            ]

        }
    },

}
</script>
<style lang="scss" scoped>
.slots {
    &__options {
        background: linear-gradient(180deg, #424242 0%, #343434 100%);
        border-radius: 6px;
        display: flex;
        justify-content: space-around;
        margin: 0 0 10px 0;
    }

    &__options-link {
        text-decoration: none;
        font-family: 'PT Sans';
        font-weight: 400;
        font-size: 19px;
        line-height: 35px;
        color: #FFFFFF;

    }

    &__winner-list {
        display: flex;
    }

    &__winners {
        display: flex;
        justify-content: space-between;
        margin: 24px 0 32px 0;
    }

    &__winner {
        background-image: url(@/assets/img/slots/background.png);
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: left bottom;
        width: 170px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    &__heading {
        font-family: 'Inter';
        font-weight: 400;
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;
        text-align: center;
    }

    &__name {
        font-family: 'Inter';
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: #24BB9D;
        margin: 0 54px 0 0;
    }

    &__prize {
        font-family: 'Inter';
        font-weight: 400;
        font-size: 13px;
        line-height: 16px;
        color: #D4351D;
    }

    &__img {
        margin: 7.5px 0 2.5px 0;
        height: 56px;
    }

    &__games {
        display: flex;
        flex-wrap: wrap;
    }

    &__game {
        text-decoration: none;
        margin: 10px 10px;
    }

    &__game-name {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &__names {
        font-family: 'PT Sans';
        font-weight: 400;
        font-size: 16px;
        line-height: 21px;
        color: #FFFFFF;
    }

    &__red-button {
        text-decoration: none;
        background: linear-gradient(180deg, #DE3C21 0%, #B41B0F 100%);
        border: 1px solid #BC2502;
        border-radius: 6px;
        font-family: 'PT Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 35px;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
    }



}
</style>