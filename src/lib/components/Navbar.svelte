<script>
	import { page } from '$app/stores';
	import BrandLogo from './BrandLogo.svelte';

	let showMenu = false; // Show/Hide navbar menu

	function toggleNavbar() {
		showMenu = !showMenu; // Hide
	}
</script>

<header>
  <div class="navbar">
    <div class="container">
      <div class="brand-logo">
        <BrandLogo />
      </div>
  
      <nav>
        <ul>
          <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
            <a class:active={$page.url.pathname === '/'} href="/">Home</a>
          </li>
          <li aria-current={$page.url.pathname === '/gallery' ? 'page' : undefined}>
            <a class:active={$page.url.pathname === '/gallery'} href="/gallery">Gallery</a>
          </li>
          <li aria-current={$page.url.pathname === '/projects' ? 'page' : undefined}>
            <a class:active={$page.url.pathname === '/projects'} href="/projects">Projects</a>
          </li>
          <li aria-current={$page.url.pathname.startsWith('/portfolio') ? 'page' : undefined}>
            <a class:active={$page.url.pathname.startsWith('/portfolio')} href="/portfolio"
              >Portfolio</a
            >
          </li>
          <li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
            <a class:active={$page.url.pathname === '/about'} href="/about">About</a>
          </li>
        </ul>
      </nav>
      <!-- <div class="Navbar-toggle" on:click={toggleNavbar}>
        <span>
          <span></span>
          <span>
        </span>
      </div> -->
    </div>
  </div>
</header>

<style>
	@import url('./navbar.css');
</style>
