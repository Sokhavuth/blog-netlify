<script>    
    import Layout from "$lib/components/Layout.svelte"
    import Video from "$lib/components/Video.svelte"
    import { browser } from '$app/environment'
    import { FacebookLink } from "svelte-social-links"
    export let data
    const post = data.post
    const Categories = {
        Khmer: 'រឿងខ្មែរ',
        Thai: 'រឿងថៃ',
        Chinese: 'រឿងចិន',
        Korean: 'រឿងកូរ៉េ',
        travel: 'ដើរ​លេង',
        news: 'ព័ត៌មាន',
        movie: 'ភាពយន្ត'
    }

    const postCategories = data.post.categories.split(",")
    const categories = postCategories.map((category)=>Categories[category])
</script>

<div id="fb-root"></div>
{#if browser}
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v14.0&appId=3245867309046703&autoLogAppEvents=1" nonce="uHaMaoD7"></script>
{/if}

<Layout {data}>
<section class="Ad region">
    <img src="/images/ad.jpg" alt=''/>
    <img src="/images/ad.jpg" alt=''/>
</section>

<section class="Post region">
    <div class="main">
        <h3 class="title">{post.title}</h3>
        <div class="categories">
            <span>​​​​​​​​​ជំពូកៈ {categories.join(', ')}</span>
            <span>{(new Date(post.date)).toLocaleDateString('it-IT')}</span>
        </div>
        <div class="author">
            <span>អ្នក​​​​​​​​​​រៀបរៀងៈ {data.author.title}</span>
        </div>
        
        <Video {data} />
        
        <div class="content">
            {@html post.content}
        </div>
        <div class="social-media">
        <FacebookLink
	        url={`https://khmerweb-blog.netlify.app/post/${post.id}`}
	        hashtag="movie"
        />
        <span class="fb-share-button" data-href={`https://khmerweb-blog.netlify.app/post/${post.id}`} data-layout="" data-size=""><a target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=https://khmerweb-blog.netlify.app/post/${post.id}%2F&amp;src=sdkpreparse`} class="fb-xfbml-parse-ignore">Share</a></span>
        </div>
        <div class="fb-comments" data-href={`https://khmerweb-blog.netlify.app/post/${post.id}`} data-width="100%" data-numposts="5"></div>
        
    </div>
    <div class="sidebar">
        {#each data.randomPosts as post}
            <a data-sveltekit-reload href={`/post/${post.id}`}>
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

<style is:global>
.Ad{
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-gap: 10px;
    padding-top: 10px;
}
.Ad img{
    width: 100%;
}
.Post{
    margin-top: 20px;
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
.Post .main .author{
    margin-bottom: 30px;
}
.Post .sidebar a{
    display: block;
    color: white;
    position: relative;
    padding-top: 56.25%;
    overflow: hidden;
    margin-bottom: 20px;
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
.Post .main .social-media{
    width: 50px;
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 5px;
    align-items: center;
}

@media only screen and (max-width:600px){
    .Ad{
        grid-template-columns: 100%;
        padding: 0 10px;
    }
    .Post{
        grid-template-columns: 100%;
    }
    .Post .sidebar{
        padding: 0 15px;
    }
}
</style>