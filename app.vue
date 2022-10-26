<template>
  <main class="bg-gray-100 pb-[150px]">
    <div class="navbar bg-primary text-neutral-content">
      <a class="btn btn-ghost normal-case text-xl">Portal Jabarprov</a>
    </div>
    <div class="w-full max-w-screen-xl container mx-auto p-8 bg-white mt-[80px] rounded-xl shadow-sm">
      <form @submit.prevent="">
        <section class="mb-8">
          <h1 class="mb-8 text-3xl font-bold">
            Portal Jabarprov Input Form
          </h1>

          <h2 class="mb-4 text-xl font-bold">
            Informasi Umum
          </h2>
          <div class="grid grid-cols-2 divide-x-2">
            <div class="p-12 pt-4 pl-0 w-full">
              <BaseInputText
                v-model="form.general_information.name"
                label="Nama Layanan"
                placeholder="Masukkan nama lengkap"
                class="mb-4"
              />

              <BaseInputText
                v-model="form.general_information.alias"
                label="Nama Alias"
                placeholder="Masukkan nama alias"
                class="mb-4"
              />

              <BaseInputText
                v-model="form.general_information.logo"
                label="Logo Layanan"
                placeholder="Masukkan logo"
                class="mb-4"
              />

              <BaseSelect
                v-model="form.general_information.unit"
                :options="unitOptions"
                label="Unit"
                class="mb-4"
              />

              <BaseSelect
                v-model="form.general_information.category"
                :options="categoryOptions"
                label="Kategori Layanan"
                class="mb-4"
              />

              <BaseRadioGroup
                v-model="form.general_information.type"
                :items="serviceTypeOptions"
                label="Tipe Layanan"
                class="mb-4"
              />
          
              <BaseTextArea
                v-model="form.general_information.description"
                label="Deskripsi Layanan"
                placeholder="Deskripsi Layanan"
                class="mb-4"
              />
            </div>

            <div class="p-12 pt-4 w-full max-h-[900px] overflow-auto">
              <div
                v-for="index in addressCount"
                :key="`address-input-${index}`"
                class="w-full mb-4"
              >
                <BaseTextArea
                  v-model="form.general_information.addresses[index - 1]"
                  label="Alamat Layanan"
                  placeholder="Deskripsi Layanan"
                />
                <div
                  v-if="index !== 1"
                  class="w-full flex justify-end"
                >
                  <button
                    class="btn btn-outline btn-error btn-sm mt-4 ml-auto"
                    @click="removeAddress(index)"
                  >
                    Hapus
                  </button>
                </div>
              </div>
              <button
                class="btn btn-outline btn-primary btn-sm mb-4"
                @click="addNewAddress"
              >
                Tambah Alamat
              </button>


              <BaseInputText
                v-model="form.general_information.phone"
                type="number"
                label="Nomor Telepon"
                placeholder="Masukkan no. telp"
                class="mb-4"
              />

              <OperationalHours @update-value="handleUpdateOperationalHours" />
            </div>
          </div>
        </section>

        <div class="grid grid-cols-2 divide-x-2">
          <section class="mb-8 pr-8">
            <h2 class="mb-4 text-xl font-bold">
              Link
            </h2>

            <div>
              <BaseInputText
                v-model="form.general_information.link.website"
                label="Website"
                placeholder="Link website"
              />
              <BaseInputText
                v-model="form.general_information.link.google_play"
                label="Google Play"
                placeholder="Link google play"
              />
              <BaseInputText
                v-model="form.general_information.link.google_form"
                label="Google Form"
                placeholder="Link google form"
              />
              <BaseInputText
                v-model="form.general_information.link.app_store"
                label="App Store"
                placeholder="Link app store"
              />
            </div>
          </section>
          <section class="mb-8 pl-8">
            <h2 class="mb-4 text-xl font-bold">
              Sosial Media
            </h2>

            <div>
              <BaseInputText
                v-model="form.general_information.social_media.facebook"
                label="Facebook"
              />
              <BaseInputText
                v-model="form.general_information.social_media.instagram"
                label="Instagram"
              />
              <BaseInputText
                v-model="form.general_information.social_media.tiktok"
                label="Tiktok"
              />
              <BaseInputText
                v-model="form.general_information.social_media.twitter"
                label="App Store"
              />
              <BaseInputText
                v-model="form.general_information.social_media.youtube"
                label="Youtube"
              />
            </div>
          </section>
        </div>

        <section class="mb-8">
          <h2 class="mb-4 text-xl font-bold">
            Media
          </h2>

          <div>
            <BaseInputText
              v-model="form.general_information.media.video"
              label="Link Video Youtube"
            />
            <div
              v-for="index in mediaImageCount"
              :key="`media-image-${index}`"
            >
              <BaseInputText
                v-model="form.general_information.media.images[index -1]"
                label="Gambar"
              />
              <div
                v-if="index !== 1"
                class="w-full flex justify-end"
              >
                <button
                  class="btn btn-outline btn-error btn-sm mt-4 ml-auto"
                  @click="removeMediaImage(index)"
                >
                  Hapus
                </button>
              </div>
            </div>

            <button
              class="btn btn-outline btn-primary btn-sm mt-4 mb-4"
              @click="addNewMediaImage"
            >
              Tambah Gambar
            </button>
          </div>
        </section>

        <!-- Purposes -->
        <section class="mb-8">
          <h2 class="mb-4 text-xl font-bold">
            Alasan/Manfaat Bagi Masyakarat
          </h2>

          <BaseInputText
            v-model="form.purpose.title"
            label="Judul Section"
            class="mb-4"
          />


          <div
            v-for="index in purposeCount"
            :key="`media-image-${index}`"
          >
            <BaseInputText
              v-model="form.purpose.items[index -1]"
              label="Alasan/Manfaat"
            />
            <div
              v-if="index !== 1"
              class="w-full flex justify-end"
            >
              <button
                class="btn btn-outline btn-error btn-sm mt-4 ml-auto"
                @click="removePurpose(index)"
              >
                Hapus
              </button>
            </div>
          </div>

          <button
            class="btn btn-outline btn-primary btn-sm mt-4 mb-4"
            @click="addNewPurpose"
          >
            Tambah Alasan
          </button>
        </section>

        <!-- Facility -->
        <section class="mb-8">
          <h2 class="mb-4 text-xl font-bold">
            Fasilitas yang Tersedia
          </h2>

          <BaseInputText
            v-model="form.facility.title"
            label="Judul Section"
            class="mb-4"
          />

          <div
            v-for="index in facilityCount"
            :key="`media-image-${index}`"
          >
            <div class="p-3 border rounded-md mb-4">
              <BaseInputText
                v-model="form.facility.items[index -1].title"
                label="Judul Fasilitas"
              />
              <BaseInputText
                v-model="form.facility.items[index -1].image"
                label="Gambar Fasilitas"
              />
              <div
                v-if="index !== 1"
                class="w-full flex justify-end"
              >
                <button
                  class="btn btn-outline btn-error btn-sm mt-4 ml-auto"
                  @click="removeFacility(index)"
                >
                  Hapus
                </button>
              </div>
            </div>
          </div>
          <button
            class="btn btn-outline btn-primary btn-sm mt-4 mb-4"
            @click="addNewFacility"
          >
            Tambah Fasilitas
          </button>
        </section>

        <div class="flex justify-center">
          <button
            class="btn btn-primary mx-auto"
            @click="submitForm"
          >
            Submit Form
          </button>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
