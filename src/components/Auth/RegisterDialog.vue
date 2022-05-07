<template>
  <v-dialog v-model="dialog" transition="dialog-top-transition" max-width="350">
    <template v-slot:activator="{ on, attrs }">
      <v-btn text color="teal accent-4" v-bind="attrs" v-on="on">
        <v-icon>mdi-account-outline</v-icon>
        Register
      </v-btn>
    </template>
    <template v-slot:default="{}">
      <v-card max-width="350px">
        <v-toolbar color="primary lighten-1" dark>
          <div class="text-h5">Create an Account</div>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <!-- <v-text-field
              v-model="name"
              label="Name"
              prepend-icon="mdi-account"
              required
              class="shrink"
              outlined
            > 
            </v-text-field> -->
            <v-text-field
              dense
              v-model="firstName"
              label="First Name"
              prepend-icon="mdi-account"
              placeholder="Janice"
              outlined
              class="mt-4"
            ></v-text-field>
            <v-text-field
              dense
              v-model="lastName"
              label="Last Name"
              prepend-icon="mdi-account"
              placeholder="Kauwa"
              outlined
            ></v-text-field>
            <v-text-field
              dense
              v-model="email"
              label="E-mail"
              placeholder="E-mail Address"
              prepend-icon="mdi-email"
              required
              outlined
            >
            </v-text-field>
            <v-text-field
              dense
              v-model="phone"
              label="Phone"
              placeholder="Phone Number"
              type="phone"
              prepend-icon="mdi-phone"
              required
              outlined
            >
            </v-text-field>
            <v-text-field
              dense
              v-model="password"
              label="Password"
              placeholder="Password"
              :type="show ? 'text' : 'password'"
              prepend-icon="mdi-lock"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="show = !show"
              required
              outlined
            >
            </v-text-field>
            <v-btn class="primary mr-4" @click="register" submit>
              Sign Up
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </template>
  </v-dialog>
</template>
<script>
export default {
  name: "LoginDialog",
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      // Show/Hide password
      show: false,
      dialog: false,
    };
  },

  methods: {
    register() {},
  },
};
</script>
