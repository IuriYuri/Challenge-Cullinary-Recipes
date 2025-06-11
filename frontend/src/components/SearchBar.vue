<template>
  <div class="search-container">
    <div class="search-input-container">
      <span class="search-icon">🔍</span>
      <input
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        type="text"
        placeholder="Buscar receitas..."
        class="search-input"
      />
    </div>
    <button @click="$emit('add-recipe')" class="btn btn-primary">
      ➕ Nova Receita
    </button>
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})

defineEmits(['update:modelValue', 'add-recipe'])
</script>

<style scoped>
.search-container {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  align-items: center;
}

.search-input-container {
  flex: 1;
  position: relative;
}

.search-icon {
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
  font-size: 16px;
}

.search-input {
  width: 100%;
  padding: 15px 15px 15px 45px;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.2s ease;
}

.search-input:focus {
  outline: none;
  border-color: #ff6b35;
}

@media (max-width: 768px) {
  .search-container {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>