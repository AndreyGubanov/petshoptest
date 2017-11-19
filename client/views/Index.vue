<template>
    <section>
        <div id="catalog">
            <controls></controls>

            <div class="stock">

                <table-header></table-header>

                <item v-for="item in pageItems"
                      :key="item.id"
                      :data="item"
                ></item>
            </div>


            <pagination :page="currPage" @page-changed="getItems"></pagination>

        </div>

    </section>
</template>

<script>
    import {mapState} from 'vuex';

    import Controls from './components/Controls.vue';
    import Item from './components/Item.vue';
    import TableHeader from "./components/TableHeader.vue";
    import Pagination from "./components/Pagination.vue";

    export default {
        name: 'Index',
        components: {
            Pagination,
            TableHeader,
            Controls,
            Item
        },
        data() {
            return {
                pageItems: [],
                allItems: []
            }
        },

        computed: mapState([
            'json',
            'itemsPerPage',
            'currPage',
        ]),

        methods: {
            getItems(page) {
              var amount = this.itemsPerPage;
              this.pageItems = this.allItems.slice(page*amount-amount, page*amount);
            },

            sortItems(field) {
                function dynamicSort(prop) {
                    var sortOrder = 1;
                    if(prop[0] === "-") {
                        sortOrder = -1;
                        prop = prop.substr(1);
                    }
                    return function (a,b) {
                        var result = (a[prop] < b[prop]) ? -1 : (a[prop] > b[prop]) ? 1 : 0;
                        return result * sortOrder;
                    }
                }

                this.pageItems = this.allItems.sort(dynamicSort(field));
            },

            resetItems() {
                this.allItems = JSON.parse(JSON.stringify(this.json));
                this.getItems(this.currPage);
            }


        },

        mounted() {
            this.resetItems();
        }
    }
</script>

<style lang="scss" scoped="">

    #catalog {
        background: white;
        padding-bottom: 1.2rem;

        .stock {
            padding: 0 1.2rem 2.4rem;
            border-bottom: 1px solid rgba(0,0,0,0.1);
            margin-bottom: 1.2rem;
        }
    }

</style>