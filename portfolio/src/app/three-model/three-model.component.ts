import { Component, ElementRef, OnInit, OnDestroy, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three-stdlib';

@Component({
  selector: 'app-three-model',
  standalone: true,
  template: `<canvas #canvas class="model-canvas"></canvas>`,
  styleUrls: ['./three-model.component.css']
})
export class ThreeModelComponent implements OnInit, OnDestroy {
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private animationId!: number;
  private mesh!: THREE.Mesh;
  private frameIndex = 0;
  private frameCount = 300;
  private loader = new GLTFLoader();

  ngOnInit() {
    this.initThree();
    this.loadPLYFrames();
    this.animate();
  }

  ngOnDestroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    this.renderer?.dispose();
  }

  private initThree() {
    this.scene = new THREE.Scene();
    
    this.camera = new THREE.PerspectiveCamera(75, 300/400, 0.1, 1000);
    this.camera.position.z = 5;
    
    this.renderer = new THREE.WebGLRenderer({ 
      canvas: this.canvasRef.nativeElement,
      alpha: true,
      antialias: true 
    });
    this.renderer.setSize(300, 400);
    this.renderer.setClearColor(0x000000, 0);
    
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    this.scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 1);
    this.scene.add(directionalLight);
  }

  private loadPLYFrames() {
    this.loader.load(
      'assets/particles_tests_-_3.glb',
      (gltf) => {
        const model = gltf.scene;
        model.scale.setScalar(0.5);
        model.position.set(0, 0, 0);
        this.scene.add(model);
        this.mesh = model;
      },
      undefined,
      (error) => {
        console.error('GLB loading failed:', error);
        const geometry = new THREE.BoxGeometry(2, 2, 2);
        const material = new THREE.MeshPhongMaterial({ color: 0x8b5cf6 });
        this.mesh = new THREE.Mesh(geometry, material);
        this.scene.add(this.mesh);
      }
    );
  }



  private animate() {
    this.animationId = requestAnimationFrame(() => this.animate());
    
    if (this.mesh) {
      this.mesh.rotation.y += 0.01;
    }
    
    this.renderer.render(this.scene, this.camera);
  }
}