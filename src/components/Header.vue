<template>
  <header class="header">
    <nav>
      <ul class="items">
        <li class="item">Agora na TV</li>
        <li class="item">Novelas</li>
        <li class="item">Séries</li>
        <li class="item">Filmes</li>
        <li class="item">Originais</li>
        <li class="item">Explore</li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header {
  background-color: #000;
  padding: 16px;
  display: none;
}

.item {
  color: #888;
  font-weight: bold;
  margin-left: 16px;
  font-size: 12px;
  cursor: pointer;
}

.item:hover {
  color: #fff;
}

@media (min-width: 820px) {
  .header, .items {
    display: flex;
  }
}
</style>
