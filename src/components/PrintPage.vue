<script setup>
import { IconoirProvider, PrintingPage } from '@iconoir/vue';
</script>

<template>
    <div @click="window.print()">
        <IconoirProvider>
            <PrintingPage />
        </IconoirProvider>
    </div>
</template>