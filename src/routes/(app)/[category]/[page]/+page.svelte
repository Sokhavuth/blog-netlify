<script>
    import Layout from "$lib/components/Layout.svelte"
    export let data
    
</script>

<Layout {data} >
<section class="Ad region">
    <img src="/images/ad.jpg" alt=''/>
    <img src="/images/ad.jpg" alt=''/>
</section>

<section class="Category region">
    <div class="container">
        {#each data.posts as post}
            <div class="wrapper">
                <a href={`/post/${post.id}`}>
                    <img src={post.thumb} alt=''/>
                    {#if post.videos.length}
                    <img class="play-icon" src="/images/play.png" alt=''/>
                    {/if}
                </a>
                <div class="date">{(new Date(post.date)).toLocaleDateString('it-IT')}</div>
                <a class="title" href={`/post/${post.id}`}>
                    <div >{post.title}</div>
                </a>
            </div>
        {/each}
    </div>
    <div class="pagination">
        <span>ទំព័រ </span>
        <select on:change={(event)=>document.location = `/${data.category}/${event.target.value}`}>
            {#each [...Array(data.lastPage).keys()] as pageNumber}
                {#if pageNumber+1 == data.currentPage}
                <option selected>{pageNumber+1}</option>
                {:else}
                <option>{pageNumber+1}</option>
                {/if}
            {/each}
        </select>
        <span> នៃ {data.lastPage}</span>
    </div>
</section>
</Layout>

<style>
.Ad{
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-gap: 10px;
    padding-top: 0px;
}
.Ad img{
    width: 100%;
}
.Category .container{
    display: grid;
    grid-template-columns: repeat(4, calc(100% / 4 - 11.25px));
    grid-gap: 30px 15px;
    padding: 30px 0;
}
.Category .container .wrapper a{
    position: relative;
    padding-top: 56.25%;
    overflow: hidden;
    width: 100%;
    display: block;
}
.Category .container .wrapper a img{
    position: absolute;
    width: 100%;
    min-height: 100%;
    top: 0;
    left: 0;
}
.Category .container .wrapper a .play-icon{
    width: auto;
    min-height: auto;
    width: 15%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
}
.Category .container .wrapper .title{
    padding-top: 0;
}
.Category .container .wrapper .title div{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.Category .pagination{
    display: block;
    text-align: center;
}
@media only screen and (max-width:600px){
    .Ad{
        grid-template-columns: 100%;
        padding: 0 10px;
    }
    .Category .container{
        grid-template-columns: 100%;
        padding: 30px 10px;
    }
}
</style>