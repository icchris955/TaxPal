<template>
  <!-- Add `data-active` and the event listeners -->
  <div
    :data-active="active"
    @dragenter.prevent="setActive"
    @dragover.prevent="setActive"
    @dragleave.prevent="setInactive"
    @drop.prevent="onDrop">
    <!-- Share state with the scoped slot -->
    <slot :dropZoneActive="active"></slot>
  </div>
</template>

<script>
// make sure to import `ref` from compositionAPI
// import { ref } from "@vue/composition-api";

// Create `active` state and manage it with functions
// active = ref(false) removed

export default {
  name: "DropZone",

  components: {},
  data() {
    return {
      events: ["dragenter", "dragover", "dragleave", "drop"],
      inActiveTimeout: null,
      active: false,
    };
  },
  methods: {
    setActive() {
      this.active = true;
      clearTimeout(this.inActiveTimeout);
    },
    setInactive() {
      // Wrap it in a `setTimeout`
      this.inActiveTimeout = setTimeout(() => {
        this.active = false;
      }, 50);
    },
    
    onDrop(e) {
      this.setInactive();
      this.$emit("files-dropped", [...e.dataTransfer.files]);
    },

    preventDefaults(e) {
      e.preventDefault();
    },
  },

  mounted() {
    this.events.forEach((eventName) => {
      document.body.removeEventListener(eventName, this.preventDefaults);
    });
  },

  unmounted() {
    this.events.forEach((eventName) => {
      document.body.addEventListener(eventName, this.preventDefaults);
    });
  },
};
</script>
