<template>
    <div class="os-filter-menu">
        <div 
            class="os-filter-menu__categories_list"
            v-for="category in CATEGORIES"
            :key="category.id"    
            
        >
            <p 
                class="os-filter-menu__categories_list_name"
                @click="areCategoriesVisible[category.id] = !areCategoriesVisible[category.id]"
            >
                {{category.type}}
            </p>
            <div 
                class="os-filter-menu__subcategories_list"
                v-if="areCategoriesVisible[category.id]"
            >
                <p
                    class="os-filter-menu__subcategories_list_name"                   
                    v-for="subcategory in category.subcategories"
                    :key="subcategory"
                    @click="selectCategory(category, subcategory)"
                >
                    {{subcategory}}
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
import {mapActions, mapGetters} from 'vuex'

    export default {
        name: "os-filter-menu",
        data() {
            return {
                
                areCategoriesVisible: [],
            }
        },
        computed: {
            ...mapGetters([
                'CATEGORIES'
            ])
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
            ...mapActions([

            ]),
            selectCategory(category, subcategory) {
                this.$emit('select', subcategory)
                this.areCategoriesVisible[category.id] = false;
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
        margin: 0 0;

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