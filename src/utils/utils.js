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

export const filterIndex = (list=[]) => {
	for(let i=0; i<list.length-1; i++){
		if(list[i].tracks && list[i].tracks.length && !list[i+1].tracks.length){
			return i + 1
		}
	}
}