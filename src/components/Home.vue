<template>
    <h1>Home Page</h1>
  </template>

  <script>
    import { onMounted } from 'vue'

    export default {
        setup(props, context)
        {
            onMounted(() => {
                context.emit("id-menu", 1);
            })
        }
    }
</script>