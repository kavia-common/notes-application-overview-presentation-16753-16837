<script setup lang="ts">
import { ref, computed, watch } from 'vue'

const title = ref('Project Kickoff Notes')
const content = ref('• Agenda\n• Decisions\n• Action Items\n')
const tags = ref<string[]>(['work', 'meeting'])
const query = ref('')

const charCount = computed(() => content.value.length)
const wordCount = computed(() => {
  return content.value
    .trim()
    .split(/\s+/)
    .filter(Boolean).length
})

const filteredTags = computed(() =>
  tags.value.filter(t => t.toLowerCase().includes(query.value.toLowerCase()))
)

function addTag(t: string) {
  const v = t.trim()
  if (!v) return
  if (!tags.value.includes(v)) tags.value.push(v)
}

function removeTag(t: string) {
  tags.value = tags.value.filter(x => x !== t)
}

watch([title, content, tags], () => {
  // emulate autosave
  // console.log('autosaved')
})
</script>

<template>
  <div class="rounded-xl border border-gray-200 overflow-hidden bg-white">
    <div class="px-4 py-3 flex items-center justify-between border-b border-gray-100 bg-gray-50">
      <div class="flex items-center gap-2">
        <span class="brand-pill">
          <span class="brand-dot primary" />
          <span class="text-sm">Notes Demo</span>
        </span>
      </div>
      <div class="text-xs text-gray-500">Autosaving...</div>
    </div>

    <div class="p-4 grid gap-4 md:grid-cols-2">
      <div class="space-y-3">
        <input
          v-model="title"
          type="text"
          placeholder="Note title"
          class="w-full px-3 py-2 rounded-lg border border-gray-200 outline-none focus:ring-2 focus:ring-[var(--c-primary)]"
        />
        <textarea
          v-model="content"
          rows="7"
          class="w-full px-3 py-2 rounded-lg border border-gray-200 outline-none focus:ring-2 focus:ring-[var(--c-primary)]"
        />
        <div class="text-xs text-gray-500">
          {{ wordCount }} words · {{ charCount }} chars
        </div>
      </div>

      <div class="space-y-3">
        <div class="flex gap-2">
          <input
            v-model="query"
            type="text"
            placeholder="Search tags"
            class="w-full px-3 py-2 rounded-lg border border-gray-200 outline-none focus:ring-2 focus:ring-[var(--c-primary)]"
          />
          <button
            class="px-3 py-2 text-sm rounded-lg border border-gray-200 hover:bg-gray-50"
            @click="addTag(query)"
          >
            Add
          </button>
        </div>

        <div class="flex flex-wrap gap-2">
          <span
            v-for="t in filteredTags"
            :key="t"
            class="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs border"
            :style="{ borderColor: 'var(--c-secondary)', color: 'var(--c-secondary)' }"
          >
            #{{ t }}
            <button class="ml-1" @click="removeTag(t)" title="Remove">×</button>
          </span>
        </div>

        <div class="rounded-lg border border-gray-100 p-3 bg-gray-50">
          <div class="text-xs text-gray-500 mb-1">Preview</div>
          <div class="text-sm leading-relaxed whitespace-pre-line">
            {{ content }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
textarea {
  min-height: 160px;
  resize: vertical;
}
</style>
