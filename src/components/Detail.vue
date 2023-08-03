<template>
    <div v-if="detail == undefined " style="text-align: center;">
        <h3>Nama produk tidak tersedia untuk ID {{ id_produk }}</h3>
    </div>
  <div v-else>
    <center>
    <h1>Detail {{ detail.nama }}</h1>
    <h4>Harga : {{ detail.harga }}</h4>
</center>
  </div>
</template>

<script>
    import { produk } from '@/assets/Produk'
    export default {
        props: [
            "id_produk",
           
    ],
    setup(props)
    {
        const detail = produk["produk"].find(function(item) {
            return item.id == props.id_produk;
        });
        {

        return{
            detail
        }
    }
}
    }
</script>


