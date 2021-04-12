<template>
  <div class="Procesos">
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <div class="wrapper">
      <div v-for="(proceso, key) in procesos" :key="key">
        <h3>{{ proceso.titulo }}</h3>
        <draggable :list="proceso.data" group="tarea" @change="log($event, key)">
          <div v-for="t in proceso.data" :key="t.id">
            <PostIt
              style="cursor: move; margin: 4px 4px 4px 4px"
              :titulo="t.titulo"
              :color="t.color"
            >
              <p>
                {{ "Descripción: " + t.descripcion }}
              </p>
              <p>
                {{ "Tiempo: " + t.tiempo }}
              </p>
            </PostIt>
          </div>
        </draggable>
      </div>
    </div>
    <pre>
      {{ procesos }}
    </pre>
  </div>
</template>

<script>
// @ is an alias to /src
/* import HelloWorld from "@/components/HelloWorld.vue";
 */
import draggable from "vuedraggable";
export default {
  name: "Procesos",
  components: {
    draggable,
    //  HelloWorld
  },
  data() {
    return {
      procesos: [
        {
          data: [
            {
              titulo: "tarea 1",
              id: 1,
              descripcion:
                " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
              color: "163, 163, 163",
              tiempo: "",
            },
            {
              titulo: "tarea 2",
              id: 0,
              descripcion:
                " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
              color: "242, 238, 15",
              tiempo: "",
            },
          ],
          titulo: "Tareas",
        },
        {
          data: [],
          titulo: "Procesando",
        },
        {
          data: [],
          titulo: "realizadas",
        },
      ],
    };
  },
  methods: {
    log: function (evt, key) {
      window.console.log(evt);
      window.console.log("Key", key);
      if (key == 1 && evt.added) {
        console.log("asd", this.procesos[1]);
        this.procesos[1].data[evt.added.newIndex].tiempo = new Date();
      }
      if (key == 0 && evt.added) {
        console.log("asd", this.procesos[1]);
        if (this.procesos[key].data[evt.added.newIndex].tiempo) {
          this.procesos[key].data[evt.added.newIndex].tiempo = this.time(
            new Date() - this.procesos[key].data[evt.added.newIndex].tiempo
          );
        }
      }
    },
    time(ms) {
      var hs = Math.floor((ms / 1000 / 60 / 60) << "00");
      var min = Math.floor((ms / 1000 / 60) << "00");
      var sec = Math.floor((ms / 1000) % 60);
      if (sec < 10) sec = "0" + sec;
      if (min < 10) min = "0" + min;
      if (hs < 10) hs = "0" + hs;

      return hs + ":" + min + ":" + sec;
    },
  },
};
</script>
<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}
</style>
