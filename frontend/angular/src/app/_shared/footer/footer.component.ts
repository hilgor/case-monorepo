import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, NgIf, RouterLink],
  providers: [ToastrService],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  @Input() isGridComponent = false;
  @Input() saveDisabled = false;
  @Input() save: (() => Observable<any>) = () => EMPTY;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private toastrService: ToastrService
  ) {}

  ngOnInit() {}

  onCancelClicked() {
    this.navigateBack();
  }

  onSaveClicked() {
    this.emitSave();
  }

  private navigateBack(): void {
    const lastPath = this.route.snapshot.url.reverse()[0];
    const navigateCommand = lastPath.path === 'edit' ? ['../../'] : ['../'];

    this.router.navigate(navigateCommand, {
      relativeTo: this.route,
    });
  }

  private emitSave() {
    this.save().subscribe({
      next: () => {
        this.navigateBack();
        this.toastrService.success('Saved successfully');
      },
      error: (err) => {
        this.toastrService.error(err, '', {
          enableHtml: true,
        });
      },
    });
  }
}
