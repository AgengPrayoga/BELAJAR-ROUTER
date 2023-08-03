<template>
    <h1 style="text-align: center;">Produk</h1>
    <div class="flex-container">
        <div v-for="produk in detail" :key="produk.id" class="card">
            <img :src="getImgSrc(produk.img)" width="200" height="120" alt="Category Image" style="margin-left: 2 %;"/>
            <router-link class="container" :to="{ name: 'Detail', params: { id_produk: produk.id }}">
                <h4>{{ produk.nama }}</h4>
            </router-link>
        </div>
    </div>
</template>
<script>
    import { kategori } from '../assets/kategori'
    import { produk } from '../assets/Produk'
    export default {
        props: [
            "id_kategori",
           
    ],
    setup(props)
    {
        const detailkategori = kategori ["kategori"].find(function(item) {
            return item.id == props.id_kategori;
        });
        const detail = produk["produk"].filter(function(item) {
            return item.id_kategori == props.id_kategori;
        });
        
        const getImgSrc = (imgFileName) => {
                return '../src/assets/img/' + imgFileName + '';
            }
        return{
            detailkategori,
            detail,
            getImgSrc
        }
    }
}
</script>
<style scoped>
.flex-container {
    display: flex;
}
.card{
    /* Add shadows to create the "card" effect */
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    margin: 10px;
    min-width: 200px;
    cursor: pointer;
    margin-left: 11.5%;
    text-align: center;
}

/* On mouser-over, add a deeper shadow */
.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
/* Add some padding inside the card container */
.container {
    padding: 2px 16px;
}
</style>