app.component('review-list', {
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },
    template:
    `
      <div class="review-container">
      <h3>Reviews:</h3>
        <ul>
          <li v-for="(review, index) in reviews" :key="index">
            {{ review.name }} gave this {{ review.rating }} stars
            <br/>
            "{{ review.review }}"
            <br/>
            They {{ review.recommend ? 'do' : 'do not' }} recommend this product.
            <br/>
          </li>
        </ul>
      </div>
    `
})