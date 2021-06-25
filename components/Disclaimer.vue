<template>
  <div id="disclaimer">
    <p v-html="$t('message.disclaimerAlert')"></p>
  </div>
</template>

<style scoped>
#disclaimer {
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
}
</style>
