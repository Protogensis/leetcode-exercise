<script setup lang="ts">
import Aside from "./components/Aside.vue";
import { LinkedList } from "./assets/ds";

let list = new LinkedList()
list.push(1)

</script>

<template>
  <div id="container">
    <Aside></Aside>
    <RouterView></RouterView>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#container {
  display: flex;
  flex-direction: row;
  align-items: center;
}


Aside {
  width: 300px;
  height: 100vh;
}

RouterView{
  flex-grow: 1;
  background-color: aqua;
}
</style>
