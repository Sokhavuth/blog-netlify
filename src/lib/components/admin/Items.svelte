<script>
    export let data
	async function paginate(e){
		const response = await fetch(`/admin/post/paginate/${e.target.value}`)
		data.items = await response.json()
	}
</script>

<footer>
    <div class="info">{data.info}​ទាំងអស់​មានចំនួនៈ {data.count}</div>
    <div class="items">
        {#each data.items as item}
        <div class="item">
            <a class="thumb" href="/{data.type}/{item.id}">
                <img src={item.thumb} alt='' />
                {#if item.videos.length}
                <img class="play" src="/images/play.png" alt='' />
                {/if}
            </a>
            <div class="title">
                <a href="/{data.type}/{item.id}">{item.title}</a>
                <div>{new Date(item.date).toLocaleDateString('it-IT')}</div>
            </div>
            <div class="edit">
                <a href="/admin/{data.type}/edit/{item.id}"><img src="/images/edit.png" alt='' /></a>
                <a href="/admin/{data.type}/delete/{item.id}"><img src="/images/delete.png" alt=''/></a>
            </div> 
        </div>
        {/each}
    </div>
	<div class="pagination">
		<span>​​​​​​​​​​​​​​​​​​​​​ទំព័រ </span>
            <select id="page" on:change={paginate}> 
            {#each [...Array(data.pageNumber).keys()] as page}
			<option>{page+1}</option>
			{/each}
            </select> 
        <span>នៃ {data.pageNumber}</span>
	</div>
</footer>

<style>
    footer{
		margin-top: 10px;
	}
	footer .info{
		background-color: rgb(241, 198, 198);
		text-align: center;
		padding: 5px;
	}
	footer .items{
		display: grid;
		grid-template-columns: auto auto;
		grid-gap: 10px;
		margin-top: 10px;
	}
	footer .items .item{
		background-color: rgb(241, 198, 198);
		display: grid;
		grid-template-columns: 25% auto 20%;
		grid-gap: 10px;
		align-items: center;
	}
	footer .items .item .thumb{
		position: relative;
		padding-top: 56.25%;
		overflow: hidden;
	}
	footer .items .item .thumb img{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		min-height: 100%;
		float: left;
	}
	footer .items .item .thumb .play{
		width: 25%;
		top: 50%;
    	left: 50%;
		min-height: auto;
		transform: translate(-50%,-50%);
	}
	footer .items .item .edit{
    	text-align: right;
    	padding-right: 10px;
   		visibility: hidden;
	}
	footer .items .item .edit img{
		width: 45px;
	}
	footer .items .item:hover .edit{
    	visibility: visible;
	}
	footer .pagination{
		text-align: center;
		margin-top: 20px;
	}

    @media only screen and (max-width: 600px){
        footer .items{
            grid-template-columns: 100%;
        }
        footer .items .item .edit img{
		    width: 35px;
	    }
    }
</style>