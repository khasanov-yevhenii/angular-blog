import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Post } from '../../models/post.interface';

@Component({
	selector: 'app-post',
	templateUrl: './post.component.html',
	styleUrls: ['./post.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostComponent {
	@Input() post: Nullable<Post>;
}
