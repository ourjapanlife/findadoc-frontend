<template>
  <v-dialog :value="showDeleteDialog" max-width="500px">
    <v-card>
      <v-card-title class="text-h5">{{
        $t("delete.dialog", [idToDelete])
      }}</v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="handleCancelBtnPressed">{{
          $t("general.cancel")
        }}</v-btn>
        <v-btn color="primary" text @click="handleConfirmBtnPressed">{{
          $t("general.delete")
        }}</v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    idToDelete: { type: String, default: "" },
    showDeleteDialog: Boolean,
  },
  methods: {
    handleCancelBtnPressed() {
      this.$emit("on-cancel-btn-pressed");
    },
    handleConfirmBtnPressed() {
      this.$emit("on-confirm-delete-btn-pressed");
    },
  },
};
</script>
