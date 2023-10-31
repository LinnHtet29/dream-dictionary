<template>
  <div class="bg-white main-con">
    <div class="mx-auto max-w-7xl py-0 md:py-10 sm:px-3 lg:px-8">
      <div
        class="relative isolate overflow-hidden bg-gray-900 px-2 shadow-2xl sm:rounded-3xl sm:px-10 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0"
      >
        <div
          class="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left md:p-5 sm:p-10 p-5"
        >
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            အိပ်မက်အဘိဓာန်
          </h2>
          <p class="mt-6 text-lg leading-8 text-gray-300">
            မြင်ခဲ့သောအိပ်မက်ထဲမှ အဓိက ဇာတ်ကောင်များ (သို့) အရာဝတ္ထုများကို
            မြန်မာစာလုံးပေါင်းဖြင့် အောက်ပါအကွက်လေးထဲ ထည့်ပါ။
          </p>
          <div class="mt-10 flex items-center justify-center w-full">
            <form @submit="searchDetails" method="GET" class="w-full">
              <div class="mt-2.5">
                <input
                  v-model="search"
                  @keyup.enter="searchDetails"
                  type="text"
                  id="search"
                  autocomplete="given-name"
                  class="light-fade px-3 focus:shadow-outline focus:outline-none block w-full rounded-md border border-gray-300 px-3.5 py-2 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm sm:leading-5"
                />
              </div>
            </form>
          </div>
        </div>
        <div class="relative mt-16 h-80 lg:mt-8 right-con flex flex-col justify-center items-center">
          <h3 class="text-white text-center mb-5">
            အက္ခရာအလိုက် အိပ်မက်များကို ကြည့်ရှ့ရန်ရွေးချယ်ပါ။
          </h3>
          <div v-show="blogHeader.length === 0" class="flex justify-center min-w-[600px]">
            <div class="fingerprint-spinner">
              <div class="spinner-ring"></div>
              <div class="spinner-ring"></div>
              <div class="spinner-ring"></div>
              <div class="spinner-ring"></div>
              <div class="spinner-ring"></div>
              <div class="spinner-ring"></div>
              <div class="spinner-ring"></div>
              <div class="spinner-ring"></div>
              <div class="spinner-ring"></div>
            </div>
          </div>
          <div class="flex justify-center flex-wrap gap-4">
            <button
              v-for="(header, index) in blogHeader"
              @click="showDetails(index + 1)"
              :key="index"
              class="light-fade card bg-white hover:bg-gray-200 active:bg-gray-400 focus:outline-none"
            >
              <h3 class="text-center text-gray-900 text-md sm:text-md md:text-2xl">
                {{ header.BlogTitle.substring(2, 4) }}
              </h3>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      blogHeader: [],
      search: "",
    };
  },
  created() {
    axios
      .get("/")
      .then((response) => (this.blogHeader = response.data.BlogHeader))
      .catch((err) => console.log(err));
  },
  methods: {
    showDetails(index) {
      this.$router.push("/details/" + index);
    },
    searchDetails(event) {
      event.preventDefault();
      if(this.search.trim())
      this.$router.push("/" + this.search);
    },
  },
};
</script>

<style scoped>
.main-con {
  overflow: hidden;
}
.card {
  min-width: 100px;
  min-height: 45px;
  border-radius: 10px;
}

.light-fade {
  box-shadow: 0 0 5px #f2f2f2;
}

.right-con {
  max-width: 500px;
  min-width: 500px;
}

.fingerprint-spinner, .fingerprint-spinner * {
      box-sizing: border-box;
    }

    .fingerprint-spinner {
      height: 64px;
      width: 64px;
      padding: 2px;
      overflow: hidden;
      position: relative;
    }

    .fingerprint-spinner .spinner-ring {
      position: absolute;
      border-radius: 50%;
      border: 2px solid transparent;
      border-top-color: #fff;
      animation: fingerprint-spinner-animation 1500ms cubic-bezier(0.680, -0.750, 0.265, 1.750) infinite forwards;
      margin: auto;
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
    }

    .fingerprint-spinner .spinner-ring:nth-child(1) {
      height: calc(60px / 9 + 0 * 60px / 9);
      width: calc(60px / 9 + 0 * 60px / 9);
      animation-delay: calc(50ms * 1);
    }

    .fingerprint-spinner .spinner-ring:nth-child(2) {
      height: calc(60px / 9 + 1 * 60px / 9);
      width: calc(60px / 9 + 1 * 60px / 9);
      animation-delay: calc(50ms * 2);
    }

    .fingerprint-spinner .spinner-ring:nth-child(3) {
      height: calc(60px / 9 + 2 * 60px / 9);
      width: calc(60px / 9 + 2 * 60px / 9);
      animation-delay: calc(50ms * 3);
    }

    .fingerprint-spinner .spinner-ring:nth-child(4) {
      height: calc(60px / 9 + 3 * 60px / 9);
      width: calc(60px / 9 + 3 * 60px / 9);
      animation-delay: calc(50ms * 4);
    }

    .fingerprint-spinner .spinner-ring:nth-child(5) {
      height: calc(60px / 9 + 4 * 60px / 9);
      width: calc(60px / 9 + 4 * 60px / 9);
      animation-delay: calc(50ms * 5);
    }

    .fingerprint-spinner .spinner-ring:nth-child(6) {
      height: calc(60px / 9 + 5 * 60px / 9);
      width: calc(60px / 9 + 5 * 60px / 9);
      animation-delay: calc(50ms * 6);
    }

    .fingerprint-spinner .spinner-ring:nth-child(7) {
      height: calc(60px / 9 + 6 * 60px / 9);
      width: calc(60px / 9 + 6 * 60px / 9);
      animation-delay: calc(50ms * 7);
    }

    .fingerprint-spinner .spinner-ring:nth-child(8) {
      height: calc(60px / 9 + 7 * 60px / 9);
      width: calc(60px / 9 + 7 * 60px / 9);
      animation-delay: calc(50ms * 8);
    }

    .fingerprint-spinner .spinner-ring:nth-child(9) {
      height: calc(60px / 9 + 8 * 60px / 9);
      width: calc(60px / 9 + 8 * 60px / 9);
      animation-delay: calc(50ms * 9);
    }

    @keyframes fingerprint-spinner-animation {
      100% {
        transform: rotate( 360deg );
      }
    }
  @media only screen and (max-width: 1024px) {
    .card {
      min-width: 70px;
      min-height: 45px;
      border-radius: 10px;
    }

    .right-con {
      max-width: 400px;
      min-width: 400px;
      padding-bottom: 20px;
      margin: auto;
    }
  }
  @media only screen and (max-width: 600px) {
    .card {
      min-width: 60px;
      min-height: 45px;
      border-radius: 10px;
    }

    .right-con {
      max-width: 100%;
      min-width: 100%;
      padding-bottom: 20px;
    }
  }
</style>