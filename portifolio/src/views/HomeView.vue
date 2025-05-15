<script setup>
import PersonalPresentation from '@/components/PersonalPresentation.vue';
import UsedLanguages from '@/components/UsedLanguages.vue';
import Json from '@/components/Json.vue';
</script>

<template>
  <main>
    <div>
      <PersonalPresentation/>
    </div>

    <div class="d-flex justify-content-center m-5 gap-5">
      <UsedLanguages/>
      <Json/>
    </div>
  </main>
</template>
