<script>
    import { onMount } from "svelte";
    import jq from "jquery"
    import Layout from "$lib/components/admin/Layout.svelte"

    export let data
    onMount(()=>{
        const clientId = 'a7cc802dc449fd7'
        let clientSecret = '6b4851c08184f75087776002d617c4c6e2d87317'

        jq('document').ready(function () {
  jq('input[type=file]').on('change', function () {
    var jqfiles = jq(this).get(0).files;

    if (jqfiles.length) {
      // Reject big files
      if (jqfiles[0].size > jq(this).data('max-size') * 1024) {
        console.log('Please select a smaller file');
        return false;
      }

      // Begin file upload
      console.log('Uploading file to Imgur..');

      // Replace ctrlq with your own API key
      var apiUrl = 'https://api.imgur.com/3/image';
      var apiKey = 'a7cc802dc449fd7';

      var settings = {
        async: false,
        crossDomain: true,
        processData: false,
        contentType: false,
        type: 'POST',
        url: apiUrl,
        headers: {
          Authorization: 'Client-ID ' + apiKey,
          Accept: 'application/json',
        },
        mimeType: 'multipart/form-data',
      };

      var formData = new FormData();
      formData.append('image', jqfiles[0]);
      settings.data = formData;

      // Response contains stringified JSON
      // Image URL available at response.data.link
      jq.ajax(settings).done(function (response) {
        console.log(response);
      });
    }
  });
});

    })

</script>

<Layout {data}>
    <section slot="editor">
        <img src="https://i.imgur.com/U7afLiO.png" id="img" height="200px" alt=''>
        <br />
        <input type="file" id="file">
        <br />
        <strong>
            <p id="url"></p>
        </strong>
    </section>
</Layout>

<style>
    section{
        background: rgb(241, 198, 198);
        height: 100%;
    }
</style>