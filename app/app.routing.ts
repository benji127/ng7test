import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AdminComponent } from './admin';
import { LoginComponent } from './login';
import { AuthGuard } from './_guards';
import { Role } from './_models';
import { ProductListComponent } from '/product-list';
import { ProductDetailsComponent} from '/product-details';
import { ShippingComponent} from '/shipping';
import { CartComponent } from  '/cart';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    { 
        path: 'admin', 
        component: AdminComponent, 
        canActivate: [AuthGuard], 
        data: { roles: [Role.Admin] } 
    },
    { 
        path: 'login', 
        component: LoginComponent 
    },
    {
     path: 'list', 
      component: ProductListComponent 
    },
    { path: 'products/:productId', component: ProductDetailsComponent },
    { path: 'cart', component: CartComponent },
    { path: 'shipping', component: ShippingComponent },


    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);