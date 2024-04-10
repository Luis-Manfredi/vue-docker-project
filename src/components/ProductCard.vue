<script>
    export default {
        props: {
            title: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            category: {
                type: String,
                required: true
            },
            source: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            }
        },
        methods: {
            onClick() {
                console.log('Product Card clicked')
            }
        }
    }
</script>

<template>
    <div class="product-card">
        <img :src="source" alt="product-images">
        <div class="text-wrapper">
            <p>{{ category }}</p>
            <h3>{{ title }}</h3>
            <p>{{ description }}</p>
        </div>
    </div>
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

    h3 {
        color: #F1916D;
    }

    p {
        font-size: 12px;
    }

    img {
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
        height: 200px;
        object-fit: cover;
    }

    .product-card {
        margin: 0 1rem;
        height: auto;
        width: 260px;
        border-radius: 12px;
        background-color: #2F2F2F;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
        transition: 0.2s;
        cursor: pointer;
    }

    .product-card:hover {
        box-shadow: 0 4px 12px rgba(239, 115, 70, 1);
    }

    .text-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: start;
        padding: 1rem;
        text-align: justify;
    }
</style>