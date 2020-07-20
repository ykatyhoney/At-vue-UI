<template>
    <div class="main-content container">
        <p class="caption-text">
            Share Link
        </p>
        <a href="#" class="link-text">getagenda.com/ok1</a>
        <br><br><br>
        <at-button @click="handleClick" class="btn-success next-button">Next </at-button>
    </div>
</template>

<script>
    export default {
        name: 'ShareLink',
        methods: {
            handleClick() {
                this.$router.push({name: 'SetEntryPin'});
            }
        }
    }
</script>