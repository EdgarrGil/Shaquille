<script>
import NavBar from './comp/Navbar.svelte';
import Hero from './comp/Hero.svelte';
import Gallery from './comp/Gallery.svelte';

</script>

<style>
.noPadding{padding: 0 !important;}
</style>

<div class="row">
    <div class="col l12 noPadding">
        <NavBar/>
        <Hero/>
        <Gallery/>
    </div>
</div>
