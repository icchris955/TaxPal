<template>
  <component :is="tag" class="file-preview">
    <v-chip
      v-if="chip"
      class="ma-2"
      close
      @click:close="(chip = false), $emit('remove', file)">
    {{ file.file.name }}
    </v-chip>
    <span
      class="status-indicator loading-indicator"
      v-show="file.status == 'loading'"
      >In Progress</span
    >
    <span
      class="status-indicator success-indicator"
      v-show="file.status == true"
      >Uploaded</span
    >
    <span
      class="status-indicator failure-indicator"
      v-show="file.status == false"
      >Error</span
    >
  </component>
</template>

<script>
export default {
  name: "FilePreview",
  emits: ["remove"],
  props: {
    file: { type: Object, required: true },
    tag: { type: String, default: "li" },
  },

  components: {},

  data() {
    return {
      chip: true,
    };
  },
};
</script>

<style lang="scss">
.file-preview {
  height: fit-content;
  position: relative;
  overflow: hidden;
  .close-icon,
  .status-indicator {
    --size: 15px;
    position: absolute;
    line-height: var(--size);
    height: var(--size);
    border-radius: var(--size);
    box-shadow: 0 0 5px currentColor;
    right: 0.25rem;
    appearance: none;
    border: 0;
    padding: 0;
  }
  .close-icon {
    width: var(--size);
    font-size: var(--size);
    background: rgb(163, 135, 135);
    color: #fff;
    top: 0.25rem;
    cursor: pointer;
  }
  .status-indicator {
    font-size: calc(0.75 * var(--size));
    bottom: 0.25rem;
    padding: 0 10px;
  }
  .loading-indicator {
    animation: pulse 1.5s linear 0s infinite;
    color: #000;
  }
  .success-indicator {
    background: #6c6;
    color: #040;
  }
  .failure-indicator {
    background: #933;
    color: #fff;
  }
}
@keyframes pulse {
  0% {
    background: #fff;
  }
  50% {
    background: #ddd;
  }
  100% {
    background: #fff;
  }
}
</style>
