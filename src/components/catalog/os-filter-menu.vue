<template>
    <div class="os-filter-menu">
        <div 
            class="os-filter-menu__categories_list"
            v-for="filter in itemFilters"
            :key="filter.id"    
            
        >
            <p 
                class="os-filter-menu__categories_list_name"
                @click="areCategoriesVisible[filter.id] = !areCategoriesVisible[filter.id]"
            >
                {{filter.type}}
            </p>
            <div 
                class="os-filter-menu__subcategories_list"
                v-if="areCategoriesVisible[filter.id]"
            >
                <p
                    class="os-filter-menu__subcategories_list_name"                   
                    v-for="category in filter.categories"
                    :key="category.id"
                    @click="selectCategory(category, filter)"
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
    export default {
        name: "os-filter-menu",
        data() {
            return {
                
                areCategoriesVisible: [],
                number: ''
            }
        },
        props: {
            itemFilters: {
                type: Array,
                default() {
                    return []
                }
            },
            selected: {
                type: String,
                default() {
                    return ''
                }
            }
        },
        methods: {
            selectCategory(category, filter) {
                this.$emit('select', category, filter)
                this.areCategoriesVisible[filter.id] = false;
            },
            hideSelect() {
                for (let i = 0; i<this.areCategoriesVisible.length; i++) { 
                    this.areCategoriesVisible[i] = false;
                }
            }
        },
        mounted() {
            for (let i=0; i<this.itemFilters.length; i++) {
                this.areCategoriesVisible.push(false);
            }
            document.addEventListener('click', this.hideSelect.bind(this), true);
        },
        beforeUnmount() {
            document.removeEventListener('click', this.hideSelect)
        }
    }
</script>

<style lang="scss">
    .os-filter-menu{
        width: 100%;
        position: fixed;
        top: 60px;
        height: 43px;

        display: flex;
        align-items: flex-start;
        justify-content: center;
        background-color: white;

        
        &__categories_list{
            width: 150px;
            margin-right: 75px;
            margin-left: 75px;
            box-sizing: border-box;
            position: relative;
            
              
            
            &_name:hover{
                cursor: pointer;
                color: rgb(107, 107, 107);
            }
        }
        
        &__subcategories_list{
            position: absolute;
            top: 34px;
            left: -10px;
            width: 150px;
            background-color: white;
            border: 1px solid black;
            padding: 10px;
            box-sizing: border-box;
            color: black;

            &_name:hover{
                color: rgb(107, 107, 107);
                cursor: pointer;
            }
        }
       
        
    }
</style>