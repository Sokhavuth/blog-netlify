<script>
import { onMount } from "svelte"
export let data = ''
$: videos = JSON.parse(data.post.videos).reverse()
$: title = data.post.title
let clicked = 0
let myElement
let url
let clickedPart = false

function setScreen(video,id,click){
    if(video['type'] == 'OK'){
        url = `//ok.ru/videoembed/${video['id']}`
    }else if(video['type'] == 'YouTube'){
        url = `https://www.youtube.com/embed/${video['id']}`
    }else if(video['type'] == 'YouTubePlaylist'){
        url = `https://www.youtube.com/embed/videoseries?list=${video['id']}`
    }else if(video['type'] === "Facebook"){
        url = `https://www.facebook.com/watch/?v=${video['id']}`
    }else if(video['type'] === "GoogleDrive"){
        url = `https://docs.google.com/file/d/${video['id']}/preview`
    }else if(video['type'] === "Vimeo"){
        url = `https://player.vimeo.com/video/${video['id']}`
    }else if(video['type'] === "Dailymotion"){
        url = `https://www.dailymotion.com/embed/video/${video['id']}`
    }
}

function onClick(video,id,click){
    let myElement = document.getElementById("part"+clicked)
    myElement.classList.remove('clickedPart')
    let myElement2 = document.getElementById("part"+id)
    myElement2.classList.add('clickedPart')
    clicked = id
    setScreen(video,id,click)
}

$: title, setScreen(videos[0],0,false)
onMount(() => {
    myElement = document.getElementById("part0")
    myElement.classList.add('clickedPart')
})
</script>

{#if videos}
<div class="video">
    <div class="screen">
        {#if videos.type !== 'Facebook'}
        <div><iframe title=''  src={url} frameborder="0" allowfullscreen></iframe></div>
        {:else}
        <div class="fb-video" data-href={url} data-width="auto" data-show-captions="true"></div>
        {/if}
    </div>
    <div class="playlist">
    {#each videos as item, index }
        {#if index === videos.length-1}
        <div class="part" class:clickedPart={clickedPart} id="part{index}"  on:click={() => onClick(videos[index], index,true)}>
            { title } ភាគ { index+1 } { videos[index].status }
        </div>
        {:else}
        <div class="part" class:clickedPart={clickedPart} id="part{index}" on:click={() => onClick(videos[index], index,true)}>
            { title } ភាគ { index+1 }
        </div>
        {/if}
    {/each}
    </div>
</div>
{/if}

<style>
    .video .screen div{
        position: relative;
        padding-top: 56.25%;
        border: 1px solid white;
    }
    .video .screen div iframe{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .video .playlist{
        max-height: 405px;
        overflow: auto;
        margin-bottom: 20px;
        border: 1px solid white;
    }
    .video .playlist .part{
    text-align: left;
    padding: 10px;
    color: var(--playlist-color);
    display: block;
    height: auto;
    font-size: 16px;
    background: var(--playlist-part);
    border: 1px solid white;
    border-top: none;
}
.video .playlist .part:last-child{
    margin-bottom: 0;
}
.video .playlist .part:hover{
    cursor: pointer;
    opacity: .7;
}
.clickedPart{
    background: var(--playlist-clicked-bg) !important;
    color: var(--playlist-clicked) !important;
}
</style>