<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <p class="label label-text">
      Jam Operasional
    </p>

    <div class="mb-4">
      <section
        v-for="i in 7"
        :key="days[i-1]"
        class="even:bg-gray-100 mb-4 p-3"
      >
        <p class="label label-text">
          {{ days[i-1] }}
        </p>
        <div class="grid grid-cols-2">
          <div class="w-full flex gap-4">
            <p class="label label-text">
              Jam Buka
            </p>
            <input
              v-model="operationalData[i-1].start"
              type="time"
              class="py-1 px-2 border rounded-md border-primary"
              @change="updateData"
            >
          </div>
          <div class="w-full flex gap-4">
            <p class="label label-text">
              Jam Tutup
            </p>
            <input
              v-model="operationalData[i-1].end"
              type="time"
              class="py-1 px-2 border rounded-md border-primary"
              @change="updateData"
            >
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OperationalHours',
  data() {
    return {
      days: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'],
      operationalData: [
        { start: null, end: null },
        { start: null, end: null },
        { start: null, end: null },
        { start: null, end: null },
        { start: null, end: null },
        { start: null, end: null },
        { start: null, end: null },
      ]
    }
  },
  methods: {
    updateData() {
      this.$emit('update-value', [...this.operationalData])
    }
  },
}

</script>