import { unitOptions, serviceTypeOptions, categoryOptions } from '@/constant'
export default {
  name: 'HomePage',
  data() {
    return {
      testValue: "",
      unitOptions,
      serviceTypeOptions,
      categoryOptions,
      addressCount: 1,
      mediaImageCount: 1,
      purposeCount: 1,
      facilityCount: 1,
      form: {
        general_information: {
          name: "",
          description: "",
          alias: "",
          category: "",
          addresses: [],
          unit: "",
          phone: "",
          logo: "",
          operational_hours: [
            { start: null, end: null },
            { start: null, end: null },
            { start: null, end: null },
            { start: null, end: null },
            { start: null, end: null },
            { start: null, end: null },
            { start: null, end: null },
          ],
          link: {
            website: "",
            google_play: "",
            google_form: "",
            app_store: ""
          },
          media: {
            video: "",
            images: []
          },
          social_media: {
            facebook: "",
            instagram: "",
            twitter: "",
            tiktok: "",
            youtube: ""
          },
          type: 'non-active',
        },
        purpose: {
          title: "",
          items: []
        },
        facility: {
          title: "",
          items: [
            {
              title: "",
              image: ""
            }
          ]
        }
      }
    }
  },
  methods: {
    addNewAddress() {
     this.addressCount = this.addressCount + 1
    },
    addNewMediaImage() {
      this.mediaImageCount = this.mediaImageCount + 1
    },
    addNewPurpose() {
      this.purposeCount = this.purposeCount + 1
    },
    addNewFacility() {
      this.form.facility.items.push({
        title: "",
        image: ""
      })
      this.facilityCount = this.facilityCount + 1
    },
    removeMediaImage (index) {
      this.mediaImageCount = this.mediaImageCount - 1
      const newArr = this.form.general_information.media.images.filter((_, i) => i !== index - 1)
      this.form.general_information.media.images = [...newArr]
    },
    removeAddress(index) {
      this.addressCount = this.addressCount - 1
      const newArr = this.form.general_information.addresses.filter((_, i) => i !== index - 1)
      this.form.general_information.addresses = [...newArr]
    },
    removePurpose(index) {
      this.purposeCount = this.purposeCount - 1
      const newArr = this.form.purpose.items.filter((_, i) => i !== index - 1)
      this.form.purpose.items = [...newArr]
    },
    removeFacility(index) {
      this.facilityCount = this.facilityCount - 1
      const newArr = this.form.facility.items.filter((_, i) => i !== index - 1)
      this.form.facility.items = [...newArr]
    },
    handleUpdateOperationalHours(value) {
      this.form.general_information.operational_hours = value
    },
    submitForm () {
      console.log(JSON.stringify(this.form))
    }
  },
}
</script>