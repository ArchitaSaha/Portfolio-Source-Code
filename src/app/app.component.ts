import { Component, HostListener } from '@angular/core';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

// @HostListener("window:scroll", [])
// @HostListener('window:scroll', ['$event'])
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'portfolio';
	scrollIcon = faChevronUp;

	darkTheme = true;

	images = [
		{
			// imageSrc: 'https://github.com/ArchitaSaha/Portfolio/blob/main/Associate%20Cloud%20Engineer.png?raw=true, https://github.com/ArchitaSaha/Portfolio/blob/main/Associate%20Cloud%20Engineer.png?raw=true 0.25x, https://github.com/ArchitaSaha/Portfolio/blob/main/Associate%20Cloud%20Engineer.png?raw=true 0.5x',
			imageSrc: 'https://chi01pap001files.storage.live.com/y4mueyoJeb_TDxn0vAwMG5ztfK5dmlfdA6b_HwOC6V2VMpEi9WN_XdW7QmKmIW9P_bKB4wOHvUG4wAo-fC8ChqJo-IF1RzNkumQyaocl66elYBh7eoZcyEB_0k4HPoUvtLjI5ZpUc-auwAZqrK6Hx1BgGcabrvdaplWKUIBvrswffO6SFNGmWexjRyY4g96sjDb9aeCrnuXX-Jk4eo90Us4KR8gSMmZ9iAWlzBJj1l_n3Q?encodeFailures=1&width=797&height=619',
			imageAlt: 'Associate Cloud Engineer'
		},
		{
			imageSrc: 'https://chi01pap001files.storage.live.com/y4mXpFS3W8yliPcHIFEhIwmG0Vy7stodYnyD0m4wCeulc67RQHrt_tR-0qpmpxQRRAMlwLgd4Nu7gdhQXvpGV0Wb5tQ9wVEPCotejZNtnGTw7Ll_gobUMDE5wypwQxTAaBoJnvr2ZoybSVljQ8hChkblXfheziF2qRczUbkeZfgIbvk-LHebBsMCB9wm6sqAvEVvbqQNXRtKCmFsP9crNduCltzMztKE-g6qqevdmnSL5Q?encodeFailures=1&width=1066&height=832',
			imageAlt: 'AWS Fundamentals : Going Cloud Native'
		},
		{
			imageSrc: 'https://chi01pap001files.storage.live.com/y4m048G5c1SsVRq4KJFQRHHWQ2pIRgZhp-OPhzqMF9hRpSpBvRUJNcFcvyNnvf5cIqxdS35nz9OkJ90inf_WQU2iEYNPiPqN_H32tRLNqaqpg0Jsvo0fVzfRyX28-QKTyz6INh4aEHolwczL91clCl3n7_zhVvU2Rx4bUa8PxTJtJrIbTnKdkld63XDkpWTp9bWttuWEekPfmln6pBeel-0rj8GWnhqdIgDu7H38P5nP-4?encodeFailures=1&width=1074&height=832',
			imageAlt: 'AWS Fundamentals : Addressing Security Risk'
		},
		{
			imageSrc: 'https://chi01pap001files.storage.live.com/y4mRrwW2mQovKTeq48QM3KFvbtnUZR5Xhvz06rhYJuOUQ-5LzDc3WB6wLGy-TGtGpU9kVfgN8p07Zx-RLinIig813aWA5SyeI7KbOhQLKTGu5LOS6t8nhd2bL5tDYnqj_4UTGUBQO9UNPuxjiy8MFq-JrUaPxYp_G_uYTb6nJ4Kx4gCRcwO9uxDQzUE5eSeVKeSxQAca_Bsd5neys2WaIrv-wZ5TiP7_kSf0hkOaD26pvg?encodeFailures=1&width=603&height=832',
			imageAlt: 'NPTEL : Programming In Java'
		},
		{
			imageSrc: 'https://chi01pap001files.storage.live.com/y4m0uNIczxL8YOth2ESdJY4pnNmODW-QnxE27YTBf3VZ1o4LHdrgFYAhxQYJZcHgWqZznOPYkDbwo2Smnfr0ZbbX1v9qqeMPlYxNpvHdcTlOkURWsxFXmzESsLCexYZ23PNKfA5erOSH3x6KgUII3ZYmry71FoV98cjx-MNZBDngw08eTbpalN486BBDDwywI1M8ICEXNmnDv6kJ9V8Qj0EV_2MJsQGzv-WOIaHK6Det18?encodeFailures=1&width=1175&height=832',
			imageAlt: 'Internshala : Core Java'
		}
	];

	toggleTheme(theme: boolean) {
		this.darkTheme = theme;
	}
}