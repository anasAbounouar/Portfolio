<template>
  <div class="" data-bs-spy="scroll" data-bs-target=".navbar">
    <!-- end navbar  -->
    <!-- content wrapper  -->
    <div class="content-wrapper">
      <!-- start home  -->
      <section id="home" class="full-height px-lg-5">
        <div class="container">
          <div class="row align-items-center justify-content-center">
            <div class="col-lg-8 m-auto">
              <h1
                class="fw-bold c-white display-4 text-uppercase text-left"
                data-aos="fade-up"
                v-html="$t('home.title')"
              ></h1>
              <p class="lead text-left" data-aos="fade-up" data-aos-delay="100">
                {{ $t("home.subtitle") }}
              </p>
              <div class="d-flex align-items-center">
                <a
                  href="#work"
                  class="btn-brand btn me-3 text-left"
                  data-aos="fade-up"
                  data-aos-delay="150"
                >
                  {{ $t("home.explore") }}
                </a>
                <a
                  href="#home"
                  class="link-custom mobile p-relative"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  >{{ $t("home.call") }}</a
                >
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- end home  -->
      <!-- start services  -->
      <section id="services" class="px-lg-5 full-height">
        <div class="container">
          <div class="row">
            <div class="col-9">
              <span class="text-brand fw-bold d-flex" data-aos="fade-up"
                >Services</span
              >
              <h2 class="fw-bold d-flex" data-aos="fade-up">
                {{ $t("services.title") }}
              </h2>
            </div>
          </div>
          <div class="row mt-3 g-4">
            <div class="col-md-4">
              <div
                class="box shadow-effect p-relative bg-base rad-10 p-3"
                data-aos="flip-left"
                data-aos-delay="200"
              >
                <div class="p-2 mt-2 rad-10">
                  <i class="fa-solid fa-pen-fancy"></i>
                </div>
                <h5 class="p-2 mt-2 text-left d-flex">
                  {{ $t("services.uiux") }}
                </h5>
                <p class="p-2 text-left">
                  {{ $t("services.uiuxText") }}
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div
                class="box shadow-effect p-relative bg-base rad-10 p-3"
                data-aos="flip-left"
                data-aos-delay="200"
              >
                <div class="p-2 mt-2 rad-10">
                  <i class="fa-solid fa-pen-ruler"></i>
                </div>
                <h5 class="p-2 mt-2 text-left d-flex">
                  {{ $t("services.frontend") }}
                </h5>
                <p class="p-2 text-left">
                  {{ $t("services.frontendText") }}
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div
                class="box shadow-effect p-relative bg-base rad-10 p-3"
                data-aos="flip-right"
                data-aos-delay="200"
              >
                <div class="p-2 mt-2 rad-10">
                  <i class="fa-solid fa-code"></i>
                </div>
                <h5 class="p-2 mt-2 text-left d-flex">
                  {{ $t("services.projectManagement") }}
                </h5>
                <p class="p-2 text-left">
                  {{ $t("services.projectManagementText") }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- end services  -->
      <!-- start work  -->
      <section id="work" class="px-lg-5 full-height">
        <div class="container">
          <div class="row">
            <div class="col-9">
              <span class="text-brand fw-bold d-flex text-left text-uppercase">
                {{ $t("work.work") }}
              </span>
              <h2 class="fw-bold d-flex text-left">
                {{ $t("work.title") }}
              </h2>
            </div>
          </div>
          <div class="row mt-3 g-4 equal-height">
            <!-- Project 1: Innovation and Technology Transfer Center -->
            <div class="col-lg-4 col-md-6">
              <div
                class="box shadow-effect p-relative bg-base rad-10"
                data-aos="fade-up-right"
              >
                <div class="image-container">
                  <img
                    src="@/assets/ferme2.png"
                    alt="Innovation and Technology Transfer Center"
                    class="img-fluid rad-10 bg-white"
                  />
                </div>
                <h6 class="fw-bold p-1 ms-2 mt-3">
                  {{ $t("work.project1") }}
                </h6>
                <p class="p-1 ms-2 text-left">
                  {{ $t("work.project1Text") }}
                </p>
              </div>
            </div>
            <!-- Project 2: Online Library -->
            <div class="col-lg-4 col-md-6">
              <div
                class="box shadow-effect p-relative bg-base rad-10 p-3"
                data-aos="fade-up-left"
                data-aos-delay="200"
              >
                <div class="image-container">
                  <img
                    src="@/assets/library.jpg"
                    alt="Online Library"
                    class="img-fluid rad-10"
                  />
                </div>
                <h6 class="fw-bold p-1 ms-2 mt-3">
                  {{ $t("work.project2") }}
                </h6>
                <p class="p-1 ms-2 text-left">
                  {{ $t("work.project2Text") }}
                </p>
              </div>
            </div>
            <!-- Project 3: Car Parts E-commerce -->
            <div class="col-lg-4 col-md-6">
              <div
                class="box shadow-effect p-relative bg-base rad-10 p-3"
                data-aos="fade-up"
              >
                <img
                  src="@/assets/supra.jpg"
                  alt="Car Parts E-commerce"
                  class="img-fluid rad-10"
                />
                <h6 class="fw-bold p-1 ms-2 mt-3">
                  {{ $t("work.project3") }}
                </h6>
                <p class="p-1 ms-2 text-left">
                  {{ $t("work.project3Text") }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- end  work  -->
      <!-- start about  -->
      <section id="about" class="px-lg-5 full-height">
        <div class="container">
          <div class="row mb-3">
            <div class="col-9 mt-0">
              <span class="text-brand fw-bold d-flex text-left text-uppercase">
                {{ $t("navbar.about") }}
              </span>
              <h2 class="fw-bold display-6 d-flex text-left">
                {{ $t("about.title") }}
              </h2>
            </div>
          </div>
          <div class="row g-4">
            <div class="col-lg-6">
              <h3 class="ms-2 text-left">
                {{ $t("about.education") }}
              </h3>
              <div class="row">
                <div
                  v-for="(education, index) in Educations"
                  :key="index"
                  class="col-12 mt-3"
                >
                  <div
                    class="box shadow-effect p-relative bg-base rad-10 p-3"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <h5 class="">
                      {{ education.title }}
                    </h5>
                    <span class="text-brand"> {{ education.source }}</span>
                    <p class="text-left">
                      {{ education.text }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <h3 class="ms-2 mt-lg-0 mt-sm-3 text-left">Experience</h3>
              <div class="row">
                <div
                  v-for="(experience, index) in Experiences"
                  :key="index"
                  class="col-12 mt-3"
                >
                  <div
                    class="box shadow-effect p-relative bg-base rad-10 p-3"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <h5 class="">
                      {{ experience.title }}
                    </h5>
                    <span class="text-brand"> {{ experience.source }}</span>
                    <p class="text-left">
                      {{ experience.text }}
                    </p>
                  </div>
                </div>
                <!-- <div class="col-12 mt-3">
                                    <div
                                        class="box shadow-effect p-relative bg-base rad-10 p-3"
                                        data-aos="fade-up"
                                        data-aos-delay="200"
                                    >
                                        <h5>Web Developer Intern</h5>
                                        <span class="text-brand"
                                            >Innovation and Technology Transfer
                                            Center</span
                                        >
                                        <span class="text-brand"
                                            >(2-month internship in 2023)</span
                                        >
                                        <p>
                                            I had the opportunity to develop a
                                            web application from scratch. I
                                            received an excellent grade for my
                                            work, which involved creating a
                                            dynamic and efficient web solution
                                            to digitize the infrastructure.
                                        </p>
                                    </div>
                                </div> -->
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- end about  -->
      <!-- start reviews  -->
      <section id="reviews" class="px-lg-5 full-height">
        <div class="container">
          <div class="row">
            <div class="col-9">
              <span class="text-brand fw-bold text-left d-flex">
                {{ $t("navbar.reviews") }}
              </span>
              <h2 class="fw-bold text-left d-flex">
                {{ $t("reviews.title") }}
              </h2>
            </div>
          </div>
          <div class="row mt-3 g-4">
            <div class="col-lg-4">
              <a
                href="https://www.fiverr.com/anasabun78?up_rollout=true"
                target="_blank"
              >
                <div
                  class="box p-3 pb-1 shadow-effect p-relative bg-base rad-10"
                  data-aos="fade-up-right"
                >
                  <div class="">
                    <i class="fa-solid fa-star text-brand"></i>
                    <i class="fa-solid fa-star text-brand"></i>
                    <i class="fa-solid fa-star text-brand"></i>
                    <i class="fa-solid fa-star text-brand"></i>
                    <i class="fa-solid fa-star text-brand"></i>
                  </div>
                  <p class="">
                    {{ $t("reviews.review1") }}
                  </p>
                  <h5 class="">lldonvitoll</h5>
                  <p class="">Fiverr</p>
                </div>
              </a>
            </div>
            <div class="col-lg-4">
              <a
                href="https://www.fiverr.com/anasabun78?up_rollout=true"
                target="_blank"
              >
                <div
                  class="box p-3 pb-1 shadow-effect p-relative bg-base rad-10"
                  data-aos="fade-up-left"
                >
                  <div class="">
                    <i class="fa-solid fa-star text-brand"></i>
                    <i class="fa-solid fa-star text-brand"></i>
                    <i class="fa-solid fa-star text-brand"></i>
                    <i class="fa-solid fa-star text-brand"></i>
                    <i class="fa-solid fa-star text-brand"></i>
                  </div>
                  <p class="">
                    {{ $t("reviews.review2") }}
                  </p>
                  <h5 class="">ludovic24</h5>
                  <p class="">Fiverr</p>
                </div>
              </a>
            </div>
            <div class="col-lg-4">
              <div
                class="box p-3 pb-1 shadow-effect p-relative bg-base rad-10"
                data-aos="fade-up"
              >
                <a
                  href="https://www.linkedin.com/feed/update/urn:li:activity:7103730103452327936/"
                  target="_blank"
                >
                  <div class="">
                    <i class="fa-solid fa-star text-brand"></i>
                    <i class="fa-solid fa-star text-brand"></i>
                    <i class="fa-solid fa-star text-brand"></i>
                    <i class="fa-solid fa-star text-brand"></i>
                    <i class="fa-solid fa-star text-brand"></i>
                  </div>
                  <p class="">
                    {{ $t("reviews.review3") }}
                  </p>
                  <h5 class="">Youness Jnaoui</h5>
                  <p class="">(AITTC - UM6P)</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- end reviews  -->
      <!-- start contact  -->
      <section id="contact" class="px-lg-5">
        <div class="container text-center">
          <div class="row align-items-center justify-content-center mb-4">
            <div class="col-10">
              <span class="text-brand fw-bold mt-0 mb-3">CONTACT </span>
            </div>
            <div class="col-10 col-md-8">
              <h1 class="">
                {{ $t("contact.title") }}
              </h1>
            </div>
          </div>
          <div class="row mb-3 align-items-center justify-content-center">
            <div class="col-3">
              <a
                href="mailto:anass.abounouar@gmail.com"
                target="_blank"
                class="btn-brand btn cursive me-3 me-3"
                data-aos="fade-up"
                data-aos-delay="150"
                >Contact</a
              >
            </div>
          </div>
        </div>
      </section>
      <!-- end contact  -->
      <!-- start footer  -->
      <footer>
        <div class="container">
          <div class="row justify-content-space-between align-items-center">
            <div class="col-md-6 col-sm-12 align-small">
              <!-- <p class="p-3">Designed by  <span class="fw-bold text-brand">Abounouar</span>  </p> -->
            </div>
            <div
              class="col-md-6 col-sm-12 align-small d-flex justify-content-flex-end p-3"
            >
              <div>
                <a href="https://web.facebook.com/?_rdc=1&_rdr" target="_blank"
                  ><i class="fa-brands fa-facebook-f c-white"></i
                ></a>
              </div>
              <div>
                <a href="https://wa.me/2120688698494" target="_blank"
                  ><i class="fa-brands fa-whatsapp c-white"></i
                ></a>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/in/anas-abounouar-a7b616248/"
                  target="_blank"
                  ><i class="fa-brands fa-linkedin c-white"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <!-- end footer  -->
    </div>
    <!--  endcontent wrapper  -->
  </div>
</template>
<script>
import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "../App.vue";
const app = createApp(App);

// Use the i18n plugin
app.use(createI18n);
// Vue.use(VueI18n);
export default {
  name: "HomeView",
  data() {
    return {
      lol: "true",
    };
  },
  methods: {
    switchLanguage(locale) {
      this.$i18n.locale = locale;
    },
    closeNavbar() {
      // Check if the navigation bar is open (for smaller screens)
      const navbarToggler = document.querySelector(".navbar-toggler");
      if (
        navbarToggler &&
        window.getComputedStyle(navbarToggler).display !== "none"
      ) {
        // If it's open, programmatically click the toggle button to close it
        navbarToggler.click();
      }
    },
    updateLang() {
      this.lol === true ? this.switchLanguage("en") : this.switchLanguage("fr");
    },
  },
  watch: {
    lol() {
      this.updateLang();
    },
  },
  computed: {
    Experiences() {
      return [
        {
          title: this.$t("about.freelance"),
          source: "Fiverr",
          text: this.$t("about.freelanceText"),
        },
        {
          title: this.$t("about.internship"),
          source: this.$t("about.internshipSource"),
          text: this.$t("about.internshipText"),
        },
      ];
    },
    Educations() {
      return [
        {
          title: this.$t("about.preparatoryClasses"),
          source: "Ibn Timiya - Marrakech (2020 - 2022)",
          text: this.$t("about.preparatoryClassesText"),
        },
        {
          title: this.$t("about.softwareEngineering"),
          source: this.$t("about.inpt"),
          text: this.$t("about.softwareEngineeringText"),
        },
      ];
    },
  },
};
</script>
<style lang="scss">
.navbar {
  /* Add your box shadow properties here */

  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Example box shadow values */
}
p {
  color: #b6cbce;
}
#services {
  i {
    color: white;
  }
}
.toggle-switch {
  background-color: #ccc;
  width: 78px;
  height: 32px;
  border-radius: 16px;
  position: relative;
  transition: 0.3s;
  cursor: pointer;
}
.toggle-checkbox {
  -webkit-appearance: none;
  appearance: none;
  display: none;
}
.toggle-checkbox:checked + .toggle-switch {
  background-color: #0075ff;
}
.toggle-checkbox:checked + .toggle-switch::before {
  content: "En";
  left: 50px;
  color: var(--blue-color);
}
.toggle-switch::before {
  // font-family: "Font Awesome 6 Free";
  content: "Fr";
  // font-weight: 900;
  background-color: white;
  width: 24px;
  height: 24px;
  position: absolute;
  border-radius: 50%;
  top: 4px;
  left: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #aaa;
  transition: 0.3s;
}
.box {
  transition: 0.4s !important;
}
.equal-height {
  display: flex;
  flex-wrap: wrap;
}

.equal-height > [class*="col-"] {
  display: flex;
  flex-direction: column;
}

.equal-height .box {
  flex: 1;
}
</style>
