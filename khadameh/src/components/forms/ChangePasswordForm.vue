<script setup lang="ts">
import { defineProps } from 'vue';

import TInputOTP from '@@/components/TInputOTP.vue';
import TButton from '@components/TButton.vue';
import TTimer from '@components/TTimer.vue';
import { BaseI18n } from '@repository/I18n';


const props = defineProps(['desText'])

const submitData = () => {
    
}

</script>


<template>
    <div class="w-full h-full">
        <p class="mb-5 text-sm text-center text-black font-medium">{{ props.desText }}</p>
        <form class="text-black flex flex-col justify-between w-full h-5/6" @submit.prevent="submitData">
            <TInputOTP label="کد تایید" type="number" />
            <div class="w-full"> 
                <TButton class="w-full" color="success" btnCorners="curve" size="large" styleType="text" >ارسال کد</TButton>
                <!-- <BaseI18n class="flex items-center justify-center w-full mt-3">
                    <TTimer modelValue="120" />
                    <p class="mr-2.5">تا ارسال مجدد</p>
                </BaseI18n> -->
            </div>
        </form>
    </div>
</template>