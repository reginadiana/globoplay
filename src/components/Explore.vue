<template>
  <section class="explore">
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

<style scoped>
@media (max-width: 1023px) {
  .explore {
    padding: 16px;
  }
}

@media (min-width: 1024px) {
  .explore {
    /* Essa max e auto podem ir para o componente pai */
    /* largura do card + gap do grid */
    max-width: calc((200px * 4) + (8px * 3));
    margin: auto;
  }
}
</style>
