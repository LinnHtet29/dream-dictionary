<template>
  <div class="bg-white main-con position-relative">
    <router-link to="/">
      <button
        class="bg-white hover:bg-gray-200 active:bg-gray-400 focus:outline-none back-btn"
      >
        နောက်သို့
      </button>
    </router-link>
    <div class="mx-auto max-w-7xl py-24 sm:px-6 lg:px-8">
      <div
        class="relative isolate overflow-hidden bg-gray-900 px-6 py-10 shadow-2xl sm:rounded-3xl sm:px-16 lg:flex lg:gap-x-20 lg:px-24"
        style="min-height: 500px"
      >
        <section
          class="mx-auto max-w-screen-lg text-center lg:py-32 scrolling-touch details-con"
        >
          <article
            v-if="details.length === 0"
            class="shadow-lg bg-white text-black w-full rounded-2xl my-3 px-5 mx-auto"
          >
            <div class="px-6 py-4">
              <p class="text-base text-dark">ကိုက်ညီသောရလဒ် မတွေ့ရှိပါ။</p>
            </div>
          </article>
          <article
            v-for="(detail, index) in details"
            :key="index"
            class="shadow-lg bg-white text-black w-full rounded-2xl my-3 px-5 mx-auto"
          >
            <div class="px-6 py-4">
              <p class="text-base text-dark">
                {{ detail.BlogContent }}
              </p>
            </div>
          </article>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      blogId: Number(this.$route.params.id),
      term: decodeURIComponent(this.$route.params.term),
      details: [],
    };
  },
  created() {
    axios
      .get("/")
      .then((response) => {
        console.log(response);
        this.details = response.data.BlogDetail.filter((blog) => {
          if (!this.blogId) {
            return blog.BlogContent.match(this.term);
          }
          return blog.BlogId === this.blogId;
        });
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style scoped>
.main-con {
  overflow: hidden;
  scroll-behavior: smooth;
}
section {
  max-height: 700px;
  overflow-y: auto;
  min-width: 800px;
}
section::-webkit-scrollbar {
  display: none;
}
.details-con {
  max-height: 410px;
}
article {
  max-width: 700px;
  transition: transform ease-in-out 0.3s;
}
article:hover {
  transform: scale(1.1);
}
.back-btn {
  position: fixed;
  padding: 10px 15px;
  background: white;
  top: 120px;
  z-index: 999;
  left: 59px;
  border-radius: 10px;
}
</style>