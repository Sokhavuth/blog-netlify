<script>
    import Header from '$lib/components/Header.svelte'
    import Menu from "$lib/components/Menu.svelte"
    import Footer from "$lib/components/Footer.svelte"
    export let data
    let title = data.title
    let siteTitle = data.settings.siteTitle
    let pageURL = data.pageURL
    let thumb = data.thumb
</script>

<Header {title} {siteTitle} />
<Menu {pageURL} />
<img style='display:none;' src={thumb} alt='' />
<slot />
<Footer />
