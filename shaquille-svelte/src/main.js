import App from './App.svelte';
import NavBar from './comp/Navbar.svelte';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js';




const app = new App({
	target: document.body
});



window.app = app;

export default app;