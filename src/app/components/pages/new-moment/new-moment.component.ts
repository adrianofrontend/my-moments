import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Moment } from '../../../Moment';
import { MomentFormComponent } from '../../moment-form/moment-form.component';
import { MomentService } from '../../../services/moment.service';
import { MessagesService } from '../../../services/messages.service';

@Component({
  selector: 'app-new-moment',
  standalone: true,
  templateUrl: './new-moment.component.html',
  styleUrl: './new-moment.component.css',
  imports: [MomentFormComponent],
})
export class NewMomentComponent implements OnInit {
  btnText: string = 'Compartilhar!';
  image?: File;

  constructor(
    private momentService: MomentService,
    private router: Router,
    private messageService: MessagesService
  ) {}

  ngOnInit(): void {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.image = file;
  }

  async createHandler(moment: Moment) {
    const formData = new FormData();

    formData.append('title', moment.title);
    formData.append('description', moment.description);

    if (moment.image) {
      formData.append('image', moment.image);
    }

    this.momentService.createMoment(formData).subscribe();
    this.messageService.add('Momento adicionado com sucesso');

    this.router.navigate(['/']);
  }
}
