<template>
  <router-link :to="`quay/${quay.quaycode}`">
    <div>
      <v-row no-gutters align="center">
        <!-- TODO: align chevron on the right dynamically -->
        <v-col cols="10">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="mb-1 primary--text">
                <vehicle-icon :transportmode="quay.transportmode" />
                {{ quay.quayname }}
                &nbsp;
                <distance-text v-if="quay.distance" :distance="quay.distance" />
              </v-list-item-title>
              <v-list-item-subtitle>
                <div class="mb-2">
                  Richting op de kaart: {{ quay.directionfull }}
                  {{ quay.direction }}
                </div>
                <div class="mb-2">
                  <v-chip
                    v-for="route in quay.routes"
                    :key="route.id"
                    class="mr-2"
                    label
                    color="secondary"
                    outlined
                  >
                    <strong>{{ route }}</strong>
                  </v-chip>
                </div>
                <div class="content">
                  <rating-label
                    :rating="quay.profileAccessibleScore.overallRating"
                  />
                  <span
                    v-if="quay.elevatorMalfunction"
                    class="ml-2 px-2 py-1 error white--text lift-label rounded"
                  >
                    <v-icon small color="white">mdi-alert</v-icon
                    ><strong> Lift kapot!</strong>
                  </span>
                  <v-icon v-if="favourite" right class="pb-1" color="secondary"
                    >mdi-star</v-icon
                  >
                </div>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>
        <v-col cols="auto">
          <div class="float-right">
            <v-icon x-large color="grey">mdi-chevron-right</v-icon>
          </div>
        </v-col>
      </v-row>
      <v-divider></v-divider>
    </div>
  </router-link>
</template>

<script>
import VehicleIcon from "@/components/VehicleIcon.vue";
import RatingLabel from "@/components/RatingLabel.vue";
import DistanceText from "@/components/DistanceText.vue";

export default {
  name: "QuayListItem",
  // TODO: don't pass the whole quay, but only the data you need as props
  props: ["quay", "favourite"],
  components: { VehicleIcon, RatingLabel, DistanceText },
};
</script>

<style scoped>
.v-list-item__title {
  font-size: 1.15em;
  font-weight: 700;
}
.v-list-item__subtitle {
  color: rgba(0, 0, 0, 0.87) !important;
}
.v-chip {
  padding: 0 6px;
}
a {
  text-decoration: none;
}
.lift-label {
  display: inline-block;
}
</style>
