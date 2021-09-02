import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(
    private readonly _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const { contactId } = this._activatedRoute.snapshot.params;
    console.log('contactId', contactId);
  }

}
