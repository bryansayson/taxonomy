var Bee = function() {

  Grub.call(this);
// makes Bee a grub

  this.age = 5;

  this.color = 'yellow';

  this.job = 'keep on growing';

};

Bee.prototype = Object.create(Grub.prototype);

// set bee prototype to the grub kind

Bee.prototype.constructor = Bee;
