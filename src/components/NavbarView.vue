<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div class="container flex-lg-column">
        <a class="navbar-brand mx-lg-auto mb-lg-4" href="#">
          <span class="h3 fw-bold c-white c-black d-block d-lg-none"
            >Anas Abounouar
          </span>
          <img
            src="@/assets/person.jpg"
            alt=""
            class="rounded-circle d-none d-lg-block"
          />
        </a>
        <button
          class="navbar-toggler bg-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span
            class="navbar-toggler-icon d-flex align-items-center justify-content-center"
          ></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto flex-lg-column text-lg-center">
            <li>
              <label>
                <input
                  class="toggle-checkbox"
                  type="checkbox"
                  checked
                  v-model="lol"
                />
                <div class="toggle-switch"></div>
              </label>
            </li>
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="#home"
                @click="closeNavbar"
                >{{ $t("navbar.home") }}</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#services" @click="closeNavbar">{{
                $t("navbar.services")
              }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#work" @click="closeNavbar">{{
                $t("navbar.work")
              }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about" @click="closeNavbar">{{
                $t("navbar.about")
              }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#reviews" @click="closeNavbar">{{
                $t("navbar.reviews")
              }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact" @click="closeNavbar">
                {{ $t("navbar.contact") }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
