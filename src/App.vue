<script setup lang="ts">
import HeaderComponent from './components/HeaderComponent.vue';
import InstrumentListComponent from './components/InstrumentListComponent.vue';
import InstrumentItemComponent from './components/InstrumentItemComponent.vue';
import SummaryComponent from './components/SummaryComponent.vue';
import TabComponent from './components/TabComponent.vue';
import ChartComponent from './components/ChartComponent.vue';
import SearchBarComponent from './components/SearchBarComponent.vue';
</script>

<template>
  <div class="app">
    <SearchBarComponent class="search-bar" />
    <HeaderComponent class="header" />
    <div class="main-content">
      <div class="left-panel">
        <ChartComponent class="chart" />
        <TabComponent class="tabs" />
        <InstrumentListComponent class="instrument-list" />
      </div>
      <div class="right-panel">
        <SummaryComponent class="summary" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.search-bar {
  margin-bottom: 8px;
}
.header {
  margin-bottom: 8px;
}
.main-content {
  display: flex;
  flex: 1;
  min-height: 0;
}
.left-panel {
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.right-panel {
  flex: 1;
  margin-left: 16px;
  display: flex;
  flex-direction: column;
}
.chart {
  flex: 0 0 auto;
}
.tabs {
  flex: 0 0 auto;
}
.instrument-list {
  flex: 1 1 0;
  overflow: auto;
}
.summary {
  flex: 1 1 0;
}
</style>
