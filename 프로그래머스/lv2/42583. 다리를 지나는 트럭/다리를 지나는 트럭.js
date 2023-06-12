function solution(bridge_length, weight, truck_weights) {
    const bridge = new Array(bridge_length).fill(0)
    let count = 0
    while (bridge.length) {
        count++
        bridge.shift()
        const totalWeight = bridge.reduce((acc, cur) => acc + cur, 0)
        if (truck_weights.length) {
            if (totalWeight + truck_weights[0] <= weight) {
                bridge.push(truck_weights.shift())
            } else {
                bridge.push(0)
            } 
        }
    }
    return count
}