<template>
  <div v-if="recipes.length > 0" class="recipe-grid">
    <RecipeCard
      v-for="recipe in recipes"
      :key="recipe.id"
      :recipe="recipe"
      @view="$emit('view', recipe)"
      @edit="$emit('edit', recipe)"
      @delete="$emit('delete', recipe.id)"
    />
  </div>
  
  <div v-else class="empty-state">
    <div class="empty-icon">📝</div>
    <h3>Nenhuma receita encontrada</h3>
    <p>Comece adicionando sua primeira receita!</p>
  </div>
</template>

<script setup>
import RecipeCard from './RecipeCard.vue'

defineProps({
  recipes: {
    type: Array,
    required: true
  }
})

defineEmits(['view', 'edit', 'delete'])
</script>

<style scoped>
.recipe-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.empty-state {
  text-align: center;
  padding: 80px 20px;
  color: #666;
}

.empty-icon {
  font-size: 64px;
  margin-bottom: 20px;
}

.empty-state h3 {
  font-size: 20px;
  margin-bottom: 10px;
  color: #333;
}

.empty-state p {
  font-size: 16px;
}

@media (max-width: 768px) {
  .recipe-grid {
    grid-template-columns: 1fr;
  }
}
</style>