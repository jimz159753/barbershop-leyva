<template>
  <div>
    <div class="header flex shadow-md w-full">
      <button type="button" class="pin-l absolute bg-grey-darker hover:bg-orange-ligth text-white font-semibold hover:text-white py-2 px-4">
        |||
      </button>
      <button type="button h-btn" class="left-btn absolute bg-grey-darker hover:bg-orange-ligth text-white font-semibold hover:text-black py-2 px-4">left-button</button>
      <button type="button h-btn" class="pin-r absolute bg-grey-darker hover:bg-orange-ligth text-white font-semibold hover:text-black py-2 px-4">right-button</button>
    </div>
    <div class="body">
      <div class="about bg-grey-lightest w-full">
        <div class="info flex justify-center">


          <div class="max-w-md w-full lg:flex h-64">
            <div class="h-full lg:w-1/4 flex-none bg-cover text-center overflow-hidden" style="background-image: url('https://i.pinimg.com/736x/16/4f/a9/164fa9b67254a1cdd0dd041f10848f13--vintage-barber-barbers.jpg')">
            </div>
            <div class="h-full lg:w-1/4 flex-none bg-cover text-center overflow-hidden mx-3" style="background-image: url('https://i.pinimg.com/736x/16/4f/a9/164fa9b67254a1cdd0dd041f10848f13--vintage-barber-barbers.jpg')">
            </div>
            <div class="mb-8">
              <div class="text-black font-bold text-xl mb-2 ml-6"><h1>About us</h1></div>
              <p class="text-grey-darker text-base ml-6 text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
              <button type="button h-btn" class="left-btn bg-grey-darker hover:bg-orange-ligth text-white font-semibold hover:text-black py-2 px-4 ml-6 mt-8">View More</button>
            </div>
        </div>


        </div>
      </div>
      <div class="testimonials bg-white text-center">
        <h1>TESTIMONIALS</h1>
      </div>
      <div class="our-work bg-grey-darker">
        <h1>OUR-WORK</h1>
      </div>
    </div>
    <div class="footer bg-grey-dark">
      <h1>FOOTER</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*HEADER*/
  .header{
    background: linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)), url('http://www.petesbarbershop.net/images/petesshopgold-3.jpg') no-repeat !important;
    height: 600px;
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
    height: 500px;
  }

  .body .info{
    padding-top: 140px;

  }

  .body .testimonials{
    width: 1400px;
    height: 300px;
  }

  .body .our-work{
    width: 1400px;
    height: 300px;
  }
/*BODY*/
/*FOOTER*/
  .footer{
    width: 1400px;
    height: 100px;
  }
/*FOOTER*/
</style>
