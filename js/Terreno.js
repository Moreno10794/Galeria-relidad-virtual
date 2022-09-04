///Entorno

///piso
const geometryf = new THREE.BoxGeometry(500, 2, 600);
const materialf = new THREE.MeshPhongMaterial({ map: txpiso });
const cubef = new THREE.Mesh(geometryf, materialf);
scene.add(cubef);
cubef.position.y = -26;
cubef.position.z = 0;
cubef.receiveShadow = true;

///techo
const geometryte = new THREE.BoxGeometry(500, 2, 600);
const materialte = new THREE.MeshPhongMaterial({ map: txtecho });
const cubete = new THREE.Mesh(geometryte, materialte);
scene.add(cubete);
cubete.position.y = 70;
cubete.position.z = 0;
cubete.receiveShadow = true;

///paredes
const geometryp = new THREE.BoxGeometry(3, 100, 260);
const materialp = new THREE.MeshPhongMaterial({ map: txbp });

///derecha 1
const cubep = new THREE.Mesh(geometryp, materialp);
scene.add(cubep);
cubep.position.x = 250;
cubep.position.y = 23;
cubep.position.z = 170;
cubep.receiveShadow = true;

//izquierda 1
const geometryp1 = new THREE.BoxGeometry(3, 100, 260);
const cubep1 = new THREE.Mesh(geometryp1, materialp);
scene.add(cubep1);
cubep1.position.x = -250;
cubep1.position.y = 23;
cubep1.position.z = 170;
cubep1.receiveShadow = true;

///trasera 1
const geometryp2 = new THREE.BoxGeometry(3, 100, 500);
const cubep2 = new THREE.Mesh(geometryp2, materialp);
scene.add(cubep2);
cubep2.position.z = 300;
cubep2.position.y = 23;
cubep2.rotation.y = 1.57;
cubep2.receiveShadow = true;

///delantera izquierda 1
const geometryp3 = new THREE.BoxGeometry(3, 100, 200);
const cubep3 = new THREE.Mesh(geometryp3, materialp);
scene.add(cubep3);
cubep3.position.z = 40;
cubep3.position.x = -150;
cubep3.position.y = 23;
cubep3.rotation.y = 1.57;
cubep3.receiveShadow = true;

///delantera derecha 1
const geometryp4 = new THREE.BoxGeometry(3, 100, 200);
const cubep4 = new THREE.Mesh(geometryp4, materialp);
scene.add(cubep4);
cubep4.position.z = 40;
cubep4.position.x = 150;
cubep4.position.y = 23;
cubep4.rotation.y = 1.57;
cubep4.receiveShadow = true;

//pasillo izquierdo

const geometryp5 = new THREE.BoxGeometry(3, 100, 83.1);
const cubep5 = new THREE.Mesh(geometryp5, materialp);
scene.add(cubep5);
cubep5.position.z = 0.1;
cubep5.position.x = -48.9;
cubep5.position.y = 23;
cubep5.receiveShadow = true;

//pasillo derecho

const geometryp6 = new THREE.BoxGeometry(3, 100, 83.1);
const cubep6 = new THREE.Mesh(geometryp6, materialp);
scene.add(cubep6);
cubep6.position.z = -0.1 ;
cubep6.position.x = 48.9;
cubep6.position.y = 23;
cubep6.receiveShadow = true;

///derecha 2
const cubep7 = new THREE.Mesh(geometryp, materialp);
scene.add(cubep7);
cubep7.position.x = 250;
cubep7.position.y = 23;
cubep7.position.z = -170;
cubep7.receiveShadow = true;


//izquierda 2
const geometryp7 = new THREE.BoxGeometry(3, 100, 260);
const cubep8 = new THREE.Mesh(geometryp7, materialp);
scene.add(cubep8);
cubep8.position.x = -250;
cubep8.position.y = 23;
cubep8.position.z = -170;
cubep8.receiveShadow = true;

///trasera 2
const geometryp8 = new THREE.BoxGeometry(3, 100, 500);
const cubep9 = new THREE.Mesh(geometryp8, materialp);
scene.add(cubep9);
cubep9.position.z = -300;
cubep9.position.y = 23;
cubep9.rotation.y = 1.57;
cubep9.receiveShadow = true;

///delantera izquierda 2
const geometryp9 = new THREE.BoxGeometry(3, 100, 200);
const cubep10 = new THREE.Mesh(geometryp9, materialp);
scene.add(cubep10);
cubep10.position.z = -40;
cubep10.position.x = -150;
cubep10.position.y = 23;
cubep10.rotation.y = 1.57;
cubep10.receiveShadow = true;

///delantera derecha 2
const geometryp10 = new THREE.BoxGeometry(3, 100, 200);
const cubep11 = new THREE.Mesh(geometryp10, materialp);
scene.add(cubep11);
cubep11.position.z = -40;
cubep11.position.x = 150;
cubep11.position.y = 23;
cubep11.rotation.y = 1.57;
cubep11.receiveShadow = true;

