<template>
  <Header />
  <main>
    <Explore />
  </main>
  <Footer />
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Explore from '@/components/Explore.vue'

export default {
  name: 'App',
  components: {
    Header,
    Explore,
    Footer
  }
}
</script>

<style>
@import 'styles/index.scss';
</style>
