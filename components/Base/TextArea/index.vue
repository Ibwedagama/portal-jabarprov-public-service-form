<template>
  <div class="form-control">
    <label class="label">
      <span class="label-text">{{ label }}</span>
    </label> 
    <textarea
      v-bind="$attrs"
      v-model="mValue"
      class="textarea textarea-bordered textarea-primary h-24"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "BaseTextArea",
  props: {
    label: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
  },
  data() {
    return {
      mValue: ""
    }
  }
}
</script>