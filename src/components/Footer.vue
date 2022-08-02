<template>
  <footer class="footer">
    <div class="footer__inner">
      <p class="footer__copyright">
        Globo.com © 2000-2022 Globo Comunicação e Participações S.A. - Todos os
        direitos reservados -
        <a
          href="https://ajuda.globo/globoplay/termos-e-politicas/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Termos e políticas
        </a>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  background-color: #000;
  padding: 12px 32px;
  font-size: 1rem;
}

.footer__copyright {
  color: #888;
}

.footer a {
  color: #fff;
}

@media (max-width: 819px) {
  .footer {
    text-align: center;
  }
}

@media (min-width: 820px) {
  .footer__inner {
    max-width: 1200px;
    margin: auto;
  }
}
</style>
