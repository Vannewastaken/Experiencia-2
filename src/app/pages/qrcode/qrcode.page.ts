import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QRCodeModule } from 'angularx-qrcode'; // Si tienes un servicio para QR

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.page.html',
  styleUrls: ['./qrcode.page.scss'],
})
export class QrcodePage implements OnInit {
  eventCode: string = '';
  isRegistered: boolean = false;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['qrData']) {
        const qrData = JSON.parse(params['qrData']);

        // Generar el string del código QR con la información del evento, RUT y correo
        this.eventCode = `Evento: ${qrData.nombre}\nFecha: ${qrData.fecha}\nRUT: ${qrData.rut}\nEmail: ${qrData.email}`;
        this.isRegistered = true;
      }
    });
  }
}
