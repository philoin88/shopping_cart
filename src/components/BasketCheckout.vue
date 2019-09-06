<template>
  <v-container>
    <h2 class="display-2">Basket Checkout</h2>

    <form action>
      <v-layout>
        <v-flex xs6>
          <strong>Payment Address</strong>
          <v-text-field label="Name"></v-text-field>
          <v-text-field label="Address"></v-text-field>
          <v-text-field label="Zipcode"></v-text-field>
          <v-text-field label="City"></v-text-field>
          <v-text-field label="Phone"></v-text-field>
          <v-text-field label="E-mail"></v-text-field>

          <v-checkbox v-model="deliver_address" label="Other Delivery Address"></v-checkbox>
        </v-flex>

        <v-flex xs6>
          <strong>Delivery Address</strong>
          <div v-if="deliver_address">
            <v-text-field label="Name"></v-text-field>
            <v-text-field label="Address"></v-text-field>
            <v-text-field label="Zipcode"></v-text-field>
            <v-text-field label="City"></v-text-field>
          </div>

          <div v-else>
            <v-alert
              type="info"
              :value="true"
            >The Delivery Address is the same as the payment adress.</v-alert>
          </div>
        </v-flex>
      </v-layout>
    </form>

    <hr />

    <v-btn color="success" larger style="float: right">Complete Order</v-btn>
  </v-container>
</template>

<script>
export default {
  name: "BasketCheckout",
  data: () => ({
    deliver_address: false
  })
};
</script>

<style>
</style>