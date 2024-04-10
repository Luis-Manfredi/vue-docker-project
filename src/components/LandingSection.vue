<script setup>
    import PrimaryButton from '../components/PrimaryButton.vue'
</script>

<template>
    <div class="landing-section">
        <div class="content-block">
            <h1 data-test="landing-title">Un ambiente excelente para ti</h1>
            <h3>El mejor entorno para disfrutar en compañía de tus seres queridos</h3>
            <PrimaryButton text="Reservar una mesa"/>
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

    .landing-section {
        margin-top: 60px;
        height: 80vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-image: url('../assets/images/restaurant.jpg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }

    .landing-section::before {
        content: '';
        position: absolute;
        background-color: black;
        opacity: 0.4;
        height: 80vh;
        width: 100%;
    }

    .content-block {
        z-index: 100;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .content-block h1 {
        margin-bottom: 12px;
        color: white;
    }

    .content-block h3 {
        margin-bottom: 24px;
        font-weight: 500;
    }

    @media (max-width: 780px) {
        .content-block {
            padding: 2rem;
        }
    }
</style>