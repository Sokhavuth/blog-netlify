<script>
    import { onMount } from "svelte";
    import jq from "jquery"
    import Layout from "$lib/components/admin/Layout.svelte"

    export let data
    onMount(()=>{
        const clientId = 'a7cc802dc449fd7'
        let clientSecret = '6b4851c08184f75087776002d617c4c6e2d87317'
    })

</script>

<Layout {data}>
    <section slot="editor">
      <iframe src="https://img.doerig.dev/" width="100%" height="100%" frameBorder="0" title=""></iframe>
    </section>
</Layout>

<style>
    section{
        background: rgb(241, 198, 198);
        height: 100%;
        width: 100%
    }
</style>