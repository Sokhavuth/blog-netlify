<script>
    import Layout from '$lib/components/admin/Layout.svelte'
    import Items from '$lib/components/admin/Items.svelte'
    export let data
    import {activePage} from "$lib/stores/page.js"
</script>

<Layout {data}>
    <section class="category" slot="editor">
        <form method="post" action={`?/update&p=${$activePage}`} >
            <input type="hidden" name="id" value={data.category.id} />
            <span>ឈ្មោះ​ជំពូកៈ</span><input type="text" value={data.category.title} name="label" required />
            <span>រូប​សញ្ញាៈ</span><input type="text" name="thumb" value={data.category.thumb} required />
            <span>ពេល​បង្កើតៈ</span><input type="datetime-local" value={data.category.date} step="1" name="datetime" required />
            <span></span><input type="submit" value="បញ្ជូន" />
            <span></span>
        </form>
    </section>
    <Items slot="items" {data} />
</Layout>

<style>
    .category{
        padding: 20px;
        background: rgb(241, 198, 198);
        height: 100%;
    }
    .category form{
        display: grid;
        grid-template-columns: 80px 300px;
        grid-gap: 5px 2px;
        align-items: center;
    }
    .category form span{
        text-align: right;
    }
    .category form input{
        font: var(--body-font);
        padding: 2px 5px
    }
    .category .flash{
        text-align: center;
        color: white;
        padding: 5px;
    }
</style>