import { defineStore } from 'pinia';
import type { InstrumentSummary } from '../types';
import { fetchInstrumentSummary } from '../services/api';
import { ref } from 'vue';

export const useInstrumentsStore = defineStore('instruments', () => {
    const InstrumentSummary = ref<InstrumentSummary | null>(null);

    async function loadInstrumentSummary(code: string) {
        try {
            const response = await fetchInstrumentSummary(code);
            InstrumentSummary.value = response;
        } catch (error) {
            console.error(`Error loading summary for ${code}:`, error);
            throw error;
        }
    }

    return { InstrumentSummary, loadInstrumentSummary };
})
