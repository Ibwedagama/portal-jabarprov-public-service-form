<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="w-full">
    <label class="label">
      <span class="label-text">{{ label }}</span>
    </label>
    <div
      v-for="(item, index) in items"
      :key="index"
      class="form-control"
    >
      <label class="label cursor-pointer max-w-xs">
        <span class="label-text">{{ item.label }}</span> 
        <input
          v-model="mValue"
          type="radio"
          name="radio-6"
          class="radio checked:bg-primary"
          :value="item.value"
          @change="$emit('update:modelValue', $event.target.value)"
        >
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ""
    },
    items: {
      type: Array,
      default: ()  => []
    },
  },
  data() {
    return {
      mValue: ""
    }
  },
}

</script>

<style lang="scss" scoped>

</style>