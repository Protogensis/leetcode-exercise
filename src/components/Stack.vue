
<script setup lang="ts">
import { ref } from 'vue'
import { Stack } from '../../package/ds';
const stack = new Stack()
stack.pushArray([1, 2, 3])

const arr = stack.toArray()

const text = ref('0')



</script>

<template>
    <main>
        <div class="stackc">
            <div class="item">1</div>
            <div class="item">2</div>
        </div>

        <form>
            <div class="item" style="width: 100px;">{{ text }}</div>
            <input v-model="text" type="number" id="content">
            <button id="push">PUSH</button>
            <button id="pop">POP</button>
        </form>
    </main>
</template>

<style scoped>
main {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.stackc {
    width: 100px;
    height: 300px;
    border-left: solid 2px black;
    border-right: solid 2px black;
    border-bottom: solid 2px black;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: left;

}

.item {
    margin-left: 10px;
    margin-right: 10px;
    height: 50px;
    margin-bottom: 10px;
    background-color: orange;
    text-align: center;
    color: white;


}

form {
    display: flex;
    flex-direction: column;
    margin-left: 50px;
}
</style>
