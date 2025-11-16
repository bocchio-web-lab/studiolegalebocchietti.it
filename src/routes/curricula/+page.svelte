<script lang="ts">
    import TreeView from "$lib/components/treeview.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;

    $: ({ curriculaObj, fileID, fileURL } = data);
</script>

<svelte:head>
    <title>Curricula</title>
    <meta
        name="description"
        content="Curriculum vitae e profili professionali redatti dall'avvocato Claudio Bocchietti"
    />
</svelte:head>

<section>
    <TreeView data={curriculaObj.children || []} />

    {#if fileURL}
        <p class="text-center my-7">
            <a
                href={fileURL}
                class="bg-sky-900 rounded-full py-2 px-4 text-white"
                target="_blank"
            >
                Scarica il file visualizzato
            </a>
        </p>
    {/if}

    {#if fileID}
        <iframe
            class="my-5 w-full rounded-xl shadow"
            src={`https://drive.google.com/file/d/${fileID}/preview`}
            allowfullscreen
            title="Curriculum Document"
        ></iframe>
    {/if}
</section>
