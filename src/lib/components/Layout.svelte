<script>
    import Header from '$lib/components/Header.svelte'
    import Menu from "$lib/components/Menu.svelte"
    import Footer from "$lib/components/Footer.svelte"
    export let data
</script>

<Header title={data.title} siteTitle={data.settings.siteTitle} />
<Menu pageURL={data.pageURL} />
<img style='display:none;' src={data.thumb} alt='' />
<slot />
<Footer />
