<script>

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });
</script>

<style>

/* .brand-logo {
    padding-left: 12px !important;
} */

/* .navColor {
  background: #2B2931 !important;
} */

a:visited {
    color: white;

}
</style>

<!-- <nav class="nav-extended white z-depth-3"> -->
<div class="navbar-fixed">
  <nav class="nav-extended grey darken-4 z-depth-3">
  <!-- <nav class="nav-extended navColor z-depth-3"> -->
  <div class="container">
    <div class="nav-wrapper">
      <!-- <a href="/" class="brand-logo black-text">Shaquille</a> -->
      <a href="/" class="brand-logo">Shaquille</a>
      <a href="#!" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul id="nav-mobile" class="right hide-on-med-and-down ">
        <li><a href="#bio">Bio</a></li>
        <li><a href="badges.html">Gallery</a></li>
        <li><a href="collapsible.html">Listen</a></li>
        <li><a href="collapsible.html">Contact</a></li>
         <!-- <li><a class='black-text' href="sass.html">Bio</a></li>
        <li><a class='black-text' href="badges.html">Gallery</a></li>
        <li><a class='black-text' href="collapsible.html">Listen</a></li>
        <li><a class='black-text' href="collapsible.html">Contact</a></li> -->
      </ul>
    </div>
    </div>
  </nav>
  </div>

  <ul class="sidenav" id="mobile-demo">
     <li><a href="#bio">Bio</a></li>
     <li><a href="badges.html">Gallery</a></li>
     <li><a href="collapsible.html">Listen</a></li>
     <li><a href="collapsible.html">Contact</a></li>
  </ul>
