<template>
  <v-app>
    <NavigationTop/>
    <SearchFront/>
    <v-content>
      <router-view/>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import NavigationTop from './components/shared/NavigationTop'
import SearchFront from './components/shared/SearchFront'
import Footer from './components/shared/Footer'

export default {
  name: 'App',
  components: {
    NavigationTop,
    SearchFront,
    Footer
  }
};
</script>
