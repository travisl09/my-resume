<script setup>
import ResumeLayout from '@/components/ResumeLayout.vue'
import ExperienceBlock from '@/components/ExperienceBlock.vue';
</script>

<template>
    <ResumeLayout name="Joe Schmoe" email="joeschmoe@email.com">
        <template #intro>
            <p>The right man for Bologna Unlimited</p>
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
                date-start="Mar 2018" :points="[
                    'Learned the ins and outs of the bologna trade'
                ]" />
        </template>
        <template #coverLetterMain>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut eros augue. Etiam sit amet facilisis felis, et molestie tortor. Maecenas varius massa vitae laoreet suscipit. Sed aliquam pharetra dui, sed pulvinar erat mattis in. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas pretium sem nisi, id condimentum dolor gravida eget. Praesent rhoncus enim in purus elementum egestas. Nunc rutrum felis vitae dolor hendrerit, sit amet mollis magna ultrices. Nunc eu ex suscipit turpis feugiat bibendum. Donec auctor volutpat odio ac egestas. Vestibulum pharetra a neque vel tristique. Integer ut mauris mauris. Quisque viverra venenatis est sit amet dignissim. Vestibulum quis tincidunt est.</p>
            <br/>
            <p>Aliquam erat volutpat. Donec tincidunt in urna nec tempus. Phasellus arcu purus, lacinia imperdiet tristique quis, volutpat at tortor. Aliquam interdum hendrerit efficitur. Aliquam pellentesque urna ligula, ut lobortis augue porta sit amet. Cras suscipit aliquam lacus, dignissim mattis ex efficitur eu. Suspendisse ex lacus, hendrerit sit amet mauris vel, finibus sodales mi. Duis tempor, orci ut imperdiet finibus, mauris libero tristique erat, id semper dui libero sed tortor. Vestibulum quis neque sit amet ante dignissim rhoncus at nec erat. Sed faucibus mi vel sem faucibus, quis aliquet arcu tempor.</p>
            <br/>
            <p>Pellentesque tristique bibendum eros, eget bibendum leo maximus sed. Curabitur tempor orci et leo ornare finibus. Nunc dolor eros, mollis eu sem sagittis, consectetur porta sem. Donec sed diam justo. Suspendisse nunc lorem, posuere at elementum vitae, vulputate et justo. Maecenas volutpat urna ex, nec maximus est semper nec. Suspendisse ut est neque. Duis fringilla purus ut molestie elementum. Ut hendrerit, nisi ac varius maximus, neque dui egestas nulla, eget luctus nulla ex sed erat. Nullam non tincidunt libero, vitae faucibus velit. Morbi eu ipsum eu ipsum mollis suscipit quis eget mauris. In eget erat ac felis ultrices mollis. Cras quis porta diam, id interdum urna.</p>
        </template>
    </ResumeLayout>
</template>