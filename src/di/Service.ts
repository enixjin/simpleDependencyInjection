/**
 * Created by enixjin on 4/4/18.
 */

export function Service(name?: string) {
    return function (target) {
        let injectName = name ? name : target.name;
        global.dependencyInjectionContainer.set(injectName, new target());
    }
}