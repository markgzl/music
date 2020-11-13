export const debounce = (func, delay=300) => {
	let timer = null
	return function(...arg){
		if(timer){
			clearTimeout(timer)
		}
		timer = setTimeout(()=>{
			func.apply(this, arg)
			clearTimeout(timer)
		}, delay)
	}
}