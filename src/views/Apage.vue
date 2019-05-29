<template>
    <div>
        This is A Page<br>
        <button @click="plus">+</button>{{count}}
        
    </div>
</template>

<script>
export default {
    data(){
        return {
            count : 0
        }
    },
    methods: {
        plus(){
            this.count++
            if(this.count > 10){
                this.$router.push("/b")
            }
        }
    },
}
</script>

<style>

</style>
