<script>
    export let data
    const posts = data.posts.slice(0, 5)
</script>

<section class="Latest region">
    <div class="panel">
        {#each posts as post}
        <a href={`/post/${post.id}`}>
            <img src={post.thumb} alt=''/>
            {#if post.videos.length}
            <img class="play-icon" src="/images/play.png" alt='' />
            {/if}
            <div class="title">{post.title}</div>
        </a>
        {/each}
    </div>
    <div class="ad">
        <img src="/images/ad.jpg" alt='' />
        <img src="/images/ad.jpg" alt='' />
    </div>
</section>

<style>
    .Latest .panel{
        display: grid;
        grid-template-columns: repeat(6, auto);
        grid-gap: 10px;
        padding: 0 0 10px;
    }
    .Latest .panel a{
        position: relative;
        color: white;
        padding-top: 56.25%;
        overflow: hidden;
    }
    .Latest .panel img{
        position: absolute;
        width: 100%;
        min-height: 100%;
        top: 0;
        left: 0;
    }
    .Latest .panel a:nth-child(1){
        grid-column: 1 / span 3;
    }
    .Latest .panel a:nth-child(2){
        grid-column: 4 / span 3;
    }
    .Latest .panel a:nth-child(3){
        grid-column: 1 / span 2;
    }
    .Latest .panel a:nth-child(4){
        grid-column: 3 / span 2;
    }
    .Latest .panel a:nth-child(5){
        grid-column: 5 / span 2;
    }
    .Latest .panel a .play-icon{
        width: auto;
        min-height: auto;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 15%;
    }
    .Latest .panel a .title{
        position: absolute;
        bottom: 0;
        font: 22px/1.5 Oswald, Bayon;
        padding: 5px 10px;
        text-shadow: 2px 2px 4px #000000;
        background: -webkit-linear-gradient(bottom, black,transparent);
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .Latest .panel a:nth-child(n+3) .title{
        font-size: 16px;
    }
    .Latest .ad{
        display: grid;
        grid-template-columns: auto auto;
        grid-gap: 10px;
    }
    .Latest .ad img{
        width: 100%;
    }
    @media only screen and (max-width: 600px){
        .Latest .panel{
            grid-template-columns: 100%;
            padding: 10px;
        }
        .Latest .panel a:nth-child(n){
            grid-column: 1 / span 1;
        }
        .Latest .ad{
            grid-template-columns: 100%;
            padding: 0 10px;
        }
        .Latest .panel a .title{
            font-size: 16px;
        }
    }
    </style>