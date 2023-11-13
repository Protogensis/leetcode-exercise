<script setup lang="ts">
import Aside from "./components/Aside.vue";

</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="300px">
        <Aside></Aside>
      </el-aside>
      <RouterView></RouterView>
      
    </el-container>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


RouterView {
  width: 100%;
  height: 100%;
  flex-grow: 1;
  background-color: aqua;
}
</style>