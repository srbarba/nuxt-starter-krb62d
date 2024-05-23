<template>
  <DataTable />
</template>

<script lang="ts" setup>
const { data, loading, error, execute } = useAsyncState(() =>
  $fetch('/api/orders', {
    query: {},
  })
);
</script>
