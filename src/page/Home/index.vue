<script setup lang="ts">
import routeData from '@/router/data'
</script>

<template>
  <div class="container mx-4">
    <ul class="mt-6 text-blue-600">
      <li v-for="item in routeData" :key="item.name" class="my-2">
        <RouterLink :to="item.path">
          {{ item?.meta?.title }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
