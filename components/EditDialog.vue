<template>
  <v-dialog :value="showEditDialog" max-width="500px">
    <v-card>
      <v-card-title>Edit Submission</v-card-title>
      <v-col cols="12">
        <v-text-field
          v-for="header in headers"
          v-show="header.value != 'action'"
          :key="header.value"
          :label="header.text"
          :value="itemToEdit[header.value]"
          @input="$emit('item-value-edited', $event)"
        ></v-text-field>
      </v-col>
      <!-- <template v-slot:[`item.website`]="{ item }">
        <a target="_blank" :href="item.website">
          {{ item.website }}
        </a>
      </template> -->
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="handleApproveBtnPressed">
          Approve
        </v-btn>
        <v-btn color="blue darken-1" text @click="handleCancelBtnPressed">
          Cancel
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    itemToEdit: Object,
    headers: Array,
    showEditDialog: Boolean,
  },
  methods: {
    handleCancelBtnPressed() {
      this.$emit("on-cancel-btn-pressed");
    },
    handleApproveBtnPressed() {
      this.$emit("on-approve-btn-pressed");
    },
    handleEditedValue($event) {
      this.$emit("item-value-edited", $event);
    },
  },
};
</script>
