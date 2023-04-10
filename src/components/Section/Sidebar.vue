<template>
    <div class="sidebar">
        <div class="sidebar__box">
            <p class="sidebar__bonus">Стартовый бонус</p>
            <p class="sidebar__money">25 000 RUB</p>
            <img class="sidebar__arrows" src="@/assets/img/icons/arrow.png" alt="Arrows">

        </div>
        <a class="sidebar__button" href="">Получить сейчас</a>
    </div>
</template>
<script>
export default {
    name: 'SidebarLanding'

}
</script>
<style lang="scss" scoped>
.sidebar {
    background-color: #303131;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;

    &__box {
        border-style: groove;
        border-radius: 15px;
        border-color: #F46D5B; 
        border-width: 4px;
        align-items: center;
        box-sizing: border-box;
        padding: 12px 24px 8px 24px;
        }

    &__bonus {
        font-family: 'PT Sans';
        font-weight: 400;
        font-size: 24px;
        line-height: 26px;
        color: #24BB9D;
        }

    &__money {
        font-family: 'PT Sans';
        font-weight: 400;
        font-size: 24px;
        line-height: 26px;
        color: #C80406;
        margin: 3px 0;
    }

    &__arrows {
        width: 41px;
        height: 42px;

    }

    &__button {
        text-decoration: none;
        background: linear-gradient(180deg, #50C5AC 0%, #3FA18D 50%, #2E7F70 100%);
        border: 1px solid #55A399;
        border-radius: 6px;
        font-family: 'PT Sans';
        font-weight: 400;
        font-size: 15px;
        line-height: 16px;
        color: #FFFFFF;
        width: 103px;
        height: 43px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 22px 0 80px 0;

    }

}
</style>