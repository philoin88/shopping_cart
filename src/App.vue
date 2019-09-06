<template>
  <v-app>
    <NavigationTop/>
    <SearchFront/>
    <v-content>
      <HelloWorld/>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import NavigationTop from './components/shared/NavigationTop'
import SearchFront from './components/shared/SearchFront'
import Footer from './components/shared/Footer'

export default {
  name: 'App',
  components: {
    HelloWorld,
    NavigationTop,
    SearchFront,
    Footer
  }
};
</script>
