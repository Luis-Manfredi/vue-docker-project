<script>
    import OutlinedButton from '../components/OutlineButton.vue';
    import { RouterLink } from 'vue-router'

    export default {
        components: {
            OutlinedButton
        },
        methods: {
            showMenu() {
                let content = document.getElementsByClassName('dropdown-content')[0];
                
                if (content.hasAttribute('style')) {
                    content.removeAttribute('style')
                } else {
                    content.setAttribute('style', 'display: flex');
                }
            },
            closeMenu() {
                let content = document.getElementsByClassName('dropdown-content')[0];
                content.removeAttribute('style');
            }
        }
    }
</script>

<template>
    <nav>
        <img src="../assets/images/logo.svg" alt="logo">

        <ul>
            <li>
                <router-link to='/'>
                    Inicio
                </router-link>
            </li>
            <li>
                <router-link to='/servicio'>
                    Servicio
                </router-link>
            </li>
            <li>
                <router-link to='/nosotros'>
                    Nosotros
                </router-link>
            </li>
        </ul>

        <!-- Buttons -->
        <OutlinedButton text="Contacto" />

        <!-- Dropdown Menu -->
        <div class="dropdown" data-test="appbar-menu">
            <div class="dropdown-btn" @click="showMenu">
                <span class="material-icons">menu</span>
            </div>

            <div class="dropdown-content" data-test="dropdown-content">
                <router-link to='/'>
                    Inicio
                </router-link>
                <router-link to='/servicio'>
                    Servicio
                </router-link>
                <router-link to='/nosotros'>
                    Nosotros
                </router-link>
                <div style="height: 1px; background-color: rgba(84, 84, 84, 0.48);"></div>
                <button class="close-btn" @click="closeMenu" data-test="close-btn">Cerrar</button> 
            </div>
        </div>
    </nav>
</template>

<style scoped>
    @import url('https://fonts.googleapis.com/icon?family=Material+Icons');

    * {
        font-family:
        Poppins,
        sans-serif;
    }

    :root {
        --background-color-light: #f1f1f1;
        --background-color-dark: #252525;
    }

    img {
        width: 125px;
    }

    nav {
        display: flex;
        position: fixed;
        z-index: 200;
        flex-direction: row;
        justify-content: space-between;
        padding: 0 10rem;
        height: 80px;
        width: 100%;
        background-color: #252525;
    }

    nav ul {
        height: inherit;
        width: min-content;
        display: flex;
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    li {
        height: inherit;
        width: 100px;
        display: flex;
        justify-content: center;
        place-items: center;
        transition: 0.2s;

        text-align: center;
        font-weight: 500;
        font-family:
            Inter,
            sans-serif;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    li:hover {
        cursor: pointer;
        background-color: #202020;
    }

    li:hover a {
        color: white;
    }

    .wrapper {
        margin: 0 auto;
    }

    .material-icons {
        font-family: 'Material Icons';
        font-weight: normal;
        font-style: normal;
        font-size: 38px;
        display: flex;
        line-height: 1;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: normal;
        white-space: nowrap;
        direction: ltr;
        color: #F1916D;
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

    /* Dropdown Menu */
    .dropdown {
        display: none;
    }

    .dropdown-content {
        display: none;
        flex-direction: column;
        position: absolute;
        background-color: #2F2F2F;
        border-radius: 6px;
        padding: 1rem 0;
        /* padding-bottom: 0; */
        min-width: 160px;
        box-shadow: 0 4px 12px rgba(239, 115, 70, 1);
        z-index: 200;
        top: 3rem;
        right: 1.5rem;
        text-align: center;
    }

    .close-btn {
        height: 50px;
        /* margin-top: 1rem; */
        display: flex;
        justify-content: center;
        align-items: center;
        color: #f1f1f1;
        background-color: #00000000;
        border: none;
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;
        cursor: pointer;
    }

    .close-btn:hover {
        background-color: #202020
    }

    @media (max-width: 920px) {
        nav {
            padding: 0 2rem;
        }

        button {
            display: none;
        }

        nav ul {
            display: none;
        }

        .dropdown {
            width: auto;
            position: relative;
            display: flex;
        }

        .dropdown-btn {
            width: 42px;
            cursor: pointer;
            margin: auto;
        }

        .dropdown-content a {
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .dropdown-content a:hover {
            background-color: #202020;
        } 
    }

    /* @media (min-width: 1280px) {
        nav {
            padding: 0 10rem;
        }
    } */
</style>