<script>

</script>

<template>
    <div class="about-section">
        <div class="text-column">
            <h1 data-test="about-title">Sobre nosotros</h1>
            <br/>
            <p>Lorem ipsum dolor sit amet consectetur. Et donec adipiscing mauris varius risus. Lobortis sed ut velit tempor curabitur parturient eget.</p>
            <br/>
            <p>Lorem ipsum dolor sit amet consectetur. Maecenas viverra sem sociis lorem. Iaculis non ultricies suspendisse vitae tempor interdum aliquam quisque. Turpis ultricies sit consectetur sollicitudin fermentum sed eget. Enim sapien nascetur parturient sem vivamus sit.</p>
            <br/>
            <div class="read-more">
                <a href="">
                    Leer más
                    <span class="material-icons">
                        arrow_forward
                    </span>
                </a>
            </div>
        </div>

        <img src="../assets/images/restaurant.jpg" alt="restaurant">
    </div>
</template>

<style scoped>
    @import url('https://fonts.googleapis.com/icon?family=Material+Icons');

    h1 {
        color: white;
    }

    img {
        width: 300px;
        height: 420px;
        border-radius: 40px 12px 40px 12px;
        object-fit: cover;
    }

    a {
        display: flex;
        padding: 0;
        width: 97px;
        transition: 0.2s;
    }

    a:hover {
        color: #EF7446;
    }

    a:hover .material-icons {
        color: #EF7446;
    }

    .about-section {
        padding: 4rem 0;
        height: 80vh;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: #2F2F2F;
    }

    .text-column {
        margin-right: 4rem;
        width: 300px;
        display: flex;
        flex-direction: column;
        text-align: start;
    }

    .read-more {
        display: flex;
        flex-direction: row;
        justify-content: end;
        color: #F1916D;
        transition: 0.2s;
    }

    .material-icons {
        font-family: 'Material Icons';
        font-weight: normal;
        font-style: normal;
        font-size: 24px;
        display: flex;
        line-height: 1;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: normal;
        white-space: nowrap;
        direction: ltr;
        color: #F1916D;
        margin-left: 4px;
        width: min-content;
        transition: 0.2s;

        /* Support for all WebKit browsers. */
        -webkit-font-smoothing: antialiased;
        /* Support for Safari and Chrome. */
        text-rendering: optimizeLegibility;

        /* Support for Firefox. */
        -moz-osx-font-smoothing: grayscale;

        /* Support for IE. */
        font-feature-settings: 'liga';
    }

    @media (max-width: 920px) {
        .about-section {
            height: auto;
            padding: 4rem 2rem;
            flex-direction: column;
        }

        .text-column {
            margin: auto;
            width: auto;
        }

        img {
            width: inherit;
            margin-top: 2rem;
        }
    }
</style>