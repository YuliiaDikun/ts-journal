<script lang="ts" setup>
import EmojiField from '@/components/EmojiField.vue';
import ArrowCircleRight from '@/assets/icons/arrow-circle-right.svg';
import type Emoji from '@/types/Emoji';
import type Entry from '@/types/Entry';
import { ref, computed } from 'vue';

const body = ref('');
const emoji = ref<Emoji | null>(null);
const charCount = computed(() => body.value.length);
const maxChars = 280;

const emit = defineEmits<{
  (e: '@create', entry: Entry): void;
}>();

const handleTextInput = (e: Event) => {
  const textarea = e.target as HTMLTextAreaElement;
  if (textarea.value.length <= 280) {
    body.value = textarea.value;
  } else {
    body.value = textarea.value = textarea.value.substring(0, maxChars);
  }
};
const submitForm = () => {
  console.log('emit');
  
  emit('@create', {
    body: body.value,
    emoji: emoji.value,
    createdAt: new Date(),
    userId: Math.random(),
  });
  body.value = '';
  emoji.value = null;
};
</script>

<template>
  <form class="entry-form" @submit.prevent="submitForm">
    <textarea
      :value="body"
      @keyup="handleTextInput"
      placeholder="New Journal Entry for danielkelly_io"
    ></textarea>
    <EmojiField v-model="emoji" />
    <div class="entry-form-footer">
      <span>{{ charCount }} / {{ maxChars }}</span>
      <button>Remember <ArrowCircleRight width="20" /></button>
    </div>
  </form>
</template>
