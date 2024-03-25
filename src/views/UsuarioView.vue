<template>
    <div class="about">
      <h1>Welcome {{ nome }}</h1>
      <input type="text" :value="nome" @input="mudouTexto" />
      <input type="password" :value="senha"  />
      <p v-if="nome.length > 10">Nome loongo!</p>
      <p v-else>Nome curto!</p>
      <button @click="buscarUsuarios">Atualizar</button>
      <button @click="novoUsuario">Cadastrar</button>
      <p v-if="erro"> {{ erro }}</p>
      <CustomTable :usuarios="usuarios" />
    </div>
  </template>
   
  <script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import CustomTable from '@/components/CustomTable.vue';
  import axios from 'axios';
   
  const nome = ref("Teste");
  const senha = ref("senha");
  const usuarios = ref([{ id: 1, nome: "Ana" }, { id: 2, nome: "Carolina" }]);
  const erro = ref("");
   
  async function buscarUsuarios() {
    try{
        usuarios.value = (await axios.get('usuario')).data;
    }
    catch (e){
        erro.value = (e as Error).message
    }
    
  }
   
  async function novoUsuario() {
    try {
        usuarios.value.push((await axios.post('usuario', { nome: nome.value, senha: senha.value})).data);
    }
    catch (e) {
        erro.value = (e as Error).message

    }
  }
   
  function mudouTexto(e: any) {
    nome.value = e.target.value;
  }
   
  onMounted(() => {
    buscarUsuarios();
  })
   
  </script>
   
  tem menu de contexto