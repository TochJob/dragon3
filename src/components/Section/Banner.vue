<template>
    <div class="banner">
        <div class="banner__wrapper">
            <h2 class="banner__heading">Еженедельный Cashback 10%</h2>
            <p class="banner__paragraph">Каждый понедельник</p>
        </div>
        <a class="banner__link" href="">Получить бонус</a>
        <img class="banner__img girl" src="@/assets/img/banner/girl.png" alt="girl">
        <img class="banner__img money" src="@/assets/img/banner/money.png" alt="money">
    </div>
</template>
<script>
export default {
    name: 'BannerLanding',
    data() {
        return {

        }
    },

}
</script>
<style lang="scss" scoped>
.banner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #131313;
    border-radius: 14px;
    max-width: 1135px;
    padding:52px 169px 52px 66px;
    position: relative;
    z-index: 1;
    &__img {
        position:absolute;
        z-index:-1;
       &.girl{
        height: 222px;
        top:0;
        right: 48%;
       } 
       &.money{
        right:35px;
        bottom:0;
        height: 189px;
       }
    }

    &__heading {
        font-family: 'PT Sans';
        font-weight: 700;
        font-size: 48px;
        line-height: 50px;
        color: #FFFFFF;
        width: 317px;
    }

    &__paragraph {
        font-family: 'PT Sans';
        font-weight: 700;
        font-size: 15px;
        color: #FFFFFF;
        padding:0 0 0 0;
    }

    &__link {
        font-family: 'Arial';
        font-style: normal;
        font-weight: 700;
        font-size: 22px;
        line-height: 40px;
        color: #FFFFFF;
        background: linear-gradient(180deg, #C80406 0%, #C32F1E 100%);
        border-radius: 8px;
        padding: 13px 34px;
        text-decoration: none;

    }


}
</style>