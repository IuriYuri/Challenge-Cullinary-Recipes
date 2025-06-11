<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="modal-content recipe-view-modal">
      <div class="modal-header">
        <h2>{{ recipe.nome }}</h2>
        <button @click="$emit('close')" class="close-btn">✕</button>
      </div>
      
      <div class="recipe-details">
        <div class="recipe-stats">
          <div class="stat-card">
            <div class="stat-icon">🏷️</div>
            <div class="stat-content">
              <span class="stat-label">Categoria</span>
              <span class="stat-value">{{ recipe.categorias?.nome }}</span>
            </div>
          </div>
          
          <div class="stat-card">
            <div class="stat-icon">⏱️</div>
            <div class="stat-content">
              <span class="stat-label">Tempo de Preparo</span>
              <span class="stat-value">{{ recipe.tempo_preparo_minutos }} minutos</span>
            </div>
          </div>
          
          <div class="stat-card">
            <div class="stat-icon">👥</div>
            <div class="stat-content">
              <span class="stat-label">Porções</span>
              <span class="stat-value">{{ recipe.porcoes }}</span>
            </div>
          </div>
        </div>
        
        <div class="recipe-content">
          <div class="content-section">
            <h3>📋 Ingredientes</h3>
            <div class="content-box">
              <pre>{{ recipe.ingredientes }}</pre>
            </div>
          </div>
          
          <div class="content-section">
            <h3>👨‍🍳 Modo de Preparo</h3>
            <div class="content-box">
              <pre>{{ recipe.modo_preparo }}</pre>
            </div>
          </div>
        </div>
      </div>
      
      <div class="modal-actions">
        <button @click="$emit('edit', recipe)" class="btn btn-primary">
          ✏️ Editar
        </button>
        <button @click="$emit('close')" class="btn btn-secondary">
          Fechar
        </button>
      </div>
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

defineEmits(['close', 'edit'])
</script>

<style scoped>
.recipe-view-modal {
  width: 90vw;
  max-width: 800px;
  max-height: 90vh;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 2px solid #eee;
}

.modal-header h2 {
  margin: 0;
  color: #333;
  font-size: 28px;
  font-weight: 700;
}

.close-btn {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #666;
  padding: 5px;
  border-radius: 4px;
  transition: background-color 0.2s ease;
}

.close-btn:hover {
  background-color: #f0f0f0;
}

.recipe-details {
  margin-bottom: 30px;
}

.recipe-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-bottom: 30px;
}

.stat-card {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 15px;
}

.stat-icon {
  font-size: 24px;
}

.stat-content {
  display: flex;
  flex-direction: column;
}

.stat-label {
  font-size: 12px;
  color: #666;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.stat-value {
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-top: 2px;
}

.recipe-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

.content-section h3 {
  margin-bottom: 15px;
  color: #333;
  font-size: 18px;
  font-weight: 600;
}

.content-box {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid #ff6b35;
}

.content-box pre {
  white-space: pre-wrap;
  font-family: inherit;
  font-size: 14px;
  line-height: 1.6;
  color: #555;
  margin: 0;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  padding-top: 20px;
  border-top: 2px solid #eee;
}

@media (max-width: 768px) {
  .recipe-view-modal {
    width: 95vw;
    margin: 10px;
  }
  
  .recipe-stats {
    grid-template-columns: 1fr;
  }
  
  .recipe-content {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .modal-actions {
    flex-direction: column-reverse;
  }
}
</style>