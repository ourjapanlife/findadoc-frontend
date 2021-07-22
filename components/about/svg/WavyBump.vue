<template>
    <component :is="$vuetify.breakpoint.mobile ? 'AboutSvgWavyBumpMobile' : 'AboutSvgWavyBumpDesktop'" :top="top" />
</template>
<script>
export default {
  props: {
    top: {
      type: Boolean,
      required: false,
    }
  }
};
</script>
