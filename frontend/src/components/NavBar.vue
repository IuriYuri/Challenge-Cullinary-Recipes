<template>
  <nav class="navbar">
    <div class="nav-container">
      <div class="nav-brand">
        <span class="nav-icon">👨‍🍳</span>
        <span class="nav-title">Minhas Receitas</span>
      </div>
      <div class="nav-user">
        <span class="user-greeting">Olá, {{ user.nome }}!</span>
        <button @click="$emit('logout')" class="btn btn-danger btn-sm">
          🚪 Sair
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
defineProps({
  user: {
    type: Object,
    required: true
  }
})

defineEmits(['logout'])
</script>

<style scoped>
.navbar {
  background: white;
  border-bottom: 2px solid #eee;
  padding: 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 10px;
}

.nav-icon {
  font-size: 24px;
}

.nav-title {
  font-size: 20px;
  font-weight: bold;
  color: #333;
}

.nav-user {
  display: flex;
  align-items: center;
  gap: 15px;
}

.user-greeting {
  color: #666;
  font-weight: 500;
}

.btn-sm {
  padding: 8px 16px;
  font-size: 12px;
}

@media (max-width: 768px) {
  .nav-container {
    flex-direction: column;
    gap: 10px;
  }
  
  .user-greeting {
    display: none;
  }
}
</style>