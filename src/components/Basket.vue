<template>
  <v-container>
    <h2 class="display-2 mb-4">Basket</h2>

    <v-list two-line>
      <template v-for="(product, index) in products">
        <v-list-item :key="product.product_id">
          <v-list-item-avatar>
            <img :src="product.photo" alt />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="product.title"></v-list-item-title>
            <v-list-item-subtitle v-html="product.sub_title"></v-list-item-subtitle>
          </v-list-item-content>

          <v-list-tile>{{ product.price }} $</v-list-tile>

          <v-list-tile-action>
            <v-text-field label="Quantity" reverse :value="product.qty"></v-text-field>
          </v-list-tile-action>

          <v-list-tile>{{ product.price * product.qty }} $</v-list-tile>

          <v-list-tile-action>
            <v-btn icon ripple>
              <v-icon color="red lighten-1">delete</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-item>

        <v-divider v-if="index + 1 < products.length" :key="index"></v-divider>
      </template>
    </v-list>

    <v-container>
      <v-btn color="success" larger style="float: right;" router to="/basket/checkout">Go To Payment</v-btn>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: "Basket",
  data: () => ({
    products: [
      {
        product_id: "kitchen-1",
        photo: "https://cdn.vuetifyjs.com/images/cards/kitchen.png",
        title: "QW Coooking utensils",
        sub_title:
          '"Our vintage kitchen utensils delight any chef. Made of bamboo by hand.',
        price: 14.99,
        qty: "1"
      },
      {
        product_id: "kitchen-2",
        photo: "https://cdn.vuetifyjs.com/images/cards/kitchen.png",
        title: "QW Coooking utensils",
        sub_title:
          '"Our vintage kitchen utensils delight any chef. Made of bamboo by hand.',
        price: 34.99,
        qty: "2"
      },
      {
        product_id: "kitchen-3",
        photo: "https://cdn.vuetifyjs.com/images/cards/kitchen.png",
        title: "QW Coooking utensils",
        sub_title:
          '"Our vintage kitchen utensils delight any chef. Made of bamboo by hand.',
        price: 54.99,
        qty: "2"
      }
    ]
  })
};
</script>

<style scoped>
</style>