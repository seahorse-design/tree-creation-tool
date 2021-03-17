Vue.createApp({
    data() {
        return {
            items: [
                {id: 0, value:"item-0", indent: 0},
                {id: 1, value:"item-1", indent: 1},
                {id: 2, value:"item-0", indent: 1},
            ]
        }
    },
    computed: {
        tree() {
            return this.items.map(item => item.value).join('\n');
        }
    }
}).mount('#app')