<template>
  <div>
    <div class="header shadow-md w-full">
      <button type="button" class="pin-l absolute bg-yellow-darker text-white font-semibold hover:text-black py-2 px-4">
        |||
      </button>
      <button type="button h-btn" class="left-btn absolute bg-yellow-darker text-white font-semibold hover:text-black py-2 px-4">left-button</button>
      <button type="button h-btn" class="pin-r absolute bg-yellow-darker hover:bg-orange-ligth text-white font-semibold hover:text-black py-2 px-4">right-button</button>
    </div>
    <div class="body">
      <div class="about bg-grey-lighter w-full">
        <div class="info flex justify-center">
          <div class="max-w-md w-full lg:flex h-64 shadow-md">
            <div class="h-full lg:w-1/4 flex-none bg-cover text-center overflow-hidden" style="background-image: url('https://i.pinimg.com/736x/16/4f/a9/164fa9b67254a1cdd0dd041f10848f13--vintage-barber-barbers.jpg')">
            </div>
            <div class="h-full lg:w-1/4 flex-none bg-cover text-center overflow-hidden mx-3" style="background-image: url('https://i.pinimg.com/736x/16/4f/a9/164fa9b67254a1cdd0dd041f10848f13--vintage-barber-barbers.jpg')">
            </div>
            <div class="mb-8">
              <div class="text-black font-bold text-xl mb-2 ml-6"><h1>About us</h1></div>
              <p class="text-grey-darker text-base ml-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
              <button type="button h-btn" class="left-btn bg-yellow-darker hover:bg-orange-ligth text-white font-semibold hover:text-black py-2 px-4 ml-6 mt-8">View More</button>
            </div>
        </div>
        </div>
      </div>
      <div class="testimonials shadow-md w-full">
        <h1 class="text-white pt-8 text-center">TESTIMONIALS</h1>
      </div>
      <div class="our-work bg-grey-lightest flex justify-center w-full">
        <div class="w-full">
          <h1 class="text-black pt-8 text-center mb-8 ">OUR-WORK</h1>
          <div class="w-3/4 flex-col mr-auto ml-auto" style="height: 500px">
            <div class="flex w-2/4 works">
              <div class="w-1/4" style="background: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBpP1BXQwO57bt4dEzCVZ8Dzjp87bgr0WVnh8d2MnISQvAx0Ti')"></div>
              <div class="w-1/4" style="background: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBpP1BXQwO57bt4dEzCVZ8Dzjp87bgr0WVnh8d2MnISQvAx0Ti')"></div>
              <div class="w-1/4" style="background: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBpP1BXQwO57bt4dEzCVZ8Dzjp87bgr0WVnh8d2MnISQvAx0Ti')"></div>
              <div class="w-1/4" style="background: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBpP1BXQwO57bt4dEzCVZ8Dzjp87bgr0WVnh8d2MnISQvAx0Ti')"></div>
            </div>
            <div class="flex w-2/4 works">
              <div class="w-1/4" style="background: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBpP1BXQwO57bt4dEzCVZ8Dzjp87bgr0WVnh8d2MnISQvAx0Ti')"></div>
              <div class="w-1/4" style="background: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBpP1BXQwO57bt4dEzCVZ8Dzjp87bgr0WVnh8d2MnISQvAx0Ti')"></div>
              <div class="w-1/4" style="background: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBpP1BXQwO57bt4dEzCVZ8Dzjp87bgr0WVnh8d2MnISQvAx0Ti')"></div>
              <div class="w-1/4" style="background: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBpP1BXQwO57bt4dEzCVZ8Dzjp87bgr0WVnh8d2MnISQvAx0Ti')"></div>
            </div>
          </div>
       </div>
      </div>
      <div class="products bg-grey-lighter flex justify-center w-full">
        <h1 class="text-black pt-8">PRODUCTS</h1>
      </div>
    </div>
    <div class="footer bg-white flex flex-wrap w-full">
      <div id="map" class="maps w-1/2 mr-auto border border-black">
      </div>
      <div class="form w-1/2 ml-auto bg-black flex items-center justify-center">
        <div class="w-64 pb-6">
          <p class="text-white pb-8 font-black text-center text-4xl">Contact:</p>
          <p class="text-white pb-4 pt-4"><icon name="map-marker" class="mr-3" scale="1"></icon> Lorem ipsum dolor sit #3456</p>
          <p class="text-white pb-4"><icon name="address-book" class="mr-2" scale="1"></icon> 331234567</p>
          <p class="text-white pb-4"><icon name="envelope"  class="mr-2" scale="1"></icon> barber@gmail.com</p>
          <div class="w-full h-24 flex items-center justify-center pt-8">
            <p class="text-white pr-8 rounded-full"><icon name="facebook" scale="2"></icon></p>
            <p class="text-white pr-8 rounded-full"><icon name="instagram" scale="2"></icon></p>
            <p class="text-white pr-8 rounded-full"><icon name="youtube" scale="2"></icon></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- <script src="./node_modules/vue-awesome/dist/vue-awesome.js"></script> -->
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAuQZcrK7X53LcFsrLGB4v08kZaFKxNpM4" async defer></script>
<script>
import GoogleMapsLoader from 'google-maps'

export default {
  name: 'Main',
  data () {
    return {
      msg: ''
    }
  },

  mounted: function () {
    GoogleMapsLoader.load(function(google) {
        new google.maps.Map(document.getElementById('map'), {
            center: {lat:20.6725991, lng: -103.434523},
            scrollwheel: false,
            zoom: 15
            })
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*HEADER*/
  .header{
    background: linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)), url('http://www.petesbarbershop.net/images/petesshopgold-3.jpg') no-repeat center center fixed !important;
    background-size: cover;
    height: 600px;
    margin-bottom: 10px;
  }

  .left-btn{
    left: 80px;
  }

/*HEADER*/
/*BODY*/
  .body{
    padding: 0px;

  }

  .body .about{
    height: 600px;
  }

  .body .info{
    padding-top: 150px;

  }

  .body .testimonials{
    background: linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)), url('http://lamodastyle.com/wp-content/uploads/2014/09/Straight-Razor-Shave-Barber-Toledo.jpg') no-repeat center center fixed !important;
    background-size: cover;
    height: 450px;
    margin-bottom: 10px;
  }

  .body .our-work{
    height: 600px;
  }

  .body .works{
    height: 50%;
  }

  .body .products{
    height: 450px;
  }

  .body .map{
    width: 800px;
    height: 600px;
    margin: 0 auto;
    background: gray;
  }
/*BODY*/
/*FOOTER*/
  .footer{
    height: 400px;
  }

/*FOOTER*/
</style>
