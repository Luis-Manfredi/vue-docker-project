<script setup>

</script>

<template>
    <div class="footer">
        <img src="../assets/images/logo.svg" alt="logo">

        <div class="media-column">
            <a href="">Instagram</a>
            <a href="">Facebook</a>
            <a href="">Twitter</a>
        </div>

        <div class="nav-column">
            <a href="">Menú</a>
            <a href="">Servicio</a>
            <a href="">Nosotros</a> 
        </div>

        <div class="subscribe-column">
            <a href="">Contáctenos</a>
            <a href="">Suscríbete a nuestro newsletter</a>
            <form action="" data-test="subscribe-form">
                <input 
                    id="email-input" 
                    type="email"
                    placeholder="Correo electrónico"
                >
                <button data-test="subscribe-btn">
                    Suscríbete
                </button>
            </form>
        </div>
    </div>
</template>

<style scoped>
    form {
        display: flex;
        flex-direction: row;
    }

    img {
        height: 100px;
        width: min-content;
        margin-right: 2rem;
    }

    button {
        margin: auto 0;
        height: 50px;
        width: 100px;
        outline: none;
        background-image: linear-gradient(to right, #F1916D, #EF7446);
        border: none;
        border-radius: 0 6px 6px 0;
        color: #181818;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(239, 115, 70, 0);
        transition: 0.2s;
    }

    a {
        height: 50px;
        display: flex;
        align-items: center;
    }

    ::placeholder {
        color: #ebebeba3;
    }

    .footer {
        padding: 4rem 0;
        height: 40vh;
        background-color: #252525;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .media-column, .nav-column {
        margin: 0 2rem;
        display: flex;
        flex-direction: column;
        width: min-content;
    }

    .media-column a, .nav-column a {
        color: #ebebeba3;
    }

    .media-column a:hover, 
    .nav-column a:hover, 
    .subscribe-column a:hover {
        color: #F1916D;
    }

    .subscribe-column {
        margin-left: 2rem;
        display: flex;
        flex-direction: column;
        width: min-content;
    }

    .subscribe-column a {
        color: #ebebeba3;
    }

    #email-input {
        padding: 1rem 0.7rem;
        color: #EF7446;
        height: 50px;
        width: 160px;
        background-color: #00000000;
        border-style: solid;
        border-radius: 6px 0 0 6px;
        border-color: #F1916D;
        outline-color: #F1916D;
        font-family: Poppins;
    }

    @media (max-width: 920px) {
        a {
            font-size: 1rem;
            width: auto;
            justify-content: center;
        }

        .footer {
            height: auto;
            flex-direction: column;
        }

        .nav-column, .media-column, .subscribe-column {
            margin: 1rem auto;
        }

    }
</style>