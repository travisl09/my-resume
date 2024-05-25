<script setup>
import { ref, watch } from 'vue'; 
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()
const props = defineProps(['name', 'email'])
const views = {cover: 'cover', main: ''}
const mainView = ref(route.params.cover === views.cover ? views.cover : '')
function setView(view) {
    if (mainView.value === view) {
        return
    }
    if (mainView.value === views.cover) {
        router.push({ name: route.name })
    } else {
        router.push({ name: route.name, params: { cover: views.cover} })
    }
}
watch(() => route.params.cover, (newCover, oldCover) => {
    if (newCover === oldCover) {
        return
    }
    if (newCover === views.cover) {
        mainView.value = newCover
    } else {
        mainView.value = views.main
    }
})
</script>

<template>
    <div class="container">
        <div class="head">
            <div class="contact">
                <h1>{{ props.name }}</h1>
                <h4>{{ props.email }}</h4>
            </div>
            <div v-if="$slots.coverLetterMain && $slots.resumeMain" class="view-toggle no-print">
                <a @click.prevent="setView(views.main)" :class="{'selected-view': mainView === views.main}">Resume</a><span> | </span>
                <a @click.prevent="setView(views.cover)" :class="{'selected-view': mainView === views.cover}">Cover Letter</a>
            </div>
            <div class="intro">
                <slot name="intro"></slot>
            </div>
        </div>
        <main>
            <div class="main">
                <slot v-if="mainView === views.cover" name="coverLetterMain"></slot>
                <slot v-else name="resumeMain"></slot>
            </div>
        </main>
    </div>
</template>

<style scoped>
.head {
    margin-bottom: 1rem;
}
.intro {
    margin-top: 1rem;
}
@media (min-width: 1024px) {
    .container {
        display: grid;
        grid-template-columns: 2fr 3fr;
    }
    main {
        margin-left: 3rem;
    }
}
.selected-view {
    font-weight: bold;
}
.view-toggle a {
    cursor: pointer;
}
</style>