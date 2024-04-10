<script>
    export default {
        props: {
            text: {
                type: String,
                required: true
            }
        },
        methods: {
            onClick() {
                console.log('Outlined clicked')
            }
        }
    }
</script>

<template>
    <button @click="onClick">
        {{ text }}
    </button>
</template>

<style scoped>
    * {
        font-weight: 600;
        line-height: 1.6;
        font-family:
            Poppins,
            sans-serif;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    button {
        margin: auto 0;
        height: 50px;
        width: 125px;
        outline: none;
        background-color: #00000000;
        border-radius: 6px;
        border-style: solid;
        border-width: 2px;
        border-color: #F1916D;
        color: #F1916D;
        cursor: pointer;
        transition: 0.2s;
    }

    button:hover {
        color: #EF7446;
        border-color: #EF7446;
    }
</style>