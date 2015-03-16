Tautology.Model = function(model, canvas){
	this.model = model;

	this.texture = new THREE.Texture( canvas.getElement() );
	this.texture.needsUpdate = true;

	canvas.on('after:render', function(){
		this.texture.needsUpdate = true;
	}.bind(this));


	this.geom = new Tautology.Geometry(this.model.param.geom, this.model.shape, this.model.regions, this.model.manuever);
	this.material = new Tautology.Material(this.model.param.material, this.texture);

}

Tautology.Model.prototype.constructor = Tautology.Model;

Tautology.Model.prototype.updateScene = function(scene) {
	for(key in this.material.materials)
		if(key == 'point')
			scene.add(new THREE.PointCloud(this.geom.geom));	
		else 
			scene.add(new THREE.Mesh(this.geom.geom, this.material.materials[key]));
}