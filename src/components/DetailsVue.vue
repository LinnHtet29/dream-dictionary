<template>
  <div class="bg-white main-con position-relative">
    <router-link to="/">
      <button
        class="bg-white hover:bg-gray-200 active:bg-gray-400 focus:outline-none back-btn"
      >
        နောက်သို့
      </button>
    </router-link>
    <div class="mx-auto max-w-7xl py-0 sm:pt-5 md:pt-24 sm:px-6 lg:px-8 sticky-top top-20">
      <div
        class="relative isolate overflow-hidden bg-gray-900 px-6 py-10 shadow-2xl sm:rounded-3xl sm:px-16 lg:flex lg:gap-x-20 lg:px-24"
        style="min-height: 500px;"
      >
        <section
          class="mx-auto max-w-screen-lg text-center py-10 sm:py-20 lg:py-32 scrolling-touch details-con"
        >
          <article v-if="details.length === 0 && !isNotFound" class="flex justify-center min-w-full">
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
          </article>
          <article
            v-if="isNotFound"
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
      isNotFound: false,
      blogId: Number(this.$route.params.id),
      term: decodeURIComponent(this.$route.params.term),
      details: [],
    };
  },
  created() {
    axios
      .get("/")
      .then((response) => {
        this.details = response.data.BlogDetail.filter((blog) => {
          if (!this.blogId) {
            const result = blog.BlogContent.match(this.term);
            if (result === null) {
              this.isNotFound = true;
            }
            return result;
          }
          return blog.BlogId === this.blogId;
        });
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style scoped>
#body-con {
        overflow: hidden;
      }
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

    @media only screen and (max-width: 982px) {
      .main-con {
  overflow: hidden;
  scroll-behavior: smooth;
  min-height: 100vh;
}
section {
  margin-top: 50px;
  max-height: auto;
  overflow-y: auto;
  min-width: auto;
}
.details-con {
  max-height: 100vh;
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
  top: 20px;
  z-index: 999;
  left: 15px;
  border-radius: 10px;
}
    }
</style>