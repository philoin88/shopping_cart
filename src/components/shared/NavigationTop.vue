<template>
  <div>
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list>
        <v-list-item-content>
          <v-list-item-title>Menu</v-list-item-title>
        </v-list-item-content>
        <v-divider></v-divider>

        <template v-for="(item, index) in items">
          <v-list-item :key="index" :href="item.href">
            <v-list-item-action>
              <v-icon light v-html="item.icon"></v-icon>
            </v-list-item-action>
            <v-list-item-action>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-action>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Shopping Cart</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text router to="/">Products</v-btn>
        <v-btn text router to="/basket">
          <v-badge left color="green">
            <span slot="badge">5</span>
            <v-icon>shopping_cart</v-icon>Basket
          </v-badge>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "NavigationTop",
  data: () => ({
    drawer: false,
    items: [
      {
        icon: "perm_identity",
        href: "/myaccount",
        title: "Account"
      }
    ]
  })
};
</script>

<style>
</style>