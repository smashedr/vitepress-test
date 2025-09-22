# Swiper

[Website](https://vitepress-swiper.cssnr.com/) |
[GitHub](https://github.com/cssnr/vitepress-swiper) |
[NPM](https://www.npmjs.com/package/@cssnr/vitepress-swiper)

---

```vue
<VPSwiper
  base-url="https://raw.githubusercontent.com/django-files/repo-images/refs/heads/master/ios-client/docs"
  :number-of-slides="7"
  :breakpoints="{ 1096: { slidesPerView: 3 } }"
  :pagination="{ clickable: true }"
  effect="coverflow"
  :coverflow-effect="{ slideShadows: false }"
  height="496px"
/>
```

<VPSwiper
base-url="https://raw.githubusercontent.com/django-files/repo-images/refs/heads/master/ios-client/docs"
:number-of-slides="7"
:breakpoints="{ 1096: { slidesPerView: 3 } }"
:pagination="{ clickable: true }"
effect="coverflow"
:coverflow-effect="{ slideShadows: false }"
height="496px"
/>
