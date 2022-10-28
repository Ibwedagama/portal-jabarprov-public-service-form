<template>
  <div class="form-control w-full">
    <label class="label">
      <span class="label-text">{{ label }}</span>
    </label>
    <select
      v-bind="$attrs"
      v-model="mValue"
      class="select select-bordered select-primary"
      @change="$emit('update:modelValue', $event.target.value)"
    >
      <option
        disabled
        selected
      >
        Pick one
      </option>
      <option
        v-for="option in options"
        :key="option"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "BaseSelect",
  props: {
    options: {
      type: Array,
      default: () => []
    },
    label: {
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