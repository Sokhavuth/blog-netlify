<script>
	import { onMount } from 'svelte'
	import Header from "$lib/components/admin/Header.svelte"
	import Footer from "$lib/components/Footer.svelte"
	export let data
</script>

<section class="Admin">
	<Header user={data.user} />
	<main class="region">
		<div class="wrapper">
			<aside>
				<div class='inner'>
				<a href="/amin/post"><img src="/images/movie.png" alt='' /></a>
					<a href="/admin/post">ការផ្សាយ</a>
					<a href="/amin/category"><img src="/images/category.png" alt='' /></a>
					<a href="/admin/category">ជំពូក</a>
					<a href="/amin/page"><img src="/images/page.png" alt=''/></a>
					<a href="/admin/page">ទំព័រ​ស្តាទិក</a>
					<a><img src="/images/upload.png" alt='' /></a>
					<a>Upload</a>
					<a href="/amin/user"><img src="/images/users.png" alt='' /></a>
					<a href="/admin/user">អ្នក​និពន្ធ</a>
					<a href="/amin/setting"><img src="/images/setting.png" alt='' /></a>
					<a href="/admin/setting">Setting</a>
				</div>
			</aside>
			<div>
				<slot name="editor">
					Editor
				</slot>
			</div>
		</div>
		<slot name="items" />
	</main>
	<Footer />
</section>

<style>
	.Admin main{
		margin-top: 10px;
	}
	.Admin main .wrapper{
		display: grid;
		grid-template-columns: 25% auto;
		grid-gap: 10px;
	}
	.Admin main .wrapper aside, 
	.Admin main .wrapper aside .inner{
		background-color: rgb(241, 198, 198);
	}
	.Admin main .wrapper aside .inner{
		display: grid;
		grid-template-columns: 20% auto;
		align-items: center;
		grid-gap: 20px 10px;
		padding: 15px;
	}
	.Admin main .wrapper aside img{
		width: 100%;
		float: left;
	}
	.Admin main .wrapper aside a{
		font: 18px/1.5 Oswald, Bayon;
		
	}

	@media only screen and (max-width: 600px){
		.Admin{
			padding: 10px;
		}
		.Admin main .wrapper{
			grid-template-columns: 100%;
		}
	}
</style>