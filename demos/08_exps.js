// const exports=module.exports;    //  exports 可视为 module.exports 的一个快捷方式

/*
(
	function(exports, require, module, __filename, __dirname) {
		// your code
	}
)
*/

//exports.test=100;    //  可以这样输出 

//exports={a:1, b:2, test: 100};    //  不可以这样，因为改变了其指向

module.exports={a:1, b:2, test: 100};    //  而可以这样输出

