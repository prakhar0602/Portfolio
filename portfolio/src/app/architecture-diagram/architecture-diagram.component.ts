import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-architecture-diagram',
  imports: [CommonModule],
  templateUrl: './architecture-diagram.component.html',
  styleUrl: './architecture-diagram.component.css'
})
export class ArchitectureDiagramComponent implements OnInit, OnDestroy, AfterViewInit {
  currentFlow = 0;
  intervalId: any;
  currentMode = 'all';
  loginStep = 0;
  loginFlows = [
    { from: 'web-client', to: 'api-gateway', label: 'Login Request Sent', connection: 'web-to-api', direction: 'forward' },
    { from: 'api-gateway', to: 'auth-service', label: 'Authenticate User', connection: 'api-to-auth', direction: 'forward' },
    { from: 'auth-service', to: 'database', label: 'Validate Credentials', connection: 'auth-to-db', direction: 'forward' },
    { from: 'database', to: 'auth-service', label: 'User Data Retrieved', connection: 'auth-to-db', direction: 'reverse' },
    { from: 'auth-service', to: 'api-gateway', label: 'Authentication Success', connection: 'api-to-auth', direction: 'reverse' },
    { from: 'api-gateway', to: 'web-client', label: 'JWT Token Response', connection: 'web-to-api', direction: 'reverse' }
  ];

  serviceFlows = [
    { from: 'web-client', to: 'api-gateway', label: 'Service Request', connection: 'web-to-api', direction: 'forward' },
    { from: 'api-gateway', to: 'auth-service', label: 'Validate Token', connection: 'api-to-auth', direction: 'forward' },
    { from: 'auth-service', to: 'api-gateway', label: 'Token Verified', connection: 'api-to-auth', direction: 'reverse' },
    { from: 'api-gateway', to: 'services', label: 'Service Call', connection: 'api-to-services', direction: 'forward' },
    { from: 'services', to: 'database', label: 'Data Query', connection: 'services-to-db', direction: 'forward' },
    { from: 'database', to: 'services', label: 'Data Response', connection: 'services-to-db', direction: 'reverse' },
    { from: 'services', to: 'api-gateway', label: 'Service Response', connection: 'api-to-services', direction: 'reverse' },
    { from: 'api-gateway', to: 'web-client', label: 'Final Response', connection: 'web-to-api', direction: 'reverse' }
  ];

  paymentFlows = [
    { from: 'web-client', to: 'api-gateway', label: 'Payment Request', connection: 'web-to-api', direction: 'forward' },
    { from: 'api-gateway', to: 'auth-service', label: 'Validate Token', connection: 'api-to-auth', direction: 'forward' },
    { from: 'auth-service', to: 'api-gateway', label: 'Token Valid', connection: 'api-to-auth', direction: 'reverse' },
    { from: 'api-gateway', to: 'services', label: 'Process Payment', connection: 'api-to-services', direction: 'forward' },
    { from: 'services', to: 'payment-gateway', label: 'Payment Gateway', connection: 'services-to-payment', direction: 'forward' },
    { from: 'payment-gateway', to: 'services', label: 'Payment Success', connection: 'services-to-payment', direction: 'reverse' },
    { from: 'services', to: 'database', label: 'Register Transaction', connection: 'services-to-db', direction: 'forward' },
    { from: 'database', to: 'services', label: 'Transaction Registered', connection: 'services-to-db', direction: 'reverse' },
    { from: 'services', to: 'api-gateway', label: 'Payment Complete', connection: 'api-to-services', direction: 'reverse' },
    { from: 'api-gateway', to: 'web-client', label: 'Payment Response', connection: 'web-to-api', direction: 'reverse' }
  ];

  flows = [
    { from: 'web-client', to: 'api-gateway', label: 'User Authentication Request' },
    { from: 'api-gateway', to: 'database', label: 'Validate User Credentials' },
    { from: 'database', to: 'api-gateway', label: 'User Data Retrieved' },
    { from: 'api-gateway', to: 'web-client', label: 'JWT Token Response' },
    { from: 'web-client', to: 'api-gateway', label: 'Product Catalog Request' },
    { from: 'api-gateway', to: 'services', label: 'Query Product Data' },
    { from: 'services', to: 'database', label: 'Database Query' },
    { from: 'database', to: 'services', label: 'Product Information' },
    { from: 'services', to: 'api-gateway', label: 'Service Response' },
    { from: 'api-gateway', to: 'web-client', label: 'Product List Response' },
    { from: 'web-client', to: 'api-gateway', label: 'Checkout Process' },
    { from: 'api-gateway', to: 'payment-gateway', label: 'Payment Processing' },
    { from: 'payment-gateway', to: 'api-gateway', label: 'Payment Confirmation' },
    { from: 'api-gateway', to: 'database', label: 'Save Order Data' },
    { from: 'database', to: 'api-gateway', label: 'Order Saved' },
    { from: 'api-gateway', to: 'web-client', label: 'Order Success Response' }
  ];

