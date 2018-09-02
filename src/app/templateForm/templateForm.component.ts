import { Component, OnInit } from '@angular/core';

//import { ShowError } from './showError.component';
import { Hero } from '../shared/hero';

@Component({
  selector: 'template-driven-form',
  templateUrl: './templateForm.component.html'
})
export class TemplateFormComponent implements OnInit {
  model: Hero;  
  contributionFrequencies: string[];
  submitted: boolean = false;
  
  constructor() { }
  
  ngOnInit() {
      this.model = new Hero(0, 50, 10, 3, 'per day');

      this.contributionFrequencies = ['per day', 'per week', 'per month', 'per year'];
  }

  onSubmit() {
    this.submitted = true;
  }
}