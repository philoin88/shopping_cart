<template>
  <v-footer dark height="auto">
    <v-card flat tile class="indigo lighten-1 white--text text-sm-center flex">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-3" dark icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text>Shopping Cart Footer Text Here.</v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text text-center">
        &copy; 2019 -
        <strong>Shopping Cart</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({
    icons: [
      'fab fa-facebook',
      'fab fa-twitter',
      'fab fa-google-plus',
      'fab fa-linkedin',
      'fab fa-instagram'
    ]
  })
};
</script>

<style>
</style>