<template>
  <div class="card">
    <div :style="styleTitle" class="font-bold rounded-t-md">
      <i :class="icon"></i>
      {{ titulo }}
    </div>
    <div class="card-body" :style="styleBody">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    altura: {
      type: String,
      default: "200px",
    },
    icon: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "0, 255, 118",
    },

    titulo: {
      type: String,
      default: "Titulo",
    },
  },
  data() {
    return {};
  },
  computed: {
    styleTitle: {
      get() {
        return (
          "letter-spacing: 0.3em; font-weight: 800; color:white;  text-align: center; padding: 4px; background:rgb(" +
          this.color +
          ",0.8);  border-radius: 20px 20px 0px 0px;"
        );
      },
    },
    styleBody: function () {
      return (
        "font-size: 12px; letter-spacing: 0.1em; font-weight: 600; text-align: justify; padding: 8px; background:rgb(" +
        this.color +
        ",0.5);  border-radius: 0px 0px 20px 20px;"
      );
    },
  },
};
</script>
