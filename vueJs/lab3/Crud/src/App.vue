<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <Header></Header>
      </div>
    </div>
    <div class="row justify-content-between">
      <div class="col-3">
        <Nav></Nav>
      </div>
      <div class="col-8">
        <Body></Body>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <Footer></Footer>
      </div>
    </div>
  </div>
  <!--end of container-->
</template>

<script>
import Header from './components/header.component.vue';
import Nav from './components/nav.component.vue';
import Body from './components/body.component.vue';
import Footer from './components/footer.component.vue';

export default {
  name: 'App',
  components: {
    Header,
    Nav,
    Body,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
