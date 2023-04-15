<template>
  <div id="app">
    <Header />
    <Section />
    <Partners />
    <Footer />
    <Burger />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Section from "./components/Section.vue";
import Partners from "./components/Section/Partners.vue";
import Footer from "./components/Footer.vue";
import Burger from "./components/Burger.vue";

export default {
  name: "App",
  components: {
    Header,
    Section,
    Partners,
    Footer,
    Burger,
  },
  data() {
    return {
    }
  },
};
</script>

<style>
@import "@/assets/scss/fonts.scss";

* {
  margin: 0%;
  padding: 0%;
  box-sizing: border-box;
  transition: all .3s;

}

#app {
  background-color: #303131;
}

.button {
  border-radius: 6px;
  cursor: pointer;
}

@media (min-width: 575.98px) {
  section,
  header,
  footer {
    padding: 0 calc(50vw - 270px);
  }
}

@media (min-width: 767.98px) {
  section,
  header,
  footer {
    padding: 0 calc(50vw - 360px);
  }
}

@media (min-width: 991.98px) {
  section,
  header,
  footer {
    padding: 0 calc(50vw - 480px);
  }
}

@media (min-width: 1199.98px) {
  section,
  header,
  footer {
    padding: 0 calc(50vw - 590px);
  }
}
</style>
