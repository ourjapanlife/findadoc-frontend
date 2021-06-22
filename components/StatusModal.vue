<template>
    <div ref="statusDialog" class="text-center">
        <v-dialog v-model="dialog" width="500">
            <v-card>
                <v-card-title class="text-h5 grey lighten-2">
                    {{title}}
                </v-card-title>
                <br />
                <v-card-text>
                    {{text}}
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="close">Ok!</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>
<script>
/* This is a dialogue or modal component to show status Success or error preferably when 
a user does a action such as submitting a form 

#### PROPS
Title : The Title of the dialogue (Modal) preferably "Success" or "Error"
Text: The paragraph which gives more information about the status.

###Events
Closed: This event is emitted from the component when the user clicks Action Button Ok.

###Example
the following snippet can be used in template to initialize the model with appropriate data.
` 
<StatusModal ref="successDialog" title="Success" text="New clinic data successfully inserted to the database." @closed="$router.push('/')"/>
`
The following snippet can be added in any method to trigger the dialog to open
`
this.$refs.successDialog.open();
`
*/
export default {
    props: ['title', 'text'],
    data(){
        return{
            dialog: false
        }
    },
    methods:{
        open: function(){
            this.dialog = true;
        },
        close: function(){
            this.dialog = false;
            this.$emit('closed');
        }
    }
}
</script>