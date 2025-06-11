<template>
  <div class="auth-container">
    <div class="auth-card">
      <div class="auth-header">
        <div class="auth-icon">👨‍🍳</div>
        <h2>{{ isLogin ? 'Entrar na sua conta' : 'Criar nova conta' }}</h2>
      </div>
      
      <form @submit.prevent="handleSubmit" class="auth-form">
        <div v-if="!isLogin" class="form-group">
          <label class="form-label">Nome</label>
          <input
            v-model="form.nome"
            type="text"
            class="form-input"
            placeholder="Seu nome completo"
            required
          />
        </div>
        
        <div class="form-group">
          <label class="form-label">Login</label>
          <input
            v-model="form.login"
            type="text"
            class="form-input"
            placeholder="Seu login"
            required
          />
        </div>
        
        <div class="form-group">
          <label class="form-label">Senha</label>
          <input
            v-model="form.senha"
            type="password"
            class="form-input"
            placeholder="Sua senha"
            required
          />
        </div>
        
        <div v-if="error" class="error-message">
          {{ error }}
        </div>
        
        <button type="submit" class="btn btn-primary btn-full">
          {{ isLogin ? 'Entrar' : 'Cadastrar' }}
        </button>
        
        <button
          type="button"
          @click="toggleMode"
          class="btn-link"
        >
          {{ isLogin ? 'Não tem conta? Cadastre-se' : 'Já tem conta? Entre' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import api from '../services/api' // certifique-se de ter este módulo configurado

const emit = defineEmits(['login', 'register'])

const isLogin = ref(true)
const error = ref('')
const form = ref({
  nome: '',
  login: '',
  senha: ''
})

const toggleMode = () => {
  isLogin.value = !isLogin.value
  error.value = ''
  form.value = { nome: '', login: '', senha: '' }
}

const handleSubmit = () => {
  if (isLogin.value) {
    login()
  } else {
    register()
  }
}

const login = async () => {
  try {
    const response = await api.post('/usuarios/login', {
      login: form.value.login,
      senha: form.value.senha
    })

    const { token, usuario } = response.data
    sessionStorage.setItem('token', token)
    sessionStorage.setItem('currentUser', JSON.stringify(usuario))
    emit('login', usuario)

    error.value = ''
  } catch (err) {
    error.value = err.response?.data?.erro || 'Erro ao fazer login'
  }
}

const register = async () => {
  try {
    const response = await api.post('/usuarios/registrar', {
      nome: form.value.nome,
      login: form.value.login,
      senha: form.value.senha
    })

    const { token, usuario } = response.data
    sessionStorage.setItem('token', token)
    sessionStorage.setItem('currentUser', JSON.stringify(usuario))
    emit('register', usuario)

    error.value = ''
  } catch (err) {
    error.value = err.response?.data?.erro || 'Erro ao cadastrar'
  }
}
</script>

<style scoped>
.auth-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
}

.auth-card {
  background: white;
  border-radius: 12px;
  padding: 40px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.auth-header {
  text-align: center;
  margin-bottom: 30px;
}

.auth-icon {
  font-size: 48px;
  margin-bottom: 15px;
}

.auth-header h2 {
  color: #333;
  font-size: 24px;
  font-weight: 600;
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.btn-full {
  width: 100%;
  padding: 15px;
  font-size: 16px;
}

.btn-link {
  background: none;
  border: none;
  color: #ff6b35;
  cursor: pointer;
  font-size: 14px;
  text-align: center;
  padding: 10px;
  text-decoration: underline;
}

.btn-link:hover {
  color: #e55a2b;
}
</style>