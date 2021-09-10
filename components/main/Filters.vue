<template>
  <div class="p-8">
    <div class="font-semibold">
      {{ $t("filters.doctorSpecialty") }}
    </div>
    <div class="pt-4">
      <div v-for="specialty in specialties" :key="specialty">
        <label>
          <input type="checkbox" class="form-checkbox text-indigo-600" />
          <span class="ml-2">{{ specialty }}</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
