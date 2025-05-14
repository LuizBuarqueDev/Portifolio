<script setup>

</script>

<template>
    <header class="d-flex">
        <aside>
            <h1>&lt;LG /&gt;</h1>
        </aside>
        <h1></h1>
        <ul>
            <li><router-link to="/"> Home </router-link></li>
            <li><router-link to="/"> Home </router-link></li>
        </ul>
    </header>
</template>

<style lang="scss" scoped>
header {
    background: var(--gradient_1);

    aside {
        font-family: "Share Tech", sans-serif;
        font-size: 2.5em;
    }
}
</style>