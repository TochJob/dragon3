<template>
  <div id="app">
    <Header/>
    <Section/>
    <Partners/>
    <Footer/>


  </div>
</template>

<script>
import Header from './components/Header.vue';
import Section from './components/Section.vue'; 
import Partners from './components/Section/Partners.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header, 
    Section,
    Partners,
    Footer,
  }
}
</script>

<style>
@import '@/assets/scss/fonts.scss';
* {
  margin: 0%;
  padding: 0%;
  box-sizing: border-box;
}

#app {
  background-color: #303131;
}
.button{
  border-radius: 6px;
  cursor: pointer;
}
</style>
