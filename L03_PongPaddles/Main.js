"use strict";
var L03_PongPaddles;
(function (L03_PongPaddles) {
    var f = FudgeCore;
    window.addEventListener("load", hndLoad);
    let paddleLeft = new f.Node("PaddleLeft");
    let paddleRight = new f.Node("PaddleRight");
    let ball = new f.Node("Ball");
    function hndLoad(_event) {
        const canvas = document.querySelector("canvas");
        f.RenderManager.initialize();
        console.log(canvas);
        let pong = createPong();
        paddleRight.cmpTransform.local.translateX(25);
        paddleLeft.cmpTransform.local.translateX(-25);
        paddleLeft.getComponent(f.ComponentMesh).pivot.scaleY(4);
        paddleRight.getComponent(f.ComponentMesh).pivot.scaleY(4);
        // Camera
        let zPos = 50;
        let cmpCamera = new f.ComponentCamera();
        cmpCamera.pivot.translateZ(zPos);
        L03_PongPaddles.viewport = new f.Viewport();
        L03_PongPaddles.viewport.initialize("Viewport", pong, cmpCamera, canvas);
        f.Debug.log(L03_PongPaddles.viewport);
        document.addEventListener("keydown", (_event) => {
            let keyCode = _event.keyCode;
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
            L03_PongPaddles.viewport.draw();
        });
        L03_PongPaddles.viewport.draw();
        function createPong() {
            let pong = new f.Node("Pong");
            let mesh = new f.MeshQuad();
            let mtrSolidWhite = new f.Material("SolidWhite", f.ShaderUniColor, new f.CoatColored(f.Color.WHITE));
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
})(L03_PongPaddles || (L03_PongPaddles = {}));
//# sourceMappingURL=Main.js.map