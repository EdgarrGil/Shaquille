<script>
import Typewriter from 'svelte-typewriter';
// const heroImage = '/Images/1.jpg';
import Gallery from './Gallery.svelte';
</script>




<style>
#landing{
    height: 100vh;
    width: 100vw;
    background-image: url('/Images/2.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    z-index: -1;
}
#landy-text{
    margin: 0;
    padding: 0;
    padding-top: 24vh;
    text-shadow: -10px 19px 7px black;
}
/* 
font-family: 'Space Mono', monospace;
font-family: 'Sigmar One', cursive;
font-family: 'Roboto', sans-serif;
font-family: 'Source Sans Pro', sans-serif;
font-family: 'Cambay', sans-serif;
font-family: 'Noto Sans HK', sans-serif;
font-family: 'Playfair Display', serif; 
*/

.bio {
    margin-top: 90px;
    background: rgba(0, 0, 0, 0.32);
}

p {
     padding: 40px;
     width: 80%;
     margin: 0 auto;
     font-family: 'Space Mono', serif;
     font-size: 1.5em;
     font-weight: lighter;
 }


</style>

   <div id="landing">
    <div class="row">
        <div class="col s12">
            <h1 class="white-text center" id="landy-text">Shaquille</h1>
        </div>
    </div>

    
        <div id="bio" class="row bio">
            <Typewriter interval={30}>
                <p class="white-text opp">
                    As a child Shaquille received prizes for he's innate talent. From a young age he has believed, “You
                    can create anything once you see it in your mind.” he earned  hes respect from he's peer's while at the same time
                    attending collage at Florida A & M University and Master of Landscape Architecture and Urban Planning from Florida
                    State University — with honors. he is also the recipient of various Awards from the Amando Falcon
                    Studio Production in New York.
                </p>
            </Typewriter>
        </div>
    </div>


