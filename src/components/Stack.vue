
<script setup lang="ts">
import {Stack} from '../../package/ds'
let stack = new Stack()
stack.push(1)
console.log(stack)

</script>

<template>
    <main>
        <canvas></canvas>

    </main>
</template>

<style scoped>
main {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
