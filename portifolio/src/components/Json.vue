<template>
  <div class="json-container" v-html="jsonColorido"></div>
</template>

<script>
export default {
  data() {
    return {
      dados: {
        commit: 10,
        star: 15,
        nome: "projeto-x",
        ativo: true,
        descricao: null
      }
    };
  },
  computed: {
    jsonColorido() {
      // Converte para JSON com identação
      const json = JSON.stringify(this.dados, null, 2);

      // Escapa caracteres HTML antes de aplicar cores
      let escaped = json
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');

      // Aplica cores com span
      escaped = escaped
        // Chaves: "campo":
        .replace(/"([^"]+)"(?=\s*:)/g, '<span class="json-key">"$1"</span>')
        // Strings: "valor"
        .replace(/:\s*"([^"]*)"/g, ': <span class="json-string">"$1"</span>')
        // Números: 123
        .replace(/:\s*(\d+)/g, ': <span class="json-number">$1</span>')
        // Booleanos: true, false
        .replace(/:\s*(true|false)/g, ': <span class="json-boolean">$1</span>')
        // Null
        .replace(/:\s*null/g, ': <span class="json-null">null</span>');

      // Retorna dentro de <pre> para manter identação
      return `<pre>${escaped}</pre>`;
    }
  }
};
</script>

<style>
.json-container {
  background-color: #1e1e1e;
  padding: 1rem;
  border-radius: 10px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 2rem;
  overflow-x: auto;
  color: #ffffff;
  white-space: pre-wrap;
}

/* Cores por tipo */
.json-key {
  color: #9cdcfe; /* azul claro */
}

.json-string {
  color: #ce9178; /* rosa salmão */
}

.json-number {
  color: #b5cea8; /* verde claro */
}

.json-boolean {
  color: #569cd6; /* azul médio */
}

.json-null {
  color: #dcdcaa; /* amarelo claro */
}
</style>
