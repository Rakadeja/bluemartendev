<script>
    import github from '../lib/images/svg/logos/bxl-github.svg';
    import instagram from '../lib/images/svg/logos/bxl-instagram.svg';
    import twitter from '../lib/images/svg/logos/bxl-twitter.svg';
    import facebook from '../lib/images/svg/logos/bxl-facebook.svg';
    import youtube from '../lib/images/svg/logos/bxl-youtube.svg';
    import mail from '../lib/images/svg/solid/bxs-envelope-open.svg';
    import discord from '../lib/images/svg/logos/bxl-discord.svg';
</script>

<style>
	@import url('../styles/footer.css');
</style>

<!-- TODO: Edit svg files to have a <g> and linear gradient -->

<footer>
    <p>
        <a href="https://www.facebook.com/rakadeja">
            <img class="svg-gradient-path" src={facebook} alt="facebook page" />
        </a>
        <a href="https://twitter.com/rakadeja">
            <img class="svg-gradient-path" src={twitter} alt="twitter, formally known as X, account" />
        </a>
        <a href="https://www.instagram.com/rakadeja/">
            <img class="svg-gradient-path" src={instagram} alt="instagram page" />
        </a>
        <a href="https://www.youtube.com/channel/rakadeja">
            <img class="svg-gradient-path" src={youtube} alt="youtube channel" />
        </a>
        <a href="https://github.com/rakadeja">
            <img class="svg-gradient-path" src={github} alt="github page" />
        </a>
        <a href="https://github.com/rakadeja">
            <img class="svg-gradient-path" src={discord} alt="discord server" />
        </a>
        <a href="mailto:<EMAIL>">
            <img class="svg-gradient-path" src={mail} alt="send e-mail" />
        </a>
    </p>
    <p>2023 - <a href="/">Blue Marten</a>, LLC</p>
</footer>