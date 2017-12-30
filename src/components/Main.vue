<template>
  <div>
    <div class="header shadow-md w-full">
      <button type="button" class="pin-l absolute bg-grey-darker hover:bg-orange-ligth text-white font-semibold hover:text-white py-2 px-4">
        |||
      </button>
      <button type="button h-btn" class="left-btn absolute bg-grey-darker hover:bg-orange-ligth text-white font-semibold hover:text-black py-2 px-4">left-button</button>
      <button type="button h-btn" class="pin-r absolute bg-grey-darker hover:bg-orange-ligth text-white font-semibold hover:text-black py-2 px-4">right-button</button>
    </div>
    <div class="body">
      <div class="about bg-grey-lightest w-full">
        <div class="info flex justify-center">


          <div class="max-w-md w-full lg:flex h-64 shadow-md">
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
      <div class="testimonials flex justify-center w-full">
        <h1 class="text-white pt-8">TESTIMONIALS</h1>
      </div>
      <div class="our-work bg-white flex justify-center w-full">
        <h1 class="text-black pt-8">OUR-WORK</h1>
      </div>
      <div class="products bg-black flex justify-center w-full">
        <h1 class="text-white pt-8">PRODUCTS</h1>
      </div>
    </div>
    <div class="footer bg-white flex flex-wrap w-full">
      <div class="maps w-1/2 mr-auto border-r-2 border-black">
        <h1>MAP</h1>
      </div>
      <div class="form w-1/2 ml-auto border-l-2 border-black">
        <h1>FORM</h1>
      </div>
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
  }

  .body .our-work{
    height: 450px;
  }

  .body .products{
    height: 450px;
  }
/*BODY*/
/*FOOTER*/
  .footer{
    height: 350px;
  }
/*FOOTER*/
</style>
