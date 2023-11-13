
<script lang="ts">




</script>

<template>
    <main>
        <div class="stackc">
            <div class="item">1</div>
            <div class="item">2</div>
        </div>
    </main>
</template>

<style scoped>
main{
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.stackc{
    width: 100px;
    height: 300px;
    border-left: solid 2px black;
    border-right: solid 2px black;
    border-bottom: solid 2px black;
    display: flex;
    flex-direction: column;
   
}

.item{
    width: 96px;
    height: 30px;
    margin-top: 10px;
    background-color: orange;
    text-align: center;
    
}
</style>
