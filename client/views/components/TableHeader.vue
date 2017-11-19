<template>
    <div class="table-header vert-aligned-list">
        <h4 class="item">Артикул</h4>
        <h4 class="item">Название товара</h4>
        <h4 class="item">Бренд</h4>
        <h4 class="item">Вес</h4>
        <h4 class="item">Фасовка</h4>
        <h4 class="item">Цена</h4>
        <h4 class="item">Наличие</h4>
    </div>
</template>

<script>
    export default {
        name: 'TableHeader',
    }
</script>

<style lang="scss" scoped="">

    .table-header {
        margin-bottom: 1.2rem;

        .item { width: 15%; margin-right: 1.2rem; }
    }

</style>