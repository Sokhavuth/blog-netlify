<script>
    import Layout from "$lib/components/Layout.svelte"
    import Latest from '$lib/components/Latest.svelte'
    //import Home from "$lib/components/Home.svelte"
    export let data
</script>

<Layout {data}>
<section class="Index region">
    <Latest {data} />
</section>
</Layout>