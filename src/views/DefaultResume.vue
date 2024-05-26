<script setup>
import ResumeLayout from '@/components/ResumeLayout.vue'
import ExperienceBlock from '@/components/ExperienceBlock.vue';
</script>

<template>
    <ResumeLayout name="Travis Lightbourne" email="travislightbourne97@gmail.com">
        <template #intro>
            <p>Experienced full stack web developer</p>
            <p>C# | Python | Javascript | Cloud | SQL | Docker</p>
        </template>
        <template #resumeMain>
            <h2>Education</h2>
            <ExperienceBlock title="Neumont University" sub-title="Bachelor of Computer Science"
                date-end="Dec 2007"
            />
            <h2>Experience</h2>
            <ExperienceBlock title="Senior Software Engineer"
                sub-title="Dental Select"
                date-start="Mar 2020" date-end="Mar 2021" :points="[
                    'Utilized Microsoft technologies to implement RESTful APIs for user portals in an Azure cloud infrastructure and MSSQL database',
                    'Relied heavily on crafting and running Docker containers to streamline business operations and development',
                    'Engineered critical solutions to migrate the company away from legacy software'
                ]" />
            <ExperienceBlock title="Software Engineer"
                sub-title="Software Technology Group (STG)"
                date-start="Dec 2017" date-end="Feb 2020" :points="[
                    'Engaged with various clients to meet their needs, mainly within .NET ecosystems',
                    'Utilized Docker to containerize applications for development and continuous integration',
                    'Supported front-end development with back-end infrastructure and streamlined DevOps'
                ]" />
            <ExperienceBlock title="Software Engineer"
                sub-title="Primary Residential Mortgage (PRMI)"
                date-start="Nov 2016" date-end="Nov 2017" :points="[
                    'Migrated company to Oauth 2 compliant Single Sign On (SSO) Identity Server implementation',
                    'Built centralized Elastic Search index across disparate company textual data sources',
                    'Engineered RESTful APIs to support extensive Javascript driven employee portal client'
                ]" />
            <ExperienceBlock title="Software Engineer"
                sub-title="Various Companies"
                date-start="Dec 2007" date-end="Nov 2016" :points="[
                    'Worked extensively with JavaScript and back-end technologies to implement robust web solutions for my employers'
                ]" />
        </template>
    </ResumeLayout>
</template>