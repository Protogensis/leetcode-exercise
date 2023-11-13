
<script lang="ts">
export default {
    mounted() {
        let {canvas,ctx} = this.initCancas()
        window.addEventListener('resize',function(){
            canvas.width = canvas.offsetWidth
            canvas.height = canvas.offsetHeight
            ctx.fillStyle = "green";
            ctx.fillRect(10, 10, 100, 100);
        })
        

    },
    methods: {
        initCancas() {
            let canvas = document.getElementById('canvas') as HTMLCanvasElement;
            if (!canvas)
                throw new Error()
            console.log(canvas)
            const ctx = canvas.getContext('2d')
            if (!ctx)
                throw new Error()
            
            canvas.width = canvas.offsetWidth
            canvas.height = canvas.offsetHeight
            console.log(ctx)
            ctx.fillStyle = "green";
            ctx.fillRect(10, 10, 100, 100);
            return {canvas,ctx}

        }
    }
}



</script>

<template>
    <main>
        <canvas id="canvas"></canvas>
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

canvas {
    width: 100%;
    height: 100%;
}
</style>
