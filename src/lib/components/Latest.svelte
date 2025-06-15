<script>
    import Ad from "$lib/components/Ad.svelte"
    import jq from 'jquery'
    import { onMount } from "svelte"
    export let data
    let player
    let posts = data.latestPosts
    const dark = 'brightness(20%)'
    const normal = 'brightness(100%)'
    const laodingVideo = 'NcQQVbioeZk'
    const pageAmount = Math.ceil(data.count/data.settings.categoryPostLimit)

    function parseVideos(posts){
        let videos = []
        let thumbs = []
        for(let post of posts){
            videos.push(JSON.parse(post.videos))
            thumbs.push(post.thumb)
        }
        videos.thumbs = thumbs
        return videos
    }

    let latestVideos = parseVideos(data.latestPosts)
    latestVideos.category = 'latest'
    let latestMovies = parseVideos(data.postsByCategory[0])
    latestMovies.category = 'movie'
    let latestTravelVideos = parseVideos(data.postsByCategory[1])
    latestTravelVideos.category = 'travel'
    let latestDocVideos = parseVideos(data.postsByCategory[2])
    latestDocVideos.category = 'doc'
    let latestSportVideos = parseVideos(data.postsByCategory[3])
    latestSportVideos.category = 'sport'
    let latestGameVideos = parseVideos(data.postsByCategory[4])
    latestGameVideos.category = 'game'
    let latestFoodVideos = parseVideos(data.postsByCategory[5])
    latestFoodVideos.category = 'food'
    let latestMusicVideos = parseVideos(data.postsByCategory[6])
    latestMusicVideos.category = 'music'
    let latestDistractionVideos = parseVideos(data.postsByCategory[7])
    latestDistractionVideos.category = 'distraction'

    async function getRandomPlaylist(category, thumbs){
		const response = await fetch(`/post/playlist/${category}`, {
			method: 'POST',
			body: JSON.stringify({ thumbs }),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		const newPlaylist_ = await response.json()
        posts = newPlaylist_
        let newPlaylist = parseVideos(newPlaylist_)
        newPlaylist.category = category
        return newPlaylist
	}

    async function newPlaylist(){
        if(player.playlist.category !== 'latest'){
            player.loadVideoById(laodingVideo)
            player.playlist = await getRandomPlaylist(player.playlist.category, player.playlist.thumbs) 
        }
        jq(`.Home .container .wrapper:nth-child(${player.part+1}) img`).css({'filter':normal})
        jq(`.Home .container .wrapper:nth-child(${player.part+1}) p`).css({'display':'none'})
        player.part = 0
        if(player.playlist[player.part][0].type === "YouTubePlaylist"){
            player.loadVideoById(initialVideoId)
            player.loadPlaylist({list:player.playlist[player.part][0].id,listType:'playlist',index:0})
        }else{
            player.index = 0
            if(!(player.playlist[player.part].reversal)){
                player.playlist[player.part].reverse()
                player.playlist[player.part].reversal = true
            }
            player.loadVideoById(player.playlist[player.part][0].id)
        }
        
        jq(`.Home .container .wrapper:nth-child(${player.part+1}) img`).css({'filter':dark})
        jq(`.Home .container .wrapper:nth-child(${player.part+1}) p`).css({'display':'block'})
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            [array[i], array[j]] = [array[j], array[i]]
        }
    }

    function loadVideo(playlist){
        if(playlist[0][0].type === "YouTubePlaylist"){
           player.loadPlaylist({list:playlist[0][0].id,listType:'playlist',index:0})
        }else{
            playlist[0].reverse()
            playlist[0].reversal = true
            player.loadVideoById(playlist[0][0].id)
        }
        jq('.Home .container .wrapper:nth-child(1) img').css({'filter':dark})
        jq('.Home .container .wrapper:nth-child(1) p').css({'display':'block'})
    }

    function onPlayerReady(event) {
        player.part = 0
        player.index = 0
        player.playlist = latestVideos 
        loadVideo(latestVideos )
    }

   async function onPlayerStateChange(event) {    
        if(event.data === YT.PlayerState.ENDED){
            if(player.index + 1 < player.playlist[player.part].length){
                player.index += 1
                player.loadVideoById(player.playlist[player.part][player.index].id)
            }else{
                jq(`.Home .container .wrapper:nth-child(${player.part+1}) img`).css({'filter':normal})
                jq(`.Home .container .wrapper:nth-child(${player.part+1}) p`).css({'display':'none'})
                player.part += 1
                if(player.part === player.playlist.length){
                    if(player.playlist.category !== 'latest'){
                        player.loadVideoById(laodingVideo)
                        player.playlist = await getRandomPlaylist(player.playlist.category, player.playlist.thumbs) 
                    }
                    player.part = 0
                }

                if(player.playlist[player.part][0].type === "YouTubePlaylist"){
                    player.loadVideoById(initialVideoId)
                    player.loadPlaylist({list:player.playlist[player.part][0].id,listType:'playlist',index:0})
                }else{
                    player.index = 0
                    if(!(player.playlist[player.part].reversal)){
                        player.playlist[player.part].reverse()
                        player.playlist[player.part].reversal = true
                    }
                    player.loadVideoById(player.playlist[player.part][0].id)
                }
        
                jq(`.Home .container .wrapper:nth-child(${player.part+1}) img`).css({'filter':dark})
                jq(`.Home .container .wrapper:nth-child(${player.part+1}) p`).css({'display':'block'})
            }
        }
    }

   async function onPlayerError(event){
        if(player.index + 1 < player.playlist[player.part].length){
            player.index += 1
            player.loadVideoById(player.playlist[player.part][player.index].id)
        }else{
            jq(`.Home .container .wrapper:nth-child(${player.part+1}) img`).css({'filter':normal})
            jq(`.Home .container .wrapper:nth-child(${player.part+1}) p`).css({'display':'none'})
            player.part += 1
            if(player.part === player.playlist.length){
                if(player.playlist.category !== 'latest'){
                    player.loadVideoById('NcQQVbioeZk')
                    player.playlist = await getRandomPlaylist(player.playlist.category, player.playlist.thumbs)
                }
                player.part = 0
            }

            if(player.playlist[player.part][0].type === "YouTubePlaylist"){
                player.loadVideoById(initialVideoId)
                player.loadPlaylist({list:player.playlist[player.part][0].id,listType:'playlist',index:0})
            }else{
                player.index = 0
                if(!(player.playlist[player.part].reversal)){
                    player.playlist[player.part].reverse()
                    player.playlist[player.part].reversal = true
                }
                player.loadVideoById(player.playlist[player.part][0].id)
            }
            jq(`.Home .container .wrapper:nth-child(${player.part+1}) img`).css({'filter':dark})
            jq(`.Home .container .wrapper:nth-child(${player.part+1}) p`).css({'display':'block'})
        }
    }

    function changeCategory(playlist, label, obj=0, part=0) {
        if(obj){posts = obj}
        if(playlist){player.playlist = playlist}
        if(label){player.label = label}
        jq(`.Home .container .wrapper:nth-child(${player.part+1}) img`).css({'filter':normal})
        jq(`.Home .container .wrapper:nth-child(${player.part+1}) p`).css({'display':'none'})
        player.part = part
        player.unMute()
        if(player.playlist[player.part][0].type === "YouTubePlaylist"){
            player.loadVideoById(initialVideoId)
            player.loadPlaylist({list:player.playlist[player.part][0].id,listType:'playlist',index:0})
            jq('.latest-video').html(player.label)
        }else{
            if(!(player.playlist[player.part].reversal)){
                player.playlist[player.part].reverse()
                player.playlist[player.part].reversal = true
            }
            player.loadVideoById(player.playlist[player.part][0].id)
            jq('.latest-video').html(player.label)
        }
        jq(`.Home .container .wrapper:nth-child(${player.part+1}) img`).css({'filter':dark})
        jq(`.Home .container .wrapper:nth-child(${player.part+1}) p`).css({'display':'block'})
    }

    function nextPrevious(move){
        if(move === "next"){
            if(player.index + 1 < player.playlist[player.part].length){
                player.index += 1
                player.loadVideoById(player.playlist[player.part][player.index].id)
            }else{
                jq(`.Home .container .wrapper:nth-child(${player.part+1}) img`).css({'filter':normal})
                jq(`.Home .container .wrapper:nth-child(${player.part+1}) p`).css({'display':'none'})
                player.part += 1
                if(player.part === player.playlist.length){
                    player.part = 0
                }

                if(player.playlist[player.part][0].type === "YouTubePlaylist"){
                    player.loadVideoById(initialVideoId)
                    player.loadPlaylist({list:player.playlist[player.part][0].id,listType:'playlist',index:0})
                }else{
                    player.index = 0
                    if(!(player.playlist[player.part].reversal)){
                        player.playlist[player.part].reverse()
                        player.playlist[player.part].reversal = true
                    }
                    player.loadVideoById(player.playlist[player.part][0].id)
                }
                jq(`.Home .container .wrapper:nth-child(${player.part+1}) img`).css({'filter':dark})
                jq(`.Home .container .wrapper:nth-child(${player.part+1}) p`).css({'display':'block'})
            }
        }else if(move === "previous"){
            if(player.index > 0){
                player.index -= 1
                player.loadVideoById(player.playlist[player.part][player.index].id)
            }else{
                jq(`.Home .container .wrapper:nth-child(${player.part+1}) img`).css({'filter':normal})
                jq(`.Home .container .wrapper:nth-child(${player.part+1}) p`).css({'display':'none'})
                player.part -= 1
                if(player.part < 0){
                    player.part = player.playlist.length - 1
                }

                if(player.playlist[player.part][0].type === "YouTubePlaylist"){
                    player.loadVideoById(initialVideoId)
                    player.loadPlaylist({list:player.playlist[player.part][0].id,listType:'playlist',index:0})
                }else{
                    player.index = 0
                    if(!(player.playlist[player.part].reversal)){
                        player.playlist[player.part].reverse()
                        player.playlist[player.part].reversal = true
                    }
                    player.loadVideoById(player.playlist[player.part][0].id)
                }
                jq(`.Home .container .wrapper:nth-child(${player.part+1}) img`).css({'filter':dark})
                jq(`.Home .container .wrapper:nth-child(${player.part+1}) p`).css({'display':'block'})
            }
        }
    }

    const ytPlayerId = 'youtube-player'
    export let initialVideoId = 'cdwal5Kw3Fc';
    
    function load() {
        player = new YT.Player(ytPlayerId, {
            height: '390',
            width: '640',
            videoId: initialVideoId,
            playerVars: {
                'playsinline': 1,
                "enablejsapi": 1,
                "mute": 1,
                "autoplay": 1,
                "rel": 0,
            },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange,
                'onError': onPlayerError
            }
        })
    }
        
    onMount(()=>{
        window.YT.ready(function() {
            if (window.YT) {
                load()
            } else {
                window.onYouTubeIframeAPIReady = load
            }
        })
    })
