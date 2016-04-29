System.register(['angular2/core', 'ng2-alfresco-login/ng2-alfresco-login', 'angular2/router', 'ng2-alfresco-core/services'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, ng2_alfresco_login_1, router_1, services_1, ng2_alfresco_login_2;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng2_alfresco_login_1_1) {
                ng2_alfresco_login_1 = ng2_alfresco_login_1_1;
                ng2_alfresco_login_2 = ng2_alfresco_login_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (services_1_1) {
                services_1 = services_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(auth, router, alfrescoSettingsService) {
                    this.auth = auth;
                    this.router = router;
                    alfrescoSettingsService.host = 'http://192.168.99.100:8080';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: '<alfresco-login></alfresco-login>',
                        directives: [router_1.ROUTER_DIRECTIVES, ng2_alfresco_login_1.AlfrescoLoginComponent]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'Login', component: ng2_alfresco_login_1.AlfrescoLoginComponent, useAsDefault: true }
                    ]), 
                    __metadata('design:paramtypes', [ng2_alfresco_login_2.AlfrescoAuthenticationService, router_1.Router, services_1.AlfrescoSettingsService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map