<template>
    <div class="controls">
        <header class="filters vert-aligned-list">
            <div class="item title">
                <img src="./../../assets/images/filter.svg">
                <h3>Фильтры</h3>
            </div>
            <div class="item">
                <p>Бренды:</p>
                <a @click="sortItems('brand')">
                    <span v-if="sorted==false" class="transparent">Отсортировать</span>
                    <span v-if="sorted==true && direction==false">По возрастанию ↑</span>
                    <span v-if="sorted==true && direction==true">По убыванию ↓</span>

                </a>
            </div>
            <div class="item reset">
                <a @click="resetFilters">Сбросить фильтры</a>
            </div>
        </header>

        <strong class="transparent">{{ itemCount }} товаров</strong>
    </div>
</template>

<script>
    export default {
        name: 'Controls',
        props: ['pageItems'],
        data() {
            return {
                sorted: false,
                direction: false,
            }
        },
        computed : {
            itemCount () {
                return this.$store.getters.itemCount
            }
        },
        methods : {
            resetFilters() {
                this.$parent.resetItems();
            },
            sortItems(field) {

                if (this.direction == true) {
                    this.$parent.sortItems("-"+field);
                    this.$parent.getItems(this.$parent.currPage);
                    this.direction = !this.direction
                    this.sorted = true;
                } else {
                    this.$parent.sortItems(field);
                    this.$parent.getItems(this.$parent.currPage);
                    this.direction = !this.direction;
                    this.sorted = true;
                }}
        },

        mounted() {
        }
    }
</script>

<style lang="scss" scoped="">

        .controls {
            margin-bottom: 2.4rem;
        }

        .filters {
            margin-bottom: 1.2rem;
            padding: 1.2rem;
            border-bottom: 1px solid rgba(0,0,0,0.1);


            img { display: inline-block; height: 1.8rem; margin-right: .6rem}

            .title { margin-right: 2.4rem}
            .reset { margin-left: auto }

        }



        strong { display: block; padding: 0 1.2rem}


</style>