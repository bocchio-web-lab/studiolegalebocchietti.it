<script lang="ts">
    import { CONFIG, EMAILS } from "$lib/index";
</script>

<svelte:head>
    <title>Contatti</title>
    <meta
        name="description"
        content="Recapiti e contatti dello Studio Legale Bocchietti a Como."
    />
</svelte:head>

<section>
    <p>
        Di seguito i recapiti degli avvocati presenti nello <b>
            Studio Legale Bocchietti
        </b>:
    </p>

    <ul class="list-disc list-inside marker:text-orange-500">
        <li class="my-2">
            <a href="mailto:{CONFIG.EMAILS.BOCCHIETTI}"
                >Avv. Claudio Bocchietti</a
            >
        </li>
        <li class="my-2">
            <a href="mailto:{CONFIG.EMAILS.BULANTI}">Avv. Gloria Bulanti</a>
        </li>
    </ul>
</section>
