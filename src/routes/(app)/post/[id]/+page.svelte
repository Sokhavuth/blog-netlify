<script>    
    import { onMount } from "svelte"
    import Layout from "$lib/components/Layout.svelte"
    import Video from "$lib/components/Video.svelte"
    import Ad from "$lib/components/Ad.svelte"
    import { FacebookLink } from "svelte-social-links"
    export let data
    $: post = data.post
    const Categories = {
        news: 'ព័ត៌មាន',
        national: 'ក្នុង​ប្រទេស',
        global: "ក្រៅ​ប្រទេស",
        opinion: "មតិយោបល់",
        doc: "ឯកសារ",
        sport: "កីឡា",
        movie: 'ភាពយន្ត',
        Khmer: 'រឿងខ្មែរ',
        Thai: 'រឿងថៃ',
        Chinese: 'រឿងចិន',
        Korean: 'រឿងកូរ៉េ',
        world: 'រឿង​​បរទេស',
        travel: 'ដើរ​លេង',
        game: 'ពិភព​និម្មិត',
        food: 'មុខ​ម្ហូប',
        music: 'របាំតន្ត្រី',
        distraction: 'ល្បែង​កំសាន្ត'
    }

    $: postCategories = data.post.categories.split(",")
    $: categories = postCategories.map((category)=>Categories[category.trim()])

    onMount(() => { 
        var disqus_config = function () {
            this.page.url = `https://khmerweb-live.netlify.app/post/${post.id}`;  // Replace PAGE_URL with your page's canonical URL variable
            this.page.identifier = `${post.id}`; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
        };
    
        (function() { // DON'T EDIT BELOW THIS LINE
            var d = document, s = d.createElement('script');
            s.src = 'https://khmerweb-live.disqus.com/embed.js';
            s.setAttribute('data-timestamp', +new Date());
            (d.head || d.body).appendChild(s);
        })();
    })
</script>

<Layout {data}>
<Ad />
<section class="Post region">
    <div class="main">
        <h3 class="title">{post.title}</h3>
        <div class="categories">
            <span>​​​​​​​​​ជំពូកៈ {(categories.filter(Boolean)).join(', ')}</span>
            <span>{(new Date(post.date)).toLocaleDateString('it-IT')}</span>
        </div>
        <div class="author">
            <span>អ្នក​​​​​​​​​​រៀបរៀងៈ {data.authorName}</span>
        </div>
        {#if post.videos.length > 0}
            <Video {data} />
        {/if}
        <div class="content">
            {@html post.content}
        </div>
        <div class='post-bottom'>
            <div class="social-media">
                <FacebookLink
	                url={`https://khmerweb-live.netlify.app/post/${post.id}`}
	                hashtag=""
                />
                <span class="fb-share-button" data-href={`https://khmerweb-live.netlify.app/post/${post.id}`} data-layout="" data-size=""><a target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=https://khmerweb-live.netlify.app/post/${post.id}%2F&amp;src=sdkpreparse`} class="fb-xfbml-parse-ignore">Share</a></span>
            </div>
            {#if data.user}
            <div class='edit'>
                <a href={`/admin/post/edit/${post.id}`}><img src="/images/edit.png" alt=''/></a>
                <a href={`/admin/post/delete/${post.id}`}><img src="/images/delete.png" alt=''/></a>
            </div>
            {/if}
        </div>
        <div id="disqus_thread"></div>
        <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
    </div>
    <div class="sidebar">
        {#each data.randomPosts as post}
            <a  href={`/post/${post._id.$oid}`}>
                <img src={post.thumb} alt=''/>
                {#if post.videos.length}
                <img class="play-icon" src="/images/play.png" alt=''/>
                {/if}
                <div class="title">{post.title}</div>
            </a>
        {/each}
    </div>

</section>
</Layout>

<style>
.Post{
    margin-top: 15px;
    display: grid;
    grid-template-columns: 70% auto;
    grid-gap: 15px;
}
.Post .main{
    background-color: rgb(224, 220, 220);
    color: rgb(22, 22, 22);
    padding: 15px;
}
.Post .main .title{
    font: 18px/1.5 Oswald, Koulen;
    margin-bottom: 20px;
}
.Post .main .categories span:nth-child(2){
    float: right;
}
.Post .main .content{
    margin: 20px 0;
    font: 15px/1.5 Courgette, HandWriting;
}
:global(.Post .main .content img){
    max-width: 100%;
}
.Post .sidebar a{
    display: block;
    color: white;
    position: relative;
    padding-top: 56.25%;
    overflow: hidden;
    margin-bottom: 15px;
}
.Post .sidebar a:last-child{
    margin-bottom: 0;
}
.Post .sidebar a img{
    position: absolute;
    width: 100%;
    min-height: 100%;
    top: 0;
    left: 0;
}
.Post .sidebar a .play-icon{
    width: auto;
    min-height: auto;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 15%;
}
.Post .sidebar a .title{
    position: absolute;
    bottom: 0;
    padding: 5px 10px;
    font: 16px/1.5 Oswald, Bayon;
    text-shadow: 2px 2px 4px #000000;
    background: -webkit-linear-gradient(bottom, black,transparent);
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.Post .main .post-bottom{
    display: grid;
    grid-template-columns: auto auto;
}
.Post .main .post-bottom .edit{
    text-align: right; 
}
.Post .main .post-bottom .edit img{
    width: 30px;
}
.Post .main .social-media{
    width: 50px;
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 5px;
    align-items: center;
}

@media only screen and (max-width:600px){
    .Post{
        grid-template-columns: 100%;
    }
    .Post .sidebar{
        padding: 0 15px;
    }
}
</style>