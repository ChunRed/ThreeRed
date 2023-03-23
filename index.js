
      // 创建场景
      let renderer;
      let camera;
      let cube;
      let ambLight;
      let spotLight;
      let scene = new THREE.Scene();
      let Canvas, CanvasWidth, CanvasHeight;
      
      
      function init(){

        //light
        ambLight = new THREE.AmbientLight(0x404040);
        spotLight = new THREE.SpotLight(0xffffff)
        spotLight.position.set( 100, 1000, 200 );

        // 创建相机
        Canvas = document.getElementById("myCanvas");
        CanvasWidth = Canvas.parentElement.clientWidth;
        CanvasHeight = Canvas.parentElement.clientHeight;
        camera = new THREE.PerspectiveCamera(45, CanvasWidth/CanvasHeight, 0.1, 100);
        camera.position.set(0, 0, 5)
        camera.lookAt(scene.position)
        
        

        // 创建渲染器
        renderer= new THREE.WebGLRenderer({canvas: Canvas,
        antialias: false});
        renderer.setSize(CanvasWidth, CanvasHeight)
        renderer.setClearColor(new THREE.Color(0xFFFFFF));
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        renderer.setPixelRatio(window.devicePixelRatio);

        // 创建立方体
        var geometry = new THREE.BoxGeometry(1, 1, 1);
        let material = new THREE.MeshPhongMaterial({
          color: 0x00FF00
        })
        cube = new THREE.Mesh(geometry, material);

      }    
      function animate() {

        requestAnimationFrame( animate ); 

        cube.rotation.x += 0.01; 
        cube.rotation.y += 0.02;
        render();
        
      }
      function render(){
        scene.add(cube);
        scene.add(ambLight);
        scene.add(spotLight);
        renderer.render( scene, camera );
      }

      window.addEventListener('resize', function() {
        camera.aspect = CanvasWidth / CanvasHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(CanvasWidth, CanvasHeight);
      })
       
      init();
      animate();

    