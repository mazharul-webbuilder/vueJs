Vue.createApp({
    data(){
        return {
            firstName: "Lammim",
            lastName: "Islam",
            age: 26,
            status: "married",
            spouse: "Mazharul Islam",
            url: "https://www.youtube.com/",
            rawHtml: "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/hjfzFVw2Zjo?si=0J10tjyE6CZmpjeG\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>",
        }
    },
    methods: {
        getFullName: function () {
            return `${this.firstName.toUpperCase()} ${this.lastName.toUpperCase()}`
        },
        getStatus: function () {
            if (this.status === "married") {
                return `Married. Spouse Name: ${this.spouse}`
            } else {
                return this.status;
            }
        }
    }
}).mount('#app')