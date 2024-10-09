import { Component } from '@angular/core'
import { SocialLinks } from '../../data'

@Component({
  selector: 'reports-visit-details',
  standalone: true,
  imports: [],
  templateUrl: './visit-details.component.html',
  styles: ``,
})
export class VisitDetailsComponent {
  socialData = SocialLinks
}
