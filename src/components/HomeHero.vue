<template>
   <section class="home-hero">
       <v-container fluid fill-height class="home-hero__content">
           <v-row>
               <v-col class="home-hero__content-text">
                   <p>Welcom to my website.</p>
               </v-col>
           </v-row>
       </v-container>
   </section> 
</template>
<style lang="scss" scoped>
.home-hero__content {
    background: url("../assets/logo.png");
    background-size: cover;
    background-position: center center;
    width: 100%;
    height: 50vh;

    &-text {
        color: red;
        text-align: center;
        font-size: 28px;
        font-weight: bold;
    }
}
</style>