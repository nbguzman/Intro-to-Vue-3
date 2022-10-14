const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id ) {
            this.cart.push(id)
        },
        removeFromCart(id) {
            let indexOfID = this.cart.indexOf(id)
            if (indexOfID > -1) {
                this.cart.splice(indexOfID, 1)
            }
        }
    },
    computed: {
        numInCart() {
            return this.cart.length
        }
    }
})
