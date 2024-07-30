<script>
    import Category from '$lib/components/Category.svelte'
    import Latest from '$lib/components/Latest.svelte'
    import Home from "$lib/components/Home.svelte"
    export let data
</script>

<section class="Index region">
    <Category {data} />
    <Latest {data} />
    <Home {data} />
</section>