import { Component } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
interface Menu{
  icon:string;
  name:string;
  redirecTo:string;
}
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  menu: Menu[]=[
    {
      icon:'person-circle-outline',
      name:'Mi Perfil',
      redirecTo:'/tabs/tab1'
    },
    {
      icon: 'calendar-outline',
      name: 'Eventos',
      redirecTo: '/eventos'  
    },

    {
      icon:'call-outline',
      name:'Contacto',
      redirecTo:'/contacto'
    },
    {
      icon:'close-circle-outline',
      name:'Cerrar sesión',
      redirecTo:'/login'
    }
    




  ]
  constructor(private authservice: AuthService,private router:Router) {}
   // Método para manejar la acción al hacer clic en un elemento del menú
   handleMenuItemClick(menuItem: Menu) {
    if (menuItem.name === 'Cerrar sesión') {
      this.logout(); // Llama al método de logout si el item es "Cerrar sesión"
    } else {
      this.router.navigate([menuItem.redirecTo]); // Redirige a la ruta correspondiente
    }
  }

  // Método para cerrar sesión
  logout() {
    this.authservice.logout(); // Llama al método de logout del AuthService
    this.router.navigate(['/login']); // Redirige al usuario a la página de inicio de sesión
  }
}
