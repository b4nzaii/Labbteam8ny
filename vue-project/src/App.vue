<script setup>
    import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
    <header>
        <div id="app">
            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/for_her">For Her</RouterLink>
                <RouterLink to="/for_him">For Him</RouterLink>
            </nav>
        </div>
    </header>

    <RouterView />
</template>

<style></style>
