<template>
  <v-dialog
    v-model="dialog"
    transition="dialog-top-transition"
    max-width="350"
    :retain-focus="false"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-list>
        <v-list-item v-bind="attrs" v-on="on">
          <v-list-item-icon>
            <v-icon>mdi-login</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="text-sm-left">Login</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </template>
    <template v-slot:default="{}">
      <v-card max-width="350px">
        <v-toolbar color="primary lighten-1" dark>
          <div class="text-h5">Sign In</div>
        </v-toolbar>
        <v-card-text>
          <v-form class="px-3">
            <v-text-field
              class="mt-4"
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
            <v-btn class="primary ml-0 mt-5" @click="login" submit
              >Sign In</v-btn
            >
          </v-form>
        </v-card-text>
      </v-card>
    </template>
  </v-dialog>
</template>
<script>
export default {
  name: "LoginDialog",
  data: () => ({
    email: "",
    password: "",
    show: false,
  }),

  methods: {
    login() {},
  },
};
</script>
