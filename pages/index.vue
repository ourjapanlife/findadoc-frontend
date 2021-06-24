<template>
  <v-container>
    <div align="center">
      <h1 class="mt-md-10 mb-md-5" id="page-title">{{ $t("index.title") }}</h1>
    </div>
    <alerts-list />
    <div>
      <cancellation-list />
    </div>
  </v-container>
</template>
