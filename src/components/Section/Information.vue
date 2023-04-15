<template>
    <div class="info">
        <h2 class="info__heading">{{ data.title }} </h2>
        <p class="info__description" v-for="(item, index) of data.text" :key="index">{{ item }} </p>
    </div>
</template>
<script>
export default {
    name: 'InfoLanding',
    props: ['data']
}
</script>
<style lang="scss">
.info {
    margin-bottom: 30px;
    &__heading {
        font-family: 'PT Sans';
        font-weight: 700;
        font-size: 30px;
        line-height: 26px;
        color: #FFFFFF;
        margin: 0 0 20px 0;
    }

    &__description {
        font-family: 'PT Sans';
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
        color: rgba(255, 255, 255, .6);
    }
}


@media screen and (max-width:480px) {
    .info{
        &__heading{
            font-size: 18px;
            margin-bottom: 10px;
        }
        &__description{
            font-size: 11px;
            line-height: 150%;
        }
    }
}
</style>