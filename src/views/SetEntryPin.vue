<template>
    <div class="main-content container">
        <p class="caption-text">
            Set Entry Pin
        </p>
        <br>
        <at-input v-model="value" class="button"></at-input>
        <br>
        <br>
        <p class="description-text">
           This will make sure only who should join is able to join.
        </p>
        <at-button @click="handleClick" class="btn-success next-button">Next </at-button>
    </div>
</template>

<script>
    export default {
        name: 'SetEntryPin',
        data() {
            return {
                value: ''
            }
        },
        methods: {
            handleClick() {
                this.$router.push({name: 'MessageFeed'});
            }
        }
    }
</script>