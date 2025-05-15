<script>
</script>

<template>
  <footer class="text-white py-5">
    <div class="container text-center">
      <!-- Ícones em linha, centrados -->
      <ul class="list-unstyled d-flex justify-content-center mb-3">
        <li class="mx-3">
          <a href="#" target="_blank" rel="noopener" aria-label="Facebook">
            <i class="fa-brands fa-facebook"></i>
          </a>
        </li>
        <li class="mx-3">
          <a href="#" target="_blank" rel="noopener" aria-label="Instagram">
            <i class="fa-brands fa-instagram"></i>
          </a>
        </li>
        <li class="mx-3">
          <a href="#" target="_blank" rel="noopener" aria-label="GitHub">
            <i class="fa-brands fa-github"></i>
          </a>
        </li>
      </ul>

      <!-- Informações embaixo -->
      <div>
        <div>Email: <a href="mailto:luizgabrielbuarque@gmail.com">luizgabrielbuarque@gmail.com</a></div>
        <div>Telefone: <a href="tel:+5581996346840">(81) 99634-6840</a></div>
        <div class="mt-2">&copy; 2025 Luiz Gabriel. Todos os direitos reservados.</div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: var(--color_2);

  a {
    color: var(--color_5);
    text-decoration: none;

    &:hover {
      color: var(--color_5_hover);
    }

    i {
        font-size: 1.5em;
    }
  }
}
</style>
