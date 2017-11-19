<template>
    <div class="pagination">
        <div class="navigation">
            <button v-if="hasPrev()" class="item prev" @click="changePage(prevPage)">←</button>

            <ul>
                <li v-if="hasFirst()"><a @click="changePage(1)">1</a></li>
                <li v-for="number in pageCounter"><a :class="{ current: page == number }" @click="changePage(number)">{{ number }}</a></li>
                <li v-if="hasLast()"><a @click="changePage(maxPages)">{{ maxPages }}</a></li>
            </ul>

            <button v-if="hasNext()" class="item prev" @click="changePage(nextPage)">→</button>
        </div>
    </div>

</template>

<script>

    export default {
        name: 'Pagination',
        props: ['page','amount'],
        data() {
            return {
                pageRange: 2
            }
        },
        computed: {
            maxPages() {
                return this.$store.getters.maxPages
            },

            pageCounter() {

                var pages = [];

                for (var i = this.rangeStart; i <= this.rangeEnd; i++) {
                    pages.push(i);
                }

                return pages;
            },

            rangeStart() {
              var start = this.page - this.pageRange;

              return (start > 0) ? start : 1
            },

            rangeEnd() {
              var end = this.page + this.pageRange;
              return (end < this.maxPages) ? end : this.maxPages;
            },

            nextPage() {
                return (this.page < this.maxPages) ? this.page + 1 : this.page;
            },

            prevPage() {
                return (this.page > 1) ? this.page - 1 : this.page;
            },

        },
        methods: {
            changePage(page) {
                this.$emit('page-changed',page);
                this.$store.commit('changePage', page);

            },
            hasFirst() {
                return this.rangeStart !== 1;
            },
            hasLast() {
                return this.rangeEnd < this.maxPages;
            },
            hasPrev() {
                return this.page > 1;
            },
            hasNext() {
                return this.page < this.maxPages;
            }
        }
    }

</script>

<style lang="scss" scoped="">


    .pagination {
        padding: 0 1.2rem;
        display: flex;

        .navigation {

            vertical-align: middle;

            margin-left: auto;

            & > * { display: inline-block; vertical-align: middle}


        }
    }

    ul {
        margin: 0 1.2rem;
        li {
            display: inline-block;
            margin-right: 1.2rem;

            a {
                font-size: 1.2rem;

                &.current {
                    opacity: 1;
                }
            }

            &:last-of-type { margin-right: 0; }
        }
    }

</style>