import { Component, OnInit } from '@angular/core';
import {ItemService} from "../../services/item.service";

@Component({
  selector: 'app-my-items',
  templateUrl: './my-items.component.html',
  styleUrls: ['./my-items.component.scss']
})
export class MyItemsComponent implements OnInit {

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
  }


}
