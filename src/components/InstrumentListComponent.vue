<script setup lang="ts">
import { ref } from 'vue';
import InstrumentItemComponent from './InstrumentItemComponent.vue';

const instruments = ref([
  { id: 1, name: 'Instrument 1' },
  { id: 2, name: 'Instrument 2' },
  { id: 3, name: 'Instrument 3' },
]);
</script>

<template>
  <div class="instrument-list-placeholder">
    <InstrumentItemComponent v-for="instrument in instruments" :key="instrument.id" :instrument="instrument" />
  </div>
</template>

<style scoped>
.instrument-list-placeholder {
  width: 100%;
  min-height: 150px;
  background-color: #f7f7f7;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 1.1rem;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
}
</style>
