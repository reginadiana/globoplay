<template>
  <div class="categories">
    <Category title="Novelas" />
    <Category title="Séries" />
    <Category title="Filmes" />
    <Category title="Originais" />
    <Category title="Infantil" />
    <Category title="Realities" />
    <Category title="Documentários" />
    <Category title="Esportes" />
    <Category title="Variedades" />
    <Category title="Humor" />
    <Category title="Música" />
    <Category title="Jornalismo" />
    <Category title="Programas Locais" />
  </div>
</template>

<script>
import Category from "@/components/Category";

export default {
  name: "Categories",
  components: {
    Category,
  },
};
</script>

<style scoped>
.categories {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  background: pink;
}

@media (min-width: 820px) {
  .categories {
    /* Essa max e auto podem ir para o componente pai */
    /* largura do card + gap do grid */
    max-width: calc((200px * 4) + (8px * 3));
    margin: auto;
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
