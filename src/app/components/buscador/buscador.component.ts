import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  heroes: any[] = [];
  termino: string;

  constructor(private _activateRoute: ActivatedRoute,
              private _heroesService: HeroesService,
              private _router: Router) {
                /*this._activateRoute.params.subscribe( params => {
                  this.heroes = this._heroesService.buscarHeroes(params['termino']);
                }  );*/
  }

  ngOnInit() {
    this._activateRoute.params.subscribe( params => {
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
    });
  }

  verHeroe(idx: number) {
    this._router.navigate( ['/heroe', idx] );
  }

}
