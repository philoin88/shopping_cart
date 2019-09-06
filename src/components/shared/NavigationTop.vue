<template>
  <div>
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list>
        <v-list-title-content>
          <v-list-title-title>Menu</v-list-title-title>
        </v-list-title-content>
        <v-divider></v-divider>

        <template v-for="(item, index) in items">
          <v-list-tile :key="index" :href="item.href">
            <v-list-tile-action>
              <v-icon light v-html="item.icon"></v-icon>
            </v-list-tile-action>
            <v-list-tile-action>
              <v-list-title-title>{{ item.title }}</v-list-title-title>
            </v-list-tile-action>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Shopping Cart</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-item>
        <v-btn text>Products</v-btn>
        <v-btn text>
          <v-badge left color="green">
            <span slot="badge">5</span>
            <v-icon>shopping_cart</v-icon>Basket
          </v-badge>
        </v-btn>
      </v-toolbar-item>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    items: [
      {
        icon: "perm_identity",
        href: "#",
        title: "Account"
      }
    ]
  })
};
</script>

<style>
</style>