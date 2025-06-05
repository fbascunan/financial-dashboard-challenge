<script setup lang="ts">
import { useInstrumentsStore } from '../stores/instruments';
import { onMounted, computed } from 'vue';

const instrumentsStore = useInstrumentsStore();

onMounted(async () => {
  await instrumentsStore.loadInstrumentSummary('IPSA');
});

const info = computed(() => instrumentsStore.InstrumentSummary?.data?.info ?? null);
const price = computed(() => instrumentsStore.InstrumentSummary?.data?.price ?? null);

// Expose plain objects for template to avoid .value errors
const infoObj = computed(() => info.value);
const priceObj = computed(() => price.value);

function formatNumber(val?: number) {
  return typeof val === 'number' ? val.toLocaleString('es-CL', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '-';
}
function formatPercent(val?: number) {
  return typeof val === 'number' ? `${val > 0 ? '+' : ''}${val.toLocaleString('es-CL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%` : '-';
}
function formatDate(val?: string) {
  if (!val) return '-';
  // Try to format as DD-MM-YYYY HH:mm:ss
  const [date, time] = val.split(' ');
  if (!date || !time) return val;
  const [day, month, year] = date.split('-');
  return `${day}/${month}/${year} - ${time}`;
}
</script>

<template>
  <div class="summary-details">
    <div class="summary-tabs">
      <span class="tab">Resumen</span>
      <span class="tab active">Detalles</span>
    </div>
    <div class="divider"></div>
    <div class="summary-row summary-label-row">
      <span class="summary-label">Cotización</span>
      <span class="summary-value">{{ formatDate(priceObj?.datetimeLastPrice) }}</span>
    </div>
    <div class="divider"></div>
    <div class="summary-table">
      <div class="summary-row"><span class="summary-label">MERCADO</span><span class="summary-value">{{ infoObj?.marketName || '-' }}</span></div>
      <div class="summary-row"><span class="summary-label">APERTURA</span><span class="summary-value">{{ formatNumber(priceObj?.openPrice) }}</span></div>
      <div class="summary-row"><span class="summary-label">CIERRE ANTERIOR</span><span class="summary-value">{{ formatNumber(priceObj?.closePrice) }}</span></div>
      <div class="summary-row"><span class="summary-label">MÁXIMO DIARIO</span><span class="summary-value">{{ formatNumber(priceObj?.maxDay) }}</span></div>
      <div class="summary-row"><span class="summary-label">MÍNIMO DIARIO</span><span class="summary-value">{{ formatNumber(priceObj?.minDay) }}</span></div>
      <div class="summary-row"><span class="summary-label">MÁXIMO 52 SEMANAS</span><span class="summary-value">{{ formatNumber(priceObj?.max52W) }}</span></div>
      <div class="summary-row"><span class="summary-label">MÍNIMO 52 SEMANAS</span><span class="summary-value">{{ formatNumber(priceObj?.min52W) }}</span></div>
    </div>
    <div class="divider"></div>
    <div class="summary-row summary-label-row">
      <span class="summary-label">Variación**</span>
      <span class="summary-value">%</span>
    </div>
    <div class="summary-variation">
      <div class="variation-row"><span>1 MES</span><span class="positive">{{ formatPercent(priceObj?.pct30D) }}</span></div>
      <div class="variation-row"><span>1 AÑO</span><span class="positive">{{ formatPercent(priceObj?.pctRelW52) }}</span></div>
      <div class="variation-row"><span>AÑO A LA FECHA</span><span class="positive">{{ formatPercent(priceObj?.pctRelCY) }}</span></div>
    </div>
  </div>
</template>

<style scoped>
.summary-details {
  background: #18191c;
  color: #fff;
  border-radius: 8px;
  padding: 18px 16px 12px 16px;
  font-size: 0.98rem;
  min-width: 270px;
  max-width: 340px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}
.summary-tabs {
  display: flex;
  gap: 18px;
  font-size: 1.08rem;
  margin-bottom: 8px;
}
.tab {
  color: #bdbdbd;
  font-weight: 500;
  cursor: pointer;
}
.tab.active {
  color: #fff;
  font-weight: 700;
  border-bottom: 2px solid #3b82f6;
  padding-bottom: 2px;
}
.divider {
  border-bottom: 1px solid #333;
  margin: 10px 0 12px 0;
}
.summary-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
}
.summary-label-row {
  font-weight: 600;
  font-size: 1.01rem;
}
.summary-label {
  color: #e0e0e0;
}
.summary-value {
  color: #fff;
  font-weight: 400;
}
.summary-table {
  margin-bottom: 8px;
}
.summary-variation {
  margin-top: 8px;
}
.variation-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
  font-weight: 500;
}
.positive {
  color: #3fd47a;
}
</style>
