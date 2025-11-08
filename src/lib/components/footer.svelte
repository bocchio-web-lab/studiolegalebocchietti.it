<script lang="ts">
    import { CONFIG } from "$lib/index";
</script>

<footer class="w-11/12 m-auto text-center pb-3">
    <nav class="text-center block">
        <ul class="w-full mx-auto my-2 justify-center md:inline-flex md:my-1">
            <li>
                <a href={CONFIG.ADDRESS.LINK} target="_blank">
                    {CONFIG.ADDRESS.full()}
                </a>
            </li>
            <li>
                Tel. <a href="tel:{CONFIG.PHONE_NUMBERS.OFFICE}">
                    {CONFIG.PHONE_NUMBERS.full(CONFIG.PHONE_NUMBERS.OFFICE)}
                </a>
            </li>
            <li>
                Cell. <a href="tel:{CONFIG.PHONE_NUMBERS.CELLULAR}">
                    {CONFIG.PHONE_NUMBERS.full(CONFIG.PHONE_NUMBERS.CELLULAR)}
                </a>
            </li>
        </ul>

        <ul class="w-full mx-auto my-2 justify-center md:inline-flex md:my-1">
            <li>
                PEC <a href="mailto:{CONFIG.EMAILS.PEC_BOCCHIETTI}">
                    {CONFIG.EMAILS.PEC_BOCCHIETTI}
                </a>
            </li>
            <li>
                <a href="mailto:{CONFIG.EMAILS.BOCCHIETTI}"
                    >{CONFIG.EMAILS.BOCCHIETTI}</a
                >
            </li>
        </ul>

        <ul class="w-full mx-auto my-2 justify-center md:inline-flex md:my-1">
            <li><a href="/avvertenze">Avvertenze</a></li>
            <li><a href="mailto:{CONFIG.EMAILS.MASTER}">Webmaster</a></li>
        </ul>
    </nav>
</footer>
