import type { InstrumentSummary } from "../types";

export async function fetchInstrumentSummary(code: string): Promise<InstrumentSummary> {
    try {
      const response = await import(`/public/json-VueJS/resumen/${code}.json`)
      return response;
    } catch (error) {
      console.error(`Error fetching summary for ${code}:`, error);
      throw error;
    }
  }