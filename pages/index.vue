<template>
  <v-container>
    <div align="center">
      <h1 id="page-title" class="mt-md-10 mb-md-5">
        {{ $t("index.title") }}
      </h1>
    </div>
    <alerts-list />
    <div>
      <cancellation-list />
    </div>
  </v-container>
</template>
