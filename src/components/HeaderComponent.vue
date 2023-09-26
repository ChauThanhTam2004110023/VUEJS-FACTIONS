<template>
  <div>
    <div class="container">
      <ul class="header-item">
        <ul class="title-logo">
          <li class="header menu">Rivo</li>
        </ul>
        <li class="header" v-for="header in headers" :key="header">
          {{ header }}
        </li>
        <!-- <li class="header">HOME</li>
        <li class="header">SHOP</li>
        <li class="header">FEARURES</li>
        <li class="header">CONTANT</li> -->
        <ul>
          <li class="image">
            <svg
              class="logo-image"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
              />
            </svg>
          </li>
        </ul>
        <li class="logininfo">
          <router-link to="/login">LOGIN</router-link>
        </li>
      </ul>
    </div>
    <div>
      <div class="text-content">
        <ul class="title-content">
          <span class="content">Discover and</span>
          <span class="content">Find Your Own</span>
          <span class="content">Fashion</span>
          <span class="description">
            Explore our curated collection of stylish
          </span>
          <span class="description">
            clothing and accessorles tailored to your
          </span>
          <span class="description">unique taste</span>
          <button class="explore-now">EXPLORE NOW</button>
          <img class="image-faction" src="bg-1.png" alt="image" />
        </ul>
      </div>
    </div>
    <div>
      <ul class="text-content-2">
        <span class="text-content-best-selling-2">Best selling</span>
        <span class="text-content-best-selling-3">
          Get i on the trend with our curated selection of best-selling styles.
        </span>
        <div class="images">
          <div>
            <img class="images two" src="bg-2.png" alt="Image" />
            <img class="price one" src="price-1.png" alt="Image" />
          </div>
          <div>
            <img class="images three" src="bg-3.png" alt="Image" />
            <img class="price two" src="price-2.png" alt="Image" />
          </div>
          <div>
            <img class="images four" src="bg-4.png" alt="Image" />
            <img class="price three" src="price-3.png" alt="Image" />
          </div>
        </div>
      </ul>
    </div>
    <div class="contentdiscription">
      <ul>
        <li class="contentour">Our product</li>
        <li class="contentmenu" @click="filterData('SALE')">SALE</li>
        <li class="contentmenu" @click="filterData('HOT')">HOT</li>
        <li class="contentmenu" @click="filterData('NEW ARRIVALS')">
          NEW ARRIVALS
        </li>
        <li class="contentmenu" @click="filterData('ACCESSORIES')">
          ACCESSORIES
        </li>
      </ul>
      <ul class="images-axios">
        <li v-for="data of datas" :key="data.id">
          <img :src="data.image" alt="image" class="images-data" />
          <p class="descriptions name">{{ data.name }}</p>
          <p class="descriptions price">{{ data.price }}</p>
        </li>
      </ul>
    </div>
    <div class="background-image-by-now">
      <div>
        <img class="image-buy-now" src="image-9.png" alt="Image" />
        <span class="title-but-now">Exclusive offer</span>
        <p class="content-buy-now">
          Unlock the ultimate style upgrade with our exclusive
        </p>
        <p class="content-buy-now">
          offer Enjoy savings of up to 40% off on our latest New
        </p>
        <p class="content-buy-now">Arrivals</p>
        <p class="layout">
          <span class="text">06<br />Day</span>
        </p>
        <p class="layout">
          <span class="text">18<br />Hour</span>
        </p>
        <p class="layout">
          <span class="text">48<br />Min</span>
        </p>
        <button class="button-buy-now">BUY NOW</button>
      </div>
    </div>
    <!-- <div class="contents">
      <div>
        <div>
          <h1 class="designer-clothes-for-you designer-title">
            Designer Clothes For You
          </h1>
          <p class="designer-clothes-for-you">
            Immerse yourself in the world of luxury fashion with our
            meticulously crafted designer clothes
          </p>
          <div class="designers">
            <div>
              <img src="image-10.png" alt="Image" class="image-designer four" />
              <p class="designer-titles">Accessories</p>
              <div>
                <p class="description-designer">
                  Complete your ensemble with designer accessoeles such as
                  handbage, scarves, belts and hats.
                </p>
              </div>
            </div>
            <div>
              <img src="image-11.png" alt="Image" class="image-designer five" />
              <p class="designer-titles">Dresses</p>
              <div>
                <p class="description-designer-1">
                  Explore a stunning range of designer dresses, including,
                  evening gowns and chic day dresses
                </p>
              </div>
            </div>
            <div>
              <img src="image-12.png" alt="Image" class="image-designer six" />
              <p class="designer-titles">Outerwear</p>
              <div>
                <p class="description-designer-2">
                  Browse luxurious designer coats, jackets and blazers to stay
                  stylishly warm during colder seasons
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <div class="footers">
      <div>
        <span class="content1 rivo">RIVO</span>
        <span class="content1">Social Media</span>
        <span class="content2 shop">SHOP</span>
        <span class="content2">Products</span>
        <span class="content2">Overview</span>
        <span class="content2">Pricing</span>
        <span class="content2">Releases</span>
        <span class="content3 company">COMPANY</span>
        <span class="content3">About Us</span>
        <span class="content3">Contant</span>
        <span class="content3">News</span>
        <span class="content3">Support</span>
        <span class="content4">STAY UP TO DATE</span>
        <input
          class="content4 input"
          type="email"
          placeholder="Enter your email"
        /><button class="submit">SUBMIT</button>
        <hr />
        <span class="content5">Terms</span>
        <span class="content5">Privacy</span>
        <span class="content5">Cookies</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datas: [],
      headers: ["HOME", "SHOP", "FEATURES", "CONTACT"],
    };
  },
  created() {
    this.fetchData();
    this.fetchDataProduct();
  },
  methods: {
    fetchData() {
      fetch("http://localhost:3000/datas")
        .then((response) => response.json())
        .then((data) => (this.datas = data));
    },
    fetchDataProduct() {
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => (this.datas = data));
    },
    filterData(category) {
      if (category === "SALE") {
        this.fetchData();
      } else if (category === "HOT") {
        this.fetchDataProduct();
      } else {
        this.datas = this.datas.filter((data) => data.category === category);
      }
    },
  },
};
</script>
<style>
body,
html {
  padding: 0;
  margin: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-content: center;
  overflow-x: hidden;
}
.container {
  position: relative;
  display: flex;
  justify-content: center;
  align-content: center;
  background: #8ae7c8;
}
li {
  position: relative;
  color: #006400;
  margin: 5px 1px;
}
.header-item {
  position: relative;
  list-style: none;
  padding: 0;
  display: flex;
}
.header {
  position: relative;
  margin-right: 60px;
}
.title-logo:not(.header) {
  margin-right: 470px;
}
.header:not(.title-logo) {
  display: flex;
  align-items: center;
  justify-content: center;
}
.menu {
  position: relative;
  font-size: 30px;
  left: 70px;
  font-weight: bold;
}
.image:not(.header) {
  margin-right: 120px;
}
.image {
  position: relative;
  width: 30px;
  right: 10px;
  top: 5px;
  list-style: none;
}
.logininfo a {
  text-decoration: none;
}
.logininfo {
  position: relative;
  right: 100px;
  top: 10px;
  font-weight: bold;
}
.text-content {
  position: relative;
  padding: 0;
  display: flex;
  background-color: #8ae7c8;
  bottom: 150px;
}
.content {
  position: relative;
  display: flex;
  color: #006400;
  font-size: 50px;
  font-weight: bold;
  left: 70px;
  top: 70px;
}
.description {
  position: relative;
  display: flex;
  color: #006400;
  left: 70px;
  top: 100px;
  margin-top: 10px;
}
.explore-now {
  position: relative;
  border: 2px solid transparent;
  padding: 25px;
  top: 150px;
  left: 100px;
  height: 30px;
  color: white;
  background-color: #006400;
  text-align: center;
  line-height: 5px;
  display: flex;
}
.image-faction {
  position: relative;
  width: 500px;
  left: 600px;
  bottom: 300px;
}
.text-content-2 {
  position: relative;
  background: white;
  height: 300px;
}
div {
  margin-bottom: 150px;
}
.image-faction:not(.text-content-best-selling-2) {
  margin-bottom: -200px;
}
.text-content-best-selling-2 {
  position: relative;
  display: flex;
  align-content: center;
  justify-content: center;
  width: 100%;
  font-size: 40px;
  color: #006400;
  bottom: 200px;
}
.text-content-best-selling-3 {
  position: relative;
  display: flex;
  align-content: center;
  justify-content: center;
  color: #006400;
  font-size: 20px;
  bottom: 200px;
}
.text-content-best-selling-2:not(text-content-best-selling-3) {
  margin-bottom: 20px;
}
.images {
  width: 300px;
  display: flex;
  bottom: 120px;
}
.images.two {
  position: relative;
  background: #a8b3a8;
  left: 100px;
}
.images.three {
  position: relative;
  background: #a8b3a8;
  left: 200px;
}
.images.four {
  position: relative;
  background: #a8b3a8;
  left: 300px;
}
.price.one {
  position: relative;
  width: 200px;
  left: 150px;
  bottom: 80px;
}
.price.two {
  position: relative;
  width: 200px;
  left: 250px;
  bottom: 80px;
}
.price.three {
  position: relative;
  width: 170px;
  left: 350px;
  bottom: 80px;
}
.contentour {
  display: flex;
  justify-content: center;
  top: 100px;
  font-size: 30px;
}
.contentmenu {
  position: relative;
  list-style: none;
  display: inline-block;
  justify-content: center;
  top: 140px;
  left: 450px;
  margin-right: 50px;
}
.images-axios {
  position: relative;
  display: grid;
  overflow-x: hidden;
  grid-template-columns: repeat(4, 2fr);
  margin-top: 200px;
  margin-left: 30px;
  align-content: center;
  justify-content: center;
  align-items: center;
  justify-items: center;
}
.images-axios li {
  list-style: none;
  margin-right: 50px;
  margin-bottom: 40px;
}
.contentdisscription {
  max-width: 100%;
  height: 800px;
}
.images-data {
  max-width: 100%;
  width: 200px;
  height: 250px;
  background: #a8b3a8;
}
.descriptions {
  color: black;
  font-weight: bold;
  display: flex;
  align-content: center;
  justify-content: center;
}
.background-image-by-now {
  position: relative;
  width: 1000px;
  height: 400px;
  top: 50px;
  left: 200px;
  background: #c2efd4;
}
.image-buy-now {
  position: relative;
  top: 30px;
  left: 150px;
  width: 300px;
}
.title-but-now {
  position: relative;
  bottom: 300px;
  left: 200px;
  font-size: 30px;
  font-weight: bolder;
  color: #006400;
}
.content-buy-now {
  position: relative;
  bottom: 300px;
  left: 500px;
  color: #006400;
}
.layout {
  position: relative;
  width: 80px;
  height: 80px;
  background: #fff;
  bottom: 300px;
  left: 500px;
  display: inline-block;
  margin-right: 30px;
}
.text {
  position: relative;
  display: flex;
  align-content: center;
  justify-content: center;
  top: 20px;
  font-weight: bold;
  color: #006400;
}
.button-buy-now {
  position: relative;
  bottom: 180px;
  left: 300px;
  padding: 15px 30px;
  background: #006400;
  color: azure;
  border: none;
}
.images-axios:not(.background-image-by-now) {
  margin-bottom: -100px;
}
/* footer */
.container2 {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
}
.footers {
  position: relative;
  background: #224f34;
  color: azure;
  top: 300px;
  max-width: 100%;
}
.rivo {
  position: absolute;
  font-size: 30px;
}
.content1 {
  position: relative;
  display: flex;
  left: 130px;
  top: 80px;
  margin-bottom: 20px;
}
.shop {
  position: absolute;
}
.content2 {
  position: relative;
  display: flex;
  left: 400px;
  margin-bottom: 20px;
}
.content3 {
  position: relative;
  display: flex;
  left: 600px;
  bottom: 190px;
  margin-bottom: 20px;
}
.input {
  position: relative;
  border: 1px solid;
  padding: 5px;
  background: #224f34;
  color: #8ae7c8;
}
input::placeholder {
  color: aliceblue;
}
.content4 {
  position: relative;
  display: flex;
  left: 800px;
  bottom: 380px;
  margin-bottom: 20px;
}
.submit {
  position: relative;
  left: 980px;
  bottom: 427px;
  border: 1px solid #8ae7c8;
  padding: 5px;
  background: #8ae7c8;
}
hr {
  position: relative;
  margin: 0 300px;
  right: 200px;
  bottom: 100px;
  border: 1px solid white;
}
.content5 {
  position: relative;
  bottom: 114px;
  left: 900px;
  margin-right: 30px;
}
/* hover */
.header:hover:not(.header.menu) {
  color: white;
}
.contentmenu {
  cursor: pointer;
}
.designer-clothes-for-you {
  position: relative;
  display: flex;
  align-content: center;
  justify-content: center;
  color: #224f34;
}
.designer-titles {
  position: relative;
  top: 10px;
  right: 5px;
  left: 5px;
  display: flex;
  text-align: center;
  justify-content: center;
  font-weight: bold;
  font-size: 20px;
}
.designer-clothes-for-you:not(.designer-title) {
  margin-bottom: 70px;
}
/* .designers {
  display: flex;
}
.image-designer {
  position: relative;
  width: 300px;
  background: #a8b3a8;
}
.image-designer.four {
  position: relative;
  left: 150px;
}
.image-designer.five {
  position: relative;
  left: 80px;
}
.image-designer.six {
  position: relative;
  left: 30px;
}
.description-designer {
  position: relative;
  width: 250px;
  margin-right: 180px;
  left: 170px;
  display: flex;
  align-content: center;
  justify-content: center;
}
.description-designer-1 {
  position: relative;
  width: 250px;
  margin-right: 180px;
  left: 100px;
  display: flex;
  align-content: center;
  justify-content: center;
}
.description-designer-2 {
  position: relative;
  width: 250px;
  margin-right: 180px;
  left: 80px;
  display: flex;
  align-content: center;
  justify-content: center;
}
.contents:not(.footers) {
  margin-bottom: 300px;
}
.contents {
  height: 300px;
} */
@media (max-width: 800px) {
  .menu {
    left: 245px;
  }
  .header-item {
    flex-direction: column;
  }
  .header-item > li {
    margin: 10px 0;
  }
  .image {
    left: 250px;
  }
  .logininfo {
    left: 290px;
  }
  .content {
    display: flex;
    align-content: center;
    justify-content: center;
  }
  .description {
    display: flex;
    align-content: center;
    justify-content: center;
  }
  .explore-now {
    left: 170px;
  }
  .image-faction {
    left: 100px;
    top: 200px;
    width: 300px;
  }
  .text-content {
    height: 1050px;
  }
  .text-content-2 {
    height: 1500px;
    display: flex;
    flex-direction: column;
    align-content: center;
  }
  .images {
    display: flex;
    flex-direction: column;
    align-content: center;
  }
  .images > div {
    margin: 50px 0;
  }
  .images.three,
  .images.four {
    left: 100px;
  }
  .price.two,
  .price.three {
    left: 140px;
  }
  .contentmenu {
    left: 80px;
  }
  .contentdiscription {
    height: 2900px;
    display: flex;
    flex-direction: column;
    align-content: center;
  }
  .images-axios {
    display: inline-block;
    left: 170px;
  }
  .descriptions.name,
  .descriptions.price {
    position: relative;
    right: 150px;
  }
  .footers {
    display: flex;
    flex-direction: column;
    align-content: center;
  }
  .content1.rivo {
    position: relative;
    display: flex;
    left: 90px;
    top: 20px;
  }
  .content1 {
    position: relative;
    left: 90px;
    top: 10px;
  }
  .content2.shop {
    position: relative;
    display: flex;
    top: 30px;
    left: 90px;
  }
  .content2 {
    position: relative;
    display: inline-block;
    top: 10px;
    left: 90px;
    margin-right: 2%;
  }
  .content3.company {
    position: relative;
    display: flex;
    top: 20px;
    left: 90px;
  }
  .input {
    position: relative;
    left: 90px;
    top: 20px;
  }
  .content3 {
    position: relative;
    display: inline-block;
    top: 50px;
    left: 90px;
    margin-right: 20px;
  }
  .background-image-by-now {
    position: relative;
    top: 200px;
    width: 450px;
    height: 750px;
    left: 120px;
  }
  .image-buy-now {
    position: relative;
    left: 30px;
    top: 30px;
  }
  .title-but-now {
    position: relative;
    top: 100px;
    left: -150px;
    font-size: 20px;
  }
  .content-buy-now {
    position: relative;
    top: 100px;
    left: 50px;
  }
  .layout {
    position: relative;
    left: 50px;
    top: 40px;
  }
  .button-buy-now {
    position: relative;
    left: 150px;
    top: 50px;
  }
  .submit {
    position: relative;
    left: 280px;
    bottom: 27px;
  }
  .designer-clothes-for-you {
    position: relative;
    top: 60px;
  }
}
</style>
