<template>
    <div class="wavy-bump" :class="top ? 'top' : ''" >
        <svg class="wavy-bump-desktop" width="1440" height="88" viewBox="0 0 1440 88" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1518 0L1447.62 16C1377.25 32 1236.5 64 1095.75 68C955 72 814.25 48 673.5 52C532.75 56 392 88 251.25 88C110.5 88 -30.25 56 -100.625 40L-171 24V0L-100.625 0C-30.25 0 110.5 0 251.25 0C392 0 532.75 0 673.5 0C814.25 0 955 0 1095.75 0C1236.5 0 1377.25 0 1447.62 0L1518 0Z" fill="#324199"/>
        </svg>
        <svg class="wavy-bump-mobile" width="414" height="54" viewBox="0 0 414 54" fill="none" xmlns="http://www.w3.org/2000/svg">
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

  .wavy-bump-desktop, .mobile .wavy-bump-mobile {
    display: block;
  }

  .wavy-bump-mobile, .mobile .wavy-bump-desktop {
    display: none;
  }
</style>
