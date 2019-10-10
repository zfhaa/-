export default { //请求电影数据
    async getMovies(page, pageSize) {
        const datas = await fetch("https://api.myjson.com/bins/15f8x1").then(resp => resp.json())
        return {
            total: datas.length,
            datas: datas.slice((page - 1) * pageSize, page * pageSize)
        }
    },
    async getMovie(id) {//请求电影数据的id
        const datas = await fetch("https://api.myjson.com/bins/15f8x1").then(resp => resp.json())
        return datas.find(item => item._id === id);
    }
}