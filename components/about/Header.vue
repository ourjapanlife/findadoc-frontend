<template>
  <div>
    <div class="header-widget">
      <div class="header-widget-content">
        <h1> {{ $t("about.header.headline") }} </h1>
      </div>
    </div>
    <AboutSvgWavyBump />
  </div>
</template>
<style>
.header-widget {
  color: white;
  background: #324199;
  font-size: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width:  100%;
  padding-top: 100px;
  padding-bottom: 50px;
}
.mobile .header-widget {
  font-size: 1.5rem;
}
.header-widget-content {
  max-width: 700px;
  transform: translateX(-20%);
}
.mobile .header-widget-content {
  transform: translateX(0);
  padding-left: 20px;
}
</style>
