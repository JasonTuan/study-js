function processData(data) {
    // Duplicate logic
    for (let i = 0; i < data.length; i++) {
        console.log("Processing item: " + data[i]);
    }
    for (let i = 0; i < data.length; i++) {
        console.log("Item processed: " + data[i]);
    }

    // Wrong syntax
    if (data.length > 0 {
        console.log("Data is not empty");
    }

    // Performance risk
    let result = [];
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if (data[i] === data[j]) {
                result.push(data[i]);
            }
        }
    }
    return result;
}
