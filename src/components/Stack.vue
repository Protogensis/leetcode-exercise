
<script setup lang="ts">
import { ref,onMounted } from 'vue'
import { Stack } from '../../package/ds';
const stack = new Stack()
stack.pushArray([1, 2, 3])


const text = ref('0')
onMounted(()=>{
    const s = document.querySelector('.stackc')
    console.log(s)
})


</script>

<template>
    <main>
        <div class="stackc">
            <div class="item">2</div>
            <div class="item">1</div>
        </div>

        <form action="" onsubmit="return func()">
            <div class="item" style="width: 100px;">{{ text }}</div>
            <input v-model="text" type="number" id="content">
            <input type="submit" value="push" >
            <input type="submit" value="pop" >
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
