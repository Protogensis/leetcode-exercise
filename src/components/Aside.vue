<script setup lang="ts">

</script>

<template>
    <aside>
        <RouterLink :to="{path:'/'}">主页</RouterLink>
        <h1>数据结构</h1>
        <RouterLink :to="{path:'/stack'}">栈</RouterLink>
    </aside>
</template>

<style scoped>
aside{
    width: 300px;
    height: 100vh;
    background-color: rgb(211, 211, 211);
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-radius: 5px;
}

h1{
    text-align: center;
}

a{
    color: black;
    text-decoration-line: none;
    font-size:medium;
    text-underline-offset: 5px;
}

a:hover{
    text-decoration-line:underline ;
    color: red;
}


</style>