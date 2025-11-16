<script lang="ts">
    import TreeView from "./treeview.svelte";
    import type { FileItem } from "$lib/types";

    export let data: FileItem[];

    import { page } from "$app/stores";

    function makeUrl(id: string) {
        const url = new URL($page.url);
        url.searchParams.set("ID", id);
        return url.toString();
    }
</script>

<ul class="list-none">
    {#each data as content}
        <li class={content.type === "folder" ? "my-4" : ""}>
            {#if content.type === "folder"}
                <span class="flex items-center">
                    <!-- Folder icon -->
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 text-yellow-500 mr-2 shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            d="M2 4a2 2 0 012-2h4.586a2 2 0 011.414.586l1.414 1.414A2 2 0 0012.586 4H18a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V4z"
                        />
                    </svg>
                    <p class="font-bold">
                        {content.name}
                        {#if !content.children || content.children.length === 0}
                            <span class="text-gray-500">(Vuota)</span>
                        {/if}
                    </p>
                </span>

                <!-- Recursive render for children -->
                {#if content.children && content.children.length > 0}
                    <div class="pl-5">
                        <TreeView data={content.children} />
                    </div>
                {/if}
            {:else if content.type === "file"}
                <span class="flex items-center">
                    <!-- File icon -->
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 text-gray-500 mr-2 shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414a2 2 0 00-.586-1.414l-3.414-3.414A2 2 0 0011.586 2H6zm7 6a1 1 0 11-2 0V3.5L14.5 8H13z"
                            clip-rule="evenodd"
                        />
                    </svg>

                    <a href={content.ID ? makeUrl(content.ID) : "#"}>
                        {content.name}
                    </a>
                </span>
            {/if}
        </li>
    {/each}
</ul>
