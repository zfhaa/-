import MovieList from '../components/movieList.js'
import Pager from '../components/pager.js'
import movieService from '../services/movieService.js'
import Loading from '../components/loading.js'



const template = `
<div>
<MovieList :movies="movies"></MovieList>
<Pager 
   :value="current"
   :total="total"
   :pageSize = "pageSize"
   @change="handlePageChange" >
   </Pager>
 <Loading :show="isLoading" />
</div>

`

export default {
    template,
    mounted() {
        this.setMovies();

    },
    methods: {
        setMovies() {
            this.isLoading = true;
            movieService.getMovies(this.current, this.pageSize).then(resp => {
                this.total = resp.total;
                this.movies = resp.datas;
                this.isLoading = false;
            })
        },
        handlePageChange(newPage) {
            this.current = newPage;
            this.setMovies();
        }
    },
    components: {
        MovieList,
        Pager,
        Loading
    },
    data() {
        return {
            current: 1,
            total: 0,
            pageSize: 2,
            movies: [],
            isLoading:false
        }
    },
}