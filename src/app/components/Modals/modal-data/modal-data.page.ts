import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AppointmentService } from '../../../services/appointment.service';
@Component({
  selector: 'app-modal-data',
  templateUrl: './modal-data.page.html',
  styleUrls: ['./modal-data.page.scss'],
})

export class ModalDataPage implements OnInit {
  @Input() data: any;

  private price;
  constructor(
    private modalControll: ModalController,
    private appoitment: AppointmentService
  ) { }

  ngOnInit() {        
     if (this.data.picture == null || this.data.picture == '') {
      this.data.picture = "/assets/img/doctor-avatar.png";
    }

    if(this.data.promotion) {
      this.price = this.data.price - Number(this.data.price * this.data.promotion)/100
    } else {
      this.price = this.data.price
    }
  }

  async closeModal() {
    await this.modalControll.dismiss();
  }

  async mkAppointment(data) {
    console.log(data)
    await this.appoitment.addAppointment(data);
  }

  buyPill(data) {
    console.log(data)
  }
}
