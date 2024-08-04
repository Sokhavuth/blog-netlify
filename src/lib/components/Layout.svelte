<script>
    import Header from '$lib/components/Header.svelte'
    import Menu from "$lib/components/Menu.svelte"
    import Category from '$lib/components/Category.svelte'
    import Footer from "$lib/components/Footer.svelte"
    export let data
</script>

<Header {data} />
<Menu {data} />
<img style='display:none;' src={data.thumb} alt='' />
<Category {data} />
<slot />
<Footer />
