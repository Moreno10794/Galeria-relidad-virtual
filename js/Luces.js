const light = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(light);

//luces de adelante
//pointlight centro 1
const plight = new THREE.PointLight(0xFFD966, 0.9, 150);
plight.position.set(0, 10, 170);
plight.castShadow = true;
scene.add(plight);

//pointlight derecho 1
const plight2 = new THREE.PointLight(0xFFD966, 0.7, 150);
plight2.position.set(150, 10, 170);
plight2.castShadow = true;
scene.add(plight2);

//pointlight izquierdo 1
const plight3 = new THREE.PointLight(0xFFD966, 0.7, 150);
plight3.position.set(-150, 10, 170);
plight3.castShadow = true;
scene.add(plight3);

//luz pasillo
const plight4 = new THREE.PointLight(0xFFD966, 0.7, 150);
plight4.position.set(0, 10, 0);
plight4.castShadow = true;
scene.add(plight4);

//luces de atras
//pointlight centro 2
const plight5 = new THREE.PointLight(0xFFD966, 0.9, 150);
plight5.position.set(0, 10, -170);
plight5.castShadow = true;
scene.add(plight5);

//pointlight derecho 2
const plight6 = new THREE.PointLight(0xFFD966, 0.7, 150);
plight6.position.set(150, 10, -170);
plight6.castShadow = true;
scene.add(plight6);

//pointlight izquierdo 2
const plight7 = new THREE.PointLight(0xFFD966, 0.7, 150);
plight7.position.set(-150, 10, -170);
plight7.castShadow = true;
scene.add(plight7);