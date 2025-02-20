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

<style>
    body {
        margin: 0;
        font-family: 'Times New Roman', Times, serif;
        text-align: justify;
    }

    h1 {
        text-align: center;
        font-size: 40pt;
    }

    h2 {
        text-align: center;
        font-size: 30pt;
    }

    h3 {
        text-align: center;
        font-size: 20pt;
    }

    nav {
        margin: 10px;
        font-size: 20pt;
    }

    /*Removing blue colour and bulets from the links in nav*/
    a {
        color: #191a1c;
        text-decoration: none;
        padding: 0.3rem;
    }
    /*Adding lines under links in nav when active*/
    a:hover {
        text-decoration: underline;
        color: #4e4d55;
        font-weight: bold;
    }
</style>
