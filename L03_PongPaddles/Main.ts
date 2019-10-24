namespace L03_PongPaddles {
    import f = FudgeCore;
    window.addEventListener("load", hndLoad);
    export let viewport: f.Viewport;

    let paddleLeft: f.Node = new f.Node("PaddleLeft");
    let paddleRight: f.Node = new f.Node("PaddleRight");
    let ball: f.Node = new f.Node("Ball");
    
    function hndLoad(_event: Event): void {
        const canvas: HTMLCanvasElement = document.querySelector("canvas");
        f.RenderManager.initialize();
        console.log(canvas);
        
        let pong: f.Node = createPong();
        
        paddleRight.cmpTransform.local.translateX(25);
        paddleLeft.cmpTransform.local.translateX(-25);
        ( <f.ComponentMesh> paddleLeft.getComponent(f.ComponentMesh)).pivot.scaleY(4);
        ( <f.ComponentMesh> paddleRight.getComponent(f.ComponentMesh)).pivot.scaleY(4);

        // Camera
        let zPos: number = 50;
        let cmpCamera: f.ComponentCamera = new f.ComponentCamera();
        cmpCamera.pivot.translateZ(zPos);
       
        viewport = new f.Viewport();
        viewport.initialize("Viewport", pong, cmpCamera, canvas);
        f.Debug.log(viewport);

        document.addEventListener("keydown", (_event: Event) => {
            let keyCode: number = (<KeyboardEvent> _event).keyCode

            switch (keyCode) {
                case 38:
                    paddleRight.mtxWorld.translateY(.3);
                    break;
                case 40:
                    paddleRight.mtxWorld.translateY(-.3);
                    break;
                case 87:
                    paddleLeft.mtxWorld.translateY(.3);
                    break;
                case 83:
                    paddleLeft.mtxWorld.translateY(-.3);
                    break;
                default:
                    return;
            }

            viewport.draw();
        });
                
            
            
        viewport.draw();

        

        function createPong (): f.Node {
            let pong: f.Node = new f.Node("Pong");
            let mesh: f.MeshQuad = new f.MeshQuad();
            let mtrSolidWhite: f.Material = new f.Material("SolidWhite", f.ShaderUniColor, new f.CoatColored(f.Color.WHITE));
               
            ball.addComponent(new f.ComponentMesh(mesh));
            ball.addComponent(new f.ComponentMaterial(mtrSolidWhite));
            
            paddleRight.addComponent(new f.ComponentMesh(mesh));
            paddleRight.addComponent(new f.ComponentMaterial(mtrSolidWhite));
            
            paddleLeft.addComponent(new f.ComponentMesh(mesh));
            paddleLeft.addComponent(new f.ComponentMaterial(mtrSolidWhite));

            ball.addComponent(new f.ComponentTransform());
            paddleRight.addComponent(new f.ComponentTransform());
            paddleLeft.addComponent(new f.ComponentTransform());
            
            pong.appendChild(paddleLeft);
            pong.appendChild(paddleRight);
            pong.appendChild(ball);

            return pong;
        }
    }
}