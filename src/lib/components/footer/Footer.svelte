<!-- TODO: Edit svg files to have a <g> and linear gradient -->
 <script lang="ts">
	import GrdDiscord from "./GrdDiscord.svelte";
	import GrdEmail from "./GrdEmail.svelte";
	import GrdFacebook from "./GrdFacebook.svelte";
	import GrdGithub from "./GrdGithub.svelte";
	import GrdInstagram from "./GrdInstagram.svelte";
	import GrdTikTok from "./GrdTikTok.svelte";
	import GrdTumblr from "./GrdTumblr.svelte";
	import GrdTwitter from "./GrdTwitter.svelte";
	import GrdYoutube from "./GrdYoutube.svelte";
 </script>

<footer class="footer">
	<p>
		<a href="https://www.facebook.com/rakadeja" target="_blank" rel="noopener noreferrer">
			<GrdFacebook />
			<!-- <img class="svg-gradient-path" src="/images/svg/logos/bxl-facebook.svg" alt="facebook page" /> -->
		</a>
		<a href="https://twitter.com/rakadeja" target="_blank" rel="noopener noreferrer">
			<GrdTwitter />
			<!-- <img
				class="svg-gradient-path"
				src="/images/svg/logos/bxl-twitter.svg"
				alt="twitter, formally known as X, account"
			/> -->
		</a>
		<a href="https://www.instagram.com/rakadeja/" target="_blank" rel="noopener noreferrer">
			<GrdInstagram />
			<!-- <img
				class="svg-gradient-path"
				src="/images/svg/logos/bxl-instagram.svg"
				alt="instagram page"
			/> -->
		</a>
		<a href="https://www.youtube.com/channel/rakadeja" target="_blank" rel="noopener noreferrer">
			<GrdYoutube />
			<!-- <img
				class="svg-gradient-path"
				src="/images/svg/logos/bxl-youtube.svg"
				alt="youtube channel"
			/> -->
		</a>
		<a href="https://github.com/rakadeja" target="_blank" rel="noopener noreferrer">
			<GrdGithub />
			<!-- <img class="svg-gradient-path" src="/images/svg/logos/bxl-github.svg" alt="github page" /> -->
		</a>
		<a href="https://github.com/rakadeja" target="_blank" rel="noopener noreferrer">
			<GrdDiscord />
			<!-- <img class="svg-gradient-path" src="/images/svg/logos/bxl-discord.svg" alt="discord server" /> -->
		</a>
		<a href="mailto:<EMAIL>">
			<GrdEmail />
			<!-- <img
				class="svg-gradient-path"
				src="/images/svg/solid/bxs-envelope-open.svg"
				alt="send e-mail"
			/> -->
		</a>
	</p>
	<p>2025 - <a href="/">Blue Marten Dev</a>, LLC</p>
</footer>

<style>
	@import url('./footer.css');
</style>
