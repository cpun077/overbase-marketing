<script lang="ts">
  import SurveyLandingPage from '$lib/survey/SurveyLandingPage.svelte';
  import type { PageProps } from './$types';

  let { form }: PageProps = $props();
</script>

<SurveyLandingPage {form} />
