<template>
  <div class="bg-white main-con">
    <div class="mx-auto max-w-7xl py-24 sm:px-6 lg:px-8">
      <div
        class="relative isolate overflow-hidden bg-gray-900 px-6 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0"
      >
        <div
          class="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left"
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
        <div class="relative mt-16 h-80 lg:mt-8 right-con">
          <h3 class="text-white text-center mb-5">
            အက္ခရာအလိုက် အိပ်မက်များကို ကြည့်ရှ့ရန်ရွေးချယ်ပါ။
          </h3>
          <div class="flex justify-center flex-wrap gap-4">
            <button
              v-for="(header, index) in blogHeader"
              @click="showDetails(index + 1)"
              :key="index"
              class="light-fade card bg-white hover:bg-gray-200 active:bg-gray-400 focus:outline-none"
            >
              <h3 class="text-center text-gray-900 text-2xl">
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
}
</style>