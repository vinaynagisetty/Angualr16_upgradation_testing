import { Component } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
    selector: 'app-deleteprovider',
    templateUrl: './deleteprovider.component.html',
    styleUrls: ['./deleteprovider.component.scss'],
    standalone: true,
    providers: [NgbModalConfig, NgbModal],
    imports:[NgbNavModule]
})
export class DeleteproviderComponent {
    constructor(config: NgbModalConfig, private modalService: NgbModal) {
		// customize default values of modals used by this component tree
		config.backdrop = 'static';
		config.keyboard = false;
	}
    open(content: any) {
		this.modalService.open(content);
	}
    active = 1;

}
