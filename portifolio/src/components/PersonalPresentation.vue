<template>
  <div class="about-me m-4">
    <h2>Sobre mim</h2>
    <p>
      Olá, meu nome é Luiz Gabriel, tenho 21 anos e este é meu repositório pessoal. Sou um desenvolvedor apaixonado
      por tecnologia, com foco em desenvolvimento full stack, embora tenha uma forte preferência e maior experiência
      na área de backend.
    </p>
    <p>
      Atualmente, estou em busca de oportunidades para aplicar e expandir minhas habilidades técnicas, colaborar em
      projetos desafiadores e contribuir para o crescimento de equipes inovadoras. Tenho conhecimentos sólidos em
      diversas tecnologias e sou dedicado ao aprendizado contínuo, visando sempre a entrega de soluções eficientes e
      escaláveis.
    </p>
    <p>
      Se você procura um profissional proativo, comprometido e apaixonado pelo desenvolvimento de software, estou à
      disposição para agregar valor ao seu time.
    </p>
  </div>
  
</template>

<style lang="scss" scoped>
.about-me {
  h2 {
    position: relative;
    padding-top: 1.5rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-weight: 700;
    color: var(--color_2);
    
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 50px;
      height: 4px;
      background: var(--gradient_1);
      border-radius: 2px;
    }
  }

  p {
    line-height: 1.6;
    color: #444;
    margin-bottom: 1rem;
    font-size: 1rem;
  }
}
</style>
