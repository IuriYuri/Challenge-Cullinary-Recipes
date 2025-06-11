<template>
  <div class="modal-overlay" @click.self="$emit('cancel')">
    <div class="modal-content recipe-form-modal">
      <div class="modal-header">
        <h2>{{ recipe ? 'Editar Receita' : 'Nova Receita' }}</h2>
        <button @click="$emit('cancel')" class="close-btn">✕</button>
      </div>
      
      <form @submit.prevent="handleSubmit" class="recipe-form">
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Nome da Receita</label>
            <input
              v-model="form.nome"
              type="text"
              class="form-input"
              placeholder="Ex: Bolo de Chocolate"
              required
            />
          </div>
          
          <div class="form-group">
            <label class="form-label">Categoria</label>
            <select
              v-model="form.id_categoria"
              required
              class="form-select"
            >
              <option value="">Selecione uma categoria</option>
              <option 
                v-for="categoria in categorias" 
                :key="categoria.id" 
                :value="categoria.id"
              >
                {{ categoria.nome }}
              </option>
            </select>
          </div>
        </div>
        
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Tempo de Preparo (minutos)</label>
            <input
              v-model.number="form.tempoPreparoMinutos"
              type="number"
              min="1"
              class="form-input"
              placeholder="Ex: 30"
              required
            />
          </div>
          
          <div class="form-group">
            <label class="form-label">Porções</label>
            <input
              v-model.number="form.porcoes"
              type="number"
              min="1"
              class="form-input"
              placeholder="Ex: 4"
              required
            />
          </div>
        </div>
        
        <div class="form-group">
          <label class="form-label">Ingredientes</label>
          <textarea
            v-model="form.ingredientes"
            class="form-textarea"
            rows="4"
            placeholder="Liste os ingredientes, um por linha..."
            required
          ></textarea>
        </div>
        
        <div class="form-group">
          <label class="form-label">Modo de Preparo</label>
          <textarea
            v-model="form.modoPreparo"
            class="form-textarea"
            rows="6"
            placeholder="Descreva o passo a passo do preparo..."
            required
          ></textarea>
        </div>
        
        <div class="form-actions">
          <button type="button" @click="$emit('cancel')" class="btn btn-secondary">
            Cancelar
          </button>
          <button type="submit" class="btn btn-primary">
            {{ recipe ? 'Atualizar' : 'Salvar' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { getCategorias } from '../services/api'

const props = defineProps({
  recipe: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['save', 'cancel'])

const categorias = ref([])

const form = ref({
  nome: '',
  id_categoria: null,
  tempoPreparoMinutos: null,
  porcoes: null,
  ingredientes: '',
  modoPreparo: ''
})

onMounted(async () => {
  try {
    const response = await getCategorias()
    categorias.value = response.data
  } catch (error) {
    console.error('Erro ao carregar categorias:', error)
  }
})

const handleSubmit = () => {
  emit('save', { ...form.value })
}

// Watch for recipe changes to populate form
watch(() => props.recipe, (newRecipe) => {
  if (newRecipe) {
    form.value = {
      nome: newRecipe.nome,
      id_categoria: newRecipe.id_categoria,
      tempoPreparoMinutos: newRecipe.tempo_preparo_minutos,
      porcoes: newRecipe.porcoes,
      ingredientes: newRecipe.ingredientes,
      modoPreparo: newRecipe.modo_preparo
    }
  } else {
    form.value = {
      nome: '',
      id_categoria: '',
      tempoPreparoMinutos: '',
      porcoes: '',
      ingredientes: '',
      modoPreparo: ''
    }
  }
}, { immediate: true })
</script>

<style scoped>
.recipe-form-modal {
  width: 90vw;
  max-width: 600px;
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
  font-size: 24px;
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

.recipe-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 2px solid #eee;
}

@media (max-width: 768px) {
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .recipe-form-modal {
    width: 95vw;
    margin: 10px;
  }
}
</style>