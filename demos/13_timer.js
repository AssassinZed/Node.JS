// 最慢
setImmediate(() => {
	console.log('setImmediate')
})

// 中间
setTimeout(() => {
	console.log('setTimeout');
}, 0)


// 最快
process.nextTick(() => {
	console.log('nextTick')
})