<template>
  <div class="container">
    <Header />
    <main>
      <Explore />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Explore from "@/components/Explore.vue";

export default {
  name: "App",
  components: {
    Header,
    Explore,
    Footer,
  },
};
</script>

<style>
@import "styles/index.scss";

.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
}
</style>
