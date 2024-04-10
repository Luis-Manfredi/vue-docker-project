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
                console.log('Primary clicked')
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
        width: 300px;
        outline: none;
        background-image: linear-gradient(to right, #F1916D, #EF7446);
        border: none;
        border-radius: 6px;
        color: #181818;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(239, 115, 70, 0);
        transition: 0.2s;
    }

    button:hover {
        color: white;
        box-shadow: 0 4px 12px rgba(239, 115, 70, 1);
    }
</style>