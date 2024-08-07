<script>
    import Layout from '$lib/components/admin/Layout.svelte'
    import Items from '$lib/components/admin/Items.svelte'
    export let data
</script>

<Layout {data}>
    <section class="category" slot="editor">
        <form method="post" action="/admin/category?/create" >
            <span>ឈ្មោះ​ជំពូកៈ</span><input type="text" name="label" required />
            <span>រូប​សញ្ញាៈ</span><input type="text" name="thumb" required />
            <span>ពេល​បង្កើតៈ</span><input type="datetime-local" step="1" name="datetime" required />
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
    
</style>