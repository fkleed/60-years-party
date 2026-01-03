import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NotificationService } from '../../notification-service';
import { SupabaseService } from '../../supabase-service';

@Component({
  selector: 'app-acceptance-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './acceptance-form.html',
  styleUrl: './acceptance-form.css',
})
export class AcceptanceForm {

  protected readonly acceptanceDeadline = new Date(2026, 3, 1, 23, 59, 0, 0);

  private readonly defaultFormValues = {
    name: '',
    numberOfPersons: 1
  };

  private formBuilder = inject(FormBuilder);
  private notificationService = inject(NotificationService);
  private supabaseService = inject(SupabaseService);

  isSaving = signal(false);

  acceptanceForm = this.formBuilder.group({
    name: [this.defaultFormValues.name, Validators.required],
    numberOfPersons: [
      this.defaultFormValues.numberOfPersons,
      [Validators.required, Validators.min(1), Validators.max(5)]
    ],
  });

  get nameControl() {
    return this.acceptanceForm.get('name');
  }

  get numberOfPersonsControl() {
    return this.acceptanceForm.get('numberOfPersons');
  }

  async onSubmit() {

    if (this.isSaving()) return;

    this.isSaving.set(true);

    try {
      const nameToInsert = this.nameControl?.value ?? '';
      const numberOfPersonsToInsert = this.numberOfPersonsControl?.value ?? 0;

      await this.supabaseService.saveAcceptance(nameToInsert, numberOfPersonsToInsert);

      this.notificationService.showSuccessNotification('Gespeichert!');

      this.acceptanceForm.reset(this.defaultFormValues);

    } catch (error) {
      console.error(error);
      this.notificationService.showErrorNotification('Fehler beim Speichern!');
    } finally {
      this.isSaving.set(false);
    }
  }
}
