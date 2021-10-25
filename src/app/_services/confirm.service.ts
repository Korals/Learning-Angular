import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { ConfirmDialogComponent } from '../modals/confirm-dialog/confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmService {
  bsModelRef!: BsModalRef;

  constructor(private modalService: BsModalService) { }

  confirm(title = 'Confirmation', message = 'Are you sure?', btnOkText = 'Ok', btnCancelText = 'cancel'): Observable<boolean>{
    const config = {
      initialState: {
        title,
        message,
        btnOkText,
        btnCancelText
      }
    }
    this.bsModelRef = this.modalService.show(ConfirmDialogComponent, config);
    return new Observable<boolean>(this.GetResult());
  }

  private GetResult(){
    return (observer: { next: (arg0: any) => void; complete: () => void; }) =>{
      const subscription = this.bsModelRef.onHidden?.subscribe(() => {
        observer.next(this.bsModelRef.content.result);
        observer.complete();
      });

      return {
        unsubscribe() {
          subscription?.unsubscribe();
        }
      }
    }
  }
}
