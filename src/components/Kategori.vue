<template>
    <h1 style="text-align: center;">Kategori</h1>
    <div class="flex-container">
        <div v-for="kategori in state" :key="kategori.id" class="card">
            <img :src="getImgSrc(kategori.img)" width="200" height="120" alt="Category Image" style="margin-left: 2 %;"/>
            <router-link class="container" :to="{name: 'DetailKategori', params: { id_kategori: kategori.id }}">
                <h4>{{ kategori.nama }}</h4>
            </router-link>
        </div>
    </div>
</template>

<script>
    import { onMounted, reactive } from 'vue'
    import { kategori } from '@/assets/Kategori';

    export default {
        setup(props, context)
        {
            const state = reactive(kategori ["kategori"]);

            const getImgSrc = (imgFileName) => {
                return '../src/assets/img/' + imgFileName + '';
            }

            onMounted(() => {
                context.emit("id-menu", 5);
            });

            return {
                state,
                getImgSrc
            }
        }
    }
</script>   
<style scoped>
.flex-container {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    margin-left: 6.5%;
}
.card{
    /* Add shadows to create the "card" effect */
    box-shadow: 0 10px 8px 0 hwb(193 0% 0% / 0.2);
    transition: 0.3s;
    margin: 10px;
    min-width: 200px;
    cursor: pointer;
}

/* On mouser-over, add a deeper shadow */
.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
/* Add some padding inside the card container */
.container {
    padding: px 16px;
}
</style>