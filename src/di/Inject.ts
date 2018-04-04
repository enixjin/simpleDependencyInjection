/**
 * Created by enixjin on 4/4/18.
 */

import "reflect-metadata";
import * as winston from "winston";

export function Inject(name?: string) {
    return (target: any, propertyKey: string) => {
        let type = Reflect.getMetadata("design:type", target, propertyKey);
        let injectName = name ? name : type.name;
        if(!global.dependencyInjectionContainer.get(injectName)){
            winston.error(`cannot find [${injectName}] for injecting, maybe you forget to add @Service to that class?`);
            throw new Error(`cannot find [${injectName}] for injecting, maybe you forget to add @Service to that class?`);
        }
        target[propertyKey] = global.dependencyInjectionContainer.get(injectName);
    }
}