<script>
// import anime from 'animejs/lib/anime.es.js';
// anime.set('.set-value-demo .el', {
//   translateX: function() { return anime.random(50, 250); },
//   rotate: function() { return anime.random(0, 360); },
// });

// let t1 = anime.timeline({
//     easing: 'easeOutExpo',
//     duration: 750
// })

// t1.add({
//     targets: 'img',
//     background: 'red'
// })
anime({
    targets: 'img',
    translateX: 250
});

// let t1 = anime.timeline({
//     easing: 'easeOutExpo',
//     duration: 750
// })

// t1.add({
//     targets: 'img',
// 	background: 'red',
// 	width: '500px'
// })

</script>


<style>

/* img {
    position: absolute;
} */
#mainBG {
    height: 500px;
    width: 100%;
    background-image: url('/Images/4.jpg');
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;

}
</style>
 <img src="/Images/3.jpg" width="300px" height="auto" alt="">
<div class="row" id="mainBG">
    <div class="card-image meow">
        <img src="/Images/3.jpg" id="meow1" width="300px" height="auto" alt="">
        <span class="card-title">
        
        </span>
    </div>


       <div class="card-image">
        <img src="/Images/2.jpg" width="300px" height="auto" alt="">
        <span class="card-title">
        
        </span>
    </div>

    

       <div class="card-image">
        <img src="/Images/5.jpg" width="300px" height="auto" alt="">
        <span class="card-title"> 
        
        </span>
    </div>
</div>