<script>
    import ProductCard from '../components/ProductCard.vue'
    import PrimaryButton from '../components/PrimaryButton.vue'
    import SelectionCard from '../components/SelectionCard.vue'
    import entradas from '@/assets/images/entradas.jpg'
    import pasta from '@/assets/images/pasta.jpg'
    import food from '@/assets/images/food.jpg'
    import restaurant from '@/assets/images/restaurant.jpg'
    import restaurant_altern from '@/assets/images/restaurant_altern.jpg'

    export default {
        components: {
            ProductCard,
            PrimaryButton,
            SelectionCard
        },
        data() {
            return {
                products: [
                    {
                        title: 'Titulo Producto',
                        description: 'Lorem ipsum dolor sit amet consectetur. Et donec adipiscing mauris varius risus. Lobortis sed ut velit tempor curabitur parturient eget.',
                        category: 'Categoria',
                        source: entradas,
                        rating: 4.5
                    },
                    {
                        title: 'Titulo Producto',
                        description: 'Lorem ipsum dolor sit amet consectetur. Et donec adipiscing mauris varius risus. Lobortis sed ut velit tempor curabitur parturient eget.',
                        category: 'Categoria',
                        source: pasta,
                        rating: 4.5
                    },
                    {
                        title: 'Titulo Producto',
                        description: 'Lorem ipsum dolor sit amet consectetur. Et donec adipiscing mauris varius risus. Lobortis sed ut velit tempor curabitur parturient eget.',
                        category: 'Categoria',
                        source: food,
                        rating: 4.5
                    },
                ],
                cards: [
                    {
                        id: 'selectionCardOne',
                        name: 'Calle San Fernando, 28051',
                        image: restaurant,
                    },
                    {
                        id: 'selectionCardTwo',
                        name: 'Avenida Las Delicias, 27028',
                        image: restaurant_altern,
                    }
                ]
            }
        }
    }
</script>

<template>
    <main>
        <div class="featured-section services-margin-top">
            <h1 data-test="featured-title">Los mejores platos</h1>
            <h3>Comida especial y de calidad para ti. Disfruta de los platos más votados con nosotros.</h3>

            <div class="cards-row">
                <ProductCard v-for="(item, index) in products" :key="index" 
                :title=item.title
                :description=item.description
                :category=item.category
                :source=item.source
                :rating=item.rating  
                />
            </div>

            <PrimaryButton text="Ver menú"/>
        </div>

        <div class="reserves-section">
            <h1>¡Aquí puedes hacer tu reserva!</h1>
            <h3>Ahora puedes hacer tu reserva de mesa con nosotros aquí mismo de manera fácil y sencilla</h3>

            <br/>
            <br/>

            <form action="" class="reserve-form" data-test="reserve-form">
                <input type="text" placeholder="Tu nombre">
                <input type="email" placeholder="Correo electrónico">
                <input type="number" placeholder="Número de personas">
                <input type="date" placeholder="Fecha">

                <div class="selection-cards-row">
                    <!-- Here goes the custom selection cards -->
                    <SelectionCard 
                        v-for="(item, index) in cards" :key="index"
                        :id="item.id"
                        :name="item.name"
                        :image="item.image"
                        v-bind:data-test="item.id"
                    />
                </div>

                <PrimaryButton text='Enviar reserva' class="primary-btn-margin"/>
            </form>
        </div>
    </main>
</template>

<style scoped>
    h1 {
        color: white;
        font-weight: 400;
    }

    input {
        height: 55px;
        background-color: #252525;
        border-style: solid;
        border-radius: 6px;
        border-color: #F1916D;
        padding: 0 1rem;
        color: #EF7446;
        transition: 0.2s;
        font-family: 'Poppins';
    }

    input:hover {
        border-color: #EF7446;
    }

    input[type="date"]::-webkit-calendar-picker-indicator {
        filter: invert(1);
        color: #EF7446;
    }

    ::placeholder {
        color: #ebebeba3;
    }

    ::-webkit-input-placeholder {
        color: #ebebeba3;
    }

    .services-margin-top {
        margin-top: 60px;
    }

    .featured-section {
        padding: 4rem 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .reserves-section {
        padding: 4rem 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #2F2F2F;
        text-align: center;
    }

    .cards-row {
        margin: 2rem 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center
    }

    .reserve-form {
        width: 500px;
        display: grid;
        gap: 1.2rem;
    }

    .primary-btn-margin {
        margin: auto;
        margin-top: 1rem
    }

    .selection-cards-row {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }

    @media (max-width: 780px) {
        .featured-section {
            padding: 4rem 8rem;
        }

        .cards-row {
            flex-direction: column;
        }

        .cards-row .product-card {
            margin: 1rem;
        }

        .product-card {
            width: auto;
        }
    }

    @media (max-width: 560px) {
        .featured-section {
            padding: 4rem 2rem;
        }
    }
</style>