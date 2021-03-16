const Catalog = {
    data() {
        return {
            catalogJSON: 'catalog.json',
            products: [],
            productsOnIndexPage: null,
            productsOnProductsPage: null
        }
    },
    methods: {
        getJSON(jsonForCatalog) {
            fetch(jsonForCatalog)
                .then((result) => {
                    return result.json();
                })
                .then((objWithProducts) => {
                    return objWithProducts;
                })
        },
        getProducts(jsonForCatalog) {
            let objWithProducts = this.getJSON(jsonForCatalog);
            for (product of objWithProducts) {
                this.products.push(product);
            }
            this.productsOnIndexPage = this.products.filter((product) => {
                if (this.products.indexOf(product) < 8) {
                    return product;
                }
            })
            this.productsOnProductsPage = this.products.filter((product) => {
                if (this.products.indexOf(product) > 8) {
                    return product;
                }
            })
        }
    },
    mounted() {

    }
}


Vue.createApp(Catalog).mount('.products-cards');