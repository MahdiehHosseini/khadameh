<script setup lang="ts">
import { reactive, ref, defineProps } from 'vue';

import BigButton from '../styled-components/BigButton.vue'

import visable from '../../assets/icons/visable.svg'
import notVisable from '../../assets/icons/notVisable.svg'

import { API_Login_output } from '../../datasource/API/LoginApi'


const props = defineProps<{
    desText: string
}>()

const loginData = reactive<API_Login_output>({
    phoneNumber: null,
    password: ''
})

const passwordVisablity = ref<boolean>(false)

const submitData = () => {
    
}

const togglePasswordVisability = () => passwordVisablity.value = !passwordVisablity.value


</script>


<template>
    <div class="w-full h-full">
        <p class="mb-5 text-sm text-center text-black font-medium">{{ props.desText }}</p>
        <form class="text-black flex flex-col justify-between w-full h-full" @submit.prevent="submitData">
            <span>
                <div class=" flex items-center w-full">
                    <input value="+98" class="bg-transparent focus:outline-none border rounded-lg w-12 text-center mr-1 p-2 font-light text-sm" />
                    <input type="number" v-model="loginData.phoneNumber" class="bg-transparent focus:outline-none border rounded-lg p-2 text-sm font-light w-full" dir="rtl" placeholder="شماره تلفن" />
                </div>
                <div class=" flex items-center w-full mt-3">
                    <span class="border rounded-lg border-r-0 w-12 p-2 rounded-r-0" @click="togglePasswordVisability" >
                        <img alt="visable icon" :src="visable" :class="['opacity-50', 'h-5', { 'hidden': !passwordVisablity}]"/>
                        <img alt="not visable icon" :src="notVisable" :class="['opacity-50', 'h-5', { 'hidden': passwordVisablity}]"/>
                    </span>
                    <input :type="passwordVisablity ? 'text' : 'password'" v-model="loginData.password" class="bg-transparent focus:outline-none border rounded-lg p-2 text-sm font-light border-l-0 rounded-l-0 w-full" dir="rtl" placeholder="رمز عبور" />
                </div>
            </span>
            <BigButton text="تایید" subText="فراموشی رمز عبور" link="/changePassword" />
        </form>
    </div>
</template>