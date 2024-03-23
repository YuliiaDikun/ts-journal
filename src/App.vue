<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue';
import EntryEditor from './components/EntryEditor.vue';
import EntryCard from '@/components/EntryCard.vue';
import { reactive, provide, inject } from 'vue';
import userInjectionKey from './injectionKeys';
import type User from './types/User';
import type Entry from './types/Entry';
const user: User = reactive({
  id: 1,
  username: 'yuliia',
  settings: [],
});

const entries = reactive<Entry[]>([]);

const handleCreateEntry = (entry: Entry) => {
  entries.unshift(entry);  
};

provide(userInjectionKey, user);

</script>

<template>
  <main class="container m-auto p-10">
    <TheHeader />
    <EntryEditor @@create="handleCreateEntry" />
    <ul>
      <li v-for="entry in entries" :key="entry.userId">
        <EntryCard :entry="entry"/>
      </li>
    </ul>
  </main>
</template>
