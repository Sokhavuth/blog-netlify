<script>
    import Layout from '$lib/components/admin/Layout.svelte'
    import Items from "$lib/components/admin/Items.svelte"
    import {activePage} from "$lib/stores/page.js"
    export let data
</script>

<Layout {data}>
    <section class="setting" slot="editor">
        <form method="post" action={`?/update&p=${$activePage}`} >
            <span>គេហទំព័រៈ</span><input type="text" value={data.setting.title} name="title" required />
            <input type="hidden" name="id" value={data.setting.id}  />
            <span>​ខ្លឹមសារៈ</span><input type="text" value={data.setting.description} name="description" required />
            <span>​ទំព័រ​ក្នុងៈ</span><input type="number" value={data.setting.dashboard}  name="dashboard" required />
            <span>​ទំព័រក្រៅៈ</span><input type="number" value={data.setting.frontend} name="frontend" required />
            <span>​ទំព័រ​ជំពូកៈ</span><input type="number" value={data.setting.categories} name="categories" required />
            <span>រូប​​តំណាងៈ</span><input type="text" value={data.setting.thumb} name="thumb" required />
            <span>ពេល​បង្កើតៈ</span><input type="datetime-local" step="1" value={data.setting.date} name="datetime" required />
            <span></span><input type="submit" value="បញ្ជូន" />
            <span></span>
        </form>
    </section>
    <Items slot="items" {data} />
</Layout>

<style>
    .setting{
        padding: 20px;
        background: rgb(241, 198, 198);
        height: 100%;
    }
    .setting form{
        display: grid;
        grid-template-columns: 130px 300px;
        grid-gap: 5px 2px;
        align-items: center;
    }
    .setting form span{
        text-align: right;
    }
    .setting form input{
        font: var(--body-font);
        padding: 2px 5px
    }
</style>