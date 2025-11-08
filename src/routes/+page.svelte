<script lang="ts">
    import { CONFIG } from "$lib/index";
</script>

<svelte:head>
    <title>Studio Legale Bocchietti</title>
    <meta
        name="description"
        content="Lo Studio Legale Bocchietti a Como opera nei settori del diritto civile e penale."
    />
</svelte:head>

<section>
    <p>
        Lo <b>Studio Legale Bocchietti</b> opera in Como ed esercita nei settori
        del diritto civile e del diritto penale, destinando il proprio patrimonio
        di esperienza e di conoscenza ad una migliore e sempre più puntuale risposta
        alle esigenze del cliente.
    </p>
    <p>
        É formato dall'avvocato Claudio Bocchietti Abilitato alle Giurisdizioni
        Superiori, dall'avvocato Gloria Bulanti oltre al personale di
        Segreteria.
    </p>
</section>

<br />

<address>
    <p><b>Studio Legale Bocchietti</b></p>

    <br />

    <p>
        <a href={CONFIG.ADDRESS.LINK} target="_blank">
            {CONFIG.ADDRESS.full()}
        </a>
    </p>
    <p>
        Tel. <a href="tel:{CONFIG.PHONE_NUMBERS.OFFICE}">
            {CONFIG.PHONE_NUMBERS.full(CONFIG.PHONE_NUMBERS.OFFICE)}
        </a>
    </p>
    <p>
        Cell. <a href="tel:{CONFIG.PHONE_NUMBERS.CELLULAR}">
            {CONFIG.PHONE_NUMBERS.full(CONFIG.PHONE_NUMBERS.CELLULAR)}
        </a>
    </p>

    <br />
    <p>
        PEC <a href="mailto:{CONFIG.EMAILS.PEC_BOCCHIETTI}">
            {CONFIG.EMAILS.PEC_BOCCHIETTI}
        </a>
    </p>
    <p>
        <a href="mailto:{CONFIG.EMAILS.BOCCHIETTI}"
            >{CONFIG.EMAILS.BOCCHIETTI}</a
        >
    </p>
</address>
