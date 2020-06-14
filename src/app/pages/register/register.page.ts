import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  form = {}
  step :  any = 1;
  itemCheck = [
    {
      title: 'PRESSÃO ALTA',
      id: '1'
    },
    {
      title: 'PROBLEMAS DE VISÃO',
      id: '2'
    },
    {
      title: 'DORES DE CABEÇA FREQUENTES',
      id: '3'
    },
    {
      title: 'DORES NA COLUNA E/OU CORPO',
      id: '4'
    },
    {
      title: 'INCHAÇO NOS PÉS E/OU PERNAS',
      id: '5'
    },
    {
      title: 'ESTRESSE',
      id: '6'
    },
  ]
  constructor(public navCtrl: NavController) { 
  }

  ngOnInit() {
  }

  nextStep() {
    this.step++;   
  }

  previousStep(){
    this.step = this.step - 1;
    console.log(this.step)
  }

  backRegister(){
    this.navCtrl.back();
  }

  logForm() {
    console.log(this.form)

    this.navCtrl.navigateForward('login')

  }

}
