// helpers.js

// Function to calculate the distance in blocks from the headquarters
function distanceFromHqInBlocks(location) {
    return Math.abs(location - 42); // Assuming 42 is the headquarters location
}

// Function to calculate the distance in feet from the headquarters
function distanceFromHqInFeet(location) {
    return distanceFromHqInBlocks(location) * 264; // 1 block = 264 feet
}

// Function to calculate the distance travelled in feet
function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264; // 1 block = 264 feet
}

// Function to calculate the fare price based on the distance travelled
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        return 0; // Free sample for short distances
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02; // 2 cents per foot after the first 400 feet
    } else if (distance > 2000 && distance <= 2500) {
        return 25; // $25 for distances over 2000 feet
    } else {
        return 'cannot travel that far'; // Rides over 2500 feet are not allowed
    }
}

// Exporting functions for testing
module.exports = {
    distanceFromHqInBlocks,
    distanceFromHqInFeet,
    distanceTravelledInFeet,
    calculatesFarePrice
};
