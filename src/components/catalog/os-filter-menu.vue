<template>
    <div class="os-filter-menu">
        <div 
            class="os-filter-menu__category"
            v-for="filter in itemFilters"
            :key="filter.id"    
            
        >
            <p 
                class="os-filter-menu__category_name"
                @click="areCategoriesVisible = !areCategoriesVisible"
            >
                {{filter.type}}
            </p>
            <div 
                class="os-filter-menu__categories_list"
                v-if="areCategoriesVisible"
            >
                <p
                    v-for="category in filter.categories"
                    :key="category.id"
                >
                    {{category.name}}
                </p>
            </div>

            
        </div>
            
        <div
            v-for="category in itemFilters.categories"
            :key="category.id"
        >
            Name: {{category.name}}
        </div>
            
    </div>
</template>

<script>
    export default{
        name: "os-filter-menu",
        data() {
            return {
                areCategoriesVisible: false
            }
        },
        props: {
            itemFilters: {
                type: Array,
                default() {
                    return []
                }
            }
        }
    }
</script>

<style lang="scss">
    .os-filter-menu{
        width: 100%;
        position: fixed;
        top: 60px;

        display: flex;
        align-items: flex-start;
        justify-content: center;
        background-color: white;

        
        &__category{
            width: 150px;
            margin-right: 75px;
            margin-left: 75px;
            box-sizing: border-box;
            position: relative;

            &_name{
                cursor: pointer;
            }
        }
    }
</style>