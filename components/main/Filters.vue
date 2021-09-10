<template>
  <div class="p-8">
    <div class="font-semibold">
      {{ $t("filters.doctorSpecialty") }}
    </div>
    <div class="pt-4">
      <div>
        <label>
          <input
            type="checkbox"
            class="form-checkbox text-indigo-600"
            checked
          />
          <span class="ml-2">{{ $t("filters.all") }}</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filters: [
        "all",
        "cardiologist",
        "dentist",
        "doctorSpecialty",
        "general",
        "gynecologist",
        "oncologist",
        "pediatrician",
      ],
    };
  },
};
</script>
