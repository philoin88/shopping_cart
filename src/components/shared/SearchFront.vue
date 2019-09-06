<template>
  <v-parallax height="300" dark src="http://source.unsplash.com/random/150X150">
    <v-container fluid gird-list-xl>
      <v-layout justify-center row wrap>
        <v-flex xs12 style="text-align: center;">
          <h1 class="display-3 font-weight-thin mb-3">Product Search</h1>
          <h4 class="subheader">find what you're missing</h4>
        </v-flex>

        <v-flex xs12>
          <v-layout align-center justify-center row wrap>
            <v-flex xs6>
              <v-form>
                <v-text-field dark outline label="Search for Products" append-icon="search"></v-text-field>
              </v-form>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </v-parallax>
</template>

<script>
export default {
  
};
</script>

<style>
</style>