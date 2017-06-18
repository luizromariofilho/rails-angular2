import { Component, OnInit } from '@angular/core';
// Importa nosso service para conseguirmos falar com a API
import { ItemTypeService } from '../shared/item-type.service';
// Importa nosso Model
import {ItemType} from "../shared/item-type";
// Importa o Router para podermos conseguir pegar o parâmetro id
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-type-form',
  templateUrl: './item-type-form.component.html',
  styleUrls: ['./item-type-form.component.css']
})
export class ItemTypeFormComponent implements OnInit { 
   
  // Cria uma variável string para falarmos se é uma edição ou criação de Item Type
  title: string;
  // Pega nosso Model e coloca na variável itemType
  itemType: ItemType = new ItemType();
 
  constructor(
    //Declara nossas dependências
    private itemTypeService: ItemTypeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
 
  // Esse método rola enquanto a página é carregada para preencher
  // a question caso seja edição
  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];
 
      this.title = id ? 'Edit Faq Question' : 'Create Faq Question';
 
      if (!id)
        return;
 
      this.itemTypeService.getItemType(id)
        .subscribe(
          itemType => this.itemType = itemType,
          response => {});
    });
  }
 
  // Nós chamamos esse método no form quando estamos prontos para criar
  // um tipo ou editar
  save() {
    var result;
 
    if (this.itemType.id){
      result = this.itemTypeService.updateItemType(this.itemType);
    } else {
      result = this.itemTypeService.addItemType(this.itemType);
    }
 
    result.subscribe(data => this.router.navigate(['/']));
  }
 
}
