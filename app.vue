<template>
  <main class="bg-gray-100 pb-[150px]">
    <div class="navbar bg-primary text-neutral-content">
      <a class="btn btn-ghost normal-case text-xl">Portal Jabarprov</a>
    </div>
    <div class="w-full max-w-screen-xl container mx-auto p-8 bg-white mt-[80px] rounded-xl shadow-sm">
      <form @submit.prevent="submitForm">
        <section class="mb-8">
          <h1 class="mb-8 text-3xl font-bold">
            Portal Jabarprov Input Form
          </h1>

          <h2 class="mb-4 text-xl font-bold">
            Informasi Umum
          </h2>
          <div class="grid grid-cols-1 lg:grid-cols-2 lg:divide-x-2">
            <div class="p-12 pt-4 pl-0 w-full">
              <BaseInputText
                v-model="form.general_information.name"
                label="Nama Layanan"
                placeholder="Masukkan nama lengkap"
                class="mb-4"
                required
              />

              <BaseInputText
                v-model="form.general_information.alias"
                label="Nama Alias"
                placeholder="Masukkan nama alias"
                class="mb-4"
                required
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
                label="Unit/Dinas"
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
                required
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

              <!-- Phone -->
              <div>
                <div
                  v-for="index in phoneCount"
                  :key="`phone-input-${index}`"
                  class="w-full mb-4"
                >
                  <BaseInputText
                    v-model="form.general_information.phone[index - 1]"
                    label="Nomor Telepon"
                    placeholder="Masukkan no. telp"
                    class="mb-4"
                  />
                  <div
                    v-if="index !== 1"
                    class="w-full flex justify-end"
                  >
                    <button
                      class="btn btn-outline btn-error btn-sm mt-4 ml-auto"
                      @click="removePhone(index)"
                    >
                      Hapus
                    </button>
                  </div>
                </div>
                <button
                  class="btn btn-outline btn-primary btn-sm mb-4"
                  @click="addNewPhone"
                >
                  Tambah Telepon
                </button>
              </div>

              <OperationalHours @update-value="handleUpdateOperationalHours" />
            </div>
          </div>
        </section>

        <div class="grid grid-cols-1 lg:grid-cols-2 lg:divide-x-2">
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
                label="Twitter"
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

        <!-- Requirement -->
        <section class="mb-8">
          <h2 class="mb-4 text-xl font-bold">
            Syarat Menggunakan Layanan
          </h2>

          <BaseInputText
            v-model="form.requirement.title"
            label="Judul Section"
            class="mb-4"
          />

          <div
            v-for="index in requirementCount"
            :key="`requirement-section-${index}`"
          >
            <div class="p-3 border rounded-md mb-4">
              <BaseTextArea
                v-model="form.requirement.items[index -1].description"
                label="Deskripsi Syarat Layanan"
              />
              <BaseInputText
                v-model="form.requirement.items[index -1].link"
                label="Link Contoh (Opsional)"
              />
              <div
                v-if="index !== 1"
                class="w-full flex justify-end"
              >
                <button
                  class="btn btn-outline btn-error btn-sm mt-4 ml-auto"
                  @click="removeRequirement(index)"
                >
                  Hapus
                </button>
              </div>
            </div>
          </div>
          <button
            class="btn btn-outline btn-primary btn-sm mt-4 mb-4"
            @click="addNewRequirement"
          >
            Tambah Syarat
          </button>
        </section>

        <!-- TOS -->
        <section class="mb-8">
          <h2 class="mb-4 text-xl font-bold">
            Panduan Mengakses Layanan
          </h2>

          <BaseInputText
            v-model="form.tos.title"
            label="Judul Section"
            class="mb-4"
          />
          <BaseInputText
            v-model="form.tos.image"
            label="Poster/Infografis Cara Mengakses Layanan"
            class="mb-4"
          />

          <div
            v-for="index in termOfServiceCount"
            :key="`requirement-section-${index}`"
          >
            <div class="p-3 border rounded-md mb-4">
              <BaseTextArea
                v-model="form.tos.items[index -1].description"
                label="Deskripsi"
              />
              <BaseInputText
                v-model="form.tos.items[index -1].link"
                label="Link Contoh (Opsional)"
              />
              <div
                v-if="index !== 1"
                class="w-full flex justify-end"
              >
                <button
                  class="btn btn-outline btn-error btn-sm mt-4 ml-auto"
                  @click="removeTOS(index)"
                >
                  Hapus
                </button>
              </div>
            </div>
          </div>
          <button
            class="btn btn-outline btn-primary btn-sm mt-4 mb-4"
            @click="addNewTermOfService"
          >
            Tambah Panduan
          </button>
        </section>

        <!-- infographic -->
        <section class="mb-8">
          <h2 class="mb-4 text-xl font-bold">
            Infografis
          </h2>

          <div
            v-for="index in infographicCount"
            :key="`infographic-image-${index}`"
          >
            <BaseInputText
              v-model="form.infographic.images[index -1]"
              label="Gambar Infografis"
            />
            <div
              v-if="index !== 1"
              class="w-full flex justify-end"
            >
              <button
                class="btn btn-outline btn-error btn-sm mt-4 ml-auto"
                @click="removeInfographic(index)"
              >
                Hapus
              </button>
            </div>
          </div>

          <button
            class="btn btn-outline btn-primary btn-sm mt-4 mb-4"
            @click="addNewInfographic"
          >
            Tambah Infografis
          </button>
        </section>

        <!-- FAQ -->
        <section class="mb-8">
          <h2 class="mb-4 text-xl font-bold">
            Frequently Asked Question
          </h2>

          <div
            v-for="index in faqCount"
            :key="`faq-section-${index}`"
          >
            <div class="p-3 border rounded-md mb-4">
              <BaseInputText
                v-model="form.faq.items[index -1].question"
                label="Pertanyaan"
              />
              <BaseTextArea
                v-model="form.faq.items[index -1].answer"
                label="Jawaban"
              />
              <div
                v-if="index !== 1"
                class="w-full flex justify-end"
              >
                <button
                  class="btn btn-outline btn-error btn-sm mt-4 ml-auto"
                  @click="removeFAQ(index)"
                >
                  Hapus
                </button>
              </div>
            </div>
          </div>
          <button
            class="btn btn-outline btn-primary btn-sm mt-4 mb-4"
            @click="addNewFAQ"
          >
            Tambah FAQ
          </button>
        </section>

        <!-- Confirmation Modal -->
        <div class="flex justify-center">
          <button
            class="btn btn-outline btn-primary mr-6"
            @click="resetForm"
          >
            RESET FORM
          </button>

          <!-- The button to open modal -->
          <label
            for="my-modal"
            class="btn modal-button"
          >
            {{ submitStatus === 'LOADING' ? 'LOADING...' : 'SUBMIT FORM' }}
          </label>

          <input
            id="my-modal"
            type="checkbox"
            class="modal-toggle"
          >
          <div class="modal overflow-hidden">
            <div class="modal-box relative">
              <label
                for="my-modal"
                class="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <pre class="max-w-screen-sm">
                {{ jsonFormData }}
              </pre>

              <div class="modal-action">
                <button
                  for="my-modal"
                  class="btn"
                  type="submit"
                >
                  SUBMIT DATA
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Success Toast -->
        <div
          v-show="submitStatus === 'SUCCESS'"
          class="toast toast-top toast-end"
        >
          <div class="alert alert-success">
            <div>
              <span>Berhasil menyimpan data</span>
            </div>
          </div>
        </div>

        <!-- Error Toast -->
        <div
          v-show="submitStatus === 'ERROR'"
          class="toast toast-top toast-end"
        >
          <div class="alert alert-error">
            <div>
              <span>Gagal submit data!</span>
            </div>
          </div>
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
      requirementCount: 1,
      termOfServiceCount: 1,
      infographicCount: 1,
      faqCount: 1,
      phoneCount: 1,
      submitStatus: null,
      form: {
        general_information: {
          name: "",
          description: "",
          alias: "",
          category: "",
          addresses: [],
          unit: "",
          phone: [],
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
        },
        requirement: {
          title: "",
          items: [
            {
              link: "",
              description: ""
            }
          ]
        },
        tos: {
          title: "",
          image: "",
          items: [
            {
              link: "",
              description: ""
            }
          ]
        },
        infographic: {
          images: []
        },
        faq: {
          items: [
            {
              question: "",
              answer: ""
            }
          ]
        }
      }
    }
  },
  computed: {
    jsonFormData() {
      return JSON.stringify(this.form, null, 2)
    }
  },
  mounted() {
    window.onbeforeunload = function (e) {
        return "Please click 'Stay on this Page' if you did this unintentionally";
    };
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
    addNewRequirement() {
      this.form.requirement.items.push({
        link: "",
        description: ""
      })
      this.requirementCount = this.requirementCount + 1
    },
    addNewTermOfService() {
      this.form.tos.items.push({
        link: "",
        description: ""
      })
      this.termOfServiceCount = this.termOfServiceCount + 1
    },
    addNewInfographic() {
      this.infographicCount = this.infographicCount + 1
    },
    addNewFAQ() {
      this.form.faq.items.push({
        question: "",
        answer: ""
      })
      this.faqCount = this.faqCount + 1
    },
    addNewPhone() {
      this.phoneCount = this.phoneCount + 1
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
    removeRequirement(index) {
      this.requirementCount = this.requirementCount - 1
      const newArr = this.form.requirement.items.filter((_, i) => i !== index - 1)
      this.form.requirement.items = [...newArr]
    },
    removeTOS(index) {
      this.termOfServiceCount = this.termOfServiceCount - 1
      const newArr = this.form.tos.items.filter((_, i) => i !== index - 1)
      this.form.tos.items = [...newArr]
    },
    removeInfographic(index) {
      this.infographicCount = this.infographicCount - 1
      const newArr = this.form.infographic.images.filter((_, i) => i !== index - 1)
      this.form.infographic.images = [...newArr]
    },
    removeFAQ(index) {
      this.faqCount = this.faqCount - 1
      const newArr = this.form.faq.items.filter((_, i) => i !== index - 1)
      this.form.faq.items = [...newArr]
    },
    removePhone(index) {
      this.phoneCount = this.phoneCount - 1
      const newArr = this.form.general_information.phone.filter((_, i) => i !== index - 1)
      this.form.general_information.phone = [...newArr]
    },
    handleUpdateOperationalHours(value) {
      this.form.general_information.operational_hours = value
    },
    submitForm () {
      this.submitStatus = "LOADING"

      fetch(`${import.meta.env.VITE_API_BASE_URL}/v1/service-public`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_API_TOKEN}`
          },
          body: JSON.stringify(this.form)
      }).then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          return Promise.reject(response);
        }
      }).then(() => {
        this.submitStatus = "SUCCESS"
        setTimeout(() => {
        this.resetForm()
        }, 1000);
      }).catch((error) => {
        this.submitStatus = "ERROR"
        console.log(error)
      }).finally(() => {
        console.log(JSON.stringify(this.form))
        setTimeout(() => {
        this.submitStatus = null
        }, 3000);
      })
    },
    resetForm() {
      location.reload();
    }
  }
}
</script>