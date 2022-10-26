<template>
  <div>
    <label class="label pb-0">
      <span class="label-text">{{ label }}</span>
    </label>
    <slot
      name="label"
      class="label-text"
    />
    <label class="label cursor-pointer max-w-xs">
      <span class="label-text">{{ labelLeft }}</span>
      <input
        v-model="mValue"
        type="checkbox"
        class="toggle toggle-primary"
        @change="$emit('update:modelValue', mValue)"
      >
      <span class="label-text">{{ labelRight }}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: "BaseToggle",
  props: {
    label: {
      type: String,
      default: ""
    },
    labelLeft: {
      type: String,
      default: ""
    },
    labelRight: {
      type: String,
      default: ""
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