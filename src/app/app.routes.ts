import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { DiaryComponent } from './modules/diary/diary.component';
import { AccountComponent } from './modules/account/account.component';
import { InventoryComponent } from './modules/inventory/inventory.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'diary',
        component: DiaryComponent
    },
    {
        path: 'account',
        component: AccountComponent
    },
    {
        path: 'inventory',
        component: InventoryComponent
    }
];
