<!--src/layouts/Header.astro-->
<script>
    export let data
</script>

<svelte:head>
    <title>{data.title}</title>
</svelte:head>

<section class="header">
    <header class='wrapper region'>
        <div class='logo'>
            <a href='/'><img src='/images/siteLogo.png' alt='' /></a>
            <a href='/'>{data.settings.siteTitle}</a>
        </div>
        <form class='search' action="/search?/search" method="post">
            <select name='category'>
                <option>ទាំងអស់</option>
                <option>រឿងខ្មែរ</option>
                <option>រឿងថៃ</option>
                <option>រឿងចិន</option>
                <option>រឿងកូរ៉េ</option>
                <option>ដើរ​​លេង</option>
                <option>ព័ត៌មាន</option>
            </select>
            <input type='text' name='q' placeholder='សរសេរ​ពាក្យ​ត្រូវ​ស្វែងរក...' required />
            <input type='submit' value='ស្វែងរក' /> 
        </form>
        <div class='login'>
            <a href="/admin">ចូល​ក្នុង</a> | <a href="/admin/user">ចុះ​ឈ្មោះ</a>
        </div>
    </header>
</section>

<style>
    .header{
        background: var(--background-dark);
    }
    .wrapper{
        display: grid;
        grid-template-columns: 25% auto 20%;
        align-items: center;
        padding: 10px 0;
    }
    .wrapper .logo{
        display: grid;
        grid-template-columns: 60px auto;
        align-items: center;
        grid-gap: 10px;
    }
    .wrapper .logo img{
        width: 60px;
    }
    .wrapper .logo a{
        font: 40px/1.5 StardosStencul, Limonf3;
        color: white;
    }
    .wrapper .search{
        display: grid;
        grid-template-columns: 70px auto 15%;
    }
    .wrapper .search input, .wrapper .search select{
        font: var(--body-font);
    }
    .wrapper .search [name='q']{
        padding: 0 5px;
    }
    .wrapper .login{
        text-align: right;
        color: white;
    }
    .wrapper .login a{
        color: white;
    }

    @media only screen and (max-width: 600px){
        .wrapper{
            grid-template-columns: 100%;
            padding: 0 10px;
            text-align: center;
        }
        .wrapper .logo{
            grid-template-columns: 100%;
        }
        .wrapper .login{
            text-align: center;
            padding: 10px 0;
        }
    }
</style>