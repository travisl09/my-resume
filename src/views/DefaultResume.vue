<script setup>
import ResumeLayout from '@/components/ResumeLayout.vue'
import ExperienceBlock from '@/components/ExperienceBlock.vue';
</script>

<template>
    <ResumeLayout name="Joe Schmoe" email="joeschmoe@email.com">
        <template #intro>
            <p>Bologna Salesman Extraordinare</p>
            <p>Lebanon | Ring | Smoked</p>
        </template>
        <template #resumeMain>
            <h2>Education</h2>
            <ExperienceBlock title="Bologna U" sub-title="Bachelor of Bologna"
                date-start="Oct 2005" date-end="Dec 2007"
            />
            <h2>Experience</h2>
            <ExperienceBlock title="Senior Bologna Salesman" sub-title="Bologna Packers United"
                date-start="Mar 2020" date-end="Mar 2021" :points="[
                    'Set a world record for bologna sales in a year',
                    'Single-handedly ended the bologna shortage of 2020',
                    'Reinvented bologna as we know it'
                ]" />
            <ExperienceBlock title="Junior Bologna" sub-title="Bologna Packers United"
                date-start="Mar 2018" date-end="Mar 2020" :points="[
                    'Learned the ins and outs of the bologna trade'
                ]" />
        </template>
    </ResumeLayout>
</template>