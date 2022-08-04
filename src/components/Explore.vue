<template>
  <section>
    <Tabs />
    <Categories />
  </section>
</template>

<script>
import Categories from '@/components/Categories'
import Tabs from '@/components/Tabs'

export default {
  name: "Explore",
  components: {
    Categories,
    Tabs
  }
};
</script>

<style></style>
