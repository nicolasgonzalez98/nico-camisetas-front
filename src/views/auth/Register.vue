<script setup>
  import { reactive } from 'vue';
  import { useRouter } from 'vue-router';

  import InputText from 'primevue/inputtext';
  import Password from 'primevue/password';
  import Button from 'primevue/button';
  import Card from 'primevue/card';

  // Store y router
  const router = useRouter();

  // Formulario reactivo
  const form = reactive({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  });

  // Función de registro
  const register = async () => {
    try {
      await authStore.register(form);
      router.push('/dashboard'); // Redirige tras el registro
    } catch (error) {
      console.error('Error en el registro:', error);
    }
  };
</script>

<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <Card class="w-full max-w-md p-6 shadow-lg">
      <template #title>
        <h2 class="text-xl font-semibold text-gray-800">Registro</h2>
      </template>
      <template #content>
        <form @submit.prevent="register" class="flex flex-col gap-4">
          <div class="flex flex-col">
            <label for="name" class="text-sm text-gray-700 mb-1">Nombre</label>
            <InputText v-model="form.name" id="name" class="w-full" />
          </div>
          <div class="flex flex-col">
            <label for="email" class="text-sm text-gray-700 mb-1">Correo</label>
            <InputText v-model="form.email" id="email" class="w-full" />
          </div>
          <div class="flex flex-col">
            <label for="password" class="text-sm text-gray-700 mb-1">Contraseña</label>
            <Password v-model="form.password" id="password" class="w-full" toggleMask />
          </div>
          <div class="flex flex-col">
            <label for="password_confirmation" class="text-sm text-gray-700 mb-1">Confirmar Contraseña</label>
            <Password v-model="form.password_confirmation" id="password_confirmation" class="w-full" toggleMask />
          </div>
          <Button label="Registrarse" type="submit" class="w-full mt-4" />
        </form>
      </template>
    </Card>
  </div>
</template>





  
  