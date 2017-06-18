import { Component, OnInit } from '@angular/core';
// Importa nosso Service
import { ItemTypeService } from './shared/item-type.service';
// Importa nosso model
import {ItemType} from "./shared/item-type";

@Component({
  selector: 'app-item-type',
  templateUrl: './item-type.component.html',
  styleUrls: ['./item-type.component.css']
})
export class ItemTypeComponent implements OnInit {

  private types: ItemType[] = [];

  constructor(private itemTypeService: ItemTypeService) { }

  // Pega a listagem de types ao iniciar
  ngOnInit() {
    this.itemTypeService.getTypes()
      .subscribe(data => this.types = data);
  }

  // Apaga os itens
  deleteItemType(item_type) {
    if (confirm("Você tem certeza que quer deletar a item-types " + item_type.description + "?")) {
      var index = this.types.indexOf(item_type);

      this.types.splice(index, 1);

      this.itemTypeService.deleteItemType(item_type.id)
        .subscribe(null);
    }
  }

}