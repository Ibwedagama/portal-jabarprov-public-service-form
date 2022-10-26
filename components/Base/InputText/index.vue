<template>
  <div class="form-control w-full">
    <label class="label">
      <span class="label-text">{{ label }}</span>
    </label>
    <input
      v-model="mValue"
      :type="type"
      :placeholder="placeholder"
      class="input input-bordered w-full input-primary"
      @input="$emit('update:modelValue', $event.target.value)"
    >
  </div>
</template>

<script>
export default {
  name: 'BaseInputText',
  props: {
    label: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    placeholder: {
      type: String,
      default: "Type here"
    }
  },
  data() {
    return {
      mValue: ""
    }
  }
}

</script>

<style lang="scss" scoped>

</style>