import { getHomeHotSuggests } from "@/services";
import { defineStore } from "pinia";

const useHomeStore = defineStore("home", {
    state: () => ({
        hotSuggests: [],
        categories: []
    }),
    actions: {
        async fetchHotSuggests() {
            const res = await getHomeHotSuggests()
            this.hotSuggests = res.data
        }
    }
})

export default useHomeStore

