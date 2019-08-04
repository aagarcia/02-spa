import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*Routes*/
import { FeatureRoutingModule } from './app.routes';


/*Servicios*/
import { HeroesService } from './servicios/heroes.service';

/**
 *  ng g c components/heroeTarjeta --spec=false -is
 * crea componentes nuevos sin pruebas unitarias y css
 */

/*Componentes*/
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    BuscadorComponent,
    HeroeTarjetaComponent
  ],
  imports: [
    BrowserModule,
    FeatureRoutingModule
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
