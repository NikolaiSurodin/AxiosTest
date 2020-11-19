import Vue from 'vue';
import loader from "@/components/loader";
import axios from 'axios'
import SlidingPagination from 'vue-sliding-pagination'

let paginationMixin = {
    data() {
        return {
            items: [],
            loading: true,
            error: false,
            currentPage: 1,
            page: 1,
            totalPages: 22,
            urlPart: ''
        }
    },
    components: {
        Vue, loader, SlidingPagination
    }
    ,
    methods: {
        GetItemsList(page) {
            this.currentPage = page

            axios
                .get(`https://sel-api.justplay.gg/api/v1/${this.urlPart}`, {params: {page: this.currentPage}})
                .then(response => {
                    this.$router.push(`${this.$route.path}#page=${page}`)
                    this.items = response.data.data
                    this.currentPage = response.data.meta.current_page
                    this.totalPages = response.data.meta.last_page
                    this.loading = false
                })
                .catch(error => {
                    console.log(error)
                    this.errored = true
                })
        }
    },
    mounted() {
        if (this.$route.hash.indexOf('#page=') > -1) {
            this.currentPage = parseInt(this.$route.hash.replace('#page=', ''))
        } else {
            this.currentPage = 1
        }
        this.GetItemsList(this.currentPage)
    }
}
export default paginationMixin