<template>
  <div id="app">
    <NavBar 
      v-if="currentUser" 
      :user="currentUser" 
      @logout="logout" 
    />
    
    <AuthForm 
      v-if="!currentUser"
      @login="handleLogin"
      @register="handleRegister"
    />
    
    <main v-if="currentUser" class="main-content">
      <SearchBar 
        v-model="searchQuery"
        @add-recipe="showAddRecipe"
      />
      
      <RecipeGrid 
        :recipes="filteredRecipes"
        @view="viewRecipe"
        @edit="editRecipe"
        @delete="deleteRecipe"
      />
      
      <RecipeForm
        v-if="showRecipeForm"
        :recipe="editingRecipe"
        @save="saveRecipe"
        @cancel="cancelRecipeForm"
      />
      
      <RecipeView
        v-if="viewingRecipe"
        :recipe="viewingRecipe"
        @close="closeRecipeView"
        @edit="editRecipe"
      />
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import api from './services/api'
import NavBar from './components/NavBar.vue'
import AuthForm from './components/AuthForm.vue'
import SearchBar from './components/SearchBar.vue'
import RecipeGrid from './components/RecipeGrid.vue'
import RecipeForm from './components/RecipeForm.vue'
import RecipeView from './components/RecipeView.vue'

// State
const currentUser = ref(null)
const recipes = ref([])
const searchQuery = ref('')
const showRecipeForm = ref(false)
const editingRecipe = ref(null)
const viewingRecipe = ref(null)

// Computed
const filteredRecipes = computed(() => {
  if (!searchQuery.value) return recipes.value
  
  const query = searchQuery.value.toLowerCase()
  return recipes.value.filter(recipe =>
    recipe.nome.toLowerCase().includes(query) ||
    recipe.categoria?.nome?.toLowerCase().includes(query) ||
    recipe.ingredientes.toLowerCase().includes(query)
  )
})

const handleLogin = (user) => {
  currentUser.value = user
  sessionStorage.setItem('currentUser', JSON.stringify(user))
  loadRecipes()
}

const handleRegister = (user) => {
  currentUser.value = user
  sessionStorage.setItem('currentUser', JSON.stringify(user))
}

const logout = () => {
  currentUser.value = null
  sessionStorage.removeItem('currentUser')
  sessionStorage.removeItem('token')
  recipes.value = []
}

const loadRecipes = async () => {
  try {
    const response = await api.get('/receitas')
    recipes.value = response.data
  } catch (err) {
    console.error('Erro ao carregar receitas:', err)
  }
}

const showAddRecipe = () => {
  editingRecipe.value = null
  showRecipeForm.value = true
}

const saveRecipe = async (recipeData) => {
  try {
    if (editingRecipe.value) {
      await api.put(`/receitas/${editingRecipe.value.id}`, {
        nome: recipeData.nome,
        ingredientes: recipeData.ingredientes,
        modo_preparo: recipeData.modoPreparo,
        tempo_preparo_minutos: recipeData.tempoPreparoMinutos,
        porcoes: recipeData.porcoes,
        id_categoria: recipeData.id_categoria
      })
    } else {
      await api.post('/receitas', {
        nome: recipeData.nome,
        ingredientes: recipeData.ingredientes,
        modo_preparo: recipeData.modoPreparo,
        tempo_preparo_minutos: recipeData.tempoPreparoMinutos,
        porcoes: recipeData.porcoes,
        id_categoria: recipeData.id_categoria
      })
    }

    await loadRecipes()
    showRecipeForm.value = false
    editingRecipe.value = null
  } catch (err) {
    console.error('Erro ao salvar receita:', err)
  }
}


const editRecipe = (recipe) => {
  editingRecipe.value = recipe
  showRecipeForm.value = true
  viewingRecipe.value = null
}

const deleteRecipe = async (recipeId) => {
  if (confirm('Tem certeza que deseja excluir esta receita?')) {
    try {
      await api.delete(`/receitas/${recipeId}`)
      await loadRecipes()
    } catch (err) {
      console.error('Erro ao excluir receita:', err)
    }
  }
}

const viewRecipe = (recipe) => {
  viewingRecipe.value = recipe
}

const cancelRecipeForm = () => {
  showRecipeForm.value = false
  editingRecipe.value = null
}

const closeRecipeView = () => {
  viewingRecipe.value = null
}

onMounted(() => {
  try {
    const saved = sessionStorage.getItem('currentUser')
    if (saved) {
      currentUser.value = JSON.parse(saved)
      loadRecipes()
    }
  } catch (err) {
    console.warn('Usuário salvo inválido:', err)
    sessionStorage.removeItem('currentUser')
  }
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f5f5f5;
  color: #333;
}

#app {
  min-height: 100vh;
}

.main-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.btn-primary {
  background-color: #ff6b35;
  color: white;
}

.btn-primary:hover {
  background-color: #e55a2b;
}

.btn-secondary {
  background-color: #6c757d;
  color: white;
}

.btn-secondary:hover {
  background-color: #5a6268;
}

.btn-danger {
  background-color: #dc3545;
  color: white;
}

.btn-danger:hover {
  background-color: #c82333;
}

.btn-success {
  background-color: #28a745;
  color: white;
}

.btn-success:hover {
  background-color: #218838;
}

.form-group {
  margin-bottom: 20px;
}

.form-label {
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
  color: #555;
}

.form-input,
.form-select,
.form-textarea {
  width: 100%;
  padding: 12px;
  border: 2px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  transition: border-color 0.2s ease;
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  border-color: #ff6b35;
}

.form-textarea {
  resize: vertical;
  min-height: 100px;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.modal-content {
  background: white;
  border-radius: 12px;
  padding: 30px;
  max-width: 90vw;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.error-message {
  color: #dc3545;
  font-size: 14px;
  margin-top: 5px;
}

.empty-state {
  text-align: center;
  padding: 60px 20px;
  color: #666;
}

.empty-state h3 {
  margin-bottom: 10px;
  font-size: 18px;
}

.empty-state p {
  font-size: 14px;
}
</style>