<template>  
  <div class="kofi-widget">
    <v-container>
      <v-row>
        <v-col sm="12" class="kofi-widget-content-wrap">
          <div class="kofi-widget-content">
            <v-row>
              <h2>Buy us coffee ☕</h2>
            </v-row>
            <v-row>
              <p>We are running this database after our 9-5 jobs. Help us stay awake!</p>
            </v-row>
            <v-row>
              <p>Consider supporting us if you find this project helped you or someone in your network.</p>
            </v-row>
            <v-row>
              <v-btn link elevation="0" color="cyan" href="https://ko-fi.com/theyokohamalife">
                Donate a cuppa
              </v-btn>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style>
  .kofi-widget {
    background-color: rgba(49, 184, 211, 0.1); /* #32B9D3 at 10% opacity */
    height: 100%;
    padding-top: 25%;
  }

  .kofi-widget h2, p {
    padding-bottom:  10px;
  }

  .mobile .kofi-widget {
    padding: 100px 30px 100px 30px;
  }

  .kofi-widget-content-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
  }

  .kofi-widget-content {
    max-width: 300px;
  }
</style>
