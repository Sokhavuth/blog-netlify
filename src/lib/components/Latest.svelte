<script>
    import Ad from "$lib/components/Ad.svelte"
    import jq from 'jquery'
    import { onMount } from "svelte"
    export let data

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
    latestMovies.category = "movie"
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
    
    data.latestPosts = null
    data.postsByCategory = null

    async function getRandomPlaylist(category, thumbs){
		const response = await fetch(`/post/playlist/${category}`, {
			method: 'POST',
			body: JSON.stringify({ thumbs }),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		const newPlaylist_ = await response.json()
        let newPlaylist = parseVideos(newPlaylist_)
        newPlaylist.category = category
        return newPlaylist
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
            }
        }
    }

   function onPlayerError(event){
        if(player.index + 1 < player.playlist[player.part].length){
            player.index += 1
            player.loadVideoById(player.playlist[player.part][player.index].id)
        }else{
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
        }
    }

   function changeCategory(playlist, label) {
        player.part = 0
        player.playlist = playlist
        if(playlist[player.part][0].type === "YouTubePlaylist"){
            player.loadVideoById(initialVideoId)
            player.loadPlaylist({list:playlist[0][0].id,listType:'playlist',index:0})
            jq('.latest-video').html(label)
        }else{
            if(!(playlist[0].reversal)){
                playlist[0].reverse()
                playlist[0].reversal = true
            }
            player.loadVideoById(playlist[0][0].id)
            jq('.latest-video').html(label)
        }
    }

    function nextPrevious(move){
        if(move === "next"){
            if(player.index + 1 < player.playlist[player.part].length){
                player.index += 1
                player.loadVideoById(player.playlist[player.part][player.index].id)
            }else{
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
            }
        }else if(move === "previous"){
            if(player.index > 0){
                player.index -= 1
                player.loadVideoById(player.playlist[player.part][player.index].id)
            }else{
                player.part -= 1
                if(player.part < 0){
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
            }
        }
    }

    const ytPlayerId = 'youtube-player'
    export let player;
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
            <button  on:click={()=>changeCategory(latestMovies, 'ភាពយន្ត​​​')}>
                <img alt='' src={data.thumbs[0]} />
                <p class="news-label">ភាពយន្ត​</p>
            </button>
            <button on:click={()=>changeCategory(latestTravelVideos, 'ដើរ​លេង​​​​​')}>
                <img alt='' src={data.thumbs[1]} />
                <p class="movies-label">ដើរ​លេង</p>
            </button>
            <button on:click={()=>changeCategory(latestGameVideos, '​ពិភព​និម្មិត​')}>
                <img alt='' src={data.thumbs[4]} />
                <p class="movies-label">ពិភព​និម្មិត</p>
            </button>
            <button on:click={()=>changeCategory(latestSportVideos, '​កីឡា​​​')}>
                <img alt='' src={data.thumbs[3]} />
                <p class="movies-label">កីឡា</p>
            </button>
            <button on:click={()=>changeCategory(latestDocVideos, 'កំរង​ឯកសារ​​​​​')}>
                <img alt='' src={data.thumbs[2]} />
                <p class="movies-label">កំរង​ឯកសារ</p>
            </button>
            <button on:click={()=>changeCategory(latestFoodVideos, 'មុខ​ម្ហូប​​​​')}>
                <img alt='' src={data.thumbs[5]} />
                <p class="news-label">​មុខ​ម្ហូប</p>
            </button>
            <button on:click={()=>changeCategory(latestMusicVideos, 'របាំ​តន្ត្រី​​​​​')}>
                <img alt='' src={data.thumbs[6]} />
                <p class="news-label">របាំ​តន្ត្រី</p>
            </button>
            <button on:click={()=>changeCategory(latestDistractionVideos, 'ល្បែងកំសាន្ត​​​​')}>
                <img alt='' src={data.thumbs[7]} />
                <p class="news-label">ល្បែងកំសាន្ត​</p>
            </button>
            <div class="wrapper">
                <div id={ytPlayerId}></div>
                <div class="latest-video">វីដេអូ​ចុង​ក្រោយ</div>
                <div class="channel-logo">
                <img src="/images/siteLogo.png" alt=''/>
                <div class="play-all">
                    <a on:click={()=>nextPrevious('previous')}>វីដេអូមុន</a>
                    <a on:click={()=>changeCategory(latestVideos, 'វីដេអូ​ចុងក្រោយ')} class='center'>វីដេអូ​ចុងក្រោយ</a>
                    <a on:click={()=>nextPrevious('next')}>វីដេអូបន្ទាប់</a>
                </div>
            </div>
            
        </div>
    </div>
    <Ad />
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
.random-video .wrapper .play-all .center{
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
}   
</style>