import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-modal',
  template: `
    <div class="modal-header">
      <span>Kod weryfikacyjny</span>
      <button class="close" aria-label="Close" (click)="closeModal()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body" style='text-align:center'>
      <div class='btn btn-primary btn-demo btn-lg' style='font-size:70px'>{{ modalHeader }}</div>
      <hr/>
      <div>{{ modalContent }}</div>
    </div> 
  `,
})
export class ModalComponent {

  modalHeader: string;
  modalContent = `Wydaj dziecko tylko osobie, która jest w stanie powtórzyć ten kod.`;

  constructor(private activeModal: NgbActiveModal) { }

  closeModal() {
    this.activeModal.close();
  }
}
