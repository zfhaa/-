import Movie from '../components/movie.js'
import MovieService from '../services/movieService.js'
import Loading from '../components/loading.js'

const template = `
<div class="data-container">
<Movie v-if="movie" :data="movie"></Movie>
<Loading :show="isLoading"></Loading>
</div>
`

export default {
    template,
    components: {
        Movie,
        Loading
    },
    data(){
        return{
          movie:null,
          isLoading:false
        }
    },
    mounted() {
        const id = this.$route.params.id;
            this.isLoading = true
        MovieService.getMovie(id).then(resp=>{
            this.movie = resp
            this.isLoading = false
        })

    }
}