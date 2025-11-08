<script lang="ts">
    import { page } from "$app/state";
</script>

<svelte:head>
    <title>{page.status} - Errore</title>
</svelte:head>

<section>
    {#if page.status === 404}
        La pagina richiesta non è stata trovata.
    {:else if page.status === 503}
        Il sito è in manutenzione. Riprova più tardi.
    {:else}
        Si è verificato un errore: {page.error?.message}
    {/if}
</section>
