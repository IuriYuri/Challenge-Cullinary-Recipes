<template>
  <div class="recipe-card">
    <div class="recipe-header">
      <h3 class="recipe-title">{{ recipe.nome }}</h3>
      <span class="recipe-category">{{ recipe.categorias?.nome }}</span>
    </div>
    
    <div class="recipe-info">
      <div class="info-item">
        <span class="info-icon">⏱️</span>
        <span>{{ recipe.tempo_preparo_minutos }}min</span>
      </div>
      <div class="info-item">
        <span class="info-icon">👥</span>
        <span>{{ recipe.porcoes }} porções</span>
      </div>
    </div>
    
    <div class="recipe-actions">
      <button @click="$emit('view')" class="btn btn-secondary btn-sm">
        👁️ Visualizar
      </button>
      <button @click="$emit('edit')" class="btn btn-primary btn-sm">
        ✏️ Editar
      </button>
      <button @click="$emit('delete')" class="btn btn-danger btn-sm">
        🗑️
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  recipe: {
    type: Object,
    required: true
  }
})

defineEmits(['view', 'edit', 'delete'])
</script>

<style scoped>
.recipe-card {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.recipe-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.recipe-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;
  gap: 10px;
}

.recipe-title {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0;
  flex: 1;
}

.recipe-category {
  background: #ff6b35;
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
}

.recipe-info {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 5px;
  color: #666;
  font-size: 14px;
}

.info-icon {
  font-size: 16px;
}

.recipe-actions {
  display: flex;
  gap: 8px;
}

.recipe-actions .btn {
  flex: 1;
}

.recipe-actions .btn:last-child {
  flex: 0;
  padding: 8px 12px;
}
</style>