import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { LocalStorageService } from 'angular-2-local-storage';

// Providers
import { MyProvider } from '../providers/my-provider';
//import { LoginService } from '../providers/loginService';

// Models
import { StoreModel } from '../models/storeModel';
import { ProductModel } from '../models/productModel';
//import { ScheduleModel } from '../models/scheduleModel';
//import { PaymentsModel } from '../models/paymentsModel';
//import { DelivStoreModel } from '../models/delivStoreModel';
import { BannerModel } from '../models/bannerModel';

@Injectable()
export class StoreProvider extends MyProvider {

    // Products array
    products: ProductModel[] = [];

    // Schedules array
    //schedules: ScheduleModel[] = [];
    //payments: PaymentsModel[] = [];

    // Array to save object storeModel
    stores: StoreModel[] = [];

    // Forms of delivery array
    //delivStore: DelivStoreModel[] = [];

    // Banners array
    banners: BannerModel[] = [];

    constructor(public http: Http, public localStorage: LocalStorageService) {
        super(http, localStorage);
    }

    // getStore function: obtain information of store Botica Junin
    getStore(chainId, storeId) {

        // Initial value to the observer is null
        let observer = new BehaviorSubject(null);

        this.getBase('chain/' + chainId + '/store/' + storeId 
                     + '/active/', null)
            .subscribe(storeData => {
                var store: StoreModel = new StoreModel(storeData);
                observer.next(store);
            }, error => {
                observer.next(error);
            });
        return observer;          
    }

    // getBanners function: obtain banners from specific store Botica Junin
    getBanners(chainId, storeId) {

        this.banners = [];

        // Initial value to the observer is null
        let observer = new BehaviorSubject(null);

        this.getBase('chain/' + chainId + '/store/' + storeId 
                     + '/banners/active/', null)
            .subscribe(banners => {
                for (var ban of <any>banners) {
                    var banner: BannerModel = new BannerModel(ban);
                    this.banners.push(banner);
                }
                observer.next(this.banners);
            }, error => {
                observer.next(error);
            });
        return observer;    
    }

    // getBestsellersProductsStore function: obtain information of bestsellers products in Botica store
    //                                       when user is not logged
    /*getBestsellersProductsStore(chainId, storeId) {

        this.products = [];

        // Initial value to the observer is null
        let observer = new BehaviorSubject(null);

        this.getBase('chain/' + chainId + '/store/' + storeId + 
                     '/bestsellers/', null)
            .subscribe(products => {
                products.forEach(productsData => {
                    var product: ProductModel = new ProductModel(productsData);
                    this.products.push(product);
                });
                observer.next(this.products);
            }, error => {
                observer.next(error);
            });
        return observer;   
    }

    // getBestsellersProductsUser function: obtain information of bestsellers products in Botica store
    //                                      from specific user
    getBestsellersProductsUser(applicationId, userId, storeId) {

        this.products = [];

        // Initial value to the observer is null
        let observer = new BehaviorSubject(null);

        this.getBase('application/' + applicationId + '/client/' + userId + 
                     '/store/' + storeId + '/bestsellers/', null)
            .subscribe(products => {
                products.forEach(productsData => {
                    var product: ProductModel = new ProductModel(productsData);
                    this.products.push(product);
                });
                observer.next(this.products);
            }, error => {
                observer.next(error);
            });
        return observer;   
    }

    // getSchedule function: obtain information of schedule in Botica store
    /*getSchedule(chainId, storeId) {

        // Initial value to the observer is null
        let observer = new BehaviorSubject(null);

        this.schedules = [];

        this.getBase('chain/' + chainId + '/store/' + storeId + 
                     '/schedules/', this.headerAuthentication())
            .subscribe(schedulesData => {
                var schedule: ScheduleModel = new ScheduleModel(schedulesData);
                this.schedules.push(schedule);
                observer.next(this.schedules);
            }, error => {
                observer.next(error);
            });
        return observer; 
    }

    // getSchedule function: obtain information of schedule in Botica store
    getPayments(chainId, storeId) {

        // Initial value to the observer is null
        let observer = new BehaviorSubject(null);

        this.payments = [];

        this.getBase('chain/' + chainId + '/store/' + storeId + 
                     '/payments/', this.headerAuthentication())
            .subscribe(payments => {
                payments.forEach(paymentData => {
                    var payment: PaymentsModel = new PaymentsModel(paymentData);
                    this.payments.push(payment);
                });
                observer.next(this.payments);
            }, error => {
                observer.next(error);
            });
        return observer; 
    }     

    // getDelivStores function: obtain information of existent type of delivery in
    //                          Botica store
    getDelivStores(chainId, storeId) {

        this.delivStore = [];

        // Initial value to the observer is null
        let observer = new BehaviorSubject(null);

        this.getBase('chain/' + chainId + '/store/' + storeId + 
                     '/delivstores/', this.headerAuthentication())
            .subscribe(delivStore => {
                delivStore.forEach(delivStoreData => {
                    var deliv: DelivStoreModel = new DelivStoreModel(delivStoreData);
                    this.delivStore.push(deliv);
                });
                observer.next(this.delivStore);
            }, error => {
                observer.next(error);
            });
        return observer; 
    }*/
  
    // getStores function: obtain information of different Botica Junin stores       
    /*getStores(chainId) {

        this.stores = [];

        // Initial value to the observer is null
        let observer = new BehaviorSubject(null);

        this.getBase('chain/' + chainId + '/stores/active/', null)
            .subscribe(stores => {
                stores.forEach(storeData => {
                    var store: StoreModel = new StoreModel(storeData);
                    this.stores.push(store);
                })
                observer.next(this.stores);
            }, error => {
                observer.next(error);
            });
        return observer; 
    }*/
    
}