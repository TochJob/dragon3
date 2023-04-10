<template>
    <footer class="footer">
        <div class="footer__list" v-for="(item, index) of footerList" :key="index">
            <h2 class="footer__heading">{{ item.heading }}</h2>
            <a class="footer__navigation" v-for="(item, index) of item.links" :key="index" href="">{{ item }}</a>
        </div>
        <div class="footer__list">
            <h2 class="footer__heading">Партнерам:</h2>
            <a class="footer__navigation" href="">Партнерская программа</a>
            <img class="footer__image" src="@/assets/img/icons/partnerlogo.png" alt="Partners">
        </div>
    </footer>
</template>
<script>
export default {
    name: 'FooterLanding',
    data() {
        return {
            footerList: [
                {
                    heading: 'Правила и условия:',
                    links: ['Пользовательское соглашение', 'Правила приема ставок', 'Основные виды ставок', 'Основные положения приёма ставок', 'Правила по видам спорта']
                },
                {
                    heading: 'Информация:',
                    links: ['Бонусы и Акции', 'О нас', 'FAQ', 'Лицензия', 'Политика конфиденциальности', 'Ответственная игра']
                },
                {
                    heading: 'Ставки:',
                    links: ['Ставки на лайв', 'Ставки на прематч', 'Мульти-лайв', 'Результаты', 'Лайв-календарь', 'Статистика']
                },
                {
                    heading: 'Казино:',
                    links: ['Новинки', 'Слоты', 'Рулетки', 'Настольные игры', 'Лотерея', 'Система привилегий']
                }
            ]
        }
    },
}
</script>
<style lang="scss" scoped>
.footer {
    display: flex;
    justify-content: space-between;

    &__list {
        margin: 32px 0 0 0;
    }

    &__heading {
        font-family: 'PT Sans';
        font-weight: 700;
        font-size: 16px;
        line-height: 21px;
        color: #FFFFFF;
        margin: 0 0 10px 0;
    }

    &__navigation {
        font-family: 'Inter';
        font-weight: 400;
        font-size: 9.5px;
        line-height: 11px;
        color: #FFFFFF;
        text-decoration: none;
        display: flex;
        flex-direction: column;
        padding: 0 0 5px 0;
    }

    &__partners {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }


}
</style>