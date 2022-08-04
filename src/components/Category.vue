<template>
  <article class="category" :title="title">
    <h2 class="category__title">{{ title }}</h2>
  </article>
</template>

<script>
export default {
  name: "Category",

  props: {
    title: {
      type: String,
    },
  },
};
</script>

<style scoped>
.category {
  background-image: url("../assets/categories/novelas.jpg");
  background-size: cover;
  background-position: center;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;

  /* Position title */
  display: flex;
  align-items: flex-end;
  border: 2px solid transparent;
}

.category:hover {
  border: 2px solid #fff;
}

.category__title {
  color: #fff;
  font-size: 1rem;
}

@media (max-width: 1023px) {
  .category {
    /* Não suportado no IE */
    aspect-ratio: 1.5 / 1;
  }
}

@media (min-width: 1024px) {
  .category {
    width: 200px;
    height: 100px;
  }
}
</style>
