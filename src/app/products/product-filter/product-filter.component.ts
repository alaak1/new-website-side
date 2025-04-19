import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

export interface FilterCriteria {
  search: string;
  coolingType: 'all' | 'fan' | 'none';
}

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html'
})
export class ProductFilterComponent implements OnInit {
  @Output() filterChange = new EventEmitter<FilterCriteria>();

  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      search: [''],
      coolingType: ['all']
    });

    this.form.valueChanges
      .pipe(debounceTime(300))
      .subscribe((val: FilterCriteria) => this.filterChange.emit(val));
  }
}
