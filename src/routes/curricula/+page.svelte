<script lang="ts">
    import TreeView from "$lib/components/treeview.svelte";

    export let data: {
        vademecumObj: any[];
        fileURL?: string;
        fileID?: string;
    };
</script>

<section>
    <p>Di seguito i documenti relativi alle aste:</p>

    <TreeView data={data.vademecumObj} />

    {#if data.fileURL}
        <p class="text-center my-7">
            <a
                href={data.fileURL}
                class="bg-sky-900 rounded-full py-2 px-4 text-white"
                target="_blank"
            >
                Scarica il file visualizzato
            </a>
        </p>
    {/if}

    {#if data.fileID}
        <iframe
            class="my-5 w-full aspect-video rounded-xl shadow"
            src={`https://drive.google.com/file/d/${data.fileID}/preview`}
            allowfullscreen
            title=""
        ></iframe>
    {/if}
</section>
