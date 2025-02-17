<script setup>
import { userAuthStore } from '@/stores/authStore';
import Button from 'primevue/button';
import { useRouter } from 'vue-router';

const router = useRouter()
const authStore = userAuthStore()

const logOut = async () => {
    try {
      await authStore.logOut();
      router.push('/login');
    } catch (error) {
      console.error('Error en el registro:', error);
    }
  };

</script>

<template>
    <h1>Home</h1>

    <Button @click="logOut()">log Out</Button>
</template>