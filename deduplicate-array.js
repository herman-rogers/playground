function deduplicate(data) {
    const deduplicatedData = [];

    data.forEach((value) => {
        if(!deduplicatedData.includes(value)) {
            deduplicatedData.push(value);
        }
    });
    return deduplicatedData;
}

// function deduplicate(data) {
//     return [...new Set(array)];
// }

module.exports = deduplicate;