<script>
    export default {
        props: {
            id: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            image: {
                type: String,
                required: true
            }
        },
        methods: {
            onClick() {
                console.log('Selection Card clicked')
            },
        }
    }
</script>

<template>
    <div>
        <input type="radio" :id=id name="groupReserve">
        <div class="selection-card" @click="onClick">
            <label :for=id>
                <img :src=image alt="restaurant image">
                <h4>{{ name }}</h4>
            </label>
        </div>
    </div>
</template>

<style scoped>
    * {
        font-family:
            'Poppins',
            sans-serif;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    h4 {
        padding: 0.5rem;
        transition: 0.2s;
    }

    label {
        cursor: pointer;
    }

    img {
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
        height: 220px;
        object-fit: cover;
    }

    input[type="radio"] {
        display: none;
    }

    input[type="radio"]:hover {
        box-shadow: 0 4px 12px rgba(239, 115, 70, 1);
    }

    input[type="radio"]:checked + .selection-card {
        color: white !important;
        border-style: solid;
        border-color: white;
        box-shadow: 0 4px 12px rgba(239, 115, 70, 1);
    }

    .selection-card {
        display: inline-block;

        padding-bottom: 0.5rem;
        height: 300px;
        width: 200px;
        background-color: #252525;
        border-radius: 12px;
        transition: 0.2s;

        overflow: hidden;
    }

    .selection-card:hover {
        box-shadow: 0 4px 12px rgba(239, 115, 70, 1);
    }

    .selection-card:hover h4 {
        color: white;
    }


</style>