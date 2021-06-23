<template>
    <v-snackbar v-model="showSnackBar">
        {{snackbarText}}
        <template v-slot:action="{ attrs }">
            <v-btn color="blue lighten-3" text v-bind="attrs" @click="() => {$emit('closeSnackbar')}">
                Ok!
            </v-btn>
        </template>
    </v-snackbar>
</template>

<script>
export default {
    props:{
        showSnackBar: Boolean,
        snackbarText: String
    }
}
</script>
