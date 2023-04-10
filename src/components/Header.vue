<template>
    <header class="header">
        <a class="header__logo" href=""> <img src="@/assets/img/logo_casino 1.svg" alt="logo"> </a>
        <nav class="navigation">
            <a class="navigation__link" href="" v-for="(item, index) of navList" :key="index">{{ item }}</a>
        </nav>
        <div class="header__buttons">
            <button class="button" :class="item.option" v-for="(item, index) of headerButtons" :key="index">{{ item.name
            }}</button>
        </div>
    </header>
</template>
<script>
export default {
    name: 'HeaderLanding',
    data() {
        return {
            navList: ['Зеркало', 'Моб. версия', 'Вход', 'Бонусы', 'Промокод', 'Отзывы', 'Регистрация', 'Скачать'],
            headerButtons: [{
                name: 'Вход',
                option: 'login'
            },
            {
                name: 'Регистрация',
                option: 'registration'
            }]
        }
    },
}
</script>
<style lang="scss" scoped>
.header {
    padding: 36px 43px 51px 43px;
    display: flex;
    align-items: center;

    &__buttons {
        margin-left: auto;

        .login {
            background: linear-gradient(180deg, #50C5AC 0%, #3FA18D 50%, #2E7F70 100%);
            font-family: 'PT Sans';
            font-weight: 400;
            font-size: 15px;
            line-height: 35px;
            color: #FFFFFF;
            padding: 0 36px;
            border: 1px solid #55A399;
            margin: 0 8px 0 0;
        }

        .registration {
            background: linear-gradient(180deg, #DE3C21 0%, #C32C1C 100%);
            font-family: 'PT Sans';
            font-weight: 400;
            font-size: 15px;
            line-height: 35px;
            color: #FFFFFF;
            padding: 0 48px;
            border: 1px solid #BC2502;

        }
    }
}

.navigation {
    margin: 0 0 0 92px;

    &__link {
        margin: 0 36px 0 0;
        color: #A9A9A9;
        font-family: PT Sans;
        font-weight: 400;
        font-size: 19px;
        text-decoration: none;
    }

}



@media screen and (max-width:1500px) {
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

@media screen and (max-width:1050px) {
    .navigation {
        display: none;
    }
    .header{
        &__buttons{
            display: none;
        }
    }
}
</style>