
const getters = {
    count(stare, getters, rootState) {
        return rootState.counter.count + rootState.doubleCounter.count
    }
}