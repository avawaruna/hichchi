import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@Component({
    selector: "app-auth-layout",
    imports: [CommonModule, RouterModule],
    templateUrl: "./auth-layout.component.html",
    styleUrl: "./auth-layout.component.scss",
})
export class AuthLayoutComponent {}
