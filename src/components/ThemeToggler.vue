<script setup>
import { IconoirProvider, SunLight, HalfMoon } from '@iconoir/vue'
import { ref, onMounted } from 'vue'

const themeLight = ref(true)
function toggleTheme() {
    themeLight.value = !themeLight.value
    document.documentElement.className = themeLight.value ? 'theme-light' : 'theme-dark'
}
onMounted(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        toggleTheme()
    }
})
</script>

<template>
    <div @click="toggleTheme" title="Toggle page theme">
        <IconoirProvider>
            <SunLight v-if="!themeLight" />
            <HalfMoon v-else />
        </IconoirProvider>
    </div>
</template>