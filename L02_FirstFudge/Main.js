"use strict";
var L02_FirstFudge;
(function (L02_FirstFudge) {
    var f = FudgeCore;
    window.addEventListener("load", hndLoad);
    function hndLoad(_event) {
        const canvas = document.querySelector("canvas");
        f.RenderManager.initialize();
        console.log(canvas);
        let player1 = new f.Node("Quad");
        let player2 = new f.Node("Quad");
        let ball = new f.Node("Ball");
        let topNode = new f.Node("topNode");
        topNode.appendChild(player1);
        topNode.appendChild(player2);
        topNode.appendChild(ball);
        let mtrSolidWhite = new f.Material("SolidWhite", f.ShaderUniColor, new f.CoatColored(f.Color.WHITE));
        let mtrMaterial = new f.ComponentMaterial(mtrSolidWhite);
        let mtrMaterial2 = new f.ComponentMaterial(mtrSolidWhite);
        let mtrBall = new f.ComponentMaterial(mtrSolidWhite);
        player1.addComponent(mtrMaterial);
        player2.addComponent(mtrMaterial2);
        ball.addComponent(mtrBall);
        let zPos = 15;
        let cmpCamera = new f.ComponentCamera();
        cmpCamera.pivot.translateZ(zPos);
        let mesh = new f.MeshQuad();
        let player1Mesh = new f.ComponentMesh(mesh);
        let player2Mesh = new f.ComponentMesh(mesh);
        let ballMesh = new f.ComponentMesh(mesh);
        player1.addComponent(player1Mesh);
        player2.addComponent(player2Mesh);
        ball.addComponent(ballMesh);
        player1Mesh.pivot.translateX(-8);
        player1Mesh.pivot.scaleX(.25);
        player1Mesh.pivot.scaleY(2);
        player2Mesh.pivot.translateX(8);
        player2Mesh.pivot.scaleX(.25);
        player2Mesh.pivot.scaleY(2);
        ballMesh.pivot.scale(new f.Vector3(.25, .25, .25));
        // setInterval(() => {
        //     cmpMesh.pivot.rotateY(1);
        //     cmpMesh.pivot.rotateX(1);
        //     cmpMesh.pivot.rotateZ(1);
        //     viewport.draw();
        // }, 3)
        L02_FirstFudge.viewport = new f.Viewport();
        L02_FirstFudge.viewport.initialize("Viewport", topNode, cmpCamera, canvas);
        f.Debug.log(L02_FirstFudge.viewport);
        L02_FirstFudge.viewport.draw();
    }
})(L02_FirstFudge || (L02_FirstFudge = {}));
//# sourceMappingURL=Main.js.map