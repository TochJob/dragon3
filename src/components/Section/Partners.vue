<template>
  <a :href="siteLink" class="img">
    <img class="img__partners" src="@/assets/img/section-img.png" alt="Partners" />
  </a>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "PartnersLanding",
  computed: {
    ...mapGetters(["siteLink"]),
  },
};
</script>
<style lang="scss" scoped>
.img {
    display: block;
    text-decoration: none;
  &__partners {
    width: 100%;
  }
}
</style>
