<script setup lang="ts">
import { ref } from 'vue'
const open = ref(true)
</script>

<template>
  <div>
    <button class="brand-pill toc-toggle" @click="open = !open" :aria-expanded="open">
      <span class="brand-dot secondary"></span>
      <span class="text-xs">{{ open ? 'Hide' : 'Show' }} TOC</span>
    </button>

    <transition name="block-fade">
      <aside v-if="open" class="toc-sidebar">
        <div class="text-xs uppercase tracking-wide text-gray-500 px-2 pb-2">Contents</div>
        <!-- Slidev's Toc component -->
        <Toc minDepth="1" maxDepth="2" />
      </aside>
    </transition>
  </div>
</template>
