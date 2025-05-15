<script setup>

</script>

<template>
    <header class="d-flex justify-content-between align-items-center">
        <aside class="ms-5 m-2">
            <router-link to="/">&lt;LG /&gt;</router-link>
        </aside>

        <ul class="d-flex list-unstyled me-5 gap-5 m-0">
            <li><router-link to="/"> <i class="fa-brands fa-github"></i> Github </router-link></li>
            <li><router-link to="/"> <i class="fa-brands fa-linkedin"></i> Linkedin </router-link></li>
            <li><router-link to="/"> <i class="fa-solid fa-envelope"></i> E-mail </router-link></li>
        </ul>
    </header>
</template>

<style lang="scss" scoped>
header {
    background: var(--gradient_1);

    a {
        text-decoration: none;
        display: inline-block;
        padding: 10px;
        border-radius: 8px;
        color: var(--color_5);
        transition: all 0.2s ease;

        &:hover {
            transform: scale(1.05);
            background-color: var(--color_1_hover);
            color: var(--color_5_hover);
        }
    }

    aside {
        font-family: "Share Tech", sans-serif;
        font-size: 1.8em;
    }
}
</style>