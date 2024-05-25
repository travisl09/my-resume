<script setup>
const props = defineProps(['title', 'subTitle', 'dateStart', 'dateEnd', 'points'])
</script>

<template>
    <div class="experience-block">
        <div class="head">
            <div>
                <div class="title">{{ props.title }}</div>
                <div class="subTitle">{{ props.subTitle }}</div>
            </div>
            <div class="dates">{{ dateStart }}{{ dateStart && dateEnd ? ' &ndash; ' : '' }}{{ dateEnd }} </div>
        </div>
        <div v-if="props.points" class="points">
            <ul>
                <li v-for="point in props.points" :key="point">{{ point }}</li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.experience-block {
    margin-bottom: 1rem;
}
.head {
    display: flex;
    align-items: top;
    justify-content: space-between;
}
.title {
    font-weight: bold;
}
</style>