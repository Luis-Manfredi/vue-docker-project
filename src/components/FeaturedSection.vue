<script>
    import ProductCard from '../components/ProductCard.vue'
    import PrimaryButton from '../components/PrimaryButton.vue'
    import entradas from '@/assets/images/entradas.jpg'
    import pasta from '@/assets/images/pasta.jpg'
    import food from '@/assets/images/food.jpg'

    export default {
        components: {
            ProductCard,
            PrimaryButton
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
                ]
            }
        }
    }
</script>

<template>
    <div class="featured-section">
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
</template>

<style scoped>
    h1 {
        color: white;
        font-weight: 400;
    }

    .featured-section {
        padding: 4rem 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .cards-row {
        margin: 2rem 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center
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