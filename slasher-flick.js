// With the slice method
function slasher(arr, howMany) {
	let newArray = arr.slice(howMany);
	return newArray;
}

// With the splice method
function slasher(arr, howMany) {
	arr.splice(0, howMany);
	return arr;
}