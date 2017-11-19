<template>
    <div class="stock-item vert-aligned-list">
        <div class="item">
            <p>{{ data.artnumber }}</p>
        </div>
        <div class="item">
            <p>{{ data.name }}</p>
        </div>
        <div class="item">
            <p>{{ data.brand }}</p>
        </div>
        <div class="item">
            <p>{{ data.weight }} г.</p>
        </div>
        <div class="item">
            <p>{{ data.quantity }} шт.</p>
        </div>
        <div class="item">
            <p>{{ data.price }} рублей</p>
        </div>
        <div class="item">
            <p v-if="data.stock == 1">Есть</p>
            <p v-else>Нет</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Item',
        props: ['data']
    }
</script>

<style lang="scss">
    .stock-item {
        padding: 1.2rem 0;

        .item { width: 15%; margin-right: 1.2rem; }

    }
</style>
