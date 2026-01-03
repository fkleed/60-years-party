import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-acceptance-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './acceptance-form.html',
  styleUrl: './acceptance-form.css',
})
export class AcceptanceForm {

  private formBuilder = inject(FormBuilder);


  protected readonly acceptanceDeadline = new Date(2026, 3, 1, 23, 59, 0, 0);

  acceptanceForm = this.formBuilder.group({
    name: ['', Validators.required],
    numberOfPersons: [1, [Validators.required, Validators.min(1), Validators.max(5)]],
  });

  get nameControl() {
    return this.acceptanceForm.get('name');
  }
  

  get numberOfPersonsControl() {
    return this.acceptanceForm.get('numberOfPersons');
  }

  onSubmit() {
    console.log(this.acceptanceForm.value);
  }
}
