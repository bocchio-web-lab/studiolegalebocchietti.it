<script lang="ts">
    import "../app.css";
    import Header from "$lib/components/header.svelte";
    import Footer from "$lib/components/footer.svelte";
    import featherPen from "$lib/assets/feather-pen.jpg";

    import { page } from "$app/stores";
    import { derived } from "svelte/store";

    const titleExceptions: Record<string, string> = {
        "/": "Home",
        "/attivita": "Attività",
        "/vademecum": "Vademecum aste immobiliari",
    };

    const pageTitle = derived(page, ($page) => {
        const path = $page.url.pathname;

        if (titleExceptions[path]) return titleExceptions[path];

        const parts = path.split("/").filter(Boolean);
        if (parts.length === 0) return "Home";

        const title = parts[parts.length - 1];
        return title.charAt(0).toUpperCase() + title.slice(1);
    });
</script>

<div
    class="w-full max-w-screen-md m-auto bg-indigo-200 rounded-xl shadow-[0px_0px_20px_15px_rgba(0,0,0,0.6)] md:my-4"
>
    <Header />

    <hr />

    <section>
        <h2 class="text-center text-2xl font-bold my-4 mx-auto w-11/12">
            {$pageTitle}
        </h2>

        <img
            src={featherPen}
            alt="Penna piumata"
            class="w-4/5 max-w-sm rounded-xl my-4 mx-auto"
        />
    </section>

    <main class="w-10/12 mx-auto my-4">
        <slot />
    </main>

    <hr />

    <Footer />
</div>
