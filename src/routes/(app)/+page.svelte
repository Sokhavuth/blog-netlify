<script>
    import Layout from "$lib/components/Layout.svelte"
    import Category from '$lib/components/Category.svelte'
    import Latest from '$lib/components/Latest.svelte'
    import Home from "$lib/components/Home.svelte"
    export let data
</script>

<Layout {data}>
<section class="Index region">
    <Category {data} />
    <Latest {data} />
    <Home {data} />
</section>
</Layout>