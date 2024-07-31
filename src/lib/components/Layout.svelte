<script>
    import Header from '$lib/components/Header.svelte'
    import Menu from "$lib/components/Menu.svelte"
    import Footer from "$lib/components/Footer.svelte"
    export let data
</script>

<Header {data} />
<Menu {data} />
<slot />
<Footer />
