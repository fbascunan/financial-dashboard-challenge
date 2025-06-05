<script setup lang="ts">
import { ref } from 'vue';

const searchQuery = ref('');
</script>

<template>
    <div class="search-bar">
        <input type="text" placeholder="Search" v-model="searchQuery" />
    </div>
</template>