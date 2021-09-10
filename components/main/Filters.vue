<template>
  <div class="p-8">
    <div class="font-semibold">
      {{ $t("filters.language") }}
    </div>
    <div class="mt-4">
      <label class="block">
        <select class="form-select block w-full mt-1 p-1 border rounded">
          <option v-for="language in languages" :key="language">
            {{ language }}
          </option>
        </select>
      </label>
    </div>

    <div class="mt-8 font-semibold">
      {{ $t("filters.doctorSpecialty") }}
    </div>
    <div class="mt-4">
      <div v-for="specialty in specialties" :key="specialty">
        <label class="inline-flex items-center">
          <input
            type="checkbox"
            class="form-checkbox text-indigo-600 h-5 w-5"
          />
          <span class="ml-2 text-gray-700">{{ specialty }}</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      languages: ["English", "Japanese", "Vietnamese"],
      specialties: [
        "All",
        "Cardiologist",
        "Dentist",
        "Dermatologist",
        "Doctor Specialty",
        "Endocrinologist",
        "Family Physician",
        "Gastroenterologist",
        "Gynecologist",
        "Neurologist",
        "Oncologist",
        "Ophthalmologist",
        "Otolaryngologist",
        "Pediatrician",
        "Psychiatrist",
      ],
    };
  },
};
</script>
