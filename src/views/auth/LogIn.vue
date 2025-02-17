<script setup>
    import { reactive } from 'vue';
    import { useRouter } from 'vue-router';
    import {userAuthStore} from '../../stores/authStore'

    import InputText from 'primevue/inputtext';
    import Password from 'primevue/password';
    import Button from 'primevue/button';
    import Card from 'primevue/card';

    const authStore = userAuthStore()
    const router = useRouter()

    const form = reactive({
        email: '',
        password: '',
    });

    const logIn = async () => {
        try {
            console.log("Hola")
            await authStore.logIn(form)
            .finally(router.push('/'))
            
        } catch (error) {
            console.error('Error en el registro:', error);
        }
    }
</script>

<template>
    <div class="flex justify-center items-center min-h-screen bg-gray-100">
        <Card class="w-full max-w-md p-6 shadow-lg">
          <template #title>
            <h2 class="text-xl font-semibold text-gray-800">Registro</h2>
          </template>
          <template #content>
            <form @submit.prevent="logIn" class="flex flex-col gap-4">
              <div class="flex flex-col">
                <label for="email" class="text-sm text-gray-700 mb-1">Correo</label>
                <InputText v-model="form.email" id="email" class="w-full" />
              </div>
              <div class="flex flex-col">
                <label for="password" class="text-sm text-gray-700 mb-1">Contraseña</label>
                <Password v-model="form.password" id="password" class="w-full" toggleMask />
              </div>
              <Button label="Ingresar" type="submit" class="w-full mt-4" />
            </form>
          </template>
        </Card>
      </div>
</template>