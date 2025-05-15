<script setup>

</script>

<template>
    <header class="d-flex justify-content-between align-items-center">
        <aside class="ms-5">
            <router-link to="/">&lt;LG /&gt;</router-link>
        </aside>

        <ul class="d-flex list-unstyled me-5 gap-5">
            <li><router-link to="/"> Home </router-link></li>
            <li><router-link to="/"> Github </router-link></li>
        </ul>
    </header>
</template>

<style lang="scss" scoped>
header {
    background: var(--gradient_1);
    
    a {
        text-decoration: none;
        color: var(--color_5);
    }

    aside {
        font-family: "Share Tech", sans-serif;
        font-size: 2.5em;
    }

    ul {
  margin: 0;
  padding: 0;
}

}
</style>