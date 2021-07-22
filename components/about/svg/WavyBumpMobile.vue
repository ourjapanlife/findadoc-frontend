<template>
    <div class="wavy-bump" :class="top ? 'top' : ''" >
        <svg width="414" height="54" viewBox="0 0 414 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M807 0L772.5 9.81818C738 19.6364 669 39.2727 600 41.7273C531 44.1818 462 29.4545 393 31.9091C324 34.3636 255 54 186 54C117 54 48 34.3636 13.5 24.5455L-21 14.7273V0H13.5C48 0 117 0 186 0C255 0 324 0 393 0C462 0 531 0 600 0C669 0 738 0 772.5 0L807 0Z" fill="#324199"/>
        </svg>
    </div>
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
<style>
    .top {
        transform: rotate(180deg);
    }
</style>
