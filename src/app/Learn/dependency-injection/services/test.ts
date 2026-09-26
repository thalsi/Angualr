import { Injectable, Service } from '@angular/core';

@Service()
export class Test {

    getData(){
        return 'Hello Test Serv'
    }
}