</script>

<svelte:head>
    <script src="https://www.youtube.com/iframe_api"></script>
</svelte:head>

<section class="main region">
    <Ad />
    <div class="feature-post">
        <div class="random-video">
            <button  on:click={()=>changeCategory(latestMovies, 'ភាពយន្ត​​​', data.postsByCategory[0])}>
                <img alt='' src={data.thumbs[0]} />
                <p class="news-label">ភាពយន្ត​</p>
            </button>
            <button on:click={()=>changeCategory(latestTravelVideos, 'ដើរ​លេង​​​​​', data.postsByCategory[1])}>
                <img alt='' src={data.thumbs[1]} />
                <p class="movies-label">ដើរ​លេង</p>
            </button>
            <button on:click={()=>changeCategory(latestGameVideos, '​ពិភព​និម្មិត​', data.postsByCategory[4])}>
                <img alt='' src={data.thumbs[4]} />
                <p class="movies-label">ពិភព​និម្មិត</p>
            </button>
            <button on:click={()=>changeCategory(latestSportVideos, '​កីឡា​​​', data.postsByCategory[3])}>
                <img alt='' src={data.thumbs[3]} />
                <p class="movies-label">កីឡា</p>
            </button>
            <button on:click={()=>changeCategory(latestDocVideos, 'កំរង​ឯកសារ​​​​​', data.postsByCategory[2])}>
                <img alt='' src={data.thumbs[2]} />
                <p class="movies-label">កំរង​ឯកសារ</p>
            </button>
            <button on:click={()=>changeCategory(latestFoodVideos, 'មុខ​ម្ហូប​​​​', data.postsByCategory[5])}>
                <img alt='' src={data.thumbs[5]} />
                <p class="news-label">​មុខ​ម្ហូប</p>
            </button>
            <button on:click={()=>changeCategory(latestMusicVideos, 'របាំ​តន្ត្រី​​​​​', data.postsByCategory[6])}>
                <img alt='' src={data.thumbs[6]} />
                <p class="news-label">របាំ​តន្ត្រី</p>
            </button>
            <button on:click={()=>changeCategory(latestDistractionVideos, 'ល្បែងកំសាន្ត​​​​', data.postsByCategory[7])}>
                <img alt='' src={data.thumbs[7]} />
                <p class="news-label">ល្បែងកំសាន្ត​</p>
            </button>
            <div class="wrapper">
                <div id={ytPlayerId}></div>
                <div class="latest-video">ព័ត៌មាន</div>
                <div class="channel-logo">
                <img src="/images/siteLogo.png" alt=''/>
                <div class="play-all">
                    <a on:click={()=>changeCategory(latestVideos, '​ព័ត៌មាន', data.latestPosts)} class='center'>ព័ត៌មាន</a>
                    <a on:click={()=>nextPrevious('previous')}>វីដេអូមុន</a>
                    <a on:click={newPlaylist} class='new-playlist'>ដូរកំរង​វីដេអូ​</a>
                    <a on:click={()=>nextPrevious('next')}>វីដេអូបន្ទាប់</a>
                </div>
            </div>
            
        </div>
    </div>
    <Ad />
