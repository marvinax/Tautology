Tautology.ModelManager = function(models, canvas){
	this.models = {};

	this.texture = new THREE.Texture( canvas.getElement() );
	this.texture.needsUpdate = true;

	canvas.on('after:render', function(){
		this.texture.needsUpdate = true;
	}.bind(this));

	for (key in models){
		console.log(models[key].model);
		this.models[key] = new Tautology.Model(models[key].model, this.texture);
	}
	this.currentModelKey = (Object.keys(models))[0];
}

Tautology.ModelManager.prototype.constructor = Tautology.Model;

Tautology.ModelManager.prototype.update = function(scene) {
	for(var i = 0; i < scene.children.length; i++){
		if(scene.children[i].type == "Mesh"){
			scene.remove(scene.children[i]);
		}
	}

	scene.add(this.models[this.currentModelKey].meshes);
}