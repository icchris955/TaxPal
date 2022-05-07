<!-- This Component contains all the Categories(EBM Analysis...) -->
<template>
  <div class="category">
    <template>
      <v-card class="mx-auto" max-width="500" elevation="10" mandatory>
        <v-card-text>
          <h2 class="text-h6 mb-2">Choose an Activity</h2>
          <v-divider></v-divider>
          <v-chip-group
            v-model="activities"
            column
            color="teal darken-2">
            <v-chip v-for="(item, i) in items" filter :key="i">{{
              item.name
            }}</v-chip>
          </v-chip-group>
        </v-card-text>
      </v-card>
    </template>
  </div>
</template>

<script>
export default {
  name: "Category",
  data: () => ({
    activities: [1],
    items: [
      { name: "Bulk Load(EBM/Etax)" },
      { name: "EBM Data Analysis" },
      { name: "Imports Analysis" },
      { name: "Inventory Analysis" },
      { name: "Cost Analysis" },
      { name: "Etax & EBM Data Comparison" },
    ],
  }),
};
</script>