</section>

<section class="Home region">
    <div class="container">
        {#each posts as post, index}
            <div class="wrapper" on:click={()=>changeCategory(false, false, false, index)}>
                <button class='news'>
                    <img src={post.thumb} alt=''/>
                    {#if post.videos.length}
                    <img class="play-icon" src="/images/play.png" alt=''/>
                    {/if}
                    <p>កំពុង​លេង...</p>
                </button>
                <div class="date">{(new Date(post.date)).toLocaleDateString('it-IT')}</div>
                <a class="title">{post.title}</a>
            </div>
        {/each}
    </div>
    <div class="navigation">
        <span>ទំព័រ </span>
        <select on:change={(event)=>{document.location = `/${event.target.value}`}}>
            {#each [...Array(pageAmount).keys()] as pageNumber}
                <option>{pageNumber+1}</option>
            {/each}
        </select>
        <span> នៃ {pageAmount}</span>
    </div>
</section>

<style>
.feature-post span img{
    width: 100%;
    float: left;
}
.random-video{
    display: grid;
    grid-template-columns: calc(33.33% - 6.66px) calc(33.33% - 6.66px) calc(33.33% - 6.66px);
    grid-gap: 10px;
    padding: 10px 0 0;
}
.random-video .wrapper{
    grid-column: 1 / span 2;
    grid-row: 2 / span 2;
    position: relative;
    padding-top: 53.4%;
}
.random-video button{
    position: relative;
    width: 100%;
    height: 100%;
    padding-top: 53.4%;
    border: none;
}
.random-video button:hover{
    cursor: pointer;
    opacity: .7;
}
.random-video span img, .random-video button img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.random-video span p, .random-video button p{
    position: absolute;
    top: 0;
    left: 0;
    background: var(--background-dark);
    color: white;
    text-align: center;
    font-family: Vidaloka, OdorMeanChey;
    padding: 5px;
    width: 90px;
}
.random-video .latest-video{
    position: absolute;
    top: 5px;
    left: 10px;
    color: orange;
}
.random-video .channel-logo img{
    position: absolute;
    top: 5px;
    right: 5px;
    width: 6%;
}
.random-video .wrapper .play-all{
    position: relative;
    bottom: 10px;
    text-align: center;
    visibility: hidden;
}
.random-video .wrapper .play-all a{
    color: orange;
}
.random-video .wrapper .play-all .center,
.random-video .wrapper .play-all .new-playlist{
    padding: 0 20px;
}
.random-video .wrapper .play-all:hover{
    cursor: pointer;
}
.random-video .wrapper:hover .play-all{
    visibility: visible;
}
.random-video .wrapper #youtube-player{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.Home .container{
    display: grid;
    grid-template-columns: repeat(4, calc(100% / 4 - 11.25px));
    grid-gap: 30px 15px;
    padding: 30px 0;
}
.Home .container .wrapper .news{
    position: relative;
    padding-top: 56.25%;
    overflow: hidden;
    width: 100%;
    display: block;
    border: none;
}
.Home button:hover, 
.Home .container .wrapper .title:hover{
    cursor: pointer;
    opacity: .7;
}
.Home .container .wrapper .news img{
    position: absolute;
    width: 100%;
    min-height: 100%;
    top: 0;
    left: 0;
}
.Home .container .wrapper .news .play-icon{
    width: auto;
    min-height: auto;
    width: 15%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
@keyframes blink {
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
}
.Home .container .wrapper .news p{
    position: absolute;
    top: 0;
    left: 0;
    padding: 2px 5px;
    color: orange;
    font-family: Vidaloka, OdorMeanChey;
    display: none;
    animation: blink 1s steps(2) infinite;
}
.Home .container .wrapper .title{
    padding-top: 0;
}
.Home .navigation{
    text-align: center;
}

@media only screen and (max-width: 600px){
    .random-video{
        grid-template-columns: 100%;
        padding: 10px;
    }
    .random-video .wrapper{
        grid-column: 1 / span 1;
        grid-row: 1 / span 1;
        padding-top: 51.7%;
    }
    .Home .container{
        grid-template-columns: 100%;
        padding: 30px 10px;
    }
}   
</style>