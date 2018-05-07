class Egg{
	constructor(name, cb, opts){
		opts = opts || {};
		this.continue = opts.continue || false;
		this.name = name;
		this.cb = cb;
		this.pos = 0;
		this.done = false;
		document.addEventListener('keydown', this.handler.bind(this));
	}
	handler(event){
		const key = event.key;
		if(this.name[this.pos] == key && !this.done){
			if(this.pos == this.name.length - 1){
				this.cb();
				if(!this.continue){
					this.done = true;
				}
				this.pos = 0;
				return;
			}
			this.pos++;
		}else{
			this.pos = 0;
		}
	}
}