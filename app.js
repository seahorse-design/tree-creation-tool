Vue.createApp({
    data() {
        return {
            items: [
                {id: 0, value:"item-0", indent: 0},
                {id: 1, value:"item-1", indent: 1},
                {id: 2, value:"item-2", indent: 1},
            ],
            divs: []
        }
    },
    methods: {
        onInput(e, item){
            item.value = e.target.innerText;
        },
        onTab(item, index) {
            if (index === 0 ) return;
            if (this.items[index - 1].indent < item.indent) return;
            item.indent++;
        },
        onTabShift(item, index) {
            if(item.indent <= 1) return;
            item.indent--;

            for(let i = index + 1; i < this.items.length; i++){
                if(this.items[i - 1].indent + 2 !== this.items[i].indent) break;
                this.items[i].indent--;
            }
        },
        onUp(index) {
            if (index === 0) return;
            this.divs[index - 1].focus();
        },
        onDown(index) {
            if (index === this.items.length - 1) return;
            this.divs[index + 1].focus();
        },
    },
    computed: {
        tree() {
            return this.items.map(item => item.value + item.indent).join('\n');
        }
    }
}).mount('#app')