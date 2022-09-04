/// cuadro izquierda 3
const geometryc3 = new THREE.BoxGeometry(1, 50, 40);
const materialc3 = new THREE.MeshPhongMaterial({ map: txc3 });
const cubec3 = new THREE.Mesh(geometryc3, materialc3);
scene.add(cubec3);
cubec3.position.y = 40;
cubec3.position.z = -170;
cubec3.position.x = -248;
cubec3.rotation.y = 0;
cubec3.castShadow = true;

/// marco izquierda 3
loader2.load('fbx/frame.fbx', function (object17) {
    object17.traverse(function (child) {
        if (child.isMesh) {


            child.material = new THREE.MeshPhongMaterial({ color: 0x6F3615 });

            child.castShadow = true;

            console.log("cuadro3");
        }

    });

    object17.scale.x = 2.1;
    object17.scale.y = 1.7;
    object17.scale.z = 1;

    object17.rotation.y = 1.58;

    object17.position.y = 14;
    object17.position.z = -170;
    object17.position.x = -246;
    scene.add(object17)
});


//planta izquierdo 3
loader2.load('fbx/planta.fbx', function (object18) {
    object18.traverse(function (child10) {
        if (child10.isMesh) {

        child10.castShadow = true;
            console.log("planta3");
        }

    });

    object18.scale.x = 0.3;
    object18.scale.y = 0.3;
    object18.scale.z = 0.3;

    object18.rotation.y = 3.5;


    object18.position.y = -64;
    object18.position.z = -70;
    object18.position.x = -220;
    scene.add(object18)
});

//planta izquierda 3
loader2.load('fbx/planta.fbx', function (object19) {
    object19.traverse(function (child10) {
        if (child10.isMesh) {


            child10.castShadow = true;
            console.log("planta3");
        }

    });

    object19.scale.x = 0.3;
    object19.scale.y = 0.3;
    object19.scale.z = 0.3;

    object19.rotation.y = 3.5;


    object19.position.y = -64;
    object19.position.z = -265;
    object19.position.x = -220;
    scene.add(object19)
});

//Estatua de las aves 3
loader2.load('fbx/birds_statue.fbx', function (object20) {
    object20.traverse(function (child2) {
        if (child2.isMesh) {

            child2.castShadow = true;

            child2.material = new THREE.MeshPhongMaterial({ color: 0xA6A2A0 });
            child2.material.bumpMap = THREE.ImageUtils.loadTexture('bumps/txbump.jpg');
            child2.material.bumpScale = 0.08
            console.log("bird2");

        }

    });

    object20.scale.x = 115;
    object20.scale.y = 115;
    object20.scale.z = 115;

    object20.rotation.x = 4.70;

    object20.position.y = -25;
    object20.position.z = -55;
    object20.position.x = -70;
    scene.add(object20)
});


//silla izquierda 3

loader2.load('fbx/stone_bench.fbx', function (object21) {
    object21.traverse(function (child4) {
        if (child4.isMesh) {


            child4.castShadow = true;

            child4.material = new THREE.MeshPhongMaterial({ color: 0x898989 });
            child4.material.bumpMap = THREE.ImageUtils.loadTexture('bumps/txbump.jpg');
            child4.material.bumpScale = 0.05
            console.log("silla2");

        }

    });

    object21.scale.x = 0.7;
    object21.scale.y = 0.8;
    object21.scale.z = 1;

    object21.rotation.x = -1.59;

    object21.position.y = -25;
    object21.position.z = -55;
    object21.position.x = -145;
    scene.add(object21)
});

//silla izquierda 3

loader2.load('fbx/stone_bench.fbx', function (object22) {
    object22.traverse(function (child4) {
        if (child4.isMesh) {


            child4.castShadow = true;

            child4.material = new THREE.MeshPhongMaterial({ color: 0x898989 });
            child4.material.bumpMap = THREE.ImageUtils.loadTexture('bumps/txbump.jpg');
            child4.material.bumpScale = 0.05
            console.log("silla2");

        }

    });

    object22.scale.x = 0.7;
    object22.scale.y = 0.8;
    object22.scale.z = 1;

    object22.rotation.x = -1.59;

    object22.position.y = -25;
    object22.position.z = -280;
    object22.position.x = -145;
    scene.add(object22)
});

//escultura izquierda 3

loader2.load('fbx/sculpture.fbx', function (object23) {
    object23.traverse(function (child4) {
        if (child4.isMesh) {

            child4.castShadow = true;

            child4.material = new THREE.MeshStandardMaterial({
                color: 0xE0E826
            
            });
            console.log("escultura2");

        }

    });

    object23.scale.x = 0.15;
    object23.scale.y = 0.15;
    object23.scale.z = 0.18;

    object23.rotation.x = -1.59;

    object23.position.y = 18;
    object23.position.z = -280;
    object23.position.x = -70;
    scene.add(object23)
});