  ngOnInit() {
    this.startAnimation();
  }

  ngAfterViewInit() {
    this.updateLoginClasses();
  }

  updateLoginClasses() {
    if (this.currentMode === 'login' || this.currentMode === 'service' || this.currentMode === 'payment') {
      const webClient = document.querySelector('.web-client') as HTMLElement;
      const authService = document.querySelector('.auth-service') as HTMLElement;
      const centerColumn = document.querySelector('.center-column') as HTMLElement;
      const services = document.querySelector('.services') as HTMLElement;
      
      // Reset all classes first
      [webClient, authService, centerColumn, services].forEach(el => {
        if (el) {
          el.classList.remove('login-active', 'reverse', 'api-services-active', 'auth-db-active', 'payment-active');
        }
      });
      
      // Reset payment connection classes
      const rightColumn = document.querySelector('.right-column') as HTMLElement;
      const leftColumn = document.querySelector('.left-column') as HTMLElement;
      [rightColumn, leftColumn].forEach(el => {
        if (el) {
          el.classList.remove('login-active', 'reverse', 'payment-active');
        }
      });
      
      const currentFlow = this.getCurrentLoginFlow();
      
      if (currentFlow.connection === 'web-to-api' && webClient) {
        webClient.classList.add('login-active');
        if (currentFlow.direction === 'reverse') webClient.classList.add('reverse');
      }
      
      if (currentFlow.connection === 'api-to-auth' && authService) {
        authService.classList.add('login-active');
        if (currentFlow.direction === 'reverse') authService.classList.add('reverse');
      }
      
      if (currentFlow.connection === 'auth-to-db' && centerColumn) {
        console.log('Adding auth-db-active class');
        centerColumn.classList.add('auth-db-active');
        if (currentFlow.direction === 'reverse') centerColumn.classList.add('reverse');
      } else {
        console.log('Not auth-to-db connection:', currentFlow.connection);
      }
      
      if (currentFlow.connection === 'api-to-services') {
        // Handle api-to-services line (center-column::after)
        if (centerColumn) {
          centerColumn.classList.add('api-services-active');
          if (currentFlow.direction === 'reverse') centerColumn.classList.add('reverse');
        }
      }
      
      if (currentFlow.connection === 'services-to-db' && services) {
        // Ensure payment lines are turned off
        const rightColumn = document.querySelector('.right-column') as HTMLElement;
        const leftColumn = document.querySelector('.left-column') as HTMLElement;
        if (services) services.classList.remove('payment-active');
        if (rightColumn) rightColumn.classList.remove('payment-active');
        if (leftColumn) leftColumn.classList.remove('payment-active');
        
        services.classList.add('login-active');
        if (currentFlow.direction === 'reverse') services.classList.add('reverse');
      }
      
      if (currentFlow.connection === 'services-to-payment') {
        if (services) {
          services.classList.add('payment-active');
          if (currentFlow.direction === 'reverse') services.classList.add('reverse');
        }
        const rightColumn = document.querySelector('.right-column') as HTMLElement;
        const leftColumn = document.querySelector('.left-column') as HTMLElement;
        if (rightColumn) {
          rightColumn.classList.add('payment-active');
          if (currentFlow.direction === 'reverse') rightColumn.classList.add('reverse');
        }
        if (leftColumn) {
          leftColumn.classList.add('payment-active');
          if (currentFlow.direction === 'reverse') leftColumn.classList.add('reverse');
        }
      }
      
      // Add message display for service and payment modes
      if (this.currentMode === 'service' || this.currentMode === 'payment') {
        this.showMessage(currentFlow.label, currentFlow.connection);
      }
    }
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  setMode(mode: string) {
    this.currentMode = mode;
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    
    if (mode === 'all') {
      this.startAnimation();
    } else if (mode === 'login') {
      this.startLoginFlow();
    } else if (mode === 'service') {
      this.startServiceFlow();
    } else if (mode === 'payment') {
      this.startPaymentFlow();
    }
  }

  startLoginFlow() {
    this.loginStep = 0;
    this.updateLoginClasses();
    this.intervalId = setInterval(() => {
      this.loginStep = (this.loginStep + 1) % this.loginFlows.length;
      this.updateLoginClasses();
    }, 2000);
  }

  startServiceFlow() {
    this.loginStep = 0;
    this.updateLoginClasses();
    this.intervalId = setInterval(() => {
      this.loginStep = (this.loginStep + 1) % this.serviceFlows.length;
      this.updateLoginClasses();
    }, 2000);
  }

  startPaymentFlow() {
    this.loginStep = 0;
    this.updateLoginClasses();
    this.intervalId = setInterval(() => {
      this.loginStep = (this.loginStep + 1) % this.paymentFlows.length;
      this.updateLoginClasses();
    }, 2000);
  }

  getCurrentLoginFlow() {
    if (this.currentMode === 'service') return this.serviceFlows[this.loginStep];
    if (this.currentMode === 'payment') return this.paymentFlows[this.loginStep];
    return this.loginFlows[this.loginStep];
  }

  isLoginConnectionActive(connection: string): boolean {
    if (this.currentMode !== 'login' && this.currentMode !== 'service') return false;
    return this.getCurrentLoginFlow().connection === connection;
  }

  getWhiteLineClass(connection: string): string {
    if (this.currentMode === 'login' && this.isLoginConnectionActive(connection)) {
      return this.getLoginDirection() === 'reverse' ? 'login-active reverse' : 'login-active';
    }
    return '';
  }

  getLoginDirection(): string {
    if (this.currentMode !== 'login' && this.currentMode !== 'service') return 'forward';
    return this.getCurrentLoginFlow().direction;
  }

  startAnimation() {
    this.intervalId = setInterval(() => {
      this.currentFlow = (this.currentFlow + 1) % this.flows.length;
    }, 2000);
  }



  isComponentActive(component: string): boolean {
    const current = this.flows[this.currentFlow];
    return current.from === component || current.to === component;
  }

  getCurrentFlow() {
    if (this.currentMode === 'login' || this.currentMode === 'service') {
      return this.getCurrentLoginFlow();
    }
    return this.flows[this.currentFlow];
  }

  shouldShowConnection(connection: string): boolean {
    if (this.currentMode === 'all') return true;
    if (this.currentMode === 'login') {
      const loginConnections = ['web-to-api', 'api-to-auth', 'auth-to-db'];
      return loginConnections.includes(connection);
    }
    if (this.currentMode === 'service') {
      const serviceConnections = ['web-to-api', 'api-to-auth', 'auth-to-db', 'api-to-services', 'services-to-db'];
      return serviceConnections.includes(connection);
    }
    return true;
  }

  showMessage(label: string, connection: string) {
    const existingMessage = document.querySelector('.line-message');
    if (existingMessage) {
      existingMessage.remove();
    }

    const messageElement = document.createElement('div');
    messageElement.className = 'line-message';
    messageElement.textContent = label;

    let targetElement: HTMLElement | null = null;
    
    switch (connection) {
      case 'web-to-api':
        targetElement = document.querySelector('.web-client');
        messageElement.style.cssText = 'position: absolute; top: 50%; right: -7.5rem; transform: translateY(-50%) translateX(50%); background: rgba(0,0,0,0.9); color: #00ff88; padding: 4px 8px; border-radius: 4px; font-size: 0.75rem; border: 1px solid #00ff88; white-space: nowrap; z-index: 100; animation: fadeInOut 2s ease-in-out;';
        break;
      case 'api-to-auth':
        targetElement = document.querySelector('.api-gateway');
        messageElement.style.cssText = 'position: absolute; top: 100%; margin-top: 0.75rem; left: 50%; transform: translateX(-50%); background: rgba(0,0,0,0.9); color: #00ff88; padding: 4px 8px; border-radius: 4px; font-size: 0.75rem; border: 1px solid #00ff88; white-space: nowrap; animation: fadeInOut 2s ease-in-out;';
        break;
      case 'auth-to-db':
        return; // Skip message display for auth-to-db in service mode
      case 'api-to-services':
        targetElement = document.querySelector('.center-column');
        messageElement.style.cssText = 'position: absolute; top: 15%; right: -4.25rem; transform: translateY(-50%) translateX(50%); background: rgba(0,0,0,0.9); color: #00ff88; padding: 4px 8px; border-radius: 4px; font-size: 0.75rem; border: 1px solid #00ff88; white-space: nowrap; z-index: 100; animation: fadeInOut 2s ease-in-out;';
        break;
      case 'services-to-db':
        targetElement = document.querySelector('.services');
        messageElement.style.cssText = 'position: absolute; top: 100%; margin-top: 3rem; left: 50%; transform: translateX(-50%); background: rgba(0,0,0,0.9); color: #00ff88; padding: 4px 8px; border-radius: 4px; font-size: 0.75rem; border: 1px solid #00ff88; white-space: nowrap; z-index: 100; animation: fadeInOut 2s ease-in-out;';
        break;
      case 'services-to-payment':
        targetElement = document.querySelector('.services');
        messageElement.style.cssText = 'position: absolute; bottom: -10rem; left: -6rem; transform: translateX(0%); background: rgba(0,0,0,0.9); color: #00ff88; padding: 4px 8px; border-radius: 4px; font-size: 0.75rem; border: 1px solid #00ff88; white-space: nowrap; z-index: 100; animation: fadeInOut 2s ease-in-out;';
        break;
    }

    if (targetElement) {
      targetElement.appendChild(messageElement);
      setTimeout(() => {
        if (messageElement.parentNode) {
          messageElement.remove();
        }
      }, 2000);
    }
  }
}