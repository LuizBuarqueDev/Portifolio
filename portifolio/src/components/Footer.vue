<script>
</script>

<template>
  <footer class="text-white py-5">
    <div class="container text-center">
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
        <li class="mx-3">
          <a href="#" target="_blank" rel="noopener" aria-label="Linkedin">
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </li>
      </ul>

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
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: var(--color_2);

  a,
  div {
    text-decoration: none;
    color: var(--color_5);

    &:hover {
      color: var(--color_5_hover);
    }

    i {
      font-size: 1.5em;
    }
  }
}
</style>
