<script setup lang="ts">
import slider1 from '@/assets/images/slider1.png'

import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

</script>


<template>
    <section class=" w-full xl:flex justify-center items-center hidden p-1">
        <Carousel :items-to-show="1">
            <Slide v-for="slide in 5" :key="slide">
                <img class="rounded-3xl container h-800px object-cover " width="2304" height="3032" :src="slider1" alt="slider img">
                <span class=" bg-black/25 absolute bottom-2 backdrop-blur-lg left-4 right-4 text-right rounded-2xl p-4">
                    <p class="text-white font-bold text-medium">:امام رضا (ع) میفرمایند</p>
                    <p class="mt-1 font-light text-gray-200 text-base">رحمت خدا بر بنده ای که امر ما را زنده کند، دانش های ما را فرا گیرد و به مردم بیاموزد. اگر مردم زیبایی های سخنان ما را می دانستند از ما پیروی می کردند.(معانی الأخبار، ص ۱۸۰) رحمت خدا بر بنده ای که امر ما را زنده کند، دانش های ما را فرا گیرد و به مردم بیاموزد </p>
                </span>
            </Slide>
            <template #addons>
                <Navigation class="text-white bg-black/25 backdrop-blur-lg rounded-full p-2.5" />
                <!-- <Pagination class="" /> -->
            </template>
        </Carousel>
    </section>
</template>