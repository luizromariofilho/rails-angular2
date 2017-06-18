import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ItemTypeService {

  // URL da nossa API
  private url: string = "http://localhost:3000/item_types";

  constructor(private http: Http) { }

  // Pega os item types na API
  getTypes(){
    return this.http.get(this.url)
      .map(res => res.json());
  }

  // Pega um item type na API
  getItemType(id){
    return this.http.get(this.url + '/' + id)
      .map(res => res.json());
  }

  // Adiciona um item type na API
  addItemType(item_type){
    return this.http.post(this.url, {'item_type': item_type})
      .map(res => res.json());
  }

  // Atualiza um item type na API
  updateItemType(item_type){
    return this.http.put(this.url + '/' + item_type.id, {'item_type': item_type})
      .map(res => res.json());
  }

  // Apaga um item type no servidor
  deleteItemType(id){
    return this.http.delete(this.url + '/' + id)
      .map(res => res.json());
  }

}