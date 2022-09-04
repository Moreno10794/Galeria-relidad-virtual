//ballena central
loader2.load('fbx/Glass_whale.fbx', function (object5) {
    object5.traverse(function (child3) {
        if (child3.isMesh) {


            child3.castShadow = true;
            child3.receiveShadow = true;

            child3.material = new THREE.MeshPhysicalMaterial({
                color: 0x358AEA,
                roughness: .05,
                envMapIntensity: 0.9,
                clearcoat: 1,
                transparent: true,
                opacity: .5,
                reflectivity: 0.2,
                refractionRatio: 0.985,
                ior: 0.9,
                side: THREE.BackSide,
            });
            console.log("whale");

        }

    });

    object5.scale.x = 0.4;
    object5.scale.y = 0.4;
    object5.scale.z = 0.4;



    object5.position.y = -15;
    object5.position.z = 170;
    object5.position.x = 0;
    scene.add(object5)
});

///palo
const geometrypalo1 = new THREE.CylinderGeometry(5, 5, 20, 32);
const materialpalo1 = new THREE.MeshPhysicalMaterial({

    metalness: 1,
    clearcoat: 1.0
});
const palod1 = new THREE.Mesh(geometrypalo1, materialpalo1);
scene.add(palod1);
palod1.position.y = -6.16;
palod1.position.z = 170;
palod1.position.x = 0;

palod1.castShadow = true;

palod1.scale.x = 0.4;
palod1.scale.y = 1.2;
palod1.scale.z = 0.4;

///base 1
loader2.load('fbx/base.fbx', function (object6) {
    object6.traverse(function (child3) {
        if (child3.isMesh) {

            child3.receiveShadow = true;
            child3.castShadow = true;

            child3.material = new THREE.MeshPhongMaterial({ color: 0x716D6D });
            child3.material.bumpMap = THREE.ImageUtils.loadTexture('bumps/txbump.jpg');
            console.log("base");

        }

    });

    object6.scale.x = 10;
    object6.scale.y = 7;
    object6.scale.z = 7;



    object6.position.y = -25;
    object6.position.z = 170;
    object6.position.x = 0;
    scene.add(object6)
});

///base 2
loader2.load('fbx/base.fbx', function (object32) {
    object32.traverse(function (child3) {
        if (child3.isMesh) {


            child3.castShadow = true;

            child3.material = new THREE.MeshPhongMaterial({ color: 0x716D6D });
            child3.material.bumpMap = THREE.ImageUtils.loadTexture('bumps/txbump.jpg');
            console.log("base");

        }

    });

    object32.scale.x = 7;
    object32.scale.y = 7;
    object32.scale.z = 7;



    object32.position.y = -25;
    object32.position.z = -170;
    object32.position.x = 0;
    scene.add(object32)
});

///ciervo metal central
loader2.load('fbx/deer.fbx', function (object33) {
    object33.traverse(function (child3) {
        if (child3.isMesh) {

            child3.material = new THREE.MeshStandardMaterial( {

                color: 0xECCA2F,
                roughness: 0.4,
                metalness: 1,
            
            } );

         
           
            console.log("base");

        }

    });

    object33.scale.x = 15;
    object33.scale.y = 15;
    object33.scale.z = 15;


    object33.rotation.z = 1.6;
    object33.rotation.x = 4.7;

    object33.position.y = 20;
    object33.position.z = -170;
    object33.position.x = 0;
    scene.add(object33)
});